import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getToolsByCategory } from '@/data/tools';
import { ToolCard } from '@/components/tools/ToolCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { TopAdSlot, ContentAdSlot, BottomAdSlot } from '@/components/ads/AdSlot';
import {
  GraduationCap,
  Calculator,
  Clock,
  Sparkles,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Award,
} from 'lucide-react';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Free Student Calculators (${currentYear}) – CGPA, SGPA, Attendance & Study Tools | ToolNest`,
  description:
    'Free academic calculators for high school, college, and university students: CGPA to percentage, SGPA calculator, 75% attendance planner, Pomodoro study timer, and scientific calculators.',
  alternates: {
    canonical: '/student-calculators',
  },
  openGraph: {
    title: `Free Student Calculators (${currentYear}) | ToolNest`,
    description:
      'Fast, accurate, browser-based calculators for students: CGPA, SGPA, attendance percentages, and study timers.',
    url: '/student-calculators',
    images: ['/logo.png'],
  },
};

export default function StudentCalculatorsPage() {
  const studentTools = getToolsByCategory('student');

  const faqs = [
    {
      q: 'How is CGPA converted to percentage in universities?',
      a: 'The most widely accepted standard formula across Indian universities (CBSE, VTU, Mumbai University, Anna University, AKTU) is: Percentage (%) = CGPA × 9.5. For US and Canadian 4.0 GPA systems, percentage conversion uses standard WES/credential evaluation scales (e.g., GPA × 25 or grade boundaries). ToolNest supports both conversion scales with instant formulas.',
    },
    {
      q: 'How does the 75% Attendance Calculator work?',
      a: 'The attendance calculator determines how many consecutive classes you must attend to achieve or maintain a required threshold (e.g., 75% or 80%), or how many classes you can safely miss without dipping below attendance criteria.',
    },
    {
      q: 'Is the Pomodoro study timer scientifically proven?',
      a: 'Yes. The Pomodoro technique utilizes 25-minute focused study sprints alternating with 5-minute restorative breaks. This cycle prevents cognitive fatigue, improves information retention, and minimizes procrastination during exam preparation.',
    },
    {
      q: 'Are all student tools completely free without registration?',
      a: 'Yes, 100% free with zero registration, paywalls, or student email verification required.',
    },
  ];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Free Student Calculators & Academic Tools (${currentYear})`,
    description:
      'Collection of free academic calculators: CGPA, SGPA, Attendance, and Pomodoro study timers.',
    url: 'https://toolnest.jobsio.in/student-calculators',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: studentTools.map((tool, idx) => ({
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
        <Breadcrumbs items={[{ name: 'Student Calculators', url: '/student-calculators' }]} />

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-b from-amber-50/70 via-white to-white p-8 sm:p-12 text-center dark:border-zinc-800 dark:from-amber-950/20 dark:via-zinc-950 dark:to-zinc-950 shadow-xs">
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-700 dark:border-amber-900/60 dark:bg-amber-950/60 dark:text-amber-300">
              <GraduationCap className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>For School, College & University Students</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              Free Academic & Student Calculators Suite
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Calculate semester CGPA & SGPA, convert grades to percentage, plan mandatory 75% attendance quotas, and study smarter with our built-in Pomodoro productivity assistant.
            </p>
          </div>
        </section>

        {/* Top Banner Ad Placement */}
        <TopAdSlot />

        {/* Student Tools Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-amber-500" />
                <span>Featured Student Calculators ({studentTools.length})</span>
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                Accurate client-side grade computations and study tools
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
            {studentTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} showCategory={false} />
            ))}
          </div>
        </section>

        {/* Mid-Content Ad Placement */}
        <ContentAdSlot />

        {/* Informational Academic Guide */}
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60 space-y-6">
          <div className="flex items-center gap-2.5">
            <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Understanding University Grading & GPA Conversions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <div className="space-y-2 rounded-2xl bg-zinc-50 p-4 border border-zinc-100 dark:bg-zinc-950/40 dark:border-zinc-800">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-1.5">
                <Award className="h-4 w-4 text-amber-500" />
                <span>10-Point Scale to Percentage Formula</span>
              </h3>
              <p>
                In the standard 10-point Cumulative Grade Point Average (CGPA) system used by central boards and universities:
              </p>
              <div className="rounded-xl bg-white p-2.5 font-mono text-zinc-800 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-200 text-[11px]">
                Percentage (%) = CGPA × 9.5
              </div>
              <p>
                For example, an 8.4 CGPA equals <strong>79.80%</strong>. This standard was established by examining the marks distribution of students scoring above 60%.
              </p>
            </div>

            <div className="space-y-2 rounded-2xl bg-zinc-50 p-4 border border-zinc-100 dark:bg-zinc-950/40 dark:border-zinc-800">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-indigo-500" />
                <span>The 75% Attendance Requirement</span>
              </h3>
              <p>
                Most higher education institutions mandate a minimum 75% attendance threshold to qualify for final examinations.
              </p>
              <div className="rounded-xl bg-white p-2.5 font-mono text-zinc-800 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-200 text-[11px]">
                Attendance % = (Classes Attended / Total Classes) × 100
              </div>
              <p>
                Our attendance calculator tells you the exact number of future lectures you can skip or must attend to safely clear exam eligibility requirements.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60 space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Student Calculators FAQs
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
