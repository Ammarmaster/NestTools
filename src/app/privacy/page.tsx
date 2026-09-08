import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy – 100% Client-Side Processing | ToolNest',
  description: 'Our privacy commitment: ToolNest processes calculations, texts, resumes, and passwords locally in your browser. We never collect or store your inputs.',
};

export default function PrivacyPage() {
  return (
    <div className="w-full max-w-4xl mx-auto pb-16">
      <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy' }]} />

      <div className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs space-y-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-50">
              Privacy Policy
            </h1>
            <span className="text-xs text-zinc-400">Last updated: September 2026</span>
          </div>
        </div>

        <section className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            1. Client-Side Only Architecture
          </h2>
          <p>
            At ToolNest, we believe privacy is a fundamental human right. Our core technical architecture is engineered to execute all calculations, string formatting, cryptography algorithms, resume analysis, and file conversions directly inside your device&apos;s web browser.
          </p>
          <p>
            When you type a resume into our ATS checker, generate a secure password, format an SQL query, or calculate your CTC take-home pay, that data never travels over the internet to our servers. It exists solely in your device&apos;s transient RAM memory.
          </p>
        </section>

        <section className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            2. Local Storage
          </h2>
          <p>
            We use your browser&apos;s standard <code className="rounded-md bg-zinc-100 px-1.5 py-0.5 text-xs font-mono dark:bg-zinc-800">localStorage</code> feature strictly to retain non-identifiable user preferences, specifically:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>Your list of favorite tools for quick access.</li>
            <li>Your recently opened tools history.</li>
            <li>Your chosen dark or light visual theme.</li>
            <li>Job application tracker records that you choose to store for your own convenience.</li>
          </ul>
          <p>
            This data remains entirely on your machine and is never synced with any remote database. You can clear this data at any moment by clearing your browser cache.
          </p>
        </section>

        <section className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            3. No Accounts or Registration Required
          </h2>
          <p>
            ToolNest does not require user registration, email addresses, phone numbers, or passwords. We do not maintain any user database.
          </p>
        </section>

        <section className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            4. Third-Party Analytics & Cookies
          </h2>
          <p>
            We may monitor aggregate website visit trends (such as page views and general referrers) using privacy-respecting analytics to understand which tools are most helpful. These metrics contain no personally identifiable information (PII).
          </p>
        </section>
      </div>
    </div>
  );
}
