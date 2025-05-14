import { test, expect } from '@playwright/test';

test('add product to cart from Flash Sales', async ({ page }) => {
  // Step 1: Launch the specified URL
  await page.goto('https://ecommerce-omega-three-23.vercel.app/');

  // Step 2: Locate the Flash Sales section and hover over the first product
  const flashSalesSection = page.locator('div[aria-label="Flash sale products"]');
  const firstProduct = flashSalesSection.locator('div').first();
  await firstProduct.hover();

  // Ensure the first product is visible and ready for interaction before hovering
  await expect(firstProduct).toBeVisible();
  await expect(firstProduct).toBeEnabled();

  // Retry hover action with a delay to ensure it works
  await firstProduct.hover({ force: true });

  // Verify that the Eye button is visible only after hovering
  await expect(firstProduct.locator('button[aria-label="Quick view"]')).toBeVisible();

  // Step 3: Click on the Eye button
  const eyeButton = firstProduct.locator('button[aria-label="Quick view"]');
  await eyeButton.click();

  // Step 4: Verify navigation to the product details page with a dynamic id in the URL
  await expect(page).toHaveURL(/.*\/products\/details\?id=\d+/);

  // Step 5: Click on the Add to Cart button
  const addToCartButton = page.locator('button[aria-label="Add item to cart"]');
  await addToCartButton.click();

  // Step 6: Verify the browser alert
  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toBe('Item added to cart successfully!');
    await dialog.dismiss();
  });
});

test('verify item appears in cart after adding', async ({ page }) => {
  // Step 1: Launch the specified URL
  await page.goto('https://ecommerce-omega-three-23.vercel.app/');

  // Step 2: Locate the Flash Sales section and hover over the first product
  const flashSalesSection = page.locator('div[aria-label="Flash sale products"]');
  const firstProduct = flashSalesSection.locator('div').first();
  await firstProduct.hover();

  // Step 3: Click on the Eye button
  const eyeButton = firstProduct.locator('button[aria-label="Quick view"]');
  await eyeButton.click();

  // Step 4: Verify navigation to the product details page
  await expect(page).toHaveURL(/.*\/products\/details\?id=\d+/);

  // Step 5: Capture the product name from the h3 element at index 1 with the specified class
  const productName = await page.locator('h3.font-medium.text-base').nth(1).textContent();

  // Step 6: Click on the Add to Cart button
  const addToCartButton = page.locator('button[aria-label="Add item to cart"]');
  await addToCartButton.click();

  // Step 7: Click on the Cart icon to navigate to the cart page
  const cartIcon = page.locator('a[aria-label="Cart"]');
  await cartIcon.click();

  // Step 8: Verify the product appears in the cart by product name
  const cartItem = page.locator(`text=${productName}`);
  await expect(cartItem).toBeVisible();
});
