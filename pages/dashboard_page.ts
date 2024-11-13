//dashboard_page.ts
import { expect, type Locator, type Page } from "@playwright/test";

export class DashboardPage {
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

  async clickProfile() {
    await expect(this.notificationButton).toBeVisible();
    await this.profileButton.click();
  }

  async clickLogout() {
    await this.logoutButton.click();
  }
}
