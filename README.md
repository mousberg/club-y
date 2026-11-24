# Club Y

[club-y.co](https://club-y.co) is one page: the mark, the wordmark, a line that rolls through the cities, and the Workshop Lab credit. Static, no cookies, no third-party requests.

## Run

Needs Node 22.23.4 or newer (`node -v`). With nvm, `nvm install` in this folder installs the right one.

```
npm install
npm run dev       # http://localhost:4323
npm run build     # static site -> dist/
npm run preview   # serve dist/
```

## Where things live

| To change | Edit |
| --- | --- |
| The statement, the cities, the wordmark | `src/pages/index.astro` |
| Colours, type, spacing, the lilac light | `src/styles/global.css` |
| Head, SEO, share image, mark, footer | `src/layouts/Base.astro` |
| Privacy policy (at `/privacy`, not linked from the home page) | `src/pages/privacy.astro` |
| Not-found page | `src/pages/404.astro` |
| Typeface, security policy, dev port | `astro.config.mjs` |
| Icons, share image, cursor, robots.txt | `public/` |

The sitemap is generated from the pages in `src/pages/`.

## Fundamentals

- **Stack.** [Astro](https://astro.build) 7, built to static files. The only JavaScript is the 0.4 KB that rolls the cities.
- **Weight.** The home page is one HTML document with its CSS inside (about 4 KB gzipped), two font files (34 KB) and the mark.
- **Type.** Instrument Sans (Open Font License), downloaded at build time and served from this site.
- **Motion.** The lilac light drifts, the wordmark and statement rise in, the city rolls. With "reduce motion" on, the light is still and the city fades.
- **Security.** A content security policy in each page allows only what this site serves. Adding an outside script, font or image means allowing it in `astro.config.mjs`.

## Ship

GitHub Pages. Every push to `main` is built and published by `.github/workflows/deploy.yml`.

In the repository's **Settings, Pages**, the source must be **GitHub Actions** (not "Deploy from a branch"), and the custom domain `club-y.co` is set there.
