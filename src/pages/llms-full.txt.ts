import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '~/lib/site';
import { kitBoilerplate } from '~/lib/kit';

// MDX to plain prose: drop imports and component tags, keep the words
const plain = (body: string) =>
  body
    .replace(/^import .+$/gm, '')
    .replace(/<figure>[\s\S]*?<\/figure>/g, '')
    .replace(/<[A-Z][\w.]*\b[^>]*\/>/g, '')
    .replace(/<\/?[A-Z][\w.]*\b[^>]*>/g, '')
    .replace(/^(#{2,5}) /gm, '#$1 ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

export const GET: APIRoute = async () => {
  const posts = (await getCollection('posts')).filter((p) => !p.data.draft).sort((a, b) => +b.data.date - +a.data.date);
  const day = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

  const lines = [
    `# ${site.name}`,
    '',
    `> ${kitBoilerplate.short}`,
    '',
    kitBoilerplate.long,
    '',
    site.openTo,
    '',
    `Short index: ${site.url}/llms.txt`,
    '',
    ...posts.flatMap((p) => [
      '---',
      '',
      `## ${p.data.title}`,
      '',
      `${day.format(p.data.date)} · ${site.url}/posts/${p.id}/`,
      '',
      `> ${p.data.summary}`,
      '',
      plain(p.body ?? ''),
      '',
    ]),
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
