'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { SearchModal } from '@/components/search/SearchModal';
import { CATEGORY_LIST } from '@/data/categories';
import { DynamicIcon } from '@/components/ui/icon-renderer';
import {
  Search,
  Menu,
  X,
  Wrench,
  Heart,
  Grid,
  ChevronDown,
  Sparkles,
  FileText,
  ExternalLink,
  UserCheck,
} from 'lucide-react';
import { getFavorites } from '@/lib/storage';

export const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Global Cmd+K / Ctrl+K listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Watch favorites updates
    const updateFavs = () => {
      setFavoriteCount(getFavorites().length);
    };
    updateFavs();
    window.addEventListener('favorites-updated', updateFavs);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('favorites-updated', updateFavs);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCategoryDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2.5">
              <Link href="/" className="group flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-500/20 transition-transform duration-200 group-hover:scale-105">
                  <Wrench className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-none">
                    Tool<span className="text-indigo-600 dark:text-indigo-400">Nest</span>
                  </span>
                  <span className="text-[10px] font-medium tracking-wider uppercase text-zinc-400 dark:text-zinc-500 mt-0.5">
                    1,000+ Free Tools
                  </span>
                </div>
              </Link>

              {/* ProDevOpz Branding Badge */}
              <a
                href="https://prodevopz.jobsio.in"
                target="_blank"
                rel="noopener noreferrer"
                title="A product by ProDevOpz (prodevopz.jobsio.in)"
                className="hidden sm:inline-flex items-center gap-1 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-2 py-0.5 text-[10px] font-bold text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900 dark:border-indigo-900/60 dark:bg-indigo-950/50 dark:text-indigo-300 dark:hover:bg-indigo-900/70 transition-colors shadow-2xs"
              >
                <span>by ProDevOpz</span>
                <ExternalLink className="h-2.5 w-2.5 opacity-70" />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 pl-4">
              <Link
                href="/tools"
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  pathname === '/tools'
                    ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-900'
                }`}
              >
                <Grid className="h-4 w-4" />
                <span>All Tools</span>
              </Link>

              <Link
                href="/pdf"
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  pathname === '/pdf'
                    ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-900'
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                <span>PDF Tools</span>
              </Link>

              <Link
                href="/founder"
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  pathname === '/founder'
                    ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-900'
                }`}
              >
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span>Founder</span>
              </Link>

              {/* Categories Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                  className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
                >
                  <span>Categories</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isCategoryDropdownOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-64 rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
                    onMouseLeave={() => setIsCategoryDropdownOpen(false)}
                  >
                    <div className="space-y-1">
                      {CATEGORY_LIST.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/${cat.slug}`}
                          className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                          onClick={() => setIsCategoryDropdownOpen(false)}
                        >
                          <DynamicIcon name={cat.icon} size={16} className="text-zinc-500" />
                          <span>{cat.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Center Search Trigger */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center justify-between w-48 sm:w-72 md:w-80 rounded-xl border border-zinc-200 bg-zinc-50/80 px-3 py-1.5 text-xs text-zinc-400 shadow-2xs transition-all hover:border-zinc-300 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-500 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
          >
            <div className="flex items-center gap-2">
              <Search className="h-3.5 w-3.5 text-zinc-400" />
              <span className="hidden sm:inline">Search 1,000+ tools...</span>
              <span className="sm:hidden">Search tools...</span>
            </div>
            <kbd className="flex items-center gap-0.5 rounded-md border border-zinc-200 bg-white px-1.5 py-0.5 font-mono text-[10px] font-semibold text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            {/* Favorites link */}
            <Link
              href="/tools?filter=favorites"
              title="Favorite Tools"
              className="relative rounded-xl p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-rose-500 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-rose-400"
            >
              <Heart className="h-5 w-5" />
              {favoriteCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
                  {favoriteCount}
                </span>
              )}
            </Link>

            {/* Dark/Light mode toggle */}
            <ThemeToggle />

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-xl p-2 text-zinc-600 hover:bg-zinc-100 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-900"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="border-b border-zinc-200 bg-white px-4 py-4 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
            <div className="space-y-3">
              <Link
                href="/tools"
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                <Grid className="h-4 w-4 text-indigo-500" />
                <span>All 1,000+ Tools Directory</span>
              </Link>
              <Link
                href="/pdf"
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                <FileText className="h-4 w-4 text-rose-500" />
                <span>PDF & Document Tools (New)</span>
              </Link>
              <Link
                href="/founder"
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span>Meet the Founder</span>
              </Link>
              <Link
                href="/ammar-master"
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                <UserCheck className="h-4 w-4 text-indigo-500" />
                <span>Ammar Master Profile</span>
              </Link>
              <Link
                href="/tools?filter=favorites"
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                <Heart className="h-4 w-4 text-rose-500" />
                <span>Favorites ({favoriteCount})</span>
              </Link>

              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <span className="px-3 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Tool Categories
                </span>
                <div className="mt-2 grid grid-cols-2 gap-1">
                  {CATEGORY_LIST.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/${cat.slug}`}
                      className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
                    >
                      <DynamicIcon name={cat.icon} size={14} className="text-zinc-500" />
                      <span>{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile ProDevOpz Card */}
              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <a
                  href="https://prodevopz.jobsio.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl bg-indigo-50/70 p-2.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
                    A Product by ProDevOpz
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Dialog */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
