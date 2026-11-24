// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://club-y.co',
  trailingSlash: 'never',
  build: {
    format: 'file', // privacy.html, which GitHub Pages serves as /privacy (and the old /privacy.html keeps working)
    inlineStylesheets: 'always', // the whole site's CSS is a few KB: ship it in the HTML, no extra request
  },
  devToolbar: { enabled: false },
  // Downloaded at build time and served from this site, so pages make no third-party requests.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Instrument Sans',
      cssVariable: '--font-sans',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
