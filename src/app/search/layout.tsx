import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search 1,000+ Free Online Tools | Instant Tool Finder | ToolNest',
  description:
    'Search and instantly filter over 1,000+ free online calculators, PDF converters, unit converters, developer utilities, and student tools. 100% private, instant, and mobile-friendly.',
  alternates: {
    canonical: '/search',
  },
  openGraph: {
    title: 'Search 1,000+ Free Online Tools | ToolNest',
    description:
      'Find the exact online tool you need in seconds: PDF tools, salary calculators, JSON formatters, and unit converters.',
    url: '/search',
    images: ['/logo.png'],
  },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
