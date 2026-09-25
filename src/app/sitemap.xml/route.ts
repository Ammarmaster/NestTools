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

  // Static routes
  const staticPages = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: '/popular-tools', priority: '0.95', changefreq: 'daily' },
    { path: '/tools', priority: '0.9', changefreq: 'daily' },
    { path: '/founder', priority: '0.85', changefreq: 'weekly' },
    { path: '/ammar-master', priority: '0.85', changefreq: 'weekly' },
    { path: '/about', priority: '0.7', changefreq: 'monthly' },
    { path: '/contact', priority: '0.7', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.6', changefreq: 'monthly' },
    { path: '/terms', priority: '0.6', changefreq: 'monthly' },
    { path: '/disclaimer', priority: '0.6', changefreq: 'monthly' },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  // 1. Core Pages
  for (const page of staticPages) {
    xml += `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <image:image>
      <image:loc>${baseUrl}/logo.png</image:loc>
      <image:title>ToolNest - 1,000+ Free Online Tools</image:title>
    </image:image>
  </url>
`;
  }

  // 2. Category Hubs (Daily high priority)
  for (const cat of CATEGORY_LIST) {
    xml += `  <url>
    <loc>${baseUrl}/${cat.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${baseUrl}/logo.png</image:loc>
      <image:title>${cat.name} - Free Online Tools</image:title>
      <image:caption>${cat.description}</image:caption>
    </image:image>
  </url>
`;
  }

  // 3. All 1,000+ Tool Pages
  for (const tool of ALL_TOOLS) {
    const priority = tool.popular ? '0.85' : '0.80';
    const changefreq = tool.popular ? 'daily' : 'weekly';
    xml += `  <url>
    <loc>${baseUrl}/${tool.category}/${tool.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <image:image>
      <image:loc>${baseUrl}/logo.png</image:loc>
      <image:title>${tool.name} - Free Online Tool</image:title>
      <image:caption>${tool.description}</image:caption>
    </image:image>
  </url>
`;
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
