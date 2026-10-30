const icons = {
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  building: '<path d="M4 21V5h10v16M14 10h6v11M2 21h20M7 8h1m3 0h0M7 12h1m3 0h0M7 16h1m3 0h0M17 13h0m0 4h0"/>',
  file: '<path d="M5 2h10l4 4v16H5zM15 2v5h4M8 11h8M8 15h8M8 19h5"/>',
  pencil: '<path d="m4 16 11-12 5 5L9 21H3zM13 6l5 5M4 16l5 5M15 4l2-2 5 5-2 2"/>',
  'check-square': '<path d="M20 12v8H4V4h12M8 11l4 4L22 5"/>',
  search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
  upload: '<path d="M12 16V3m-5 5 5-5 5 5M4 14v7h16v-7"/>',
  copy: '<rect x="8" y="8" width="12" height="13" rx="1"/><path d="M16 8V3H3v13h5"/>',
  ticket: '<path d="M3 5h18v5a2 2 0 0 0 0 4v5H3v-5a2 2 0 0 0 0-4V5ZM15 5v3m0 3v2m0 3v3"/>',
  book: '<path d="M12 5v16M3 3c4-1 7 0 9 2 2-2 5-3 9-2v16c-4-1-7 0-9 2-2-2-5-3-9-2V3Z"/>',
  sparkles: '<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7ZM21 2v4m-2-2h4"/>',
  car: '<path d="m4 10 2-6h12l2 6M3 10h18v9H3zM6 19v3m12-3v3M6 14h2m8 0h2M4 10h16"/>'
};

