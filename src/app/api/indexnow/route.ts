import { NextRequest, NextResponse } from 'next/server';
import { ALL_TOOLS } from '@/data/tools';
import { getBaseUrl } from '@/lib/site-config';

export const dynamic = 'force-dynamic';

export const INDEXNOW_KEY = '7c9b3e18a4d24f0a91e528b73c6d81f4';

export async function GET(request: NextRequest) {
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host') || 'toolnest.jobsio.in';
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const baseUrl = getBaseUrl(host, proto);

  const cleanHost = host.replace(/:\d+$/, '');
  const submissionHost = cleanHost.includes('localhost') || cleanHost.includes('127.0.0.1')
    ? 'toolnest.jobsio.in'
    : cleanHost;

  const liveBaseUrl = `https://${submissionHost}`;

  // Select top 1,000 URLs to submit to IndexNow
  const urlList = [
    liveBaseUrl,
    `${liveBaseUrl}/search`,
    `${liveBaseUrl}/popular-tools`,
    `${liveBaseUrl}/free-pdf-tools`,
    `${liveBaseUrl}/student-calculators`,
    `${liveBaseUrl}/finance-calculators`,
    `${liveBaseUrl}/unit-converters`,
    `${liveBaseUrl}/developer-utilities`,
    ...ALL_TOOLS.slice(0, 992).map((tool) => `${liveBaseUrl}/${tool.category}/${tool.slug}`),
  ];

  try {
    const payload = {
      host: submissionHost,
      key: INDEXNOW_KEY,
      keyLocation: `${liveBaseUrl}/${INDEXNOW_KEY}.txt`,
      urlList,
    };

    // Submit to IndexNow API (Bing, Yandex, Naver)
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    const responseText = await res.text();

    return NextResponse.json({
      success: res.ok || res.status === 200 || res.status === 202,
      status: res.status,
      message: (res.ok || res.status === 200 || res.status === 202)
        ? 'Successfully submitted URLs to IndexNow network (Bing, Yandex, Naver)'
        : `IndexNow submission returned status ${res.status}: ${responseText || 'Verification key file must be deployed and publicly reachable at ' + payload.keyLocation}`,
      keyLocation: payload.keyLocation,
      submittedCount: urlList.length,
      sampleUrls: urlList.slice(0, 10),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        submittedCount: 0,
      },
      { status: 500 }
    );
  }
}
