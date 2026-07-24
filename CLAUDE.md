@AGENTS.md

# Mindtree Nursing Solutions — Project Notes

A Next.js (App Router, v16) marketing site for a nursing recruitment/training
consultancy. React 19, Tailwind v4 (via `@tailwindcss/postcss`), plain CSS
modules-per-page (not CSS Modules — just `.css` files imported directly).

## Stack & structure

- `app/layout.tsx` — root layout. Renders `<ScrollAnimations />`, `<Nav />`,
  page content, `<WhatsAppButton />`, `<OffersButton />`, `<Footer />`.
  `<html>` has `data-scroll-behavior="smooth"` (required by Next.js App
  Router when `scroll-behavior: smooth` is set globally — see
  `app/globals.css`).
- `app/globals.css` — global brand tokens (`--font-display-global`,
  `--font-body-global`, heading scale vars), Tailwind import, the global
  `[data-anim]` scroll-animation system, and `prefers-reduced-motion`
  handling.
- Each route folder (`app/<route>/page.js` or nested `page.js`) imports its
  own `<route>.css` file co-located in the same folder. CSS files define a
  `:root` brand-token block (`--c1`–`--c4`, `--white`, `--text-body`,
  `--text-muted`, `--border`, `--ease`, `--radius`, `--shadow-*`) — these are
  duplicated per-page-CSS intentionally (no shared design-token file yet).
- Fonts: **Playfair Display** (headings, serif) + **DM Sans** (body), loaded
  via `@import url(...)` at the top of each page CSS file (and in
  `globals.css`). The root layout's `Geist`/`Geist_Mono` next/font vars are
  unused leftovers from `create-next-app` — do not rely on them for styling.

## Design tokens (per-page CSS, consistent values)

```css
--c1: #E7F0FA;   /* pale blue background */
--c2: #7BA4D0;   /* mid blue accent */
--c3: #2E5E99;   /* primary brand blue */
--c4: #0D2440;   /* deep navy (hero bg, headings) */
--white: #ffffff;
--text-body: #2a3f57;
--text-muted: #5a7a9a;
--border: rgba(123,164,208,0.22);
--ease: 0.4s cubic-bezier(0.4,0,0.2,1);
--ease-bounce: 0.5s cubic-bezier(0.34,1.56,0.64,1);
--radius: 20px;
--shadow-sm / --shadow-md / --shadow-lg
```

H1 sizing: main listing pages use `clamp(36px,6vw,62px)`; sub-pages
(service/course detail pages, blog posts) use `clamp(28px,5vw,52px)`.

## Section backgrounds & the blue dot texture

Content sections alternate full-width backgrounds — **white** and pale-blue
(`--c1` / `#E7F0FA`) — so no two adjacent content sections share a colour. The
navy hero (`--c4`) and blue CTA (`--c3`) are bookend accents. Target a rhythm
like: hero(navy) → intro(white) → pale → white → pale … → CTA(blue).

**Blue dot texture** — every **white** section carries a subtle dotted overlay;
pale-blue (`--c1`), navy, and gradient sections do NOT. Canonical pattern
(site-wide — keep these exact values):

```css
background-image: radial-gradient(rgba(46, 94, 153, 0.055) 1.5px, transparent 1.5px);
background-size: 28px 28px;
```

Apply it one of two ways:
- **Simplest / always renders** — add the two `background-image` +
  `background-size` lines directly to the white section's rule (next to its
  `background-color: var(--white)`). Preferred.
- **Overlay** — a `::before` with `position:absolute; inset:0` + the dots on a
  `position:relative; overflow:hidden` section, and the inner wrapper set to
  `position:relative; z-index:1`.

Do NOT use a full-bleed `::before` with `z-index:-1` — an opaque page/`main`
background paints over it and the dots disappear. White *cards, buttons,
breadcrumbs* stay solid white and sit **on top** of the dots — never dot those.

## Two design families

Most pages use the **blue token system** above (`--c1`–`--c4`, white page bg).
Four service-detail pages — `ahpra`, `visa`, `cv-preparation`,
`flight-ticketing` — use a **separate palette** (`--navy`, `--sky`,
`--gold` [defined but unused], `--off #F7F9FC` page bg, `--sans`/`--serif`) with
`ah/vs/cv/ft` class prefixes, a navy hero, and centred `.xx-section` blocks.
`accommodation-and-transportation` is intentionally left plain (no dots / bands).

