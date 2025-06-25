import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Enter email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Enter Password' });
    this.loginButton = page.getByRole('button', { name: 'Login', exact: true });
  }

  async goto() {
    await this.page.goto('/login');
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectSuccessToast(message: string) {
    const toast = this.page.locator('li[role="alert"]');
    await expect(toast).toHaveClass(/bg-green-500 text-white/);
    await expect(toast).toHaveText(new RegExp(message, 'i'));
  }

  async expectErrorToast(message: string) {
    const toast = this.page.locator('div[role="alert"]');
    // Only check for visibility and text, not class
    await expect(toast).toBeVisible();
    await expect(toast).toHaveText(new RegExp(message, 'i'));
    await expect(this.page).toHave(/Firebase: Error \(auth\/user-not-found\)\./);
  }

  getErrorToast() {
    return this.page.locator('li[role="alert"]');
  }

  async expectValidationError() {
    await expect(this.page.locator('p.text-destructive')).toBeVisible();
  }

  getValidationError() {
    return this.page.locator('p.text-destructive');
  }
}
