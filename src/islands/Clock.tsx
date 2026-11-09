import { useEffect, useState } from 'preact/hooks';

interface Props {
  tz: string;
  seconds?: boolean;
}

export default function Clock({ tz, seconds = true }: Props) {
  const [now, setNow] = useState<string>('');

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
      second: seconds ? '2-digit' : undefined,
      hour12: false,
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, seconds ? 1000 : 30_000);
    return () => clearInterval(id);
  }, [tz, seconds]);

  return <time dateTime={now}>{now || (seconds ? '00:00:00' : '00:00')}</time>;
}
