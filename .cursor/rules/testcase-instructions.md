---
description:
globs:
alwaysApply: false
---

# 🧠 Copilot Custom Review Instructions for Playwright MCP Test Cases

## 🌐 Introduction

This guide provides custom review and authoring instructions for Playwright test cases written for the E-Commerce Web Application — a shopping platform available at https://ecommerce-omega-three-23.vercel.app/. It outlines best practices for writing and maintaining end-to-end test scripts, with a focus on key user flows such as authentication, product browsing, cart management, and checkout.

The portal supports features like patient management, appointment scheduling, and directory filtering. All test cases for this platform should follow the **Modular Component Pattern (MCP)** to ensure the code is scalable, maintainable, and easy to collaborate on.

---

## 1. ✅ General Expectations

- Use **Playwright** with the **MCP (Modular Component Pattern)** structure.
- Ensure test cases are **modular**, **readable**, and **maintainable**.
- Use **clear, descriptive names** for test files, functions, and assertions.
- Eliminate **duplicated logic** by using shared components or helpers.
- **Always fetch and confirm selectors from the live site before using them in Playwright tests.**

---

## 2. 🔁 Lifecycle Hook Usage

- Use **`beforeAll`** for global setup.
  - Example: launch browser, open base URL.
- Use **`beforeEach`** for per-test setup.
  - Example: navigate to homepage, reset wishlist.
- Use **`afterEach` / `afterAll`** for teardown and cleanup.
  - Example: clear session/local storage, logout, close browser.

---

## 3. 🎯 Element Selection

- Get elements by using identifiers such as visible text, tag, class, or id.
- If the element is not found using these methods, then fall back to using XPath.
- ✅ After locating an element, always verify that it is visible before performing any action on it.
  - Example:
    ````ts
     const button = page.locator('button:has-text("Submit")');
     await expect(button).toBeVisible();
     await button.click();
     ```
    ````

---

## 4. 🧱 Test Structure & Modularity

- Write small, focused test cases using: **Setup → Action → Assertion**.
- Group reusable logic into:
  - Utility functions
  - Page objects
  - Component classes (if applicable)
- Avoid deeply nested or inline logic inside test bodies.

---

## 5. 📦 Modular Component Pattern (MCP)

- Group UI actions into **modular components** or **page objects**.
- Separate:
  - UI logic from test logic
  - Setup logic from assertions
- Reuse shared UI logic across test suites.
- ✅ **Create Page Object classes** in this format:

  ```ts
  export class ExamplePage {
    readonly page: Page;
    readonly someElement: Locator;

    constructor(page: Page) {
      this.page = page;
      this.someElement = page.locator('[data-testid="example"]');
    }

    async checkElementVisible() {
      await expect(this.someElement).toBeVisible();
    }
  }
  ```

  - Use `readonly` for locators.
  - Keep logic modular with methods for actions or assertions.
  - Use descriptive class and method names.

---

## 6. 🧪 Assertions and Readability

- Use `await expect(...)` syntax for clarity and stability.
- Make assertions:
  - Descriptive
  - Focused on behavior
  - Explicit (e.g., `toBeVisible`, `toHaveAttribute`, etc.)
- **TypeScript Best Practice:** Never use `any` as a type. Always use explicit, strict types (such as `Locator`, `Page`, or custom interfaces) to ensure type safety and maintainability.

---

## 7. 🧼 Clean Code Practices

- Remove:
  - Unused variables
  - Console logs
  - Commented-out code
- Keep tests focused on **one behavior or user journey**.
- Follow linting rules from `.eslintrc` or other configs.

---

## 8. 💡 Suggestions

When reviewing, suggest:

- Grouping logic into components or shared helpers
- Improving naming for readability
- Refactoring flaky or brittle selectors
- Removing redundant or unclear logic

---

## 🧹 How to Use This

When writing or reviewing Playwright tests:

- Follow lifecycle structure: `beforeAll`, `beforeEach`, `afterEach`, `afterAll`
- Ensure all UI interaction is MCP-based and modular
- Use clear and stable identifiers such as visible text, tag, class, or id. If these are not reliable or available, then use XPath as a fallback.
- Keep code clean, consistent, and maintainable
- Always make a new test case file with the name of the test suite.
  - For example:
    - **Test Suite Name** = "Patients Directory Listing and Filtering"
    - **Generated File Name** = `patients-directory-listing-and-filtering.spec.ts`

---

# 📁 Playwright MCP Folder Structure Requirement

All Playwright test cases and related files for the E-Commerce Web Application must follow this folder structure:

/
│
├── tests/ # All test files grouped by feature or module
│ ├── login.spec.ts
│ ├── patients/
│ │ ├── filter.spec.ts
│ │ └── details.spec.ts
│ └── dashboard.spec.ts
│
├── pages/ # Page Object classes for each page
│ ├── LoginPage.ts
│ ├── PatientsPage.ts
│ └── DashboardPage.ts
│
├── fixtures/ # Custom fixtures (e.g., login, setup data)
│ └── customFixtures.ts
│
├── utils/ # Utility functions, helpers, and test data
│ ├── testData.ts
│ ├── apiHelpers.ts
│ └── env.ts
│
├── config/ # Playwright config and environment settings
│ ├── playwright.config.ts
│ └── env.dev.ts
│
└── README.md

> **Instruction:**
>
> - Place all test files, page objects, fixtures, and utilities in their respective folders as shown above.
> - Do NOT place test cases or helpers in root or random folders.
> - This structure is mandatory for all new and reviewed test cases.

---

> **Page Object Instruction:**
>
> - Add all Page Object classes to the `pages/` folder.
> - If a Page Object for a page already exists, update and extend the existing class to add new functionality instead of creating a duplicate.
> - Only add a new Page Object if one for that page does not already exist.
