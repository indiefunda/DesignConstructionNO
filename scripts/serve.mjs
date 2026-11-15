/**
 * Minimal static server that mirrors Firebase Hosting's cleanUrls +
 * trailingSlash:false behaviour, so local review matches production.
 *
 * Run: node scripts/serve.mjs [port]
 */
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';

const root = path.resolve('dist');
const port = Number(process.argv[2] ?? 4173);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.ico': 'image/x-icon',
};

const send = (res, status, file, extraHeaders = {}) => {
  const body = fs.readFileSync(file);
  res.writeHead(status, {
    'Content-Type': types[path.extname(file)] ?? 'application/octet-stream',
    ...extraHeaders,
  });
  res.end(body);
};

http
  .createServer((req, res) => {
    const url = new URL(req.url ?? '/', 'http://localhost');
    let pathname = decodeURIComponent(url.pathname);

    // trailingSlash: false — redirect away from a trailing slash
    if (pathname.length > 1 && pathname.endsWith('/')) {
      res.writeHead(301, { Location: pathname.replace(/\/+$/, '') + url.search });
      res.end();
      return;
    }

    const candidates = pathname === '/'
      ? [path.join(root, 'index.html')]
      : [
          path.join(root, pathname),
          path.join(root, `${pathname}.html`),
          path.join(root, pathname, 'index.html'),
        ];

    for (const candidate of candidates) {
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        send(res, 200, candidate);
        return;
      }
    }

    const notFound = path.join(root, '404.html');
    if (fs.existsSync(notFound)) send(res, 404, notFound);
    else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
    }
  })
  .listen(port, '127.0.0.1', () => {
    console.log(`preview → http://127.0.0.1:${port}`);
  });
