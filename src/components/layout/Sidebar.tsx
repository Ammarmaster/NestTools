'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CATEGORY_LIST } from '@/data/categories';
import { DynamicIcon } from '@/components/ui/icon-renderer';
import {
  Home,
  Grid,
  Heart,
  Sparkles,
  TrendingUp,
  ExternalLink,
} from 'lucide-react';
import { getFavorites } from '@/lib/storage';

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [favCount, setFavCount] = React.useState(0);

  React.useEffect(() => {
    setFavCount(getFavorites().length);
    const update = () => setFavCount(getFavorites().length);
    window.addEventListener('favorites-updated', update);
    return () => window.removeEventListener('favorites-updated', update);
  }, []);

  return (
    <aside className="hidden lg:flex w-64 flex-col shrink-0 border-r border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-950/50">
      <div className="space-y-6">
        {/* Core Navigation */}
        <div className="space-y-1">
          <Link
            href="/"
            className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
              pathname === '/'
                ? 'bg-white text-zinc-900 shadow-2xs font-semibold dark:bg-zinc-900 dark:text-zinc-50'
                : 'text-zinc-600 hover:bg-white/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900/60 dark:hover:text-zinc-100'
            }`}
          >
            <Home className="h-4 w-4 text-zinc-500" />
            <span>Home</span>
          </Link>

          <Link
            href="/tools"
            className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
              pathname === '/tools'
                ? 'bg-white text-zinc-900 shadow-2xs font-semibold dark:bg-zinc-900 dark:text-zinc-50'
                : 'text-zinc-600 hover:bg-white/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900/60 dark:hover:text-zinc-100'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Grid className="h-4 w-4 text-indigo-500" />
              <span>All 1,000+ Tools</span>
            </div>
            <span className="rounded-full bg-zinc-200/80 px-2 py-0.5 text-[10px] font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              1,000+
            </span>
          </Link>

          <Link
            href="/founder"
            className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
              pathname === '/founder'
                ? 'bg-white text-zinc-900 shadow-2xs font-semibold dark:bg-zinc-900 dark:text-zinc-50'
                : 'text-zinc-600 hover:bg-white/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900/60 dark:hover:text-zinc-100'
            }`}
          >
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>Founder Story</span>
          </Link>

          <Link
            href="/tools?filter=favorites"
            className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
              pathname.includes('filter=favorites')
                ? 'bg-white text-zinc-900 shadow-2xs font-semibold dark:bg-zinc-900 dark:text-zinc-50'
                : 'text-zinc-600 hover:bg-white/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900/60 dark:hover:text-zinc-100'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Heart className="h-4 w-4 text-rose-500" />
              <span>Favorites</span>
            </div>
            {favCount > 0 && (
              <span className="rounded-full bg-rose-500/10 px-2 py-0.5 text-[10px] font-bold text-rose-500">
                {favCount}
              </span>
            )}
          </Link>
        </div>

        {/* Categories Section */}
        <div>
          <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Categories
          </div>
          <div className="space-y-0.5">
            {CATEGORY_LIST.map((cat) => {
              const isActive = pathname === `/${cat.slug}` || pathname.startsWith(`/${cat.slug}/`);
              return (
                <Link
                  key={cat.id}
                  href={`/${cat.slug}`}
                  className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-white text-indigo-600 shadow-2xs font-semibold dark:bg-zinc-900 dark:text-indigo-400'
                      : 'text-zinc-600 hover:bg-white/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900/60 dark:hover:text-zinc-100'
                  }`}
                >
                  <DynamicIcon name={cat.icon} size={16} className={isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-zinc-400'} />
                  <span className="truncate">{cat.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Client-Side Privacy Badge */}
        <div className="rounded-2xl border border-zinc-200/80 bg-white p-3.5 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900/70">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>100% Private & Local</span>
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
            All calculations and conversions run locally in your browser. No data ever leaves your device.
          </p>
        </div>

        {/* ProDevOpz Ecosystem Brand Card */}
        <a
          href="https://prodevopz.jobsio.in"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-indigo-100/80 bg-linear-to-br from-indigo-50/60 to-white p-3.5 shadow-2xs transition-all hover:border-indigo-300 dark:border-indigo-950/60 dark:from-indigo-950/30 dark:to-zinc-900/60 dark:hover:border-indigo-800"
        >
          <div className="flex items-center justify-between text-xs font-semibold text-indigo-950 dark:text-indigo-200">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              A Product by ProDevOpz
            </span>
            <ExternalLink className="h-3.5 w-3.5 text-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-zinc-500 group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition-colors">
            Visit <strong>prodevopz.jobsio.in</strong> for engineering tools, tech careers & developer platforms.
          </p>
        </a>
      </div>
    </aside>
  );
};
