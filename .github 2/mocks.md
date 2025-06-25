---
description: 
globs: 
alwaysApply: false
---
## Objective
Use **MCP Playwright** with the **actual browser** to intercept and mock **all backend API requests** that populate data on the page. Ensure that **no real network requests** to the backend are made. This includes handling both **success** and **failure** cases using realistic mock data.

## Instructions
1. Use **MCP Playwright** to run tests in a **real browser context** (not headless or stubbed environments).
2. Analyze all API requests made by the page during runtime.
3. For each detected API route:
   - Create a **mock response** that closely mirrors the actual response structure of that endpoint.
   - Use `page.route()` to intercept and mock the request with the prepared response.
   - Create mock responses for:
     - **Success scenarios** (e.g., list of products, categories, etc.)
     - **Failure scenarios** (e.g., 404, 500, timeouts)

4. Ensure that:
   - The test **navigates to the target page** using a real browser instance.
   - All backend API routes are **mocked before the page loads**.
   - The **UI reflects the mocked data**, and assertions are made accordingly.
   - **No actual backend API** is ever hit during test execution.

## Constraints
- All network traffic to backend APIs must be intercepted and mocked.
- Use the **actual browser** for all interactions (non-headless preferred).
- Ensure mock definitions are reusable and modular.
- The prompt should work across **any deployed frontend project**.

## Example Use Case
For a site like `https://ecommerce-omega-three-23.vercel.app/`:
- Detect and mock calls to `/api/products`, `/api/carts`, etc.
- Use `page.route()` to inject mock product/category data before page load.
- Also simulate failure cases (e.g., `/api/products` returns 500).
- Assert correct UI rendering or error handling.

## Output
Generate a Playwright test file using MCP with:
- Real browser usage
- Full mocking of all relevant API calls
- Assertions for both successful and failed API responses
- A maintainable and scalable structure using Playwright best practices
