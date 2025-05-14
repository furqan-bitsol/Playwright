# Login Test Cases

---

## Test Case ID: TC-001

**Test Case Name:** Login with Valid Credentials  
**Test Item(s):** Login Form

**Requirement(s) Covered:** UC-AUTH-001 (Authenticate Registered User)

### Input Specifications

- **Email:** `testuser@example.com`
- **Password:** `ValidPass123`

### Preconditions

- User account `testuser@example.com` exists in the system
- Internet connection is active
- User is on the login page

### Test Data

- Valid email and password credentials

### Output Specifications

- User is redirected to the home/dashboard page after successful login

### Environmental Needs

- **Browser:** Chrome v120.0
- **OS:** Windows 10
- **Internet connection**

### Special Procedural Requirements

- None

### Intercase Dependencies

- None

### Test Procedure Steps

1. Open: [https://ecommerce-omega-three-23.vercel.app/login](https://ecommerce-omega-three-23.vercel.app/login)
2. Enter email: `testuser@example.com`
3. Enter password: `ValidPass123`
4. Click on Login button

### Pass/Fail Criteria

- **Pass:** User is redirected and authenticated
- **Fail:** Error message is shown despite valid credentials

---

## Test Case ID: TC-002

**Test Case Name:** Login with Invalid Password  
**Test Item(s):** Login Form

**Requirement(s) Covered:** UC-AUTH-002 (Handle Invalid Credentials)

### Input Specifications

- **Email:** `testuser@example.com`
- **Password:** `WrongPassword`

### Preconditions

- User exists with different password

### Test Data

- Invalid password

### Output Specifications

- Login should fail, and an error message should be displayed

### Environmental Needs

- **Browser:** Chrome v120.0
- **OS:** Windows 10
- **Internet connection**

### Special Procedural Requirements

- None

### Intercase Dependencies

- None

### Test Procedure Steps

1. Open the login page
2. Enter valid email but incorrect password
3. Click Login

### Pass/Fail Criteria

- **Pass:** Login fails with visible error message
- **Fail:** Login succeeds or error not displayed

---

## Test Case ID: TC-003

**Test Case Name:** Login with Empty Fields  
**Test Item(s):** Login Form

**Requirement(s) Covered:** UC-AUTH-003 (Field Validation)

### Input Specifications

- Empty email and password fields

### Preconditions

- User is on the login page

### Test Data

- No input

### Output Specifications

- Login should be blocked with appropriate field validation errors

### Environmental Needs

- **Browser:** Chrome v120.0
- **OS:** Windows 10
- **Internet connection**

### Test Procedure Steps

1. Open login page
2. Leave email and password empty
3. Click Login

### Pass/Fail Criteria

- **Pass:** Form shows validation messages (e.g. "Email is required")
- **Fail:** Form submits or shows no validation

---

## Test Case ID: TC-004

**Test Case Name:** Redirect to Sign Up from Login Page  
**Test Item(s):** Navigation link

**Requirement(s) Covered:** UC-AUTH-004 (Support Account Creation Navigation)

### Input Specifications

- Click on "Sign Up" link

### Preconditions

- User is on login page

### Test Data

- None

### Output Specifications

- User is redirected to sign-up page

### Test Procedure Steps

1. Open login page
2. Click on "Don't have an account? Sign Up"

### Pass/Fail Criteria

- **Pass:** User is navigated to the registration/sign-up page
- **Fail:** Link does nothing or shows an error
