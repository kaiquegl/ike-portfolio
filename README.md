# Portfolio – Kaique Lima

Personal portfolio and resume of **Kaique Lima**, Senior Frontend Engineer with 9+ years of experience. The site presents professional experience, technical skills, education, and contact information in a clean, responsive layout with dark/light mode and bilingual support (Portuguese & English).

Live at: [ike-dev.com.br](https://ike-dev.com.br)

---

## Features

- **Bilingual** – full i18n support for `pt-BR` and `en`, with locale detection via URL path (`/` → pt-BR, `/en` → English)
- **Dark / Light mode** – theme persisted via SSR cookie, no flash on load
- **SEO optimized** – Open Graph tags, Twitter Card, JSON-LD structured data (`Person`, `WebSite`), canonical URLs, `hreflang` alternate links, and `sitemap.xml`
- **SSR** – server-side rendering with TanStack Start (powered by Nitro + Vite)
- **Responsive layout** – sidebar + main content grid, fully adapted for mobile, tablet, and desktop
- **Interactive skill highlights** – clicking a skill filters the professional experience timeline
- **URL-synced state** – active skill filter is reflected in the query string via `nuqs`
- **Accessible** – semantic HTML, keyboard-navigable components

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (SSR) |
| UI Library | [React 19](https://react.dev) |
| Language | TypeScript 5 |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Components | [shadcn/ui](https://ui.shadcn.com) + [Base UI](https://base-ui.com) |
| Icons | [HugeIcons](https://hugeicons.com) |
| State management | [Zustand](https://zustand-demo.pmnd.rs) |
| URL state | [nuqs](https://nuqs.47ng.com) |
| Linting / Formatting | [Biome](https://biomejs.dev) via [Ultracite](https://ultracite.dev) |
| Testing | [Vitest](https://vitest.dev) + [Testing Library](https://testing-library.com) |
| Bundler | [Vite 7](https://vite.dev) |
| Deployment | [Netlify](https://netlify.com) |

---

## Getting Started

### Prerequisites

- Node.js >= 20
- pnpm (or npm / yarn)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

### Build

```bash
pnpm build
```

### Preview (production build)

```bash
pnpm preview
```

### Lint & Format

```bash
pnpm check   # check for lint/format issues
pnpm fix     # auto-fix lint/format issues
```

### Tests

```bash
pnpm test
```

---

## Project Structure

```
src/
├── components/
│   ├── curriculum/       # Professional experience, skills, education sections
│   ├── sidebar/          # Profile card (photo, role, location, contact)
│   ├── timeline/         # Vertical timeline component
│   └── ui/               # shadcn/ui primitives
├── core/
│   ├── constants/        # Skills map and experience data
│   ├── i18n/             # Translation messages (en, pt-BR)
│   ├── providers/        # Theme and locale context/store (Zustand)
│   └── seo/              # SEO head builder and JSON-LD generators
└── routes/
    ├── __root.tsx        # Root layout with SSR theme/locale bootstrap
    ├── index.tsx         # pt-BR route (/)
    └── en.tsx            # English route (/en)
```

---

## License

Personal project – all rights reserved.
