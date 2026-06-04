// Pixel-diff two screenshot sets produced by screenshot.mjs.
// Usage: node scripts/compare-screenshots.mjs <baseDir> <afterDir> <diffOutDir>
// Requires pixelmatch + pngjs available on the module path (install in a temp dir for the audit).
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const [baseDir, afterDir, outDir = '.audit-screenshots'] =
  process.argv.slice(2);
if (!baseDir || !afterDir) {
  console.error(
    'Usage: node compare-screenshots.mjs <baseDir> <afterDir> [diffOutDir]'
  );
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });

let regressions = 0;
for (const vp of ['desktop', 'tablet', 'mobile']) {
  const a = PNG.sync.read(readFileSync(`${baseDir}/index-${vp}.png`));
  const b = PNG.sync.read(readFileSync(`${afterDir}/index-${vp}.png`));
  if (a.width !== b.width || a.height !== b.height) {
    console.log(
      `${vp}: DIMENSION CHANGE ${a.width}x${a.height} -> ${b.width}x${b.height}`
    );
    regressions++;
    continue;
  }
  const diff = new PNG({ width: a.width, height: a.height });
  const n = pixelmatch(a.data, b.data, diff.data, a.width, a.height, {
    threshold: 0.1,
  });
  const pct = (100 * n) / (a.width * a.height);
  writeFileSync(`${outDir}/diff-${vp}.png`, PNG.sync.write(diff));
  console.log(
    `${vp}: ${a.width}x${a.height}  diff ${n}px (${pct.toFixed(3)}%)`
  );
  if (pct > 2) regressions++;
}
process.exit(regressions > 0 ? 1 : 0);
