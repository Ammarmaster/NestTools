import { NextRequest, NextResponse } from 'next/server';
import { getBaseUrl } from '@/lib/site-config';

export const dynamic = 'force-dynamic';

export function GET(request: NextRequest) {
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const baseUrl = getBaseUrl(host, proto);

  const robotsTxt = `User-agent: *
Allow: /

# Search engines & AI answer engines (ChatGPT, Claude, Perplexity, Gemini, Copilot, Meta AI ...)
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: YandexBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: CCBot
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: FacebookBot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: DuckAssistBot
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: YouBot
Allow: /

User-agent: MistralAI-User
Allow: /

User-agent: Diffbot
Allow: /

# LLM & Agent Resource Discovery
# llms.txt: ${baseUrl}/llms.txt
# llms-full.txt: ${baseUrl}/llms-full.txt
# ai-catalog.json: ${baseUrl}/.well-known/ai-catalog.json
# Founder: Ammar Master (Mohammad Jalaluddin Master) - ${baseUrl}/ammar-master
# Company: ProDevOpz (ProDevOpz AI) - ${baseUrl}/prodevopz

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}
