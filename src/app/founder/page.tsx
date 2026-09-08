import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Lock, 
  Code2, 
  Heart, 
  Terminal, 
  Layers, 
  Mail, 
  Award,
  ArrowRight,
  Globe,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meet the Founder: Md Jalaluddin Master (Ammar Master) | ToolNest',
  description:
    'Learn about Md Jalaluddin Master (aka Ammar Master), founder and chief architect of ToolNest. Discover why ToolNest was created to provide 1,000+ free, private, client-side online tools.',
  keywords: [
    'Md Jalaluddin Master',
    'Ammar Master',
    'Md Jalaluddin Master ToolNest',
    'Ammar Master ToolNest',
    'ToolNest founder',
    'creator of ToolNest',
    'who made ToolNest',
    'ToolNest story',
    'privacy first tools',
    'free online tools founder',
    'software engineer online tools',
  ],
  alternates: {
    canonical: '/founder',
  },
  openGraph: {
    title: 'Meet the Founder: Md Jalaluddin Master (Ammar Master) – ToolNest',
    description: 'The story and mission behind ToolNest: 1,000+ free, private, client-side online tools for students, developers, and creators worldwide.',
    url: 'https://toolnest.app/founder',
    siteName: 'ToolNest',
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet the Founder: Md Jalaluddin Master (Ammar Master) – ToolNest',
    description: 'Why ToolNest was built: A mission to make the web fast, private, and free for everyone.',
  },
};

