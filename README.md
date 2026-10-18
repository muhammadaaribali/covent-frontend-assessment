# Covent

Covent is a Next.js 16 single-page home-seller landing page scaffold. It provides an accessible foundation, demo-only address form behavior, and interactive sample sections that are ready for the real product design and copy.

## Design direction

The visual direction is deliberately premium and editorial: near-black panels and controls, warm off-white page sections, and amber highlights replace the former deep-green palette without changing the page structure or behavior. The palette tokens live in `src/app/globals.css` on `:root`; the Tailwind theme tokens immediately below mirror the same values for utility classes.

Section rhythm follows the same rule: the page background is cream, dark backgrounds are reserved for emphasis sections, and white is limited to cards, panels, tables, and inputs. The Decision Aid and FAQ now inherit the cream page background instead of creating full-width white bands; their white surfaces remain bordered so the cream-to-cream seams read as intentional.

The final palette and measured WCAG contrast ratios are:

| Token | Value | Role |
| --- | --- | --- |
| `--c-bg` | `#f7f3ec` | Warm off-white page background |
| `--c-surface` | `#ffffff` | Light cards and surfaces |
| `--c-ink` | `#111312` | Text, controls, and dark panels |
| `--c-ink-2` | `#1b1e1c` | Raised dark surfaces |
| `--c-ink-3` | `#262a27` | Dark-surface hover |
| `--c-ink-hover` | `#2a2e2b` | Black-button hover |
| `--c-muted` | `#5b5e57` | Secondary light-background text |
| `--c-muted-on-dark` | `#c4c2ba` | Secondary dark-background text |
| `--c-border` | `#d9d2c5` | Borders |
| `--c-tint` | `#eceae4` | Pale neutral fills |
| `--c-tint-2` | `#e2dfd6` | Strong-fit and avatar fills |
| `--c-hatch-1` / `--c-hatch-2` | `#2e322f` / `#3e433f` | Timeline hatch |
| `--c-accent` | `#f2b84b` | Amber accent |
| `--c-accent-soft` | `#fbefd0` | Pale amber state |
| `--c-accent-ink` | `#412402` | Text on amber |
| `--c-error` | `#b42318` | Error state |
| `--c-placeholder` | `#6b6e67` | Input placeholder |

Measured ratios: ink on background `16.87:1`, ink on white `18.65:1`, muted on background `5.96:1`, muted on white `6.60:1`, muted-on-dark on ink `10.46:1`, muted-on-dark on raised dark `9.43:1`, cream on ink `16.87:1`, white on ink `18.65:1`, amber-ink on amber `7.94:1`, placeholder on background `4.69:1`, and cream on hatch-1/hatch-2 `11.77:1`/`9.13:1`.

## Local setup

```bash
npm install
npm run dev
```

Other commands: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, and `npm start` after a build.

## Structure

- `src/app/` — App Router entry page, root layout, metadata, and global Tailwind theme.
- `src/components/ui/` — reusable button, layout primitives, headings, and sample marker.
- `src/components/sections/` — ordered home-page sections and their interactive subcomponents.
- `src/components/layout/` — header, mobile menu, footer, and mobile CTA.
- `src/components/forms/` — client-side demo address form.
- `src/content/` — typed page copy and section metadata.
- `src/lib/` — pure validation helpers.
- `public/images/` — reserved for future imagery.
- `tests/` — Vitest unit tests for validation.

## Real versus placeholder

The App Router shell, metadata, Outfit font, design tokens, landmarks, skip link, responsive header/menu behavior, reusable primitives, address validation, and demo-only form state are working. Trust, How It Works, Costs, Decision Aid, Timeline, Handles, Testimonials, and FAQ have interactive sample implementations. The closing CTA and any remaining scaffold areas are still intentionally simple; all figures, quotes, and claims are sample content.

The design decisions are intentionally conservative: Tailwind v4 theme tokens live in `globals.css`, Outfit uses `next/font`, and no data is logged, stored, looked up, or sent.

## Next steps

Replace sample copy and figures with approved product content, refine the visual design for each implemented section, finish the Closing CTA, and add product-specific tests before launch.
