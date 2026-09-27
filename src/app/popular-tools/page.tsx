import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getPopularTools, ALL_TOOLS } from '@/data/tools';
import { CATEGORIES } from '@/data/categories';
import { ToolCard } from '@/components/tools/ToolCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DynamicIcon } from '@/components/ui/icon-renderer';
import { TopAdSlot, BottomAdSlot } from '@/components/ads/AdSlot';
import { Flame, Sparkles, ShieldCheck, Zap, ArrowRight, Star, HelpCircle } from 'lucide-react';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Top 50 Most Popular Free Online Tools (${currentYear}) | ToolNest`,
  description:
    'Discover the top 50 most popular and trending free browser-based online tools for students, software engineers, and professionals. 100% free, private, and instant.',
  alternates: {
    canonical: '/popular-tools',
  },
  openGraph: {
    title: `Top 50 Most Popular Free Online Tools (${currentYear}) | ToolNest`,
    description:
      'Explore the most loved student calculators, developer utilities, PDF converters, and salary calculators.',
    url: '/popular-tools',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Top 50 Most Popular Free Online Tools (${currentYear}) | ToolNest`,
    description:
      'Explore the most loved student calculators, developer utilities, PDF converters, and salary calculators.',
    images: ['/logo.png'],
  },
};

export default function PopularToolsPage() {
  const popularTools = getPopularTools();

  const faqs = [
    {
      q: 'Are all popular tools on ToolNest completely free?',
      a: 'Yes, 100% of the tools on ToolNest are completely free to use with zero hidden subscriptions, paywalls, or feature gates.',
    },
    {
      q: 'Does ToolNest store or track my data or uploaded files?',
      a: 'No. All conversions (including PDF to Word, image compression, and calculations) execute entirely inside your local browser memory via WebAssembly and JavaScript. Zero data is stored or transmitted to our servers.',
    },
    {
      q: 'Do I need an account or software installation?',
      a: 'No signup, email, or software installation is required. Every tool works instantly on mobile, tablet, and desktop devices.',
    },
  ];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Top 50 Most Popular Free Online Tools (${currentYear})`,
    description:
      'The most used and highest rated browser-based tools on ToolNest for students, developers, and career professionals.',
    url: 'https://toolnest.jobsio.in/popular-tools',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: popularTools.slice(0, 30).map((tool, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: tool.name,
        url: `https://toolnest.jobsio.in/${tool.category}/${tool.slug}`,
        description: tool.description,
      })),
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="w-full max-w-6xl mx-auto pb-16 space-y-12">
        <Breadcrumbs items={[{ name: 'Popular Tools', url: '/popular-tools' }]} />

        {/* Hero Header */}
        <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-b from-indigo-50/70 via-white to-white p-8 sm:p-12 text-center dark:border-zinc-800 dark:from-indigo-950/20 dark:via-zinc-950 dark:to-zinc-950 shadow-xs">
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/80 px-3.5 py-1 text-xs font-bold text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/50 dark:text-rose-300">
              <Flame className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
              <span>Trending & Most Used • {currentYear} Edition</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              Top Most Popular Free Online Tools
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Hand-picked and verified tools used by tens of thousands of students, developers, engineers, and professionals daily. Instant client-side computation with zero signup.
            </p>

            {/* Quick Stats Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span>4.9 / 5 Average Rating</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                <span>100% Client-Side Private</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                <Zap className="h-3.5 w-3.5 text-indigo-500" />
                <span>Instant Zero Latency</span>
              </span>
            </div>
          </div>
        </section>

        {/* Top Banner Ad */}
        <TopAdSlot />

        {/* Popular Tools Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Trending Utilities ({popularTools.length})
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                Click any tool below to launch immediately
              </p>
            </div>
            <Link
              href="/tools"
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
            >
              <span>View All 1,000+ Tools</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} showCategory={true} />
            ))}
          </div>
        </section>

        {/* Informational SEO & Trust Section */}
        <section className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Why Users Choose ToolNest Daily
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-3xl">
              ToolNest was engineered by Md Jalaluddin Master (Ammar Master) and the ProDevOpz team to eliminate clunky, ad-bloated online utility sites. Most traditional web tools upload your sensitive files, documents, and calculations to remote servers. ToolNest is architected from the ground up for 100% client-side execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>Zero Server Uploads</span>
              </h3>
              <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                PDFs, images, and text inputs never leave your computer or phone. Your confidential data remains strictly yours.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Zap className="h-4 w-4 text-indigo-500" />
                <span>Lightning Fast Performance</span>
              </h3>
              <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                Built with modern WebAssembly and optimized JavaScript, calculations compute in single-digit milliseconds.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span>No Paywalls or Signups</span>
              </h3>
              <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                Every single one of our 1,000+ tools is completely free forever. Bookmark and use whenever needed.
              </p>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 space-y-4">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-indigo-500" />
              <span>Frequently Asked Questions</span>
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-950/40">
                  <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                    {faq.q}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Ad Unit */}
        <BottomAdSlot />
      </div>
    </>
  );
}
