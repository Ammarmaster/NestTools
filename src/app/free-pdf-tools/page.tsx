import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getToolsByCategory } from '@/data/tools';
import { ToolCard } from '@/components/tools/ToolCard';
import { PdfToolsCatalog } from '@/components/tools/PdfToolsCatalog';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { TopAdSlot, ContentAdSlot, BottomAdSlot } from '@/components/ads/AdSlot';
import {
  FileText,
  ShieldCheck,
  Zap,
  Lock,
  ArrowRight,
  HelpCircle,
  FileCheck,
  CheckCircle2,
} from 'lucide-react';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Free PDF Tools Online (${currentYear}) – 100% Private, Zero Server Uploads | ToolNest`,
  description:
    'Free online PDF & Image suite: Compress PDF by 80%, convert PDF to Word DOCX, merge, split, rotate, sign PDF, watermark, protect with password, and resize images. 100% client-side privacy with zero server uploads.',
  alternates: {
    canonical: '/free-pdf-tools',
  },
  openGraph: {
    title: `Free PDF Tools Online (${currentYear}) – 100% Client-Side & Private | ToolNest`,
    description:
      'Process sensitive PDF documents, invoices, and resumes in your browser without uploading to external servers.',
    url: '/free-pdf-tools',
    images: ['/logo.png'],
  },
};

export default function FreePdfToolsPage() {
  const pdfTools = getToolsByCategory('pdf');

  const faqs = [
    {
      q: 'Why is ToolNest safer than traditional online PDF converters like iLovePDF or Smallpdf?',
      a: 'Most online PDF converters upload your confidential PDF files to remote cloud servers to run command-line tools, creating severe data breach risks for bank statements, medical records, and proprietary contracts. ToolNest executes PDF parsing, merging, compression, and DOCX generation directly inside your local browser memory using JavaScript and WebAssembly. Your files never touch our servers.',
    },
    {
      q: 'How can I compress a PDF to 200 KB or 100 KB for government or job portal uploads?',
      a: 'Open our "Compress PDF" tool, select your document, and choose "Extreme Compression". Our algorithm optimizes vector tables, strips unused metadata streams, and packs byte structures to achieve the lowest possible file size while keeping all text razor-sharp.',
    },
    {
      q: 'Can I sign PDF documents online without printing or scanning?',
      a: 'Yes! Use the "Sign PDF" tool. Draw your signature using your finger, stylus, or mouse, select the page and exact stamp position, and click "Sign & Download PDF". The cryptographic vector signature is permanently baked into your document in seconds.',
    },
    {
      q: 'Can I convert PDF files to editable Microsoft Word (DOCX)?',
      a: 'Yes. Our PDF to Word converter extracts text blocks, font sizes, and paragraph layouts and packages them into clean, editable .docx files compatible with Microsoft Word, Google Docs, and LibreOffice.',
    },
    {
      q: 'Is there any file size limit or daily conversion limit?',
      a: 'ToolNest does not enforce artificial daily limits, subscriptions, or wait times. Because conversions run using your local device RAM and CPU, performance scales with your machine.',
    },
    {
      q: 'Do I need to create an account or provide an email?',
      a: 'No account, password, or email is ever requested. You can convert, compress, sign, and edit PDFs with zero friction and complete anonymity.',
    },
  ];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Free Online PDF Tools & Converters (${currentYear})`,
    description:
      'Suite of 100% client-side, privacy-first PDF utilities for converting, merging, and editing documents.',
    url: 'https://toolnest.jobsio.in/free-pdf-tools',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: pdfTools.map((tool, idx) => ({
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
        <Breadcrumbs items={[{ name: 'Free PDF Tools', url: '/free-pdf-tools' }]} />

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-b from-rose-50/70 via-white to-white p-8 sm:p-12 text-center dark:border-zinc-800 dark:from-rose-950/20 dark:via-zinc-950 dark:to-zinc-950 shadow-xs">
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1 text-xs font-bold text-rose-700 dark:border-rose-900/60 dark:bg-rose-950/60 dark:text-rose-300">
              <ShieldCheck className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400" />
              <span>100% Client-Side Privacy • Zero Server Uploads</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              Free Online PDF Tools & Converters Suite
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Convert PDF to editable Word (DOCX), merge multiple PDFs, compress images, and generate business invoices directly in your browser. No files are ever sent to remote servers.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Unlimited Conversions
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> No Software Installation
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> No Account Required
              </span>
            </div>
          </div>
        </section>

        {/* Top Banner Ad Placement */}
        <TopAdSlot />

        {/* PDF Tools Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <FileText className="h-5 w-5 text-rose-500" />
                <span>Featured PDF & Document Tools ({pdfTools.length})</span>
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                Click any tool below to launch in your browser instantly
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

          {/* Interactive Tools Catalog with Sub-category tabs & Search */}
          <PdfToolsCatalog tools={pdfTools} />
        </section>

        {/* Mid-Content Ad Placement */}
        <ContentAdSlot />

        {/* Deep SEO & Educational Comparison */}
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Why Client-Side PDF Processing is the New Standard
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Every day, millions of people upload confidential tax documents, signed agreements, resumes, and medical records to online conversion services without realizing their files are copied to third-party databases. ToolNest was built by Md Jalaluddin Master (Ammar Master) and the ProDevOpz team to solve this fundamental privacy vulnerability.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  <th className="py-3 px-4 font-semibold">Security Feature</th>
                  <th className="py-3 px-4 font-bold text-emerald-600 dark:text-emerald-400">ToolNest (Browser WASM)</th>
                  <th className="py-3 px-4 font-semibold text-rose-600 dark:text-rose-400">Traditional PDF Sites</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300">
                <tr>
                  <td className="py-3 px-4 font-medium">Server File Uploads</td>
                  <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-bold">Zero (Files stay in RAM)</td>
                  <td className="py-3 px-4 text-rose-600 dark:text-rose-400">Uploaded to remote cloud server</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Data Breach Exposure</td>
                  <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-bold">Impossible (No backend storage)</td>
                  <td className="py-3 px-4 text-rose-600 dark:text-rose-400">High (Third-party data retention)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Processing Speed</td>
                  <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-bold">Instant (No network upload lag)</td>
                  <td className="py-3 px-4 text-rose-600 dark:text-rose-400">Slow (Upload & download round-trips)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Paywalls & Subscriptions</td>
                  <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-bold">100% Free Forever</td>
                  <td className="py-3 px-4 text-rose-600 dark:text-rose-400">Credits, paywalls, and rate limits</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs */}
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60 space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              PDF Conversion FAQs
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
