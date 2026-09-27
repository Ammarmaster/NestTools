import fs from 'fs';
import path from 'path';
import { ALL_TOOLS } from '../src/data/tools';
import { CATEGORY_LIST } from '../src/data/categories';

const baseUrl = 'https://toolnest.jobsio.in';
const currentDate = new Date().toISOString().split('T')[0];

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const staticPages = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: '/search', priority: '0.95', changefreq: 'daily' },
  { path: '/popular-tools', priority: '0.95', changefreq: 'daily' },
  { path: '/free-pdf-tools', priority: '0.95', changefreq: 'daily' },
  { path: '/student-calculators', priority: '0.95', changefreq: 'daily' },
  { path: '/developer-utilities', priority: '0.95', changefreq: 'daily' },
  { path: '/finance-calculators', priority: '0.95', changefreq: 'daily' },
  { path: '/unit-converters', priority: '0.95', changefreq: 'daily' },
  { path: '/tools', priority: '0.90', changefreq: 'daily' },
  { path: '/monetize', priority: '0.85', changefreq: 'weekly' },
  { path: '/founder', priority: '0.85', changefreq: 'weekly' },
  { path: '/ammar-master', priority: '0.85', changefreq: 'weekly' },
  { path: '/about', priority: '0.70', changefreq: 'monthly' },
  { path: '/contact', priority: '0.70', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.60', changefreq: 'monthly' },
  { path: '/terms', priority: '0.60', changefreq: 'monthly' },
  { path: '/disclaimer', priority: '0.60', changefreq: 'monthly' },
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// 1. Core High-Priority Pages
for (const page of staticPages) {
  xml += `  <url>
    <loc>${escapeXml(`${baseUrl}${page.path}`)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
}

// 2. Category Hubs
for (const cat of CATEGORY_LIST) {
  xml += `  <url>
    <loc>${escapeXml(`${baseUrl}/${cat.slug}`)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.90</priority>
  </url>
`;
}

// 3. All Tool Pages
for (const tool of ALL_TOOLS) {
  const priority = tool.popular ? '0.85' : '0.80';
  const changefreq = tool.popular ? 'daily' : 'weekly';
  xml += `  <url>
    <loc>${escapeXml(`${baseUrl}/${tool.category}/${tool.slug}`)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
}

xml += `</urlset>`;

const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');

console.log(`Generated sitemap with ${staticPages.length + CATEGORY_LIST.length + ALL_TOOLS.length} URLs at ${outputPath}`);
