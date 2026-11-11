// Writes src/content/activity.json from a contribs.sh export (merged, multi-source).
//   node scripts/write-activity.ts path/to/contributions.json
// Keeps counts only: a 53-week grid of levels 0–4 plus totals. No repos, hosts or dates per cell.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

interface Day {
  date: string;
  count: number;
  known: boolean;
}
interface Source {
  id: string;
  label: string;
  type: string;
}
interface Merged {
  generatedAt: string;
  sources?: Source[];
  years: { weeks: { days: Day[] }[] }[];
}

const src = process.argv[2];
if (!src) {
  console.error('usage: node scripts/write-activity.ts <contributions.json>');
  process.exit(1);
}

const data: Merged = JSON.parse(readFileSync(src, 'utf8'));
const days = data.years
  .flatMap((y) => y.weeks.flatMap((w) => w.days))
  .filter((d) => d.known)
  .sort((a, b) => (a.date < b.date ? -1 : 1));

const end = new Date(`${data.generatedAt.slice(0, 10)}T00:00:00Z`);
const start = new Date(end);
start.setUTCDate(start.getUTCDate() - 7 * 53);
let window = days.filter((d) => {
  const t = new Date(`${d.date}T00:00:00Z`);
  return t >= start && t <= end;
});
while (window.length && new Date(`${window[0].date}T00:00:00Z`).getUTCDay() !== 0) window = window.slice(1);
// end on the export day, so the wall is current; the unfinished week is padded with blank (future) days
const blanks = (7 - (window.length % 7)) % 7;

const level = (c: number) => (c === 0 ? 0 : c <= 2 ? 1 : c <= 4 ? 2 : c <= 7 ? 3 : 4);
const cells = [...window.map((d) => String(level(d.count))), ...Array(blanks).fill('-')];
const weeks: string[] = [];
for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7).join(''));
// keep 53 columns
while (weeks.length > 53) weeks.shift();

const shown = window.slice(-(weeks.length * 7 - blanks));
window = shown;
// one plain phrase per kind of source, without account names or hosts:
// a github.com login is public, an enterprise/work account is private, anything else is named by its type
const kind = (s: Source) =>
  /enterprise|work|org/i.test(`${s.id} ${s.label}`) ? 'private work repos' : s.type === 'github' ? 'public github' : s.type;
const kinds = [...new Set((data.sources ?? []).map(kind))].sort((a, b) => (a === 'public github' ? -1 : b === 'public github' ? 1 : 0));
const source = `${kinds.join(' + ') || 'github'}, merged by contribs.sh · counts only`;

const out = {
  source,
  from: window[0]?.date.slice(0, 7),
  to: window.at(-1)?.date.slice(0, 7),
  total: window.reduce((s, d) => s + d.count, 0),
  active: window.filter((d) => d.count > 0).length,
  days: window.length,
  weeks,
};

const dest = fileURLToPath(new URL('../src/content/activity.json', import.meta.url));
writeFileSync(dest, JSON.stringify(out, null, 2) + '\n');
console.log(dest, `${out.weeks.length} weeks, ${out.active}/${out.days} days, ${out.total} events`);
