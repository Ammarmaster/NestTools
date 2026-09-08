import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ShieldCheck, Zap, Heart, CheckCircle2, ExternalLink } from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';

export const metadata: Metadata = {
  title: 'About ToolNest – Mission, Privacy & Architecture | A ProDevOpz Product',
  description: 'Learn about ToolNest: an engineering product by ProDevOpz, founded by Md Jalaluddin Master (Ammar Master), providing 1,000+ free, private online tools.',
};

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto pb-16">
      <Breadcrumbs items={[{ name: 'About Us', url: '/about' }]} />

      <div className="space-y-10">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <BrandLogo size={48} />

            <a
              href="https://prodevopz.jobsio.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-xs font-bold text-indigo-700 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 transition-colors shadow-2xs"
            >
              <span>A Product by ProDevOpz</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            About ToolNest
          </h1>

          <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            ToolNest is an engineering product proudly developed by <a href="https://prodevopz.jobsio.in" target="_blank" rel="noopener noreferrer" className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline">ProDevOpz (prodevopz.jobsio.in)</a>, founded and architected by <strong>Md Jalaluddin Master</strong> (also known as <strong>Ammar Master</strong>) with a singular mission: to create the world&apos;s fastest, cleanest, and most private directory of 1,000+ free online tools and calculators.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Most online calculator websites are cluttered with invasive advertisements, slow load times, confusing layouts, and paywalls. ToolNest takes a radically different approach: modern SaaS craftsmanship, instantaneous client-side calculations, and 100% respect for user privacy with zero data uploads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
            <ShieldCheck className="h-6 w-6 text-emerald-500 mb-3" />
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Privacy by Default</h3>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Every tool executes directly in your browser. We never transmit or store your resumes, grades, passwords, or financial figures on remote databases.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
            <Zap className="h-6 w-6 text-indigo-500 mb-3" />
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Lightning Performance</h3>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Pre-rendered static HTML routes ensure zero server cold starts and sub-second page delivery across every mobile and desktop device.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
            <Heart className="h-6 w-6 text-rose-500 mb-3" />
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Always Free</h3>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              All 1,000+ tools are free for life with no registration, no email capture gates, and no hidden subscriptions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
