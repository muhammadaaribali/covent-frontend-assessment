# Covent landing page

A responsive, single-page home-seller landing page for Covent, built for the Covent frontend engineering assessment with Next.js 16, React 19, TypeScript and Tailwind CSS.

- **Live preview:** https://covent-frontend-assessment.vercel.app/
- **Repository:** https://github.com/muhammadaaribali/covent-frontend-assessment.git
## Screenshots

**Desktop**

![Covent landing page on desktop](docs/screenshots/desktop-full.png)

**Mobile**

![Covent landing page on mobile](docs/screenshots/mobile-full.png)

Everything unsupported (statistics, fees, timelines, ratings, testimonials, services) is **sample content** and is labelled as such on the page. No address or other lead data is collected, stored, logged or sent anywhere.

The hero image is AI-generated; the image-generation tool was not recorded.

## Local setup

Requires Node.js 20 LTS or newer (see `engines` in `package.json` if present).

```bash
npm install
npm run dev        # http://localhost:3000
```

Other commands: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, and `npm start` after a build.

## What is on the page

Header (floating pill with the Covent logo and an accessible mobile menu), hero with the address form, trust strip, How it works, Costs, "Is Covent right for you?", Timeline, "We handle the details", sample testimonials, FAQ, closing call to action, and footer.

## The three UX improvements

