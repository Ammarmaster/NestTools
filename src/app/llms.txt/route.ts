import { NextRequest, NextResponse } from 'next/server';
import { getBaseUrl } from '@/lib/site-config';
import { CATEGORY_LIST } from '@/data/categories';
import { getPopularTools } from '@/data/tools';

export const dynamic = 'force-dynamic';

export function GET(request: NextRequest) {
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const baseUrl = getBaseUrl(host, proto);

  const popular = getPopularTools().slice(0, 10);

  const markdown = `# ToolNest

> 1,000+ fast, free, privacy-first browser-based online tools for students, software engineers, career professionals, and everyday tasks. 100% client-side processing with zero server tracking or login requirements.

ToolNest is an engineering suite developed by Md Jalaluddin Master (Ammar Master) and ProDevOpz (https://prodevopz.jobsio.in). All utilities run directly inside client web browsers using modern web standards (WebAssembly, Canvas, Web Crypto, and TypeScript) without transmitting user files or computations to any external server.

## Curated SEO Hubs & Search Engine

- [Search 1,000+ Tools](${baseUrl}/search): Live searchable directory with keyword tokens and category filters.
- [Free PDF Tools Suite](${baseUrl}/free-pdf-tools): Full client-side PDF & Image suite: Compress PDF, Protect with Password, Watermark, Sign, Page Numbers, PDF to Word DOCX, Merge, Split, Rotate, Image Resizer, and WebP/PNG/JPG converters.
- [Student Calculators](${baseUrl}/student-calculators): CGPA to percentage, SGPA, attendance requirement, and Pomodoro study timer.
- [Developer Utilities](${baseUrl}/developer-utilities): JSON formatter, Base64 encoder/decoder, SQL beautifier, and hash tools.
- [Finance & Salary Calculators](${baseUrl}/finance-calculators): In-hand salary, home loan EMI, GST tax breakdown, and compound interest.
- [Universal Unit Converters](${baseUrl}/unit-converters): Bidirectional conversion for length, mass, temperature, speed, and bytes.

## Tool Categories

${CATEGORY_LIST.map(
  (cat) => `- [${cat.name}](${baseUrl}/${cat.slug}): ${cat.description}`
).join('\n')}

## Most Popular Tools

${popular.map(
  (t) => `- [${t.name}](${baseUrl}/${t.category}/${t.slug}): ${t.description}`
).join('\n')}

## Architecture & Privacy Guarantee

- **Client-Side Execution:** All file conversions (PDF, Images), cryptographic operations (SHA, MD5), and mathematical calculations execute within the user's browser runtime.
- **Zero Data Retention:** No documents, passwords, or personal parameters are ever logged or uploaded to remote servers.
- **No Authentication Required:** Instant access to all 1,000+ tools without registration, accounts, or rate limits.

## Agent & Crawler Resources

- [Full LLM Catalog](${baseUrl}/llms-full.txt): Complete uncompressed index of all 1,000+ tools with metadata and endpoints.
- [Sitemap](${baseUrl}/sitemap.xml): Standard XML sitemap containing all verified indexable routes.
- [AI Resource Catalog](${baseUrl}/.well-known/ai-catalog.json): Machine-readable Agentic Resource Discovery (ARD) catalog.
- [Robots Directives](${baseUrl}/robots.txt): Crawler rules allowing all search and autonomous AI indexing bots.
`;

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}
