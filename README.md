# Multiphasic Labs Website

Website for [Multiphasic Labs](https://github.com/multiphasic-labs), with links to our [Clinical Testing Tool](https://github.com/multiphasic-labs/clinical-testing-tool) MVP.

Live at [multiphasiclabs.com](https://multiphasiclabs.com).

## Run locally

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

## Stack

- [Next.js 14](https://nextjs.org/) with static export
- [Tailwind CSS](https://tailwindcss.com/)
- Hosted on GitHub Pages with a custom domain

## Deployment

Pushes to `main` automatically build and deploy via GitHub Actions. The workflow runs `npm run build`, which exports the site to `out/`, then deploys that to GitHub Pages.

No manual deployment steps needed.

## SEO

Pages include meta descriptions, canonical URLs, Open Graph / Twitter cards, and JSON-LD structured data. After any domain change, update [Google Search Console](https://search.google.com/search-console) and resubmit `https://multiphasiclabs.com/sitemap.xml`.
