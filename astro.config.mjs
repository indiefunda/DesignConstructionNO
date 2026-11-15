import { defineConfig } from 'astro/config';

// Deployed to Firebase Hosting. Swap `site` for the custom domain once the
// client's DNS points at Firebase — canonical URLs and the sitemap follow it.
export default defineConfig({
  site: 'https://designconstruction-no.web.app',
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  devToolbar: { enabled: false },
  prefetch: {
    // Hover-only: prefetching every link in the viewport pulled ~300 kB of
    // extra HTML on the home page because the nav is dense.
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
});
