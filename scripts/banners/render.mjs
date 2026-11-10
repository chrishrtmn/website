// Renders social banners from template.html.
//   node scripts/banners/render.mjs [--out DIR] [--sizes x,linkedin] [--dirs wordmark,tagline] [--guides]
// Needs playwright-core and an installed Chromium (npx playwright install chromium).
import { chromium } from 'playwright-core';
import { mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};

const out = resolve(opt('out', resolve(here, '../../.banners')));
const sizes = opt('sizes', 'x,linkedin,github,youtube,og').split(',');
const dirs = opt('dirs', 'wordmark').split(',');
const guides = args.includes('--guides');

const dims = {
  x: [1500, 500],
  bluesky: [3000, 1000],
  linkedin: [1584, 396],
  github: [1280, 640],
  youtube: [2560, 1440],
  og: [1200, 630],
};

await mkdir(out, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage();
const template = pathToFileURL(resolve(here, 'template.html')).href;

for (const size of sizes) {
  const [w, h] = dims[size];
  for (const dir of dirs) {
    await page.setViewportSize({ width: w, height: h });
    await page.goto(`${template}?size=${size}&dir=${dir}${guides ? '&guides=1' : ''}`);
    await page.evaluate(() => document.fonts.ready);
    const file = resolve(out, `${size}-${dir}${guides ? '-guides' : ''}.png`);
    await page.screenshot({ path: file, type: 'png' });
    console.log(file);
  }
}

await browser.close();
