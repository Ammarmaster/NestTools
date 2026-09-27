import { NextRequest, NextResponse } from 'next/server';
import { ALL_TOOLS } from '@/data/tools';
import { CATEGORY_LIST } from '@/data/categories';
import { getBaseUrl } from '@/lib/site-config';

export const dynamic = 'force-dynamic';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET(request: NextRequest) {
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const baseUrl = getBaseUrl(host, proto);

  // W3C date format (YYYY-MM-DD) standard for Google Search Console
  const currentDate = new Date().toISOString().split('T')[0];

  // Core high-intent SEO pages
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

  // 2. Category Hubs (Daily high priority)
  for (const cat of CATEGORY_LIST) {
    xml += `  <url>
    <loc>${escapeXml(`${baseUrl}/${cat.slug}`)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.90</priority>
  </url>
`;
  }

  // 3. All 1,000+ Tool Pages
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

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}
