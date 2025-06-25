---
description: 
globs: 
alwaysApply: false
---
## 🧠 MCP Prompt: Dynamic Card Validation Using API Response

When generating **Playwright test scripts** from IEEE-format test cases that involve **displaying cards** (such as **products** or **categories**), follow these instructions:

### 🔄 Network Interception
- Intercept the **relevant API call** (e.g., `GET /api/carts`, `GET /api/products`) during test execution.
- Store the **API response** in a **class field** inside the corresponding **Page Object**.

### 🧪 Verification Logic
- Use the **stored backend response** to dynamically verify content in the UI.
- **Avoid hardcoding** values in assertions.
- Implement matching logic in a Page Object method, for example:  
  `verifyProductCardsMatchBackend()` or `verifyCategoryCardsMatchBackend()`.
- Loop through the backend response and compare it with the visible UI elements (e.g., product title, image, price, etc.).
- If the API returns an empty response, verify the **UI shows an appropriate empty state message or placeholder**.

### 🧱 Example (TypeScript - Playwright Page Object)
```ts
class HomePage {
  private categoryApiResponse: any[];

  async interceptCategoryApi() {
    const response = await this.page.waitForResponse(
      (resp) => resp.url().includes('/api/categories') && resp.status() === 200
    );
    this.categoryApiResponse = await response.json();
  }

  async verifyCategoryCardsMatchBackend() {
    const uiCategories = await this.page.locator('.category-card .category-title').allTextContents();
    const backendCategories = this.categoryApiResponse.map(c => c.name);
    expect(uiCategories).toEqual(expect.arrayContaining(backendCategories));
  }
}
```