On those four navy pages, the alternating bands are done by making `.xx-section`
full-width and centring content via padding
(`padding: 72px max(40px, calc((100% - 1000px) / 2))`), then colouring by
`:nth-of-type` — `.xx-page > section:nth-of-type(even)` = white + dots,
`.xx-section:nth-of-type(odd)` = `#E7F0FA`; the hero (section 1) keeps its navy.

## Animation system

Two layers, both already wired up — reuse them, don't invent new ones:

1. **Scroll-triggered (`data-anim`)** — global, driven by
   `app/components/ScrollAnimations.js` (client component, IntersectionObserver,
   re-runs on route change via `usePathname`). Add to any element:
   - `data-anim="up"` — fade + translateY(32px) → 0
   - `data-anim="from-left"` — fade + translateX(-40px) → 0
   - `data-anim="from-right"` — fade + translateX(40px) → 0
   - `data-anim="scale-up"` — fade + translateY(24px) scale(0.95) → normal
   - `data-anim-delay="<ms>"` — stagger delay (applied via `setTimeout` after
     intersection, not CSS `transition-delay`)

2. **Pure-CSS hero entrance** — each page-specific CSS file defines its own
   `@keyframes [prefix]HeroIn` (fade + translateY(26px), staggered via
   `animation-delay` on badge/title/divider/sub), plus `[prefix]Float1/2`
   keyframes for floating hero shapes and `[prefix]CtaPulse` for the CTA
   background blob. These fire on page load automatically — no `data-anim`
   needed. Follow the existing `[prefix]` naming convention per page (e.g.
   `cgfnsHeroIn`, `iqnFloat1`, `vsHeroIn`).

## Card components (`/courses`, `/services`)

`CourseCard` (`app/courses/page.js`) and `ServiceCard`
(`app/services/page.js`) render the **entire card as a Next `<Link>`**
(`href={href}`) so clicking anywhere navigates — not just "Learn More".
Because of this:
- The "Learn More" element inside is a `<span>`, **not** an `<a>`/`<Link>`
  (nested anchors are invalid HTML/React).
- `.crs-card` / `.svc-card` need `text-decoration: none; color: inherit;`
  since they're now anchor elements.
- Both cards accept an `animDelay` prop → `data-anim="up" data-anim-delay={animDelay}`.

## Services route map (keep in sync with `/services` listing cards)

`app/services/` subfolders: `accommodation-and-transportation`, `ahpra`,
`cgfns`, `cv-preparation`, `flight-ticketing`,
`nursing-registration-in-australia`, `nursing-registration-in-new-zealand`,
`pathway-for-registered-nurses-from-the-uk-and-ireland-to-new-zealand`,
`pathway-for-uk-ireland-nurses-to-australia`, `visa`. The `/services`
listing page (`app/services/page.js`) must link to all of these — when
adding a new service folder, also add its `ServiceCard` entry (with an
accurate `para1`/`tags`/`badge`, not copy-pasted boilerplate).

The nav (`app/components/nav/page.js`) has **two** separate menus — a desktop
hover dropdown and a mobile drawer — each with its own hardcoded link list.
Keep both in sync and make sure every label matches its `href` (a past bug had
the desktop "Pathway…" and "CGFNS" items pointing at the wrong service pages).
`nursing-registration-in-australia` and `pathway-for-uk-ireland-nurses-to-australia`
have folders but are **not** linked from either menu.

## Courses route map

`app/courses/` subfolders: `best-iqn-coaching`,
`best-oet-coaching-centre-in-kerala`, `osce-training-kerala`,
`osce-training-new-zealand`, `therapeutic-communication`. `/courses`
(`app/courses/page.js`) lists 6 `CourseCard`s (Auckland & Christchurch OSCE
both currently link to `osce-training-new-zealand`).

## Conventions when adding/editing pages

- Always co-locate a `<slug>.css` next to `page.js` and import it.
- Reuse the brand token block above rather than inventing new colors.
- Add `data-anim` to scroll sections below the fold; add CSS hero-entrance
  keyframes for the hero block, following the `[prefix]HeroIn/Float/CtaPulse`
  pattern from sibling pages.
- Don't nest `<a>`/`<Link>` elements.
