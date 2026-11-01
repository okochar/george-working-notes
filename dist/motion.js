const page = document.documentElement;
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const targets = [...document.querySelectorAll([
  '.collection-switcher', '.hero-copy > *', '.thinking-area', '.section-heading',
  '.entry', '.more-entries', '.graphics-intro > :not(.page-number)', '.graphic-entry',
  '.about-teaser > :not(.page-number):not(.paper-note)',
  '.chapter-intro > :not(.page-number)', '.timeline-item', '.about-prose > p',
  '.profile-paper', '.tool-section > h2', '.tool-groups > div',
  '.contact-options > div', '.footer-invitation > *'
].join(','))];
let observer;
let started = false;

const paused = () => page.classList.contains('intro-active') && !page.classList.contains('intro-revealing');
function reveal(element, delay = 0) {
  element.style.setProperty('--motion-delay', delay + 'ms');
  element.classList.add('motion-visible');
  observer?.unobserve(element);
}
function revealViewport(stagger = true) {
  if (!started || paused()) return;
  let index = 0;
  targets.forEach(element => {
    if (element.classList.contains('motion-visible') || !element.getClientRects().length) return;
    const box = element.getBoundingClientRect();
    if (box.bottom > 0 && box.top < window.innerHeight - 20) reveal(element, stagger ? Math.min(index++ * 65, 325) : 0);
  });
}
function setupMotion() {
  if (motionPreference.matches || !('IntersectionObserver' in window)) return;
  try {
    observer = new IntersectionObserver(entries => {
      if (paused()) return;
      entries.forEach(entry => { if (entry.isIntersecting) reveal(entry.target); });
    }, {threshold:.08, rootMargin:'0px 0px -35px 0px'});
    targets.forEach(element => { element.classList.add('motion-item'); observer.observe(element); });
    started = true;
    page.classList.add('motion-enabled');
    requestAnimationFrame(() => revealViewport());
  } catch {
    page.classList.remove('motion-enabled');
    observer?.disconnect();
    started = false;
  }
}
document.addEventListener('notebook:opening-start', () => {
  if (!started) return;
  targets.forEach(element => {
    element.classList.remove('motion-visible');
    element.style.removeProperty('--motion-delay');
    observer.observe(element);
  });
});
document.addEventListener('notebook:opening-reveal', () => revealViewport());
document.addEventListener('notebook:opening-complete', () => revealViewport());
document.addEventListener('notebook:collection-change', () => requestAnimationFrame(() => revealViewport()));
window.addEventListener('hashchange', () => requestAnimationFrame(() => revealViewport()));
window.addEventListener('pageshow', () => requestAnimationFrame(() => revealViewport(false)));
motionPreference.addEventListener('change', event => {
  if (event.matches) {
    page.classList.remove('motion-enabled');
    observer?.disconnect();
    started = false;
  } else setupMotion();
});
setupMotion();
