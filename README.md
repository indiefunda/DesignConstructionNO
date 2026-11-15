# Design Construction — designconstruction.no

A rebuild of [designconstruction.no](https://www.designconstruction.no) as a fast,
trilingual (Norwegian / English / Greek) website. Astro static build, deployed to
Firebase Hosting.

The old site was a WordPress/Divi install: 12 thin pages per language, 400 px
photography, no design system, no mobile-first layout. This repository replaces it
with a single content model, two typefaces, a clay-and-bone palette and one
consistent layout language across all 37 pages.

---

## Quick start

```bash
npm install
npm run assets     # download fonts + build responsive images (one-off)
npm run dev        # http://127.0.0.1:4321
npm run build      # → dist/
node scripts/serve.mjs 4173   # preview the production build exactly like Firebase
npm run deploy     # build + firebase deploy --only hosting
```

## Structure

```
src/
  data/
    site.ts        brand, contact details, languages, route map (single source of truth)
    copy.ts        all page copy, per language, typed so translations cannot drift
    services.ts    the five trades with their work items, in three languages
    projects.ts    gallery entries with captions per language
    images.json    generated: sizes, aspect ratios, LQIP placeholders
  lib/i18n.ts      language detection, alternates, href helpers
  components/      Header, Footer, Hero, ServiceList, Plate, Process, Trust, …
  views/           one view per page type, composed from components
  pages/
    [...path].astro   generates every route in every language
    sitemap.xml.ts    sitemap with hreflang alternates
    404.astro
  styles/
    fonts.css      generated @font-face rules (self-hosted woff2)
    base.css       tokens, reset, typography, buttons, forms, motion
    site.css       chrome: header, menu, hero, sections, footer
    pages.css      page layouts: about, services, gallery, terms, staff, contact
scripts/
  download-fonts.mjs   fetches Google Fonts subsets (latin, latin-ext, greek) locally
  prepare-images.mjs   AVIF + WebP at several widths, with inline LQIP
  make-assets.mjs      app icons and the three social cards, rendered in Chromium
  serve.mjs            static server that mimics Firebase clean URLs
  qa.mjs               route/SEO/a11y/link checks
  shots.mjs            screenshots at desktop + mobile widths
```

## Design notes

- **Type**: EB Garamond for headlines (chosen because it has a real Greek cut, not a
  fallback), Manrope for interface and body text. Both self-hosted — no third-party
  requests, no cookie banner needed for fonts.
- **Palette**: ink `#0e0f0c`, bone `#f4f0e7`, fired clay `#b4552c`. Clay is the only
  accent, used for actions, numerals and the italic phrase in every headline.
- **Structure**: the site alternates dark and paper sections so long pages have
  rhythm. Numbered sections (`01 — Om oss`) run through every page.
- **Motion**: masked line reveals in the hero, scroll reveals elsewhere, a cursor
  preview on the services list, a slow parallax on the featured photograph. All of
  it is disabled under `prefers-reduced-motion`, and no content depends on JS.
- **Photography** is the client's own archive, re-cropped and served as AVIF/WebP at
  four widths. Captions only name addresses that were documented on the old site;
  everything else is labelled as a craft detail.

## Language routing

Norwegian is the default at the root, English under `/en`, Greek under `/el`.
The old WordPress slugs are preserved so existing links and search results keep
working (e.g. `/tjenester/snekring`, `/en/services/carpentry-works`,
`/el/ipiresies/chromatismi`).

All three languages are generated from one route map in `src/data/site.ts`; adding
a fourth language means adding one entry there plus one column in `copy.ts`.

## Adding a project to the gallery

1. Drop the photograph in `assets/source/` (JPG/PNG, ideally ≥1600 px wide).
2. Add it to the `plan` map in `scripts/prepare-images.mjs`, e.g. `'kitchen-oslo': [620, 940, 1260]`.
3. Run `npm run images`.
4. Add an entry to `src/data/projects.ts` with the three captions and a `span`
   (`wide`, `tall` or `normal`). The grid tiles itself; no CSS changes needed.

## Adding a fourth language

1. Add the code to `site.languages` and to `routes` in `src/data/site.ts`.
2. Copy one block in `src/data/copy.ts`, `src/data/services.ts` and
   `src/data/projects.ts` and translate it — TypeScript will point at every
   missing key.
3. Add the language to `ogImages` in `src/pages/[...path].astro`.

## Placeholders worth knowing

These came from the old site and should be confirmed by the client:

- The terms page mentioned a supplier discount with literal `00-00%` placeholders.
  The rebuild keeps the meaning ("agreements with the major names in retail") and
  drops the fake numbers.
- The old contact page listed a second, obsolete address (Siggerudveien 767, Ski).
  This build uses Marie Kirkeruds vei 17, 1407 Vinterbro everywhere.
- The contact form opens the visitor's mail app with the message pre-filled — no
  backend, no stored personal data. Point it at a form service later if preferred.
- Social images and icons are generated from `npm run og`.

## Deployment

Firebase project `designconstruction-no` → `https://designconstruction-no.web.app`.

```bash
firebase use designconstruction-no
npm run deploy
```

When the client points `designconstruction.no` at Firebase:

1. Add the domain in Firebase Hosting → custom domains.
2. Change `site` in `astro.config.mjs` and `site.url` in `src/data/site.ts`.
3. Update the sitemap URL in `public/robots.txt`, rebuild, redeploy.

`firebase.json` sets long-lived caching for `/images`, `/fonts` and `/_astro`,
`cleanUrls` with no trailing slash, and 301s from the old loose URLs (`/kontakt`,
`/gallery`, short service slugs).
