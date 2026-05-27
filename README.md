# Hearthwork Design System

> **Previously:** COZY-COOL Design System  
> **Source:** UI Style Guidelines by Yahya Amirudin (Figma community file, screenshots provided).  
> No live Figma link or codebase was provided — system was extracted from 6 annotated screenshots.

**Hearthwork** — *hearth* (warm, homely, inviting) × *work* (crafted, professional, precise). A brand with a dual personality: the warmth of a fireplace and the sharpness of good craft. The design system reflects this through a deep navy + bright orange palette, Nunito × DM Sans typography, and a component library covering everything from micro-inputs to full-bleed hero banners.

---

## Products / Surfaces

| Surface | Description |
|---|---|
| **Web UI** | Responsive website/app with Desktop HD (1440), Desktop (1024), Tablet (768), and Mobile (320) breakpoints |

---

## Files in this Project

| Path | Description |
|---|---|
| `README.md` | This file — system overview and index |
| `SKILL.md` | Agent skill definition |
| `colors_and_type.css` | All CSS custom properties (colors, typography, spacing, radii, shadows) |
| `assets/` | Logos, icons, and brand assets |
| `preview/` | Design system card HTML files (shown in the DS tab) |
| `ui_kits/web/` | Web UI kit — interactive click-through prototype |

### Preview Cards (Design System Tab)

| Card | Group | Description |
|---|---|---|
| `preview/brand-identity.html` | Brand | Wordmark, full palette, typeface, voice |
| `preview/colors-brand.html` | Colors | Primary navy + secondary orange |
| `preview/colors-state.html` | Colors | Info, Success, Warning, Error |
| `preview/colors-neutral.html` | Colors | Black (3) + Grey (5) scales |
| `preview/type-headings.html` | Type | H1–H6, Inter Bold, 1.1× line-height |
| `preview/type-body.html` | Type | Large/Medium/Normal/Small, Bold+Regular |
| `preview/spacing-tokens.html` | Spacing | 8px base, 10-step scale 8→120px |
| `preview/spacing-radii-shadows.html` | Spacing | Radii (sm/md/pill) + shadows (card/dropdown/modal) |
| `preview/components-buttons.html` | Components | All button colors, sizes, states, variants |
| `preview/components-inputs.html` | Components | Text fields — all states + textarea |
| `preview/components-selectors.html` | Components | Dropdown, checkbox, radio, toggle, tabs, pagination |
| `preview/components-tags-badges.html` | Components | Tags (8 variants), badges, avatars, tooltips |
| `preview/components-cards.html` | Components | Image, CTA, header, outline card patterns |
| `preview/components-big-elements.html` | Components | Banner, table, modal, accordion |

### UI Kits

| Kit | Path | Screens |
|---|---|---|
| Web | `ui_kits/web/index.html` | Home, Explore, Detail, Contact, About |

### Key Token Quick-Reference

```css
/* Brand */
--color-primary:   #0D2847   /* deep navy */
--color-secondary: #F2994A   /* warm orange */

/* Type */
--font-sans: 'Inter', system-ui, sans-serif

/* Spacing base unit: 8px */
/* Border radius: 4px (default), 8px, 9999px (pill) */
/* Card shadow: 0 2px 8px rgba(0,0,0,0.08) */
```

---

## CONTENT FUNDAMENTALS

### Voice & Tone
Hearthwork speaks in a voice that is **playfully warm, a little quirky, but always professionally grounded**. Think a knowledgeable friend who happens to know design really well — they're precise when they need to be, but never stiff.

**Core attributes:**
- **Playful** — Light touches of personality. Doesn't take itself too seriously.
- **Quirky** — Slight unexpectedness. A `:)` at the end of a thank-you note. Never weird for weird's sake.
- **Professional** — Clarity first. No jargon, no filler, no waffle.

### Copy Rules
- **Sentence case** everywhere — not Title Case For Every Word
- **First person plural ("we") for brand voice;** second person ("you") when addressing users
- **Short sentences.** If it can be said in 8 words, don't use 16.
- **Emoticons over emoji** — `:)` not 😊. Keeps things text-native and slightly retro-quirky.
- **No exclamation marks in UI copy** — enthusiasm comes from clarity, not punctuation
- **CTA copy is verb-first:** "Get started", "Learn more", "Read more", "Call to action"
- **Placeholder text** is descriptive, not lorem ipsum where avoidable: "Input text here", "Enter text here"

### Examples
- "Thank you for watching :)" ← end of style guide, warm sign-off
- "Button Sample" ← functional, direct
- "No file selected" ← plain, honest
- "Drag & Drop here or Browse" ← conversational, helpful

---

## VISUAL FOUNDATIONS

