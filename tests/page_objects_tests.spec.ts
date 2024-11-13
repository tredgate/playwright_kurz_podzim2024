//page_objects_tests.spec.ts
import { test } from "@playwright/test";
import { LoginPage } from "../pages/login_page";
import { DashboardPage } from "../pages/dashboard_page";
import { LoginPageFluent } from "../pages/fluent/login_page";
import { loginAndLogout } from "../pages/procedures/pmtool_procedures";

test("Test Page Objects", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.openPmtool();
  await loginPage.fillUsername("pw_skoleni");
  await loginPage.fillPassword("TEG2023");
  await loginPage.clickLogin();
  await dashboardPage.clickProfile();
  await dashboardPage.clickLogout();
  await loginPage.login("pw_skoleni", "TEG2023");
});

test("Test Fluent Page Objects", async ({ page }) => {
  const loginPage = new LoginPageFluent(page);
  await loginPage
    .openPmtool()
    .then((page) => page.fillUsername("pw_skoleni"))
    .then((page) => page.fillPassword("TEG2023"))
    .then((page) => page.clickLogin())
    .then((page) => page.clickProfile())
    .then((page) => page.clickLogout())
    .then((page) => page.login("pw_skoleni", "TEG2023"));
});
