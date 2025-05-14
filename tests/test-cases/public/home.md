# Home Page Test Cases

---

## Test Case ID: TC-035

**Test Case Name:** Load Home Page Successfully  
**Test Item(s):** Root Page Load  
**Requirement(s) Covered:** UC-HOME-001 (Display Homepage Content)

### Preconditions

- Website is online
- Internet connection available
- User is on a supported browser

### Input Specifications

- None

### Test Data

- None

### Output Specifications

- All main sections (Navbar, Hero, Categories, Products, Footer) load without errors

### Environmental Needs

- Browser: Chrome v120.0
- OS: Windows 10
- Internet connection

### Test Procedure Steps

1. Open https://ecommerce-omega-three-23.vercel.app/
2. Wait for the page to fully load

### Pass/Fail Criteria

- ✅ Pass: Page loads with all key sections visible
- ❌ Fail: Page shows blank sections or crashes

---

## Test Case ID: TC-036

**Test Case Name:** Verify Navigation Bar Items Are Clickable  
**Requirement(s) Covered:** UC-HOME-002 (Primary Navigation)

### Input Specifications

- Click navbar items like Home, All Products, Cart

### Test Data

- None

### Output Specifications

- Each nav link should navigate to correct destination

### Test Procedure Steps

1. Load homepage
2. Click each of the following:
   - Home
   - Contact
   - About
   - Sign Up
   - Cart
3. Verify the corresponding page or route loads

### Pass/Fail Criteria

- ✅ Pass: Each click routes to the correct screen
- ❌ Fail: Links are broken or misrouted

---

## Test Case ID: TC-037

**Test Case Name:** Verify Categories from API are Displayed  
**Requirement(s) Covered:** UC-HOME-003 (Dynamic Category Rendering)

### Preconditions

- API must return at least one category

### Input Specifications

- None

### Test Data

- Response from category API

### Output Specifications

- All categories received from the API are shown under "Categories"

### Test Procedure Steps

1. Intercept GET /api/categories (or related endpoint)
2. Get list of returned categories
3. Compare visible category names with response

### Pass/Fail Criteria

- ✅ Pass: All API categories match UI
- ❌ Fail: Any missing or mismatched category

---

## Test Case ID: TC-038

**Test Case Name:** Verify Featured Products Section Displays Products  
**Requirement(s) Covered:** UC-HOME-004 (Homepage Product Showcase)

### Input Specifications

- None

### Preconditions

- Homepage API returns a product list

### Output Specifications

- At least one product is rendered visually

### Test Procedure Steps

1. Load the homepage
2. Scroll to product display section
3. Confirm product cards are visible with image, title, and price

### Pass/Fail Criteria

- ✅ Pass: Products appear with complete data
- ❌ Fail: Section is empty or missing product details

---

## Test Case ID: TC-039

**Test Case Name:** Navigate to "All Products" from Home Page  
**Requirement(s) Covered:** UC-HOME-005 (Navigation to All Products)

### Input Specifications

- Click on "All Products" button or link

### Output Specifications

- User should be redirected to /all-products or similar route

### Test Procedure Steps

1. Load home page
2. Click "View All Products" in hero or below categories
3. Confirm route change and product grid display

### Pass/Fail Criteria

- ✅ Pass: User lands on product listing page
- ❌ Fail: Navigation fails or results in 404

---

## Test Case ID: TC-040

**Test Case Name:** Verify Responsive Layout on Mobile  
**Requirement(s) Covered:** UC-HOME-006 (Responsive Design)

### Input Specifications

- Viewport: 375x667 (iPhone 11)

### Output Specifications

- Elements should stack, menu collapses into mobile drawer

### Test Procedure Steps

1. Open homepage in mobile viewport
2. Confirm:
   - Navbar becomes hamburger menu
   - Products/cards stack vertically
   - Text/images don't overflow

### Pass/Fail Criteria

- ✅ Pass: Layout adapts correctly
- ❌ Fail: UI breaks or is unreadable
