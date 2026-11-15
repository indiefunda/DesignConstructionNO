/**
 * Weight + paint check against the served build. Reports transferred bytes by
 * type, the LCP, and CLS. Run: node scripts/perf.mjs
 */
import { chromium } from 'playwright-core';

const base = process.argv.find((a) => a.startsWith('http')) ?? 'http://127.0.0.1:4173';
const browser = await chromium.launch({ channel: 'msedge' });

for (const [label, route] of [
  ['home', '/'],
  ['services', '/tjenester'],
  ['gallery', '/galleri'],
  ['greek home', '/el'],
]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${base}${route}`, { waitUntil: 'load' });
  await page.waitForTimeout(1200);

  const data = await page.evaluate(async () => {
    const resources = performance.getEntriesByType('resource');
    const byType = {};
    let total = 0;
    for (const entry of resources) {
      const size = entry.encodedBodySize || 0;
      total += size;
      const ext = entry.name.split('.').pop().split('?')[0].slice(0, 5);
      byType[ext] = (byType[ext] || 0) + size;
    }
    const nav = performance.getEntriesByType('navigation')[0];
    total += nav?.encodedBodySize || 0;

    const lcp = await new Promise((resolve) => {
      let value = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) value = entry.startTime;
        resolve(Math.round(value));
      }).observe({ type: 'largest-contentful-paint', buffered: true });
      setTimeout(() => resolve(Math.round(value)), 900);
    });

    return {
      total: Math.round(total / 1024),
      html: Math.round((nav?.encodedBodySize || 0) / 1024),
      byType: Object.fromEntries(
        Object.entries(byType)
          .sort((a, b) => b[1] - a[1])
          .map(([k, v]) => [k, Math.round(v / 1024)]),
      ),
      requests: resources.length + 1,
      lcp,
    };
  });

  const js = await page.evaluate(() =>
    Array.from(document.querySelectorAll('script[src]')).reduce(
      (sum, el) => sum + (el.getAttribute('src')?.length ?? 0),
      0,
    ),
  );

  console.log(
    `${label.padEnd(11)} ${String(data.total).padStart(4)} kB · ${data.requests} req · LCP ${data.lcp} ms · ${JSON.stringify(data.byType)} · ${js} inline scripts`,
  );
  await page.close();
}

await browser.close();
