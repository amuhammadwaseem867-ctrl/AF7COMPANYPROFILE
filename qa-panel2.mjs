// QA: tight-case recheck (>=1600 desktop + 390 small)
export default async function run(page) {
  const out = [];

  for (const [width, height] of [[1600, 900], [1920, 900], [390, 800], [480, 800]]) {
    await page.setViewportSize({ width, height });
    await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
    await page.waitForSelector(".company-profile__panel-title", { timeout: 20000 });

    const m = await page.evaluate(() => {
      const panel = document.querySelector(".company-profile__visual-panel");
      const title = document.querySelector(".company-profile__panel-title");
      const span = title.querySelectorAll("span")[1]; // "Manufacturing"
      const panelRect = panel.getBoundingClientRect();
      const titleRect = title.getBoundingClientRect();
      const spanRect = span.getBoundingClientRect();
      const cs = getComputedStyle(title);
      return {
        fontSize: cs.fontSize,
        panelWidth: Math.round(panelRect.width),
        titleBoxWidth: Math.round(titleRect.width),
        manufacturingWidth: Math.round(spanRect.width),
        fitsInside: titleRect.left >= panelRect.left && titleRect.right <= panelRect.right,
        rightGap: Math.round(panelRect.right - titleRect.right),
      };
    });

    out.push({ width, ...m });
  }

  // One desktop screenshot for the eye
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
  await page.waitForSelector(".company-profile__visual-panel", { timeout: 20000 });
  await page.locator(".company-profile__visual").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  await page.screenshot({ path: "D:\\af7-company-profile\\qa-panel-1440.png" });

  return out;
}
