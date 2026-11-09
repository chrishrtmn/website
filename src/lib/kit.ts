export interface KitAsset {
  id: string;
  name: string;
  note: string;
  svg: string;
  png: string;
  dark?: boolean;
  tile?: boolean;
}

export const kitAssets: KitAsset[] = [
  { id: 'ope-offwhite', name: 'OPE! wordmark', note: 'off-white, for dark backgrounds', svg: '/brand/ope-offwhite.svg', png: '/brand/ope-offwhite.png', dark: true },
  { id: 'ope-volt', name: 'OPE! wordmark', note: 'Volt, for dark backgrounds', svg: '/brand/ope-volt.svg', png: '/brand/ope-volt.png', dark: true },
  { id: 'ope-ink', name: 'OPE! wordmark', note: 'ink, for light backgrounds', svg: '/brand/ope-ink.svg', png: '/brand/ope-ink.png' },
  { id: 'ope-tile', name: 'OPE! tile', note: 'avatars and app icons', svg: '/brand/ope-tile.svg', png: '/brand/ope-tile.png', dark: true, tile: true },
  { id: 'ch-offwhite', name: 'CH monogram', note: 'off-white', svg: '/brand/ch-offwhite.svg', png: '/brand/ch-offwhite.png', dark: true },
  { id: 'ch-volt', name: 'CH monogram', note: 'Volt', svg: '/brand/ch-volt.svg', png: '/brand/ch-volt.png', dark: true },
  { id: 'ch-tile', name: 'CH tile', note: 'avatars', svg: '/brand/ch-tile.svg', png: '/brand/ch-tile.png', dark: true, tile: true },
];

export const kitColours = [
  { name: 'Volt', hex: '#E8FF2E', use: 'accent' },
  { name: 'Ink', hex: '#121400', use: 'type on Volt' },
  { name: 'Night', hex: '#111210', use: 'background' },
  { name: 'Off-white', hex: '#F3F1EE', use: 'text' },
];

export const kitBoilerplate = {
  long: 'Chris Hartman is a product engineer in northeast Ohio with over fifteen years building web products for global brands, currently on the e-commerce platform behind 23 beauty brands at The Estée Lauder Companies. He builds and runs his own products from design through deployment. He ships apps, websites and AI tooling in React, TypeScript and Node, with AI in the loop every day.',
  short: 'Chris Hartman, product engineer in northeast Ohio. Over fifteen years building web products for global brands; builds and runs his own.',
};

export const kitZip = '/paparazzi/PaparazziKit.zip';
export const kitHeadshot = { jpg: '/paparazzi/chris-hartman.jpg', webp1: '/paparazzi/chris-hartman-200.webp', webp2: '/paparazzi/chris-hartman-400.webp' };
