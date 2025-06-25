# Login Functionality Test Cases (IEEE 829 Format)

## Test Suite: Login Functionality

---

### Test Case ID: TC-LOGIN-01
**Test Case Name:** Successful Login with Valid Credentials  
**Test Item(s):** Email input, Password input, Login button

**Requirement(s) Covered:**
- Users can log in with valid credentials.

**Input Specifications:**
- User action: Enter valid email and password, then click "Login".

**Preconditions:**
- User is on the login page: https://b2b.deaftawk.com/login

**Test Data:**
- Email: furqan+deaf123456@bitsol.tech
- Password: Bs123456!

**Output Specifications:**
- User is redirected to the dashboard page.

**Environmental Needs:**
- Browser: Chrome v123
- OS: Windows 10

**Special Procedural Requirements:**
- Wait for the dashboard page to load.

**Intercase Dependencies:**
- None

**Test Procedure Steps:**
1. Navigate to https://b2b.deaftawk.com/login
2. Locate the email input field
3. Enter furqan+deaf123456@bitsol.tech
4. Locate the password input field
5. Enter validPassword
6. Click the "Login" button
7. Verify that the user is redirected to the dashboard page

**Pass/Fail Criteria:**
- **Pass:** User is redirected to the dashboard page.
- **Fail:** User remains on the login page or sees an error message.

---

### Test Case ID: TC-LOGIN-02
**Test Case Name:** Unsuccessful Login with Invalid Credentials  
**Test Item(s):** Email input, Password input, Login button

**Requirement(s) Covered:**
- Users cannot log in with invalid credentials.

**Input Specifications:**
- User action: Enter invalid email and/or password, then click "Login".

**Preconditions:**
- User is on the login page: https://b2b.deaftawk.com/login

**Test Data:**
- Email: invalidEmail@bitsol.tech
- Password: invalidPassword

**Output Specifications:**
- An error message is displayed indicating invalid credentials.

**Environmental Needs:**
- Browser: Chrome v123
- OS: Windows 10

**Special Procedural Requirements:**
- None

**Intercase Dependencies:**
- None

**Test Procedure Steps:**
1. Navigate to https://b2b.deaftawk.com/login
2. Locate the email input field
3. Enter invalidEmail@bitsol.tech
4. Locate the password input field
5. Enter invalidPassword
6. Click the "Login" button
7. Verify that an error message is displayed

**Pass/Fail Criteria:**
- **Pass:** An error message is displayed indicating invalid credentials.
- **Fail:** No error message is displayed.

---

### Test Case ID: TC-LOGIN-03
**Test Case Name:** Login with Empty Fields  
**Test Item(s):** Email input, Password input, Login button

**Requirement(s) Covered:**
- Users cannot log in with empty fields.

**Input Specifications:**
- User action: Leave email and password fields empty, then click "Login".

**Preconditions:**
- User is on the login page: https://b2b.deaftawk.com/login

**Test Data:**
- Email: ""
- Password: ""

**Output Specifications:**
- An error message is displayed for required fields.

**Environmental Needs:**
- Browser: Chrome v123
- OS: Windows 10

**Special Procedural Requirements:**
- None

**Intercase Dependencies:**
- None

**Test Procedure Steps:**
1. Navigate to https://b2b.deaftawk.com/login
2. Leave the email input field empty
3. Leave the password input field empty
4. Click the "Login" button
5. Verify that an error message is displayed for required fields

**Pass/Fail Criteria:**
- **Pass:** An error message is displayed indicating that fields are required.
- **Fail:** No error message is displayed.
