import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ALL_TOOLS, getToolBySlug, getRelatedTools } from '@/data/tools';
import { CATEGORIES } from '@/data/categories';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ToolContainer } from '@/components/tools/ToolContainer';
import { ToolEngineRenderer } from '@/components/engines/ToolEngineRenderer';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { RelatedTools } from '@/components/tools/RelatedTools';
import { ToolJsonLd } from '@/components/seo/JsonLd';
import { ContentAdSlot, BottomAdSlot } from '@/components/ads/AdSlot';

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_TOOLS.map((tool) => ({
    category: tool.category,
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const tool = getToolBySlug(category, slug);

  if (!tool) {
    return {
      title: 'Tool Not Found | ToolNest',
    };
  }

  const currentYear = new Date().getFullYear();
  // CTR Power Title: Adds current year & high-intent trigger to stand out among text-only results
  let displayTitle = tool.seoTitle;
  if (!displayTitle.includes(currentYear.toString())) {
    displayTitle = `${tool.name} (${currentYear}) – Free, Instant & Accurate | ToolNest`;
  }

  const displayDescription = `${tool.seoDescription} 100% free, private browser-based tool with instant results and no registration.`;

  return {
    title: displayTitle,
    description: displayDescription,
    keywords: tool.keywords,
    alternates: {
      canonical: `/${tool.category}/${tool.slug}`,
    },
    openGraph: {
      title: displayTitle,
      description: displayDescription,
      url: `/${tool.category}/${tool.slug}`,
      siteName: 'ToolNest',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/logo.png',
          width: 512,
          height: 512,
          alt: `${tool.name} – Free Online Tool by ToolNest`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: displayTitle,
      description: displayDescription,
      images: ['/logo.png'],
    },
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { category, slug } = await params;
  const tool = getToolBySlug(category, slug);

  if (!tool) {
    notFound();
  }

  const cat = CATEGORIES[tool.category];
  const relatedTools = getRelatedTools(tool, 4);

  const breadcrumbItems = [
    {
      name: cat?.name || category,
      url: `/${category}`,
    },
    {
      name: tool.name,
      url: `/${category}/${slug}`,
    },
  ];

  return (
    <>
      <ToolJsonLd tool={tool} />

      <div className="w-full max-w-4xl mx-auto pb-16">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Main Interactive Tool Container */}
        <ToolContainer tool={tool}>
          <ToolEngineRenderer tool={tool} />
        </ToolContainer>

        {/* Optional Clean Content Ad Placement (Disabled by default) */}
        <ContentAdSlot />

        {/* In-depth Educational & SEO Content */}
        <ToolSEOContent tool={tool} />

        {/* Internal Linking: Related Tools Grid */}
        <RelatedTools tools={relatedTools} currentToolName={tool.name} />

        {/* Optional Bottom Ad Placement */}
        <BottomAdSlot />
      </div>
    </>
  );
}
