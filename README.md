# George Okochar — Working Notes

An accessible, responsive, buildless portfolio based on the approved notebook mockup and George's supplied CVs.

## Preview

Run `node serve.mjs`, then open the printed Local URL. Deployable static files live in `dist/`.

## Editing

- `dist/index.html`: homepage, chapter panels, and illustrative interface studies.
- `dist/styles.css`: responsive notebook design.
- `dist/app.js`: project and experience content, hash routing, accessible tabs, notes, dialogs, image galleries, workflow steps, project links, and email copy.
- `dist/project-media.css`: supplied-image previews and galleries.
- `dist/assets/george-okochar-cv.pdf`: supplied master CV.

Tabs support arrow, Home, and End keys. Project entries support deep links, browser navigation, Escape, and native dialog focus containment. The site has no forms that imply an unavailable backend, analytics, accounts, or runtime third-party requests.

## Content and assets

Claims and project contributions come from the four supplied CVs. CampusCrib remains explicitly in development, with seven screenshots captured from George's local development checkout across desktop and mobile journeys. The Bookshop and Felx galleries use George's supplied design images, copied unchanged. Other project interface studies remain illustrative, clearly distinguished from original product screenshots. Media mappings and verified project URLs are recorded in `CONTENT_SOURCES.md`.

Fonts: DM Sans, IBM Plex Mono, and Caveat from Google Fonts, locally hosted; open font licenses are retained with the font assets. The earlier generated apartment image is no longer used by the site; its prompt remains in `asset-brief.txt` as provenance.

## Deploy

Import this repository into Vercel with the Other framework preset. The root configuration publishes `dist/` without dependency installation or a build step. Pushes to the connected production branch deploy the updated portfolio. No environment variables are required.
