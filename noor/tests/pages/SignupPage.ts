import { Page, Locator, expect } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly createAccountButton: Locator;
  readonly googleSignupButton: Locator;
  readonly alreadyHaveAccountText: Locator;
  readonly loginLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByPlaceholder('Name');
    this.emailInput = page.getByPlaceholder('Email or Phone Number');
    this.passwordInput = page.getByPlaceholder('Password');
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    this.googleSignupButton = page.getByRole('button', { name: 'Sign up with Google' });
    this.alreadyHaveAccountText = page.getByText('Already have an account?');
    this.loginLink = page.getByRole('link', { name: 'Log in' });
  }

  async goto() {
    await this.page.goto('https://ecommerce-omega-three-23.vercel.app/signup');
    await expect(this.page.getByRole('heading', { name: 'Create an account' })).toBeVisible();
  }

  async fillName(name: string) {
    await expect(this.nameInput).toBeVisible();
    await this.nameInput.fill(name);
  }

  async fillEmail(email: string) {
    await expect(this.emailInput).toBeVisible();
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string) {
    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill(password);
  }

  async submit() {
    await expect(this.createAccountButton).toBeVisible();
    await this.createAccountButton.click();
  }

  async clickLoginLink() {
    await expect(this.loginLink).toBeVisible();
    await this.loginLink.click();
  }
}