const projects = {
  campuscrib: {
    number: '001', title: 'CampusCrib', subtitle: 'Building trust into student housing.', category: 'Student housing / Product development', role: 'Co-founder & lead designer', time: '2025 — Present', status: 'In development',
    links: [{label:'Open live preview',url:'https://campuscrib-three.vercel.app/'}],
    galleryLabel: 'From my local CampusCrib build',
    gallery: [
      {src:'assets/projects/campuscrib-home-desktop.jpg',label:'Homepage / desktop',alt:'CampusCrib local homepage with student housing preferences and a friendly green house illustration'},
      {src:'assets/projects/campuscrib-browse-desktop.jpg',label:'Discovery & filters / desktop',alt:'CampusCrib local accommodation discovery screen with school, property, distance, verification and budget filters'},
      {src:'assets/projects/campuscrib-property-desktop.jpg',label:'Property details & listed fees',alt:'CampusCrib local property detail screen showing a property photo, itemised tenancy fees and landlord contact entry point'},
      {src:'assets/projects/campuscrib-waitlist-desktop.jpg',label:'Pre-launch waitlist',alt:'CampusCrib local pre-launch waitlist design with an email field and product value propositions'},
      {src:'assets/projects/campuscrib-landlord-desktop.jpg',label:'Landlord onboarding',alt:'CampusCrib local landlord registration screen with role selection and a two-step account flow'},
      {src:'assets/projects/campuscrib-home-mobile.jpg',label:'Homepage / mobile',alt:'CampusCrib local mobile homepage showing the responsive housing preference and discovery controls'},
      {src:'assets/projects/campuscrib-browse-mobile.jpg',label:'Discovery / mobile',alt:'CampusCrib local mobile accommodation discovery interface with filters and listing preview'}
    ],
    context: 'CampusCrib is a student housing marketplace in development, focused on verified off-campus accommodation. The product work centres on helping students discover accommodation with useful listing information and clearer trust cues.',
    contributions: ['Help define product priorities and the overall product concept.', 'Develop the responsive interface system and front-end architecture.', 'Design accommodation discovery around property search, filtering, listing information, and trust cues.', 'Prepare business, stakeholder, and investor materials during development.'],
    focus: 'Trust is part of the journey',
    note: 'Accommodation discovery involves more than a list of properties. Search, listing information, and verification cues need to work together so students can understand what they are looking at.',
    details: 'Captured from my local CampusCrib build on 30 October 2026: discovery, property details, the waitlist, and landlord onboarding, with desktop and mobile views. The marketplace is still in development; listing data shown documents the interface rather than property availability or product outcomes.',
    workflow: [['Discover', 'Property search and filtering help structure accommodation discovery.'], ['Understand', 'Listing information gives each option the context a student needs to evaluate it.'], ['Build trust', 'Trust cues support the product’s focus on verified off-campus accommodation.']]
  },
  phcworkhub: {
    number: '002', title: 'Phcworkhub', subtitle: 'A clearer path through complex paperwork.', category: 'Tax automation / Business documents', role: 'Lead UI/UX designer & product tester', time: 'Design: Aug 2024 — Feb 2025 · Testing: 2024 — Apr 2025', status: 'Design & interface review',
    links: [{label:'Visit product website',url:'https://www.phcworkhub.com/'}],
    context: 'The platform covered tax automation, business documents, and estate paperwork. My design work organised complex requirements into onboarding, multi-step forms, document generation, and dashboard navigation.',
    contributions: ['Work with stakeholders to define scope, timelines, and deliverables.', 'Structure complex requirements into manageable form sections and user journeys.', 'Create reusable patterns for signatures, uploads, validation states, and responsive layouts.', 'Collaborate with front-end developers on implementation and technical constraints.', 'Test deployed interfaces against user requirements and communicate actionable usability feedback.'],
    focus: 'The form is a journey',
    note: 'Forms have many small states: a required field, an upload, a signature, a validation message. Reusable patterns help keep those moments understandable across different document types.',
    details: 'The design and testing roles offered two views of the product: the intended experience and the deployed interface. My contributions included identifying inconsistencies and providing feedback for revision.',
    workflow: [['Onboard', 'Organise onboarding so people can find the document workflow they need.'], ['Complete', 'Use structured form sections, signature fields, uploads, and validation states.'], ['Generate', 'Connect form submission to document generation and dashboard navigation.'], ['Review', 'Check the deployed interface against requirements and communicate issues clearly.']]
  },
  trevidia: {
    number: '003', title: 'Trevidia', subtitle: 'Making invoicing feel organised.', category: 'B2B SaaS / Invoicing & collaboration', role: 'Junior designer', time: 'Apr 2025 — Jul 2025', status: 'Product design',
    links: [{label:'Visit product website',url:'https://trevidia.com/'}],
    context: 'Trevidia is a B2B SaaS platform for invoicing, billing, and team workflows. I contributed responsive invoice templates, dashboards, and role-based collaboration flows.',
    contributions: ['Design invoice templates and dashboards for business-facing workflows.', 'Work on role-based flows covering invoice comments, tags, attachments, and feedback.', 'Adapt screens for desktop, tablet, and mobile using auto-layout and constraints.', 'Standardise spacing, layout behaviour, and reusable components for developer handover.'],
    focus: 'Consistency is useful',
    note: 'An invoicing experience has to stay coherent across screen sizes and team roles. The work included layout behaviour and reusable patterns, alongside individual screens.',
    details: 'My contributions focused on responsive design, collaboration, and preparation for implementation. The preview is an illustrative interface study rather than a screenshot of the live product.',
    workflow: [['Create', 'Invoice templates and dashboard layouts organise the information.'], ['Collaborate', 'Role-based flows include comments, tags, attachments, and feedback.'], ['Adapt', 'Auto-layout, constraints, and reusable components support different screen sizes.'], ['Hand over', 'Standardised spacing and component behaviour make the designs ready for implementation.']]
  },
  entryza: {
    number: '004', title: 'Entryza', subtitle: 'Connecting the journey across ticketing and mobility.', category: 'Ticketing / Mobility', role: 'Junior product designer', time: 'Apr 2026 — Present', status: 'Current role', icon: 'ticket',
    links: [{label:'Visit product website',url:'https://thentryza.com/'},{label:'View on Google Play',url:'https://play.google.com/store/apps/details?id=com.thentryza.entryza_mobile'}],
    context: 'Entryza is a ticketing and mobility platform serving users in Nigeria and Cameroon. My work contributes responsive mobile interfaces and components within an evolving design system.',
    contributions: ['Contribute customer onboarding flows.', 'Design event and music cards, calls to action, and reusable UI components.', 'Coordinate feedback and design changes with contributors.', 'Prepare consistent, responsive designs to support developer handoff.'],
    focus: 'The shared details matter', note: 'Reusable components and coordinated feedback help different parts of a product feel connected. My work supports that consistency across mobile interfaces.',
    details: 'This is a current design role. The entry describes my contributions rather than claiming ownership of the entire platform.',
    workflow: [['Onboard', 'Contribute structured onboarding flows for customers.'], ['Discover', 'Work on event and music cards and calls to action.'], ['Connect', 'Coordinate component changes, feedback, and developer handoff.']]
  },
  bookshelf: {
    number: '005', title: 'The Bookshelf App', subtitle: 'From discovering a book to finding your next read.', category: 'Reading / Digital & physical books', role: 'Product designer', time: 'Selected project', status: 'Design project', icon: 'book',
    gallery: [
      {src:'assets/projects/bookshop-onboarding.png',label:'Welcome & reading features',alt:'Four original Bookshop mobile screens showing the identity, book discovery, audiobooks, and device access'},
      {src:'assets/projects/bookshop-account.png',label:'Account creation & verification',alt:'Original Bookshop screens for registration, sign in, email verification, and welcome'},
      {src:'assets/projects/bookshop-identity.jpg',label:'The Bookshop identity',alt:'The Bookshop red book logo and wordmark on a cream background'}
    ],
    context: 'A reading platform with school and individual user journeys, spanning digital and physical book access. The mobile screens shown here use The Bookshop identity.',
    contributions: ['Design onboarding and book-browsing journeys.', 'Create book details, cart, checkout, and subscription interfaces.', 'Develop reusable patterns for previews and audio controls.'],
    focus: 'One platform, different journeys', note: 'School and individual journeys bring different needs to the same platform. The design work connected discovery, reading features, and transactions.',
    details: 'The project scope included onboarding, browsing, checkout, and subscriptions. The gallery contains my original Bookshop identity, feature introduction, and account-flow designs.',
    workflow: [['Discover', 'Onboarding, browsing, and book details introduce the available reading experience.'], ['Explore', 'Previews and audio controls support exploring a title.'], ['Access', 'Cart, checkout, and subscriptions connect discovery to book access.']]
  },
  frozen: {
    number: '006', title: 'Frozen In Time', subtitle: 'From brand identity to checkout.', category: 'Accessories / E-commerce', role: 'Branding, web development & planning', time: 'Selected project', status: 'Brand & website project', icon: 'sparkles',
    context: 'Frozen In Time is a crochet and resin accessories brand. The project connected its visual identity, website, payments, and go-to-market planning.',
    contributions: ['Lead the brand identity work.', 'Develop the website.', 'Integrate payments into the shopping experience.', 'Lead go-to-market planning for the brand.'],
    focus: 'The whole experience', note: 'This project brings together the business and digital sides of the work: how a brand presents itself, how the website works, and how customers can make a purchase.',
    details: 'The portfolio entry reflects the branding, development, payment integration, and planning scope described in my experience.',
    workflow: [['Identity', 'Establish the visual identity for the accessories brand.'], ['Website', 'Develop the brand’s website and shopping experience.'], ['Checkout', 'Integrate payments as part of the customer journey.'], ['Plan', 'Connect the digital experience to go-to-market planning.']]
  },
  felx: {
    number: '007', title: 'Felx', subtitle: 'Making a car rental journey easier to follow.', category: 'Car rental / Booking', role: 'Product designer', time: 'Selected project', status: 'Design project', icon: 'car',
    gallery: [
      {src:'assets/projects/felx-landing.png',label:'Landing page & booking search',alt:'Original Felx Inc landing page design with car imagery, calls to action, and a rental search form'},
      {src:'assets/projects/felx-services.png',label:'Services & value proposition',alt:'Original Felx website design showing the value proposition and rental-service options'},
      {src:'assets/projects/felx-fleet.png',label:'Fleet & company story',alt:'Original Felx website design showing vehicle cards and the company story'},
      {src:'assets/projects/felx-footer.png',label:'Reviews & footer design',alt:'Original Felx website design showing testimonial layout and footer'},
      {src:'assets/projects/felx-full-page.png',label:'Full landing page',alt:'Complete original Felx Inc landing page design',full:true},
      {src:'assets/projects/felx-identity.png',label:'Felx identity',alt:'Original Felx Inc wordmark with a car image'}
    ],
    context: 'A car rental platform with a design scope covering availability, pick-up and return scheduling, checkout, confirmation, and receipts. These original website designs show the Felx Inc rental brand.',
    contributions: ['Design availability and vehicle-booking interfaces.', 'Structure pick-up and return scheduling.', 'Create checkout, confirmation, and receipt interfaces.'],
    focus: 'Keep the next step clear', note: 'Availability, dates, and confirmation are connected parts of a rental journey. The design scope followed that sequence through to the receipt.',
    details: 'This entry focuses on my website and booking-interface design work. The supplied screens include the landing page, service sections, fleet, company story, and footer; sample reviews and pricing within the designs are not portfolio results.',
    workflow: [['Find', 'Make availability part of the discovery experience.'], ['Schedule', 'Connect pick-up and return scheduling.'], ['Book', 'Carry the journey through checkout, confirmation, and receipts.']]
  }
};

