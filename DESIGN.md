# Honeydew Vet Design System

## 1. Atmosphere & Identity

Honeydew Vet should feel calm, local, and clinically trustworthy without losing warmth. The signature is a blue-and-white care layer: clear veterinary information, rounded practical surfaces, and gentle motion that makes the static pages feel attended to, like a clinic team guiding a visitor from concern to action.

## 2. Color

### Palette

| Role | Token | Light | Dark | Usage |
|------|-------|-------|------|-------|
| Surface/primary | --background-color | #FFFFFF | #0F2B45 | Page background |
| Surface/secondary | --secondary-color | #C9D9E8 | #1C5284 | Cards, callouts |
| Surface/elevated | --surface-elevated | #F6FAFD | #173F66 | Forms, panels |
| Text/primary | --text-color | #1C5284 | #FFFFFF | Headlines, links |
| Text/inverse | --s-text-color | #FFFFFF | #FFFFFF | Text on blue |
| Text/muted | --muted-text-color | #4E6880 | #C9D9E8 | Captions, secondary copy |
| Border/default | --border-default | #D8E6F2 | #2E638F | Inputs, cards |
| Accent/primary | --primary-color | #1C5284 | #7EC1FF | Primary CTAs |
| Accent/hover | --dark-hover-color | #0F2B45 | #C9D9E8 | Hover states |
| Accent/light | --light-hover-color | #7EC1FF | #7EC1FF | Links, focus |
| Status/success | --status-success | #2E7D5B | #6FD3A3 | Form success |
| Status/error | --status-error | #B42318 | #FFB4AB | Form errors |

### Rules

- Preserve the existing Honeydew blue/white palette.
- Accent blue is used for calls to action, links, focus rings, and clinic information.
- Success/error colors are reserved for forms and must not become decorative.

## 3. Typography

### Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| Display | clamp(3.8rem, 7vw, 7.2rem) | 900 | 1.05 | 0 | Hero headings |
| H1 | clamp(3rem, 5vw, 5.2rem) | 900 | 1.1 | 0 | Page titles |
| H2 | clamp(2.8rem, 4vw, 4.4rem) | 800 | 1.15 | 0 | Section headings |
| H3 | clamp(2.2rem, 3vw, 3.2rem) | 800 | 1.25 | 0 | Card groups |
| Body/lg | 1.8rem | 500 | 1.6 | 0 | Lead paragraphs |
| Body | 1.6rem | 400 | 1.65 | 0 | Default text |
| Body/sm | 1.4rem | 500 | 1.5 | 0 | Secondary info |
| Caption | 1.2rem | 700 | 1.4 | 0 | Labels |

### Font Stack

- Primary: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- Mono: none

### Rules

- Body text never drops below 14px.
- Letter spacing stays at 0.
- Buttons and labels use weight for clarity, not oversized text.

## 4. Spacing & Layout

### Base Unit

All spacing derives from a base of 4px.

| Token | Value | Usage |
|-------|-------|-------|
| --space-1 | 4px | Tight inline spacing |
| --space-2 | 8px | Small gaps |
| --space-3 | 12px | Input padding |
| --space-4 | 16px | Default gaps |
| --space-5 | 20px | Comfortable gaps |
| --space-6 | 24px | Card padding |
| --space-8 | 32px | Grid gutters |
| --space-10 | 40px | Section groups |
| --space-12 | 48px | Major groups |
| --space-16 | 64px | Section padding |
| --space-20 | 80px | Hero rhythm |

### Grid

- Max content width: 1180px
- Column system: responsive CSS grid with `minmax()` tracks
- Breakpoints: mobile up to 640px, tablet 641-990px, desktop 991px+

### Rules

- Use `min-height: 100dvh` or content-driven `min-height`; avoid fixed viewport heights that clip.
- Cards use stable image aspect ratios so content and hover states do not shift the layout.
- Sections use constrained inner content rather than floating page cards.

## 5. Components

### Header
- Structure: emergency bar, navigation, mobile menu, hero split.
- Variants: home image right, internal image left/right.
- Spacing: --space-4 to --space-20.
- States: link hover, button hover, hamburger open/closed, focus-visible.
- Accessibility: semantic nav, text close button, keyboard focus rings.
- Motion: GSAP hero text/image entrance, reduced-motion safe.

### Service Card
- Structure: image area plus text panel.
- Variants: large feature card, compact animal/service card.
- Spacing: --space-4, --space-6, --space-8.
- States: default, hover, focus when clickable.
- Accessibility: images get descriptive alt text, cards remain readable without hover.
- Motion: reveal on scroll and transform-only hover lift.

### Form Panel
- Structure: labelled inputs, select/textarea, inline feedback region, submit button.
- Variants: contact form, booking/enquiry form.
- Spacing: --space-3 to --space-8.
- States: default, focus, invalid, valid submitted, loading.
- Accessibility: labels for every field, `aria-live` status, no alert-only validation.
- Motion: GSAP success pulse with transform and opacity only.

### Footer
- Structure: logo, clinic, services, contact, social, policies.
- Variants: same component across all pages.
- Spacing: --space-6 to --space-12.
- States: link hover/focus.
- Accessibility: links use real href values and descriptive text.
- Motion: none beyond hover.

## 6. Motion & Interaction

### Timing

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 120ms | ease-out | Button press, link hover |
| Standard | 240ms | ease-in-out | Card hover, menu open |
| Emphasis | 600ms | power3.out | Hero entry, section reveal |
| Ambient | 8-12s | sine.inOut | Gentle hero image drift |

### Rules

- Use GSAP for page entrance, reveal, and form feedback.
- Animate only transform, opacity, and filter.
- Respect `prefers-reduced-motion`.
- Motion must clarify hierarchy or interaction; no random movement on important text.

## 7. Depth & Surface

### Strategy

Mixed: soft shadows for elevated clinic cards and subtle borders for form fields.

| Level | Value | Usage |
|-------|-------|-------|
| Subtle | 0 10px 30px rgba(15, 43, 69, 0.10) | Cards |
| Default | 0 18px 45px rgba(15, 43, 69, 0.14) | Hero/media panels |
| Focus | 0 0 0 4px rgba(126, 193, 255, 0.35) | Inputs, buttons |

| Type | Value | Usage |
|------|-------|-------|
| Default | 1px solid var(--border-default) | Inputs, card edges |
| Light | 1px solid rgba(255, 255, 255, 0.35) | Blue panels |
