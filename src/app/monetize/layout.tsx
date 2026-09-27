import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Earn from Ads & Monetize Online Tools | ToolNest Monetization Guide',
  description:
    'Complete guide on making money from Google AdSense, affiliate sponsorships, and display ads on ToolNest. Interactive ad revenue calculator, approval checklist, and setup steps.',
  alternates: {
    canonical: '/monetize',
  },
  openGraph: {
    title: 'How to Earn from Ads & Monetize Online Tools | ToolNest',
    description:
      'Step-by-step blueprint to connect Google AdSense, configure ads.txt, calculate RPM earnings, and monetize online utility tools.',
    url: '/monetize',
    images: ['/logo.png'],
  },
};

export default function MonetizeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
