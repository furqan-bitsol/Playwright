# 🧠 Copilot Code Review Instructions — Next.js Frontend

Use the following instructions to review, generate, or refactor code in this project.

---

## ⚛️ React Standards

- Always use **React Functional Components** — avoid class components.
- **Comment all code** (at least with high-level summaries above functions, components, or complex logic).
- **Ensure accessibility**: Use semantic HTML and ARIA attributes when appropriate.

---

## 🟦 TypeScript Guidelines

- Never use the `any` type. Instead, define proper types or interfaces.
- Create and store global/shared types in the `types/` folder as **`.d.ts`** files.
- Do not inline complex types — reuse or declare them in the correct place.

---

## 🖼️ SVG Usage

- When converting SVGs to reusable components:
  - Accept the following props: `width`, `height`, `className`, and `color`.
  - Set their **default values** to match the original SVG.
  - Place all SVG components in a separate **`components/icons/`** folder.

---

## 🧩 Component Guidelines

- Use **ShadCN UI components** whenever applicable.
- Do not change the visual styling of ShadCN components unless necessary.
- Avoid repeating code. Reuse existing components or extract shared logic.
- When creating forms, always use the **ShadCN Form system** (`@/components/ui/form`).
- Any repetitive JSX/UI blocks should be abstracted into components.

---

## 🖼️ Image Handling

- Replace all `<img>` tags with **Next.js `<Image />`** component for optimization and accessibility.

---

## 🔧 Project Structure & Organization

- Keep **mock data** in a separate `mocks/` directory.
- Store **constant values** in a `constants/` directory.
- Add **utility/helper functions** in `utils/` — group and name them meaningfully.
- Ensure **modular**, clean, and logically separated code. Each file should serve a clear purpose.

---

## 🔁 Reusability Rules

- Do not repeat logic or structure — if similar code already exists, **reuse** it.
- Extract repeated logic into custom hooks, utility functions, or components as appropriate.
- Group related code into directories (e.g., `components/form/`, `components/cards/`, etc.).

---

## ✅ Checklist (for each reviewed file)

- [ ] Uses React functional components
- [ ] No `any` types
- [ ] Proper typing with shared types in `types/`
- [ ] Comments provided
- [ ] ShadCN components used correctly
- [ ] Accessibility ensured
- [ ] SVGs follow reusable pattern with proper props
- [ ] `<Image>` used instead of `<img>`
- [ ] No duplicate logic or code
- [ ] Constants/mocks/utils are in their respective folders

---

## 🧩 Suggestions to Copilot

When reviewing or generating code, always:

- Identify opportunities to reuse existing code.
- Suggest replacing repetitive logic with functions or components.
- Add comments to clarify intent or explain logic.
- Improve accessibility wherever possible.
