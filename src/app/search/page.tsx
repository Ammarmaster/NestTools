'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ALL_TOOLS } from '@/data/tools';
import { CATEGORY_LIST, CATEGORIES } from '@/data/categories';
import { ToolCard } from '@/components/tools/ToolCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { TopAdSlot, BottomAdSlot } from '@/components/ads/AdSlot';
import {
  Search,
  X,
  Sparkles,
  ArrowRight,
  Filter,
  Flame,
  HelpCircle,
  Tag,
  Check,
  TrendingUp,
} from 'lucide-react';

const QUICK_TAGS = [
  { label: 'PDF to Word', query: 'pdf to word' },
  { label: 'CGPA Calculator', query: 'cgpa' },
  { label: 'Take-Home Salary', query: 'salary' },
  { label: 'JSON Formatter', query: 'json' },
  { label: 'QR Code', query: 'qr code' },
  { label: 'Image Compressor', query: 'compress' },
  { label: 'Merge PDF', query: 'merge pdf' },
  { label: 'Age Calculator', query: 'age' },
  { label: 'Unit Converter', query: 'converter' },
  { label: 'EMI Calculator', query: 'emi' },
  { label: 'Pomodoro Timer', query: 'pomodoro' },
  { label: 'SQL Formatter', query: 'sql' },
];

function SearchPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('cat') || 'all';

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<'popular' | 'name' | 'category'>('popular');

  // Sync state if URL query params change
  useEffect(() => {
    if (initialQuery !== query) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  const handleQueryChange = (val: string) => {
    setQuery(val);
    const params = new URLSearchParams();
    if (val.trim()) params.set('q', val.trim());
    if (selectedCategory !== 'all') params.set('cat', selectedCategory);
    router.replace(`/search?${params.toString()}`, { scroll: false });
  };

  const handleTagClick = (tagQuery: string) => {
    handleQueryChange(tagQuery);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (cat !== 'all') params.set('cat', cat);
    router.replace(`/search?${params.toString()}`, { scroll: false });
  };

  const filteredTools = useMemo(() => {
    let list = ALL_TOOLS;

    // Filter by Category
    if (selectedCategory !== 'all') {
      list = list.filter((t) => t.category === selectedCategory);
    }

    // Filter by Search Term
    if (query.trim()) {
      const q = query.toLowerCase().trim();
      const tokens = q.split(/\s+/).filter(Boolean);

      list = list.filter((t) => {
        const name = t.name.toLowerCase();
        const desc = t.description.toLowerCase();
        const cat = t.category.toLowerCase();
        const slug = t.slug.toLowerCase();
        const keywords = t.keywords.map((k) => k.toLowerCase()).join(' ');

        // Match all space-separated tokens
        return tokens.every(
          (tok) =>
            name.includes(tok) ||
            desc.includes(tok) ||
            cat.includes(tok) ||
            slug.includes(tok) ||
            keywords.includes(tok)
        );
      });
    }

    // Sorting
    return [...list].sort((a, b) => {
      if (sortBy === 'popular') {
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  }, [query, selectedCategory, sortBy]);

  return (
    <div className="w-full max-w-6xl mx-auto pb-16 space-y-10">
      <Breadcrumbs items={[{ name: 'Tool Search & Directory', url: '/search' }]} />

      {/* Hero Header */}
      <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-b from-indigo-50/60 via-white to-white p-8 sm:p-12 text-center dark:border-zinc-800 dark:from-indigo-950/20 dark:via-zinc-950 dark:to-zinc-950 shadow-xs">
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold text-indigo-700 dark:border-indigo-900/60 dark:bg-indigo-950/50 dark:text-indigo-300">
            <Search className="h-3.5 w-3.5" />
            <span>Searchable Index of 1,000+ Online Tools</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            Find Any Online Tool Instantly
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Type any calculation, conversion, or formatting task below to discover high-speed, private browser tools with instant execution.
          </p>

          {/* Interactive Search Bar Input */}
          <div className="pt-2 max-w-2xl mx-auto">
            <div className="relative flex items-center shadow-lg shadow-indigo-500/5 rounded-2xl">
              <Search className="absolute left-4 h-5 w-5 text-zinc-400 dark:text-zinc-500 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                placeholder="Search tools: e.g. 'meters to feet', 'pdf to docx', 'cgpa', 'salary', 'json'..."
                autoFocus
                className="w-full rounded-2xl border border-zinc-300/80 bg-white py-4 pl-12 pr-12 text-sm sm:text-base font-medium outline-hidden focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => handleQueryChange('')}
                  className="absolute right-4 p-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Tag Suggestion Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-3">
            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mr-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-rose-500" />
              Trending:
            </span>
            {QUICK_TAGS.map((tag) => (
              <button
                key={tag.query}
                type="button"
                onClick={() => handleTagClick(tag.query)}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-all ${
                  query.toLowerCase().trim() === tag.query
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Top Banner Ad Placement */}
      <TopAdSlot />

      {/* Controls & Category Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-800">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleCategoryChange('all')}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400'
            }`}
          >
            All Categories
          </button>
          {CATEGORY_LIST.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategoryChange(cat.id)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          >
            <option value="popular">Most Popular</option>
            <option value="name">Alphabetical (A-Z)</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <span>Tools Results</span>
            <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-extrabold text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
              {filteredTools.length} found
            </span>
          </h2>
          {query && (
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Showing matching results for &ldquo;<strong>{query}</strong>&rdquo;
            </p>
          )}
        </div>

        {(query || selectedCategory !== 'all') && (
          <button
            type="button"
            onClick={() => {
              handleQueryChange('');
              handleCategoryChange('all');
            }}
            className="text-xs font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
          >
            Reset All Filters
          </button>
        )}
      </div>

      {/* Tools Grid */}
      {filteredTools.length === 0 ? (
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50/50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 mb-3">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            No tools found matching &ldquo;{query}&rdquo;
          </h3>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
            Try searching for broader keywords like &quot;pdf&quot;, &quot;calculator&quot;, &quot;converter&quot;, or select &quot;All Categories&quot; above.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {QUICK_TAGS.slice(0, 6).map((tag) => (
              <button
                key={tag.query}
                type="button"
                onClick={() => handleTagClick(tag.query)}
                className="rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:border-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
              >
                Try &ldquo;{tag.label}&rdquo;
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} showCategory={true} />
          ))}
        </div>
      )}

      {/* Bottom Ad Unit */}
      <BottomAdSlot />

      {/* SEO Information & FAQs */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60 space-y-6">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            About ToolNest Searchable Catalog
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100 dark:bg-zinc-950/40 dark:border-zinc-800">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm mb-1">
              How does the search index work?
            </h3>
            <p>
              ToolNest indexes over 1,000+ browser tools across 9 specialized categories. Every tool is tagged with mathematical synonyms, multi-language keywords, and practical use-cases so you can find utilities using conversational phrases like &ldquo;in hand salary&rdquo; or &ldquo;convert pdf to word&rdquo;.
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100 dark:bg-zinc-950/40 dark:border-zinc-800">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm mb-1">
              Are all tools client-side?
            </h3>
            <p>
              Yes. Whether you are running a file conversion, formatting JSON, or calculating CGPA, every algorithm computes inside your browser via WebAssembly and JavaScript without uploading sensitive data to our servers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center text-sm text-zinc-500">
          Loading tool catalog...
        </div>
      }
    >
      <SearchPageContent />
    </Suspense>
  );
}