The reference (Opendoor's homepage) pushes the offer well, but it leaves some seller worries unanswered. Each improvement below addresses one of them.

### 1. Costs and trade-offs shown up front

- **Seller problem:** Sellers worry about hidden fees and getting less than a traditional sale. In the reference, cost is answered late, in a short FAQ near the bottom of the page.
- **My choice:** A dedicated "Know the numbers upfront" section right after the journey. It has three cost cards, a sample offer receipt with a sample-price slider (all lines recalculate from one set of constants), and an accessible comparison table of selling to Covent versus listing with an agent. The hero also states that fees are shown first.
- **Tradeoff:** Showing fees early may lower click-through, and any figure shown has to stay accurate. All figures are labelled "Sample", and the fee rates live in a single constants file so the receipt, cards and table cannot disagree.

### 2. Expectation-setting at the point of entry

- **Seller problem:** People hesitate to type their home address into a form when they do not know what happens next or how much work is involved.
- **My choice:** The address form is surrounded by short reassurances (about 5 minutes, no obligation, fees shown first). In How it works, every step also says what it asks of the seller in time and effort. After a valid submit, the form shows a clearly labelled demo continuation state that repeats what would happen next.
- **Tradeoff:** More text near the primary action risks clutter. I kept it to one short line of checks beside the form and moved the detail into the steps.

### 3. An honest "Is Covent right for you?" decision aid

- **Seller problem:** Many sellers do not know whether an instant offer or a traditional listing suits them, and one-sided pitches reduce trust.
- **My choice:** An accessible tabs component with three priorities (move fast, highest price, certainty). Each gives an honest verdict, the trade-off, and when listing with an agent may be the better choice. The Timeline section extends this with a "when do I need to be moved out" slider that shows whether each route fits the date.
- **Tradeoff:** It may send some visitors toward listing, which can lower conversion. I accept that in exchange for trust, and the visitors who continue are better matched. It also adds content to maintain and an interactive component to test for accessibility.

## Design direction

The visual direction is premium and editorial: near-black panels and controls, warm off-white page sections, and amber highlights. The deliberately different look keeps the page from reading as a replica of the reference.

Section rhythm follows one rule: the page background is cream, dark backgrounds are reserved for emphasis sections (trust strip, timeline, "You decide" card, featured testimonial, closing call to action), and white is limited to cards, panels, tables and inputs.

Palette tokens live in `src/app/globals.css` on `:root`, and the Tailwind theme tokens directly below mirror the same values.

| Token | Value | Role |
| --- | --- | --- |
| `--c-bg` | `#f7f3ec` | Warm off-white page background |
| `--c-surface` | `#ffffff` | Light cards and surfaces |
| `--c-ink` | `#111312` | Text, controls, dark panels |
| `--c-ink-2` / `--c-ink-3` | `#1b1e1c` / `#262a27` | Raised dark surfaces and hover |
| `--c-ink-hover` | `#2a2e2b` | Black-button hover |
| `--c-muted` / `--c-muted-on-dark` | `#5b5e57` / `#c4c2ba` | Secondary text |
| `--c-border` | `#d9d2c5` | Borders |
| `--c-tint` / `--c-tint-2` | `#eceae4` / `#e2dfd6` | Pale neutral fills |
| `--c-accent` / `--c-accent-soft` / `--c-accent-ink` | `#f2b84b` / `#fbefd0` / `#412402` | Amber accent, pale amber, text on amber |
| `--c-error` / `--c-placeholder` | `#b42318` / `#6b6e67` | Error and placeholder |

Measured WCAG contrast: ink on background `16.87:1`, muted on background `5.96:1`, muted-on-dark on ink `10.46:1`, amber-ink on amber `7.94:1`, placeholder on background `4.69:1`. [ADD any re-measured values, for example for the header link colour.]

Typography uses Outfit through `next/font`. The logo is an SVG in `public/covent-logo.svg`.

## Key technical decisions

- **Server Components by default.** Only interactive parts are client components: header and mobile menu, address form, trust-strip counters, How it works, receipt slider, decision-aid tabs, timeline board, testimonial filter and FAQ board. The page shell, headings and static content stay on the server, which keeps client JavaScript small.
- **Content separated from components.** All page copy and sample figures live in typed files in `src/content/`, so copy changes and new items (a FAQ question, a step, a priority) are one-line edits.
- **Design tokens in one place.** Colours, fonts, radii and shadows are defined once and referenced everywhere, instead of repeated literal values.
- **Address form.** Validation is a pure function in `src/lib/validation.ts` with unit tests. Empty and whitespace-only input are rejected with an inline message tied to the input (`aria-invalid`, `aria-describedby`), announced to assistive tech, and focus returns to the field. A valid submit shows a clearly labelled "Demo only: nothing was sent or saved" state with an Edit address button. Native browser validation is turned off so the accessible message is the only one shown. Each form instance uses `useId`, so the hero and closing forms never share ids.
- **Motion that explains, with a safe default.** Animations only run when `prefers-reduced-motion` allows them, and the un-animated state is the finished state. Animated counters keep their final value in text for screen readers and reserve their width so nothing shifts. The timeline updates CSS variables from `requestAnimationFrame` instead of React state, to stay smooth.
- **Accessible patterns.** Skip link and landmarks; keyboard-operable mobile menu (Escape closes and returns focus), ARIA tabs with arrow keys, an accordion with `aria-expanded`/`aria-controls` and `inert` on closed answers; visible focus states on light and dark surfaces; the comparison table keeps table semantics when it turns into cards on mobile.
- **No external images.** Visuals are inline SVG and CSS (the logo, the how-it-works scenes, the closing doorway), so there are no image files to optimise and nothing to cause layout shift. Space for each visual is reserved with fixed sizes or aspect ratios.
- **FAQ structured data.** The FAQ section adds JSON-LD generated from the same data as the visible answers, so the markup cannot drift from the page.



## How I used AI

I used an AI assistant (Claude) to analyse the brief and the reference page, plan the page and the three UX improvements, draft copy, and write first versions of components and CSS. [ADD the coding agent or editor assistant you used for the scaffold and edits, if any.]

I did not accept output as is. I read and ran the code, tested every interaction in the browser and with the keyboard, fixed the problems listed above, and adjusted the design by hand. [ADJUST so this describes exactly what you did.] I can explain any component and make a change live.


## Remaining limitations

- All statistics, fees, timelines, ratings, testimonials and service claims are sample content. Footer links are placeholders.
- The address form is a demo. There is no address lookup, autocomplete or backend, by design.
- The logo was converted from a supplied raster image into SVG. It should be replaced with Covent's original vector file when available.
- The How it works scene loops continuously by design and has no pause control. It is decorative (`aria-hidden`), all of its information is in text, and it does not auto-play under `prefers-reduced-motion`. Strictly, WCAG 2.2.2 expects a way to pause moving content, so a pause control would be the first thing to add.
- `npm audit` reports findings in development tooling (the test runner and lint helper packages). [CONFIRM with `npm audit --omit=dev`, and say whether production dependencies are clean.] I did not force upgrades, to avoid breaking the required Next.js 16 setup.
- The door-opening effect on the closing section uses `:has()`; browsers without support simply show the door closed.
- [ADD anything untested, for example screen readers, older browsers or very large monitors.]

## Project structure

- `src/app/`: App Router entry page, root layout, metadata and global styles with the Tailwind theme.
- `src/components/ui/`: reusable button, layout primitives, headings and the sample marker.
- `src/components/sections/`: the ordered page sections and their interactive subcomponents.
- `src/components/layout/`: header with mobile menu, footer.
- `src/components/forms/`: the client-side demo address form.
- `src/content/`: typed page copy and sample figures.
- `src/lib/`: pure helpers, including address validation.
- `public/`: the Covent logo and any static assets.
- `tests/`: Vitest unit tests for validation.