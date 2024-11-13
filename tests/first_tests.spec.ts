import { test } from "@playwright/test";

test("First Test", async ({ page }) => {
  // Test code
  // Aplikace: https://tredgate.com/pmtool/
  await page.goto("https://tredgate.com/pmtool/"); // Otevře stránku
  await page.locator("#username").fill("Test"); // Vyplní slovo Test do prvku #username
});
/*
Vytvořte nový testovací soubor ve složce tests/exercises (složku exercises si založte): pmtool_open_tests.spec.ts
V novém souboru vytvořte test, který otevře pmtool
Následně vyplní uživatelské jméno a heslo (lokátor: #password) - vyplňte jakýkoliv text
Test spusťte

*/
