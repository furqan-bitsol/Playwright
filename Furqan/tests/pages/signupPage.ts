// signupPage.ts
// Page object for the Sign Up page
import { Page, Locator } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly createAccountButton: Locator;
  readonly loginLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByPlaceholder('Name');
    this.emailInput = page.getByPlaceholder('Email or Phone Number');
    this.passwordInput = page.getByPlaceholder('Password');
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    this.loginLink = page.getByRole('link', { name: 'Log in' });
  }

  async goto() {
    await this.page.goto('https://ecommerce-omega-three-23.vercel.app/signup');
  }

  async signup(name: string, email: string, password: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.createAccountButton.click();
  }

  async clickLoginLink() {
    await this.loginLink.click();
  }
}
