# Covent

Covent is a Next.js 16 single-page home-seller landing page scaffold. It intentionally provides the accessible foundation and form behavior, while the seller-facing sections remain clearly marked placeholders for the next design pass.

## Local setup

```bash
npm install
npm run dev
```

Other commands: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, and `npm start` after a build.

## Structure

- `src/app/` — App Router entry page, root layout, metadata, and global Tailwind theme.
- `src/components/ui/` — reusable button, layout primitives, headings, and sample marker.
- `src/components/sections/` — ordered home-page section components; most are intentional placeholders.
- `src/components/layout/` — header, mobile menu, footer, and mobile CTA.
- `src/components/forms/` — client-side demo address form.
- `src/content/` — typed page copy and section metadata.
- `src/lib/` — pure validation helpers.
- `public/images/` — reserved for future imagery.
- `tests/` — Vitest unit tests for validation.

## Real versus placeholder

The App Router shell, metadata, fonts, design tokens, landmarks, skip link, responsive header/menu behavior, reusable primitives, address validation, and demo-only form state are working. The page sections contain only their final heading, one short description, and a dashed TODO box; no finished landing-page design or claims are included.

The design decisions are intentionally conservative: Tailwind v4 theme tokens live in `globals.css`, Google fonts use `next/font`, and no data is logged, stored, looked up, or sent.

## Next steps

Build the real content and design for Trust strip, How it works, Costs, Decision aid, Timeline, Handles, Testimonials, FAQ, and Closing CTA. Replace sample copy and add product-specific tests before launch.
