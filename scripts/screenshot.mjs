// One-off visual capture harness for the optimization audit.
// Usage: node scripts/screenshot.mjs <outDir>
// Requires Playwright available on NODE_PATH (installed in a temp dir for the audit).
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const outDir = process.argv[2] || '.audit-screenshots/baseline';
const baseUrl = process.env.AUDIT_URL || 'http://localhost:3000/';

const viewports = [
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 667 },
];

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ channel: 'chrome' });
try {
  for (const vp of viewports) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
    });
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    // Freeze the gradient animation so frames are comparable across runs.
    await page.addStyleTag({
      content:
        '*,*::before,*::after{animation:none!important;transition:none!important}',
    });
    await page.waitForTimeout(300);
    const file = `${outDir}/index-${vp.name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log('saved', file);
    await page.close();
  }
} finally {
  await browser.close();
}
