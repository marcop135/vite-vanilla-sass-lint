#!/usr/bin/env node
/**
 * Extract the Keep-a-Changelog section for a version and write it to a file
 * (for GitHub Release bodies without auto-generated @username lines).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function extractSection(changelog, version) {
  const lines = changelog.split(/\r?\n/);
  const header = `## [${version}]`;
  const idx = lines.findIndex((l) => l.startsWith(header));
  if (idx === -1) return null;
  const body = [];
  for (let i = idx + 1; i < lines.length; i++) {
    if (/^## \[/.test(lines[i])) break;
    body.push(lines[i]);
  }
  const text = body.join('\n').trim();
  return text.length > 0 ? text : null;
}

const versionArg = process.argv[2];
const outPath = process.argv[3];
if (!versionArg || !outPath) {
  console.error(
    'Usage: release-notes-from-changelog.mjs <vX.Y.Z|X.Y.Z> <outfile.md>'
  );
  process.exit(1);
}
const version = versionArg.replace(/^v/, '');
const changelog = readFileSync(join(root, 'CHANGELOG.md'), 'utf8');
const section = extractSection(changelog, version);
if (!section) {
  console.error(`No non-empty CHANGELOG section found for [${version}]`);
  process.exit(1);
}
writeFileSync(outPath, `${section}\n`);
