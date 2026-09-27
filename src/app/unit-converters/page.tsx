import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getToolsByCategory } from '@/data/tools';
import { ToolCard } from '@/components/tools/ToolCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { TopAdSlot, ContentAdSlot, BottomAdSlot } from '@/components/ads/AdSlot';
import {
  ArrowLeftRight,
  Scale,
  Ruler,
  Thermometer,
  Zap,
  ArrowRight,
  HelpCircle,
  Database,
} from 'lucide-react';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Universal Unit Converters (${currentYear}) – Length, Weight, Temp & Speed | ToolNest`,
  description:
    'Free online unit conversion suite: Convert length (meters, feet, inches), mass (kg to lbs), temperature (Celsius, Fahrenheit, Kelvin), speed, volume, and data storage (bytes, MB, GB). Instant bidirectional results.',
  alternates: {
    canonical: '/unit-converters',
  },
  openGraph: {
    title: `Universal Unit Converters (${currentYear}) | ToolNest`,
    description:
      'High-precision unit converters for engineering, cooking, scientific calculations, and international travel.',
    url: '/unit-converters',
    images: ['/logo.png'],
  },
};

export default function UnitConvertersPage() {
  const converterTools = getToolsByCategory('converter');

  const faqs = [
    {
      q: 'Are unit conversions bidirectional in ToolNest?',
      a: 'Yes! Every unit converter on ToolNest supports instant bidirectional conversion. You can modify either input field or click the swap button to reverse conversion directions seamlessly.',
    },
    {
      q: 'How accurate are the conversion constants?',
      a: 'All conversion formulas adhere strictly to international BIPM (Bureau International des Poids et Mesures) and NIST standards, computed to high double-precision floating-point accuracy.',
    },
    {
      q: 'Can I use these unit converters on mobile devices offline?',
      a: 'Yes. Once loaded, ToolNest converters run completely in your local browser runtime without needing a continuous server connection.',
    },
  ];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Universal Unit Converters & Metric Systems (${currentYear})`,
    description:
      'Comprehensive suite of high-precision unit converters for length, mass, temperature, data storage, and speed.',
    url: 'https://toolnest.jobsio.in/unit-converters',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: converterTools.slice(0, 30).map((tool, idx) => ({
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
        <Breadcrumbs items={[{ name: 'Unit Converters', url: '/unit-converters' }]} />

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-b from-cyan-50/70 via-white to-white p-8 sm:p-12 text-center dark:border-zinc-800 dark:from-cyan-950/20 dark:via-zinc-950 dark:to-zinc-950 shadow-xs">
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 text-xs font-bold text-cyan-800 dark:border-cyan-900/60 dark:bg-cyan-950/60 dark:text-cyan-300">
              <ArrowLeftRight className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Metric, Imperial & International Standards</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              Universal Unit Converters Suite
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Instant, bidirectional conversions for length, mass, temperature, speed, volume, data storage, and roman numerals. High scientific precision with zero rounding artifacts.
            </p>
          </div>
        </section>

        {/* Top Banner Ad Placement */}
        <TopAdSlot />

        {/* Converters Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Ruler className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                <span>Unit Converters ({converterTools.length})</span>
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                Select any pair to convert with live bidirectional updates
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
            {converterTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} showCategory={false} />
            ))}
          </div>
        </section>

        {/* Mid-Content Ad Placement */}
        <ContentAdSlot />

        {/* Informational Metric vs Imperial Guide */}
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60 space-y-6">
          <div className="flex items-center gap-2.5">
            <Scale className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Quick Reference Conversion Constants
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100 dark:bg-zinc-950/40 dark:border-zinc-800 space-y-1.5">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-1.5">
                <Ruler className="h-4 w-4 text-cyan-600" />
                <span>Length Multipliers</span>
              </h3>
              <ul className="space-y-1 text-[11px] font-mono text-zinc-700 dark:text-zinc-300">
                <li>1 Meter = 3.28084 Feet</li>
                <li>1 Inch = 2.54 Centimeters</li>
                <li>1 Kilometer = 0.621371 Miles</li>
                <li>1 Yard = 0.9144 Meters</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100 dark:bg-zinc-950/40 dark:border-zinc-800 space-y-1.5">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-1.5">
                <Scale className="h-4 w-4 text-emerald-600" />
                <span>Mass & Weight</span>
              </h3>
              <ul className="space-y-1 text-[11px] font-mono text-zinc-700 dark:text-zinc-300">
                <li>1 Kilogram = 2.20462 Pounds</li>
                <li>1 Pound (lb) = 16 Ounces (oz)</li>
                <li>1 Gram = 0.035274 Ounces</li>
                <li>1 Metric Ton = 1,000 Kilograms</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100 dark:bg-zinc-950/40 dark:border-zinc-800 space-y-1.5">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-1.5">
                <Database className="h-4 w-4 text-indigo-600" />
                <span>Data Storage</span>
              </h3>
              <ul className="space-y-1 text-[11px] font-mono text-zinc-700 dark:text-zinc-300">
                <li>1 Byte = 8 Bits</li>
                <li>1 Kilobyte (KB) = 1,024 Bytes</li>
                <li>1 Megabyte (MB) = 1,024 KB</li>
                <li>1 Gigabyte (GB) = 1,024 MB</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60 space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Unit Converters FAQs
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
