import { NextRequest, NextResponse } from 'next/server';
import { ALL_TOOLS } from '@/data/tools';
import { CATEGORY_LIST } from '@/data/categories';
import { getBaseUrl } from '@/lib/site-config';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const baseUrl = getBaseUrl(host, proto);

  const currentDate = new Date().toISOString();

  // Static routes (9 core pages)
  const staticPages = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: '/tools', priority: '0.9', changefreq: 'daily' },
    { path: '/founder', priority: '0.9', changefreq: 'weekly' },
    { path: '/ammar-master', priority: '0.9', changefreq: 'weekly' },
    { path: '/about', priority: '0.6', changefreq: 'monthly' },
    { path: '/contact', priority: '0.6', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.5', changefreq: 'monthly' },
    { path: '/terms', priority: '0.5', changefreq: 'monthly' },
    { path: '/disclaimer', priority: '0.5', changefreq: 'monthly' },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // 1. Static Pages
  for (const page of staticPages) {
    xml += `  <url>\n    <loc>${baseUrl}${page.path}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>\n`;
  }

  // 2. Category Pages
  for (const cat of CATEGORY_LIST) {
    xml += `  <url>\n    <loc>${baseUrl}/${cat.slug}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  }

  // 3. All 1,000+ Tool Pages
  for (const tool of ALL_TOOLS) {
    xml += `  <url>\n    <loc>${baseUrl}/${tool.category}/${tool.slug}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${tool.popular ? '0.85' : '0.75'}</priority>\n  </url>\n`;
  }

  xml += `</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}
