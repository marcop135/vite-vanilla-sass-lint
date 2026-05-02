#!/usr/bin/env node
/**
 * Bump package.json patch version and prepend a maintenance entry to CHANGELOG.md.
 * Writes KEY=VALUE lines to $GITHUB_OUTPUT when set (GitHub Actions).
 */
import { readFileSync, writeFileSync, appendFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function bumpPatch(version) {
  const m = /^(\d+)\.(\d+)\.(\d+)$/.exec(String(version).trim());
  if (!m)
    throw new Error(`Invalid semver (expected Major.Minor.Patch): ${version}`);
  const [, major, minor, patch] = m;
  return `${major}.${minor}.${parseInt(patch, 10) + 1}`;
}

function utcDateStamp() {
  return new Date().toISOString().slice(0, 10);
}

function prependChangelogEntry(changelogBody, version, date) {
  const lines = changelogBody.split(/\r?\n/);
  let i = 0;
  while (i < lines.length && !/^## \[\d+\.\d+\.\d+\]/.test(lines[i])) {
    i += 1;
  }
  const block = [
    '',
    `## [${version}] - ${date}`,
    '',
    '### Changed',
    '',
    '- Automated biweekly maintenance patch: semver patch bump after `release:check`, commit on `develop`, tag; GitHub Release follows the tag; Netlify deploy uses whichever branch you configured (often `develop`).',
    '',
  ];
  lines.splice(i, 0, ...block);
  return lines.join('\n');
}

function main() {
  const pkgPath = join(root, 'package.json');
  const changelogPath = join(root, 'CHANGELOG.md');

  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
  const prev = pkg.version;
  const nextVer = bumpPatch(prev);
  pkg.version = nextVer;
  writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`, 'utf8');

  const chlog = readFileSync(changelogPath, 'utf8');
  writeFileSync(
    changelogPath,
    prependChangelogEntry(chlog, nextVer, utcDateStamp()),
    'utf8'
  );

  const out = process.env.GITHUB_OUTPUT;
  if (out) {
    const lines = [`version=${nextVer}`, `previous_version=${prev}`];
    appendFileSync(out, `${lines.join('\n')}\n`);
  }

  console.log(`${prev} → ${nextVer}`);
}

main();