const experience = [
  { date:'Apr 2026 — Present', title:'Junior Product Designer', org:'Entryza', description:'Ticketing & mobility · Nigeria and Cameroon', points:['Contribute onboarding, event and music cards, calls to action, and reusable UI components.', 'Coordinate design feedback and prepare responsive interfaces for consistent developer handoff.'], project:'entryza' },
  { date:'2025 — Present', title:'Co-founder & Lead Designer', org:'CampusCrib', description:'Student housing marketplace · In development', points:['Help define product priorities and develop the concept, interface system, and front-end architecture.', 'Prepare business, stakeholder, and investor materials.'], project:'campuscrib' },
  { date:'2024 — Present', title:'Freelance Product Designer', org:'Vetra Studio', description:'Real estate, e-commerce & SaaS', points:['Manage briefs, client correspondence, feedback rounds, and final handovers for startups and small businesses.', 'Translate business objectives into user flows and responsive web and mobile interfaces.'] },
  { date:'Apr — Jul 2025', title:'Junior Designer', org:'Trevidia', description:'B2B invoicing, billing & team workflows', points:['Design responsive invoice templates, dashboards, and role-based collaboration flows.', 'Standardise spacing, auto-layout, and component behaviour for developer handover.'], project:'trevidia' },
  { date:'2024 — Apr 2025', title:'Product Tester', org:'Phcworkhub', description:'Deployed interfaces & user workflows', points:['Test deployed interfaces against user requirements and identify design inconsistencies.', 'Communicate actionable feedback to support product revisions and clearer user experiences.'], project:'phcworkhub' },
  { date:'Aug 2024 — Feb 2025', title:'Lead UI/UX Designer', org:'Phcworkhub', description:'Tax automation, business documents & estate paperwork', points:['Work with stakeholders on scope, timelines, and deliverables.', 'Design onboarding, multi-step forms, document generation, dashboard navigation, and reusable interface patterns.'], project:'phcworkhub' },
  { date:'Sep 2024 — Jan 2025', title:'Freelance Virtual Assistant', org:'Independent clients', description:'Remote administration & client support', points:['Manage calendars, meetings, travel arrangements, email, and data entry.', 'Organise assignments and track progress with Trello and Asana.'], note:'The organising part of the notebook.' }
];

