import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("Register user in TEG#B and check API", async ({ page }) => {
  const username = faker.internet.username();
  const password = "123456";
  const email = faker.internet.exampleEmail();

  await page.route(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/register",
    async (route, request) => {
      console.log("Request intercepted: " + JSON.stringify(request, null, 2));
      console.log(request.postData());

      // ? Testování struktury odchyceného HTTP requestu
      const requestBody: any = await request.postDataJSON();
      expect(requestBody.username).toBe(username);

      // ! Toto zde musí být, jinak test po odchycení nebude fungovat.
      route.continue();
    }
  );

  // ? Otevření registrační stránky a její vyplnění
  await page.goto("https://tegb-frontend-88542200c6db.herokuapp.com/register");
  await page.locator("//input[@data-testid='username-input']").fill(username);
  await page.locator("//input[@data-testid='email-input']").fill(email);
  await page.locator("//input[@data-testid='password-input']").fill(password);
  await page.locator("//button[@data-testid='submit-button']").click();

  // ? Počkání na API tegb/register
  const response = await page.waitForResponse(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/register"
  );
  // ? Testování struktury response API tegb/register
  const responseBody = await response.json();
  expect(responseBody.username).toBe(username);
  expect(responseBody.email).toBe(email);
  expect(responseBody.userId).toBeDefined();
  expect(responseBody.active).toBe(1);

  // ? vyplnění username na přihlašovací stránce
  await page.locator('[data-testid="username-input"]').fill(username);
});
