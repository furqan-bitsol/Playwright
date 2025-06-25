import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { validUser, invalidUser } from '../utils/testData';

// Test Suite: Login Functionality

test.describe('Login Functionality', () => {
  test('TC-LOGIN-01: Successful Login with Valid Credentials', async ({ page }) => {
    // Objective: User can log in with valid credentials
    // Preconditions: User is on the login page
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(validUser.email, validUser.password);
    // Assertion: User is redirected to the dashboard page
    await expect(page).toHaveURL(/dashboard/);
  });

  test('TC-LOGIN-02: Unsuccessful Login with Invalid Credentials', async ({ page }) => {
    // Objective: User cannot log in with invalid credentials
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(invalidUser.email, invalidUser.password);
    // Assertion: Error toast is visible
    await loginPage.expectErrorToast('Firebase: Error (auth/user-not-found).');
  });

  test('TC-LOGIN-02: Failing Scenario - No Error Message on Invalid Login', async ({ page }) => {
    // Objective: Error message should appear for invalid login (simulate fail)
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(invalidUser.email, invalidUser.password);
    // Assertion: Error toast is not visible (simulate fail)
    await expect(loginPage.getErrorToast()).not.toBeVisible();
  });

  test('TC-LOGIN-03: Login with Empty Fields', async ({ page }) => {
    // Objective: User cannot log in with empty fields
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', '');
    // Assertion: Validation error is visible
    await loginPage.expectValidationError();
  });

  test('TC-LOGIN-03: Failing Scenario - No Validation Error on Empty Fields', async ({ page }) => {
    // Objective: Validation error should appear for empty fields (simulate fail)
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', '');
    // Assertion: Validation error is not visible (simulate fail)
    await expect(loginPage.getValidationError()).not.toBeVisible();
  });
});
