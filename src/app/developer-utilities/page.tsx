import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getToolsByCategory } from '@/data/tools';
import { ToolCard } from '@/components/tools/ToolCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { TopAdSlot, ContentAdSlot, BottomAdSlot } from '@/components/ads/AdSlot';
import {
  Code2,
  Terminal,
  ShieldCheck,
  Zap,
  ArrowRight,
  HelpCircle,
  Cpu,
  KeyRound,
} from 'lucide-react';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Developer Utilities & Code Formatters (${currentYear}) – 100% Private | ToolNest`,
  description:
    'Free online developer toolkit: JSON formatter & validator, SQL beautifier, Base64 encoder/decoder, JWT inspector, Hash generator (SHA256, MD5), and Regex tester. Client-side execution with zero token leakage.',
  alternates: {
    canonical: '/developer-utilities',
  },
  openGraph: {
    title: `Developer Utilities & Code Formatters (${currentYear}) | ToolNest`,
    description:
      'Fast, offline-ready developer utilities: JSON formatting, SQL queries, Base64 encoding, and cryptographic hashes.',
    url: '/developer-utilities',
    images: ['/logo.png'],
  },
};

export default function DeveloperUtilitiesPage() {
  const devTools = getToolsByCategory('developer');

  const faqs = [
    {
      q: 'Is it safe to format production JSON or decode JWT tokens here?',
      a: 'Yes! Unlike cloud-based dev tools that send payloads over the wire to backend API servers (risking accidental exposure of API keys, bearer tokens, or PII), ToolNest runs all parsers, formatters, and crypto operations strictly in your local browser JavaScript engine. No payload ever leaves your device.',
    },
    {
      q: 'Does ToolNest support large JSON payloads?',
      a: 'Yes. The JSON formatter handles multi-megabyte payloads smoothly using native browser JSON parsing and efficient DOM rendering without crashing your tab.',
    },
    {
      q: 'Can I verify JWT tokens without exposing the private secret?',
      a: 'Yes. Our JWT decoder inspects the base64-url encoded Header and Payload sections client-side, showing the expiration date, issuer, audience, and claims without sending tokens to any server.',
    },
  ];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Free Developer Utilities & Code Tools (${currentYear})`,
    description:
      'Client-side developer toolbox for formatting JSON, beautifying SQL, encoding Base64, and generating crypto hashes.',
    url: 'https://toolnest.jobsio.in/developer-utilities',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: devTools.map((tool, idx) => ({
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
        <Breadcrumbs items={[{ name: 'Developer Utilities', url: '/developer-utilities' }]} />

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-b from-indigo-50/70 via-white to-white p-8 sm:p-12 text-center dark:border-zinc-800 dark:from-indigo-950/20 dark:via-zinc-950 dark:to-zinc-950 shadow-xs">
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 dark:border-indigo-900/60 dark:bg-indigo-950/60 dark:text-indigo-300">
              <Code2 className="h-3.5 w-3.5" />
              <span>Engineered for Software Engineers & DevOps</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              Developer Utilities & Code Formatters
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Format messy JSON, beautify complex SQL queries, inspect JWT headers, test regular expressions, and generate SHA256 hashes with 100% browser-side privacy.
            </p>
          </div>
        </section>

        {/* Top Banner Ad Placement */}
        <TopAdSlot />

        {/* Dev Tools Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-indigo-500" />
                <span>Featured Developer Utilities ({devTools.length})</span>
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                Instant execution with syntax highlighting and zero server latency
              </p>
            </div>
            <Link
              href="/tools"
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
            >
              <span>Explore All 1,000+ Tools</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {devTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} showCategory={false} />
            ))}
          </div>
        </section>

        {/* Mid-Content Ad Placement */}
        <ContentAdSlot />

        {/* Security & Privacy Commitment */}
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60 space-y-6">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Zero-Trust Architecture for Developer Payloads
            </h2>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Developers often work with sensitive data: database connection strings, customer JSON payloads, session JWTs, and authentication headers. ToolNest was built by Md Jalaluddin Master (Ammar Master) and the ProDevOpz team with a strict zero-trust principle:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100 dark:bg-zinc-950/40 dark:border-zinc-800">
              <Cpu className="h-5 w-5 text-indigo-500 mb-2" />
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                Local Web Crypto
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Cryptographic hashes (SHA-256, SHA-512, MD5) utilize the browser&apos;s native subtle-crypto API for hardware-accelerated speeds.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100 dark:bg-zinc-950/40 dark:border-zinc-800">
              <KeyRound className="h-5 w-5 text-emerald-500 mb-2" />
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                No Server Transmission
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                No API requests are dispatched during formatting or validation. You can even disconnect your internet and the tools continue working.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100 dark:bg-zinc-950/40 dark:border-zinc-800">
              <Zap className="h-5 w-5 text-amber-500 mb-2" />
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                One-Click Copy & Download
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Instant clipboard copying, minification toggles, and file downloads streamline daily software engineering routines.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60 space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Developer Tools FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-950/40">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  {faq.q}
                </h3>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Ad Unit */}
        <BottomAdSlot />
      </div>
    </>
  );
}
