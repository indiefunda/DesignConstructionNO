/**
 * Screenshot harness for visual review. Captures desktop and mobile shots of
 * every route into .qa/ (gitignored).
 *
 * Usage: node scripts/shots.mjs [baseUrl] [--only=slug]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright-core';

const base = process.argv.find((a) => a.startsWith('http')) ?? 'http://127.0.0.1:4173';
const only = process.argv.find((a) => a.startsWith('--only='))?.slice(7);

const routes = [
  ['nb-home', '/'],
  ['nb-about', '/om-oss'],
  ['nb-services', '/tjenester'],
  ['nb-service-carpentry', '/tjenester/snekring'],
  ['nb-gallery', '/galleri'],
  ['nb-terms', '/vilkar'],
  ['nb-staff', '/personale'],
  ['nb-contact', '/kontakt-oss'],
  ['en-home', '/en'],
  ['en-services', '/en/services'],
  ['el-home', '/el'],
  ['el-services', '/el/ipiresies'],
  ['el-gallery', '/el/erga'],
  ['404', '/no-such-page'],
];

const out = path.resolve('.qa');
await fs.mkdir(out, { recursive: true });

const browser = await chromium.launch({ channel: 'msedge' });

for (const [name, route] of routes) {
  if (only && !name.includes(only)) continue;

  for (const [suffix, viewport] of [
    ['desktop', { width: 1440, height: 900 }],
    ['mobile', { width: 390, height: 844 }],
  ]) {
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1, isMobile: suffix === 'mobile', hasTouch: suffix === 'mobile' });
    const errors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', (err) => errors.push(String(err)));

    await page.goto(`${base}${route}`, { waitUntil: 'networkidle' });
    // Walk down the page so IntersectionObserver reveals fire, then return.
    await page.evaluate(
      () =>
        new Promise((resolve) => {
          let y = 0;
          const step = () => {
            y += Math.round(window.innerHeight * 0.55);
            window.scrollTo(0, y);
            if (y < document.body.scrollHeight) setTimeout(step, 55);
            else resolve(null);
          };
          step();
        }),
    );
    await page.waitForTimeout(600);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(350);

    await page.screenshot({
      path: path.join(out, `${name}-${suffix}.png`),
      fullPage: suffix === 'desktop',
    });

    if (errors.length) console.log(`  ! ${name} ${suffix}: ${errors.slice(0, 3).join(' | ')}`);
    await page.close();
  }
  console.log(`  ${name}`);
}

await browser.close();
console.log(`shots in ${out}`);
