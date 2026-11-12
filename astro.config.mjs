// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://chrishrtmn.com',
  output: 'static',
  // staticHeaders: the CSP goes out as a real response header, not only a <meta> tag
  adapter: vercel({ staticHeaders: true }),
  integrations: [preact(), mdx(), sitemap()],
  compressHTML: true,
  // small component styles go out as files, not inline <style> blocks the CSP would have to pin
  build: { inlineStylesheets: 'never' },
  // shiki colours code with inline styles the CSP would block; posts stay plain
  markdown: { syntaxHighlight: false },
  security: {
    // bundled and inline scripts are allowed by build-time hash; analytics is served from this origin
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "media-src 'self'",
        "font-src 'self'",
        "connect-src 'self'",
        "manifest-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
        'upgrade-insecure-requests',
      ],
      scriptDirective: {
        resources: ["'self'"],
      },
      styleDirective: {
        // per-letter and per-cell custom properties live in style="" attributes
        resources: ["'self'", { resource: "'unsafe-inline'", kind: 'attribute' }],
      },
    },
  },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
