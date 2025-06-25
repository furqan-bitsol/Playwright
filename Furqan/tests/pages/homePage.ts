// homePage.ts
// Page object for the Home page (Categories section)
import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly browseByCategoryHeading: Locator;
  readonly categoryCards: Locator;

  constructor(page: Page) {
    this.page = page;
    // The heading for the section
    this.browseByCategoryHeading = page.getByRole('heading', {
      name: 'Browse By Category',
      level: 3,
    });
    // The cards under the slider (assuming role or class, update as needed)
    this.categoryCards = page.locator(
      '[data-testid="category-card"], .keen-slider__slide'
    );
  }

  async goto() {
    await this.page.goto('https://ecommerce-omega-three-23.vercel.app/');
  }

  async getCategoryByName(category: string) {
    return this.page.getByRole('link', {
      name: `View products in ${category}`,
    });
  }

  async verifyCategoryDisplayed(name: string) {
    const card = await this.getCategoryByName(name);
    await expect(card).toBeVisible();
  }
}