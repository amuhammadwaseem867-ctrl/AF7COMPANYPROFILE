// Screenshot the navy panel after preloader completes
export default async function run(page) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
  await page.waitForSelector(".company-profile__visual-panel", { timeout: 20000 });
  // wait for preloader to leave the DOM
  await page.waitForSelector(".af7-loader", { state: "detached", timeout: 20000 });
  await page.locator(".company-profile__visual").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "D:\\af7-company-profile\\qa-panel-1440.png" });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(400);
  await page.locator(".company-profile__visual").scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: "D:\\af7-company-profile\\qa-panel-390.png" });

  return "done";
}
