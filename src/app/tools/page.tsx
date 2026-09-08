'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ALL_TOOLS } from '@/data/tools';
import { CATEGORY_LIST, CATEGORIES } from '@/data/categories';
import { ToolCard } from '@/components/tools/ToolCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Search, Filter, Heart, ArrowDownAZ, Flame, X } from 'lucide-react';
import { getFavorites } from '@/lib/storage';

function ToolsCatalogContent() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialFilter);
  const [sortBy, setSortBy] = useState<'popular' | 'name' | 'category'>('popular');
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
    const handleFavs = () => setFavorites(getFavorites());
    window.addEventListener('favorites-updated', handleFavs);
    return () => window.removeEventListener('favorites-updated', handleFavs);
  }, []);

  useEffect(() => {
    if (initialFilter) {
      setSelectedCategory(initialFilter);
    }
  }, [initialFilter]);

  const filteredTools = useMemo(() => {
    let list = ALL_TOOLS;

    // Category or favorites filter
    if (selectedCategory === 'favorites') {
      list = list.filter((t) => favorites.includes(t.id));
    } else if (selectedCategory !== 'all') {
      list = list.filter((t) => t.category === selectedCategory);
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.keywords.some((k) => k.toLowerCase().includes(q))
      );
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
  }, [searchQuery, selectedCategory, sortBy, favorites]);

  return (
    <div className="w-full max-w-6xl mx-auto pb-16">
      <Breadcrumbs items={[{ name: 'All Tools', url: '/tools' }]} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          Tools Directory
        </h1>
        <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Browse all {ALL_TOOLS.length} free browser-based online tools. Search, filter by category, or view your saved favorites.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by name, keyword or task..."
              className="w-full rounded-2xl border border-zinc-200 bg-white py-3 pl-10 pr-10 text-xs sm:text-sm font-medium outline-hidden focus:border-indigo-500 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-zinc-700 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
            >
              <option value="popular">Most Popular</option>
              <option value="name">Alphabetical (A-Z)</option>
              <option value="category">By Category</option>
            </select>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400'
            }`}
          >
            All ({ALL_TOOLS.length})
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('favorites')}
            className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
              selectedCategory === 'favorites'
                ? 'bg-rose-500 text-white'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400'
            }`}
          >
            <Heart className={`h-3 w-3 ${selectedCategory === 'favorites' ? 'fill-white' : ''}`} />
            <span>Favorites ({favorites.length})</span>
          </button>

          {CATEGORY_LIST.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      {filteredTools.length === 0 ? (
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50/50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30">
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            No tools found
          </h3>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            {selectedCategory === 'favorites'
              ? "You haven't saved any tools to your favorites yet. Click the heart icon on any tool to save it here."
              : `No tools matched "${searchQuery}". Try a broader search term.`}
          </p>
          {(searchQuery || selectedCategory !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
            >
              Reset Filters
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} showCategory={true} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ToolsCatalogPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-zinc-500">Loading catalog...</div>}>
      <ToolsCatalogContent />
    </Suspense>
  );
}
