export const site = {
  name: 'Chris Hartman',
  handle: 'chrishrtmn',
  url: 'https://chrishrtmn.com',
  title: 'Chris Hartman, product engineer in northeast Ohio',
  description:
    'Product engineer in northeast Ohio. Over fifteen years building web products for global brands, and a few of my own that I build and run.',
  pronunciation: 'HART-mun',
  email: 'hello@chrishrtmn.com',
  location: { city: 'Kent', region: 'Ohio', tz: 'America/New_York', lat: 41.15, lng: -81.36 },
  openTo: 'Takes on contract work through Double Slash Studios.',
  links: {
    github: 'https://github.com/chrishrtmn',
    linkedin: 'https://www.linkedin.com/in/chrishrtmn',
    source: 'https://github.com/chrishrtmn/website',
  },
  social: [
    { network: 'X', username: 'chrishrtmn', url: 'https://x.com/chrishrtmn' },
    { network: 'Bluesky', username: 'chrishrtmn.com', url: 'https://bsky.app/profile/chrishrtmn.com' },
  ],
} as const;

export const nav = [
  { href: '/#projects', label: 'projects' },
  { href: '/#work', label: 'work' },
  { href: '/#about', label: 'about' },
  { href: '/posts', label: 'posts' },
] as const;
