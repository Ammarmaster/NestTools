import React from 'react';
import { ToolDefinition } from '@/types/tool';
import { CATEGORIES } from '@/data/categories';
import { getBaseUrl } from '@/lib/site-config';

interface JsonLdProps {
  tool: ToolDefinition;
}

export const ToolJsonLd: React.FC<JsonLdProps> = ({ tool }) => {
  const baseUrl = getBaseUrl();
  const cat = CATEGORIES[tool.category];

  // 1. SoftwareApplication Schema with AggregateRating & Free Offer
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${tool.name} (Free Online)`,
    alternateName: tool.name,
    url: `${baseUrl}/${tool.category}/${tool.slug}`,
    description: tool.seoDescription || tool.description,
    applicationCategory: 'UtilitiesApplication',
    applicationSubCategory: cat?.name || tool.category,
    operatingSystem: 'All modern web browsers (Chrome, Safari, Firefox, Edge)',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    softwareVersion: '2026.1',
    isAccessibleForFree: true,
    // NOTE: no aggregateRating — Google penalises review markup that isn't backed by real user reviews.
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    creator: {
      '@type': 'Organization',
      name: 'ProDevOpz',
      url: 'https://prodevopz.jobsio.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ToolNest',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
  };

  // 2. BreadcrumbList Schema for Google Breadcrumb display
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: cat?.name || tool.category,
        item: `${baseUrl}/${tool.category}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: tool.name,
        item: `${baseUrl}/${tool.category}/${tool.slug}`,
      },
    ],
  };

  // 3. FAQPage Schema for SERP expandable Q&A
  const faqSchema =
    tool.content?.faqs && tool.content.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: tool.content.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  // 4. HowTo Schema for Step-by-Step Google Cards
  const howToSchema =
    tool.content?.howToUse && tool.content.howToUse.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: `How to Use ${tool.name} Online`,
          description: tool.description,
          step: tool.content.howToUse.map((step, idx) => ({
            '@type': 'HowToStep',
            position: idx + 1,
            name: `Step ${idx + 1}`,
            text: step,
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
    </>
  );
};
