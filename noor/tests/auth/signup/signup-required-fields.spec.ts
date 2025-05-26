import { test, expect } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage';

test.describe('Sign Up - Required Field Validation', () => {
  let signupPage: SignupPage;

  test.beforeEach(async ({ page }) => {
    signupPage = new SignupPage(page);
    await signupPage.goto();
  });

  test('TC-003: Submit Empty Sign Up Form', async ({ page }) => {
    await signupPage.submit();
    // Assert: Required field validation messages (update selectors as per actual UI)
    await expect(page.getByText('Name must be at least 2 characters.')).toBeVisible();
    await expect(page.getByText('Please enter a valid email or phone number.')).toBeVisible();
    await expect(page.getByText('Password must be at least 6 characters.')).toBeVisible();
  });
});
