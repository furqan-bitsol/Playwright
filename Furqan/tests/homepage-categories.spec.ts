// Playwright MCP test for Homepage Sidebar Categories Functionality
import { test, expect } from '@playwright/test';
import { HomePage } from './pages/homePage';
import { mockCategories } from '../mocks/categories.mock';
import { getProductsByType } from '../../utils/products';
import { apiRoutes, baseUrl } from '../../tests/utils/test-data';
import { getRouteUrl } from '../../tests/utils/helper-functions';

// Helper: mock products for a given category or subcategory
const mockProductsForCategory = (category: string) => getProductsByType('category', { category });
const mockProductsForSubCategory = (subCategory: string) => getProductsByType('subcategory', { subCategory });

// ---
test.describe('Homepage Sidebar Categories Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Intercept and mock /api/categories
    await page.route(`**${apiRoutes.categories}`, async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockCategories),
      });
    });
  });

  test('TC-HOME-SIDEBAR-01: Verify Sidebar Category Navigation (Success & Failure)', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    // Wait for categories to be visible
    await expect(home.browseByCategoryHeading).toBeVisible();
    // Pick a category from mock data
    const category = mockCategories.find((cat: any) => !cat.parentId);
    expect(category, 'At least one top-level category exists').toBeTruthy();
    if (!category) throw new Error('No top-level category found in mockCategories');
    // Intercept products API for this category
    await page.route(`**${apiRoutes.products}*`, async (route) => {
      const url = new URL(route.request().url());
      if (url.searchParams.get('category') === category.id) {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify(mockProductsForCategory(category.id)),
        });
      } else {
        await route.continue();
      }
    });
    // Click the category link
    const catLink = await home.getCategoryByName(category.name);
    await expect(catLink).toBeVisible();
    await catLink.click();
    // Assert navigation and products
    await expect(page).toHaveURL(`/products/all?category=${category.id}`);
    // Check at least one product is shown (mocked)
    // Use a more specific selector to only match the product card, not the inner absolute div
    await expect(page.locator('section[aria-label="Product Grid"] > div.relative.flex.flex-col')).toBeVisible();

    // --- Failure scenario: products API returns 500 ---
    await page.route(`**${apiRoutes.products}*`, async (route) => {
      await route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ error: 'Server error' }) });
    });
    await home.goto();
    const catLinkFail = await home.getCategoryByName(category.name);
    await catLinkFail.click();
    // Should show error UI (toast, alert, etc.)
    // Use nth(0) to select the first matching error message and avoid strict mode violation
    await expect(page.locator('div.text-red-500', { hasText: /server error/i }).first()).toBeVisible();
  });

  test('TC-HOME-SIDEBAR-02: Verify Sidebar Subcategory Navigation (Success & Failure)', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    // Wait for categories to be visible
    await expect(home.browseByCategoryHeading).toBeVisible();
    // Pick a subcategory from mock data
    const subCategory = mockCategories.find((cat: any) => cat.parentId);
    expect(subCategory, 'At least one subcategory exists').toBeTruthy();
    if (!subCategory) throw new Error('No subcategory found in mockCategories');
    // Intercept products API for this subcategory
    await page.route(`**${apiRoutes.products}*`, async (route) => {
      const url = new URL(route.request().url());
      if (url.searchParams.get('subCategory') === subCategory.id) {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify(mockProductsForSubCategory(subCategory.id)),
        });
      } else {
        await route.continue();
      }
    });
    // Click the subcategory link (simulate dropdown if needed)
    const subCatLink = await home.getCategoryByName(subCategory.name);
    await expect(subCatLink).toBeVisible();
    await subCatLink.click();
    // Assert navigation and products
    await expect(page).toHaveURL(new RegExp(`/products/all\?category=.*&subCategory=.*`));
    await expect(page.locator('[data-testid="product-card"]')).toBeVisible();

    // --- Failure scenario: products API returns 404 ---
    await page.route(`**${apiRoutes.products}*`, async (route) => {
      await route.fulfill({ status: 404, contentType: 'application/json', body: JSON.stringify({ error: 'Not found' }) });
    });
    await home.goto();
    const subCatLinkFail = await home.getCategoryByName(subCategory.name);
    await subCatLinkFail.click();
    await expect(page.getByRole('alert')).toBeVisible();
    await expect(page.getByRole('alert')).toContainText(/not found|error|fail/i);
  });
});
