import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { testUsers } from '../../utils/test-data';

/**
 * Login Test Suite (MCP + POM)
 * Covers: Valid login, invalid password, empty fields, sign up navigation
 */
test.describe('Login Page - Success & Failure Scenarios', () => {
  let page: Page;
  let loginPage: LoginPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('TC-001: Login with Valid Credentials (Pass/Fail)', async () => {
    // Pass scenario
    await loginPage.login(testUsers.valid.email, testUsers.valid.password);
    await loginPage.assertLoginSuccess();
    // Optionally, check for a success toast if your app shows one
    // await loginPage.assertSuccessToast('Successfully logged in');
  });

  test('TC-002: Login with Invalid Password (Pass/Fail)', async () => {
    // Action
    await loginPage.login(testUsers.invalid.email, testUsers.invalid.password);
    // Pass: Error toast visible (optionally check message)
    await loginPage.assertLoginFailure();
    // Fail: Should not redirect to dashboard
    await expect(page).toHaveURL(/\/login/);
  });

  test('TC-003: Login with Empty Fields (Pass/Fail)', async () => {
    // Action
    await loginPage.submitEmptyLogin();
    // Pass: Validation errors (field-level)
    await loginPage.assertValidationErrorCount(2);
    // Optionally, check for a specific error message:
    // await loginPage.assertFieldValidationError('Email is required');
    // Fail: Should not redirect
    await expect(page).toHaveURL(/\/login/);
  });

  test('TC-004: Redirect to Sign Up from Login Page (Pass/Fail)', async () => {
    // Action
    await loginPage.goToSignUp();
    // Pass: Navigated to sign up
    await loginPage.assertSignUpPage();
    // Fail: Should not stay on login page
    await expect(page).not.toHaveURL(/\/login/);
  });
});
