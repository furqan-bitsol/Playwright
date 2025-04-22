import { test, expect } from '@playwright/test';

// Test suite for "Add Products to Wishlist from Home Page"
test.describe('Add to Wishlist from Home Page', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the Home Page before each test
    await page.goto('https://ecommerce-omega-three-23.vercel.app');
  });

  test('Verify product cards and interactive elements are rendered', async ({ page }) => {
    // Check for the presence of product sections
    await expect(page.locator('[data-testid="flash-sale-0"]')).toBeVisible();
    await expect(page.locator('[data-testid="best-selling-1"]')).toBeVisible();
    await expect(page.locator('[data-testid="featured-0"]')).toBeVisible();

    // Check for the Wishlist icon in the header
    await expect(page.locator('[data-testid="wishlist-link"]')).toBeVisible();
  });

  test('Add product to wishlist and verify icon state toggle', async ({ page }) => {
    const productCard = page.locator('[data-testid="flash-sale-0"]');
    const heartIconUnfilled = productCard.locator('[data-testid="heart-icon-unfilled"]');
    const heartIconFilled = productCard.locator('[data-testid="heart-icon-filled"]');

    // Hover over the product card to reveal icons
    await productCard.hover();

    // Add to wishlist
    await heartIconUnfilled.click();
    await expect(heartIconFilled).toBeVisible();

    // Remove from wishlist
    await heartIconFilled.click();
    await expect(heartIconUnfilled).toBeVisible();
  });

  test('Navigate to product detail page using Eye Icon', async ({ page }) => {
    const productCard = page.locator('[data-testid="flash-sale-0"]');
    const eyeIcon = productCard.locator('[data-testid="eye-icon"]');

    // Hover over the product card to reveal icons
    await productCard.hover();

    // Click the Eye Icon to navigate to the product detail page
    await eyeIcon.click();
    await expect(page).toHaveURL(/\/products\/details\?id=/);
  });

  test('Verify wishlist items are session-based and do not persist after reload', async ({ page }) => {
    const productCard = page.locator('[data-testid="flash-sale-0"]');
    const heartIconUnfilled = productCard.locator('[data-testid="heart-icon-unfilled"]');
    const heartIconFilled = productCard.locator('[data-testid="heart-icon-filled"]');

    // Hover over the product card to reveal icons
    await productCard.hover();

    // Add to wishlist
    await heartIconUnfilled.click();
    await expect(heartIconFilled).toBeVisible();

    // Reload the page
    await page.reload();

    // Verify the wishlist state is reset
    await expect(heartIconUnfilled).toBeVisible();
    await expect(heartIconFilled).not.toBeVisible();
  });

  test('Verify wishlist page displays added items until reload', async ({ page }) => {
    const productCard = page.locator('[data-testid="flash-sale-0"]');
    const heartIconUnfilled = productCard.locator('[data-testid="heart-icon-unfilled"]');
    const wishlistLink = page.locator('[data-testid="wishlist-link"]');

    // Hover over the product card to reveal icons
    await productCard.hover();

    // Add to wishlist
    await heartIconUnfilled.click();

    // Navigate to the Wishlist page
    await wishlistLink.click();
    await expect(page).toHaveURL('https://ecommerce-omega-three-23.vercel.app/wishlist');

    // Verify the product is displayed in the wishlist
    await expect(page.locator('[data-testid="wishlist-0"]')).toBeVisible();

    // Reload the page and verify the wishlist is empty
    await page.reload();
    await expect(page.locator('[data-testid="wishlist-0"]')).not.toBeVisible();
  });

});
