# WEBSITE BUILD SPEC
## Agency Site: Plinth
### Version 2.0 | Gumroad Neo-Brutalism Reference

---

## TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Setup](#2-tech-stack--setup)
3. [Design System](#3-design-system)
4. [Page Sections - Detailed](#4-page-sections--detailed)
5. [Copy & Content](#5-copy--content)

---

## 1. PROJECT OVERVIEW

**Agency name:** Plinth

**Tagline:** Software built to scale.

**What this site is:** A single-page agency website for a development team. It offers three services: Flutter app development, full-stack web development, and data systems. It is styled heavily using Gumroad's Neo-Brutalist design tokens (stark borders, primary pastels, heavy box shadows, massive fonts).

**Tone:** Bold. Loud. Confidence through structure.

**Target viewer:** Founders, product leads, and technical decision-makers who want robust engineering and value modern, distinct design.

**Contact channels:** Email (`hello@plinth.agency`) and GitHub (`github.com/plinth`). 

**Page type:** Single-page application with smooth scroll navigation. 

---

## 2. TECH STACK & SETUP

### Framework
- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4** 
- **Framer Motion** for scroll-triggered reveals and the hero entrance

### Fonts
Load via `next/font/google`:
- **Geist Sans**: Main font replacing Mabry Pro. `variable: '--font-geist-sans'`. No serifs.

---

## 3. DESIGN SYSTEM

### 3.1 Color Palette

Defined in `app/globals.css`:
- **Pink:** `#FF90E8` (Accents, hero shapes, callouts)
- **Yellow:** `#F6D800` (Backgrounds, primary buttons, highlights)
- **Teal:** `#23A094` (CTAs, secondary backgrounds)
- **Blue:** `#7BA4DB` (Accent shapes)
- **Black:** `#000` (All text, borders, shadows)
- **White:** `#FFF` (Card backgrounds)
- **Off-white:** `#F9F9F9` (Main page background)

### 3.2 Typography Scale
- Massive hero text up to `96px` (`clamp(64px, 8vw, 96px)`).
- Headers (`h2`) are `clamp(48px, 6vw, 72px)`.
- All text is `font-black` or `font-bold` to maintain the heavy tech aesthetic. 

### 3.3 Core Neo-Brutalist Rules
1. **Borders:** Almost every distinct element (buttons, cards, tags, the navbar) must have a `border-2 border-black` or `border-4 border-black`.
2. **Shadows:** Hard shadows using offset boxes (`box-shadow: 4px 4px 0px 0px rgba(0,0,0,1)`). No soft or blurred shadows.
3. **Pill Shapes:** Tags, category labels, buttons, and CTAs must be heavily rounded (`rounded-full`).
4. **Cards:** Major sections or content blocks should look like distinct physical cards floating on the page with `rounded-3xl` or `rounded-[2rem]`.

---

## 4. PAGE SECTIONS - DETAILED

### 4.1 NAV BAR
- Desktop: `80px` tall, `border-b-2 border-black`. Bold lowercase logo `plinth` on left. Links and pill-shaped "Contact Us" CTA on right.
- Mobile: Full screen pink overlay with giant `48px` links.

### 4.2 HERO (`#home`)
- Massive center-aligned text. 
- Floating decorative shapes: Pink circle 'P', Teal square 'L', Yellow triangle, Blue circle 'H', all with thick black borders. 
- Two giant pill CTAs ("See our work", "Get in touch") in Yellow and White.

### 4.3 SERVICES (`#services`)
- Three distinct bordered colored cards (Pink, Yellow, Teal) placed in a grid.
- Hover states un-translate the cards upward and extend the hard shadow.

### 4.4 WORK (`#work`)
- Split-card design. Meta block on left (yellow background, angled metric callouts). Content and description on the right (white background, teal GitHub CTA).

### 4.5 ABOUT (`#about`)
- Split block inside a larger container card. Left side text. Right side "marginalia" (Availability, Stack, Base) inside distinct boxes.

### 4.6 CONTACT (`#contact`)
- Massive Pink section containing a White floating card. Large Teal pill-shaped CTAs.

### 4.7 FOOTER
- `bg-black text-white`. Thick teal accent bar at the top. 

---

## 5. COPY & CONTENT

*(See `lib/data.ts` for full implementation)*

Key differences from v1:
- Tone shifted from "I" to "We" (Agency model).
- Added `DSA Progress Tracker` (Next.js, TS, Node, PostgreSQL, Prisma) case study.
- Added `E-Commerce Website` (Node.js, Express, React, PostgreSQL) case study.

---
*End of spec.*
