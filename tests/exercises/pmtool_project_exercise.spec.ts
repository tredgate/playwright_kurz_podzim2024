import { test } from "@playwright/test";

test("Open Projects in PMTool", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator('button[type="submit"]').click();
  await page.locator("#Projects a").click();
});
