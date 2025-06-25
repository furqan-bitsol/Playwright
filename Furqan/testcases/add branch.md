# Test Case: Successfully Add a Branch

**Test Case ID:** TC-BRANCH-01  
**Test Case Name:** Successfully Add a Branch  
**Test Item(s):** Branch Name input, Phone No input, Email input, Select Group dropdown, Add button

## Requirement(s) Covered
- Users can create a new branch by providing all required valid information.

## Input Specifications
- **User action:** Fill in the Branch Name, Phone No, Email, select a Group, and click "Add".

## Preconditions
- User is logged in
- User is on the Branches page: https://b2b.deaftawk.com/branches

## Test Data
- **Branch Name:** Gulberg Branch
- **Branch Code:** 102 (optional)
- **Phone No:** 3123456789
- **Email:** gulberg@deaftawk.com
- **Select Group:** DeafTawk PK

## Output Specifications
- Branch is added successfully
- Confirmation toast/message is displayed
- Branch list is updated with the new entry

## Environmental Needs
- **Browser:** Chrome v123
- **OS:** Windows 10

## Special Procedural Requirements
- Intercept and verify POST request to: POST /api/v1/branches

## Intercase Dependencies
- TC-LOGIN-01 (Successful Login)

## Test Procedure Steps
1. Navigate to https://b2b.deaftawk.com/branches
2. Click the "Add Branch" button
3. In the modal:
    - Enter "Gulberg Branch" into the Branch Name field
    - Enter "102" into the Branch Code field (optional)
    - Enter "3123456789" into the Phone No field
    - Enter "gulberg@deaftawk.com" into the Email field
    - Select "DeafTawk PK" from the Group dropdown
    - Click the "Add" button
4. Intercept and assert the response from POST /api/v1/branches
5. Verify the toast message confirms branch creation
6. Verify that the branch list includes "Gulberg Branch"

## Pass/Fail Criteria
- **Pass:** API returns 201 status; confirmation message appears; branch is listed
- **Fail:** API returns error or branch does not appear in the list
