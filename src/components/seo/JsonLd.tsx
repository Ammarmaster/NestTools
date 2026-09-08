import React from 'react';
import { ToolDefinition } from '@/types/tool';

interface JsonLdProps {
  tool: ToolDefinition;
}

export const ToolJsonLd: React.FC<JsonLdProps> = ({ tool }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.name,
    url: `https://toolnest.app/${tool.category}/${tool.slug}`,
    description: tool.seoDescription,
    applicationCategory: tool.category,
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'ToolNest',
      url: 'https://toolnest.app',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
