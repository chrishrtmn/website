import type { APIRoute } from 'astro';
import { site } from '~/lib/site';
import { fallbackNow, fetchWeather, type NowPayload } from '~/lib/now';

export const prerender = false;

const json = (body: NowPayload, maxAge: number) =>
  new Response(JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': `public, s-maxage=${maxAge}, stale-while-revalidate=${maxAge}`,
    },
  });

export const GET: APIRoute = async ({ request }) => {
  const signal = AbortSignal.timeout(4000);
  const h = request.headers;
  const city = h.get('x-vercel-ip-city');
  const lat = Number(h.get('x-vercel-ip-latitude'));
  const lng = Number(h.get('x-vercel-ip-longitude'));
  const hasThere = !!city && Number.isFinite(lat) && Number.isFinite(lng);

  try {
    const [here, there] = await Promise.all([
      fetchWeather(site.location.lat, site.location.lng, `${site.location.city}, OH`, signal),
      hasThere ? fetchWeather(lat, lng, decodeURIComponent(city), signal).catch(() => undefined) : undefined,
    ]);
    return json(there ? { here, there } : { here }, 1800);
  } catch {
    return json(fallbackNow, 300);
  }
};
