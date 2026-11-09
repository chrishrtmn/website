import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '~/lib/site';

export const GET: APIRoute = async () => {
  const experience = (await getCollection('experience')).map((e) => e.data).sort((a, b) => b.start - a.start);
  const projects = (await getCollection('projects')).map((p) => p.data).sort((a, b) => a.order - b.order);
  const skills = (await getCollection('skills')).map((s) => s.data);

  const groups = ['languages', 'frameworks', 'platforms', 'design', 'tooling'] as const;

  const resume = {
    $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
    basics: {
      name: site.name,
      label: 'Product Engineer',
      url: site.url,
      summary: site.description,
      location: { city: site.location.city, region: site.location.region, countryCode: 'US' },
      profiles: [
        { network: 'GitHub', username: site.handle, url: site.links.github },
        { network: 'LinkedIn', username: site.handle, url: site.links.linkedin },
      ],
    },
    work: experience.map((e) => ({
      name: e.employer,
      position: e.titles[0],
      url: e.url,
      startDate: String(e.start),
      endDate: e.end ? String(e.end) : undefined,
      summary: e.scope,
      highlights: e.titles.length > 1 ? e.titles : undefined,
      location: e.location,
    })),
    projects: projects.map((p) => ({
      name: p.name,
      description: p.line,
      url: p.url ?? p.repo,
      keywords: [...p.stack],
      startDate: String(p.year),
      type: p.status,
    })),
    skills: groups.map((g) => ({
      name: g,
      keywords: skills.filter((s) => s.group === g && !s.end).map((s) => s.id),
    })),
    education: [
      {
        institution: 'Western Governors University',
        area: 'Computer Science',
        studyType: 'B.S. (in progress)',
      },
    ],
    meta: { canonical: `${site.url}/resume.json`, version: 'v2', lastModified: new Date().toISOString().slice(0, 10) },
  };

  return new Response(JSON.stringify(resume, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
