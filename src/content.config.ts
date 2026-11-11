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
    status: z.enum(['shipping', 'building', 'internal', 'paused', 'archived', 'concept']),
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
    noreferrer: z.boolean().default(false),
    titles: z.array(z.string()).min(1),
    start: year,
    startMonth: z.number().int().min(1).max(12),
    end: year.optional(),
    endMonth: z.number().int().min(1).max(12).optional(),
    location: z.string(),
    type: z.string(),
    scope: z.string(),
    highlights: z.array(z.string()).optional(),
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

export const collections = { projects, experience, skills, posts };
