// signup.spec.ts
import { test, expect } from '@playwright/test';
import { SignupPage } from './pages/signupPage';
import { validUser, duplicateUser, emptyUser } from '../mocks/signup.mock';

test.describe('Sign Up Page', () => {
  test('TC-001: Sign Up with Valid Details', async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.goto();
    await signup.signup(validUser.name, validUser.email, validUser.password);
    // Expect a success message or redirect (adjust selector as needed)
    await expect(page).toHaveURL(/login|account|dashboard/);
    // Optionally, check for a toast or success message
    // await expect(page.getByText('Account created')).toBeVisible();
  });

  test('TC-002: Sign Up with Already Registered Email', async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.goto();
    await signup.signup(duplicateUser.name, duplicateUser.email, duplicateUser.password);
    // Wait for the toast error to appear
    const toast = page.locator('li[role="alert"]');
    await expect(toast).toBeVisible();
    await expect(toast.getByText('Signup failed')).toBeVisible();
   // await expect(toast.getByText('Firebase: Error (auth/email-already-in-use).')).toBeVisible();
  });

  test('TC-003: Submit Empty Sign Up Form', async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.goto();
    await signup.createAccountButton.click();
    // Expect required field validation
    await expect(page.getByText(/valid email/i)).toBeVisible();
  });

  test('TC-004: Navigate Back to Login from Sign Up', async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.goto();
    await signup.clickLoginLink();
    await expect(page).toHaveURL(/login/);
  });
});
