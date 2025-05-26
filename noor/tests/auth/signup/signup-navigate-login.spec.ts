import { test, expect } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage';

// This test checks navigation from Sign Up to Login

test.describe('Sign Up - Navigate to Login', () => {
  let signupPage: SignupPage;

  test.beforeEach(async ({ page }) => {
    signupPage = new SignupPage(page);
    await signupPage.goto();
  });

  test('TC-004: Navigate Back to Login from Sign Up', async ({ page }) => {
    await signupPage.clickLoginLink();
    // Assert: Login form appears (update selector as per actual UI)
    await expect(page.getByRole('heading', { name: 'Log in to Exclusive' })).toBeVisible();
  });
});
