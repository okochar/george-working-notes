# George Okochar — Working Notes

An accessible, responsive, buildless portfolio based on the approved notebook mockup and George's supplied CVs.

## Preview

Run `node serve.mjs`, then open the printed Local URL. Deployable static files live in `dist/`.

## Editing

- `dist/index.html`: homepage, chapter panels, and illustrative interface studies.
- `dist/styles.css`: responsive notebook design.
- `dist/app.js`: project and experience content, hash routing, accessible tabs, notes, dialogs, image galleries, workflow steps, project links, and email copy.
- `dist/project-media.css`: supplied-image previews and galleries.
- `dist/collections.js` and `dist/collections.css`: UI / graphic design collections, artwork routing, and the accessible artwork viewer.
- `dist/motion.js` and `dist/motion.css`: progressive scroll reveals, coordinated with the opening animation.
- `dist/assets/george-okochar-cv.pdf`: supplied master CV.

Tabs support arrow, Home, and End keys. Project entries support deep links, browser navigation, Escape, and native dialog focus containment. The site has no forms that imply an unavailable backend, analytics, accounts, or runtime third-party requests.

## Content and assets

Claims and project contributions come from the four supplied CVs. CampusCrib remains explicitly in development, with seven screenshots captured from George's local development checkout across desktop and mobile journeys. The Bookshop, Felx, Phcworkhub, and Trevidia galleries use George's supplied design images, copied unchanged. Graphic Design contains the supplied LAGEO posters, Entryza campaign flyer, and Frozen In Time identity. Media mappings and verified project URLs are recorded in `CONTENT_SOURCES.md`.

Fonts: DM Sans, IBM Plex Mono, and Caveat from Google Fonts, locally hosted; open font licenses are retained with the font assets. The earlier generated apartment image is no longer used by the site; its prompt remains in `asset-brief.txt` as provenance.

## Deploy

Import this repository into Vercel with the Other framework preset. The root configuration publishes `dist/` without dependency installation or a build step. Pushes to the connected production branch deploy the updated portfolio. No environment variables are required.

## Opening animation

The opening draws a blue line across the paper, introduces George Okochar, and expands the O in Okochar into a live reveal of the notebook. It uses local typography, CSS, and an SVG mask with no animation library or video download. The normal sequence lasts about 2.8 seconds after the font is ready.

It runs on every page load and reload, including direct links, with no session-storage gate. Visitors can use Skip opening or Escape, and the footer offers Replay opening. Reduced-motion preferences bypass the sequence. Independent startup and runtime limits release the page if the animation cannot complete. Scroll reveals begin as the O opens and continue as content enters the viewport. All content stays visible if scroll animation support is unavailable.

The header uses George's name as plain text. The former GO monogram and branded favicon have been removed.

## Collections

The main chapter navigation stays the same. A separate keyboard-accessible UI Design / Graphic Design tab selector sits beneath it in Work. Graphics supports direct links (`#graphics/lageo`, `#graphics/entryza`, `#graphics/frozen`), browser back/forward, Escape to close, arrow-key artwork navigation, and full-size original image links. Project story refinements remain a separate content pass.
