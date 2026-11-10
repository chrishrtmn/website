// Renders a 1200×630 share card for every published post into public/og/posts/<slug>.png.
//   node scripts/banners/posts.mjs
// Reads title, date and draft from each post's frontmatter. Needs playwright-core and Chromium.
import { chromium } from 'playwright-core';
import { mkdir, readdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const posts = resolve(here, '../../src/content/posts');
const out = resolve(here, '../../public/og/posts');
const template = pathToFileURL(resolve(here, 'template.html')).href;

const field = (fm, key) => fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1].trim().replace(/^['"]|['"]$/g, '');

await mkdir(out, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

for (const file of (await readdir(posts)).filter((f) => f.endsWith('.mdx'))) {
  const fm = (await readFile(resolve(posts, file), 'utf8')).split('---')[1] ?? '';
  if (field(fm, 'draft') === 'true') continue;
  const slug = file.replace(/\.mdx$/, '');
  const date = new Date(`${field(fm, 'date')}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
  const params = new URLSearchParams({ size: 'og', dir: 'post', title: field(fm, 'title') ?? slug, date });
  await page.goto(`${template}?${params}`);
  await page.evaluate(() => document.fonts.ready);
  const file2 = resolve(out, `${slug}.png`);
  await page.screenshot({ path: file2, type: 'png' });
  console.log(file2);
}

await browser.close();
