import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getToolsByCategory } from '@/data/tools';
import { ToolCard } from '@/components/tools/ToolCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { TopAdSlot, ContentAdSlot, BottomAdSlot } from '@/components/ads/AdSlot';
import {
  DollarSign,
  TrendingUp,
  Percent,
  Landmark,
  ArrowRight,
  HelpCircle,
  PiggyBank,
  Receipt,
} from 'lucide-react';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Free Salary, Loan EMI & Finance Calculators (${currentYear}) | ToolNest`,
  description:
    'Free personal finance calculators: In-hand take-home salary calculator from CTC, home loan EMI calculator, GST sales tax breakdown, compound interest, and SIP investment returns. 100% accurate & free.',
  alternates: {
    canonical: '/finance-calculators',
  },
  openGraph: {
    title: `Free Salary, Loan EMI & Finance Calculators (${currentYear}) | ToolNest`,
    description:
      'Plan your salary, estimate monthly loan EMIs, and compute compound interest returns with private financial tools.',
    url: '/finance-calculators',
    images: ['/logo.png'],
  },
};

export default function FinanceCalculatorsPage() {
  const financeTools = getToolsByCategory('finance');
  const careerTools = getToolsByCategory('career');
  // Combine finance & salary tools for a comprehensive financial suite
  const allFinancialTools = [...financeTools, ...careerTools];

  const faqs = [
    {
      q: 'How is In-Hand Take-Home Salary calculated from annual CTC?',
      a: 'Cost to Company (CTC) includes gross salary plus mandatory employer contributions. Take-home salary is calculated by subtracting Employee Provident Fund (EPF 12% of basic), Professional Tax (PT), and income tax deductions (TDS under New vs Old tax regimes) from monthly gross salary.',
    },
    {
      q: 'What is the formula for calculating Home Loan EMI?',
      a: 'The standard Equated Monthly Installment (EMI) formula is: EMI = [P × R × (1+R)^N] / [(1+R)^N - 1], where P is the Principal loan amount, R is the monthly interest rate (annual rate / 12 / 100), and N is the loan tenure in months. Our calculator provides instant monthly installment amounts and total interest breakdowns.',
    },
    {
      q: 'Does ToolNest store or log my financial data?',
      a: 'Never. All salary inputs, loan numbers, and tax figures are calculated strictly within your browser. No financial data is ever collected or sent across the network.',
    },
  ];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Free Finance, Loan & Salary Calculators (${currentYear})`,
    description:
      'Comprehensive suite of salary, EMI, investment, and tax calculators for working professionals and businesses.',
    url: 'https://toolnest.jobsio.in/finance-calculators',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: allFinancialTools.map((tool, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: tool.name,
        url: `https://toolnest.jobsio.in/${tool.category}/${tool.slug}`,
        description: tool.description,
      })),
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="w-full max-w-6xl mx-auto pb-16 space-y-12">
        <Breadcrumbs items={[{ name: 'Finance Calculators', url: '/finance-calculators' }]} />

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-b from-teal-50/70 via-white to-white p-8 sm:p-12 text-center dark:border-zinc-800 dark:from-teal-950/20 dark:via-zinc-950 dark:to-zinc-950 shadow-xs">
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800 dark:border-teal-900/60 dark:bg-teal-950/60 dark:text-teal-300">
              <DollarSign className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
              <span>Smart Financial Planning & Tax Utilities</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              Free Salary, Loan EMI & Tax Calculators
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Calculate in-hand monthly salary from annual CTC, plan loan amortization payments, determine GST tax splits, and forecast compound interest growth with zero login.
            </p>
          </div>
        </section>

        {/* Top Banner Ad Placement */}
        <TopAdSlot />

        {/* Tools Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Landmark className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                <span>Financial & Salary Calculators ({allFinancialTools.length})</span>
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                Accurate financial mathematical formulas with instant results
              </p>
            </div>
            <Link
              href="/tools"
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
            >
              <span>Explore All 1,000+ Tools</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allFinancialTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} showCategory={true} />
            ))}
          </div>
        </section>

        {/* Mid-Content Ad Placement */}
        <ContentAdSlot />

        {/* Educational Financial Guides */}
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60 space-y-6">
          <div className="flex items-center gap-2.5">
            <PiggyBank className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Key Financial Formulas Explained
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <div className="space-y-2 rounded-2xl bg-zinc-50 p-4 border border-zinc-100 dark:bg-zinc-950/40 dark:border-zinc-800">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-1.5">
                <Receipt className="h-4 w-4 text-teal-600" />
                <span>Annual CTC to Monthly In-Hand Breakdown</span>
              </h3>
              <p>
                Many job offers state a high Cost-to-Company (CTC) figure that does not match actual bank deposits. Your take-home pay equals:
              </p>
              <div className="rounded-xl bg-white p-2.5 font-mono text-zinc-800 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-200 text-[11px]">
                In-Hand = (Gross Salary) - (EPF 12%) - (Prof Tax) - (TDS)
              </div>
              <p>
                Use our Salary Calculator to account for standard deductions, gratuity withholdings, and tax regimes before accepting new job offers.
              </p>
            </div>

            <div className="space-y-2 rounded-2xl bg-zinc-50 p-4 border border-zinc-100 dark:bg-zinc-950/40 dark:border-zinc-800">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-1.5">
                <Percent className="h-4 w-4 text-indigo-500" />
                <span>Compound Interest vs Simple Interest</span>
              </h3>
              <p>
                While simple interest grows linearly, compound interest grows exponentially by earning returns on previously accumulated interest:
              </p>
              <div className="rounded-xl bg-white p-2.5 font-mono text-zinc-800 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-200 text-[11px]">
                A = P × (1 + r/n)^(n × t)
              </div>
              <p>
                Even modest monthly contributions in compounding investments generate substantial capital over long horizons.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60 space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Financial Calculators FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-950/40">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  {faq.q}
                </h3>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Ad Unit */}
        <BottomAdSlot />
      </div>
    </>
  );
}
