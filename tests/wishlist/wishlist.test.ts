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
    const firstProductCard = page
      .locator('[data-testid="flash-sale-0"]')
      .first();
    await firstProductCard.hover();

    const heartIconUnfilled = firstProductCard.locator(
      '[data-testid="heart-icon-unfilled"]'
    );
    await heartIconUnfilled.click();

    // Check if the wishlist link is present on the page
    const wishlistLink = page.locator('[data-testid="wishlist-link"]');
    await expect(wishlistLink).toBeVisible();

    // Click the wishlist link to navigate to the wishlist page
    await wishlistLink.click();

    // Verify the product is visible in the wishlist
    const wishlistItem = page.locator('[data-testid="wishlist-0"]').first();
    await expect(wishlistItem).toBeVisible();

    // Verify the heart icon is filled for the product in the wishlist
    const wishlistHeartIconFilled = wishlistItem.locator(
      '[data-testid="heart-icon-filled"]'
    );
    await expect(wishlistHeartIconFilled).toBeVisible();
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
});
