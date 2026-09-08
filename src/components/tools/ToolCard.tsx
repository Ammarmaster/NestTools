'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ToolDefinition } from '@/types/tool';
import { CATEGORIES } from '@/data/categories';
import { DynamicIcon } from '@/components/ui/icon-renderer';
import { Heart, ArrowUpRight } from 'lucide-react';
import { isFavorite, toggleFavorite } from '@/lib/storage';

interface ToolCardProps {
  tool: ToolDefinition;
  showCategory?: boolean;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, showCategory = true }) => {
  const [favorited, setFavorited] = useState(false);
  const cat = CATEGORIES[tool.category];

  useEffect(() => {
    setFavorited(isFavorite(tool.id));
  }, [tool.id]);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextState = toggleFavorite(tool.id);
    setFavorited(nextState);
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700">
      <div>
        {/* Top bar: Icon & Favorite */}
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50 text-zinc-700 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-indigo-950/50 dark:group-hover:text-indigo-400">
            <DynamicIcon name={tool.icon} size={20} />
          </div>

          <button
            type="button"
            onClick={handleFavorite}
            title={favorited ? 'Favorited' : 'Add to favorites'}
            className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:text-rose-500 dark:text-zinc-500 dark:hover:text-rose-400"
            aria-label="Save to favorites"
          >
            <Heart className={`h-4 w-4 ${favorited ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>
        </div>

        {/* Title & Description */}
        <Link href={`/${tool.category}/${tool.slug}`} className="mt-3 block">
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-bold text-zinc-900 transition-colors group-hover:text-indigo-600 dark:text-zinc-100 dark:group-hover:text-indigo-400">
              {tool.name}
            </h3>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100 text-indigo-600 dark:text-indigo-400" />
          </div>

          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            {tool.description}
          </p>
        </Link>
      </div>

      {/* Bottom Category Tag */}
      {showCategory && (
        <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
          <Link
            href={`/${tool.category}`}
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium border ${cat?.badgeColor}`}
          >
            <span>{cat?.name || tool.category}</span>
          </Link>
        </div>
      )}
    </div>
  );
};
