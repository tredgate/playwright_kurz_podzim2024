import { test, expect } from "@playwright/test";

test("Check input visibility and text of button save", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator('button[type="submit"]').click();
  await page.locator("#Projects a").click();
  await expect(page.locator(".table-scrollable table")).toBeVisible();
  await page.locator('[test_id="Add Project"]').click();
  await expect(page.locator('div[data-testid="Name"] input')).toBeVisible();
  await expect(page.locator("button[type='submit']")).toHaveText("Save");
});
