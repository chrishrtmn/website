import { useEffect, useState } from 'preact/hooks';
import { relativeTime, weatherText, type CommitPayload, type NowPayload } from '~/lib/now';

interface Props {
  kind: 'weather' | 'commit';
  fallback: string;
}

async function get<T>(url: string): Promise<T | undefined> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return undefined;
    return (await res.json()) as T;
  } catch {
    return undefined;
  }
}

function weatherLine(d: NowPayload): string {
  const here = `${weatherText(d.here)} here`;
  return d.there ? `${here} · ${weatherText(d.there)} where you are` : here;
}

function commitLine(d: CommitPayload): string {
  return `“${d.message}” · ${d.repo.replace(/^chrishrtmn\//, '')} · ${relativeTime(d.at)}`;
}

export default function Live({ kind, fallback }: Props) {
  const [text, setText] = useState(fallback);

  useEffect(() => {
    let alive = true;
    if (kind === 'weather') {
      get<NowPayload>('/api/now.json').then((d) => alive && d && setText(weatherLine(d)));
    } else {
      get<CommitPayload>('/api/commit.json').then((d) => alive && d && setText(commitLine(d)));
    }
    return () => {
      alive = false;
    };
  }, [kind]);

  return <span>{text}</span>;
}
