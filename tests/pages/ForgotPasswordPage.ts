import { Page, Locator, expect } from '@playwright/test';

export class ForgotPasswordPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly submitButton: Locator;
  readonly backToLoginLink: Locator;
  readonly toast: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Email Address' });
    this.submitButton = page.getByRole('button', { name: 'Send Reset Link' });
    this.backToLoginLink = page.locator('a:has-text("Back to login")');
    this.toast = page.locator('li[role="alert"]');
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async submitEmail(email: string) {
    await this.emailInput.fill(email);
    await expect(this.submitButton).toBeVisible();
    await this.submitButton.click();
  }

  async expectSuccessToast() {
    await expect(this.toast).toHaveClass(/bg-green-500/);
    await expect(this.toast).toHaveClass(/text-white/);
    await expect(this.toast).toHaveText(/Reset link sent/);
  }

  async expectGenericErrorToast() {
    await expect(this.toast).toBeVisible();
    await expect(this.toast).toHaveText(/If the email exists|reset link/i);
  }

  async expectValidationError(message: string) {
    await expect(this.page.locator('p.text-destructive')).toHaveText(message);
  }

  async clickBackToLogin() {
    await expect(this.backToLoginLink).toBeVisible();
    await this.backToLoginLink.click();
  }
}
