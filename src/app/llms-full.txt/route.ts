import { NextRequest, NextResponse } from 'next/server';
import { getBaseUrl } from '@/lib/site-config';
import { CATEGORY_LIST } from '@/data/categories';
import { ALL_TOOLS, getToolsByCategory } from '@/data/tools';

export const dynamic = 'force-dynamic';

export function GET(request: NextRequest) {
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const baseUrl = getBaseUrl(host, proto);

  let markdown = `# ToolNest - Complete Tool Catalog (1,000+ Tools)

> Complete machine-readable catalog of all 1,000+ browser-based tools and calculators available on ToolNest (https://toolnest.jobsio.in). Built by Md Jalaluddin Master (Ammar Master) and ProDevOpz.

Total Available Tools: ${ALL_TOOLS.length}
Execution Model: 100% Client-Side WebAssembly / JavaScript
Server Dependency: None (Zero tracking, zero storage)

`;

  for (const cat of CATEGORY_LIST) {
    const tools = getToolsByCategory(cat.id);
    markdown += `\n## ${cat.name} (${tools.length} Tools)\n`;
    markdown += `Category URL: ${baseUrl}/${cat.slug}\n\n`;

    for (const tool of tools) {
      markdown += `- [${tool.name}](${baseUrl}/${tool.category}/${tool.slug}): ${tool.description}\n`;
    }
  }

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}
