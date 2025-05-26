# Playwright MCP + POM Test Script Generator Prompt (for eCommerce Site)

---

You are generating Playwright test scripts using:

- ✅ MCP Playwright framework conventions
- ✅ Page Object Model (POM) structure
- ✅ Markdown file as input (containing all test cases)
- 🕵️ **Use MCP Playwright to inspect the HTML and obtain the actual selectors for all required elements. Do not guess or hallucinate selectors; always verify by inspecting the live DOM.**

---

## 🛠️ Project Conventions (Required)

- **All mock data / test data must be defined in `utils/testData.ts`.**
- **All URLs (routes, endpoints) must be present in `utils/testData.ts` and only used from there.**
- **All helper functions (e.g., URL builders, data generators) must be placed in `utils/helper-functions.ts`.**
- **Test and Page Object files must import data and helpers from these locations, never hardcoding values.**
- **For all toast notification and form validation assertions, follow the patterns and examples in `mcp-prompt-library.prompt.md`.**

## 🔗 Website Under Test

- **URL:** [https://ecommerce-omega-three-23.vercel.app/](https://ecommerce-omega-three-23.vercel.app/)
- **Domain:** E-Commerce Application
- **Focus:** User Authentication, Product Browsing, Cart, Checkout, etc.

---

## 📄 Input Format

You will receive a single `.md` file containing multiple structured test cases (in markdown format), including:

- Test Case Title
- Objective
- Preconditions
- Steps
- Expected Results
- Pass/Fail Criteria

---

## 🧭 Responsibilities

For each test case in the markdown file:

- Generate a Playwright test script that includes:
  - ✅ A pass scenario
  - ❌ A fail scenario
- Store the two scenarios in a single `.spec.ts` file (named after the feature or test case)
- Create and use Page Object Model classes for relevant screens

---

## 🧱 Test Script Format

Each test file must contain:

- **Title:** From the test case
- **Test Objective**
- **Preconditions:** Navigation, login, data setup
- **Steps:**
  - Use POM methods
  - Use `await`, `getByRole`, `getByText`, `locator()`
  - Do not use hardcoded selectors
- **Assertions:**
  - Success verification (toast, redirect, UI state)
  - Failure checks (error messages, UI block)
- **Edge Cases:** If applicable
- **Traceability Tag:** Optional

---

## 🧩 Page Object Model Requirements

Each logical screen (Login, Home, ProductList, Cart, Checkout) must have a separate page class.

Each Page Object must:

- Use class-level constants for selectors
- Implement methods for user actions (e.g., `login()`, `addToCart()`)
- Use verified selectors only:
  - ✅ Prefer: `getByRole`, `getByText`, `locator()`, `id`, `class`
  - ❌ Avoid: `data-testid` (unless absolutely necessary)
- Handle common UI behaviors:
  - Dropdowns: `selectOption()` or click + `getByText()`
  - Date pickers: click input, then select visible date
  - Form validation: wait for error messages
  - Toasts/alerts: wait for `role=alert` or `aria-live=polite`

---

## 🧪 Output Directory Structure

```
/tests/ # All test files grouped by feature or module
│ ├── login.spec.ts
│ ├── patients/
│ │ ├── filter.spec.ts
│ │ └── details.spec.ts
│ └── dashboard.spec.ts
│
/pages/ # Page Object classes for each page
│ ├── LoginPage.ts
│ ├── PatientsPage.ts
│ └── DashboardPage.ts
│
/fixtures/ # Custom fixtures (e.g., login, setup data)
│ └── customFixtures.ts
│
/utils/ # Utility functions, helpers, and test data
│ ├── testData.ts
│ ├── apiHelpers.ts
│ └── env.ts
│
/config/ # Playwright config and environment settings
│ ├── playwright.config.ts
│ └── env.dev.ts
│
/README.md
```

---

## ⚠️ Selector & Wait Rules

- ✅ Use only selectors from actual HTML on the website
- ✅ Verify each selector using MCP Playwright
- ✅ Insert waits for dynamic elements (`toBeVisible`, `waitForSelector`)
- ❌ Do not use `data-testid` unless the HTML provides no alternatives
- ❌ Do not hallucinate elements — only assert what's truly in the DOM

---

## 📥 Once the .md file is provided:

For each test case, generate:

- ✅ A `.spec.ts` test file with both pass/fail scenarios
- ✅ Corresponding Page Object files if they don't already exist
- ✅ Fully working test logic using POM + MCP
