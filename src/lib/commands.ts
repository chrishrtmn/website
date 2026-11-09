import { getCollection } from 'astro:content';
import { site } from './site';
import { top8 as top8Entries } from '~/content/top8';

export interface Command {
  id: string;
  group: 'go' | 'work' | 'posts' | 'do' | 'hidden' | 'top8';
  label: string;
  hint?: string;
  href?: string;
  action?: 'copy-email' | 'request-resume' | 'toggle-motion';
  keywords?: string;
}

export async function buildCommands(): Promise<Command[]> {
  const projects = (await getCollection('projects')).map((p) => p.data).sort((a, b) => a.order - b.order);
  const posts = (await getCollection('posts')).filter((p) => !p.data.draft);

  const go: Command[] = [
    { id: 'home', group: 'go', label: 'Home', href: '/' },
    { id: 'work', group: 'go', label: 'Selected work', href: '/#work' },
    { id: 'experience', group: 'go', label: 'Experience', href: '/#experience' },
    { id: 'posts', group: 'go', label: 'Posts', href: '/posts' },
    { id: 'stack', group: 'go', label: 'Stack', href: '/stack' },
    { id: 'timeline', group: 'go', label: 'Timeline', href: '/timeline' },
    { id: 'contact', group: 'go', label: 'Contact', href: '/#contact' },
    { id: 'paparazzi', group: 'go', label: 'Paparazzi kit', href: '/paparazzi/' },
  ];

  const work: Command[] = projects
    .filter((p) => p.url || p.repo)
    .map((p) => ({
      id: `project-${p.id}`,
      group: 'work',
      label: p.name,
      hint: p.status,
      href: p.url ?? p.repo,
      keywords: p.stack.join(' '),
    }));

  const postCmds: Command[] = posts.map((p) => ({
    id: `post-${p.id}`,
    group: 'posts',
    label: p.data.title,
    href: `/posts/${p.id}`,
    keywords: p.data.tags.join(' '),
  }));

  const act: Command[] = [
    { id: 'copy-email', group: 'do', label: 'Copy email address', action: 'copy-email' },
    { id: 'request-resume', group: 'do', label: 'Request résumé', action: 'request-resume' },
    { id: 'resume-json', group: 'do', label: 'Open resume.json', href: '/resume.json' },
    { id: 'toggle-motion', group: 'do', label: 'Toggle motion', action: 'toggle-motion' },
    { id: 'github', group: 'do', label: 'GitHub', href: site.links.github },
    { id: 'linkedin', group: 'do', label: 'LinkedIn', href: site.links.linkedin },
  ];

  const top8: Command[] = top8Entries.map((e, i) => ({
    id: `top8-${i}`,
    group: 'top8' as const,
    label: `${i + 1}. ${e.name}`,
    hint: e.note,
    href: e.url,
  }));

  const hidden: Command[] = [
    { id: 'talent-1', group: 'hidden', label: 'Can cry on command', hint: 'hidden talent' },
    { id: 'talent-2', group: 'hidden', label: 'Double-jointed thumbs', hint: 'hidden talent' },
    { id: 'talent-3', group: 'hidden', label: 'Reads lips across a loud room', hint: 'hidden talent' },
  ];

  return [...go, ...work, ...postCmds, ...act, ...top8, ...hidden];
}
