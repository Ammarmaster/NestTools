import { NextResponse } from 'next/server';
import { ADS_CONFIG } from '@/lib/ads-config';

export const dynamic = 'force-dynamic';

export function GET() {
  const rawId = ADS_CONFIG.adSenseClientId || process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-2523483363616029';
  const pubMatch = rawId.match(/pub-\d+/);
  const pubId = pubMatch ? pubMatch[0] : 'pub-2523483363616029';

  const content = `# Google AdSense Authorized Digital Sellers (ads.txt)
# Root domain: jobsio.in | Subdomain: toolnest.jobsio.in | ProDevOpz
google.com, ${pubId}, DIRECT, f08c47fec0942fa0
subdomain=toolnest.jobsio.in
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
