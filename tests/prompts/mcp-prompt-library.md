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
