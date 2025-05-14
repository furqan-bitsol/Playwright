# Forgot Password Test Cases

---

## ✅ Test Case ID: TC-001

**Test Case Name:** Submit Forgot Password Request with Valid Email  
**Test Item(s):** Forgot Password Form

**Requirement(s) Covered:** UC-AUTH-001 (Initiate Password Reset via Email)

**Input Specifications:**

- Email: `testuser@example.com` (an existing registered account)

**Preconditions:**

- User is registered with the given email
- Internet connection is active
- User is on the Forgot Password screen

**Test Data:**

- Valid registered email

**Output Specifications:**

- System sends a reset link to the entered email, and user sees a confirmation message

**Environmental Needs:**

- Browser: Chrome v120.0
- OS: Windows 10
- Internet connection

**Special Procedural Requirements:** None  
**Intercase Dependencies:** None

**Test Procedure Steps:**

1. Open https://ecommerce-omega-three-23.vercel.app/forgot-password
2. Enter `testuser@example.com` in the email field
3. Click the Submit button

**Pass/Fail Criteria:**

- ✅ Pass: A success message appears (e.g., "Reset link sent")
- ❌ Fail: Error shown or no feedback provided

---

## ✅ Test Case ID: TC-002

**Test Case Name:** Submit Forgot Password with Unregistered Email

**Requirement(s) Covered:** UC-AUTH-010 (Handle Unknown Emails Gracefully)

**Input Specifications:**

- Email: `notregistered@example.com`

**Preconditions:**

- Email is not associated with any user account

**Test Data:**

- Invalid/unregistered email

**Output Specifications:**

- System should show an error or generic message like "If the email exists..."

**Test Procedure Steps:**

1. Open the Forgot Password form
2. Enter an unregistered email
3. Submit the form

**Pass/Fail Criteria:**

- ✅ Pass: Graceful response shown (no indication of whether email is registered)
- ❌ Fail: Security leak (e.g., "Email not found")

---

## ✅ Test Case ID: TC-003

**Test Case Name:** Submit Forgot Password with Invalid Email Format

**Requirement(s) Covered:** UC-AUTH-011 (Validate Email Format)

**Input Specifications:**

- Email: `invalidemail.com`

**Preconditions:**

- User is on Forgot Password page

**Test Data:**

- Improperly formatted email

**Output Specifications:**

- Client-side validation should block submission

**Test Procedure Steps:**

1. Enter `invalidemail.com` into the email field
2. Click Submit

**Pass/Fail Criteria:**

- ✅ Pass: Form shows "invalid email format" error
- ❌ Fail: Form submits or gives unclear error

---

## ✅ Test Case ID: TC-004

**Test Case Name:** Submit Forgot Password with Empty Field

**Requirement(s) Covered:** UC-AUTH-011 (Required Field Validation)

**Input Specifications:**

- Leave email field blank

**Preconditions:**

- User is on the Forgot Password page

**Output Specifications:**

- Form should show "Email is required" error

**Test Procedure Steps:**

1. Leave the email field empty
2. Click Submit

**Pass/Fail Criteria:**

- ✅ Pass: Error message appears
- ❌ Fail: Form submits or shows no feedback

---
