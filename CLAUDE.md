# Claude Code — personal-page

Research lab website built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS.

## Stack

| Tool | Version |
|------|---------|
| Next.js | ^15.5.12 (App Router, static export) |
| React | ^19.0.0 |
| TypeScript | ^5 |
| Tailwind CSS | ^3.4.17 |

## Commands

```bash
npm run dev      # Dev server → http://localhost:3000
npm run build    # Static export → out/
npm run lint     # ESLint check
npm run start    # Serve production build
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout (fonts, metadata)
│   └── page.tsx         # Single-page composition — imports all section components
├── components/          # One file per page section
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Research.tsx
│   ├── Members.tsx
│   ├── Publications.tsx
│   ├── Gallery.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── lib/                 # Shared utilities
public/                  # Static assets
out/                     # Static build output (gitignored)
```

## Conventions

- **Path alias**: `@/` → `src/`
- **Named exports** for all components (no default exports in components)
- **Tailwind-only** styling — no CSS modules or styled-components
- **Static export**: `next.config.ts` outputs to `out/` via `next build`

### Custom Design Tokens (`tailwind.config.ts`)

| Token | Value | Usage |
|-------|-------|-------|
| `lab-blue` | `#0099FF` | Primary brand / CTA buttons |
| `lab-blue-dark` | `#0077CC` | Hover states |
| `lab-blue-light` | `#E6F4FF` | Backgrounds, accents |
| `max-w-site` | `1200px` | Page max-width container |
| `font-sans` | Open Sans | Body text |

### Section Anchors

Nav links use hash anchors — sections must have matching `id` attributes:
`#research`, `#members`, `#publications`, `#gallery`, `#contact`

## Branch Naming Convention

`YYYYMMDD_short_description` — e.g., `20260416_ui_updates`

## Guidelines

- Read files before editing
- Run `npm run lint` after non-trivial changes
- Test UI changes by starting the dev server — verify visually before calling complete
- Prefer editing existing components over adding new files
