import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { kitBoilerplate } from '../src/lib/kit.ts';
import { site } from '../src/lib/site.ts';

const out = fileURLToPath(new URL('../public/paparazzi/boilerplate.txt', import.meta.url));

const text = [
  kitBoilerplate.long,
  '',
  `Short: ${kitBoilerplate.short}`,
  '',
  `Name: ${site.name}`,
  `Handle: ${site.handle}`,
  `Pronunciation: ${site.pronunciation}`,
  `Location: ${site.location.city}, ${site.location.region} (remote)`,
  `Availability: ${site.openTo}`,
  `Site: ${site.url}`,
  '',
].join('\n');

writeFileSync(out, text);
console.log(out);
