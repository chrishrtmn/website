import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const year = z.number().int().min(1990).max(2100);

const projects = defineCollection({
  loader: file('src/content/projects.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    line: z.string(),
    stack: z.array(z.string()).min(1),
    status: z.enum(['shipping', 'paused', 'archived', 'concept']),
    year,
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    metric: z.object({ value: z.string(), label: z.string() }).optional(),
    order: z.number().int(),
    featured: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: file('src/content/experience.json'),
  schema: z.object({
    id: z.string(),
    employer: z.string(),
    url: z.string().url().optional(),
    titles: z.array(z.string()).min(1),
    start: year,
    end: year.optional(),
    location: z.string(),
    scope: z.string(),
    stack: z.array(z.string()),
  }),
});

const skills = defineCollection({
  loader: file('src/content/skills.json'),
  schema: z.object({
    id: z.string(),
    group: z.enum(['languages', 'frameworks', 'platforms', 'design', 'tooling']),
    start: year,
    end: year.optional(),
    professional: z.boolean(),
  }),
});

const timeline = defineCollection({
  loader: file('src/content/timeline.json'),
  schema: z.object({
    id: z.string(),
    date: z.string().regex(/^\d{4}(-\d{2})?(-\d{2})?$/),
    kind: z.enum(['career', 'project', 'event', 'hearing']),
    title: z.string(),
    detail: z.string().optional(),
    place: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: 'src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().max(200),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, experience, skills, timeline, posts };
