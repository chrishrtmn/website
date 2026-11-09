export interface Top8Entry {
  name: string;
  note: string;
  url?: string;
}

export const top8: Top8Entry[] = [
  { name: 'Tom', note: 'always #1' },
  { name: 'Astro', note: 'this site', url: 'https://astro.build' },
  { name: 'Proxmox', note: 'the homelab', url: 'https://www.proxmox.com' },
  { name: 'Onewheel', note: 'commute', url: 'https://onewheel.com' },
  { name: 'Zed', note: 'editor', url: 'https://zed.dev' },
  { name: 'Kagi', note: 'search', url: 'https://kagi.com' },
  { name: 'Obsidian', note: 'notes', url: 'https://obsidian.md' },
  { name: 'The Guardians', note: 'baseball', url: 'https://www.mlb.com/guardians' },
];

export const UNLOCK_KEY = 'top8';
export const UNLOCK_EVENT = 'top8:unlock';
