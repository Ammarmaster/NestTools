'use client';

import React, { useState, useEffect } from 'react';
import { ToolDefinition } from '@/types/tool';
import { CATEGORIES } from '@/data/categories';
import { DynamicIcon } from '@/components/ui/icon-renderer';
import { Heart, Share2, Copy, Check, RotateCcw } from 'lucide-react';
import { isFavorite, toggleFavorite, addRecentTool } from '@/lib/storage';
import { trackToolView, trackShare, trackFavorite } from '@/lib/analytics';

interface ToolContainerProps {
  tool: ToolDefinition;
  children: React.ReactNode;
  onReset?: () => void;
}

export const ToolContainer: React.FC<ToolContainerProps> = ({ tool, children, onReset }) => {
  const [favorited, setFavorited] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const cat = CATEGORIES[tool.category];

  useEffect(() => {
    setFavorited(isFavorite(tool.id));
    trackToolView(tool.id, tool.category);
    addRecentTool({
      id: tool.id,
      category: tool.category,
      slug: tool.slug,
      name: tool.name,
      icon: tool.icon,
    });
  }, [tool]);

  const handleFavoriteClick = () => {
    const nextState = toggleFavorite(tool.id);
    setFavorited(nextState);
    trackFavorite(tool.id, nextState);
  };

  const handleShareClick = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${tool.name} | ToolNest`,
          text: tool.description,
          url,
        });
        trackShare(tool.id, 'web-share-api');
        return;
      } catch (err) {
        // Fallback to copy
      }
    }

    // Fallback: Copy URL to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopiedLink(true);
      trackShare(tool.id, 'clipboard-copy');
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (e) {
      console.error('Failed to copy share link', e);
    }
  };

  return (
    <div className="w-full">
      {/* Tool Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold border ${cat?.badgeColor}`}>
              <DynamicIcon name={cat?.icon || 'Folder'} size={13} />
              <span>{cat?.name || tool.category}</span>
            </span>
            <span className="text-xs text-zinc-400 dark:text-zinc-500">•</span>
            <span className="text-xs text-emerald-600 font-medium dark:text-emerald-400">
              Free & Browser-Based
            </span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
            {tool.name}
          </h1>

          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {tool.description}
          </p>
        </div>

        {/* Action Buttons Toolbar */}
        <div className="flex items-center gap-2 shrink-0 self-start">
          {/* Favorite Toggle */}
          <button
            type="button"
            onClick={handleFavoriteClick}
            title={favorited ? 'Remove from favorites' : 'Add to favorites'}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all ${
              favorited
                ? 'border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-900/40 dark:bg-rose-950/40 dark:text-rose-400'
                : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-700'
            }`}
          >
            <Heart className={`h-4 w-4 ${favorited ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>{favorited ? 'Saved' : 'Save'}</span>
          </button>

          {/* Share Button */}
          <button
            type="button"
            onClick={handleShareClick}
            title="Share tool"
            className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-600 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-700"
          >
            {copiedLink ? <Check className="h-4 w-4 text-emerald-500" /> : <Share2 className="h-4 w-4" />}
            <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
          </button>

          {/* Optional Reset Button */}
          {onReset && (
            <button
              type="button"
              onClick={onReset}
              title="Reset all inputs"
              className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-600 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-700"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Interactive Tool Card */}
      <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs sm:p-7 dark:border-zinc-800 dark:bg-zinc-900/90">
        {children}
      </div>
    </div>
  );
};
