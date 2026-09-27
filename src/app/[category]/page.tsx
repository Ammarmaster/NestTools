import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CATEGORIES, CATEGORY_LIST } from '@/data/categories';
import { getToolsByCategory } from '@/data/tools';
import { ToolCard } from '@/components/tools/ToolCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DynamicIcon } from '@/components/ui/icon-renderer';
import { CategoryId } from '@/types/tool';
import { TopAdSlot, BottomAdSlot } from '@/components/ads/AdSlot';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return CATEGORY_LIST.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES[category as CategoryId];

  if (!cat) {
    return {
      title: 'Category Not Found | ToolNest',
    };
  }

  const currentYear = new Date().getFullYear();
  const pageTitle = `${cat.name} (${currentYear}) – 100% Free Online Tools | ToolNest`;
  const pageDescription = `Free online ${cat.name.toLowerCase()} suite with instant calculations, zero server uploads, and no login required. Fast, private, and mobile-ready.`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `/${cat.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `/${cat.slug}`,
      siteName: 'ToolNest',
      locale: 'en_US',
      type: 'website',
      images: ['/logo.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: ['/logo.png'],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = CATEGORIES[category as CategoryId];

  if (!cat) {
    notFound();
  }

  const tools = getToolsByCategory(cat.id);

  const breadcrumbs = [
    {
      name: cat.name,
      url: `/${cat.slug}`,
    },
  ];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${cat.name} - Free Online Tools`,
    description: cat.description,
    url: `https://toolnest.jobsio.in/${cat.slug}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: tools.slice(0, 30).map((tool, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: tool.name,
        url: `https://toolnest.jobsio.in/${tool.category}/${tool.slug}`,
        description: tool.description,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <div className="w-full max-w-6xl mx-auto pb-16">
        <Breadcrumbs items={breadcrumbs} />

      {/* Category Hero */}
      <div className="mb-10 rounded-3xl border border-zinc-200 bg-linear-to-b from-zinc-50 to-white p-8 sm:p-10 dark:border-zinc-800 dark:from-zinc-900/60 dark:to-zinc-950">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <DynamicIcon name={cat.icon} size={24} />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              {cat.name}
            </h1>
            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              {tools.length} Free Online Tools
            </span>
          </div>
        </div>

        <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {cat.description} Every tool is free, works offline in your browser, and requires no registration or software installation.
        </p>
      </div>

      {/* Category Top Ad Placement */}
      <TopAdSlot />

      {/* Tools Grid */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
            All {cat.name} ({tools.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} showCategory={false} />
          ))}
        </div>
      </div>

      {/* Category Bottom Ad Placement */}
      <BottomAdSlot />
    </div>
  </>
);
}
