# Behaviors — animation & interaction spec (extracted from template DOM)

All implemented in `assets/js/main.js` via `data-anim` attributes + IntersectionObserver. Respect `prefers-reduced-motion: reduce` (disable transforms, show final state).

## Global
- **Smooth scroll**: lerp-based smooth scroll wrapper (Lenis-style, factor ~0.1). Native fallback on touch devices.
- **Fixed header**: 60px, `mix-blend-mode: difference`, all header content solid white. No scroll-state change.
- **Menu**: "Menu" wordmark + plus icon (top-right). Hover: letters flip (each char duplicated vertically, translateY swap, stagger 20ms). Click: full-screen overlay menu (dark), links stagger-in, plus icon rotates 45° → close.
- **Floating call pill** (bottom right, appears after ~600px scroll): rounded pill, avatar photo + "A 20-minute call…" text + dark circular arrow button → contact.html. Hidden on phone.

## Reveal primitives (IntersectionObserver threshold ~0.25, once)
| name | initial | final | timing |
|---|---|---|---|
| `chars` | each char `opacity:0; translateY(30px)` | `opacity:1; translateY(0)` | 500ms cubic-bezier(.22,1,.36,1), stagger 14ms |
| `words` | word `opacity:0; translateY(24px)` | reset | 600ms, stagger 40ms |
| `rise` | `opacity:0; translateY(40px)` | reset | 700ms ease-out-quint |
| `rise-lg` | `translateY(250px)` (hero H1, inside overflow:clip wrap) | 0 | 900ms ease-out-quint |
| `fade` | `opacity:0` | 1 | 600ms |
| `zoom` | image `scale(1.4)` inside clip | `scale(1)` | 1100ms ease-out-quint |
| `count` | text 0 | count to `data-to` (supports ×, %, +, h) | 1400ms ease-out, starts on enter |
| `bar` | width 0 | width `data-to`% | 1200ms ease-out-quint |
| `stagger` | children rise sequentially | | delay 80ms per child |

## Component behaviors
- **Ticker** (client/tool logos): CSS `@keyframes marquee` translateX(-50%), duration ~28s linear infinite; track duplicated 2×; pause on hover.
- **Buttons (pill)**: text duplicated; on hover current text slides up out, duplicate slides in from below (250ms). Arrow-circle buttons: arrow slides diagonally, duplicate enters from opposite corner.
- **Service cards**: hover — image container expands (grid-template-rows / max-height 0→1fr, 500ms), card bg subtly lightens.
- **Advantage rows**: hover/active — row expands revealing body text, number chip inverts.
- **Case rows (More projects)**: hover — floating thumbnail follows cursor (fixed div, translate to cursor, scale 0.9→1, opacity 0→1).
- **Team cards**: hover — grayscale portrait reveals (opacity/height), name arrow slides.
- **FAQ accordion**: click — max-height transition 400ms; plus rotates 45°; only one open.
- **Pricing toggle**: Monthly/Annual — knob slides, prices swap with 200ms fade; "Save 10%" chip on annual side.
- **Stats**: count-up when visible (see `count`).
- **Delay bars**: fill animates to target % with percentage chip riding the edge.
- **Video card**: static poster + play circle (pulse on hover). Links to nothing/modal optional — ship static.
- **Newsletter input**: underline focus state; submit → mailto fallback.

## Scroll choreography per section (entrance order)
1. Section label pill `fade` → 2. H2 `chars` → 3. body copy `words`/`rise` (delay 150ms) → 4. cards `stagger`.
Hero on load (no scroll needed): avatars `rise` 100ms → H1 `rise-lg` 200ms → svg-line + desc `chars` 500ms → buttons `rise` 700ms → ticker `fade` 900ms; bg images `zoom` immediately.
