// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://chrishrtmn.com',
  output: 'static',
  adapter: vercel(),
  integrations: [preact(), mdx(), sitemap()],
  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
