import { test, expect } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage';
import { existingUser } from '../../../mocks/signupUsers';

test.describe('Sign Up - Duplicate Email', () => {
  let signupPage: SignupPage;

  test.beforeEach(async ({ page }) => {
    signupPage = new SignupPage(page);
    await signupPage.goto();
  });

  test('TC-002: Sign Up with Already Registered Email', async ({ page }) => {
    await signupPage.fillName(existingUser.name);
    await signupPage.fillEmail(existingUser.email);
    await signupPage.fillPassword(existingUser.password);
    await signupPage.submit();
    // Assert: Error message for duplicate email (toast message selector)
    await expect(
      page.locator('li[role="alert"] .text-sm.opacity-90')
    ).toHaveText(/email-already-in-use/i);
  });
});