export default function FounderPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Meet the Founder', url: '/founder' },
  ];

  // Person Structured Data (Schema.org) for Search Engine Ranking
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Md Jalaluddin Master',
    alternateName: 'Ammar Master',
    jobTitle: 'Founder & Chief Product Architect',
    worksFor: {
      '@type': 'Organization',
      name: 'ProDevOpz',
      url: 'https://prodevopz.jobsio.in',
    },
    description:
      'Md Jalaluddin Master (also known as Ammar Master) is the founder and lead architect of ToolNest, an engineering product by ProDevOpz (prodevopz.jobsio.in) featuring 1,000+ free online tools.',
    knowsAbout: [
      'Full-Stack Web Architecture',
      'Client-Side Cryptography',
      'PDF & OpenXML Processing',
      'High-Performance Frontend Systems',
      'SEO Engineering',
      'Developer Productivity Tools',
    ],
    sameAs: [
      'https://prodevopz.jobsio.in',
      'https://github.com',
      'https://linkedin.com',
      'https://x.com',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <div className="w-full max-w-4xl mx-auto pb-16">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Banner */}
        <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-b from-indigo-50/50 via-white to-white p-8 sm:p-12 dark:border-zinc-800 dark:from-indigo-950/20 dark:via-zinc-900/60 dark:to-zinc-900 shadow-xs">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Founder & Creator Story</span>
            </div>

            <a
              href="https://prodevopz.jobsio.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-xs font-bold text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900 dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 transition-colors shadow-2xs"
            >
              <span>A Product by ProDevOpz</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="relative">
              <div className="h-28 w-28 sm:h-36 sm:w-36 rounded-3xl bg-linear-to-tr from-indigo-600 to-violet-500 p-1 shadow-xl shadow-indigo-500/20">
                <div className="flex h-full w-full items-center justify-center rounded-[22px] bg-zinc-900 text-white font-mono text-2xl sm:text-3xl font-black tracking-wider">
                  JM
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-full bg-emerald-500 p-1.5 text-white ring-4 ring-white dark:ring-zinc-900">
                <ShieldCheck className="h-4 w-4" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                  Md Jalaluddin Master
                </h1>
                <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  aka Ammar Master
                </span>
              </div>
              <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                Founder, Chief Product Architect & Software Engineer
              </p>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-xl">
                Building ToolNest under the <strong>ProDevOpz</strong> umbrella to eliminate slow, ad-ridden, paywalled online calculators and replace them with instantaneous, 100% private, client-side tools for students, engineers, and creators worldwide.
              </p>

              {/* Social / Contact Links */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <a
                  href="https://prodevopz.jobsio.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/80 px-3 py-1.5 text-xs font-bold text-indigo-700 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-indigo-500" />
                  <span>ProDevOpz (prodevopz.jobsio.in)</span>
                </a>
                <a
                  href="mailto:contact@toolnest.app"
                  className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                >
                  <Mail className="h-3.5 w-3.5 text-indigo-500" />
                  <span>Email Founder</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                >
                  <Code2 className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-300" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                >
                  <Globe className="h-3.5 w-3.5 text-blue-500" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The "Why" - Origin Story */}
        <section className="mt-12 space-y-6">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-indigo-500" />
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              The Genesis: Why ToolNest Was Created
            </h2>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 space-y-4 text-sm leading-relaxed text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300">
            <p>
              Like millions of students, developers, and working professionals, I found myself constantly searching for simple digital utilities: a quick CGPA calculator, a JSON formatter, a PDF to Word converter, or an in-hand salary estimator.
            </p>
            <p>
              What I discovered was frustratingly broken across the modern web:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-200 font-medium">
              <li>Websites demanding that you upload confidential PDFs, resumes, and tax data to obscure third-party cloud servers.</li>
              <li>Aggressive paywalls forcing you to enter a credit card subscription just to convert a 2-page document.</li>
              <li>Sluggish, server-rendered forms bogged down by artificial queuing delays and distracting popups.</li>
              <li>Cluttered user interfaces designed more for click-fraud than actual human productivity.</li>
            </ul>
            <p>
              I believed the internet deserved better. With modern browser technologies like WebAssembly, HTML5 File APIs, and Web Crypto, virtually every calculation and document conversion can run <strong>entirely inside your browser</strong> at the speed of light—with <strong>zero data ever leaving your machine</strong>.
            </p>
            <p className="font-semibold text-zinc-900 dark:text-zinc-100">
              ToolNest was built to prove that utility software can be free, instantaneous, beautiful, and unapologetically private.
            </p>
          </div>
        </section>

        {/* 4 Core Architectural Principles */}
        <section className="mt-12 space-y-6">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-indigo-500" />
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Our 4 Engineering Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 mb-4">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                1. 100% Client-Side Privacy
              </h3>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                Your passwords, financial figures, grades, and documents never touch a server database. Everything executes in browser memory and disappears the moment you close your tab.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 mb-4">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                2. Zero Latency Execution
              </h3>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                No server roundtrips. Whether parsing 50,000 lines of JSON or merging 10 PDF documents, ToolNest utilizes your local CPU hardware for instant responses.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 mb-4">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                3. No Paywalls or Signups
              </h3>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                Every single one of our 1,000+ tools is free forever. No email signup, no trial periods, and no locked features.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600 mb-4">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                4. Production SaaS Polish
              </h3>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                Built with the same craftsmanship as leading developer platforms: dark/light modes, keyboard shortcuts (Cmd+K), and responsive mobile ergonomics.
              </p>
            </div>
          </div>
        </section>

        {/* The Technical Stack */}
        <section className="mt-12 space-y-6">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-indigo-500" />
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Under the Hood: Technology Architecture
            </h2>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50 space-y-4 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              ToolNest is constructed with a modern, static-first frontend stack designed to withstand millions of daily users with zero backend overhead:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-800/40">
                <span className="font-bold text-zinc-800 dark:text-zinc-200 block">Next.js 16</span>
                <span className="text-[11px] text-zinc-400">App Router & Turbopack</span>
              </div>
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-800/40">
                <span className="font-bold text-zinc-800 dark:text-zinc-200 block">TypeScript 5</span>
                <span className="text-[11px] text-zinc-400">Strict Type Safety</span>
              </div>
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-800/40">
                <span className="font-bold text-zinc-800 dark:text-zinc-200 block">Tailwind CSS v4</span>
                <span className="text-[11px] text-zinc-400">Responsive Dark Mode</span>
              </div>
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-800/40">
                <span className="font-bold text-zinc-800 dark:text-zinc-200 block">Client Engine</span>
                <span className="text-[11px] text-zinc-400">pdf-lib, docx, Web Crypto</span>
              </div>
            </div>
          </div>
        </section>

        {/* Milestone Timeline */}
        <section className="mt-12 space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-500" />
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              ToolNest Evolution Timeline
            </h2>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50 space-y-6">
            <div className="flex items-start gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                1
              </span>
              <div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">The Idea & First 20 Tools</h4>
                <p className="text-xs text-zinc-500 mt-1">Built the core academic and developer toolsets: CGPA calculator, JSON formatter, and SQL beautifier.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                2
              </span>
              <div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Scaling to 110 Comprehensive Tools</h4>
                <p className="text-xs text-zinc-500 mt-1">Expanded into career calculators, text manipulation, mathematics, converters, and date engines with full Schema.org markup.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white shadow-xs">
                3
              </span>
              <div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">1,000+ Tools & Internet-Scale Client-Side Utility Platform</h4>
                <p className="text-xs text-zinc-500 mt-1">Expanded across pairwise converters, geometry, advanced mathematics, PDF processing, financial engineering, and developer utilities with 100% client-side execution.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA to Explore */}
        <div className="mt-12 text-center rounded-3xl bg-linear-to-br from-indigo-600 to-violet-600 p-8 text-white shadow-lg shadow-indigo-500/10">
          <Heart className="h-8 w-8 mx-auto mb-3 text-rose-300" />
          <h3 className="text-xl font-bold">Have a tool idea or feedback?</h3>
          <p className="text-xs text-indigo-100 mt-1 max-w-md mx-auto">
            I read every message. If there’s a tool you wish existed or an improvement you’d love to see, let me know!
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-bold text-indigo-600 hover:bg-indigo-50 transition-colors shadow-xs"
            >
              <span>Suggest a Tool / Contact Md Jalaluddin (Ammar)</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
            >
              <span>Browse All 1,000+ Tools</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
