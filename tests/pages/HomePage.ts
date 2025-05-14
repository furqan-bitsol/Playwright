import { Page, Locator, expect, APIResponse } from '@playwright/test';
import { testRoutes, apiRoutes } from '../utils/test-data';
import { getRouteUrl } from '../utils/helper-functions';

export class HomePage {
  readonly page: Page;
  // TODO: Replace these selectors with actual, verified selectors from the live site
  readonly navbar: Locator;
  readonly heroSection: Locator;
  readonly categoriesSection: Locator;
  readonly productsSection: Locator;
  readonly footer: Locator;
  readonly hamburgerMenu: Locator;
  readonly allProductsButton: Locator;

  private categoryApiResponse: any[] = [];
  private productApiResponse: any[] = [];

  constructor(page: Page) {
    this.page = page;
    // TODO: Update selectors after live site inspection
    this.navbar = page.getByText('HomeContactAboutSign Up');
    this.heroSection = page
      .locator('div')
      .filter({ hasText: "Woman's FashionMen's" })
      .first();
    this.categoriesSection = page.locator('section:has-text("Categories")');
    this.productsSection = page.getByRole('region', {
      name: 'Featured products',
    });
    this.footer = page.locator('footer');
    this.hamburgerMenu = page.getByRole('button', { name: 'Menu' });
    this.allProductsButton = page.getByRole('link', {
      name: 'View all featured products',
    });
  }

  async goto() {
    await this.page.goto(getRouteUrl(testRoutes.home));
    await expect(this.page).toHaveURL(getRouteUrl(testRoutes.home));
  }

  async verifyMainSectionsVisible() {
    await expect(this.navbar).toBeVisible();
    await expect(this.heroSection).toBeVisible();
    await expect(this.categoriesSection).toBeVisible();
    await expect(this.productsSection).toBeVisible();
    await expect(this.footer).toBeVisible();
  }

  async clickNavbarItem(
    item: 'Home' | 'Contact' | 'About' | 'Sign Up' | 'Cart'
  ) {
    // Use getByTestId for Contact and Cart, otherwise use getByRole with exact matching
    if (item === 'Contact') {
      await this.page.getByTestId('contact-link').click();
    } else if (item === 'Cart') {
      await this.page.getByTestId('cart-link').click();
    } else {
      await this.page.getByRole('link', { name: item, exact: true }).click();
    }
  }

  async interceptCategoryApi() {
    // Wait for the next /api/categories response after navigation or reload
    await this.page.reload();
    const response = await this.page.waitForResponse(
      (resp) =>
        resp.url().includes(apiRoutes.categories) && resp.status() === 200
    );
    this.categoryApiResponse = await response.json();
  }

  async verifyCategoryCardsMatchBackend() {
    // Get the region for the category slider
    const slider = this.page.getByRole('region', { name: 'Category slider' });
    // Get all links inside the slider and their text contents
    const linkTexts = await slider.getByRole('link').allTextContents();
    const backendCategories = this.categoryApiResponse.map((c: any) => c.name);
    expect(linkTexts).toEqual(expect.arrayContaining(backendCategories));
  }

  async interceptProductApi() {
    await this.page.reload();
    const response = await this.page.waitForResponse(
      (resp) => resp.url().includes(apiRoutes.products) && resp.status() === 200
    );
    this.productApiResponse = await response.json();
  }

  async verifyProductCardsMatchBackend(featuredOnly: boolean = false) {
    // Get the product grid region
    const grid = this.page.getByRole('grid', {
      name: 'Featured products grid',
    });
    // Get all h3 headings inside the grid (product titles)
    const headings = await grid.locator('h3').allTextContents();
    const uiProducts = headings.map((h) => h.trim()).filter(Boolean);
    let backendProducts = this.productApiResponse;
    if (featuredOnly) {
      backendProducts = backendProducts.filter((p: any) => p.featured);
    }
    backendProducts = backendProducts.map((p: any) => p.title);
    expect(uiProducts).toEqual(expect.arrayContaining(backendProducts));
  }

  async clickAllProductsButton() {
    await this.allProductsButton.click();
  }

  async verifyOnAllProductsPage() {
    await expect(this.page).toHaveURL(getRouteUrl(testRoutes.allProducts));
  }

  async setMobileViewport() {
    await this.page.setViewportSize({ width: 375, height: 667 });
  }

  async verifyResponsiveLayout() {
    await expect(this.hamburgerMenu).toBeVisible();
  }
}
