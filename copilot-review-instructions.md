# 🧠 Copilot Custom Review Instructions for Next.js Frontend

These are guidelines and expectations for reviewing this Next.js frontend project. Please review all code, components, pages, and utilities based on the rules below and point out any issues clearly.

---

## 1. ✅ General Expectations

- Ensure all components are **modular**, **reusable**, and follow **single-responsibility**.
- Ensure that **React best practices** are followed.
- Prefer **function components** with **hooks**.
- Avoid any **unused variables**, **console logs**, or **debugging leftovers**.
- Verify that **naming conventions** are clear, meaningful, and consistent.

---

## 2. 🔄 Next.js Best Practices

- Ensure all files in `/pages` or `/app` follow proper **routing conventions**.
- For `/app` directory (app router):
  - Check for usage of **`use client`** directive when needed.
- Ensure **dynamic routes** and **catch-all routes** are properly typed and documented.
- Confirm proper usage of **`getServerSideProps`, `getStaticProps`, or `generateStaticParams`** if used.

---

## 3. 🎨 Component Guidelines

- Use **Tailwind CSS** consistently (whichever is used in this project).
- Props should be **clearly typed** with **TypeScript interfaces or types**.
- Component files should have:
  - Descriptive names
  - Clean JSX layout
  - Logical structure: State → Functions → JSX
- Avoid deeply nested ternary logic in JSX.

---

## 4. ⚙️ State and Hooks

- Use `useState`, `useEffect`, `useMemo`, `useCallback`, etc. correctly.
- Avoid unnecessary state – consider derived state or memoization where appropriate.
- If using **React Query / TanStack Query**, ensure:
  - Query keys are meaningful.
  - Proper error and loading handling.
- Validate usage of **custom hooks**: should be named like `useSomething`, and encapsulate specific logic.

---

## 5. 🔐 Environment & Security

- Ensure no secret values (API keys, tokens) are hardcoded.
- Verify `.env` values are accessed using `process.env.NEXT_PUBLIC_*` if used in frontend.

---

## 6. 🧪 Testing (Optional Section)

> If the project includes tests

- Ensure `playwright` tests exist and:
  - Cover meaningful use cases.
  - Use `describe`, `it`, `test` structure.
  - Avoid flaky, hard-coded delays or DOM assumptions.

---

## 7. 🧼 Code Quality & Lint

- Follow lint rules defined in `.eslintrc`.
- Ensure `tsconfig` paths are respected and import aliases are used.
- Avoid using `any` type unless absolutely necessary.
- Use `async/await` over `.then()` when handling promises.

---

## 8. 📁 Project Structure

- Check for consistent folder naming (e.g., `components`, `hooks`, `utils`).
- No duplicated code or logic between files.
- Ensure separation of concern between:
  - UI components
  - Hooks
  - Services (e.g., API calls)
  - Pages/routes

---

## 9. 💡 Suggestions

Always suggest:

- Code cleanup
- Better prop typing
- Simpler logic or clearer conditionals
- Performance improvements (like memoization or lazy loading)

---

## 🧩 How to Use This

GitHub Copilot and Copilot Chat:  
When reviewing code, follow the above rules to:

- Flag bad practices
- Recommend improvements
- Suggest better patterns
- Catch bugs or fragile logic
