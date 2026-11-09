import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '~/lib/site';
import { kitBoilerplate } from '~/lib/kit';

export const GET: APIRoute = async () => {
  const projects = (await getCollection('projects'))
    .map((p) => p.data)
    .filter((p) => p.status !== 'archived')
    .sort((a, b) => a.order - b.order);
  const posts = (await getCollection('posts')).filter((p) => !p.data.draft).sort((a, b) => +b.data.date - +a.data.date);

  const lines = [
    `# ${site.name}`,
    '',
    `> ${kitBoilerplate.short}`,
    '',
    kitBoilerplate.long,
    '',
    '## Links',
    '',
    `- [Home](${site.url}/)`,
    `- [Résumé (JSON Resume)](${site.url}/resume.json)`,
    `- [Stack](${site.url}/stack/)`,
    `- [Timeline](${site.url}/timeline/)`,
    `- [Uses](${site.url}/uses/)`,
    `- [Press kit](${site.url}/paparazzi/)`,
    `- [GitHub](${site.links.github})`,
    `- [LinkedIn](${site.links.linkedin})`,
    `- Email: ${site.email}`,
    '',
    '## Projects',
    '',
    ...projects.map((p) => {
      const href = p.url ?? p.repo;
      return `- ${href ? `[${p.name}](${href})` : p.name}: ${p.line} (${p.status})`;
    }),
    '',
    '## Posts',
    '',
    ...posts.map((p) => `- [${p.data.title}](${site.url}/posts/${p.id}/): ${p.data.summary}`),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
