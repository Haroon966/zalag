# ZALAG AI

Marketing site for ZALAG AI, built with [Next.js](https://nextjs.org) and exported as static HTML for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Pages

The site is configured for static export (`output: "export"`) and deploys automatically from `main` via [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

### One-time repository setup

1. Push this repo to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Merge to `main` (or run the workflow manually). The site will be published at:

   `https://<username>.github.io/zalag/`

   For this repository: [https://haroon966.github.io/zalag/](https://haroon966.github.io/zalag/)

### Preview a GitHub Pages build locally

```bash
npm run build:gh-pages
npx serve out
```

Then open the URL shown by `serve` (paths are rooted at `/zalag` when using the preview build).

### Custom domain

To use a custom domain instead of `*.github.io`, add the domain in **Settings → Pages** and set `NEXT_PUBLIC_SITE_URL` in the workflow build step if you need canonical URLs in metadata to match.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production static export (root path, for local/Vercel-style hosting) |
| `npm run build:gh-pages` | Static export with `/zalag` base path (matches CI) |
| `npm run lint` | Run ESLint |
