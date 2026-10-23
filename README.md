# OneHeart — corporate landing site

Single-page marketing site for **OneHeart**, a Bangladeshi business group.
Everything is statically rendered: no backend, no database, no API routes.

## Tech stack

- Next.js 16 (App Router) with TypeScript in strict mode
- Tailwind CSS v4 (`@theme` tokens in `src/app/globals.css`)
- `next/font` for self-hosted Inter (body) and Poppins (display)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script              | Purpose                                        |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Start the dev server                           |
| `npm run build`     | Production build                               |
| `npm run start`     | Serve the production build                     |
| `npm run lint`      | ESLint                                         |
| `npm run typecheck` | Generate route types and run `tsc --noEmit`    |

## Project structure

```
src/
  app/            routes, root layout, global tokens (globals.css)
  components/
    layout/       header, footer, shell
    sections/     page sections (hero, about, portfolio, ...)
    ui/           small reusable primitives (Section, Container, Button, ...)
  data/site.ts    all copy and links — the single source of truth for content
  lib/            shared helpers
```

## Editing content

All text and URLs live in [`src/data/site.ts`](src/data/site.ts). Components read
from that file, so copy changes never require touching a component.

Company URLs are currently `#` placeholders — replace them in `site.ts` when the
live sites are available. The organisation URL in `src/app/layout.tsx`
(`metadataBase`) is also a placeholder pending the production domain.
