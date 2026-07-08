# Ten80Ten — Marketing Website (v2)

A fast, responsive, animated marketing site for **Ten80Ten** (*Systems + Specialists*).
Static HTML with a **shared design system** — no build step, no framework, no JS dependencies.

> Visual direction: monochrome ink-on-white premium aesthetic — rounded panel sections,
> dark "curtain" sections, mono-font eyebrows, pill buttons with icon chips, giant marquee
> headings, and reveal-on-scroll motion. Ten80Ten's hourglass mark provides the orange
> accent. All copy is original, built around the 10/80/10 method.

## Structure

```
ten80ten/
├── index.html                     Home — hero (floating system cards + photo strip +
│                                  logo ticker), 10/80/10 bento, works grid, capabilities
│                                  (horizontal accordion), testimonials, demo feature,
│                                  process + team, pricing (billing toggle), FAQ,
│                                  insights, contact form, footer w/ ghost wordmark
├── services.html                  Three service deep-dives + process strip
├── pricing.html                   Four tiers, comparison, Founding Client, FAQ
├── about.html                     Story, values, stats, team
├── contact.html                   Free-audit form + FAQ
├── case-studies.html              All case cards
├── case-real-estate-portal.html   ┐
├── case-call-center-platform.html │
├── case-social-engine.html        │ case studies (dark hero, 10/80/10 narrative,
├── case-healthcare-automation.html│ results band, related work)
├── case-bcj-learn.html            ┘
└── assets/
    ├── css/styles.css   design tokens + every component (edit :root to re-theme)
    ├── js/main.js       reveals, tickers, horizontal accordion, slider, billing
    │                    toggle, FAQ accordion, nav state, forms, counters
    └── img/             logo marks + photos/
```

## Design system

All theming lives in `assets/css/styles.css` under `:root`:
- **Color** — `--ink` `#1a1a1a`, `--white`, `--panel` `#f0f0f0`, alpha ramps for both
  ink and white; `--accent` `#f97316` (logo orange) used sparingly (status dots, flags).
- **Type** — Inter (display + body, tight -0.04em tracking on headings) + Geist Mono
  (uppercase eyebrows/labels) via Google Fonts.
- **Layout** — 12px page gutter; sections are rounded 20px panels (white / #f0f0f0 / ink);
  dark sections end in rounded "curtain" connectors.
- **Motion** — IntersectionObserver reveals (`.rv .rv-up/-left/-right/-scale` +
  `data-delay`), CSS marquee tickers (duplicated by JS), horizontal accordion,
  auto-advancing testimonial slider, count-up metrics. All `transform`/`opacity` only;
  `prefers-reduced-motion` fully respected.

## Wire up before going live

1. **Contact form** — submits via `mailto:hello@ten80ten.com` (no backend). To use a form
   service, set `action` (e.g. Formspree) and remove the `data-contact` mailto handler
   in `main.js`.
2. **Social links** — footer icons currently `href="#"`.
3. **Demo video** — the play button on the feature section links to `#contact`; point it
   at the real demo video when ready.
4. **Testimonials** — role-attributed quotes; swap in named clients as they land.

## Deploy

Drag the folder into Netlify Drop, or connect to Vercel / Cloudflare Pages / GitHub Pages.
No configuration needed. Local preview: `npx serve -l 4321 ten80ten`
