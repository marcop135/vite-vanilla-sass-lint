#!/usr/bin/env node
/**
 * Build a concise GitHub Release body from a Keep-a-Changelog section (flat bullets
 * only, no ### headings — suitable for tagged releases).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const MAX_BULLETS = 6;

/**
 * Slice the lines between the `## [version]` heading and the next `## [` heading.
 *
 * @param {string} changelog - Full CHANGELOG.md contents.
 * @param {string} version - Version without the leading `v` (e.g. `1.9.1`).
 * @returns {string[] | null} Section lines, or null if the section is missing or empty.
 */
function extractSectionLines(changelog, version) {
  const lines = changelog.split(/\r?\n/);
  const header = `## [${version}]`;
  const idx = lines.findIndex((l) => l.startsWith(header));
  if (idx === -1) return null;
  const body = [];
  for (let i = idx + 1; i < lines.length; i++) {
    if (/^## \[/.test(lines[i])) break;
    body.push(lines[i]);
  }
  return body.join('\n').trim().length > 0 ? body : null;
}

/**
 * Flatten a changelog section into a single list of bullets.
 *
 * `### Subheadings` are dropped; sub-bullets fold into the parent with a `·`
 * separator (or a single space when the parent ends with `:`).
 *
 * @param {string[]} sectionLines - Lines from {@link extractSectionLines}.
 * @returns {string[]} One string per top-level bullet, without the leading `- `.
 */
function sectionToBullets(sectionLines) {
  const bullets = [];
  /** @type {string | null} */
  let acc = null;

  function flush() {
    if (acc !== null && acc.length > 0) {
      bullets.push(acc.trim());
      acc = null;
    }
  }

  for (const line of sectionLines) {
    const trimmed = line.trimEnd();
    if (/^### /.test(trimmed)) {
      flush();
      continue;
    }
    if (trimmed === '') continue;

    const top = /^- (.+)$/.exec(trimmed);
    if (top) {
      flush();
      acc = top[1];
      continue;
    }
    const sub = /^\s*-\s+(.+)$/.exec(trimmed);
    if (sub && acc !== null) {
      acc += acc.endsWith(':') ? ` ${sub[1]}` : ` · ${sub[1]}`;
    }
  }
  flush();
  return bullets;
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
const rawLines = extractSectionLines(changelog, version);
if (!rawLines) {
  console.error(`No non-empty CHANGELOG section found for [${version}]`);
  process.exit(1);
}

let bullets = sectionToBullets(rawLines);
if (bullets.length === 0) {
  console.error(`No bullets parsed for [${version}]`);
  process.exit(1);
}

if (bullets.length > MAX_BULLETS) {
  bullets = bullets.slice(0, MAX_BULLETS);
  bullets.push('…');
}

const body = bullets.map((b) => `- ${b}`).join('\n');
writeFileSync(outPath, `${body}\n`);