const approaches = {
  understand: ['01 / Understand', 'Start with the requirements, the people, and the problem.'],
  design: ['02 / Design', 'Turn the requirements into clear journeys and considered interfaces.'],
  test: ['03 / Test', 'Review the experience, identify inconsistencies, and communicate useful feedback.']
};

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function icon(name) { return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.file}</svg>`; }
function hydrateIcons(root = document) { root.querySelectorAll('[data-icon]').forEach(el => { el.outerHTML = icon(el.dataset.icon); }); }

document.querySelector('#experience-list').innerHTML = experience.map(item => `<article class="timeline-item"><p class="timeline-date">${item.date}</p><div><h2>${item.title}</h2><p class="timeline-org">${item.org} <span>· ${item.description}</span></p><ul>${item.points.map(point => `<li>${point}</li>`).join('')}</ul>${item.project ? `<button class="text-link" type="button" data-project="${item.project}">Read the project entry <span aria-hidden="true">↗</span></button>` : ''}${item.note ? `<span class="timeline-margin">${item.note}</span>` : ''}</div></article>`).join('');
hydrateIcons();

const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#project-content');
const projectOrder = Object.keys(projects);
let currentProject = null;
let galleryIndex = 0;
let currentTab = 'work';
let routeInitialised = false;

function activateTab(tab, shouldScroll) {
  const validTab = ['work','experience','about','contact'].includes(tab) ? tab : 'work';
  currentTab = validTab;
  document.querySelectorAll('[data-tab]').forEach(button => {
    const active = button.dataset.tab === validTab;
    button.setAttribute('aria-selected', String(active));
    button.tabIndex = active ? 0 : -1;
    document.querySelector(`#panel-${button.dataset.tab}`).hidden = !active;
  });
  document.querySelector('.footer-invitation').hidden = validTab === 'contact';
  document.title = validTab === 'work' ? 'George Okochar — Working Notes' : `${validTab[0].toUpperCase() + validTab.slice(1)} — George’s Working Notes`;
  if (shouldScroll) window.scrollTo({top:0,behavior:'instant'});
}

