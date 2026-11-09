import type { APIRoute } from 'astro';
import { site } from '~/lib/site';
import { fallbackCommit, fetchLatestPush, type CommitPayload } from '~/lib/now';

export const prerender = false;

const json = (body: CommitPayload, maxAge: number) =>
  new Response(JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': `public, s-maxage=${maxAge}, stale-while-revalidate=${maxAge}`,
    },
  });

export const GET: APIRoute = async () => {
  try {
    const payload = await fetchLatestPush(site.handle, import.meta.env.GITHUB_TOKEN, AbortSignal.timeout(4000));
    return json(payload, 600);
  } catch {
    return json(fallbackCommit, 120);
  }
};
