import { test } from "@playwright/test";

test("Fill username and Password in PMtool", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("Test");
  await page.locator("#password").fill("123456");
});
