import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Service | ToolNest',
  description: 'Terms of Service and conditions for using ToolNest free online tools platform.',
};

export default function TermsPage() {
  return (
    <div className="w-full max-w-4xl mx-auto pb-16">
      <Breadcrumbs items={[{ name: 'Terms of Service', url: '/terms' }]} />

      <div className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs space-y-6">
        <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-50">
          Terms of Service
        </h1>
        <span className="text-xs text-zinc-400 block -mt-4">Effective Date: September 2026</span>

        <section className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">1. Acceptance of Terms</h2>
          <p>
            By accessing and using ToolNest (the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the website.
          </p>
        </section>

        <section className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">2. Free Use License</h2>
          <p>
            ToolNest grants you a personal, worldwide, royalty-free, non-assignable, and non-exclusive license to use the calculators and software provided on the website for personal, educational, or commercial tasks.
          </p>
        </section>

        <section className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">3. Prohibited Use</h2>
          <p>
            You may not attempt to disrupt the service, launch denial-of-service attacks, reverse engineer non-public systems, or scrape the service in a manner that degrades performance for other users.
          </p>
        </section>

        <section className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">4. Modifications</h2>
          <p>
            We reserve the right to modify or discontinue tools, features, or parts of the service at any time without prior notice.
          </p>
        </section>
      </div>
    </div>
  );
}
