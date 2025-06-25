// home.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from './pages/homePage';
import { mockCategories } from '../mocks/categories.mock';

test.describe('Categories Display Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Intercept and mock /api/categories before page load
    await page.route('**/api/categories', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockCategories),
      });
    });
  });

  test('TC-CAT-DISP-01: Verify Categories Displayed in Slider', async ({
    page,
  }) => {
    const home = new HomePage(page);
    await home.goto();
    // Assert heading is visible
    await expect(home.browseByCategoryHeading).toBeVisible();
    // Wait for the slider/cards to be visible
    const categoryCards = mockCategories.filter(
      (category) => !category.parentId
    ); // Filter out categories without icons
    console.log('Category Cards:', categoryCards);
    for (const element of categoryCards) {
      await home.verifyCategoryDisplayed(element.name);
    }
  });
});