import { test, expect } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage';
import { validUser } from '../../../mocks/signupUsers';

test.describe('Sign Up - Valid Details', () => {
  let signupPage: SignupPage;

  test.beforeEach(async ({ page }) => {
    signupPage = new SignupPage(page);
    await signupPage.goto();
  });

  test('TC-001: Sign Up with Valid Details', async ({ page }) => {
    await signupPage.fillName(validUser.name);
    await signupPage.fillEmail(validUser.email);
    await signupPage.fillPassword(validUser.password);
    await signupPage.submit();
    // Assert: Success message or redirect (update selector as per actual UI)
    // There is no toast for success, so check for redirect or welcome heading
    await expect(page.getByRole('heading', { name: /welcome|exclusive/i })).toBeVisible();
  });
});