# Ten80Ten — Marketing Website (v3)

A fast, responsive, animated marketing site for **Ten80Ten** (*Systems + Specialists*).
Static HTML with a **shared design system** — no build step, no framework, no JS dependencies.

> Visual direction: editorial monochrome (`#0e0e0e / #171717 / #f5f5f5 / #e8e8e8` banding, lime
> `#D2FF37` accent), Sora display type + Geist body + IBM Plex Mono labels, hairline grid overlays
> with plus-markers on every section, pill buttons with slide-flip hover, char-stagger heading
> reveals, count-up stats, marquee ticker, and a fixed mix-blend header that inverts over dark bands.
> All copy is original, built from the Ten80Ten Marketing Bible around the 10/80/10 method.

## Run locally

```
npx -y serve -l 4321 .
```

(or use the `ten80ten` config in `.claude/launch.json`)

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — 15-section flagship (hero → services → stats → 10/80/10 path → case → team → pricing → FAQ → CTA) |
| `about.html` | Mission, stats, team, method, timeline |
| `case-studies.html` + `case-*.html` (×5) | Case study index + healthcare, real-estate, call-center, social-engine, BCJ Learn details (real project copy) |
| `blog.html` + `blog-*.html` (×4) | Article index + four original articles |
| `careers.html` | Roles, perks, hiring process |
| `contact.html` | Form (mailto fallback) + booking CTA |
| `legal-privacy.html`, `legal-terms.html` | Plain-English legal templates (attorney review flagged) |
| `services.html`, `pricing.html` | Redirect stubs preserving old URLs → `index.html#path` / `#pricing` |

## Architecture

```
assets/css/main.css      design tokens + shared components (header, menu, buttons,
                         grid overlay, ticker, FAQ, forms, footer, reveal states)
assets/css/<page>.css    page-specific section styles
assets/js/main.js        engine: smooth scroll, char/word split reveals,
                         IntersectionObserver, count-ups, bars, menu overlay,
                         accordion, pricing toggle, hover thumbnails, mailto forms
assets/img/photos/       brand photo library
assets/img/tool-logos/   integration logo ticker assets
docs/COPY_DECK.md        final site copy, all pages
docs/FRAMER_REBUILD_KIT.md  spec to recreate this site 1:1 in Framer
docs/research/           design tokens, page topology, behaviors, DOM extraction
docs/design-references/  reference screenshots (desktop/mobile + slices)
```

Animations respect `prefers-reduced-motion`. Breakpoints: 1200 / 810 (desktop / tablet / phone).
