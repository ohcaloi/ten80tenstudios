# Effica → Ten80Ten Design Tokens (extracted from live template)

## Colors (exact, from Framer tokens)
| Token | Value | Usage |
|---|---|---|
| `--c-white` | `#ffffff` | white surfaces, hero bg |
| `--c-light` | `#f5f5f5` | light band bg, light pill/button bg, dot/label on dark |
| `--c-mist` | `#e8e8e8` | `<body>` background, mid-gray band bg (News, Get-in-touch), ghost button bg |
| `--c-ink` | `#171717` | primary dark: dark section bg, dark buttons, text on light |
| `--c-black` | `#0e0e0e` | darkest bands (Newsletter, footer), phone pricing card bg |
| `--c-coal` | `#222222` | pre-footer CTA card bg |
| `--c-panel` | `#f1f1f1` | card inner panel bg (light) |
| `--c-ink-60` | `#17171799` | 60% ink — muted labels |
| `--c-light-60` | `#f5f5f599` | 60% light — muted text on dark |
| `--c-line-dark` | `rgba(0,0,0,0.07)` | grid hairlines on light |
| `--c-line-light` | `rgba(255,255,255,0.07)` | grid hairlines on dark |
| `--c-accent` | `#D2FF37` | lime accent (rare: highlights, toggle gradient) |
| gray chip | `#cdcdcd` | skeleton/ellipse placeholder fills |

Body default bg: `#e8e8e8`. Sections alternate: white → `#171717` → light `#f5f5f5` → `#0e0e0e` → `#e8e8e8` → `#222` card → footer `#0e0e0e`.

## Typography
Families (all Google Fonts / open):
- **Sora** — ALL headings, buttons, stats, nav. Weights 400/500/600.
- **Geist** — body copy, descriptions. Weights 400/500.
- **IBM Plex Mono** — small uppercase labels, numbers, timestamps, "01/Who we are" section labels. Weight 400/500.
- Inter — fallback only.

Scale (desktop → mobile):
| Role | Size | Notes |
|---|---|---|
| Hero H1 | fluid ~7.5vw, caps, Sora 600, ls -0.05em, lh 1.0 | `clamp(64px, 7.5vw, 109px)`; mix-blend-mode: difference |
| H2 section | 64px → 38px, Sora 600, ls -0.04em, lh 1.05 | often UPPERCASE with char-stagger reveal |
| H2 small | 44px / 38px | sub-sections |
| H3/card title | 30px / 28px / 24px, Sora 500, ls -0.03em |
| Quote L | 30px Sora 500, ls -0.03em, lh 1.3 | reveal-by-word/char |
| Body | 17–18px Geist 400, lh 1.5, ls -0.02em |
| Body S | 15–16px Geist, ls -0.02em |
| Label mono | 10–14px IBM Plex Mono 500, UPPERCASE, ls 0 to -0.01em |
| Stats giant | 96px / 68px Sora 600 ls -0.05em | count-up from 0 |
| Button | 15–16px Sora 500 |

## Breakpoints (Framer exact)
- Desktop: `min-width: 1200px`
- Tablet: `810px – 1199.98px`
- Phone: `max-width: 809.98px`

## Layout metrics
- Header: `position: fixed; height: 60px; z-index: 9; mix-blend-mode: difference` — logo + "Menu" wordmark render white and invert automatically over light bg. Padding 20px (mobile).
- Hero: `min-height: 100vh; padding: 190px 0 110px` (tablet `170px 0 110px`, phone `140px 0 80px`).
- Section container: full-width sections with inner container `max-width: 1200px; padding: 0 20px` (grid columns baseline). Section vertical padding ≈ `110–140px` desktop, `50px 20px` phone.
- Grid overlay (signature): every section has absolute inset overlay, `z-index: 0`, pointer-events none — 6 columns → 5 interior vertical hairlines 1px (`--c-line-dark` on light / `--c-line-light` on dark) + small "+" markers (two 1px bars, one rotated 90°) at line tops; occasionally a horizontal top line.
- Buttons: pill `border-radius: 50px`; primary dark `#171717` text `#f5f5f5`; secondary white/`#e8e8e8` text `#171717`; hero size `357×70px` desktop (100%×60px stacked on phone); standard size auto×60px, padding 0 28px.
- Cards: `border-radius: 12–16px`, hairline `1px solid rgba(0,0,0,0.07)` or filled `#171717`/`#f5f5f5`.
- Plus icon (+): two bars 12×1px same color, second rotated 90° — used at grid corners, menu button, accordions (rotates 45° when open).

## Logo
Replace Effica wordmark with Ten80Ten: `assets/img/ten80ten-logo.png` (wordmark) + `assets/img/ten80ten-mark.svg` (hourglass mark). In header use white version via mix-blend (logo must be solid white — use CSS `filter: brightness(0) invert(1)` on dark png or an inline white SVG).
