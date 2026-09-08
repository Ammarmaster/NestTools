'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ALL_TOOLS, searchTools } from '@/data/tools';
import { ToolDefinition } from '@/types/tool';
import { CATEGORIES } from '@/data/categories';
import { DynamicIcon } from '@/components/ui/icon-renderer';
import { Search, X, Command, ArrowRight, CornerDownLeft } from 'lucide-react';
import { trackSearch } from '@/lib/analytics';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ToolDefinition[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Reset and focus on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults(ALL_TOOLS.slice(0, 10)); // Default popular/recent view
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults(ALL_TOOLS.slice(0, 10));
      setSelectedIndex(0);
    } else {
      const hits = searchTools(query);
      setResults(hits);
      setSelectedIndex(0);
      trackSearch(query, hits.length);
    }
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, results.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % Math.max(1, results.length));
      } else if (e.key === 'Enter' && results.length > 0) {
        e.preventDefault();
        const selected = results[selectedIndex];
        if (selected) {
          router.push(`/${selected.category}/${selected.slug}`);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, router, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-zinc-950/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl transition-all dark:border-zinc-800 dark:bg-zinc-900">
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-zinc-100 px-4 py-3.5 dark:border-zinc-800">
          <Search className="h-5 w-5 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 110+ tools (e.g. 'cgpa', 'salary', 'json', 'percentage')..."
            className="ml-3 flex-1 bg-transparent text-base text-zinc-900 placeholder-zinc-400 outline-hidden dark:text-zinc-100 dark:placeholder-zinc-500"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="mr-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="hidden rounded-md border border-zinc-200 bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 sm:inline-block dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-400">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                No tools found matching &ldquo;{query}&rdquo;
              </p>
              <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
                Try searching for keywords like &ldquo;gpa&rdquo;, &ldquo;tax&rdquo;, &ldquo;counter&rdquo;, or &ldquo;converter&rdquo;
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {query.trim() ? `Found ${results.length} tools` : 'Suggested Tools'}
              </div>
              {results.map((tool, idx) => {
                const isSelected = idx === selectedIndex;
                const cat = CATEGORIES[tool.category];
                return (
                  <button
                    key={tool.id}
                    type="button"
                    onClick={() => {
                      router.push(`/${tool.category}/${tool.slug}`);
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all ${
                      isSelected
                        ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                        : 'text-zinc-600 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800/50'
                    }`}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-2xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      <DynamicIcon name={tool.icon} size={18} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm truncate text-zinc-900 dark:text-zinc-100">
                          {tool.name}
                        </span>
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium border ${cat?.badgeColor || 'border-zinc-200 text-zinc-500'}`}>
                          {cat?.name || tool.category}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 truncate dark:text-zinc-400">
                        {tool.description}
                      </p>
                    </div>

                    <div className="flex items-center text-zinc-400">
                      {isSelected ? (
                        <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                          <span>Open</span>
                          <CornerDownLeft className="h-3.5 w-3.5" />
                        </div>
                      ) : (
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts info */}
        <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50 px-4 py-2 text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-zinc-200 bg-white px-1 dark:border-zinc-700 dark:bg-zinc-800">↑</kbd>
              <kbd className="rounded border border-zinc-200 bg-white px-1 dark:border-zinc-700 dark:bg-zinc-800">↓</kbd>
              to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-zinc-200 bg-white px-1 dark:border-zinc-700 dark:bg-zinc-800">↵</kbd>
              to select
            </span>
          </div>
          <span>ToolNest Instant Search</span>
        </div>
      </div>
    </div>
  );
};
