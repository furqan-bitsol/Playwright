import { test, expect } from '@playwright/test';

test.describe('Wishlist Feature', () => {
  test.beforeAll(async ({ browser }) => {
    // Global setup: Launch browser and navigate to base URL
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://ecommerce-omega-three-23.vercel.app');
  });

  test.beforeEach(async ({ page }) => {
    // Per test setup: Navigate to home page and reset wishlist state
    await page.goto('https://ecommerce-omega-three-23.vercel.app');
    // Add logic to reset wishlist state if needed
  });

  test('Heart icon toggle functionality', async ({ page }) => {
    // Hover on a product card
    const productCard = page.locator('[data-testid="flash-sale-0"]');
    await productCard.hover();

    // Validate unfilled heart icon is visible
    const unfilledHeart = productCard.locator('[data-testid="heart-icon-unfilled"]');
    await expect(unfilledHeart).toBeVisible();

    // Click unfilled heart icon to add to wishlist
    await unfilledHeart.click();

    // Validate filled heart icon is visible
    const filledHeart = productCard.locator('[data-testid="heart-icon-filled"]');
    await expect(filledHeart).toBeVisible();

    // Click filled heart icon to remove from wishlist
    await filledHeart.click();

    // Validate unfilled heart icon is visible again
    await expect(unfilledHeart).toBeVisible();
  });

  test('Eye icon navigation to product details', async ({ page }) => {
    // Hover on a product card
    const productCard = page.locator('[data-testid="flash-sale-0"]');
    await productCard.hover();

    // Click eye icon to navigate to product details
    const eyeIcon = productCard.locator('[data-testid="eye-icon"]');
    await eyeIcon.click();

    // Validate navigation to product details page
    await expect(page).toHaveURL(/\/products\/details\?id=/);
  });

  test('Wishlist link navigation and verification', async ({ page }) => {
    // Add a product to the wishlist
    const productCard = page.locator('[data-testid="flash-sale-0"]');
    await productCard.hover();
    const unfilledHeart = productCard.locator('[data-testid="heart-icon-unfilled"]');
    await unfilledHeart.click();

    // Navigate to wishlist page
    const wishlistLink = page.locator('[data-testid="wishlist-link"]');
    await wishlistLink.click();

    // Validate wishlist page URL
    await expect(page).toHaveURL(/\/wishlist/);

    // Validate product is displayed in wishlist
    const wishlistItem = page.locator('[data-testid="wishlist-0"]');
    await expect(wishlistItem).toBeVisible();
  });

  test('UI state persistence across page reloads', async ({ page }) => {
    // Add a product to the wishlist
    const productCard = page.locator('[data-testid="flash-sale-0"]');
    await productCard.hover();
    const unfilledHeart = productCard.locator('[data-testid="heart-icon-unfilled"]');
    await unfilledHeart.click();

    // Reload the page
    await page.reload();

    // Validate filled heart icon is still visible
    const filledHeart = productCard.locator('[data-testid="heart-icon-filled"]');
    await expect(filledHeart).toBeVisible();
  });

  test('Edge case: Adding/removing the same product multiple times', async ({ page }) => {
    // Hover on a product card
    const productCard = page.locator('[data-testid="flash-sale-0"]');
    await productCard.hover();

    // Add and remove the product multiple times
    const unfilledHeart = productCard.locator('[data-testid="heart-icon-unfilled"]');
    const filledHeart = productCard.locator('[data-testid="heart-icon-filled"]');

    for (let i = 0; i < 3; i++) {
      await unfilledHeart.click();
      await expect(filledHeart).toBeVisible();
      await filledHeart.click();
      await expect(unfilledHeart).toBeVisible();
    }
  });

  test.afterEach(async ({ page }) => {
    // Cleanup steps if needed
  });

  test.afterAll(async ({ browser }) => {
    // Teardown: Close browser
    await browser.close();
  });
});
