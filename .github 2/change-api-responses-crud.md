---
description: 
globs: 
alwaysApply: false
---
## Objective:
For the target website, detect and mock all backend API routes (XHR/fetch/WebSocket) that perform any of the CRUD (Create, Read, Update, Delete) operations. Use **MCP Playwright** and **actual browser execution (headed mode)** to dynamically capture and mock API calls.

## Requirements:

1. **Use Actual Browser for Detection**:
    - Use a real browser session (headed mode) to visit the target website.
    - Allow the page to load fully so that all network requests are captured in real time.

2. **API Route Interception (CRUD)**:
    - Intercept all backend API calls during initial page interaction.
    - Identify which routes perform Create, Read, Update, or Delete operations.

3. **Mocking Behavior**:
    - For every detected CRUD route:
        - Generate mock data for success responses using static JS objects or libraries like Faker.
        - Also create mock failure scenarios with proper HTTP status codes (e.g., 400, 404, 500).
    - Always respond with the mock data — **never allow any real API call to go through**.

4. **API Mock Implementation**:
    - Use `page.route()` from Playwright to intercept each request.
    - Conditionally return either:
        - A success mock response, or
        - A failure mock response.
    - Support switching between mock modes via a config flag or function (e.g., `mockMode = 'success' | 'error'`).

5. **General & Reusable Setup**:
    - Structure the mocking logic into a reusable utility (e.g., `apiMocker.ts` or `mockUtils.ts`).
    - It should be portable and configurable across any web project.

6. **Logging & Debugging**:
    - Log intercepted route paths and mock status (success/failure) to the console.
    - Optionally write a summary JSON file of all detected API routes and how they were mocked.

## 3a. Consistent Mock State for CRUD Operations:
- Use a single, shared variable (e.g., `let mockData = [...]`) to hold the mock data for all CRUD API mocks.
- Initialize this variable at the start of the test or in a closure/module scope.
- All CRUD API mocks (Create, Read, Update, Delete) must read from and mutate this variable directly.
- This ensures that any changes made by one API (e.g., Create or Edit) are reflected in subsequent API calls (e.g., Read or Delete), maintaining data consistency throughout the test flow.
- Use closures or module-scoped variables to encapsulate the shared state.
- Example structure:
  ```ts
  // At the top of your test file or inside a describe/closure:
  let mockData = [ /* initial items */ ];

  // Mock for GET (Read)
  page.route('**/api/items', route => {
    route.fulfill({ json: mockData });
  });

  // Mock for POST (Create)
  page.route('**/api/items', async route => {
    const newItem = await route.request().postDataJSON();
    mockData.push(newItem);
    route.fulfill({ json: newItem });
  });

  // Mock for PUT (Edit)
  page.route('**/api/items/:id', async route => {
    const updatedItem = await route.request().postDataJSON();
    mockData = mockData.map(item => item.id === updatedItem.id ? updatedItem : item);
    route.fulfill({ json: updatedItem });
  });

  // Mock for DELETE
  page.route('**/api/items/:id', route => {
    const id = extractIdFromUrl(route.request().url());
    mockData = mockData.filter(item => item.id !== id);
    route.fulfill({ status: 200 });
  });
  ```
- Always mutate the `mockData` variable for every CRUD operation.
- This approach ensures that the data returned by the Read API always reflects the latest state after any Create, Edit, or Delete operation, supporting realistic and consistent E2E test flows.

## Technical Setup:
- Use **MCP Playwright in Cursor** to write and structure the test automation.
- Run Playwright tests using the **actual browser (non-headless mode)** to ensure full network capture.
- Use TypeScript or JavaScript.
- Follow Playwright best practices with clean POM-based structure if needed.

## Output:
- Playwright test file(s) with full mocked setup.
- Reusable mocking utility file.
- (Optional) Route summary JSON or console log.

## Constraints:
- No real API request should reach the backend — full mocking only.
- Mocks must support both success and failure testing.
- Logic must be generic and reusable for any project or website.
