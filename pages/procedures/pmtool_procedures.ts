import { Page } from "@playwright/test";
import { LoginPageFluent } from "../fluent/login_page";

export const loginAndLogout = async (page: Page, username, password) => {
  const loginPage = new LoginPageFluent(page);
  await loginPage
    .login(username, password)
    .then((page) => page.clickProfile())
    .then((page) => page.clickLogout());
  return new LoginPageFluent(page);
};
