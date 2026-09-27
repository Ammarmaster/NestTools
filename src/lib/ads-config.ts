/**
 * ToolNest Monetization & Ads Engine Configuration
 * Supports Google AdSense, direct sponsor units, and affiliate partner banners.
 *
 * HOW TO EARN FROM ADS:
 * 1. Sign up at https://adsense.google.com
 * 2. Get approved (ToolNest has all necessary legal pages, high-utility tools, and clean structure).
 * 3. Add your Publisher ID (e.g. ca-pub-1234567890123456) to .env.local as NEXT_PUBLIC_ADSENSE_CLIENT_ID.
 * 4. Google Auto-Ads & AdSlot units will automatically display live ads and pay directly to your bank.
 */

export interface SponsorAd {
  id: string;
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  targetUrl: string;
  accentColor: string;
  category?: string;
  icon?: string;
}

export const ADS_CONFIG = {
  // Enabled by default so the site can earn immediately
  enabled: true,

  // Google AdSense Publisher ID
  // Automatically reads from NEXT_PUBLIC_ADSENSE_CLIENT_ID or defaults to user's client ID
  adSenseClientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-2523483363616029',

  // Fallback high-converting native sponsor units for students, developers, and professionals
  // While awaiting AdSense approval, these units monetize traffic via high-converting developer & student services
  nativeSponsors: [
    {
      id: 'cloud-hosting',
      badge: 'Cloud Partner',
      title: 'Deploy Full-Stack Next.js Apps with $200 Free Credits',
      description: 'Ultra-fast NVMe cloud servers, managed PostgreSQL/Redis databases, and free global CDN for developer side-projects.',
      ctaText: 'Claim $200 Free Credits →',
      targetUrl: 'https://m.do.co/c/prodevopz',
      accentColor: 'from-blue-600 to-indigo-600',
      category: 'developer',
    },
    {
      id: 'ai-resume',
      badge: 'Career Partner',
      title: 'Land 3x More Interviews with AutoResume AI',
      description: 'Scan your resume against 50,000+ job descriptions, beat ATS keyword filters, and craft customized cover letters.',
      ctaText: 'Optimize Resume Free →',
      targetUrl: 'https://autoresume.ai?ref=toolnest',
      accentColor: 'from-violet-600 to-purple-600',
      category: 'career',
    },
    {
      id: 'student-pack',
      badge: 'Student Partner',
      title: 'GitHub Student Developer Pack — $1,000+ in Free Software',
      description: 'Claim free GitHub Copilot, JetBrains All-Products IDE licenses, free .me domains, and $100 Azure cloud credits.',
      ctaText: 'Unlock Student Benefits →',
      targetUrl: 'https://education.github.com/pack',
      accentColor: 'from-emerald-600 to-teal-600',
      category: 'student',
    },
    {
      id: 'vpn-privacy',
      badge: 'Privacy Partner',
      title: 'High-Speed No-Logs VPN for Remote Work & Streaming',
      description: 'Military-grade ChaCha20 encryption, DNS leak protection, and ultra-fast 10Gbps servers with 70% exclusive discount.',
      ctaText: 'Get 70% Off Today →',
      targetUrl: 'https://protonvpn.com?ref=toolnest',
      accentColor: 'from-amber-600 to-rose-600',
      category: 'privacy',
    },
    {
      id: 'domain-hosting',
      badge: 'Web Hosting',
      title: 'Get Free Domain & 80% Off Fast Web Hosting',
      description: 'Launch your website or portfolio in under 5 minutes with free SSL, automated backups, and 24/7 technical support.',
      ctaText: 'Explore Hosting Plans →',
      targetUrl: 'https://namecheap.pxf.io/c/toolnest',
      accentColor: 'from-orange-600 to-amber-600',
      category: 'finance',
    },
  ] as SponsorAd[],
};

export function isAdSenseActive(): boolean {
  return Boolean(ADS_CONFIG.enabled && ADS_CONFIG.adSenseClientId);
}

