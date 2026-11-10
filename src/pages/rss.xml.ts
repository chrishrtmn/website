import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '~/lib/site';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('posts')).filter((p) => !p.data.draft).sort((a, b) => +b.data.date - +a.data.date);

  return rss({
    title: `${site.name}, posts`,
    description: site.description,
    site: site.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.summary,
      pubDate: p.data.date,
      link: `/posts/${p.id}/`,
      categories: p.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
};
