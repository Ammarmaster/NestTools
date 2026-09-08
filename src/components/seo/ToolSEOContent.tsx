'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ToolDefinition } from '@/types/tool';
import { ChevronDown, HelpCircle, BookOpen, Lightbulb, Calculator, CheckCircle2, Tag, Shield } from 'lucide-react';

interface ToolSEOContentProps {
  tool: ToolDefinition;
}

export const ToolSEOContent: React.FC<ToolSEOContentProps> = ({ tool }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { content } = tool;

  // Schema.org FAQPage structured data
  const faqJsonLd = content.faqs && content.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  // Schema.org HowTo structured data for rich snippet ranking
  const howToJsonLd = content.howToUse && content.howToUse.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Use ${tool.name} Online`,
    description: tool.description,
    step: content.howToUse.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: `Step ${idx + 1}`,
      text: step,
    })),
  } : null;

  return (
    <div className="mt-12 space-y-10">
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}

      {/* 1. What is [Tool] Section with exact-match keyword header */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="flex items-center gap-2.5 mb-4">
          <BookOpen className="h-5 w-5 text-indigo-500" />
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            What is the Free Online {tool.name}?
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          {content.whatIs}
        </p>

        <div className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-500/10 p-3 text-xs text-emerald-700 dark:text-emerald-300">
          <Shield className="h-4 w-4 shrink-0" />
          <span><strong>100% Client-Side Privacy:</strong> Calculations and data processing occur entirely in your local browser memory. Zero files or personal inputs are uploaded to our servers.</span>
        </div>
      </section>

      {/* 2. Step-by-Step How to Use Guide */}
      {content.howToUse && content.howToUse.length > 0 && (
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2.5 mb-4">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              How to Use {tool.name} Online: Step-by-Step Guide
            </h2>
          </div>
          <ol className="space-y-3">
            {content.howToUse.map((step, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                  {index + 1}
                </span>
                <span className="pt-0.5 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* 3. Formula & Worked Example Grid */}
      {(content.formula || content.example) && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {content.formula && (
            <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-center gap-2 mb-3">
                <Calculator className="h-5 w-5 text-amber-500" />
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  Mathematical Formula & Underlying Logic
                </h3>
              </div>
              <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50 p-4 font-mono text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 overflow-x-auto">
                {content.formula}
              </div>
            </section>
          )}

          {content.example && (
            <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-5 w-5 text-indigo-500" />
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  Real-World Calculation Example
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 whitespace-pre-line">
                {content.example}
              </p>
            </section>
          )}
        </div>
      )}

      {/* 4. Tips & Best Practices */}
      {content.tips && content.tips.length > 0 && (
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2.5 mb-4">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Pro Tips for Getting Accurate Results
            </h2>
          </div>
          <ul className="space-y-2.5">
            {content.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                <span className="text-indigo-500 font-bold">•</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 5. Frequently Asked Questions Accordion */}
      {content.faqs && content.faqs.length > 0 && (
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2.5 mb-6">
            <HelpCircle className="h-5 w-5 text-indigo-500" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Frequently Asked Questions About {tool.name}
            </h2>
          </div>

          <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {content.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform ${
                        isOpen ? 'rotate-180 text-indigo-500' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 6. Related Search Topics & Target Keywords */}
      {tool.keywords && tool.keywords.length > 0 && (
        <section className="rounded-2xl border border-zinc-100 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-900/20">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="h-4 w-4 text-zinc-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Related Search Topics & Keywords
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {tool.keywords.map((kw, i) => (
              <Link
                key={i}
                href={`/tools?q=${encodeURIComponent(kw)}`}
                className="rounded-lg border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-600 transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-indigo-700 dark:hover:text-indigo-300"
              >
                #{kw}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
