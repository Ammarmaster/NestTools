'use client';

import React, { useState, useId } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { TopAdSlot, ContentAdSlot, BottomAdSlot } from '@/components/ads/AdSlot';
import { ADS_CONFIG } from '@/lib/ads-config';
import {
  DollarSign,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  HelpCircle,
  BarChart3,
  Globe2,
  Zap,
  Layers,
} from 'lucide-react';

export default function MonetizeGuidePage() {
  const [dailyVisitors, setDailyVisitors] = useState<number>(5000);
  const [rpm, setRpm] = useState<number>(4.5);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const dailyVisitorsInputId = useId();
  const averageRpmInputId = useId();

  // Calculations
  // RPM = Revenue Per 1,000 Pageviews
  // Average page views per visitor on utility tools ~ 1.8
  const estimatedPageViews = dailyVisitors * 1.8;
  const dailyEarnings = (estimatedPageViews / 1000) * rpm;
  const monthlyEarnings = dailyEarnings * 30;
  const yearlyEarnings = dailyEarnings * 365;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const faqs = [
    {
      q: 'How much money can ToolNest realistically make with ads?',
      a: 'Web utility tools like PDF converters, CGPA calculators, and formatters typically generate an RPM (Revenue Per 1,000 pageviews) of $3 to $12 depending on user geography. For example, 10,000 daily visitors viewing 2 pages each (20,000 impressions) at a $5.00 RPM generates $100/day or approximately $3,000/month.',
    },
    {
      q: 'How do I connect my Google AdSense account to ToolNest?',
      a: 'Simply copy your Google AdSense Publisher ID (format: ca-pub-XXXXXXXXXXXXXXXX) and paste it into your .env.local file as NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX. ToolNest will automatically inject the AdSense verification script, render responsive ad slots, and activate Google Auto-Ads.',
    },
    {
      q: 'Do I need an ads.txt file to get paid?',
      a: 'Yes! Google AdSense strictly requires an ads.txt file at the root of your domain (e.g., toolnest.jobsio.in/ads.txt). ToolNest already includes a pre-built ads.txt file in both the public folder and as a dynamic route that automatically populates your publisher ID.',
    },
    {
      q: 'What other ad networks can I use besides Google AdSense?',
      a: 'Once your site reaches higher traffic milestones, you can apply to premium ad management networks such as Ezoic (10k+ visits/mo), Mediavine (50k+ sessions/mo), Raptive (100k+ pageviews/mo), or developer-focused networks like Carbon Ads and BuySellAds for high-CPC developer tools.',
    },
    {
      q: 'Can I earn from affiliate links while waiting for AdSense approval?',
      a: 'Absolutely! ToolNest includes built-in high-converting native sponsor banners for software like GitHub Student Pack, DigitalOcean hosting, and VPNs. You can replace the target links in src/lib/ads-config.ts with your own affiliate referral links to start earning immediately.',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto pb-16 space-y-12">
      <Breadcrumbs items={[{ name: 'Monetization Guide', url: '/monetize' }]} />

      {/* Hero Header */}
      <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-b from-emerald-50/70 via-white to-white p-8 sm:p-12 text-center dark:border-zinc-800 dark:from-emerald-950/20 dark:via-zinc-950 dark:to-zinc-950 shadow-xs">
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/60 dark:text-emerald-300">
            <DollarSign className="h-3.5 w-3.5" />
            <span>Monetization Blueprint & Ad Revenue Engine</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            How to Make Money from Ads on ToolNest
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Learn step-by-step how to monetize 1,000+ high-traffic utility tools with Google AdSense, affiliate partnerships, and native sponsorships. Calculate your potential earnings below.
          </p>
        </div>
      </section>

      {/* Top Banner Ad Placement */}
      <TopAdSlot />

      {/* Interactive Ad Revenue Calculator */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
            <BarChart3 className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Interactive Ad Revenue Calculator
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Estimate your monthly and annual revenue based on real-world utility tool metrics
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders Control */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex justify-between text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-2">
                <label htmlFor={dailyVisitorsInputId}>Daily Unique Visitors</label>
                <span className="font-mono text-indigo-600 dark:text-indigo-400 text-sm">
                  {dailyVisitors.toLocaleString()} visitors / day
                </span>
              </div>
              <input
                id={dailyVisitorsInputId}
                type="range"
                min="500"
                max="50000"
                step="500"
                value={dailyVisitors}
                onChange={(e) => setDailyVisitors(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer h-2 bg-zinc-200 rounded-lg dark:bg-zinc-800"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 mt-1">
                <span>500/day</span>
                <span>25,000/day</span>
                <span>50,000/day</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-2">
                <label htmlFor={averageRpmInputId}>Average RPM (Revenue Per 1,000 Pageviews)</label>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 text-sm">
                  ${rpm.toFixed(2)} RPM
                </span>
              </div>
              <input
                id={averageRpmInputId}
                type="range"
                min="1.5"
                max="15.0"
                step="0.5"
                value={rpm}
                onChange={(e) => setRpm(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-zinc-200 rounded-lg dark:bg-zinc-800"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 mt-1">
                <span>$1.50 (Tier 3 traffic)</span>
                <span>$5.00 (Global average)</span>
                <span>$15.00 (US/UK Finance & Dev)</span>
              </div>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100 dark:bg-zinc-950/40 dark:border-zinc-800/80 text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-zinc-800 dark:text-zinc-200">
                <Zap className="h-3.5 w-3.5 text-amber-500" />
                <span>Estimated Impressions</span>
              </div>
              <p>
                At ~1.8 tool executions per visitor, {dailyVisitors.toLocaleString()} daily visitors generate approximately{' '}
                <strong className="text-zinc-900 dark:text-zinc-100">
                  {Math.round(estimatedPageViews).toLocaleString()} pageviews/day
                </strong>{' '}
                ({Math.round(estimatedPageViews * 30).toLocaleString()} pageviews/month).
              </p>
            </div>
          </div>

          {/* Revenue Display Card */}
          <div className="lg:col-span-5 rounded-3xl border border-emerald-200 bg-linear-to-b from-emerald-50/50 to-white p-6 dark:border-emerald-900/50 dark:from-emerald-950/30 dark:to-zinc-900 shadow-sm text-center space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Estimated Monthly Earnings
              </span>
              <div className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-zinc-50 mt-1 tracking-tight">
                ${Math.round(monthlyEarnings).toLocaleString()}
                <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">/mo</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-emerald-100 dark:border-emerald-950">
              <div className="rounded-2xl bg-white p-3 border border-zinc-100 dark:bg-zinc-900/80 dark:border-zinc-800">
                <span className="text-[10px] uppercase font-bold text-zinc-400">Daily Revenue</span>
                <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200">
                  ${dailyEarnings.toFixed(2)}
                </p>
              </div>
              <div className="rounded-2xl bg-white p-3 border border-zinc-100 dark:bg-zinc-900/80 dark:border-zinc-800">
                <span className="text-[10px] uppercase font-bold text-zinc-400">Annual Run-Rate</span>
                <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  ${Math.round(yearlyEarnings).toLocaleString()}
                </p>
              </div>
            </div>

            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
              * Based on standard display ad RPM averages. Combining Google AdSense with affiliate partner links can increase yield by 30-50%.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Google AdSense Setup Guide */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Step-by-Step: Enabling Google AdSense on ToolNest
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Follow these 4 simple steps to connect your AdSense account and begin earning payouts directly to your bank account.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Step 1 */}
          <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-950/40 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600 text-xs font-bold text-white">
                1
              </span>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                Create or Log In to Google AdSense
              </h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Visit <a href="https://adsense.google.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:underline inline-flex items-center gap-0.5">Google AdSense <ExternalLink className="h-2.5 w-2.5" /></a> and register with your Google account. Click <strong>&quot;Sites&quot; &rarr; &quot;Add site&quot;</strong> and enter your domain (e.g., <code>toolnest.jobsio.in</code>).
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-950/40 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600 text-xs font-bold text-white">
                2
              </span>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                Add Publisher ID to Your Environment
              </h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Copy your Publisher ID (e.g., <code>ca-pub-1234567890123456</code>) and place it in your project&apos;s <code>.env.local</code> file or Vercel dashboard:
            </p>
            <div className="relative rounded-xl bg-zinc-900 p-2.5 text-[11px] font-mono text-emerald-400 flex items-center justify-between">
              <code>NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX</code>
              <button
                type="button"
                onClick={() => copyToClipboard('NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX', 'env')}
                className="text-zinc-400 hover:text-white p-1 rounded-md transition-colors"
                title="Copy snippet"
              >
                {copiedKey === 'env' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-950/40 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600 text-xs font-bold text-white">
                3
              </span>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                Verify ads.txt Ownership
              </h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              ToolNest already generates your <code>/ads.txt</code> endpoint automatically! Verify it is accessible by browsing to{' '}
              <a href="/ads.txt" target="_blank" className="font-semibold text-indigo-600 hover:underline">/ads.txt</a>. In Google AdSense, click &quot;Check for updates&quot; on your ads.txt status.
            </p>
            <div className="relative rounded-xl bg-zinc-900 p-2.5 text-[11px] font-mono text-zinc-300 flex items-center justify-between">
              <code>google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0</code>
              <button
                type="button"
                onClick={() => copyToClipboard('google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0', 'adstxt')}
                className="text-zinc-400 hover:text-white p-1 rounded-md transition-colors"
                title="Copy ads.txt line"
              >
                {copiedKey === 'adstxt' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>

          {/* Step 4 */}
          <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-950/40 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600 text-xs font-bold text-white">
                4
              </span>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                Pass Site Review & Start Earning
              </h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Google will review your site within 24 to 72 hours. ToolNest is pre-configured with everything Google looks for: original utility code, fast load times, mobile responsiveness, and full legal compliance pages.
            </p>
          </div>
        </div>
      </section>

      {/* Content Ad Placement */}
      <ContentAdSlot />

      {/* 5 Revenue Streams for Online Utility Tools */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            5 Best Ways to Monetize Online Utility Tools
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Don&apos;t rely solely on one network. Diversify across these 5 high-yield monetization models.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-950/40 space-y-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              1. Display & Auto Ads
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Google AdSense places responsive banner units at natural reading points (above the fold, inside tool results, and footer). Auto-Ads intelligently insert units for maximum viewability.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-950/40 space-y-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              2. High-Intent Affiliate Links
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Visitors using developer tools often need hosting (DigitalOcean, AWS); visitors using resume tools need job platforms; students need study software. Affiliate commissions pay $20-$100 per conversion.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-950/40 space-y-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              3. Premium Developer Ad Networks
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Networks like <strong>Carbon Ads</strong> and <strong>BuySellAds</strong> cater exclusively to programmers, designers, and tech workers, commanding high CPMs ($8 to $20) with non-intrusive aesthetic units.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-950/40 space-y-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400">
              <Globe2 className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              4. Direct SaaS Sponsorships
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Once tool categories reach 50,000+ monthly visits, sell dedicated header spots or &quot;Sponsored by&quot; ribbons directly to developer SaaS tools, hiring agencies, and educational apps on a flat monthly retainer ($500-$2,000/mo).
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-950/40 space-y-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400">
              <DollarSign className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              5. High-Value Niches Strategy
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              ToolNest gives you distinct category hubs: Financial tools (EMI, Salary, Tax) have the highest CPC ($1.50 - $4.00 per click); PDF converters have high global volume; Developer formatters have high retention.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-950/40 space-y-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950 dark:text-cyan-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              AdSense Approval Guarantee
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              All compliance pages are already live: <Link href="/privacy" className="underline">Privacy Policy</Link>, <Link href="/terms" className="underline">Terms</Link>, <Link href="/disclaimer" className="underline">Disclaimer</Link>, <Link href="/contact" className="underline">Contact</Link>, and <Link href="/founder" className="underline">Founder Profile</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60 space-y-6">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Frequently Asked Questions
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
  );
}
