import { test, expect } from '@playwright/test';
import { ForgotPasswordPage } from '../../pages/ForgotPasswordPage';
import { testRoutes, testUsers } from '../../utils/test-data';

const baseUrl = 'https://ecommerce-omega-three-23.vercel.app';

// Helper to get full URL
const forgotPasswordUrl = `${baseUrl}${testRoutes.forgotPassword}`;

test.describe('Forgot Password', () => {
  let forgotPassword: ForgotPasswordPage;

  test.beforeEach(async ({ page }) => {
    forgotPassword = new ForgotPasswordPage(page);
    await forgotPassword.goto(forgotPasswordUrl);
  });

  test('TC-001: Submit Forgot Password Request with Valid Email (Pass)', async () => {
    await forgotPassword.submitEmail(testUsers.forgotPassword.valid);
    await forgotPassword.expectSuccessToast();
  });

  test('TC-002: Submit Forgot Password with Unregistered Email (Pass: Graceful)', async () => {
    await forgotPassword.submitEmail(testUsers.forgotPassword.unregistered);
    await forgotPassword.expectGenericErrorToast();
  });

  test('TC-003: Submit Forgot Password with Invalid Email Format (Fail: Validation)', async () => {
    await forgotPassword.submitEmail(testUsers.forgotPassword.invalidFormat);
    await forgotPassword.expectValidationError('Invalid email address');
  });

  test('TC-004: Submit Forgot Password with Empty Field (Fail: Required)', async () => {
    await forgotPassword.submitEmail(testUsers.forgotPassword.empty);
    await forgotPassword.expectValidationError('Email is required');
  });
});
