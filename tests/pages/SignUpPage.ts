import { Page, Locator, expect } from '@playwright/test';
import { testRoutes } from '../utils/test-data';

export class SignUpPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signUpButton: Locator;
  readonly loginLink: Locator;
  readonly toast: Locator;
  readonly validationError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByPlaceholder('Name');
    this.emailInput = page.getByPlaceholder('Email or Phone Number');
    this.passwordInput = page.getByPlaceholder('Password');
    this.signUpButton = page.getByRole('button', { name: 'Create Account' });
    this.loginLink = page.getByRole('link', { name: 'Log in' });
    this.toast = page.locator('li[role="alert"]');
    this.validationError = page.locator('p.text-destructive');
  }

  async goto() {
    await this.page.goto(testRoutes.signup);
  }

  async fillForm(name: string, email: string, password: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async submit() {
    await expect(this.signUpButton).toBeVisible();
    await this.signUpButton.click();
  }

  async goToLogin() {
    await expect(this.loginLink).toBeVisible();
    await this.loginLink.click();
  }

  async assertSuccessToast(message: string) {
    await expect(this.toast).toHaveClass(/bg-green-500/);
    await expect(this.toast).toHaveClass(/text-white/);
    await expect(this.toast).toHaveText(new RegExp(message, 'i'));
  }

  async assertErrorToast(message: string) {
    await expect(this.toast).toHaveClass(/border-destructive/);
    await expect(this.toast).toHaveClass(/bg-destructive/);
    await expect(this.toast).toHaveClass(/text-destructive-foreground/);
    await expect(this.toast).toHaveText(new RegExp(message, 'i'));
  }

  async assertValidationErrorCount(count: number) {
    await expect(this.validationError).toHaveCount(count);
  }

  async assertFieldValidationError(message: string) {
    await expect(this.validationError).toContainText(message);
  }

  async assertLoginPage() {
    await this.page.waitForURL(testRoutes.login, { timeout: 5000 });
    await expect(this.page).toHaveURL(testRoutes.login);
  }
}
