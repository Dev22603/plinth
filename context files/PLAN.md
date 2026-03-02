# Lodestone Website Build Plan

This document breaks down the creation of the Lodestone single-page agency website into small, achievable steps based on `WEBSITE_SPEC.md`. Each step focuses on a single logical slice of work.

## Phase 1: Project Setup & Foundation

1. [ ] **Initialize Next.js Project**
   - Run `create-next-app` with Next.js 16, TypeScript, Tailwind CSS v4, App Router, and no src/ directory.
   - Clean up boilerplate code in `app/page.tsx` and `app/layout.tsx`.
   - Install `framer-motion` and `@vercel/analytics`.

2. [ ] **Configure the Design System (CSS Variables)**
   - Update `app/globals.css` to include the specific color palette (bg, ink, accent, borders) as custom CSS properties.
   - Add the typography scale (hero, display, heading, body, etc.) and line-heights to `globals.css`.
   - Add the layout container utility class.

3. [ ] **Configure Fonts & Metadata**
   - Update `app/layout.tsx` to load Playfair Display, DM Sans, and JetBrains Mono via `next/font/google` with `display: 'swap'`.
   - Apply the font variables to the `<html>` or `<body>` tag.
   - Add the strict metadata and OpenGraph tags specified in the spec.

## Phase 2: Global Components & Data

4. [ ] **Create the Data File (`lib/data.ts`)**
   - Extract all hardcoded content from the spec (services, case studies, about text, contact info).
   - Export this data as structured TypeScript objects/arrays for the UI to consume.

5. [ ] **Build Base UI Components**
   - Create `SectionLabel.tsx` (the "01 / Label" component).
   - Create `MonoTag.tsx` (the technology tag).
   - Create `MetricCallout.tsx` (the number + description block).
   - Create `Divider.tsx` (styled `<hr>`).
   - Create `TextLink.tsx` (styled anchor with arrow).

6. [ ] **Build Navigation & Footer**
   - Create `Footer.tsx` (single line, mono text).
   - Create `Navbar.tsx` (sticky behavior, transition on scroll, right-aligned links).
   - Implement the mobile menu overlay for the Navbar.

## Phase 3: Page Sections

7. [ ] **Build the Hero Section (`#home`)**
   - Set up the 12-column grid layout (content left, decorative right).
   - Implement the typography and layout for the headline, subhead, and links.
   - Build the custom CSS/SVG decorative dot grid with the vertical text.
   - Add the initial Framer Motion entrance animations.

8. [ ] **Build the Services Section (`#services`)**
   - Set up the 3-column layout (stacking on mobile).
   - Map over the services data to render each column using `SectionLabel`, `MonoTag`, and raw typography.
   - Implement the scroll-triggered staggered fade-up animation.

9. [ ] **Build the Work Section (`#work`)**
   - Set up the 12-column grid with the left sticky meta block (cols 1-4) and right content block.
   - Map over the case studies data.
   - Handle responsive stacking (meta block on top, metrics in a grid row on mobile).
   - Implement the scroll reveal per case study row.

10. [ ] **Build the About Section (`#about`)**
    - Set up the specific background color (`--color-bg-subtle`) and borders.
    - Set up the 12-column grid (text left, aside right).
    - Build the right-side marginalia block (Availability, Stack, Based in).

11. [ ] **Build the Contact Section (`#contact`)**
    - Set up the narrow, centered single column.
    - Add the styled email and LinkedIn `TextLink` components.
    - Ensure no forms are present.

## Phase 4: Assembly & Polish

12. [ ] **Assemble `app/page.tsx`**
    - Import and render all sections in order: Navbar, Hero, Services, Work, About, Contact, Footer.
    - Ensure smooth scrolling anchor links are working.

13. [ ] **Final Review against Spec Checklist**
    - Verify all "Things to Explicitly Avoid" are absent (no border radius, no pure black/white, no shadows).
    - Check responsiveness across all breakpoints (mobile stacking, mobile nav).
    - Verify typography scale and color application.
