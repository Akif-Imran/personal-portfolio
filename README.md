# Akif Imran — Portfolio

Personal portfolio for Akif Imran, Senior Full-Stack & React Engineer.
Built with Next.js 16 (App Router, Cache Components), React 19 and Tailwind CSS v4.
The whole site is prerendered as static output.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
```

## Editing content

All copy lives in [`lib/content.ts`](lib/content.ts): profile, impact metrics,
projects, experience, skills, principles and credentials. Components only render it.

- **Résumé:** replace `public/Akif_Imran_CV.pdf`.
- **Social links:** edit `socials` (a GitHub entry is stubbed out, ready to enable).
- **Colours and type:** design tokens are at the top of [`app/globals.css`](app/globals.css),
  with matching light and dark sets.

## Deploying

Set `NEXT_PUBLIC_SITE_URL` (for example `https://akifimran.dev`) so Open Graph
and Twitter cards resolve to absolute URLs.

## Structure

```
app/
  layout.tsx            fonts, metadata, flash-free theme script
  page.tsx              section composition + Person JSON-LD
  opengraph-image.tsx   generated social card
  icon.svg              favicon
components/
  sections/             hero, impact, work, experience, expertise, about, contact, footer
  project-art.tsx       SVG figures for featured projects
  site-header.tsx       sticky nav, active-section tracking, mobile menu (client)
  theme-toggle.tsx      light/dark switch with View Transitions (client)
lib/
  content.ts            all site copy
  theme.ts              inline pre-paint theme script
```
