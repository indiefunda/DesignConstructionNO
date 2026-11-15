/**
 * Automated QA against the locally served build.
 *
 * Checks every route for: HTTP status, single H1, title/description length,
 * image alt text, hreflang set, and that every internal link and asset
 * resolves. Run: npm run qa   (expects `node scripts/serve.mjs` running)
 */
import { chromium } from 'playwright-core';

const base = process.argv.find((a) => a.startsWith('http')) ?? 'http://127.0.0.1:4173';

const routes = [
  '/',
  '/om-oss',
  '/tjenester',
  '/tjenester/snekring',
  '/tjenester/maling',
  '/tjenester/gipsarbeid',
  '/tjenester/flislegging-fuging',
  '/tjenester/riving-og-opprydding',
  '/galleri',
  '/vilkar',
  '/personale',
  '/kontakt-oss',
  '/en',
  '/en/about-us',
  '/en/services',
  '/en/services/carpentry-works',
  '/en/services/painting-works',
  '/en/services/plasterboard-works',
  '/en/services/tiling-works',
  '/en/services/demolitions-and-clean-ups',
  '/en/gallery',
  '/en/working-terms-and-conditions',
  '/en/staff',
  '/en/contact-us',
  '/el',
  '/el/schetika-me-emas',
  '/el/ipiresies',
  '/el/ipiresies/xilourgikes-ergasies',
  '/el/ipiresies/chromatismi',
  '/el/ipiresies/ergasies-gipsosanidas',
  '/el/ipiresies/topothetisis-plakidion',
  '/el/ipiresies/katedafisis-ke-katharismi',
  '/el/erga',
  '/el/ori',
  '/el/prosopiko',
  '/el/epikinoniste-mazi-mas',
];

const browser = await chromium.launch({ channel: 'msedge' });
const problems = [];
const seenLinks = new Set();

const check = (route, condition, message) => {
  if (!condition) problems.push(`${route} — ${message}`);
};

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const route of routes) {
  const response = await page.goto(`${base}${route}`, { waitUntil: 'domcontentloaded' });
  check(route, response?.status() === 200, `status ${response?.status()}`);

  const data = await page.evaluate(() => {
    const text = (el) => el?.textContent?.trim() ?? '';
    const links = Array.from(document.querySelectorAll('a[href]')).map((a) => a.getAttribute('href'));
    const assets = [
      ...Array.from(document.querySelectorAll('img')).map((img) => img.getAttribute('src')),
      ...Array.from(document.querySelectorAll('source')).map((s) => s.getAttribute('srcset')),
    ];
    return {
      lang: document.documentElement.lang,
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
      h1s: Array.from(document.querySelectorAll('h1')).map(text),
      headings: Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6')).map((h) => h.tagName),
      imagesWithoutAlt: Array.from(document.querySelectorAll('img')).filter(
        (img) => !img.hasAttribute('alt'),
      ).length,
      hreflangs: Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]')).map(
        (l) => l.getAttribute('hreflang'),
      ),
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '',
      links,
      assets,
      jsonLd: document.querySelectorAll('script[type="application/ld+json"]').length,
      horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
    };
  });

  check(route, data.lang !== '', 'missing html lang');
  check(route, data.title.length > 12 && data.title.length < 75, `title length ${data.title.length}`);
  check(route, data.description.length > 60, `description length ${data.description.length}`);
  check(route, data.h1s.length === 1, `${data.h1s.length} h1 elements`);
  check(route, data.imagesWithoutAlt === 0, `${data.imagesWithoutAlt} images without alt`);
  check(route, ['nb-NO', 'en', 'el'].every((l) => data.hreflangs.includes(l)), 'hreflang set incomplete');
  check(route, data.canonical.startsWith('https://'), 'canonical missing');
  check(route, data.jsonLd >= 1, 'no JSON-LD');
  check(route, !data.horizontalOverflow, 'horizontal overflow');

  // Heading order: no jumps larger than one level.
  let previous = 0;
  for (const tag of data.headings) {
    const level = Number(tag.slice(1));
    if (previous && level > previous + 1) {
      problems.push(`${route} — heading jump ${previous} → ${level}`);
      break;
    }
    previous = level;
  }

  for (const href of data.links) {
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) continue;
    seenLinks.add(href.split('#')[0]);
  }

  for (const asset of data.assets) {
    if (!asset || asset.startsWith('data:')) continue;
    for (const candidate of asset.split(',')) {
      const url = candidate.trim().split(' ')[0];
      if (url && !url.startsWith('http') && !url.startsWith('data:')) seenLinks.add(url);
    }
  }
}

// Resolve every internal URL once.
const unique = [...seenLinks].filter(Boolean);
for (const href of unique) {
  const target = new URL(href, base).href;
  const response = await page.request.get(target);
  if (response.status() >= 400) problems.push(`${href} — ${response.status()}`);
}

await browser.close();

if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  for (const problem of [...new Set(problems)]) console.log(`  ✗ ${problem}`);
  process.exitCode = 1;
} else {
  console.log(`✓ ${routes.length} routes, ${unique.length} internal URLs — all clean`);
}
