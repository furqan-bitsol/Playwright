import { test, expect } from '@playwright/test';
import { validUser } from '../utils/testData';
import { BranchesPage } from '../pages/BranchesPage';
import { branchSuccessResponse, branchFailResponse, branchApiMockResponse, } from '../mocks/branches.mock';
test.describe('Successfully Add a Branch', () => {
  let branchesPage: BranchesPage;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    branchesPage = new BranchesPage(page);
    await branchesPage.gotoLogin();
    await branchesPage.login(validUser.email, validUser.password);
    await branchesPage.gotoBranches();
  });

  test('✅ Pass: Add branch with valid data', async () => {
    await branchesPage.interceptAddBranch(branchApiMockResponse);
    await branchesPage.openAddBranchModal();
    await branchesPage.fillBranchForm(branchSuccessResponse.body)
    await branchesPage.submitBranch();
    await branchesPage.expectSuccessToast('Successfully added');
  //  await branchesPage.expectBranchInList('asdawd');
  });

//   test('❌ Fail: Add branch with duplicate name', async () => {
//     await branchesPage.interceptAddBranch(branchFailResponse);
//     await branchesPage.openAddBranchModal();
//     await branchesPage.fillBranchForm({
//       name: 'Gulberg Branch',
//       code: '102',
//       phone: '3123456789',
//       email: 'gulberg@deaftawk.com',
//       group: 'DeafTawk PK',
//     });
//     await branchesPage.submitBranch();
//     await branchesPage.expectErrorToast('Branch already exists');
//     await branchesPage.expectBranchNotInList('Gulberg Branch');
//   });
});
