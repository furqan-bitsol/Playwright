# Test Suite: Categories Display Functionality

## Test Case ID: TC-CAT-DISP-01

### Test Case Name: Verify Categories Displayed in Slider

**Test Item(s):** Categories Slider, Category Cards

**Requirement(s) Covered:**

- Categories retrieved from the backend API endpoint `/api/categories` must be displayed in the "Browse By Category" section within individual cards in a slider.

**Input Specifications:**

- User action: Navigate to the "Categories" section on the homepage

**Preconditions:**

- User is on the homepage: https://ecommerce-omega-three-23.vercel.app/
- API endpoint `/api/categories` is accessible and returns category data

**Test Data:**

- API Response: Dynamic list of categories from `/api/categories`

**Output Specifications:**

- Each category received from the backend is displayed in a card within the slider
- Each category card displays its name

**Environmental Needs:**

- Browser: Chrome v120.0
- OS: Windows 10

**Special Procedural Requirements:**

- Fetch the expected categories from the backend API before starting the test
- Ensure the slider is fully loaded and operational

**Intercase Dependencies:**

- None

**Test Procedure Steps:**

1. Navigate to https://ecommerce-omega-three-23.vercel.app/
2. Verify that the "Browse By Category" heading is visible on the page
3. Fetch the list of expected categories from the backend API endpoint `/api/categories`
4. Locate the categories slider under the "Browse By Category" heading
5. Verify that each category from the API response is displayed in a card within the slider
6. Confirm that each category card has its name displayed

**Pass/Fail Criteria:**

- **Pass:** All categories from the backend are displayed in individual cards within the slider, and each card displays the category name.
- **Fail:** One or more categories from the backend are not displayed, or category names are missing from the cards.
