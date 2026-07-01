# Reynald Arro — Portfolio (Next.js)

Converted from the original static HTML/CSS/JS site into a Next.js 14 (App Router) project,
with a `/pricing` route added and sharing the same design system.

## What's ported 1:1

- Design tokens (colors, fonts: Syne / Inter / JetBrains Mono)
- Palette-shift mechanic — hovering a project card (or switching a pricing tab) morphs the
  background glow + accent color across the whole page (`context/PaletteContext.jsx`), plus a
  radial ripple burst on every palette change
- Scroll-reveal animations (IntersectionObserver) for project cards, section eyebrows, about
  section, skill pills, and pricing cards (`lib/useReveal.js`)
- Hero entrance sequence (staggered tag → headline lines → description → chips → actions →
  stat cards) and the count-up number animation
- Custom cursor (dot + trailing ring, hover-state grow) — `components/CustomCursor.jsx`
- Subtle particle field + grid-line background — `components/ParticleCanvas.jsx`,
  `components/GridBackground.jsx`
- Side scroll-position dots that track the active section — `components/SideDots.jsx`
- Page-load overlay, floating/shimmer hero stat cards, avatar pop-in, nav underline draw,
  blinking cursor on the hero tag, giant faint project numbers on card hover
- Real project screenshots in `public/images/` (926 Snacks, 926 Snacks CRM, NZFA Hub, EMS Pro,
  Wirely), wired into `components/ProjectCard.jsx`

## What was simplified

- The animated spinning gradient border on hovered cards — a nice-to-have that added real CSS
  complexity for a very small visual delta. Everything else from the original site is intact.

Everything else — layout, copy, palette system, hover states, entrance choreography — is intact.

## Still needs your input

- `mailto:reynald@example.com` appears in `app/page.jsx` and `app/pricing/page.jsx` — replace
  with your real email
- `https://github.com/reynaldarrow` in `app/page.jsx` — replace with your real GitHub if different
- Pricing numbers in `app/pricing/page.jsx` (`TRACKS` object) are starting estimates — edit to
  your real rates

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` for the portfolio and `http://localhost:3000/pricing` for rates.

## Deploying

### Option A — push to GitHub, then import in Vercel
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
Then go to [vercel.com/new](https://vercel.com/new), import the repo, and deploy — Next.js is
auto-detected, no config needed.

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel
```

## Project structure

```
app/
  layout.js          – fonts, palette provider, nav, background, scroll progress
  globals.css         – all design tokens + component styles
  page.jsx            – homepage (hero, projects, about, contact, footer)
  pricing/page.jsx     – rates page
components/
  Nav.jsx
  BackgroundLayer.jsx
  ScrollProgress.jsx
  ProjectCard.jsx
context/
  PaletteContext.jsx   – the palette-shift mechanic, shared across both pages
lib/
  data.js              – projects, palettes, skills, pricing currency rates
  useReveal.js         – scroll-reveal + count-up hooks
```