function previewFor(slug, project) {
  if (project.gallery?.length) return galleryFor(project);
  const original = document.querySelector(`.project-preview[data-project="${slug}"]`);
  if (original) {
    // Reuse the same illustrative study without creating a second nested control.
    const preview = document.createElement('div');
    preview.className = original.className;
    preview.innerHTML = original.innerHTML;
    return `<div class="case-preview">${preview.outerHTML}</div><p class="case-preview-caption">Interface study · Illustrative portfolio preview, not a shipped product screenshot.</p>`;
  }
  return `<div class="case-preview case-simple-art"><div><span class="micro">${project.category}</span><strong>${project.title}</strong></div>${icon(project.icon)}</div>`;
}

function projectLinks(project) {
  if (!project.links?.length) return '';
  return `<nav class="project-links" aria-label="${escapeHtml(project.title)} external links">${project.links.map(link => `<a class="text-link" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)} <span aria-hidden="true">↗</span></a>`).join('')}</nav>`;
}

document.querySelectorAll('.entry').forEach(entry => {
  const slug = entry.querySelector('[data-project]')?.dataset.project;
  if (projects[slug]) entry.querySelector('.entry-info')?.insertAdjacentHTML('beforeend',projectLinks(projects[slug]));
});

function galleryFor(project) {
  const first = project.gallery[0];
  return `<section class="original-gallery" aria-label="Original ${escapeHtml(project.title)} design images"><div class="gallery-toolbar"><span class="micro">${escapeHtml(project.galleryLabel || "From my design files")}</span><div class="gallery-arrows"><button type="button" data-gallery-move="-1" aria-label="Previous design image">←</button><span class="micro" id="gallery-count">1 / ${project.gallery.length}</span><button type="button" data-gallery-move="1" aria-label="Next design image">→</button></div></div><div class="gallery-thumbs" role="group" aria-label="Choose a design image">${project.gallery.map((asset,index) => `<button type="button" data-gallery-index="${index}" aria-pressed="${index === 0}"><img src="${asset.src}" alt="" loading="lazy"><span>${escapeHtml(asset.label)}</span></button>`).join('')}</div><figure class="gallery-figure" id="gallery-figure"><img id="gallery-image" src="${first.src}" alt="${escapeHtml(first.alt)}"><figcaption><span id="gallery-caption" aria-live="polite">${escapeHtml(first.label)}</span><a class="text-link" id="gallery-original" href="${first.src}" target="_blank" rel="noopener">Open full-size image ↗</a></figcaption></figure></section>`;
}

