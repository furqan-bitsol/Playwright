import { Page, expect, Locator } from '@playwright/test';

export class BranchesPage {
  readonly page: Page;
  // Login selectors
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  // Sidebar
  readonly branchesMenu: Locator;
  // Branches page
  readonly addBranchBtn: Locator;
  // Add Branch modal
  readonly branchNameInput: Locator;
  readonly branchCodeInput: Locator;
  readonly phoneInput: Locator;
  readonly emailBranchInput: Locator;
  readonly groupDropdown: Locator;
  readonly groupOption: (group: string) => Locator;
  readonly addBtn: Locator;
  readonly cancelBtn: Locator;
  // Toasts
  readonly toast: Locator;
  // Branch list
  readonly branchList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Enter email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Enter Password' });
    this.loginButton = page.getByRole('button', { name: 'Login', exact: true });
    this.branchesMenu = page.getByText('Branches', { exact: true });
    this.addBranchBtn = page.getByRole('button', { name: '+ Add Branch' });
    this.branchNameInput = page.getByRole('textbox', { name: 'Branch Name' });
    this.branchCodeInput = page.getByRole('textbox', { name: 'Branch Code' });
    this.phoneInput = page.locator('input[type="tel"]');
    this.emailBranchInput = page.getByRole('textbox', { name: 'Enter email' });
    this.groupDropdown = page.getByRole('combobox');
    this.groupOption = (group: string) => page.getByText(group, { exact: true });
    this.addBtn = page.getByRole('button', { name: 'Add', exact: true });
    this.cancelBtn = page.getByRole('button', { name: 'Cancel', exact: true });
    this.toast = page.getByRole('alert');
    this.branchList = page.getByText('Gulberg Branch'); // For assertion
  }

  async gotoLogin() {
    await this.page.goto('https://stage-b2b.deaftawk.com/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForURL('**/dashboard');
  }

  async gotoBranches() {
    await this.page.getByTestId('branches-id').click();
    await expect(await this.page.getByRole('heading', { name: 'Branches' })).toBeVisible();
    expect(this.page).toHaveURL('https://stage-b2b.deaftawk.com/branches');
    await expect(this.addBranchBtn).toBeVisible();
    // add a delay for 10 seconds
    await this.page.waitForTimeout(2000); // Wait for 10 seconds
    await this.addBranchBtn.click();
    await this.page.waitForTimeout(2000); // Wait for 10 seconds


  }

  async openAddBranchModal() {
    // wait this.addBranchBtn.click();
    // Check for the Branch modal heading instead of input
   // await expect(this.page.getByRole('heading', { name: 'Branch', level: 6 })).toBeVisible();
  }

  async fillBranchForm({ name, code, phone, email, group }: { name: string; code: string; phone: string; email: string; group: string; }) {
    await this.branchNameInput.fill(name);
    await this.branchCodeInput.fill(code);
    await this.phoneInput.fill(phone);
    await this.emailBranchInput.fill(email);
 // await this.groupDropdown.click();
 // await this.groupOption(group).click();
  }

  async submitBranch() {
    await this.addBtn.click();
  }

  async interceptAddBranch(response: { status: number; body: any }) {
    await this.page.route('https://staging-dt.deaftawk.com/branch/', route => {
      route.fulfill(response);
    });
  }

  async expectSuccessToast(message: string) {
    await expect(this.toast).toHaveClass(/bg-green-500 text-white/);
    await expect(this.toast).toHaveText(new RegExp(message, 'i'));
  }

  async expectErrorToast(message: string) {
    await expect(this.toast).toHaveClass(/border-destructive|bg-destructive|text-destructive-foreground/);
    await expect(this.toast).toHaveText(new RegExp(message, 'i'));
  }

  async expectBranchInList(branchName: string) {
    await expect(this.page.getByText(branchName)).toBeVisible();
  }

  async expectBranchNotInList(branchName: string) {
    await expect(this.page.getByText(branchName)).not.toBeVisible();
  }
}
