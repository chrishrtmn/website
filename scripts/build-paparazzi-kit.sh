#!/bin/sh
# Rebuilds public/paparazzi/PaparazziKit.zip from public/brand and public/paparazzi.
# boilerplate.txt is written from src/lib first so the kit and the site share one bio.
# Deterministic: fixed timestamps, no extra attributes, so the zip only changes when its contents do.
set -eu
cd "$(dirname "$0")/.."
node scripts/write-boilerplate.ts
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
kit="$tmp/PaparazziKit"
mkdir -p "$kit/Logos" "$kit/Headshots"
cp public/brand/*.svg public/brand/*.png "$kit/Logos/"
cp public/paparazzi/chris-hartman.jpg "$kit/Headshots/"
cp public/paparazzi/colours.txt public/paparazzi/boilerplate.txt "$kit/"
cat > "$kit/README.txt" <<'TXT'
chrishrtmn.com paparazzi kit

Logos/
  ope-offwhite.svg/.png   OPE! wordmark, off-white, for dark backgrounds
  ope-volt.svg/.png       OPE! wordmark, Volt, for dark backgrounds
  ope-ink.svg/.png        OPE! wordmark, ink, for light backgrounds
  ope-tile.svg/.png       OPE! on a dark rounded tile; avatars and app icons
  ch-offwhite.svg/.png    CH monogram, off-white
  ch-volt.svg/.png        CH monogram, Volt
  ch-tile.svg/.png        CH monogram on a dark tile
Headshots/
  chris-hartman.jpg       500 px, web use
colours.txt               hex and rgb values, font names and licences
boilerplate.txt           long and short bios, name, handle, location

Please don't recolour, outline, stretch, or add effects to the marks. Volt is the only accent.
TXT
find "$kit" -exec touch -t 202601010000 {} +
rm -f public/paparazzi/PaparazziKit.zip
( cd "$tmp" && zip -X -r -q "$OLDPWD/public/paparazzi/PaparazziKit.zip" PaparazziKit )
ls -l public/paparazzi/PaparazziKit.zip
