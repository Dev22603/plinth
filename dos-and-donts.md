# Development DOs and DONTs

These rules should be referenced whenever making significant structural or tooling changes to the project.

## Documentation Links
> **Note to USER:** Please replace these placeholders with the actual latest documentation links.

- **Next.js 16 (App Router)**: `https://nextjs.org/docs`
- **Tailwind CSS v4**: `https://tailwindcss.com/`
- **Framer Motion**: `https://motion.dev/docs`

## DOs

- **Always verify the latest versions of core technologies via web search before installation.**
  - **Next.js**: Check the web for the latest stable version (currently 16+ as of early 2026). Check documentation.
  - **Tailwind CSS**: Check the web for the latest major version (currently v4). Check documentation.
  - **Framer Motion**: Check the latest version via npm or web search.
- **Ask for documentation links if needed.** If you require specific documentation links for the latest Next.js 16 App Router or Tailwind v4 features, I will provide them for you.
- **Use TypeScript strictly.** Avoid `any` types.
- **Follow the `WEBSITE_SPEC.md` strictly.** Adhere to the design system, typography scale, and color rules.
- **Build component by component.** Ensure each piece is working before moving to the next section or page block.
- **Commit or track changes incrementally.** Keep changes atomic and testable.

## DONTs

- **Do NOT guess framework versions.** Always verify to prevent using outdated syntax or breaking changes.
- **Do NOT proceed if you are unsure of the API for the current version.** If you cannot find the current documentation, stop and ask.
- **Do NOT use inline styles.** Always use Tailwind utility classes or the predefined CSS custom properties.
- **Do NOT deviate from the aesthetic constraints.** No drop shadows, no border-radiuses, no pure black/white background colors.
- **Do NOT install unnecessary dependencies.** Keep the project lightweight. Avoid heavy libraries where standard HTML/CSS or native Web APIs will suffice (e.g., no heavy slider libraries, no form handler libraries since there is no form).
- **Do NOT ignore standard Next.js App Router best practices.** Ensure components that need client-side interactivity (like framer motion) use `'use client'` appropriately, and keep the rest as Server Components.
