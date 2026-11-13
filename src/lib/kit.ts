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
  { id: 'ope-caution', name: 'OPE! wordmark', note: 'Caution, for dark backgrounds', svg: '/brand/ope-caution.svg', png: '/brand/ope-caution.png', dark: true },
  { id: 'ope-plate-caution', name: 'OPE! plate', note: 'inverted, ink on Caution', svg: '/brand/ope-plate-caution.svg', png: '/brand/ope-plate-caution.png', dark: true, tile: true },
  { id: 'ope-plate-night', name: 'OPE! plate', note: 'Caution on Night', svg: '/brand/ope-plate-night.svg', png: '/brand/ope-plate-night.png', dark: true, tile: true },
  { id: 'ope-tile', name: 'OPE! tile', note: 'avatars and app icons', svg: '/brand/ope-tile.svg', png: '/brand/ope-tile.png', dark: true, tile: true },
  { id: 'ope-tile-caution', name: 'OPE! tile', note: 'inverted, for avatars on dark UIs', svg: '/brand/ope-tile-caution.svg', png: '/brand/ope-tile-caution.png', dark: true, tile: true },
];

export const kitColours = [
  { name: 'Caution', hex: '#FEFF09', use: 'accent' },
  { name: 'Ink', hex: '#0E0E01', use: 'type on Caution' },
  { name: 'Night', hex: '#111210', use: 'background' },
  { name: 'Off-white', hex: '#F3F1EE', use: 'text' },
];

export const kitBoilerplate = {
  long: 'Chris Hartman is a product engineer in northeast Ohio with over fifteen years building web products for global brands, currently on the e-commerce platform behind 23 beauty brands at The Estée Lauder Companies. He builds and runs his own products, including LinuxStatistics and contribs.sh, from design through deployment. He ships apps, websites and AI tooling in React, TypeScript and Node, with AI in the loop every day.',
  short: 'Chris Hartman, product engineer in northeast Ohio. Over fifteen years building web products for global brands; builds and runs his own.',
};

export const kitZip = '/paparazzi/PaparazziKit.zip';
export const kitHeadshot = { jpg: '/paparazzi/chris-hartman.jpg', webp1: '/paparazzi/chris-hartman-200.webp', webp2: '/paparazzi/chris-hartman-400.webp' };
