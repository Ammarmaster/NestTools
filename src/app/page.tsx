'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ALL_TOOLS, getPopularTools, getFeaturedTools } from '@/data/tools';
import { CATEGORY_LIST } from '@/data/categories';
import { ToolCard } from '@/components/tools/ToolCard';
import { DynamicIcon } from '@/components/ui/icon-renderer';
import { SearchModal } from '@/components/search/SearchModal';
import { getRecentTools, RecentToolItem } from '@/lib/storage';
import {
  Search,
  Sparkles,
  Zap,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  ChevronRight,
  HelpCircle,
  Wrench,
  Clock,
  ExternalLink,
} from 'lucide-react';

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [recentTools, setRecentTools] = useState<RecentToolItem[]>([]);

  const popularTools = getPopularTools().slice(0, 8);
  const featuredTools = getFeaturedTools().slice(0, 6);

  useEffect(() => {
    setRecentTools(getRecentTools());
    const handleRecents = () => setRecentTools(getRecentTools());
    window.addEventListener('recent-tools-updated', handleRecents);
    return () => window.removeEventListener('recent-tools-updated', handleRecents);
  }, []);

  return (
    <>
      <div className="w-full max-w-6xl mx-auto space-y-16 pb-16">
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-b from-indigo-50/50 via-white to-white p-8 sm:p-14 text-center dark:border-zinc-800 dark:from-indigo-950/20 dark:via-zinc-950 dark:to-zinc-950 shadow-xs">
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-950/50 dark:text-indigo-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>1,000+ Free Browser Tools • No Login Required</span>
              </div>
              <a
                href="https://prodevopz.jobsio.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/90 bg-white px-3 py-1 text-xs font-bold text-indigo-700 hover:bg-indigo-50 hover:text-indigo-900 dark:border-indigo-800/80 dark:bg-zinc-900 dark:text-indigo-300 dark:hover:bg-indigo-950/70 transition-colors shadow-2xs"
              >
                <span>A Product by ProDevOpz</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              Free Online Tools for Work, Study & Everyday Life
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              1,000+ fast, free tools that work directly in your browser. Convert PDF to Word (DOCX), unit conversions, merge PDFs, compress images, generate QR codes, calculate CGPA, format JSON, and estimate take-home salary with zero data tracking.
            </p>

            {/* Prominent Search Bar */}
            <div className="pt-4 max-w-xl mx-auto">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="group flex w-full items-center justify-between rounded-2xl border border-zinc-300/80 bg-white p-4 text-left shadow-lg shadow-zinc-200/50 transition-all hover:border-indigo-500 hover:shadow-indigo-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-none"
              >
                <div className="flex items-center gap-3 text-zinc-400 dark:text-zinc-500">
                  <Search className="h-5 w-5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                  <span className="text-sm font-medium text-zinc-400">
                    Search 1,000+ tools (e.g. &ldquo;meters to feet&rdquo;, &ldquo;pdf&rdquo;, &ldquo;cgpa&rdquo;, &ldquo;sha256&rdquo;, &ldquo;salary&rdquo;)...
                  </span>
                </div>
                <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded-lg border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs font-mono font-semibold text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
                  <span>⌘</span>K
                </kbd>
              </button>
            </div>
          </div>
        </section>

        {/* 2. Recently Used Tools (If any exist in localStorage) */}
        {recentTools.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-4 w-4 text-indigo-500" />
              <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Recently Used
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {recentTools.map((rec) => (
                <Link
                  key={rec.id}
                  href={`/${rec.category}/${rec.slug}`}
                  className="flex items-center gap-2.5 rounded-2xl border border-zinc-200 bg-white p-3 shadow-2xs hover:border-indigo-500 hover:bg-zinc-50/50 transition-all dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-zinc-800 dark:text-indigo-400">
                    <DynamicIcon name={rec.icon} size={16} />
                  </div>
                  <span className="text-xs font-bold text-zinc-800 truncate dark:text-zinc-200">
                    {rec.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 3. Categories Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Explore Tool Categories
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                Curated suites of tools designed for specialized workflows
              </p>
            </div>
            <Link
              href="/tools"
              className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
            >
              <span>View All Tools</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORY_LIST.map((cat) => (
              <Link
                key={cat.id}
                href={`/${cat.slug}`}
                className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-white p-5 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-indigo-900"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-800 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-200">
                    <DynamicIcon name={cat.icon} size={22} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-800/80 text-xs font-semibold text-zinc-500 group-hover:text-indigo-600 dark:text-zinc-400 dark:group-hover:text-indigo-400">
                  <span>Open Category</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 4. Popular Tools */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Most Popular Tools
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                Loved by thousands of students, developers, and professionals daily
              </p>
            </div>
            <Link
              href="/tools?filter=popular"
              className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
            >
              <span>See more</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} showCategory={true} />
            ))}
          </div>
        </section>

        {/* 5. Featured Tools */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Featured Highlights
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                Advanced calculators and productivity utilities
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} showCategory={true} />
            ))}
          </div>
        </section>

        {/* 6. Why ToolNest? Value Propositions */}
        <section className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-8 sm:p-12 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Why Professionals & Students Choose ToolNest
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Engineered with modern frontend standards for zero friction and maximum reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white p-6 shadow-2xs border border-zinc-200/70 dark:bg-zinc-900 dark:border-zinc-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                100% Client-Side Privacy
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                All calculations, JSON formatting, password generations, and resume checks occur locally in your browser. None of your data is ever transmitted to a remote server.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-2xs border border-zinc-200/70 dark:bg-zinc-900 dark:border-zinc-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 mb-4">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                Sub-Second Lightning Speed
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Pre-rendered static pages deliver instant load times. No bloated scripts, no pop-up paywalls, and no forced logins blocking your workflow.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-2xs border border-zinc-200/70 dark:bg-zinc-900 dark:border-zinc-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400 mb-4">
                <Smartphone className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                Mobile-First Design
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Every tool is meticulously designed to work seamlessly on smartphones, tablets, and high-resolution desktop monitors alike without awkward horizontal scrolls.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Homepage FAQs */}
        <section className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-10 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="flex items-center gap-2.5 mb-6">
            <HelpCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-zinc-100 text-sm dark:divide-zinc-800 space-y-4 pt-2">
            <div className="pt-3">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100">
                Are all tools on ToolNest really 100% free?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Yes. Every single one of our 1,000+ calculators, formatters, document converters, and utilities is completely free with no usage limits, no credit card requirements, and no account creation.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100">
                Do I need to download any software or browser extension?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                No downloads are necessary. Every tool runs directly inside any standard web browser (Chrome, Safari, Edge, Firefox) across mobile, tablet, and desktop devices.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100">
                Is my resume or financial data stored on your servers?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Never. ToolNest runs 100% on the client side in your browser JavaScript engine. Your inputs never reach our servers, guaranteeing complete privacy for your sensitive data.
              </p>
            </div>
          </div>
        </section>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
