import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { testRoutes } from '../utils/test-data';
import { getRouteUrl } from '../utils/helper-functions';
// TODO: Move BASE_URL to test data if needed
const BASE_URL = 'https://ecommerce-omega-three-23.vercel.app';

// Test Suite: Home Page

test.describe('Home Page', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('TC-035: Load Home Page Successfully (Pass)', async () => {
    await homePage.verifyMainSectionsVisible();
  });

  test('TC-035: Load Home Page Successfully (Fail)', async ({ page }) => {
    // Simulate failure: hide a main section and check for error
    await page.evaluate(() => {
      const nav = document.querySelector('nav');
      if (nav) nav.remove();
    });
    await expect(homePage.navbar).not.toBeVisible();
  });

  test('TC-036: Verify Navigation Bar Items Are Clickable (Pass)', async () => {
    await homePage.clickNavbarItem('Home');
    await expect(homePage.page).toHaveURL(getRouteUrl(testRoutes.home));
    await homePage.clickNavbarItem('Contact');
    await expect(homePage.page).toHaveURL(getRouteUrl(testRoutes.contact));
    await homePage.clickNavbarItem('About');
    await expect(homePage.page).toHaveURL(getRouteUrl(testRoutes.about));
    await homePage.clickNavbarItem('Sign Up');
    await expect(homePage.page).toHaveURL(getRouteUrl(testRoutes.signup));
    await homePage.clickNavbarItem('Cart');
    await expect(homePage.page).toHaveURL(getRouteUrl(testRoutes.cart));
  });

  test('TC-036: Verify Navigation Bar Items Are Clickable (Fail)', async ({
    page,
  }) => {
    // Simulate failure: remove nav links
    await page.evaluate(() => {
      document.querySelectorAll('nav a').forEach((a) => a.remove());
    });
    await expect(page.getByRole('link', { name: 'Home' })).not.toBeVisible();
  });

  test('TC-037: Verify Categories from API are Displayed (Pass)', async () => {
    await homePage.interceptCategoryApi();
    await homePage.verifyCategoryCardsMatchBackend();
  });

  test('TC-037: Verify Categories from API are Displayed (Fail)', async ({
    page,
  }) => {
    // Simulate failure: remove the first category card in the slider
    await homePage.interceptCategoryApi();
    await page.evaluate(() => {
      const slider = document.querySelector('[aria-label="Category slider"]');
      if (slider) {
        const firstCard = slider.querySelector(
          'a[aria-label^="View products in"]'
        );
        if (firstCard) firstCard.remove();
      }
    });
    // This should fail the assertion
    await expect(async () => {
      await homePage.verifyCategoryCardsMatchBackend();
    }).rejects.toThrow();
  });

  test('TC-038: Verify Featured Products Section Displays Products (Pass)', async () => {
    await homePage.interceptProductApi();
    await homePage.verifyProductCardsMatchBackend(true);
  });

  test('TC-038: Verify Featured Products Section Displays Products (Fail)', async ({
    page,
  }) => {
    await homePage.interceptProductApi();
    await page.evaluate(() => {
      const grid = Array.from(document.querySelectorAll('[role="grid"]')).find(
        (el) => el.getAttribute('aria-label') === 'Featured products grid'
      );
      if (grid) {
        const firstCard = grid.querySelector(
          'div.relative.flex.flex-col.w-full.group'
        );
        if (firstCard) firstCard.remove();
      }
    });
    await expect(async () => {
      await homePage.verifyProductCardsMatchBackend(true);
    }).rejects.toThrow();
  });

  test('TC-039: Navigate to "All Products" from Home Page (Pass)', async () => {
    await homePage.clickAllProductsButton();
    await homePage.verifyOnAllProductsPage();
  });

  test('TC-039: Navigate to "All Products" from Home Page (Fail)', async ({
    page,
  }) => {
    // Simulate failure: remove the 'All Products' button by aria-label
    await page.evaluate(() => {
      const btn = document.querySelector(
        'a[aria-label="View all featured products"]'
      );
      if (btn) btn.remove();
    });
    await expect(homePage.allProductsButton).not.toBeVisible();
  });

  test('TC-040: Verify Responsive Layout on Mobile (Pass)', async () => {
    await homePage.setMobileViewport();
    await homePage.verifyResponsiveLayout();
  });

  test('TC-040: Verify Responsive Layout on Mobile (Fail)', async ({
    page,
  }) => {
    await homePage.setMobileViewport();
    // Simulate failure: remove hamburger menu button with aria-label='Menu'
    await page.evaluate(() => {
      const btn = document.querySelector('button[aria-label="Menu"]');
      if (btn) btn.remove();
    });
    await expect(homePage.hamburgerMenu).not.toBeVisible();
  });
});
