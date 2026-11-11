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
# the ink wordmark only feeds the social banners; it's not offered in the kit
rm -f "$kit/Logos/ope-ink.svg" "$kit/Logos/ope-ink.png"
cp public/paparazzi/chris-hartman.jpg "$kit/Headshots/"
cp public/paparazzi/colours.txt public/paparazzi/boilerplate.txt "$kit/"
cat > "$kit/README.txt" <<'TXT'
chrishrtmn.com paparazzi kit

Logos/
  ope-offwhite.svg/.png   OPE! wordmark, off-white, for dark backgrounds
  ope-caution.svg/.png    OPE! wordmark, Caution, for dark backgrounds
  ope-plate-caution.svg/.png OPE! wordmark, ink on a Caution plate (inverted)
  ope-plate-night.svg/.png OPE! wordmark, Caution on a Night plate
  ope-tile.svg/.png       OPE! on a dark rounded tile; avatars and app icons
  ope-tile-caution.svg/.png OPE! on a Caution rounded tile (inverted)
Headshots/
  chris-hartman.jpg       500 px, web use
colours.txt               hex and rgb values, font names and licences
boilerplate.txt           long and short bios, name, handle, location

Please don't recolour, outline, stretch, or add effects to the marks. Caution is the only accent.
TXT
find "$kit" -exec touch -t 202601010000 {} +
rm -f public/paparazzi/PaparazziKit.zip
( cd "$tmp" && zip -X -r -q "$OLDPWD/public/paparazzi/PaparazziKit.zip" PaparazziKit )
ls -l public/paparazzi/PaparazziKit.zip
