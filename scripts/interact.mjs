/**
 * Interaction checks: mobile menu, gallery filter + lightbox, services hover
 * preview and the language switcher. Writes screenshots to .qa/states/.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright-core';

const base = process.argv.find((a) => a.startsWith('http')) ?? 'http://127.0.0.1:4173';
const out = path.resolve('.qa/states');
await fs.mkdir(out, { recursive: true });

const browser = await chromium.launch({ channel: 'msedge' });
const log = [];
const assert = (condition, message) => {
  log.push(`${condition ? '✓' : '✗'} ${message}`);
  if (!condition) process.exitCode = 1;
};

/* 1. Mobile menu */
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await page.goto(`${base}/`, { waitUntil: 'networkidle' });
  await page.click('[data-menu-open]');
  await page.waitForTimeout(700);
  const open = await page.evaluate(() => document.querySelector('dialog[open]') !== null);
  assert(open, 'mobile menu opens');
  await page.screenshot({ path: path.join(out, 'menu-mobile.png') });

  // Escape closes it (native dialog behaviour).
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  const closed = await page.evaluate(() => document.querySelector('dialog[open]') === null);
  assert(closed, 'escape closes the menu');
  await page.close();
}

/* 2. Services hover preview (desktop) */
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${base}/`, { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.7));
  await page.waitForTimeout(500);
  const box = await page.locator('.service-row').nth(1).boundingBox();
  if (box) await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.waitForTimeout(900);
  const on = await page.evaluate(() =>
    document.querySelector('[data-preview-el]')?.classList.contains('is-on'),
  );
  assert(Boolean(on), 'service hover preview appears');
  await page.screenshot({ path: path.join(out, 'services-hover.png') });
  await page.close();
}

/* 3. Gallery lightbox */
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${base}/galleri`, { waitUntil: 'networkidle' });

  await page.locator('[data-item]').first().click();
  await page.waitForTimeout(600);
  const lightboxOpen = await page.evaluate(() => document.querySelector('dialog[data-lightbox]')?.hasAttribute('open'));
  assert(Boolean(lightboxOpen), 'lightbox opens');
  await page.screenshot({ path: path.join(out, 'lightbox.png') });

  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(400);
  const counter = await page.textContent('[data-lb-count]');
  assert(counter?.trim().startsWith('02'), `arrow key advances the lightbox (${counter?.trim()})`);

  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  const bodyLocked = await page.evaluate(() => document.body.style.overflow !== 'hidden');
  assert(bodyLocked, 'closing restores page scroll');
  await page.close();
}

/* 4. Language switcher */
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${base}/om-oss`, { waitUntil: 'networkidle' });
  const href = await page.getAttribute('.lang a[hreflang="en"]', 'href');
  assert(href === '/en/about-us', `language switch maps the same page (${href})`);
  await page.click('.lang a[hreflang="el"]');
  await page.waitForTimeout(600);
  const lang = await page.evaluate(() => document.documentElement.lang);
  assert(lang === 'el', `switching to Greek lands on a Greek page (${lang})`);

  await page.goto(`${base}/en/services/carpentry-works`, { waitUntil: 'networkidle' });
  const elHref = await page.getAttribute('.lang a[hreflang="nb"]', 'href');
  assert(elHref === '/tjenester/snekring', `English service maps back to Norwegian (${elHref})`);
  await page.close();
}

/* 5. Contact form validation (no mail client launched) */
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${base}/kontakt-oss`, { waitUntil: 'networkidle' });
  await page.click('button[type="submit"]');
  await page.waitForTimeout(300);
  const status = (await page.textContent('[data-status]'))?.trim() ?? '';
  assert(status.length > 5, `empty submit shows a validation message ("${status}")`);
  await page.close();
}

/* 6. Desktop: services dropdown + solid header on scroll */
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${base}/`, { waitUntil: 'networkidle' });
  await page.hover('.has-sub > a');
  await page.waitForTimeout(500);
  const subVisible = await page.evaluate(() => {
    const sub = document.querySelector('.sub');
    return sub ? getComputedStyle(sub).visibility : 'missing';
  });
  assert(subVisible === 'visible', `services dropdown opens on hover (${subVisible})`);
  await page.screenshot({ path: path.join(out, 'nav-dropdown.png'), clip: { x: 0, y: 0, width: 1440, height: 420 } });

  await page.mouse.move(10, 600);
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(700);
  const solid = await page.evaluate(() =>
    document.querySelector('[data-head]')?.classList.contains('is-solid'),
  );
  assert(Boolean(solid), 'header turns solid after scrolling');
  await page.screenshot({ path: path.join(out, 'header-scrolled.png'), clip: { x: 0, y: 0, width: 1440, height: 240 } });
  await page.close();
}

await browser.close();
console.log(log.join('\n'));
