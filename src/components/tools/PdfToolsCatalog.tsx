'use client';

import React, { useState, useMemo } from 'react';
import { ToolDefinition } from '@/types/tool';
import { ToolCard } from '@/components/tools/ToolCard';
import {
  Search,
  Filter,
  Layers,
  Minimize2,
  FileCheck2,
  Lock,
  ImageIcon,
  Sparkles,
  X,
} from 'lucide-react';

interface PdfToolsCatalogProps {
  tools: ToolDefinition[];
}

type PdfSubCategory = 'all' | 'organize' | 'convert' | 'security' | 'images';

const SUB_CATEGORIES: { id: PdfSubCategory; label: string; icon: React.ReactNode; matchSlugs: string[] }[] = [
  {
    id: 'all',
    label: 'All Tools',
    icon: <Layers className="h-4 w-4" />,
    matchSlugs: [],
  },
  {
    id: 'organize',
    label: 'Organize & Compress',
    icon: <Minimize2 className="h-4 w-4" />,
    matchSlugs: [
      'compress-pdf',
      'pdf-compressor',
      'pdf-merger',
      'pdf-page-splitter',
      'pdf-page-rotator',
    ],
  },
  {
    id: 'convert',
    label: 'Convert to/from PDF',
    icon: <FileCheck2 className="h-4 w-4" />,
    matchSlugs: [
      'pdf-to-docx',
      'image-to-pdf',
      'jpg-to-pdf',
      'invoice-generator',
    ],
  },
  {
    id: 'security',
    label: 'Security & Sign',
    icon: <Lock className="h-4 w-4" />,
    matchSlugs: [
      'protect-pdf',
      'encrypt-pdf',
      'watermark-pdf',
      'page-numbers-pdf',
      'add-page-numbers-to-pdf',
      'sign-pdf',
      'pdf-signature',
    ],
  },
  {
    id: 'images',
    label: 'Image Converters & Editors',
    icon: <ImageIcon className="h-4 w-4" />,
    matchSlugs: [
      'image-resizer',
      'resize-image',
      'png-to-jpg',
      'jpg-to-png',
      'webp-to-jpg',
      'qr-code-generator',
      'barcode-generator',
    ],
  },
];

export const PdfToolsCatalog: React.FC<PdfToolsCatalogProps> = ({ tools }) => {
  const [activeTab, setActiveTab] = useState<PdfSubCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      // Category filter
      if (activeTab !== 'all') {
        const catConfig = SUB_CATEGORIES.find((c) => c.id === activeTab);
        if (catConfig && catConfig.matchSlugs.length > 0) {
          const matched = catConfig.matchSlugs.some(
            (slug) => tool.slug.includes(slug) || tool.id.includes(slug)
          );
          if (!matched) return false;
        }
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = tool.name.toLowerCase().includes(q);
        const matchesDesc = tool.description.toLowerCase().includes(q);
        const matchesKeywords = tool.keywords?.some((k) => k.toLowerCase().includes(q));
        const matchesSlug = tool.slug.toLowerCase().includes(q);
        return matchesName || matchesDesc || matchesKeywords || matchesSlug;
      }

      return true;
    });
  }, [tools, activeTab, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-2 rounded-2xl border border-zinc-200 bg-white/80 dark:border-zinc-800 dark:bg-zinc-900/60 backdrop-blur-md shadow-2xs">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search PDF & image tools (e.g. compress, docx, sign, resize, watermark)..."
            className="w-full pl-10 pr-9 py-2 text-sm rounded-xl border-none bg-zinc-50 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
            aria-label="Filter PDF and image tools"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              title="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Total Count Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 text-xs font-semibold self-end sm:self-auto shrink-0 border border-rose-200/60 dark:border-rose-900/40">
          <Sparkles className="h-3.5 w-3.5 text-rose-500" />
          <span>{filteredTools.length} {filteredTools.length === 1 ? 'Tool' : 'Tools'} Ready</span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-medium">
        {SUB_CATEGORIES.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-rose-600 text-white shadow-xs font-bold scale-[1.02]'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Tool Cards */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} showCategory={false} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-4 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 space-y-3">
          <Filter className="h-8 w-8 text-zinc-400 mx-auto" />
          <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-200">
            No tools matched your search "{searchQuery}"
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
            Try searching for "compress", "word", "sign", "image", "merge", or reset filters to see all tools.
          </p>
          <button
            onClick={() => {
              setActiveTab('all');
              setSearchQuery('');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-rose-600 bg-rose-50 rounded-xl hover:bg-rose-100 dark:bg-rose-950/60 dark:text-rose-300 transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};
