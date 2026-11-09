export interface Top8Entry {
  name: string;
  note: string;
  url?: string;
  placeholder?: boolean;
}

const tbd: Top8Entry = { name: 'tbd', note: '', placeholder: true };

export const top8: Top8Entry[] = [{ name: 'Tom', note: 'always #1' }, tbd, tbd, tbd, tbd, tbd, tbd, tbd];

export const profileSong: { title: string; artist: string; url?: string } | null = null;

export const UNLOCK_KEY = 'top8';
export const UNLOCK_EVENT = 'top8:unlock';
