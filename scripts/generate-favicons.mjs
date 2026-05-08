#!/usr/bin/env node
/**
 * Generate cross-browser favicon assets from public/icon-source.svg.
 *
 * Outputs into public/:
 *   favicon.ico (16, 32, 48)
 *   favicon-16x16.png
 *   favicon-32x32.png
 *   apple-touch-icon.png (180x180)
 *   android-chrome-192x192.png
 *   android-chrome-512x512.png
 *
 * Run with: npm install --no-save sharp png-to-ico && node scripts/generate-favicons.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const publicDir = resolve(root, 'public');

const sharp = (await import('sharp')).default;
const pngToIco = (await import('png-to-ico')).default;

const sourcePath = resolve(publicDir, 'icon-source.svg');
const sourceSvg = await readFile(sourcePath);

const pngTargets = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

for (const { name, size } of pngTargets) {
  const out = resolve(publicDir, name);
  await sharp(sourceSvg, { density: 384 })
    .resize(size, size, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(out);
  console.log(`wrote ${name} (${size}x${size})`);
}

const icoSizes = [16, 32, 48];
const icoBuffers = await Promise.all(
  icoSizes.map((size) =>
    sharp(sourceSvg, { density: 384 })
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer()
  )
);
const icoBuffer = await pngToIco(icoBuffers);
await writeFile(resolve(publicDir, 'favicon.ico'), icoBuffer);
console.log(`wrote favicon.ico (${icoSizes.join(', ')})`);
