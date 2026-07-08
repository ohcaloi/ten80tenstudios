# Page Topology — Effica template → Ten80Ten site

Every page: fixed 60px header (mix-blend difference) + floating bottom-right call pill + smooth scroll wrapper + shared tail (varies) + footer `#0e0e0e`.
Section label pattern: small pill `[dot] NN` + mono label (e.g. "01 · Who we are") above each H2.
Every section carries the grid hairline overlay (5 vertical lines + plus markers).

## index.html (home) — section order
1. **Hero** (white bg): full-viewport. Center: avatars row + rating dots (top), giant caps H1 (slides up from translateY(250px)), curved-svg small line + description (char-stagger), 2 pill buttons, logo ticker bottom (marquee, infinite). BG: two layered editorial portrait images right side, reveal scale(1.4)→1.
2. **Company** (dark `#171717`): "how we work" video card (dark, play button, duration dot) + big quote reveal ("01 · Who we are") + "02 · Services" heading char-anim + services intro text + button → about + **3 service cards** (dark cards: number, title, image, text; image grows on hover).
3. **Advantages** (light `#f5f5f5`): "03 · Why us?" H2 caps char-anim + subline. Numbered advantage rows (3, expand/hover state, white number chip). Source note + date chip. **Stats row**: 3 giant count-up stats. Below: "Real-time" feature — heading + text left, gradient-bg card with phone mockup (translateY 40px reveal) right.
4. **Path** (white): "How we do it" H2 + 4 step cards (light `#f5f5f5`, numbered chips). CTA row: outline button + note "clients reduce manual work by 35%…". **Why-delay-hurts**: mono label + big statement + 4 animated horizontal bar cards (80/50/60/30% fills w/ percentage chip, /workload /growth /opportunities /time).
5. **Case** (dark, bg image + overlay): "Case study" chip + client logo, description, spec table rows, 2 giant stat cards, "Read the full story" pill → case detail. Right: big quote char-reveal + avatar + name.
6. **More cases** (white): sticky side label "MORE PROJECTS", 6 case rows (title + description; hover reveals thumbnail image).
7. **First step** (dark `#171717`, blurred b&w bg image): left large cut-out photo (person), right "04 · Easy first step" + H2 "Start smart start small"-style char-anim + quote + person credit.
8. **Team** (white): "07 · Who we are" + H2 "The team". 4 team cards (role chip, photo reveal on hover, name, skill chips).  Below: statement char-anim ("No salespeople…") + CTA "Start Your Project" + location mono note.
9. **Why** (white): "08 · Why us?" + H2. Left tall dark panel card (logo, dots, avatar chips 1-2-3-8+, caps statement). Right 3 white metric cards (ROI Timeline / Time saved / Workflow impact) with number chips + stats.
10. **Pricing** (dark `#0e0e0e`): logo mark + H2 "Pricing." char-anim + subline. Monthly/Annual pill toggle (Save %). 3 plan cards (middle "Popular" w/ gradient edge): plan header, price, feature list, button.
11. **Founder quote + timeline** (light `#f5f5f5`): left portrait + name/role; right icon + big statement. Below: 4-column timeline (year mono + text, hairline separators).
12. **News** (mist `#e8e8e8`): H2 "News" + "All articles" arrow link. 4 article cards (image, date, title).
13. **Newsletter** (black `#0e0e0e`): H2 + note left, email input line + pill button right.
14. **FAQ** (white): side label "12 · Help & Info", H2 "FAQ", 5 accordion items (light bg, + icon rotates 45°, first open). Right: "Still unsure?" + "Ask a question" pill + support quote + avatar.
15. **Get in touch** (mist `#e8e8e8`): "13 · Ready to start?" + H2 + subline + contact form card OR CTA (pre-footer, dark `#222` rounded card w/ image + big CTA).
16. **Footer** (black `#0e0e0e`): logo, nav columns (Pages / Company / Socials), contact email, legal links, big wordmark bottom, "Back to top".

## about.html
1. Heading (white): label + H1 statement + intro.
2. Stats (light): count-up stats row.
3. Team + text (white): founder/office image, mission text blocks, team profile cards, social x links.
4. Steps (dark): process steps.
5. Founder quote + timeline (f5f5f5) — shared band.
6. News band (e8e8e8) — shared.
7. Newsletter (0e0e0e) — shared.
8. FAQ — shared.
9. Get in touch (e8e8e8) — shared. Footer.

## contact.html
1. Heading (white): label + H1.
2. Form (white): name/email/message fields (hairline underline style), submit pill.
3. Text + image (white): office image + contact info (email, socials) + booking pill.
4. Founder-quote band (f5f5f5, shortened) → Get in touch → Footer.

## blog.html
1. Articles (white): H1 "News"-style + grid of article cards (image, date, category, title) — 8 items (4 unique ×2 rows ok → we ship 4–6).
2. Shared tail: light band, news/get-in-touch, footer.

## case-studies.html
1. Heading (white): label + H1.
2. Projects (white): grid of case cards — BG image, client logo overlay, hover zoom.
3. Shared tail + footer.

## case-<slug>.html (detail, ×5 from old site content)
1. Case (white): breadcrumb chip, H1, client meta table, hero image, body sections (challenge/solution/results), stat cards, quote.
2. More cases (white): other case rows.
3. Shared tail + footer.

## careers.html
1. Heading (white): label + H1.
2. Cards (white): office image + open role cards (accordion or rows) + perks chips.
3. Steps (white): hiring process steps 1-2-3.
4. Dark band (0e0e0e): newsletter. Light band: FAQ-ish. Shared tail + footer.

## legal/privacy.html, legal/terms.html
Simple: H1 + prose. Shared footer.

## Old-site URL preservation
Keep flat filenames: `case-healthcare-automation.html`, `case-real-estate-portal.html`, `case-call-center-platform.html`, `case-social-engine.html`, `case-bcj-learn.html`. `services.html` and `pricing.html` become meta-refresh redirects → `index.html#services` / `index.html#pricing`.
