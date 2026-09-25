import { NextRequest, NextResponse } from 'next/server';
import { getBaseUrl } from '@/lib/site-config';
import { CATEGORY_LIST } from '@/data/categories';
import { ALL_TOOLS } from '@/data/tools';

export const dynamic = 'force-dynamic';

export function GET(request: NextRequest) {
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const baseUrl = getBaseUrl(host, proto);

  const catalog = {
    $schema: 'https://agenticresourcediscovery.org/schemas/v1/ai-catalog.json',
    version: '1.0',
    name: 'ToolNest',
    description: '1,000+ fast, free browser-based online tools for students, developers, engineers, and everyday tasks. 100% private, client-side execution.',
    homepage: baseUrl,
    publisher: {
      name: 'ProDevOpz',
      url: 'https://prodevopz.jobsio.in',
      founder: 'Md Jalaluddin Master (Ammar Master)',
    },
    resources: {
      llmsTxt: `${baseUrl}/llms.txt`,
      llmsFullTxt: `${baseUrl}/llms-full.txt`,
      sitemap: `${baseUrl}/sitemap.xml`,
      robots: `${baseUrl}/robots.txt`,
    },
    capabilities: {
      totalTools: ALL_TOOLS.length,
      clientSideProcessing: true,
      requiresAuthentication: false,
      privacyGuarantee: 'Zero server logging or storage of user inputs',
      categories: CATEGORY_LIST.map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        url: `${baseUrl}/${c.slug}`,
        description: c.description,
      })),
    },
  };

  return NextResponse.json(catalog, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}
