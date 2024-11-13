import { test, expect } from "@playwright/test";

test("toContainText Test", async ({ page }) => {
  // ? Přihlášení do PMTool
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator('button[type="submit"]').click();
  // ? Kontrola nadpisu, že obsahuje text "Vítej v testovací aplikaci"
  await expect(page.locator("#welcome-page-header")).toContainText(
    "Vítej v testovací aplikaci"
  ); // ? Pokud vynecháme await před expect(), pak Playwright nečeká na zobrazení či na stav
});

test("toHaveText Test", async ({ page }) => {
  // ? Přihlášení do PMTool
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator('button[type="submit"]').click();
  // ? Kontrola nadpisu, že text je přesně "Vítej v testovací aplikaci"
  await expect(page.locator("#welcome-page-header")).toHaveText(
    "Vítej v testovací aplikaci Tredgate Project"
  ); // ! toHaveText má větší pravděpodobnost, že nalezne chybu, než toContainText
});

test("toBeVisible Test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await expect(page.locator(".login-page-logo img")).toBeVisible();
});

test("haveValue Test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await expect(page.locator("#name")).toHaveValue("First and Last Name");
});

test("toBeChecked test", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await expect(page.locator("input[value='option-3']")).toBeChecked();
});

test("toHaveAttribute test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/index.php?module=users/login");
  await expect(page.locator("#username")).toHaveAttribute(
    "placeholder",
    "Username"
  );
});

// ? Test je přeskočený, protože je vždy neúspěšný
test.skip("Soft assert test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect.soft(page.locator(".form-title")).toHaveText("Login PMTOOL");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator("button[type='submit']").click();
});

test("Negative Test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect(page.locator(".alert")).not.toBeVisible();
});
