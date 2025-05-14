import { test } from '@playwright/test';
import { SignUpPage } from '../../pages/SignUpPage';
import { newUser } from '../../utils/test-data';

test.describe('Sign Up - Success & Failure Scenarios', () => {
  test('TC-001: Sign Up with Valid Details (Pass/Fail)', async ({ page }) => {
    const signUp = new SignUpPage(page);
    await signUp.goto();
    await signUp.fillForm(newUser.name, newUser.email, newUser.password);
    await signUp.submit();
    // Pass: Success toast and redirect
    await signUp.assertSuccessToast('Signup successful');
    // Optionally, check redirect to login
    await signUp.assertLoginPage();
  });

  test('TC-002: Sign Up with Already Registered Email (Fail)', async ({
    page,
  }) => {
    const signUp = new SignUpPage(page);
    await signUp.goto();
    await signUp.fillForm(newUser.name, newUser.email, newUser.password);
    await signUp.submit();
    // Fail: Error toast for duplicate email
    await signUp.assertErrorToast('Signup failedFirebase: Error');
  });

  test('TC-003: Submit Empty Sign Up Form (Fail)', async ({ page }) => {
    const signUp = new SignUpPage(page);
    await signUp.goto();
    await signUp.submit();
    // Fail: Validation errors for all required fields
    await signUp.assertValidationErrorCount(3); // Name, Email, Password
  });

  test('TC-004: Navigate Back to Login from Sign Up (Pass/Fail)', async ({
    page,
  }) => {
    const signUp = new SignUpPage(page);
    await signUp.goto();
    await signUp.goToLogin();
    // Pass: Should be on login page
    await signUp.assertLoginPage();
  });
});
