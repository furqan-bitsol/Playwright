# Sign Up Test Cases

---

## ✅ Test Case ID: TC-001

**Test Case Name:** Sign Up with Valid Details  
**Test Item(s):** Sign Up Form

**Requirement(s) Covered:** UC-AUTH-005 (Register New User)

**Input Specifications:**

- Full Name: Jane Doe
- Email: janedoe@example.com
- Password: SecurePass123
- Confirm Password: SecurePass123

**Preconditions:**

- User is not already registered
- User is on the Sign Up screen
- Internet connection available

**Test Data:** Valid registration info

**Output Specifications:**

- User account is created, and the user is redirected or shown a success message

**Environmental Needs:**

- Browser: Chrome v120.0
- OS: Windows 10
- Internet connection

**Special Procedural Requirements:** None  
**Intercase Dependencies:** None

**Test Procedure Steps:**

1. Open: https://ecommerce-omega-three-23.vercel.app/login
2. Click "Don't have an account? Sign Up"
3. Enter all valid fields
4. Click Sign Up

**Pass/Fail Criteria:**

- **Pass:** User account is created successfully
- **Fail:** Error message is shown despite valid input

---

## ✅ Test Case ID: TC-002

**Test Case Name:** Sign Up with Already Registered Email

**Requirement(s) Covered:** UC-AUTH-006 (Prevent Duplicate Accounts)

**Input Specifications:**

- Email: Already registered email (e.g. janedoe@example.com)

**Preconditions:**

- User with same email already exists in the system

**Test Data:**

- Use same email as in TC-025

**Output Specifications:**

- Sign Up should fail with an error like "Email already registered"

**Test Procedure Steps:**

1. Open Sign Up form
2. Enter previously registered email
3. Fill other fields with valid data
4. Submit form

**Pass/Fail Criteria:**

- **Pass:** Error message is shown, sign-up blocked
- **Fail:** Sign-up succeeds with duplicate email

---

## ✅ Test Case ID: TC-003

**Test Case Name:** Submit Empty Sign Up Form

**Requirement(s) Covered:** UC-AUTH-007 (Required Field Validation)

**Input Specifications:**

- Leave all fields empty

**Preconditions:**

- User is on the Sign Up screen

**Test Data:** None

**Output Specifications:**

- Form shows required field validation messages

**Test Procedure Steps:**

1. Open Sign Up form
2. Click Sign Up without filling anything

**Pass/Fail Criteria:**

- **Pass:** Each field shows "required" or equivalent error
- **Fail:** Form submits or no validation appears

---

## ✅ Test Case ID: TC-004

**Test Case Name:** Navigate Back to Login from Sign Up

**Requirement(s) Covered:** UC-AUTH-008 (User Flow Navigation)

**Input Specifications:**

- Click link: "Already have an account? Login"

**Preconditions:**

- User is on the Sign Up screen

**Output Specifications:**

- User is redirected to Login form

**Test Procedure Steps:**

1. Open Sign Up form
2. Click "Already have an account? Login"

**Pass/Fail Criteria:**

- **Pass:** Login form appears
- **Fail:** Link doesn't work or redirects incorrectly
