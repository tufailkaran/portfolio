# Muhammad Tufail — Portfolio

Personal portfolio of Muhammad Tufail, Senior Magento / Adobe Commerce Developer.

**Live:** https://tufailkaran.github.io/portfolio/

## Stack

- React 19 + Vite
- Framer Motion for animations
- Plain CSS with design tokens (no UI framework)
- Deployed to GitHub Pages via `gh-pages`

## Sections

- **Hero** — intro with a developer profile code card
- **Stats** — experience at a glance
- **Services** — specialized offerings
- **Projects** — 20 enterprise case studies with category filters (Magento, Warehouse & Logistics, Full Stack, WordPress)
- **Experience** — career timeline, education, and certifications
- **Skills** — grouped technical proficiency
- **Contact** — direct channels and resume download

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run lint     # eslint
npm run deploy   # publish dist/ to GitHub Pages
```

## Content

All portfolio content (projects, skills, experience, services, contact info) lives in
`src/data/content.js` — edit that single file to update the site.

Project cover images live in `public/covers/` (generated SVGs) alongside real
screenshots in `public/`.
