# Admin Categories Management Test Cases

---

## TC-001: Access Categories Management Page

**Test Item(s):** Admin Dashboard  
**Requirement(s) Covered:** UC-ADM-001 (Access Categories Management)

**Preconditions:**

- Admin user is authenticated and logged into the admin panel.

**Test Procedure Steps:**

1. Navigate to the admin dashboard ("https://ecommerce-omega-three-23.vercel.app/admin").
2. Click on the "Manage Categories" link.

**Expected Result:**

- The Categories Management page loads successfully, displaying a list of existing categories.

**Pass/Fail Criteria:**

- **Pass:** Categories page is accessible and displays existing categories.
- **Fail:** Page fails to load or displays an error.

---

## TC-002: Add New Category with Valid Data

**Requirement(s) Covered:** UC-ADM-002 (Add New Category)

**Preconditions:**

- Admin user is on the Categories Management page.

**Test Procedure Steps:**

1. Click on the "Add Category" button.
2. Select a category icon (e.g., "Electronics").
3. Click the "Save Category" button.

**Expected Result:**

- The new category is added to the list and displayed on the Categories Management page.

**Pass/Fail Criteria:**

- **Pass:** Category is successfully added and visible in the list.
- **Fail:** Category is not added or an error message is displayed.

---

## TC-003: Edit Existing Category Name

**Requirement(s) Covered:** UC-ADM-004 (Edit Category)

**Preconditions:**

- At least one category exists in the list.

**Test Procedure Steps:**

1. Click on the "Edit" button next to an existing category.
2. Change the category name (e.g., from "Electronics" to "Computers").
3. Click the "Save Changes" button.

**Expected Result:**

- The category name is updated and reflected in the list.

**Pass/Fail Criteria:**

- **Pass:** Category name is successfully updated.
- **Fail:** Update fails or changes are not saved.

---

## TC-004: Delete Existing Category

**Requirement(s) Covered:** UC-ADM-005 (Delete Category)

**Preconditions:**

- At least one category exists in the list.

**Test Procedure Steps:**

1. Click on the "Delete" button next to an existing category.
2. Confirm the deletion in the Modal by clicking "Delete" button.

**Expected Result:**

- The category is removed from the list.

**Pass/Fail Criteria:**

- **Pass:** Category is successfully deleted.
- **Fail:** Deletion fails or category remains in the list.

---

## TC-005: Validate Empty Category Name on Addition

**Requirement(s) Covered:** UC-ADM-006 (Validate Category Name Input)

**Preconditions:**

- Admin user is on the Add Category form.

**Test Procedure Steps:**

1. Leave the category name field empty.
2. Click the "Save" or "Submit" button.

**Expected Result:**

- The system displays a validation error indicating that the category name is required.

**Pass/Fail Criteria:**

- **Pass:** Validation error is displayed, and category is not added.
- **Fail:** Category is added without a name or no validation error is shown.

---

## TC-006: Verify Category Visibility on Frontend

**Requirement(s) Covered:** UC-ADM-009 (Frontend Category Display)

**Preconditions:**

- A category has been added via the admin panel.

**Test Procedure Steps:**

1. Navigate to the main website homepage.
2. Locate the categories section.
3. Verify that the newly added category is displayed.

**Expected Result:**

- The new category is visible to end-users on the homepage.

**Pass/Fail Criteria:**

- **Pass:** Category is displayed on the frontend.
- **Fail:** Category is missing or not visible to users.
