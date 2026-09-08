import React from 'react';
import Link from 'next/link';
import { Home, Search, ArrowRight } from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { getPopularTools } from '@/data/tools';
import { ToolCard } from '@/components/tools/ToolCard';

export default function NotFound() {
  const popular = getPopularTools().slice(0, 4);

  return (
    <div className="w-full max-w-4xl mx-auto py-12 text-center">
      <div className="mx-auto flex justify-center mb-6">
        <BrandLogo size={64} />
      </div>

      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
        404 Page Not Found
      </span>

      <h1 className="mt-2 text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50">
        Oops! That tool doesn&apos;t seem to exist.
      </h1>

      <p className="mt-3 max-w-md mx-auto text-sm text-zinc-500 dark:text-zinc-400">
        The tool URL may have been updated or mistyped. Explore our full catalog or check out our most popular calculators below.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-indigo-700 shadow-xs"
        >
          <Home className="h-4 w-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/tools"
          className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-xs font-bold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          <span>Browse All 1,000+ Tools</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-16 text-left border-t border-zinc-100 dark:border-zinc-800 pt-8">
        <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-4 text-center sm:text-left">
          Popular Tools You Might Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popular.map((tool) => (
            <ToolCard key={tool.id} tool={tool} showCategory={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
