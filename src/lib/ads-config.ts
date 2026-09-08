/**
 * ToolNest Monetization & Ads Engine Configuration
 * Supports Google AdSense, direct sponsor units, and affiliate partner banners.
 */

export interface SponsorAd {
  id: string;
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  targetUrl: string;
  accentColor: string;
  icon?: string;
}

export const ADS_CONFIG = {
  // Enabled by default so the site can earn immediately
  enabled: true,

  // Google AdSense Publisher ID (e.g., 'ca-pub-1234567890123456')
  // Automatically reads from NEXT_PUBLIC_ADSENSE_CLIENT_ID if set in .env.local
  adSenseClientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '',

  // Fallback high-converting native sponsor units for students, developers, and professionals
  nativeSponsors: [
    {
      id: 'cloud-hosting',
      badge: 'Cloud Partner',
      title: 'Deploy Full-Stack Next.js Apps with $200 Free Credits',
      description: 'Ultra-fast SSD cloud servers, managed databases, and free global CDN for developer projects.',
      ctaText: 'Claim $200 Free Credits →',
      targetUrl: 'https://digitalocean.com',
      accentColor: 'from-blue-600 to-indigo-600',
    },
    {
      id: 'ai-resume',
      badge: 'Career Partner',
      title: 'Land 3x More Interviews with AutoResume AI',
      description: 'Scan your resume against 50,000+ job descriptions and beat ATS filters automatically.',
      ctaText: 'Optimize Resume Free →',
      targetUrl: 'https://autoresume.ai',
      accentColor: 'from-violet-600 to-purple-600',
    },
    {
      id: 'student-pack',
      badge: 'Student Partner',
      title: 'GitHub Student Developer Pack — $1,000+ in Free Software',
      description: 'Claim free GitHub Copilot, JetBrains IDE licenses, domain names, and cloud credits.',
      ctaText: 'Unlock Student Benefits →',
      targetUrl: 'https://education.github.com/pack',
      accentColor: 'from-emerald-600 to-teal-600',
    },
    {
      id: 'vpn-privacy',
      badge: 'Privacy Partner',
      title: 'High-Speed No-Logs VPN for Remote Work & Browsing',
      description: 'Military-grade encryption and ultra-fast servers worldwide with 70% exclusive discount.',
      ctaText: 'Get 70% Off Today →',
      targetUrl: 'https://protonvpn.com',
      accentColor: 'from-amber-600 to-rose-600',
    },
  ] as SponsorAd[],
};
