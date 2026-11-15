/**
 * Builds responsive AVIF + WebP derivatives for every photo in assets/source
 * and writes a manifest the <Pic> component reads at build time.
 *
 * Run: npm run images
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'assets/source';
const OUT = 'public/images';
const MANIFEST = 'src/data/images.json';

/** name → widths (never upscales past the source width) */
const plan = {
  'hero-attic': [720, 1080, 1400, 1600],
  'facade': [720, 1080, 1400, 1800],
  'door-opening': [520, 780, 1040],
  'stone-steps': [520, 780, 820],
  'stone-paving': [520, 780, 980],
  'painting-ladder': [620, 940, 1260],
  'plaster-detail': [520, 780, 800],
  'ceiling-moulding': [520, 640],
  'ceiling-dome': [520, 534],
  'scaffold': [520, 780, 835],
  'plaster-texture': [520, 698],
  'demolition': [520, 780, 800],
  'door-white': [400, 400],
  'wall-mural': [620, 940, 1200],
  'tiles-floor': [620, 960, 1024],
  'team-roland': [400, 500],
  'team-budri': [400, 500],
};

await fs.mkdir(OUT, { recursive: true });

const manifest = {};

const sources = (await fs.readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of sources) {
  const base = path.basename(file, path.extname(file));
  if (base === 'logo-source') continue;
  const widths = plan[base];
  if (!widths) {
    console.warn(`  ! no width plan for ${file}, skipping`);
    continue;
  }

  const image = sharp(path.join(SRC, file)).rotate();
  const meta = await image.metadata();
  const aspect = meta.width / meta.height;

  // Low-quality placeholder (inline, ~700 bytes) keeps layout warm while loading.
  const lqip = await sharp(path.join(SRC, file))
    .resize(24)
    .webp({ quality: 42 })
    .toBuffer();

  const unique = [...new Set(widths)].filter((w) => w <= (meta.width ?? w)).sort((a, b) => a - b);
  const entries = [];

  for (const width of unique) {
    const height = Math.round(width / aspect);
    const resized = sharp(path.join(SRC, file)).rotate().resize({ width, withoutEnlargement: true });

    const avif = `${base}-${width}.avif`;
    const webp = `${base}-${width}.webp`;
    await resized.clone().avif({ quality: 52, effort: 6 }).toFile(path.join(OUT, avif));
    await resized.clone().webp({ quality: 78, effort: 5 }).toFile(path.join(OUT, webp));
    entries.push({ w: width, h: height, avif, webp });
  }

  const largest = entries[entries.length - 1];
  manifest[base] = {
    w: meta.width,
    h: meta.height,
    aspect: Number(aspect.toFixed(4)),
    lqip: `data:image/webp;base64,${lqip.toString('base64')}`,
    width: largest.w,
    height: largest.h,
    sources: entries,
  };

  let bytes = 0;
  for (const entry of entries) {
    bytes += (await fs.stat(path.join(OUT, entry.avif))).size;
    bytes += (await fs.stat(path.join(OUT, entry.webp))).size;
  }
  console.log(`  ${base} ${entries.length} sizes ${(bytes / 1024).toFixed(0)} kB`);
}

await fs.mkdir(path.dirname(MANIFEST), { recursive: true });
await fs.writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`wrote ${MANIFEST} (${Object.keys(manifest).length} images)`);
