const collections = {
  lageo: {
    number: 'G.01', title: 'LAGEO', kind: 'Event campaign / Fashion',
    description: 'Two visual directions for the LAGEO fashion event: an invitation to designers and an anticipation poster.',
    images: [
      {src:'assets/graphics/lageo-designers.png', label:'Call for designers', alt:'LAGEO 2025 call for designers poster with Nigerian cultural fashion, fabric, and tailoring details'},
      {src:'assets/graphics/lageo-fashion.png', label:'The fashion edition', alt:'LAGEO anticipation poster with two fashion models, cream serif typography, and dark gold tones'}
    ]
  },
  entryza: {
    number: 'G.02', title: 'Entryza', kind: 'Campaign poster / Entertainment',
    description: 'A campaign visual bringing music, events, and travel together through product imagery, concert photography, and blue accents.',
    images: [{src:'assets/graphics/entryza-campaign.png', label:'Discover. Book. Experience.', alt:'Entryza entertainment platform campaign poster showing music, event and travel interfaces on a laptop and phones'}]
  },
  frozen: {
    number: 'G.03', title: 'Frozen In Time', kind: 'Brand identity / Accessories',
    description: 'A soft colour palette and a yarn-inspired detail give this identity a playful, handmade character.',
    images: [{src:'assets/graphics/frozen-identity.png', label:'Frozen In Time identity', alt:'Frozen In Time identity with blue and pink type, a yarn motif, and a warm cream background'}]
  }
};

const graphicDialog = document.querySelector('#graphic-dialog');
const graphicImage = document.querySelector('#graphic-image');
const imageChoices = document.querySelector('.graphic-image-choices');
const collectionButtons = [...document.querySelectorAll('[data-collection]')];
let activeCollection = 'ui';
let currentGraphic = null;
let imageIndex = 0;
let returnControl = null;

function chooseCollection(collection) {
  const changed = activeCollection !== collection;
  activeCollection = collection;
  collectionButtons.forEach(button => {
    const active = button.dataset.collection === collection;
    button.setAttribute('aria-selected', String(active));
    button.tabIndex = active ? 0 : -1;
    document.querySelector('#collection-' + button.dataset.collection).hidden = !active;
  });
  if (changed) document.dispatchEvent(new CustomEvent('notebook:collection-change'));
}

function chooseImage(index) {
  const entry = collections[currentGraphic];
  if (!entry) return;
  imageIndex = (index + entry.images.length) % entry.images.length;
  const artwork = entry.images[imageIndex];
  graphicImage.src = artwork.src;
  graphicImage.alt = artwork.alt;
  document.querySelector('#graphic-caption').textContent = artwork.label;
  document.querySelector('#graphic-original').href = artwork.src;
  document.querySelector('#graphic-count').textContent = `${imageIndex + 1} / ${entry.images.length}`;
  imageChoices.querySelectorAll('button').forEach((button, i) => button.setAttribute('aria-pressed', String(i === imageIndex)));
}

function showGraphic(slug) {
  const entry = collections[slug];
  if (!entry) return;
  if (graphicDialog.open && currentGraphic === slug) return;
  currentGraphic = slug;
  document.querySelector('#graphic-number').textContent = entry.number;
  document.querySelector('#graphic-title').textContent = entry.title;
  document.querySelector('#graphic-kind').textContent = entry.kind;
  document.querySelector('#graphic-description').textContent = entry.description;
  imageChoices.replaceChildren();
  entry.images.forEach((image, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = image.label;
    button.addEventListener('click', () => chooseImage(index));
    imageChoices.append(button);
  });
  chooseImage(0);
  const order = Object.keys(collections);
  const next = order[(order.indexOf(slug) + 1) % order.length];
  document.querySelector('#next-graphic').textContent = `Next visual: ${collections[next].title} →`;
  if (!graphicDialog.open) graphicDialog.showModal();
  graphicDialog.scrollTop = 0;
  document.body.classList.add('entry-opened');
  document.title = `${entry.title} — George’s Visual Notes`;
  graphicDialog.querySelector('.close-graphic').focus({preventScroll:true});
}

function closeGraphic() {
  if (!graphicDialog.open) return;
  graphicDialog.close();
  if (!document.querySelector('#project-dialog').open) document.body.classList.remove('entry-opened');
  if (returnControl && !returnControl.closest('[hidden]')) returnControl.focus({preventScroll:true});
  currentGraphic = null;
}

function routeCollection() {
  const [chapter, slug] = location.hash.slice(1).split('/');
  if (chapter === 'graphics') {
    chooseCollection('graphics');
    if (collections[slug]) {
      // On a direct link, the opening keeps the top layer until its reveal finishes.
      if (!document.documentElement.classList.contains('intro-active')) showGraphic(slug);
    } else {
      closeGraphic();
      document.title = 'Graphic Design — George’s Working Notes';
    }
  } else {
    closeGraphic();
    if (!chapter || chapter === 'work' || chapter === 'selected-work') chooseCollection('ui');
  }
}

document.addEventListener('click', event => {
  const choice = event.target.closest('[data-collection]');
  if (choice) {
    const next = choice.dataset.collection === 'graphics' ? 'graphics' : 'work';
    if (location.hash === '#' + next) routeCollection();
    else location.hash = next;
    return;
  }
  const artwork = event.target.closest('[data-graphic]');
  if (artwork) {
    returnControl = artwork;
    location.hash = 'graphics/' + artwork.dataset.graphic;
  }
});

document.querySelector('.collection-tabs').addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  const index = collectionButtons.indexOf(document.activeElement);
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : (index + 1) % 2;
  collectionButtons[next].focus();
  collectionButtons[next].click();
});
document.querySelector('.close-graphic').addEventListener('click', () => { location.hash = 'graphics'; });
graphicDialog.addEventListener('cancel', event => { event.preventDefault(); location.hash = 'graphics'; });
graphicDialog.addEventListener('click', event => { if (event.target === graphicDialog) location.hash = 'graphics'; });
graphicDialog.addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight'].includes(event.key) || !currentGraphic) return;
  event.preventDefault();
  chooseImage(imageIndex + (event.key === 'ArrowRight' ? 1 : -1));
});
document.querySelector('#next-graphic').addEventListener('click', () => {
  const order = Object.keys(collections);
  location.hash = 'graphics/' + order[(order.indexOf(currentGraphic) + 1) % order.length];
});
window.addEventListener('hashchange', routeCollection);
document.addEventListener('notebook:opening-complete', routeCollection);
routeCollection();
