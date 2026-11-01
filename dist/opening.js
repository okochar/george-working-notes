const root = document.documentElement;
const opening = document.querySelector('#opening-screen');
const canvas = opening.querySelector('.opening-canvas');
const mask = opening.querySelector('#opening-cutout');
const hole = opening.querySelector('#opening-hole');
const ring = opening.querySelector('#opening-ring');
const portal = opening.querySelector('#opening-portal');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const skip = opening.querySelector('[data-skip-opening]');
const main = document.querySelector('#main');
let active = false;
let frame = 0;
let safetyTimer = 0;
let sequence = 0;
let geometry = null;

function rememberOpening() {
  try { sessionStorage.setItem('george-notebook-opening-v1', 'seen'); } catch {}
}

function finishOpening({ remember = true, focus = true } = {}) {
  const wasActive = active;
  active = false;
  sequence += 1;
  cancelAnimationFrame(frame);
  clearTimeout(safetyTimer);
  if (opening.open) opening.close();
  opening.classList.remove('is-writing', 'is-revealing');
  root.classList.remove('intro-active', 'intro-pending', 'intro-revealing');
  if (remember && wasActive) rememberOpening();
  if (focus && wasActive) {
    main.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

function measurePortal() {
  const bounds = canvas.getBoundingClientRect();
  const letter = portal.getBoundingClientRect();
  const x = letter.left - bounds.left + letter.width * .51;
  const y = letter.top - bounds.top + letter.height * .49;
  canvas.setAttribute('viewBox', '0 0 ' + bounds.width + ' ' + bounds.height);
  mask.setAttribute('width', bounds.width);
  mask.setAttribute('height', bounds.height);
  for (const ellipse of [hole, ring]) {
    ellipse.setAttribute('cx', x);
    ellipse.setAttribute('cy', y);
  }
  geometry = {
    x, y,
    innerX: letter.width * .255,
    innerY: letter.height * .245,
    stroke: letter.width * .15,
    radius: Math.hypot(Math.max(x, bounds.width - x), Math.max(y, bounds.height - y)) + 32
  };
}

function paintReveal(progress) {
  // An ellipse starts inside the O's counter and gradually becomes a full-screen circle.
  const eased = progress < .5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
  const rx = geometry.innerX + (geometry.radius - geometry.innerX) * eased;
  const ry = geometry.innerY + (geometry.radius - geometry.innerY) * eased;
  const stroke = geometry.stroke * (1 - eased) + 1.2 * eased;
  hole.setAttribute('rx', rx);
  hole.setAttribute('ry', ry);
  ring.setAttribute('rx', rx + stroke / 2);
  ring.setAttribute('ry', ry + stroke / 2);
  ring.setAttribute('stroke-width', stroke);
  ring.setAttribute('opacity', (1 - Math.max(0, (progress - .55) / .45)) * .96);
}

async function startOpening() {
  if (active) return;
  if (reducedMotion.matches || typeof opening.showModal !== 'function') {
    finishOpening({ remember: false, focus: false });
    return;
  }
  active = true;
  const currentSequence = ++sequence;
  root.classList.add('intro-active');
  root.classList.remove('intro-pending');
  opening.classList.remove('is-writing', 'is-revealing');
  hole.setAttribute('rx', '0');
  hole.setAttribute('ry', '0');
  ring.setAttribute('opacity', '0');
  window.scrollTo({ top: 0, behavior: 'instant' });
  // A hard upper bound keeps access independent of animation or font loading.
  safetyTimer = setTimeout(() => finishOpening(), 5500);
  try {
    opening.showModal();
    measurePortal();
    await Promise.race([
      document.fonts.load('700 100px "DM Sans"'),
      new Promise(resolve => setTimeout(resolve, 700))
    ]);
    if (!active || currentSequence !== sequence) return;
    opening.classList.add('is-writing');
    const started = performance.now();
    function tick(now) {
      if (!active || currentSequence !== sequence) return;
      const elapsed = now - started;
      if (elapsed >= 1650) {
        if (!opening.classList.contains('is-revealing')) {
          measurePortal();
          opening.classList.add('is-revealing');
          root.classList.add('intro-revealing');
        }
        paintReveal(Math.min(1, (elapsed - 1650) / 1150));
      }
      if (elapsed >= 2800) {
        finishOpening();
        return;
      }
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
  } catch {
    finishOpening();
  }
}

skip.addEventListener('click', () => finishOpening());
opening.addEventListener('cancel', event => {
  event.preventDefault();
  finishOpening();
});
window.addEventListener('resize', () => {
  if (active) measurePortal();
});
window.addEventListener('hashchange', () => {
  if (active) finishOpening();
});
window.addEventListener('pageshow', event => {
  if (event.persisted) finishOpening({ remember: false, focus: false });
});
reducedMotion.addEventListener('change', event => {
  if (event.matches) finishOpening();
});

const footerLinks = document.querySelector('.footer-bottom>div');
const replay = document.createElement('button');
replay.type = 'button';
replay.className = 'opening-replay';
replay.textContent = 'Replay opening ↻';
replay.addEventListener('click', () => startOpening());
footerLinks.append(replay);

if (root.classList.contains('intro-active')) startOpening();
