import { NextRequest, NextResponse } from 'next/server';
import { ALL_TOOLS } from '@/data/tools';
import { getBaseUrl } from '@/lib/site-config';

export const dynamic = 'force-dynamic';

const INDEXNOW_KEY = 'toolnest2026indexnowkeyjobsio';

export async function GET(request: NextRequest) {
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host') || 'toolnest.jobsio.in';
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const baseUrl = getBaseUrl(host, proto);

  const cleanHost = host.replace(/:\d+$/, '');

  // Select top 1,000 URLs to submit to IndexNow
  const urlList = [
    baseUrl,
    `${baseUrl}/search`,
    `${baseUrl}/popular-tools`,
    `${baseUrl}/student-calculators`,
    `${baseUrl}/finance-calculators`,
    `${baseUrl}/unit-converters`,
    `${baseUrl}/developer-utilities`,
    `${baseUrl}/free-pdf-tools`,
    ...ALL_TOOLS.slice(0, 990).map((tool) => `${baseUrl}/${tool.category}/${tool.slug}`),
  ];

  try {
    const payload = {
      host: cleanHost,
      key: INDEXNOW_KEY,
      keyLocation: `${baseUrl}/indexnow-key.txt`,
      urlList,
    };

    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: res.ok,
      status: res.status,
      message: res.ok ? 'Successfully submitted URLs to IndexNow network (Bing, Yandex, Naver)' : 'IndexNow submission failed',
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
