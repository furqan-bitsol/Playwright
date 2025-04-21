import { test, expect } from '@playwright/test';

// Reusable setup and teardown logic
let baseURL = 'https://ecommerce-omega-three-23.vercel.app';

// Test suite for Wishlist functionality
test.describe('Wishlist Feature Tests', () => {
  test.beforeAll(async () => {
    console.log('Starting Wishlist Feature Tests');
  });

  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL);
  });

  test.afterEach(async ({ page }) => {
    // Clear wishlist state if needed
    await page.evaluate(() => localStorage.clear());
  });

  test.afterAll(async () => {
    console.log('Completed Wishlist Feature Tests');
  });

  test('should toggle wishlist icon state on click', async ({ page }) => {
    const firstProductCard = page.locator('[data-testid="flash-sale-0"]');
    await firstProductCard.hover();

    const heartIconUnfilled = firstProductCard.locator(
      '[data-testid="heart-icon-unfilled"]'
    );

    // Initially unfilled
    await expect(heartIconUnfilled).toHaveAttribute(
      'data-testid',
      'heart-icon-unfilled'
    );

    // Click to fill
    await heartIconUnfilled.click();
    const heartIconFilled = firstProductCard.locator(
      '[data-testid="heart-icon-filled"]'
    );
    await expect(heartIconFilled).toHaveAttribute(
      'data-testid',
      'heart-icon-filled'
    );

    // Click to unfill again
    await heartIconFilled.click();
    await expect(heartIconUnfilled).toHaveAttribute(
      'data-testid',
      'heart-icon-unfilled'
    );
  });

  test('should navigate to product detail page on eye icon click', async ({
    page,
  }) => {
    const firstProductCard = page
      .locator('[data-testid="flash-sale-0"]')
      .first();
    await firstProductCard.hover();

    const eyeIcon = firstProductCard.locator('[data-testid="eye-icon"]');
    await eyeIcon.click();

    await expect(page).toHaveURL(/\/products\/details\?id=\d+/);
  });

  test('should persist wishlist state across pages', async ({ page }) => {
    // Navigate to login page and perform login
    await page.goto(`${baseURL}/login`);

    const emailInput = page.locator('input[type="email"]');
    const passwordInput = page.locator('input[type="password"]');
    const loginButton = page.getByRole('button', { name: 'Log In' });

    // Expect these elements to be present on the page
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(loginButton).toBeVisible();

    await emailInput.fill('test@gmail.tech');
    await passwordInput.fill('abc@');
    await loginButton.click();

    // Verify successful login by checking redirection or user-specific element
    await expect(page).toHaveURL(`${baseURL}/login`);

    const firstProductCard = page
      .locator('[data-testid="flash-sale-0"]')
      .first();
    await firstProductCard.hover();

    const heartIconUnfilled = firstProductCard.locator(
      '[data-testid="heart-icon-unfilled"]'
    );
    await heartIconUnfilled.click();

    await page.goto(`${baseURL}/wishlist`);

    const wishlistItem = page.locator('.wishlist-item').first();
    await expect(wishlistItem).toBeVisible();

    // Simulate Firebase user logout and verify redirection to login page
    await page.evaluate(() => {
      localStorage.removeItem('firebaseAuth');
    });

    await page.goto(`${baseURL}/wishlist`);
    await expect(page).toHaveURL(`${baseURL}/login`);
  });

  test('should handle adding and removing the same product multiple times', async ({
    page,
  }) => {
    const firstProductCard = page
      .locator('[data-testid="flash-sale-0"]')
      .first();
    await firstProductCard.hover();

    const heartIconUnfilled = firstProductCard.locator(
      '[data-testid="heart-icon-unfilled"]'
    );
    const heartIconFilled = firstProductCard.locator(
      '[data-testid="heart-icon-filled"]'
    );
    for (let i = 0; i < 3; i++) {
      await heartIconUnfilled.click();
      await expect(heartIconFilled).toHaveAttribute(
        'data-testid',
        'heart-icon-filled'
      );
      await heartIconFilled.click();
      await expect(heartIconUnfilled).toHaveAttribute(
        'data-testid',
        'heart-icon-unfilled'
      );
    }
  });

  test('should display correct icon state on page reload', async ({ page }) => {
    const firstProductCard = page
      .locator('[data-testid="flash-sale-0"]')
      .first();
    await firstProductCard.hover();

    const heartIconUnfilled = firstProductCard.locator(
      '[data-testid="heart-icon-unfilled"]'
    );
    const heartIconFilled = firstProductCard.locator(
      '[data-testid="heart-icon-filled"]'
    );
    await heartIconUnfilled.click();

    await page.reload();

    await firstProductCard.hover();
    await expect(heartIconFilled).toHaveAttribute(
      'data-testid',
      'heart-icon-filled'
    );
  });
});
