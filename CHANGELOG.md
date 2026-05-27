# Changelog

All notable changes to the Hearthwork Design System are documented here.  
Format follows [Keep a Changelog](https://keepachangelog.com/). Versioning follows [Semantic Versioning](https://semver.org/).

---

## [1.0.0] — 2026-05-26

### Added — Foundations
- Full color token system: brand (primary navy `#0D2847`, secondary orange `#F2994A`), state (info/success/warning/error), neutral scale (5 greys + 3 blacks), semantic aliases
- Light mode default with warm off-white `#F8F6F2` background; dark mode token set via `[data-theme="dark"]`
- Typography dual-font system: **Nunito** (display/cozy) + **DM Sans** (UI/cool) + **DM Mono** (code) — all Google Fonts
- 8px-base spacing scale (10 steps: 4px → 120px)
- 7-level elevation/shadow system (0 flat → 6 maximum)
- Border radius tokens: xs (2px) through pill (9999px)
- Z-index scale: below, base, raised, dropdown, sticky, overlay, modal, toast

### Added — Motion
- Duration scale: nano (100ms) through slow (800ms)
- 6 easing curves: standard, decelerate, accelerate, **spring** (brand signature), sharp, linear
- Transition grammar: per-element rules for buttons, cards, modals, toggles, inputs, page transitions
- CSS animation utility classes: `cc-fade-up`, `cc-scale-in`, `cc-spring-in`, `cc-slide-down`, `cc-pressable`, `cc-hover-lift`

### Added — Tokens
- `tokens.json` — W3C DTCG-compatible machine-readable token file (consumable by Style Dictionary, Figma Tokens, Tokens Studio)
- `colors_and_type.css` — CSS custom properties for all tokens
- `package.json` — npm-installable package definition

### Added — Components (preview cards)
- Brand identity card
- Brand + state + neutral color swatches (3 cards)
- Dark mode token card
- Heading scale (H1–H6) + body scale (4 sizes × bold/regular) type specimens
- Font pairings card (Nunito × DM Sans × DM Mono in context)
- Spacing scale visualization
- Radii + shadow reference
- Elevation system (7-level)
- Motion grammar (durations + easing with live demos)
- Transition grammar (per-element rules + interactive demos)
- Buttons (all colors, sizes, states, variants)
- Inputs (all field states)
- Selectors (dropdown, checkbox, radio, toggle, tabs, pagination)
- Tags, badges, avatars, tooltips
- Cards (plain, CTA, header, outline)
- Big elements (banner, table, modal, accordion)
- Component states (skeleton, toast, empty state, focus rings, disabled, spinners)
- **[1.0.0]** Accessibility audit (WCAG contrast ratios, AA/AAA compliance)
- **[1.0.0]** DO / DON'T usage rules
- **[1.0.0]** Icon showcase (Lucide icon grid)
- **[1.0.0]** Responsive behavior guide (breakpoint adaptation)
- **[1.0.0]** Data visualization palette
- **[1.0.0]** Copywriting voice guide
- **[1.0.0]** Form patterns (multi-step, validation, error recovery)
- Brand imagery guide (5 brand photos + art direction rules)

### Added — UI Kits
- **Web** (`ui_kits/web/`) — 5-screen responsive prototype: Home, Explore, Detail, Contact, About. Real photography, light/dark mode toggle, Nunito + DM Sans.
- **Mobile** (`ui_kits/mobile/`) — 5 iOS-framed app templates: Lifestyle feed, E-Commerce, Social, GitHub Search, Chatbot (CC assistant)
- **Desktop** (`ui_kits/desktop/`) — 5-screen admin prototype: Dashboard, Content manager, LLM API Providers + key wizard, IDE, Settings

### Added — Slides
- `slides/index.html` — branded deck template with 7 slide types: Title, Section header, Content (2-col), Full-bleed quote, Stats, Comparison, Closing

### Added — Skill
- `SKILL.md` — Claude Code agent skill definition for brand-aware design generation

---

## Versioning guide

| Change type | Version bump | Example |
|---|---|---|
| New component or major feature | Minor → `1.1.0` | Add a new card type |
| Token value change | Patch → `1.0.1` | Tweak a shadow value |
| Breaking token rename | Major → `2.0.0` | Rename `--color-primary` |
| New section in README | Patch → `1.0.1` | Add a new guideline |

---

*Maintained by Yahya Amirudin. Voice: playful, a little quirky, always professional — and never without a :)*