function selectGalleryImage(index) {
  const gallery = projects[currentProject]?.gallery;
  if (!gallery?.length) return;
  galleryIndex = (index + gallery.length) % gallery.length;
  const asset = gallery[galleryIndex];
  const image = document.querySelector('#gallery-image');
  image.src = asset.src; image.alt = asset.alt;
  document.querySelector('#gallery-count').textContent = `${galleryIndex + 1} / ${gallery.length}`;
  document.querySelector('#gallery-caption').textContent = asset.label;
  document.querySelector('#gallery-original').href = asset.src;
  document.querySelector('#gallery-figure').classList.toggle('show-full-page', !!asset.full);
  content.querySelectorAll('[data-gallery-index]').forEach(button => button.setAttribute('aria-pressed',String(Number(button.dataset.galleryIndex) === galleryIndex)));
  content.querySelector('[data-gallery-index="' + galleryIndex + '"]')?.scrollIntoView({block:'nearest',inline:'nearest'});
}

function showProject(slug) {
  const project = projects[slug];
  if (!project) return;
  currentProject = slug;
  galleryIndex = 0;
  document.querySelector('#project-number').textContent = `Working notes / Entry ${project.number}`;
  content.innerHTML = `<div class="case-heading"><p class="micro">${project.category}</p><h2 id="project-title">${project.title}</h2><p class="case-subtitle">${project.subtitle}</p><div class="case-meta"><span><span class="micro">Role</span>${project.role}</span><span><span class="micro">When</span>${project.time}</span><span class="status">${project.status}</span></div></div>${previewFor(slug, project)}<div class="case-body"><div><section class="case-section"><h3>The context</h3><p>${project.context}</p></section><section class="case-section"><h3>What I contributed</h3><ul>${project.contributions.map(point => `<li>${point}</li>`).join('')}</ul></section><section class="case-section"><h3>A note on the scope</h3><p>${project.details}</p></section></div><aside class="paper-note case-note"><p class="hand-note">${project.focus}</p><p>${project.note}</p><button type="button" class="text-link" data-note="case-extra-note" aria-expanded="false" aria-controls="case-extra-note">Read between the lines <span aria-hidden="true">+</span></button><div id="case-extra-note" hidden><p style="margin-top:16px">${slug === 'campuscrib' ? 'This entry is an ongoing piece of the notebook. Its development status is kept visible so the scope of the work stays clear.' : 'The entry focuses on my contribution and the work involved. Each decision is easier to understand when it is connected to the journey around it.'}</p></div></aside></div><section class="case-workflow"><p class="micro">Follow the workflow / Select a step</p><div class="workflow-buttons">${project.workflow.map(([label],index) => `<button type="button" data-workflow="${index}" aria-pressed="${index === 0}">${String(index + 1).padStart(2,'0')} &nbsp; ${escapeHtml(label)}</button>`).join('')}</div><p class="workflow-detail" id="workflow-detail" aria-live="polite">${project.workflow[0][1]}</p></section>`;
  content.querySelector('.case-heading').insertAdjacentHTML('beforeend',projectLinks(project));
  hydrateIcons(content);
  document.querySelector('#next-project').innerHTML = `Next entry: ${projects[projectOrder[(projectOrder.indexOf(slug) + 1) % projectOrder.length]].title} <span aria-hidden="true">→</span>`;
  document.title = `${project.title} — George’s Working Notes`;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('entry-opened');
  document.querySelector('.close-dialog').focus({preventScroll:true});
}

function closeProject() {
  if (dialog.open) dialog.close();
  document.body.classList.remove('entry-opened');
  currentProject = null;
}

