const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://holm-nima.dk';

// Define all your routes
const routes = [
  '',
  '/kontakt',
  '/sager',
  '/specialer',
  '/om-os',
  '/priser',
  '/blog',
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

// Write sitemap to public directory
fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);

console.log('Sitemap generated successfully!'); 