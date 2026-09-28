// QA: "Focused Manufacturing" heading inside the navy panel across viewports
export default async function run(page) {
  const results = [];

  const viewports = [1440, 1280, 1024, 768, 600, 480, 390];

  for (const width of viewports) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });

    // Wait for the section + heading to exist
    await page.waitForSelector(".company-profile__visual-panel", { timeout: 20000 });

    // Measure inside the browser
    const m = await page.evaluate(() => {
      const panel = document.querySelector(".company-profile__visual-panel");
      const title = document.querySelector(".company-profile__panel-title");
      if (!panel || !title) return { error: "missing elements" };

      const titleStyle = getComputedStyle(title);

      // Use the widest span ("Manufacturing") for the width check
      const spans = [...title.querySelectorAll("span")];
      const widest = spans.reduce(
        (acc, s) => {
          const w = s.getBoundingClientRect().width;
          return w > acc.w ? { w, text: s.textContent } : acc;
        },
        { w: 0, text: "" }
      );

      const panelRect = panel.getBoundingClientRect();
      const titleRect = title.getBoundingClientRect();

      return {
        fontSize: titleStyle.fontSize,
        panelWidth: Math.round(panelRect.width),
        titleBoxWidth: Math.round(titleRect.width),
        widestSpan: { text: widest.text, width: Math.round(widest.w) },
        // Distance from each panel edge to the heading box (padding included)
        fitsInside: titleRect.left >= panelRect.left && titleRect.right <= panelRect.right,
        marginPx: {
          left: Math.round(titleRect.left - panelRect.left),
          right: Math.round(panelRect.right - titleRect.right),
        },
        lineBreak: spans.map((s) => s.textContent),
      };
    });

    results.push({ width, ...m });
  }

  return results;
}
