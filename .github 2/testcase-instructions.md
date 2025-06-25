---
description: 
globs: 
alwaysApply: false
---
## 🧠 Custom Authoring & Review Instructions for Playwright MCP Test Cases

This guide provides standardized instructions for writing and reviewing Playwright test cases using the **Modular Component Pattern (MCP)**. It is intended for use with IEEE-format test cases in any project, ensuring consistency, modularity, and maintainability.

---

## 1. ✅ General Expectations

* Use **Playwright** with the **MCP (Modular Component Pattern)** structure.
* Test cases must be **modular**, **readable**, and **maintainable**.
* Use **clear, descriptive names** for files, functions, and assertions.
* **Always inspect the live DOM** with MCP tools to obtain accurate selectors.
* Eliminate duplicate logic using shared helpers or reusable components.

---

## 2. 🔁 Lifecycle Hook Usage

* Use `beforeAll` for global setup (e.g., launching browser, setting base URL).
* Use `beforeEach` for per-test setup (e.g., navigating to pages, resetting state).
* Use `afterEach`/`afterAll` for teardown (e.g., clearing session, closing browser).

---

## 3. 🎯 Element Selection

* Use accessible selectors: `getByRole`, `getByText`, `locator`, `getByLabel`, `id`, `class`.

* ✅ Ensure the element is visible before interacting with it:

  ```ts
  const button = page.locator('button:has-text("Submit")');
  await expect(button).toBeVisible();
  await button.click();
  ```

* Use XPath **only as a fallback** when other selectors are not available.

---

## 4. 🧱 Test Structure & Modularity

* Follow: **Setup → Action → Assertion**.
* Modularize reusable logic:

  * Utility functions → `/utils/`
  * Page objects → `/pages/`
  * Fixtures → `/fixtures/`
* Avoid deeply nested or inline logic inside test bodies.

---

## 5. 📦 Modular Component Pattern (MCP)

* Group UI interactions in **Page Object** classes with clear methods.
* Separate test logic from UI selectors.
* ✅ Page Object format example:

  ```ts
  export class ExamplePage {
    readonly page: Page;
    readonly submitButton: Locator;

    constructor(page: Page) {
      this.page = page;
      this.submitButton = page.locator('[data-testid="submit"]');
    }

    async submitForm() {
      await expect(this.submitButton).toBeVisible();
      await this.submitButton.click();
    }
  }
  ```

---

## 6. 🧪 Assertions & Readability

* Use `await expect(...)` syntax.
* Assertions must be:

  * Descriptive (describe what you're verifying)
  * Focused on visible UI behavior
  * Explicit (e.g., `toBeVisible`, `toHaveText`, `toHaveURL`)
* ❌ Avoid using `any` — prefer `Page`, `Locator`, or typed interfaces.

---

## 7. 🧼 Clean Code Practices

* Remove:

  * Unused variables
  * Console logs
  * Commented-out code
* Focus tests on **one behavior or user journey**.
* Follow ESLint and formatter rules.

---

## 8. 💡 Code Review Suggestions

When reviewing:

* Suggest componentization or reuse where appropriate.
* Recommend improvements in naming or logic clarity.
* Refactor unstable or brittle selectors.
* Remove redundant steps or unclear code.

---

## 📁 Recommended Folder Structure (Generic MCP)

```
/
├── Furqan/tests/           # Test cases grouped by feature
│   ├── auth/
│   │   └── login.spec.ts
│   ├── patients/
│   │   ├── filter.spec.ts
│   │   └── details.spec.ts
│   └── dashboard.spec.ts
│
├── Furqan/tests/pages/           # Page Object classes
│   ├── LoginPage.ts
│   ├── PatientsPage.ts
│   └── DashboardPage.ts
│
├── fixtures/        # Shared setup or teardown logic
│   └── customFixtures.ts
│
├── utils/           # Reusable helpers and test data
│   ├── testData.ts
│   ├── apiHelpers.ts
│   └── env.ts
│
├── config/          # Playwright config & environment settings
│   ├── playwright.config.ts
│   └── env.dev.ts
│
└── README.md
```

> ⚠️ Place all components in correct folders.
> Do NOT store test code in root or arbitrary locations.

---

## 📄 Naming & Traceability Guidelines

* Match test suite name to file name:

  * **Test Suite:** "Patients Directory Listing"
  * **Test File:** `patients-directory-listing.spec.ts`

---

## 🧠 When Writing or Reviewing Tests:

* Ensure test logic is modular and selector usage is reliable.
* All Page Object classes go in `Furqan/test/pages/`. Update existing ones where applicable.
* Use MCP-based structure and modular coding principles.
* Ensure test files are self-contained and easy to understand.
* Assertions and locators must be stable and verifiable.

---
