export const site = {
  name: 'Chris Hartman',
  handle: 'chrishrtmn',
  url: 'https://chrishrtmn.com',
  title: 'Chris Hartman, product engineer in northeast Ohio',
  description:
    'Product engineer in northeast Ohio. Nineteen years of front-end work for global brands, and a few products of my own that I build and run.',
  pronunciation: 'HART-mun',
  email: 'hello@chrishrtmn.com',
  location: { city: 'Kent', region: 'Ohio', tz: 'America/New_York', lat: 41.15, lng: -81.36 },
  links: {
    github: 'https://github.com/chrishrtmn',
    linkedin: 'https://www.linkedin.com/in/chrishrtmn',
  },
} as const;

export const nav = [
  { href: '/#work', label: 'work' },
  { href: '/posts', label: 'posts' },
  { href: '/uses', label: 'uses' },
  { href: '/#about', label: 'about' },
] as const;
