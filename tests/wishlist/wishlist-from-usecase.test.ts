import { test, expect, BrowserContext, Page } from '@playwright/test';

// Modular Component Pattern (MCP) setup
const baseURL = 'https://ecommerce-omega-three-23.vercel.app';

// Reusable selectors
const selectors = {
  header: {
    homeLink: '[data-testid="home-link"]',
    wishlistLink: '[data-testid="wishlist-link"]',
  },
  productCard: {
    flashSale: (index: number) => `[data-testid="flash-sale-${index}"]`,
    bestSelling: (index: number) => `[data-testid="best-selling-${index}"]`,
    featured: (index: number) => `[data-testid="featured-${index}"]`,
    heartIconUnfilled: '[data-testid="heart-icon-unfilled"]',
    heartIconFilled: '[data-testid="heart-icon-filled"]',
    eyeIcon: '[data-testid="eye-icon"]',
  },
  wishlist: {
    item: (index: number) => `[data-testid="wishlist-${index}"]`,
  },
};

// Global setup
let context: BrowserContext;
let page: Page;

// Test cases
test.describe('Add to Wishlist from Home Page', () => {
    test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto(baseURL);
});

test.afterAll(async () => {
  await context.close();
});
  test('Navigate to Home Page and verify elements', async () => {
    await expect(page).toHaveURL(baseURL);
    await expect(page.locator(selectors.header.homeLink)).toBeVisible();
    await expect(page.locator(selectors.header.wishlistLink)).toBeVisible();
    await expect(page.locator(selectors.productCard.flashSale(0))).toBeVisible();
  });

  test('Hover over product card and verify icons', async () => {
    const productCard = page.locator(selectors.productCard.flashSale(0));
    await productCard.hover();
    await expect(productCard.locator(selectors.productCard.heartIconUnfilled)).toBeVisible();
    await expect(productCard.locator(selectors.productCard.eyeIcon)).toBeVisible();
  });

  test('Add product to wishlist and verify icon state', async () => {
    const productCard = page.locator(selectors.productCard.flashSale(0));
    await productCard.hover();
    await productCard.locator(selectors.productCard.heartIconUnfilled).click();
    await expect(productCard.locator(selectors.productCard.heartIconFilled)).toBeVisible();
  });

  test('Remove product from wishlist and verify icon state', async () => {
    const productCard = page.locator(selectors.productCard.flashSale(0));
    await productCard.hover();
    await productCard.locator(selectors.productCard.heartIconFilled).click();
    await expect(productCard.locator(selectors.productCard.heartIconUnfilled)).toBeVisible();
  });

  test('Navigate to Wishlist Page and verify items', async () => {
    await page.locator(selectors.header.wishlistLink).click();
    await expect(page).toHaveURL(`${baseURL}/wishlist`);
    await expect(page.locator(selectors.wishlist.item(0))).toBeVisible();
  });

  test('Reload page and verify wishlist state resets', async () => {
    await page.reload();
    const productCard = page.locator(selectors.productCard.flashSale(0));
    await productCard.hover();
    await expect(productCard.locator(selectors.productCard.heartIconUnfilled)).toBeVisible();
    await expect(page.locator(selectors.wishlist.item(0))).not.toBeVisible();
  });

  test('Navigate to product detail page via eye icon', async () => {
    const productCard = page.locator(selectors.productCard.flashSale(0));
    await productCard.hover();
    await productCard.locator(selectors.productCard.eyeIcon).click();
    await expect(page).toHaveURL(/\/products\/details\?id=/);
  });
});