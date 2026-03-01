# WEBSITE BUILD SPEC
## Freelance Agency Site — Dev Bachani
### Version 1.0 | Cursor Build Reference

---

## TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Setup](#2-tech-stack--setup)
3. [Design System](#3-design-system)
4. [File & Folder Structure](#4-file--folder-structure)
5. [Global Components](#5-global-components)
6. [Page Sections — Detailed](#6-page-sections--detailed)
7. [Animations & Interactions](#7-animations--interactions)
8. [Responsive Behavior](#8-responsive-behavior)
9. [Copy & Content](#9-copy--content)
10. [Performance & SEO](#10-performance--seo)
11. [Things to Explicitly Avoid](#11-things-to-explicitly-avoid)
12. [Checklist Before Ship](#12-checklist-before-ship)

---

## 1. PROJECT OVERVIEW

**Agency name:** Lodestone *(or swap with your chosen name — all references below use "Lodestone")*

**Tagline:** Careful software, built for real problems.

**What this site is:** A single-page freelance agency website for one developer. It offers three services: Flutter app development, full-stack web development, and data analysis. It should feel like an editorial studio — not a SaaS landing page, not a Dribbble portfolio template.

**Tone:** Confident. Human. Considered. Like a well-made physical notebook. Nothing is trying to impress you. Everything earns its place.

**Target viewer:** Founders, product leads, and technical decision-makers at early-stage startups or small teams who need real engineering work done.

**Contact channels:** Email (`dev@lodestone.dev` — replace with actual email) and LinkedIn. No contact form. No social media grid. Just two links.

**Page type:** Single-page application with smooth scroll navigation. All sections on one page. No routing needed.

---

## 2. TECH STACK & SETUP

### Framework
- **Next.js 16** (App Router)
- Use `app/page.tsx` as the root page
- No dynamic routes needed — this is a single static page

### Language
- **TypeScript** throughout. No `any` types.

### Styling
- **Tailwind CSS v4** for utility classes
- **Custom CSS variables** defined in `globals.css` for the color palette and type scale
- Do **not** use inline styles for anything that belongs in the design system

### Fonts
Load via `next/font/google`:

```ts
// app/layout.tsx
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})
```

Apply all three `variable` classes to the `<html>` element.

### Animation
- **Framer Motion** for scroll-triggered reveals and the one hero entrance
- Keep it restrained. No bounce, no spring unless carefully tuned.

### Icons
- **None** from icon libraries. Use typographic arrows (`→`, `↓`, `↑`) and Unicode characters directly in JSX. This is a deliberate aesthetic choice.

### Dependencies to install
```bash
npm install framer-motion
npm install @vercel/analytics   # optional but recommended
```

### No dependencies needed for
- Carousel / slider (not used)
- Form handling (no contact form)
- CMS (content is hardcoded)
- Animation on scroll library (Framer Motion handles this)

---

## 3. DESIGN SYSTEM

### 3.1 Color Palette

Define all colors as CSS custom properties in `app/globals.css`:

```css
:root {
  /* Backgrounds */
  --color-bg:           #f5f2ec;   /* warm off-white — base page background */
  --color-bg-subtle:    #ede9e1;   /* slightly darker cream — used for subtle section separation */

  /* Primary Ink */
  --color-ink:          #1c1c1a;   /* warm near-black — all body text */
  --color-ink-muted:    #9a8f7e;   /* warm stone gray — metadata, labels, captions, secondary text */

  /* Accent */
  --color-accent:       #1a3a2a;   /* deep forest green — headlines, borders, logo, key UI */
  --color-accent-light: #2d5c42;   /* slightly lighter green — hover states only */

  /* Borders */
  --color-border:       #d4cfc6;   /* warm light gray — dividers, card borders, rules */
  --color-border-strong:#b5afa5;   /* stronger warm gray — used sparingly */

  /* Monospace callouts */
  --color-mono-bg:      transparent;
  --color-mono-border:  #b5afa5;
}
```

**Rules:**
- Background is always `--color-bg`. Never pure white anywhere.
- Never use pure `#000000` black anywhere.
- The forest green `--color-accent` is the only "color" color. It appears on: the logo wordmark, all `<h1>` and `<h2>` elements, section label text, ruled dividers where emphasis is needed, and link hover states.
- `--color-ink-muted` is for everything secondary: date ranges, technology tags, section numbers, footer text.

---

### 3.2 Typography Scale

```css
:root {
  --font-serif:   'Playfair Display', Georgia, serif;
  --font-sans:    'DM Sans', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', 'Courier New', monospace;

  /* Type scale */
  --text-hero:    clamp(48px, 6vw, 80px);   /* hero h1 */
  --text-display: clamp(32px, 4vw, 52px);   /* section h2 */
  --text-heading: clamp(22px, 2.5vw, 32px); /* case study / service titles */
  --text-body:    18px;                      /* standard body */
  --text-small:   15px;                      /* captions, labels */
  --text-micro:   13px;                      /* footer, metadata */
  --text-mono:    14px;                      /* mono tags and callouts */

  /* Line heights */
  --leading-tight:  1.15;
  --leading-normal: 1.65;
  --leading-loose:  1.8;

  /* Letter spacing */
  --tracking-wide:  0.08em;   /* used on all-caps labels */
  --tracking-normal: 0;
}
```

**Typography rules:**
- All `<h1>`, `<h2>`, and large display text → `var(--font-serif)`, color `var(--color-accent)`
- All body paragraphs → `var(--font-sans)`, color `var(--color-ink)`, size `var(--text-body)`, leading `var(--leading-loose)`
- Section labels, technology tags, metric numbers, nav links → `var(--font-mono)` or `var(--font-sans)` depending on context (specified per section below)
- **Never center-align text** except in the one explicit exception noted in the hero section
- All headline alignment: left
- Font weight for serif headlines: `700`
- Font weight for sans body: `400` for body, `500` for navigation links

---

### 3.3 Spacing System

Use Tailwind's default spacing scale. Key values to use consistently:

| Token | Value | Used for |
|-------|-------|----------|
| `gap-4` | 16px | Between inline elements |
| `gap-8` | 32px | Between list items |
| `py-24` | 96px | Section vertical padding (mobile) |
| `py-36` | 144px | Section vertical padding (desktop) |
| `mb-16` | 64px | Space below section headers |
| `mb-8`  | 32px | Space below subsection headers |

---

### 3.4 Grid System

```css
/* Base grid — applied to all section containers */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 80px);
}
```

Sections use CSS Grid internally:
- **Hero:** `grid-cols-12` — content in cols 1–7, decorative element in cols 8–12
- **Services:** `grid-cols-3` on desktop, `grid-cols-1` on mobile, separated by `1px solid var(--color-border)`
- **Work:** `grid-cols-12` — left meta in cols 1–4, content in cols 5–12
- **About:** `grid-cols-12` — text in cols 1–7, aside in cols 9–12
- **Contact:** Centered single column, `max-width: 640px`, `margin: 0 auto`

---

### 3.5 Border & Divider Rules

- **Thin rules between sections:** `1px solid var(--color-border)` — `<hr>` elements or CSS `border-top`
- **Service column dividers:** Vertical `1px solid var(--color-border)` between the three columns
- **Case study separators:** Horizontal `1px solid var(--color-border-strong)`
- **Technology tags:** `1px solid var(--color-mono-border)`, no background fill, `font-family: var(--font-mono)`, `font-size: var(--text-mono)`, `padding: 2px 8px`
- **No `border-radius`** on any border or tag element. All corners are square. This is intentional.
- **No box shadows** anywhere on the page.

---

## 4. FILE & FOLDER STRUCTURE

```
/
├── app/
│   ├── layout.tsx          ← font vars, metadata, body class
│   ├── page.tsx            ← assembles all sections in order
│   └── globals.css         ← CSS vars, base reset, global rules
│
├── components/
│   ├── nav/
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Work.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── ui/
│   │   ├── SectionLabel.tsx     ← reusable "01 / Label" component
│   │   ├── MonoTag.tsx          ← reusable technology tag
│   │   ├── MetricCallout.tsx    ← reusable number + description block
│   │   ├── Divider.tsx          ← styled <hr>
│   │   └── TextLink.tsx         ← styled anchor with arrow
│   └── footer/
│       └── Footer.tsx
│
├── lib/
│   └── data.ts             ← all hardcoded content (services, case studies, about)
│
├── public/
│   └── (no images required initially)
│
├── tailwind.config.ts
└── tsconfig.json
```

---

## 5. GLOBAL COMPONENTS

### 5.1 `Navbar.tsx`

**Behavior:** Sticky. Starts transparent over the hero, becomes `background: var(--color-bg)` with a `border-bottom: 1px solid var(--color-border)` after 80px of scroll. Use a `useScrollTrigger` effect or Framer Motion `useScroll`.

**Layout:** Full width. `height: 64px`. `display: flex`, `align-items: center`, `justify-content: space-between`. Container width respects the global `.container` max-width.

**Left side:** Agency name — `font-family: var(--font-serif)`, `font-size: 20px`, `color: var(--color-accent)`, `font-weight: 700`. This is a plain `<span>`, not a link (clicking it does nothing useful on a single-page site, or you can scroll-to-top).

**Right side:** Four navigation items: `Work`, `Services`, `About`, `Contact`. These are `<a>` anchor links that smooth-scroll to the corresponding section IDs. `font-family: var(--font-sans)`, `font-size: 14px`, `font-weight: 500`, `letter-spacing: 0.03em`, `color: var(--color-ink)`. On hover: `color: var(--color-accent)`. Transition: `color 0.2s ease`.

**Gap between nav items:** `gap-8` (32px).

**No buttons, no CTAs, no icons in the nav.**

**Mobile:** Below `768px`, hide the four nav links. Show a simple "menu" text button (the word `MENU`, monospaced, 12px) on the right. On click, a full-width overlay slides down from the top with the four links stacked vertically, large serif font at `36px`, centered, forest green. An `✕` closes it. Background of overlay: `var(--color-bg)`.

---

### 5.2 `SectionLabel.tsx`

Reusable component. Props: `number: string`, `label: string`.

Renders: `01 / Flutter Development` 

```tsx
// Visual spec
// font-family: var(--font-mono)
// font-size: var(--text-micro) — 13px
// color: var(--color-ink-muted)
// letter-spacing: var(--tracking-wide) — 0.08em
// text-transform: uppercase
// margin-bottom: 16px
```

Used at the top of each service column and each case study block.

---

### 5.3 `MonoTag.tsx`

Reusable component. Props: `label: string`.

Renders a technology or tool name in a bordered tag.

```tsx
// Visual spec
// font-family: var(--font-mono)
// font-size: 12px
// color: var(--color-ink-muted)
// border: 1px solid var(--color-mono-border)
// padding: 3px 8px
// border-radius: 0  ← no radius
// display: inline-block
```

---

### 5.4 `MetricCallout.tsx`

Reusable component. Props: `value: string`, `description: string`.

Renders a large monospaced number above a short label.

```tsx
// Visual spec
// value: font-family: var(--font-mono), font-size: clamp(36px, 4vw, 52px),
//        color: var(--color-accent), font-weight: 700, line-height: 1
// description: font-family: var(--font-sans), font-size: var(--text-small),
//              color: var(--color-ink-muted), margin-top: 6px
```

Used in each case study row. Three per case study, displayed in a horizontal row with `gap-12` between them.

---

### 5.5 `Divider.tsx`

A simple `<hr>` styled as:

```css
border: none;
border-top: 1px solid var(--color-border);
margin: 0;
```

Props: `strong?: boolean` — if true, uses `var(--color-border-strong)`.

---

### 5.6 `TextLink.tsx`

Reusable styled anchor. Props: `href: string`, `label: string`, `arrow?: '→' | '↓'`, `external?: boolean`.

```tsx
// Visual spec
// font-family: var(--font-sans)
// font-size: var(--text-body) — 18px
// color: var(--color-accent)
// text-decoration: underline (1px, offset 3px)
// on hover: color: var(--color-accent-light), text-decoration: none
// transition: color 0.2s ease
// if external=true: add target="_blank" rel="noopener noreferrer"
```

---

### 5.7 `Footer.tsx`

Single line footer. `padding: 32px 0`. `border-top: 1px solid var(--color-border)`.

Content: Left side — agency name in mono, `font-size: 13px`, `color: var(--color-ink-muted)`. Right side — `© 2026 · Built by hand.` in mono, same style.

No links, no social icons, no "back to top" button.

---

## 6. PAGE SECTIONS — DETAILED

### 6.1 HERO SECTION

**Section ID:** `#home`

**Height:** `min-height: 92vh` — intentionally not 100vh, leaving a sliver of the services section visible below to invite scrolling.

**Layout:** 12-column grid. Content in columns 1–7. Decorative element in columns 8–12. Vertically centered within the section (use `align-items: center` on the grid, or `margin-top: auto/margin-bottom: auto`).

**Content column (cols 1–7):**

1. A small label above the headline in monospaced font:
   ```
   // "Available for projects — 2026"
   // font-family: var(--font-mono)
   // font-size: 13px
   // color: var(--color-ink-muted)
   // margin-bottom: 24px
   // No border, no badge — just plain text
   ```

2. The `<h1>` headline. Three lines, each on its own `<span>` with `display: block`:
   ```
   Careful software,
   built for real
   problems.
   ```
   ```
   // font-family: var(--font-serif)
   // font-size: var(--text-hero) — clamp(48px, 6vw, 80px)
   // font-weight: 700
   // color: var(--color-accent)
   // line-height: var(--leading-tight) — 1.15
   // margin-bottom: 32px
   ```

3. A single subheadline paragraph:
   ```
   Flutter apps, full-stack systems, and data work —
   for founders and teams who need things done right.
   ```
   ```
   // font-family: var(--font-sans)
   // font-size: 18px
   // color: var(--color-ink-muted)
   // line-height: var(--leading-normal) — 1.65
   // max-width: 480px
   // margin-bottom: 40px
   ```

4. Two `TextLink` components side by side, `gap-8` apart:
   - `See the work ↓` — href `#work`
   - `Get in touch →` — href `#contact`
   ```
   // display: flex, align-items: center, gap: 32px
   ```

**Decorative column (cols 8–12):**

This is not an image or illustration. It is a typographic/geometric decorative element built entirely in CSS/SVG.

Build this: A 5×8 grid of small square dots, each dot `6px × 6px`, `border-radius: 0` (square), color `var(--color-accent)`, opacity `0.12`. Grid gap: `18px`. The entire dot grid is positioned in the center of its column, slightly offset downward (about 15% from the column top). This looks like graph paper or a mapping grid — subtle, architectural, non-decorative in a loud way.

In front of this dot grid, floating at around 30% from the top of the column, the word **LODESTONE** set vertically (CSS `writing-mode: vertical-rl`, `text-orientation: mixed`) in the serif font, `font-size: 96px`, `font-weight: 700`, `color: var(--color-accent)`, `opacity: 0.06`. It should just barely be readable — a ghost of the name, not a focal point.

The combined effect: an extremely subtle, texture-like decorative element that gives the right side of the hero visual weight without competing with the headline.

**Hero entrance animation (Framer Motion):**
- The label fades in: `opacity: 0 → 1`, `y: 8 → 0`, `duration: 0.5s`, `delay: 0.1s`
- Each headline line staggers in: `opacity: 0 → 1`, `y: 20 → 0`, `duration: 0.7s`, delays of `0.2s`, `0.35s`, `0.5s`
- The subheadline: `opacity: 0 → 1`, `y: 12 → 0`, `duration: 0.6s`, `delay: 0.65s`
- The links: `opacity: 0 → 1`, `duration: 0.5s`, `delay: 0.8s`
- The decorative column: `opacity: 0 → 1`, `duration: 1.2s`, `delay: 0.4s`, no Y movement
- Easing for all: `easeOut`

---

### 6.2 SERVICES SECTION

**Section ID:** `#services`

**Section padding:** `py-36` (144px top and bottom)

**Section header (above the three columns):**

A two-line header block:
```
THREE THINGS, DONE WELL.
```
```
// font-family: var(--font-mono)
// font-size: 13px
// color: var(--color-accent)
// letter-spacing: 0.12em
// text-transform: uppercase
// margin-bottom: 64px
// This is NOT a <h2>. It is a <p> styled to look like a magazine section label.
```

Below the label, a thin `<Divider />` component, then `margin-bottom: 64px`.

**The three service columns:**

```
// display: grid
// grid-template-columns: repeat(3, 1fr)
// divide each column with a right border:
//   columns 1 and 2 get: border-right: 1px solid var(--color-border)
//   column 3 gets no right border
// Each column: padding: 0 48px
// First column: padding-left: 0
// Last column: padding-right: 0
```

**Each service column contains (in order):**

1. `<SectionLabel number="01" label="Flutter Development" />` — (numbers are `01`, `02`, `03`)
2. A service `<h2>` headline:
   ```
   // font-family: var(--font-serif)
   // font-size: var(--text-heading) — clamp(22px, 2.5vw, 32px)
   // color: var(--color-accent)
   // font-weight: 700
   // line-height: var(--leading-tight)
   // margin-bottom: 20px
   ```
   See exact copy in Section 9 (Copy & Content).

3. Body paragraph — 2–3 sentences. `font-family: var(--font-sans)`, `font-size: 16px`, `color: var(--color-ink)`, `line-height: var(--leading-loose)`, `margin-bottom: 28px`

4. Technology tags — a flex-wrap row of `<MonoTag />` components, `gap-2`, `flex-wrap: wrap`

**No hover effects on service columns. No lifted card, no background change.** The columns are static. The design relies on typography, not interaction, to communicate quality.

**Scroll reveal animation:**
Each column fades up with staggered delay: `opacity: 0 → 1`, `y: 24 → 0`, `duration: 0.7s`, delays `0s`, `0.15s`, `0.3s`. Trigger when the section enters the viewport (Framer Motion `whileInView`, `once: true`, `margin: "-80px"`).

---

### 6.3 WORK SECTION

**Section ID:** `#work`

**Section padding:** `py-36`

**Section header:**

Large serif `<h2>`:
```
Work that left a mark.
```
```
// font-family: var(--font-serif)
// font-size: var(--text-display) — clamp(32px, 4vw, 52px)
// font-weight: 700
// color: var(--color-accent)
// margin-bottom: 80px
```

**The case study rows:**

There are **three case studies** (see Section 9 for copy). Each is a full-width row in a 12-column grid.

```
// display: grid
// grid-template-columns: repeat(12, 1fr)
// gap-x: 48px
// align-items: start
// padding-bottom: 80px
// margin-bottom: 80px
// border-bottom: 1px solid var(--color-border-strong)
// Last case study: no border-bottom
```

**Left meta block (cols 1–4):**
```
// position: sticky — top: 100px (stays in view as you scroll the right content)
// Only sticky on desktop (≥1024px)
```

Contains:
1. `<SectionLabel />` with company name as label (e.g., `"01 / Hyperlab Sportech"`)
2. Project name in serif:
   ```
   // font-family: var(--font-serif)
   // font-size: 22px
   // font-weight: 700
   // color: var(--color-accent)
   // margin-bottom: 8px
   ```
3. One-line descriptor in sans muted:
   ```
   // font-family: var(--font-sans)
   // font-size: 15px
   // color: var(--color-ink-muted)
   // margin-bottom: 24px
   ```
4. The metric callouts row — three `<MetricCallout />` components stacked vertically (not horizontal in the meta column) with `gap-6` between them.

**Right content block (cols 5–12):**

Contains 3–4 short paragraphs of prose describing:
- What was the problem / context
- What was built
- What happened as a result

```
// font-family: var(--font-sans)
// font-size: var(--text-body) — 18px
// color: var(--color-ink)
// line-height: var(--leading-loose)
// Each paragraph has margin-bottom: 20px
```

If the project is linkable (Hyperlab, Medkart), the company name in the SectionLabel becomes an `<a>` tag linking to the company website. `color: var(--color-ink-muted)`, underlined, `target="_blank"`.

**Scroll reveal per case study:**
Each case study row (`motion.div`) fades in: `opacity: 0 → 1`, `y: 32 → 0`, `duration: 0.8s`, `once: true`.

---

### 6.4 ABOUT SECTION

**Section ID:** `#about`

**Background:** `var(--color-bg-subtle)` — the slightly darker cream. This creates a visual "room change" without using a different color family. Add `border-top: 1px solid var(--color-border)` and `border-bottom: 1px solid var(--color-border)`.

**Section padding:** `py-36`

**Layout:** 12-column grid.

**Left text block (cols 1–7):**

A small monospaced label above everything:
```
// "About"
// font-family: var(--font-mono)
// font-size: 13px
// letter-spacing: 0.1em
// text-transform: uppercase
// color: var(--color-ink-muted)
// margin-bottom: 32px
```

Then a `<h2>` that acts as a pull-quote style opener:
```
I build things carefully.
```
```
// font-family: var(--font-serif)
// font-size: var(--text-display)
// color: var(--color-accent)
// font-weight: 700
// line-height: 1.2
// margin-bottom: 40px
```

Then two body paragraphs. See Section 9 for exact copy. Font rules: `var(--font-sans)`, 18px, `var(--color-ink)`, `line-height: var(--leading-loose)`, `margin-bottom: 24px`.

**Right aside (cols 9–12):**

A vertical block acting as marginalia. Three small pieces of information stacked:

1. **Currently available block:**
   ```
   AVAILABILITY
   // font-family: var(--font-mono), 11px, uppercase, tracked, var(--color-ink-muted)
   
   Open to new projects
   // font-family: var(--font-sans), 15px, var(--color-ink)
   ```

2. A thin divider.

3. **Stack block:**
   ```
   STACK
   // font-family: var(--font-mono), 11px, uppercase, tracked, var(--color-ink-muted)
   
   // Then list each technology on its own line:
   // Next.js · Supabase · FastAPI
   // Flutter · Node.js · PostgreSQL
   // Python · Lua · Tailwind
   // font-family: var(--font-mono), 13px, var(--color-ink), line-height: 2
   ```

4. A thin divider.

5. **Based in block:**
   ```
   BASED IN
   // font-family: var(--font-mono), 11px, uppercase, tracked, var(--color-ink-muted)
   
   Ahmedabad, India
   // font-family: var(--font-sans), 15px, var(--color-ink)
   ```

This aside is the "technical marginalia in a notebook" element. It should feel like a handwritten note in the margin of a book — it supplements but doesn't interrupt.

**Photo (optional):**
If adding a photo, place it below the two body paragraphs in the left block. Style: `width: 100%`, `max-width: 320px`, `aspect-ratio: 3/4`, `object-fit: cover`, `filter: grayscale(20%)`, `border: 1px solid var(--color-border)`. No border-radius.

---

### 6.5 CONTACT SECTION

**Section ID:** `#contact`

**Section padding:** `py-36`

**Layout:** Single centered column. `max-width: 640px`, `margin: 0 auto`, `text-align: left` (not centered).

**Content (top to bottom):**

1. A monospaced label:
   ```
   CONTACT
   // font-family: var(--font-mono), 13px, uppercase, tracked, var(--color-ink-muted), margin-bottom: 24px
   ```

2. A large serif `<h2>`:
   ```
   Let's make something.
   ```
   ```
   // font-family: var(--font-serif)
   // font-size: var(--text-display)
   // color: var(--color-accent)
   // font-weight: 700
   // margin-bottom: 24px
   ```

3. A body paragraph:
   ```
   For project inquiries, collaborations, or a good conversation
   about something you're building.
   ```
   ```
   // font-family: var(--font-sans), 18px, var(--color-ink-muted), line-height: var(--leading-loose), margin-bottom: 48px
   ```

4. A thin `<Divider />`, `margin-bottom: 48px`.

5. Two contact links, stacked vertically, `gap: 24px`:

   **Email link:**
   ```
   → dev@youremail.com
   // <a href="mailto:dev@youremail.com">
   // font-family: var(--font-serif)
   // font-size: 24px
   // color: var(--color-accent)
   // text-decoration: underline (1px, offset 4px)
   // on hover: text-decoration: none, color: var(--color-accent-light)
   // transition: 0.2s
   ```

   **LinkedIn link:**
   ```
   → linkedin.com/in/devbachani
   // <a href="https://linkedin.com/in/devbachani" target="_blank" rel="noopener noreferrer">
   // Same styling as email link
   ```

6. Below the links, `margin-top: 64px`, a small note in mono:
   ```
   Usually responds within 24 hours.
   // font-family: var(--font-mono), 13px, var(--color-ink-muted)
   ```

**No form. No form. No form.** Under no circumstances add a contact form.

---

## 7. ANIMATIONS & INTERACTIONS

### 7.1 Philosophy
Less is more. There is one dramatic animation (the hero entrance). Everything else is a subtle, dignified reveal. No element should call attention to its own animation.

### 7.2 Hero Entrance
Described in detail in Section 6.1. This is the only "designed" animation sequence on the page. All others are simple fade-ups.

### 7.3 Scroll Reveal (All Sections Except Hero)
Wrap each section's main content block in a `motion.div`:
```tsx
<motion.div
  initial={{ opacity: 0, y: 28 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
```
Stagger child elements only in the Services section (three columns). Elsewhere, the whole block reveals as one unit.

### 7.4 Link Hover States
- Navigation links: `color` transition `0.2s`
- Contact links: `text-decoration` and `color` transition `0.2s`
- No scale transforms, no underline animations, no sliding effects

### 7.5 Navbar Scroll Behavior
Use `useScroll` from Framer Motion or a simple `useEffect` + `window.addEventListener('scroll')` to detect scroll > 80px. When scrolled: add `border-bottom` and `backdrop-filter: blur(8px)` with `background: rgba(245, 242, 236, 0.92)`. This is the only blur effect on the site.

### 7.6 No Cursor Effects
No custom cursor. No magnetic buttons. No follower. Standard browser cursor throughout.

### 7.7 No Parallax
No parallax scrolling on any element.

### 7.8 No Page Transitions
This is a single-page site. No route transitions needed.

---

## 8. RESPONSIVE BEHAVIOR

### 8.1 Breakpoints (Tailwind defaults)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### 8.2 Hero Section
- **Desktop (lg+):** 12-column split as described. Both content and decorative column visible.
- **Tablet (md–lg):** Content column takes 9 of 12 columns. Decorative column collapses to 3 cols, dot grid shrinks.
- **Mobile (< md):** Single column. Decorative element hidden completely (`hidden md:block`). Headline scales down via `clamp`. Subheadline goes full width.

### 8.3 Services Section
- **Desktop:** 3 columns with vertical borders.
- **Mobile (< lg):** Stack vertically. Replace vertical border-right with horizontal `border-bottom: 1px solid var(--color-border)` between each service. Each service gets `padding: 40px 0`.

### 8.4 Work Section
- **Desktop:** 12-column grid with sticky meta column.
- **Tablet (md–lg):** Meta column takes 5 cols, content takes 7 cols. Sticky disabled.
- **Mobile:** Stack vertically. Meta block (label, project name, descriptor, metrics) comes first. Content paragraphs follow. Metric callouts displayed in a 3-column grid row instead of stacked.

### 8.5 About Section
- **Desktop:** 12-column split as described.
- **Mobile:** Stack vertically. Text block first, full width. Aside block below, styled as a simple bordered box (`border: 1px solid var(--color-border)`, `padding: 24px`).

### 8.6 Contact Section
- **All sizes:** Single centered column already. On mobile, `max-width: 100%`. Font size of contact links scales down to `20px` on mobile.

### 8.7 Typography Scaling
All headline sizes use `clamp()` already (defined in the type scale), so they scale fluidly. No separate mobile type overrides needed except where noted.

### 8.8 Navigation Mobile
Described in Section 5.1.

---

## 9. COPY & CONTENT

> **Note:** Replace all bracketed placeholders with actual information. Metric numbers are verified from the project files.

---

### 9.1 Navigation
```
Lodestone
Work  |  Services  |  About  |  Contact
```

---

### 9.2 Hero
```
Label:      Available for projects — 2026

Headline:   Careful software,
            built for real
            problems.

Subhead:    Flutter apps, full-stack systems, and data work —
            for founders and teams who need things done right.

Links:      See the work ↓    Get in touch →
```

---

### 9.3 Services

**Service 01 — Flutter Development**
```
Label:    01 / Flutter Development
Heading:  Apps that feel as good as they work.
Body:     I build Flutter applications end-to-end — from architecture and
          state management to integrations and the small interactions that
          make people actually enjoy using an app. Production-ready,
          maintainable, and built to grow.
Tags:     Flutter  ·  Dart  ·  BLE  ·  REST APIs  ·  Deep Links
```

**Service 02 — Full-Stack Web**
```
Label:    02 / Full-Stack Web
Heading:  Systems with real structure underneath.
Body:     Full-stack development across the entire stack — Next.js frontends,
          FastAPI or Node.js backends, Supabase or PostgreSQL databases.
          Clean architecture, proper auth, and code that the next developer
          won't resent inheriting.
Tags:     Next.js  ·  FastAPI  ·  Node.js  ·  Supabase  ·  PostgreSQL  ·  Keycloak
```

**Service 03 — Data Analysis**
```
Label:    03 / Data Analysis
Heading:  The kind of data work that changes decisions.
Body:     Exploratory analysis, dashboards, and structured data pipelines.
          Not automated charts — considered work that starts with the
          right questions and ends with something you can actually act on.
Tags:     Python  ·  SQL  ·  PostgreSQL  ·  Dashboards  ·  Data Pipelines
```

---

### 9.4 Work — Case Studies

**Case Study 01 — Hyperlab Sportech**
```
Label:      01 / Hyperlab Sportech
Project:    Burnhouse Competition Platform
Descriptor: Real-time fitness competition system

Metrics:
  55%     faster exercise detection (Mountain Climb algorithm)
  35      exercise algorithms written from scratch
  4       sensors integrated (2 LiDAR + 2 force)

Prose:
  Hyperlab builds hardware-software fitness products. The core hardware —
  an exercise mat equipped with LiDAR and force sensors — needed intelligent
  software to detect, validate, and track physical exercises in real time.

  I designed 35 exercise detection algorithms from scratch in Lua, working
  directly with sensor data from four inputs. The first month was a steep
  learning curve — Lua was new, hardware-level programming was new, and the
  algorithms were catching things they shouldn't have. By the end of that
  month, the system was strict enough that exercises could only register
  when actually performed correctly.

  On top of the algorithm work, I built Burnhouse: a competition platform
  where multiple participants connect their BLE-enabled mats and compete
  in timed fitness challenges. Every single repetition — one push-up, one
  sit-up — triggers a BLE signal that flows through the phone to a Supabase
  backend, broadcasting to a live leaderboard in real time. I also implemented
  a Lua-based RFID UI flow across two separate devices, managing user identity
  and exercise progression without requiring a second card scan.
```

**Case Study 02 — ZYMR**
```
Label:      02 / ZYMR
Project:    Zoey — Agentic AI Backend
Descriptor: Backend prototype for a cyclic agent orchestration platform

Metrics:
  0       existing tools could fulfill the looping requirement
  2       auth layers implemented (Keycloak + RBAC)
  1       research phase that changed the build direction entirely

Prose:
  ZYMR was building Zoey — an agentic AI platform with one critical difference
  from tools like Langflow: it needed to support directed cyclic graphs, meaning
  agents could loop back and have genuine back-and-forth conversations rather
  than flowing through a fixed DAG.

  Before writing a line of implementation code, I spent two weeks deeply
  researching Langflow, Flowise, and every adjacent tool in the ecosystem to
  determine whether any could be extended or forked to support looping. The
  conclusion was clear: nothing in the existing landscape could do this at
  the architectural level required. A custom build was necessary.

  I then built the FastAPI backend prototype: layered architecture, dependency
  injection, JWT-based authentication through Keycloak integration, and
  role-based access control protecting every route. The prototype wasn't
  feature-complete — it was the right foundation, which is what the project
  actually needed at that stage.
```

**Case Study 03 — Medkart Pharmacy**
```
Label:      03 / Medkart Pharmacy
Project:    Mobile App Revamp
Descriptor: Consumer e-commerce app for a pharmacy chain with 50,000+ users

Metrics:
  30%     reduction in customer support response time
  28%     decrease in bounce rate across revamped screens
  12      weeks to revamp 9 core screens

Prose:
  Medkart is a pharmacy chain where the mobile app is the primary interface
  between the business and its customers. The app needed a full revamp —
  new screens, new UX patterns, and a suite of features that had been
  deprioritized.

  I joined as a Flutter intern with no prior mobile development experience.
  Within the first month, I learned the framework and the codebase. Over
  the following twelve weeks, I revamped nine core screens — order page,
  cart, search, filter system — and built the Contact Us module end-to-end
  across every layer of the Flutter architecture.

  Two smaller features had disproportionate impact. Skeleton loaders across
  twelve screens reduced perceived load time enough to meaningfully decrease
  bounce rates. Flutter intents reduced a four-step phone-dialing workflow
  for store owners to a single tap — a 75% reduction in user actions for
  something they did dozens of times a day.
```

---

### 9.5 About
```
Label:    About

Heading:  I build things carefully.

Para 1:   Three companies in one year — a pharmacy startup, an AI orchestration
          project, and a hardware-software fitness product. The range was partly
          circumstance and partly deliberate. I wanted to understand what good
          engineering looks like in very different contexts, under very different
          constraints.

Para 2:   I'm a backend engineer by instinct. I like the layer where decisions
          about structure actually matter — API design, data modeling, auth,
          the things that are hard to change later. I've spent enough time
          across the stack to hold my own on the frontend, and I'm increasingly
          drawn to what data has to say when you ask it the right questions.

Aside — Availability:  Open to new projects
Aside — Stack:         Next.js · Supabase · FastAPI
                       Flutter · Node.js · PostgreSQL
                       Python · Lua · Tailwind
Aside — Based in:      Ahmedabad, India
```

---

### 9.6 Contact
```
Label:    Contact
Heading:  Let's make something.
Body:     For project inquiries, collaborations, or a good conversation
          about something you're building.

Link 1:   → dev@youremail.com
Link 2:   → linkedin.com/in/devbachani

Note:     Usually responds within 24 hours.
```

---

### 9.7 Footer
```
Left:   Lodestone
Right:  © 2026 · Built by hand.
```

---

## 10. PERFORMANCE & SEO

### 10.1 Metadata (`app/layout.tsx`)
```tsx
export const metadata: Metadata = {
  title: 'Lodestone — Software Development & Data',
  description:
    'Freelance software development by Dev Bachani. Flutter apps, full-stack web systems, and data analysis for founders and small teams.',
  keywords: ['Flutter developer', 'full-stack developer', 'Next.js', 'FastAPI', 'freelance'],
  openGraph: {
    title: 'Lodestone — Careful software, built for real problems.',
    description: 'Flutter apps, full-stack systems, and data work by Dev Bachani.',
    type: 'website',
  },
}
```

### 10.2 Font Loading
Use `display: 'swap'` on all fonts (already specified in Section 2). This prevents font-blocking render.

### 10.3 Images
If a photo is added, use `next/image` with explicit `width` and `height`. Add `priority` prop if the image is above the fold (it won't be — the hero has no image, so no `priority` needed).

### 10.4 Static Export
This site has no dynamic data. Consider adding `output: 'export'` to `next.config.js` for static hosting on Vercel or Netlify:
```js
// next.config.js
const nextConfig = {
  output: 'export',
}
```

### 10.5 Accessibility
- All links have descriptive text (no "click here")
- `<main>` wraps all page sections
- `<nav>` wraps the navigation
- Each section has a descriptive `aria-label` if the heading isn't immediately obvious
- Color contrast: `var(--color-accent)` on `var(--color-bg)` — verify contrast ratio ≥ 4.5:1 (forest green `#1a3a2a` on cream `#f5f2ec` passes easily)
- Navigation anchor links use `scroll-behavior: smooth` via CSS

---

## 11. THINGS TO EXPLICITLY AVOID

These are absolute. Do not add any of these no matter how reasonable they seem in the moment:

| ❌ Do not add | Why |
|---|---|
| Contact form | Deliberate decision — email link only |
| Testimonials section | Not needed, not available |
| Social media icons | LinkedIn link in contact section is sufficient |
| "Hire Me" button in nav | Too eager, wrong tone |
| Looping video or background video | Distracting, off-tone |
| Gradient backgrounds | Breaks the cream/forest palette |
| Purple, blue, or any color outside the palette | Off-brand |
| Rounded corners on any bordered element | All corners square |
| Drop shadows on cards | Flat design throughout |
| Hover "lift" effects on service columns | Static, dignified |
| Emoji anywhere | None |
| Scroll-triggered counter animations | Cheap, overused |
| Confetti, particles, canvas effects | Off-tone |
| "Trusted by" logos | Not applicable |
| Loading screen or preloader | None needed |
| Dark mode toggle | Single palette only |
| Cookie banner | Not needed unless deploying analytics |
| Chatbot widget | None |
| Skill bars (the percentage bar things) | Lazy design pattern |
| Grid of social media post thumbnails | None |
| Stock illustrations (Undraw, Storyset, etc.) | No illustrations at all |
| Typing / typewriter animation | Overused |
| "Currently playing" music widget | Off-tone |
| Back-to-top button | Let the browser handle it |

---

## 12. CHECKLIST BEFORE SHIP

### Visual
- [ ] Page background is never pure white anywhere
- [ ] No pure black text anywhere
- [ ] Forest green only appears on headlines, logo, labels, link hovers
- [ ] All bordered elements have no border-radius
- [ ] No drop shadows anywhere on the page
- [ ] Hero decorative element is visible but subtle (not distracting)
- [ ] Serif font loads correctly and renders in headlines
- [ ] Mono font renders correctly in tags and metric numbers
- [ ] Section dividers are visible but not heavy

### Layout
- [ ] Hero is min-height 92vh — a sliver of the next section is visible
- [ ] Services section: three columns with dividers, first col flush left, last col flush right
- [ ] Case study meta column is sticky on desktop
- [ ] About section has the slightly darker background
- [ ] Contact section is single centered column, left-aligned text

### Content
- [ ] Real email address is in the contact section (not placeholder)
- [ ] Real LinkedIn URL is correct
- [ ] All metric numbers match the ones in this spec (verified from project history)
- [ ] No placeholder Lorem Ipsum text anywhere
- [ ] All technology tags are accurate

### Interaction
- [ ] Smooth scroll works for all nav links
- [ ] Email link opens mailto correctly
- [ ] LinkedIn link opens in new tab
- [ ] Mobile menu opens and closes correctly
- [ ] Navbar background transition works on scroll (transparent → cream with border)

### Performance
- [ ] Fonts loaded with `next/font/google`, `display: 'swap'`
- [ ] No layout shift from font loading
- [ ] Framer Motion is only imported in client components (`'use client'`)
- [ ] No unused dependencies in `package.json`

### Responsive
- [ ] Hero decorative element hidden on mobile
- [ ] Services stacks vertically on mobile with horizontal dividers
- [ ] Case study meta block unsticks and stacks on mobile
- [ ] About aside renders as a bordered box on mobile
- [ ] Navigation collapses to mobile menu below 768px
- [ ] All text remains readable at 375px width

---

*End of spec. Hand this file to Cursor with the instruction: "Build this website exactly as described in WEBSITE_SPEC.md. Start with the design system and global components, then build each section. Ask me before making any decisions not covered in the spec."*
