import { chromium } from "playwright";
import fs from "fs";

const widths = [1920, 1600, 1440, 1280, 1024, 768, 480, 375];
const browser = await chromium.launch({ channel: "chromium" });

// Selectors representing the main content containers per section
const containers = [
  ".profile-nav__inner",
  ".productsInner",
  ".applications-container",
  ".mfg-header",
  ".quality-section__intro-inner",
  ".customization-section__header-inner",
  ".packaging-section__intro-inner",
  ".global-business__intro-inner",
  ".contact-section__main-inner",
  ".company-profile__intro",
  ".company-profile__facts-inner",
  ".applications-footer-inner",
  ".quality-section__footer-inner",
  ".packaging-section__footer-inner",
  ".global-business__footer-inner",
  ".contact-section__footer-inner",
  ".mfg-footer",
  ".customization-section__footer-inner",
];

for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 950 } });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2500);
  const report = await page.evaluate((sels) => {
    const rows = [];
    for (const sel of sels) {
      const el = document.querySelector(sel);
      if (!el) { rows.push({ sel, missing: true }); continue; }
      const r = el.getBoundingClientRect();
      rows.push({ sel, left: +r.left.toFixed(1), right: +r.right.toFixed(1), w: +r.width.toFixed(1) });
    }
    const defined = rows.filter(r => !r.missing);
    const lefts = [...new Set(defined.map(r => r.left.toFixed(1)))];
    const rights = [...new Set(defined.map(r => r.right.toFixed(1)))];
    // horizontal overflow check
    const doc = document.documentElement;
    const overflowX = doc.scrollWidth - doc.clientWidth;
    return { lefts, rights, overflowX, rows };
  }, containers);
  const consistent = report.lefts.length === 1 && report.rights.length === 1;
  console.log(`\n=== ${width}px ===  consistent-grid: ${consistent}  overflowX: ${report.overflowX}`);
  console.log(`  lefts: ${report.lefts.join(" | ")}`);
  if (report.rights.length > 1) console.log(`  rights: ${report.rights.join(" | ")}`);
  for (const r of report.rows) if (r.missing) console.log(`  MISSING: ${r.sel}`);
  // screenshots (full page for 3 widths representative of desktop/tablet/mobile)
  if ([1920, 1440, 1024, 768, 480, 375].includes(width)) {
    fs.mkdirSync("qa-align", { recursive: true });
    await page.screenshot({ path: `qa-align/page-${width}.png`, fullPage: true });
  }
  await page.close();
}
await browser.close();
console.log("\nDone.");
