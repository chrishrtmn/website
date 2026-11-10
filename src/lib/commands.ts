import { getCollection } from 'astro:content';
import { site } from './site';

export interface Command {
  id: string;
  group: 'go' | 'projects' | 'posts' | 'do' | 'find' | 'hidden';
  label: string;
  hint?: string;
  href?: string;
  action?: 'copy-email' | 'request-resume' | 'toggle-motion';
  keywords?: string;
  toast?: string;
}

export async function buildCommands(): Promise<Command[]> {
  const projects = (await getCollection('projects')).map((p) => p.data).sort((a, b) => a.order - b.order);
  const posts = (await getCollection('posts')).filter((p) => !p.data.draft);

  const go: Command[] = [
    { id: 'home', group: 'go', label: 'Home', href: '/' },
    { id: 'projects', group: 'go', label: 'Projects', href: '/#projects', keywords: 'receipts work' },
    { id: 'experience', group: 'go', label: 'Experience', href: '/#experience', keywords: 'résumé resume timeline career' },
    { id: 'posts', group: 'go', label: 'Posts', href: '/posts' },
    { id: 'contact', group: 'go', label: 'Contact', href: '/#contact' },
    { id: 'paparazzi', group: 'go', label: 'Paparazzi kit', href: '/paparazzi/' },
  ];

  const work: Command[] = projects
    .filter((p) => p.featured && (p.url || p.repo))
    .map((p) => ({
      id: `project-${p.id}`,
      group: 'projects',
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
  ];

  const findMe: Command[] = [
    { id: 'github', group: 'find', label: 'GitHub', href: site.links.github, keywords: 'social code' },
    { id: 'linkedin', group: 'find', label: 'LinkedIn', href: site.links.linkedin, keywords: 'social' },
    ...site.social.map((s) => ({ id: s.network.toLowerCase(), group: 'find' as const, label: s.network, href: s.url, keywords: `social ${s.username}` })),
    { id: 'rss', group: 'find', label: 'RSS feed', href: '/rss.xml', keywords: 'feed subscribe posts' },
  ];

  const hidden: Command[] = [
    { id: 'talent-3', group: 'hidden', label: 'Reads lips with uncanny accuracy', toast: 'I saw what you said.', keywords: 'hidden talent' },
    { id: 'talent-1', group: 'hidden', label: 'Tears on cue', toast: "it's called acting.", keywords: 'hidden talent' },
    { id: 'talent-2', group: 'hidden', label: 'Double-jointed thumbs', keywords: 'hidden talent' },
    { id: 'talent-4', group: 'hidden', label: 'JCVD splits', toast: 'still in training.', keywords: 'hidden talent van damme' },
  ];

  return [...go, ...work, ...postCmds, ...act, ...findMe, ...hidden];
}
