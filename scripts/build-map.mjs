// Builds src/assets/map-us-bc.svg and src/assets/map-us-bc.json from Natural Earth
// 1:50m admin-1 boundaries. Run by hand when the source or the projection changes:
//
//   node scripts/build-map.mjs path/to/ne_50m_admin_1_states_provinces.geojson
//
// Source: https://github.com/nvkelso/natural-earth-vector (public domain).

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { geoAlbers, geoPath } from 'd3-geo';
import { topology } from 'topojson-server';
import { feature } from 'topojson-client';
import { presimplify, quantile, simplify } from 'topojson-simplify';

const src = process.argv[2];
if (!src) {
  console.error('usage: node scripts/build-map.mjs <ne_50m_admin_1_states_provinces.geojson>');
  process.exit(1);
}

const WIDTH = 960;
const HEIGHT = 600;
const SKIP = new Set(['AK', 'HI', 'DC']);

// BC runs to 60°N; keep the southern slice so Vancouver sits in frame without the whole province.
const BC_NORTH = 51.5;

const clipNorth = (geometry, lat) => {
  const clipRing = (ring) => {
    const out = [];
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i];
      const b = ring[(i + 1) % ring.length];
      const aIn = a[1] <= lat;
      const bIn = b[1] <= lat;
      if (aIn) out.push(a);
      if (aIn !== bIn) {
        const t = (lat - a[1]) / (b[1] - a[1]);
        out.push([a[0] + (b[0] - a[0]) * t, lat]);
      }
    }
    if (out.length && (out[0][0] !== out.at(-1)[0] || out[0][1] !== out.at(-1)[1])) out.push(out[0]);
    return out.length >= 4 ? out : null;
  };
  const polys = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
  const clipped = polys.map((rings) => rings.map(clipRing).filter(Boolean)).filter((rings) => rings.length);
  return { type: 'MultiPolygon', coordinates: clipped };
};

const raw = JSON.parse(readFileSync(src, 'utf8'));
const keep = raw.features
  .filter((f) => {
    const { iso_a2, postal } = f.properties;
    if (iso_a2 === 'US') return !SKIP.has(postal);
    return iso_a2 === 'CA' && postal === 'BC';
  })
  .map((f) => (f.properties.postal === 'BC' ? { ...f, geometry: clipNorth(f.geometry, BC_NORTH) } : f));

const topo = presimplify(topology({ regions: { type: 'FeatureCollection', features: keep } }));
const simplified = simplify(topo, quantile(topo, 0.08));
const regions = feature(simplified, simplified.objects.regions);

const projection = geoAlbers().rotate([98, 0]).center([0, 40]).parallels([30, 50]);
projection.fitSize([WIDTH, HEIGHT], regions);
const path = geoPath(projection);

const order = regions.features
  .map((f) => ({ f, x: path.centroid(f)[0] }))
  .sort((a, b) => a.x - b.x);

const paths = order
  .map(({ f }, i) => {
    const id = `${f.properties.iso_a2}-${f.properties.postal}`;
    const d = path(f);
    if (!d) return '';
    return `<path id="${id}" style="--i:${i}" d="${d.replace(/(\d)\.(\d{2})\d+/g, '$1.$2')}"/>`;
  })
  .join('\n');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img" aria-label="Map of the lower 48 United States and British Columbia">
<g class="regions">
${paths}
</g>
</svg>
`;

mkdirSync('src/assets', { recursive: true });
writeFileSync('src/assets/map-us-bc.svg', svg);
writeFileSync(
  'src/assets/map-us-bc.json',
  JSON.stringify(
    {
      width: WIDTH,
      height: HEIGHT,
      rotate: projection.rotate(),
      center: projection.center(),
      parallels: projection.parallels(),
      scale: projection.scale(),
      translate: projection.translate(),
    },
    null,
    2,
  ) + '\n',
);

console.log(`${order.length} regions, ${(Buffer.byteLength(svg) / 1024).toFixed(1)} KB`);
