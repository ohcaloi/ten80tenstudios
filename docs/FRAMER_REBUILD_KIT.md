# Ten80Ten — Framer Rebuild Kit

How to recreate this site 1:1 inside Framer's editor. Two routes:

## Route A (fastest, recommended): Remix the template
The design this site is based on is a published Framer template ("Effica"). If you remix/purchase it inside Framer, you get every animation and breakpoint pre-built — then you only re-skin it:
1. In Framer: open the template's remix/purchase page and add it to your workspace.
2. Replace color styles per the **Color Styles** table below (mostly 1:1 already).
3. Swap the logo with `assets/img/ten80ten-mark.svg` + wordmark text "Ten80Ten®".
4. Replace all text with the copy in `docs/COPY_DECK.md` (final, section-by-section).
5. Replace photos with the files in `assets/img/photos/` per the **Photo Map** below.
6. Publish. Done — typically 1–2 working days.

## Route B: Rebuild from scratch in Framer
Follow the specs below. Sections and animation settings are itemized so a Framer designer can rebuild page-by-page. Use `docs/design-references/` screenshots + the live local site (`npx serve -l 4321 .`) as the working reference.

---

## Color Styles (create these in Framer → Assets → Color Styles)
| Name | Hex | Use |
|---|---|---|
| White | #FFFFFF | hero bg, cards |
| Light | #F5F5F5 | light band bg, pills, text-on-dark |
| Mist | #E8E8E8 | body bg, mid band, ghost buttons |
| Ink | #171717 | dark band bg, buttons, text |
| Black | #0E0E0E | darkest bands, footer |
| Coal | #222222 | pre-footer CTA card |
| Panel | #F1F1F1 | inner chips on light cards |
| Ink 60 | #171717 @60% | muted text on light |
| Light 60 | #F5F5F5 @60% | muted text on dark |
| Hairline dark | #000000 @7% | grid lines on light |
| Hairline light | #FFFFFF @7% | grid lines on dark |
| Accent | #D2FF37 | rare highlights (toggle, footnotes) |

## Text Styles
| Style | Font | Size (D / T / P) | Weight | Tracking | Case |
|---|---|---|---|---|---|
| Hero H1 | Sora | 110 / 76 / 58 | 600 | -5% | UPPER |
| H2 | Sora | 64 / 48 / 38 | 600 | -4% | varies |
| H2 small | Sora | 44 / 38 / 30 | 600 | -4% | — |
| H3 / card | Sora | 30 / 26 / 24 | 500 | -3% | — |
| Quote | Sora | 30 / 26 / 22 | 500 | -3% | — |
| Stat | Sora | 96 / 76 / 56 | 600 | -5% | — |
| Body | Geist | 17–18 | 400 | -2% | — |
| Body S | Geist | 15 | 400 | -2% | — |
| Label | IBM Plex Mono | 12 (10 small) | 500 | 0 | UPPER |
| Button | Sora | 15 | 500 | -2% | — |

## Breakpoints
Desktop ≥1200 · Tablet 810–1199 · Phone ≤809 (Framer defaults match).

## Global elements
- **Header**: fixed, 60px, full-width; set the frame's Blend Mode = **Difference** and make logo + "Menu" pure white. (This is how it auto-inverts over light sections.)
- **Menu overlay**: fullscreen Black frame; links = Sora 600 caps 64px, staggered fade/slide-in (Framer: Appear effect, delay 0.06s increments). Plus icon rotates 45° (variant swap on the header component).
- **Floating pill** (bottom-right, appears after ~500px scroll — Framer: Scroll Variant / appear after scroll): white pill, avatar `photos/person-1.jpg`, text "Free 20-minute Time-Back Audit. No pitch — just a diagnostic.", dark circular arrow → /contact.
- **Grid overlay**: every section contains an absolute full-size frame (pointer-events off) with 5 vertical 1px hairlines (Hairline dark/light) evenly spaced + small "+" markers at line tops. Build once as a component with a Light/Dark variant.
- **Buttons**: pill radius 50; primary Ink bg/Light text; secondary White or Mist bg/Ink text; hero size ~fill×70; hover = text slides up & duplicate slides in (Framer: two stacked text layers inside a clipping frame, variant moves them up on hover, 0.35s ease-out).
- **Smooth scroll**: Framer sites have this feel natively; optionally add a Lenis code override.

## Animation recipes (Framer "Effects" panel equivalents)
| Site element | Framer setting |
|---|---|
| H1 hero lines | Appear: Slide up from 100% within clipping frame, 0.9s, ease-out-quint, delay 0.2/0.32s |
| Section H2s | Appear: per-character stagger, y 30→0, opacity 0→1, 0.5s, stagger 0.014s ("Split text by character") |
| Paragraph reveals | Split by word, y 24→0, stagger 0.04s |
| Images | Scale 1.4→1 inside clipping frame, 1.1–1.2s ease-out-quint |
| Card grids | Appear stagger children 0.08–0.09s, y 34→0 |
| Stats | Count-up 0→N on view, 1.4s (Framer: "Ticker/Counter" component or code override) |
| Delay bars | Width 0→N% on view, 1.2s ease-out-quint |
| Logo ticker | Framer Marquee component, gap 60, speed ~30s/loop, pause on hover, grayscale images |
| Case rows hover | Cursor-follow image (Framer: "Image trail/cursor" override) + siblings dim to 35% |
| Team photos | Grayscale→color + scale 1.03 on hover, 0.5s |
| FAQ | Accordion component, plus icon rotates 45°, 0.4s |
| Pricing toggle | Two-state variant swap, prices crossfade 0.2s |

## Page/section structure
Use `docs/research/PAGE_TOPOLOGY.md` (already written as a Framer-friendly section list, in order, with band colors) and `docs/COPY_DECK.md` for every word of copy.

## Photo Map (template slot → Ten80Ten asset in assets/img/photos/)
| Slot | Asset | Treatment |
|---|---|---|
| Hero portrait (left 41%, full height) | person-1.jpg | grayscale, contrast 1.06 |
| Hero avatars row | person-1..4.jpg | 34px circles, overlap -10 |
| Video card poster | stories-team.jpg | 16:10, radius 12 |
| Service cards ×3 | service-automation / service-va / service-ops .jpg | 16:10 |
| Phone feature bg | CSS/gradient (pink→violet radials) + phone mockup | — |
| Case section bg | hero-bg.webp | 55% opacity + dark gradient overlay |
| Case rows hover thumbs | cs-realestate / cs-callcenter / cs-social / cs-learn / case-health .jpg | 300×200 radius 12 |
| First-step photo | person-2.jpg | grayscale, 3:4 |
| First-step bg | about-office.jpg | 16% opacity, blur 2, grayscale |
| Team cards ×4 | person-1..4.jpg | grayscale → color on hover |
| Founder portrait | person-1.jpg | 3:4 radius 16 |
| News cards ×4 | res-1..4.jpg | 4:4.4 |
| About office | about-office.jpg | — |
| Careers office | stories-team.jpg | — |
| Ticker logos | assets/img/tool-logos/*.png (14 picked) | grayscale 55% |

## Logo
- Mark: `assets/img/ten80ten-mark.svg` (hourglass). White version = invert filter or recolor in Framer.
- Wordmark: text "Ten80Ten" Sora 600 19px + superscript ®.
- Footer giant wordmark: "TEN80TEN®" Sora 600 caps, ~190px, Light on Black.

## Copy
Everything is final in `docs/COPY_DECK.md` — hero to footer for all 12 pages, including pricing figures, FAQ answers, guarantees, blog titles. Paste-ready.
