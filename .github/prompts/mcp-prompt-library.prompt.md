#### 🚨 **Toasts**

### 🟥 Toast Notifications

To detect and assert toast messages:

- Get the toast container using: `getByRole('alert')`
- To determine the **type of toast**:
  - For **error toasts**, check if the class includes:
    `border-destructive bg-destructive text-destructive-foreground`
  - For **success toasts**, check if the class includes:
    `bg-green-500 text-white`
- Then, assert the **text content** of the toast based on expected message.

✅ Example: Success Toast

```ts
const toast = page.getByRole('alert');
await expect(toast).toHaveClass(/bg-green-500 text-white/);
await expect(toast).toHaveText(/Successfully added/);
```

---

#### ❌ **Validation Errors**

### 🟩 Field Validation Errors

To handle form validation errors:

- Submit the form first using `click()`.
- For detecting if a field has any error **(without checking the text)**:
  - Look for `<p>` tags with the class `text-destructive`.
- If you need to validate the **specific error message**, use `getByText('...')`.

✅ Example: Detecting Any Error in the Field

```ts
await this.submitButton.click();
await expect(this.page.locator('p.text-destructive')).toBeVisible();
```

---

### 🟦 Dropdowns (Rules for Native and Custom Overlays)

#### ✅ General Rules for Dropdowns

- Identify whether the dropdown is a **native `<select>`** or a **custom overlay** (e.g., MUI Autocomplete).
- Do **not** use `selectOption()` on custom dropdowns — it only works with native `<select>` elements.
- Always click the input or trigger before selecting an option in custom dropdowns.
- Prefer dynamic selection (e.g., selecting the first item) when possible to reduce hardcoded selectors.

✅ Example:

```ts
await this.dropdownInput.click();
await this.page.locator('.dropdown-option-selector').first().click();
```

#### 🟩 Native `<select>` Dropdowns

Use this when interacting with a standard HTML `<select>` element.

- Use `selectOption()` for selecting values.
- Target the dropdown using `getByLabel()` for clarity and accessibility.

✅ Example:

```ts
await page.getByLabel('Category Icon').selectOption("Woman's Fashion");
```

---
