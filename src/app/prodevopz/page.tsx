import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, ExternalLink, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { getBaseUrl } from '@/lib/site-config';
import {
  FOUNDER,
  PRODEVOPZ,
  faqSchema,
  personSchema,
  prodevopzId,
  prodevopzSchema,
  toolnestSchema,
} from '@/lib/founder';

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: {
    absolute: 'ProDevOpz (ProDevOpz AI) – Software & AI Studio Founded by Ammar Master',
  },
  description:
    'What is ProDevOpz? ProDevOpz (ProDevOpz AI) is a software engineering and AI product studio founded by Ammar Master (Mohammad Jalaluddin Master). Makers of ToolNest — 1,000+ free privacy-first online tools.',
  keywords: [
    'ProDevOpz',
    'ProDevOpz AI',
    'Prodevopz',
    'what is ProDevOpz',
    'ProDevOpz founder',
    'who founded ProDevOpz',
    'prodevopz.jobsio.in',
    'Ammar Master',
    'Jalaluddin Master',
    'ToolNest',
  ],
  alternates: { canonical: '/prodevopz' },
  openGraph: {
    title: 'ProDevOpz (ProDevOpz AI) – Founded by Ammar Master',
    description: PRODEVOPZ.description,
    url: '/prodevopz',
    siteName: 'ToolNest – A Product by ProDevOpz',
    type: 'website',
    images: [{ url: `${baseUrl}/logo.png`, width: 512, height: 512, alt: 'ProDevOpz' }],
  },
  twitter: {
    card: 'summary',
    title: 'ProDevOpz (ProDevOpz AI) – Founded by Ammar Master',
    description: PRODEVOPZ.description,
  },
};

const PRODEVOPZ_FAQ = [
  {
    q: 'What is ProDevOpz?',
    a: PRODEVOPZ.description,
  },
  {
    q: 'Is ProDevOpz the same as ProDevOpz AI?',
    a: 'Yes. ProDevOpz and ProDevOpz AI refer to the same company — the software engineering and AI product studio founded by Ammar Master (Mohammad Jalaluddin Master).',
  },
  {
    q: 'Who is the founder of ProDevOpz?',
    a: 'ProDevOpz was founded by Ammar Master, whose full name is Mohammad Jalaluddin Master (also written Md Jalaluddin Master or Jalaluddin Master). He is its Founder and Chief Product Architect.',
  },
  {
    q: 'What products has ProDevOpz built?',
    a: 'ProDevOpz’s flagship product is ToolNest (toolnest.jobsio.in), a platform of 1,000+ free browser-based tools including PDF tools, calculators, unit converters and developer utilities that run 100% client-side.',
  },
  {
    q: 'What is the official ProDevOpz website?',
    a: 'The official ProDevOpz website is prodevopz.jobsio.in.',
  },
];

export default function ProDevOpzPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${baseUrl}/prodevopz#webpage`,
        url: `${baseUrl}/prodevopz`,
        name: 'About ProDevOpz (ProDevOpz AI)',
        about: { '@id': prodevopzId(baseUrl) },
        mainEntity: { '@id': prodevopzId(baseUrl) },
      },
      prodevopzSchema(baseUrl),
      toolnestSchema(baseUrl),
      personSchema(baseUrl),
      faqSchema(PRODEVOPZ_FAQ),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="w-full max-w-4xl mx-auto pb-16">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'ProDevOpz', url: '/prodevopz' },
          ]}
        />

        <section className="rounded-3xl border border-zinc-200 bg-linear-to-b from-indigo-50/60 via-white to-white p-8 sm:p-12 dark:border-zinc-800 dark:from-indigo-950/20 dark:via-zinc-900/60 dark:to-zinc-900">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300">
            <Building2 className="h-3.5 w-3.5" />
            <span>Company Profile</span>
          </div>
          <h1 className="mt-5 text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            ProDevOpz <span className="text-indigo-600 dark:text-indigo-400">(ProDevOpz AI)</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-2xl">
            {PRODEVOPZ.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={PRODEVOPZ.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-700"
            >
              <span>Visit prodevopz.jobsio.in</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <Link
              href="/ammar-master"
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <span>Meet the founder, Ammar Master</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Company Facts</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 rounded-3xl border border-zinc-200 bg-white p-6 text-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            {[
              ['Name', 'ProDevOpz'],
              ['Also known as', 'ProDevOpz AI, Prodevopz'],
              ['Type', 'Software engineering & AI product studio'],
              ['Founder', `${FOUNDER.preferredName} (${FOUNDER.name})`],
              ['Founder’s role', FOUNDER.jobTitle],
              ['Website', 'prodevopz.jobsio.in'],
              ['Flagship product', 'ToolNest — toolnest.jobsio.in'],
              ['Focus', 'Developer tools, privacy-first web apps, AI & career products'],
              ['Contact', FOUNDER.email],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col">
                <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{k}</dt>
                <dd className="font-medium text-zinc-900 dark:text-zinc-100">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50 divide-y divide-zinc-100 dark:divide-zinc-800">
            {PRODEVOPZ_FAQ.map((f) => (
              <div key={f.q} className="py-4 first:pt-0 last:pb-0">
                <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{f.q}</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
