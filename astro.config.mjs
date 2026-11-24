// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://club-y.co',
  trailingSlash: 'never',
  build: {
    format: 'file', // privacy.html, which GitHub Pages serves as /privacy (and the old /privacy.html keeps working)
    inlineStylesheets: 'always', // the whole site's CSS is a few KB: ship it in the HTML, no extra request
  },
  // A port of its own: workshop-lab uses 4321 and 4322, and Safari remembers a site's icon per address.
  server: { port: 4323 },
  devToolbar: { enabled: false },
  // Saans by Displaay, the Workshop Lab typeface, served from this site. Licensed: see the README.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Saans',
      cssVariable: '--font-sans',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          { weight: 400, style: 'normal', src: ['./src/assets/fonts/Sa-Reg.woff2'] },
          { weight: 500, style: 'normal', src: ['./src/assets/fonts/Sa-Me.woff2'] },
        ],
      },
    },
  ],
  // Sent as a <meta> tag, since GitHub Pages cannot set headers: a page may only load what this site serves.
  // Not applied by `npm run dev`; check with `npm run build && npm run preview`.
  security: {
    csp: { directives: ["default-src 'self'", "base-uri 'self'", "form-action 'none'"] },
  },
});
