export interface Weather {
  city: string;
  tempF: number;
  label: string;
}

export interface NowPayload {
  here: Weather;
  there?: Weather;
}

export interface CommitPayload {
  message: string;
  repo: string;
  at: string;
}

export const fallbackNow: NowPayload = {
  here: { city: 'Kent, OH', tempF: 52, label: 'overcast' },
};

export const fallbackCommit: CommitPayload = {
  message: 'Add paparazzi kit',
  repo: 'chrishrtmn/website',
  at: '2026-11-08T21:00:00Z',
};

const wmo: Record<number, string> = {
  0: 'clear',
  1: 'mostly clear',
  2: 'partly cloudy',
  3: 'overcast',
  45: 'fog',
  48: 'fog',
  51: 'drizzle',
  53: 'drizzle',
  55: 'drizzle',
  61: 'rain',
  63: 'rain',
  65: 'heavy rain',
  71: 'snow',
  73: 'snow',
  75: 'heavy snow',
  77: 'snow',
  80: 'showers',
  81: 'showers',
  82: 'heavy showers',
  85: 'snow showers',
  86: 'snow showers',
  95: 'thunderstorm',
  96: 'thunderstorm',
  99: 'thunderstorm',
};

export function weatherLabel(code: number): string {
  return wmo[code] ?? 'weather';
}

export async function fetchWeather(lat: number, lng: number, city: string, signal?: AbortSignal): Promise<Weather> {
  const url = new URL('https://api.open-meteo.com/v1/forecast');
  url.searchParams.set('latitude', String(lat));
  url.searchParams.set('longitude', String(lng));
  url.searchParams.set('current', 'temperature_2m,weather_code');
  url.searchParams.set('temperature_unit', 'fahrenheit');
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`open-meteo ${res.status}`);
  const data = (await res.json()) as { current?: { temperature_2m?: number; weather_code?: number } };
  const cur = data.current;
  if (!cur || typeof cur.temperature_2m !== 'number') throw new Error('open-meteo shape');
  return { city, tempF: Math.round(cur.temperature_2m), label: weatherLabel(cur.weather_code ?? -1) };
}

export async function fetchLatestPush(user: string, token?: string, signal?: AbortSignal): Promise<CommitPayload> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'chrishrtmn.com',
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(`https://api.github.com/users/${user}/events/public?per_page=30`, { headers, signal });
  if (!res.ok) throw new Error(`github ${res.status}`);
  const events = (await res.json()) as Array<{
    type: string;
    created_at: string;
    repo: { name: string };
    payload: { head?: string; commits?: Array<{ message: string }> };
  }>;
  const push = events.find((e) => e.type === 'PushEvent');
  if (!push) throw new Error('no push event');
  const inline = push.payload.commits;
  let message = inline?.length ? inline[inline.length - 1].message : '';
  if (!message && push.payload.head) {
    const c = await fetch(`https://api.github.com/repos/${push.repo.name}/commits/${push.payload.head}`, { headers, signal });
    if (c.ok) message = ((await c.json()) as { commit?: { message?: string } }).commit?.message ?? '';
  }
  if (!message) throw new Error('no commit message');
  return { message: message.split('\n')[0], repo: push.repo.name, at: push.created_at };
}

export function relativeTime(iso: string, now = Date.now()): string {
  const diff = Math.max(0, now - new Date(iso).getTime());
  const m = Math.round(diff / 60_000);
  if (m < 1) return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.round(h / 24);
  if (d < 30) return `${d}d ago`;
  const mo = Math.round(d / 30);
  return mo < 12 ? `${mo}mo ago` : `${Math.round(mo / 12)}y ago`;
}

export function weatherText(w: Weather): string {
  return `${w.tempF}°F ${w.label}`;
}
