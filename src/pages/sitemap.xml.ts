import type { APIRoute } from 'astro';
import { pageKeys, pathFor, site } from '../data/site';

export const GET: APIRoute = () => {
  const url = (path: string) => new URL(path, site.url).href;

  const entries = site.languages.flatMap((lang) =>
    pageKeys.map((key) => {
      const path = pathFor(lang, key);
      const alternates = site.languages
        .map(
          (other) =>
            `    <xhtml:link rel="alternate" hreflang="${other}" href="${url(pathFor(other, key))}"/>`,
        )
        .join('\n');
      const priority = key === 'home' ? '1.0' : key.startsWith('service:') ? '0.7' : '0.8';
      return `  <url>
    <loc>${url(path)}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${url(pathFor('nb', key))}"/>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    }),
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
