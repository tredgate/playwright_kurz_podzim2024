//dashboard_page.ts
import { expect, type Locator, type Page } from "@playwright/test";
import { LoginPageFluent } from "./login_page";

export class DashboardPageFluent {
  readonly profileButton: Locator;
  readonly logoutButton: Locator;
  readonly page: Page;
  readonly notificationButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
    this.notificationButton = page.locator("#user_notifications_report");
  }

  async clickProfile(): Promise<DashboardPageFluent> {
    await expect(this.notificationButton).toBeVisible();
    await this.profileButton.click();
    return this;
  }

  async clickLogout(): Promise<LoginPageFluent> {
    await this.logoutButton.click();
    return new LoginPageFluent(this.page);
  }
}
