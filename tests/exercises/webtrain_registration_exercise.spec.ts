import { test } from "@playwright/test";

test("E2E Registration", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#name").fill("Petr");
  await page.locator("#datepicker").fill("2005-05-25");
  await page.locator("#email").fill("test@example.org");
  await page.locator("#password").fill("123456");
  await page.locator("#confirm-password").fill("123456");
  await page.locator("#premium").check();
  await page.locator("#age").fill("38");
  await page.locator("#address").fill("Nedám");
  await page.locator("#interests-sports").check();
  await page.locator("#interests-reading").check();
  await page.locator("#newsletter").check();
  await page.locator("#gender").selectOption("male");
  await page.locator('[type="submit"]').click();
});
