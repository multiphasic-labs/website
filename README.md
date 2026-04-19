# Multiphasic Labs Website

Website for [Multiphasic Labs](https://github.com/multiphasic-labs), with links to our [Clinical Testing Tool](https://github.com/multiphasic-labs/clinical-testing-tool) MVP.

## Run locally

Open `index.html` in a browser, or use a local server:

```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Structure

- `index.html` — Home
- `about.html` — About us, mission, beliefs
- `product.html` — Mental Health Safety Tester overview and features
- `contact.html` — Get in touch / GitHub
- `styles.css` — Shared styles
- `sitemap.xml` — Sitemap for search engines (`https://multiphasiclabs.com/sitemap.xml`)
- `robots.txt` — Crawl rules and sitemap reference
- `assets/` — Logo, favicon, images

No build step required.

## Hosting: GitHub Pages vs Firebase

This site is **static files only** (HTML/CSS). It does **not** use Redis or any server runtime in this repository. Daily charges from **Redis on Google Cloud** come from **another** GCP resource (e.g. Memorystore, a VM, or an app you deployed that provisions cache). Switching *this* repo to Firebase does **not** remove those charges—you have to **delete or resize** that Redis instance (or the project that creates it) in the [Google Cloud Console](https://console.cloud.google.com/) billing and resource pages.

**Firebase Hosting** is a good fit for this site: global CDN, HTTPS, low or zero cost at small traffic. It is **not** a replacement for Redis; it only serves static assets. If you also need a database, auth, or APIs, those are separate Firebase products (Firestore, etc.).

Deploy with the [Firebase CLI](https://firebase.google.com/docs/cli) after `firebase login` and `firebase init` (or link an existing project):

```bash
npm install -g firebase-tools
firebase login
firebase use --add   # pick your Firebase project; creates .firebaserc (gitignored is optional)
firebase deploy --only hosting
```

`firebase.json` in this repo points Hosting at the project root and ignores `.git` and dotfiles.

## SEO

After deploying, add the site in [Google Search Console](https://search.google.com/search-console) and submit `https://multiphasiclabs.com/sitemap.xml`. Pages include meta descriptions, canonical URLs, Open Graph / Twitter cards, and JSON-LD structured data.
