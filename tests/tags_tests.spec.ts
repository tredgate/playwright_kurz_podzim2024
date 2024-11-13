//tags_tests.spec.ts
import { test, expect } from "@playwright/test";

test("Tags test @mujTag", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator("button[type='submit']").click();
  await expect(page.locator("#welcome-page-header")).toBeVisible();
});
