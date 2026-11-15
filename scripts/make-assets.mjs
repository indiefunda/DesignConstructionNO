/**
 * Brand asset generator: app icons, apple touch icon and the three social cards.
 *
 * Rendered in headless Chromium (Edge) so the real EB Garamond webfont is used
 * instead of a system fallback. Run: npm run og
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright-core';

const OUT = 'public';
const CLAY = '#a34722';
const INK = '#0e0f0c';
const PAPER = '#f4f0e7';

const font = async (name) => {
  const buf = await fs.readFile(path.join(OUT, 'fonts', name));
  return `data:font/woff2;base64,${buf.toString('base64')}`;
};

const serif = await font('ebgaramond-latin-400-700.woff2');
const serifGreek = await font('ebgaramond-greek-400-700.woff2');
const sans = await font('manrope-latin-200-800.woff2');
const sansGreek = await font('manrope-greek-200-800.woff2');

const faceCss = `
@font-face{font-family:'EBG';src:url(${serif}) format('woff2');font-weight:400 700;font-style:normal}
@font-face{font-family:'EBG';src:url(${serifGreek}) format('woff2');font-weight:400 700;font-style:normal}
@font-face{font-family:'EBG';src:url(${serif}) format('woff2');font-weight:400 500;font-style:italic}
@font-face{font-family:'MNP';src:url(${sans}) format('woff2');font-weight:200 800}
@font-face{font-family:'MNP';src:url(${sansGreek}) format('woff2');font-weight:200 800}
`;

const browser = await chromium.launch({ channel: 'msedge' });

/* ---------- Icons -------------------------------------------------------- */

const iconPages = [
  { size: 512, file: 'icon-512.png' },
  { size: 192, file: 'icon-192.png' },
  { size: 180, file: 'apple-touch-icon.png' },
];

for (const { size, file } of iconPages) {
  const page = await browser.newPage({ viewport: { width: size, height: size }, deviceScaleFactor: 1 });
  const scale = size / 512;
  await page.setContent(`<!doctype html><html><head><style>${faceCss}
    *{margin:0;box-sizing:border-box}
    body{width:${size}px;height:${size}px;background:${CLAY};display:grid;place-items:center;position:relative;overflow:hidden}
    body::after{content:'';position:absolute;inset:0;background:
      radial-gradient(120% 120% at 18% 12%, rgba(255,255,255,.14), transparent 55%),
      linear-gradient(to bottom, transparent 62%, rgba(0,0,0,.16))}
    .mark{font-family:'EBG',Georgia,serif;font-weight:600;color:${PAPER};
      font-size:${210 * scale}px;line-height:1;letter-spacing:-.04em;
      transform:translateY(${-6 * scale}px);position:relative;z-index:1}
    .dot{position:absolute;z-index:1;width:${26 * scale}px;height:${26 * scale}px;border-radius:50%;
      background:${PAPER};bottom:${64 * scale}px;right:${66 * scale}px;opacity:.85}
  </style></head><body><span class="mark">DC</span><span class="dot"></span></body></html>`);
  await page.waitForTimeout(250);
  await page.screenshot({ path: path.join(OUT, file), omitBackground: false });
  await page.close();
  console.log(`  ${file}`);
}

/* ---------- Social cards ------------------------------------------------- */

const photo = await fs.readFile('public/images/hero-attic-1400.webp');
const photoUri = `data:image/webp;base64,${photo.toString('base64')}`;

const cards = [
  {
    file: 'og-nb.jpg',
    title: 'Vi bygger<br>det som <em>varer.</em>',
    kicker: 'Snekring · Maling · Gips · Flislegging · Riving',
    foot: 'Vinterbro · Oslo · Akershus',
    cta: 'Kostnadsfri befaring',
  },
  {
    file: 'og-en.jpg',
    title: 'We build<br>what <em>lasts.</em>',
    kicker: 'Carpentry · Painting · Plasterboard · Tiling · Demolition',
    foot: 'Vinterbro · Oslo · Akershus',
    cta: 'Free site visit',
  },
  {
    file: 'og-el.jpg',
    title: 'Χτίζουμε<br>ό,τι <em>αντέχει.</em>',
    kicker: 'Ξυλουργική · Χρωματισμοί · Γυψοσανίδα · Πλακίδια',
    foot: 'Βίντερμπρο · Όσλο',
    cta: 'Δωρεάν αυτοψία',
  },
];

for (const card of cards) {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html><html><head><style>${faceCss}
    *{margin:0;box-sizing:border-box}
    body{width:1200px;height:630px;background:${INK};color:${PAPER};position:relative;overflow:hidden;
      font-family:'MNP',system-ui,sans-serif}
    .photo{position:absolute;inset:0 0 0 52%;background:url(${photoUri}) center/cover;
      filter:saturate(.92) contrast(1.02)}
    .photo::after{content:'';position:absolute;inset:0;
      background:linear-gradient(90deg, ${INK} 0%, rgba(14,15,12,.72) 22%, rgba(14,15,12,.12) 62%, rgba(14,15,12,.35) 100%)}
    .wrap{position:absolute;inset:0;padding:54px 60px;display:flex;flex-direction:column;justify-content:space-between;z-index:2}
    .top{display:flex;align-items:center;gap:16px}
    .tile{width:46px;height:46px;background:${CLAY};display:grid;place-items:center;
      font-family:'EBG',Georgia,serif;font-weight:600;font-size:23px;border-radius:3px;padding-top:3px}
    .brand{display:flex;flex-direction:column;gap:5px;line-height:1}
    .brand b{font-family:'EBG',Georgia,serif;font-weight:600;font-size:23px;letter-spacing:.01em}
    .brand i{font-style:normal;font-size:10.5px;font-weight:600;letter-spacing:.34em;opacity:.68;text-transform:uppercase}
    .title{font-family:'EBG',Georgia,serif;font-weight:500;font-size:76px;line-height:.94;
      letter-spacing:-.032em;max-width:9.2em}
    .title em{color:#cf7a51;font-style:italic}
    .kicker{font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:rgba(244,240,231,.62);
      margin-top:18px}
    .foot{display:flex;align-items:center;justify-content:space-between;gap:20px;
      border-top:1px solid rgba(244,240,231,.16);padding-top:16px;font-size:12.5px;
      letter-spacing:.13em;text-transform:uppercase;color:rgba(244,240,231,.66)}
    .foot span:last-child{color:#cf7a51}
  </style></head><body>
    <div class="photo"></div>
    <div class="wrap">
      <div class="top">
        <div class="tile">DC</div>
        <div class="brand"><b>Design</b><i>Construction</i></div>
      </div>
      <div>
        <div class="title">${card.title}</div>
        <div class="kicker">${card.kicker}</div>
      </div>
      <div class="foot"><span>${card.foot}</span><span>${card.cta}</span></div>
    </div>
  </body></html>`);
  await page.waitForTimeout(350);
  await page.screenshot({ path: path.join(OUT, card.file), type: 'jpeg', quality: 88 });
  await page.close();
  console.log(`  ${card.file}`);
}

await browser.close();

/* ---------- favicon.svg -------------------------------------------------- */

await fs.writeFile(
  path.join(OUT, 'favicon.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="6" fill="${CLAY}"/>
  <text x="32" y="45" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="30" font-weight="600" fill="${PAPER}">DC</text>
</svg>
`,
);

console.log('done');