function navigate(hash) {
  const target = hash.replace(/^#/, '');
  if (location.hash.slice(1) === target) route();
  else location.hash = target;
}

function route() {
  const hash = location.hash.slice(1);
  if (hash === 'selected-work') {
    closeProject();
    activateTab('work',false);
    requestAnimationFrame(() => document.querySelector('#selected-work').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'}));
    routeInitialised = true;
    return;
  }
  const [tab, slug] = hash.split('/');
  const wasOpen = dialog.open;
  if (slug && projects[slug] && tab === 'work') {
    activateTab('work',false);
    showProject(slug);
  } else {
    closeProject();
    activateTab(tab || 'work',routeInitialised && !wasOpen);
    if (wasOpen && tab !== 'work') window.scrollTo({top:0,behavior:'instant'});
  }
  routeInitialised = true;
}

document.addEventListener('click', async event => {
  const galleryChoice = event.target.closest('[data-gallery-index]');
  if (galleryChoice) { selectGalleryImage(Number(galleryChoice.dataset.galleryIndex)); return; }
  const galleryMove = event.target.closest('[data-gallery-move]');
  if (galleryMove) { selectGalleryImage(galleryIndex + Number(galleryMove.dataset.galleryMove)); return; }
  const tab = event.target.closest('[data-tab]');
  if (tab) { navigate(tab.dataset.tab); return; }
  const chapterLink = event.target.closest('a[href^="#"]');
  if (chapterLink && /^#(work|experience|about|contact|selected-work)$/.test(chapterLink.getAttribute('href'))) {
    event.preventDefault();
    navigate(chapterLink.getAttribute('href'));
    return;
  }
  const note = event.target.closest('[data-note]');
  if (note) {
    const target = document.getElementById(note.dataset.note);
    if (!target) return;
    const opening = note.getAttribute('aria-expanded') !== 'true';
    note.setAttribute('aria-expanded', String(opening));
    target.hidden = !opening;
    return;
  }
  const project = event.target.closest('[data-project]');
  if (project) { navigate(`work/${project.dataset.project}`); return; }
  const stage = event.target.closest('[data-stage]');
  if (stage) {
    document.querySelectorAll('[data-stage]').forEach(button => { const active = button === stage; button.classList.toggle('is-active',active); button.setAttribute('aria-pressed',String(active)); });
    const [label, copy] = approaches[stage.dataset.stage];
    document.querySelector('#stage-label').textContent = label;
    document.querySelector('#stage-copy').textContent = copy;
    return;
  }
  const workflow = event.target.closest('[data-workflow]');
  if (workflow && currentProject) {
    content.querySelectorAll('[data-workflow]').forEach(button => button.setAttribute('aria-pressed',String(button === workflow)));
    document.querySelector('#workflow-detail').textContent = projects[currentProject].workflow[Number(workflow.dataset.workflow)][1];
    return;
  }
  const copy = event.target.closest('[data-copy-email]');
  if (copy) {
    const label = copy.querySelector('span:last-child');
    try {
      await navigator.clipboard.writeText('okochargeorge83@gmail.com');
      label.textContent = 'Copied!';
      document.querySelector('#announcement').textContent = 'Email address copied to clipboard.';
      setTimeout(() => { label.textContent = 'Copy email'; },2200);
    } catch {
      label.textContent = 'Select the email to copy';
      const email = document.querySelector('.contact-email>span');
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(email);selection.removeAllRanges();selection.addRange(range);
      document.querySelector('#announcement').textContent = 'The email address is selected. Use your device’s copy command.';
    }
  }
});

document.querySelector('.chapter-tabs').addEventListener('keydown',event => {
  if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
  event.preventDefault();
  const tabs = [...document.querySelectorAll('[data-tab]')];
  const index = tabs.indexOf(document.activeElement);
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
  tabs[next].focus();navigate(tabs[next].dataset.tab);
});

document.querySelector('.close-dialog').addEventListener('click',() => navigate('work'));
dialog.addEventListener('cancel',event => { event.preventDefault();navigate('work'); });
dialog.addEventListener('click',event => { if (event.target === dialog) navigate('work'); });
document.querySelector('#next-project').addEventListener('click',() => {
  const next = projectOrder[(projectOrder.indexOf(currentProject) + 1) % projectOrder.length];
  navigate(`work/${next}`);
});
document.querySelector('#discuss-project').addEventListener('click',() => closeProject());
window.addEventListener('hashchange',route);
route();
