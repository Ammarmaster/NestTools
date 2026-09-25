import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All 1,000+ Free Online Tools Directory (2026) | ToolNest',
  description:
    'Search, filter, and access 1,000+ free online calculators, converters, developer utilities, and PDF tools. Fast, browser-based, and 100% private with no login required.',
  alternates: {
    canonical: '/tools',
  },
  openGraph: {
    title: 'All 1,000+ Free Online Tools Directory | ToolNest',
    description:
      'Search and access 1,000+ free online calculators, converters, developer utilities, and PDF tools.',
    url: '/tools',
    images: ['/logo.png'],
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
