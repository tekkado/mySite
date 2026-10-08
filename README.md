# mySite

Personal portfolio for Shams Minal Rahman — built with Vite, React, TypeScript and Tailwind CSS.

## Develop

```sh
nvm use           # Node 22 (see .nvmrc)
npm install
npm run dev       # http://localhost:5173
npm run check     # lint + format check + typecheck + tests + build (same as CI)
```

| Script                      | Purpose                                         |
| --------------------------- | ----------------------------------------------- |
| `npm run build` / `preview` | Production build to `dist/` / serve it locally  |
| `npm test` / `test:watch`   | Vitest + Testing Library                        |
| `npm run lint`              | ESLint (TypeScript, React hooks, accessibility) |
| `npm run format`            | Prettier, including Tailwind class ordering     |

CI (`.github/workflows/ci.yml`) runs the same checks on every push to `main` and on pull requests. Dependabot opens monthly dependency update PRs.

## Editing content

All copy lives in `src/content/` — components never need to change for a content update:

| File            | What it holds                                              |
| --------------- | ---------------------------------------------------------- |
| `profile.ts`    | Name, role, tagline, about paragraphs, email, social links |
| `experience.ts` | Jobs, roles, highlights, tech stack                        |
| `projects.ts`   | Project cards (image optional)                             |
| `skills.ts`     | Grouped skills list                                        |

To update the resume, replace `public/resume.pdf`.

## Structure

```
index.html            meta tags; loads public/theme.js before paint
src/
  main.tsx            entry; loads fonts and global CSS
  App.tsx             renders Header, Hero, every registered section, Footer
  sections.ts         section registry: order, ids, titles, which appear in the nav
  config.ts           external service settings (contact form, theme storage key)
  index.css           design tokens (light/dark) + small component classes
  components/         one file per section, plus Header, Hero, Section, Footer
  hooks/              useTheme, useActiveSection
  content/            all site copy (see above)
  test/               test setup
public/               favicon, resume.pdf, theme.js, robots.txt
```

### Adding a section

1. Create `src/components/Foo.tsx` that takes `SectionProps` and renders `<Section {...props}>`.
2. Add `{ id: "foo", title: "Foo", Component: Foo, inNav: true }` to `SECTIONS` in `src/sections.ts`.

The header nav, page order and tests all read from that list.

## Deploy

Netlify uses `netlify.toml` (`npm run build` → `dist`). Vercel auto-detects Vite with no config.

## Security

- `netlify.toml` sets a strict Content-Security-Policy plus HSTS, `nosniff`, framing and permissions headers. Inline scripts are blocked, which is why the theme bootstrap lives in `public/theme.js`. If you add a third-party script, font CDN or form service, allow its origin in the CSP.
- The contact form includes a Getform honeypot field (`_gotcha`) to drop bot submissions.
- Strip metadata from photos before adding them — phone cameras embed GPS coordinates.
