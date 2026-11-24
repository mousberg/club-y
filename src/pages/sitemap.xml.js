// Every page except the 404, read from this folder, so a new page is listed the moment it exists.
const pages = Object.keys(import.meta.glob(['./*.astro', '!./404.astro']));

export function GET({ site }) {
  const urls = pages
    .map((file) => file.replace(/^\.\/(index)?/, '/').replace(/\.astro$/, ''))
    .map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