### Colors
**Primary** `#0D2847` — Deep navy. Used for CTAs, table headers, card headers, nav, primary buttons.  
**Secondary** `#F2994A` — Warm orange. Energy, highlights, secondary buttons, "Call to Action" banners, progress fills.

State palette is functional and standard: Info (blue), Success (green), Warning (amber), Error (red).  
Neutral scale runs 5 steps from near-black #333333 to near-white #E0E0E0.

### Typography
Single typeface: **Inter** (Google Fonts). Clean, geometric, highly readable at all sizes. No display or serif fonts.  
Line-height ratio: **1.1× for headings**, **1.4× for body text**.  
Heading weights are **bold (700)**; body comes in both Bold and Regular.

### Spacing
Base unit: **8px**. Scale: 8, 16, 24, 32, 40, 56, 72, 80, 96, 120px. All padding/margin/gap values snap to this scale.

**Button padding rules:** Left/Right = 5× font size; Top/Bottom = 1× font size.  
**Input padding:** Left = 2× text size; Top/Bottom = 1× text size; Right = 3× text size (icon allowance).

### Backgrounds
- Light UI: white `#FFFFFF` base with `#E0E0E0` dividers
- Dark surfaces: primary navy `#0D2847`
- Cards: white background, subtle border or drop shadow
- Hero/banner: full-bleed photography with dark overlay + white text + orange CTA
- No gradients on UI surfaces — gradients reserved for photography overlays only

### Cards
- White background
- Subtle drop shadow (`0 2px 8px rgba(0,0,0,0.08)`)
- Slight border radius (4–8px)
- Image cards: top image, title below, body copy, CTA button at bottom
- Header cards: navy header strip with white text, white content body below

### Borders & Radius
- Inputs/cards: `border-radius: 4px`
- Buttons: `border-radius: 4px`
- Tags/badges: `border-radius: 4px` (pill-ish but not fully rounded)
- Toggles: fully rounded (`border-radius: 999px`)
- No heavy border usage — borders are `1px solid #E0E0E0` (very quiet)

### Shadows
- Cards: `0 2px 8px rgba(0,0,0,0.08)`
- Modals: `0 8px 32px rgba(0,0,0,0.16)`
- Buttons: no shadow (flat)
- Dropdowns: `0 4px 16px rgba(0,0,0,0.12)`

### Icons
- 24px full area, 20px live area, 2px safe zone padding
- Both **outline** and **fill** variants used
- Outline: default/inactive states; Fill: active/selected states
- Style: rounded, line-weight consistent (~1.5px stroke)
- CDN: Lucide Icons (closest match to the outlined style shown)

### Imagery
- Landscape/nature photography — mountains, lakes, open skies
- Cool-to-neutral color temperature (blues, purples, teals)
- Used as full-bleed card backgrounds and carousel heroes
- Always paired with a dark overlay for text legibility

### Animation
- Subtle and functional — no decorative animation
- Hover: slight background shift (opacity or color), no transform
- Active/press: darker color fill
- Transitions: `150–200ms ease-in-out`
- No bounces or spring physics — smooth and calm

### Hover / Press States
- **Buttons:** Hover = slightly darker navy / deeper orange; Active = noticeably darker
- **Links:** Color shift to darker navy
- **Cards:** No hover transform — background tint only
- **Inputs:** Border color deepens to `#828282` on focus; focus ring in primary navy

### Transparency & Blur
- Not commonly used in UI
- Photo overlays use `rgba(0,0,0,0.4–0.6)` for text protection
- No frosted glass / backdrop-filter in core UI

### Grid System
| Breakpoint | Width | Columns | Column Width | Gutter |
|---|---|---|---|---|
| Desktop HD | 1440px | 12 | 65px | 30px |
| Desktop | 1024px | 12 | 50px | 30px |
| Tablet | 768px | 6 | 88px | 30px |
| Mobile | 320px | 2 | 130px | 30px |

---

## ICONOGRAPHY

**Approach:** Functional icons from a consistent outline/fill icon library. Icons serve navigation, status indicators, and interactive affordances — never purely decorative.

**Size rules:**
- Full area: 24×24px
- Live area: 20×20px
- Safe padding: 2px all sides

**States:** Outline icons for inactive; filled icons for active/selected state.

**Library:** The style guide shows a custom or third-party icon set with rounded outlines. **Substitution:** Lucide Icons (CDN) is used in this design system as the closest visual match. If the original icon files become available, replace the CDN link with local SVGs.

**Usage:**
```html
<!-- Lucide via CDN -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="home"></i>
<script>lucide.createIcons();</script>
```

**Emoji:** Not used in UI. Emoticons (`:)`) appear in brand copy only.  
**Unicode chars:** Not used as icons.
