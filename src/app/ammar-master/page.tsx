import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Lock,
  Code2,
  Heart,
  Terminal,
  Layers,
  Mail,
  Award,
  ArrowRight,
  Globe,
  ExternalLink,
  Cpu,
  Briefcase,
  CheckCircle2,
  FileCode,
  Compass
} from 'lucide-react';
import { getBaseUrl } from '@/lib/site-config';
import {
  FOUNDER,
  FOUNDER_FAQ,
  PRODEVOPZ,
  SOCIAL_PROFILES,
  faqSchema,
  personId,
  personSchema,
  prodevopzSchema,
} from '@/lib/founder';

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: {
    absolute: 'Ammar Master (Jalaluddin Master) – Founder of ProDevOpz AI & ToolNest | Official Profile',
  },
  description:
    'Who is Ammar Master? Ammar Master (Mohammad Jalaluddin Master) is a software engineer and the Founder & Chief Product Architect of ProDevOpz (ProDevOpz AI) and creator of ToolNest. Official bio, facts, contact and profiles.',
  keywords: [
    'Ammar Master',
    'Mohammad Jalaluddin Master',
    'Md Jalaluddin Master',
    'Jalaluddin Master',
    'who is Jalaluddin Master',
    'ProDevOpz AI',
    'ProDevOpz AI founder',
    'who founded ProDevOpz',
    'Ammarmaster',
    'Ammar Master ProDevOpz',
    'Mohammad Jalaluddin Master ProDevOpz',
    'Ammar Master founder',
    'Ammar Master software engineer',
    'Ammar Master ToolNest',
    'who is Ammar Master',
    'Ammar Master biography',
    'Ammar Master portfolio',
    'ProDevOpz founder',
  ],
  alternates: {
    canonical: '/ammar-master',
  },
  openGraph: {
    title: 'Ammar Master (Mohammad Jalaluddin Master) – Founder at ProDevOpz',
    description:
      'Official profile of Ammar Master (Mohammad Jalaluddin Master), Founder & Chief Product Architect at ProDevOpz and creator of ToolNest.',
    url: '/ammar-master',
    siteName: 'ToolNest – A Product by ProDevOpz',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: `${baseUrl}/images/ammar-master-jalaluddin-master-founder-at-prodevopz.jpg`,
        width: 1080,
        height: 960,
        alt: 'Ammar Master (Mohammad Jalaluddin Master) – Founder and Chief Product Architect at ProDevOpz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ammar Master (Mohammad Jalaluddin Master) – Founder at ProDevOpz',
    description:
      'Official profile of Ammar Master (Mohammad Jalaluddin Master), Founder & Chief Product Architect at ProDevOpz.',
    images: [`${baseUrl}/images/ammar-master-jalaluddin-master-founder-at-prodevopz.jpg`],
  },
};

export default function AmmarMasterPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Ammar Master Profile', url: '/ammar-master' },
  ];

  const profileJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${baseUrl}/ammar-master#webpage`,
        url: `${baseUrl}/ammar-master`,
        name: 'Ammar Master (Mohammad Jalaluddin Master) – Official Profile & Portfolio',
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${baseUrl}/#website`,
          url: baseUrl,
          name: 'ToolNest',
          publisher: {
            '@type': 'Organization',
            name: 'ProDevOpz',
            url: 'https://prodevopz.jobsio.in',
          },
        },
        about: { '@id': personId(baseUrl) },
        mainEntity: { '@id': personId(baseUrl) },
        primaryImageOfPage: `${baseUrl}${FOUNDER.image}`,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['#who-is-ammar-master', '#quick-facts'],
        },
      },
      personSchema(baseUrl),
      prodevopzSchema(baseUrl),
      faqSchema(),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />

      <div className="w-full max-w-4xl mx-auto pb-16">
        <Breadcrumbs items={breadcrumbs} />

        {/* Profile Hero Section */}
        <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-b from-indigo-50/60 via-white to-white p-8 sm:p-12 dark:border-zinc-800 dark:from-indigo-950/20 dark:via-zinc-900/60 dark:to-zinc-900 shadow-xs">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Verified Creator Profile</span>
            </div>

            <a
              href="https://prodevopz.jobsio.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-xs font-bold text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900 dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 transition-colors shadow-2xs"
            >
              <span>A Product by ProDevOpz</span>
              <ExternalLink className="h-3 w-3" />
            </a>

            <Link
              href="/founder"
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 transition-colors shadow-2xs"
            >
              <Compass className="h-3 w-3 text-indigo-500" />
              <span>Read Full Founder Story</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Real Founder Image */}
            <div className="relative group shrink-0 mx-auto md:mx-0">
              <div className="h-48 w-48 sm:h-60 sm:w-60 rounded-3xl overflow-hidden bg-linear-to-tr from-indigo-600 via-indigo-500 to-violet-500 p-1 shadow-2xl shadow-indigo-500/25 ring-1 ring-zinc-200 dark:ring-zinc-800">
                <div className="relative h-full w-full rounded-[22px] overflow-hidden bg-zinc-900">
                  <Image
                    src="/images/ammar-master-jalaluddin-master-founder-at-prodevopz.jpg"
                    alt="Ammar Master (Mohammad Jalaluddin Master) – Founder at ProDevOpz"
                    width={500}
                    height={500}
                    priority
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div
                className="absolute -bottom-2.5 -right-2.5 flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-bold text-white shadow-lg ring-4 ring-white dark:ring-zinc-950"
                title="Verified Founder & Chief Architect"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Verified Founder</span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-3 text-center md:text-left">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                  Ammar Master
                </h1>
                <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Legal / Full Name: <strong>Mohammad Jalaluddin Master</strong> (also known as <strong>Md Jalaluddin Master</strong>)
                </p>
              </div>

              <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                Founder, Chief Product Architect & Software Engineer at ProDevOpz
              </p>

              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-xl">
                Creator of <strong>ToolNest</strong>, a suite of 1,000+ free online tools designed for zero data tracking, instantaneous execution, and production SaaS polish. Leading product architecture under the <strong>ProDevOpz</strong> umbrella.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2">
                <a
                  href="https://prodevopz.jobsio.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/80 px-3 py-1.5 text-xs font-bold text-indigo-700 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-indigo-500" />
                  <span>ProDevOpz (prodevopz.jobsio.in)</span>
                </a>
                <a
                  href="mailto:contact@toolnest.app"
                  className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-indigo-500" />
                  <span>Email Ammar</span>
                </a>
                <a
                  href="https://github.com/Ammarmaster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 transition-colors"
                >
                  <Code2 className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-300" />
                  <span>GitHub (@Ammarmaster)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Direct answer (AEO / GEO): first paragraph answers "Who is Ammar Master?" */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Who is Ammar Master (Jalaluddin Master)?
          </h2>
          <p id="who-is-ammar-master" className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            {FOUNDER.shortBio} He leads <strong>ProDevOpz</strong> — also known as <strong>ProDevOpz AI</strong> — a software
            engineering and AI product studio at{' '}
            <a href={PRODEVOPZ.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline font-semibold">
              prodevopz.jobsio.in
            </a>
            .
          </p>
        </section>

        {/* Quick facts table (easy for search snippets and AI assistants to extract) */}
        <section className="mt-8">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Quick Facts</h2>
          <dl
            id="quick-facts"
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 rounded-3xl border border-zinc-200 bg-white p-6 text-sm dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            {[
              ['Known as', 'Ammar Master'],
              ['Full name', 'Mohammad Jalaluddin Master'],
              ['Other spellings', 'Md Jalaluddin Master, Jalaluddin Master, Ammarmaster'],
              ['Role', `${FOUNDER.jobTitle}`],
              ['Company', 'ProDevOpz (ProDevOpz AI)'],
              ['Company website', 'prodevopz.jobsio.in'],
              ['Flagship product', 'ToolNest — 1,000+ free online tools'],
              ['Profession', 'Software Engineer & Product Architect'],
              ['Expertise', 'Next.js, TypeScript, privacy-first web apps, SEO, AI products'],
              ['Contact', FOUNDER.email],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col">
                <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{k}</dt>
                <dd className="font-medium text-zinc-900 dark:text-zinc-100">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
            Profiles:{' '}
            {SOCIAL_PROFILES.map((url, i) => (
              <React.Fragment key={url}>
                {i > 0 && ' · '}
                <a href={url} target="_blank" rel="me noopener noreferrer" className="text-indigo-600 underline">
                  {url.replace(/^https?:\/\//, '')}
                </a>
              </React.Fragment>
            ))}
            {' · '}
            <Link href="/prodevopz" className="text-indigo-600 underline">About ProDevOpz</Link>
          </p>
        </section>

        {/* Career & Venture Highlights */}
        <section className="mt-12 space-y-6">
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-indigo-500" />
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Key Ventures & Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-indigo-500/10 px-2.5 py-1 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  Flagship Product
                </span>
                <span className="text-xs font-semibold text-zinc-400">2026 – Present</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                ToolNest (1,000+ Free Online Tools)
              </h3>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                Architected from the ground up to solve the problem of ad-infested, paywalled online calculators. Built with Next.js 16, TypeScript, and client-side Web APIs with over 1,000+ statically rendered routes.
              </p>
              <div className="pt-2">
                <Link
                  href="/tools"
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  <span>Explore ToolNest Directory</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  Engineering Ecosystem
                </span>
                <span className="text-xs font-semibold text-zinc-400">Active</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                ProDevOpz (prodevopz.jobsio.in)
              </h3>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                An engineering and career ecosystem focused on empowering modern developers, cloud professionals, and students with high-yield productivity tools and career resources.
              </p>
              <div className="pt-2">
                <a
                  href="https://prodevopz.jobsio.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  <span>Visit prodevopz.jobsio.in</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Competencies */}
        <section className="mt-12 space-y-6">
          <div className="flex items-center gap-2">
            <Cpu className="h-5 w-5 text-indigo-500" />
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Technical Specialties
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { title: 'Full-Stack Architecture', desc: 'Next.js 16, TypeScript, React, Node.js' },
              { title: 'Client-Side Cryptography', desc: 'Web Crypto API, SHA-256, HMAC, Base64' },
              { title: 'Document Engineering', desc: 'Client-side PDF & Word OpenXML synthesis' },
              { title: 'Web Performance', desc: 'Sub-second SSG, Zero CLS, Core Web Vitals' },
              { title: 'SEO Architecture', desc: 'JSON-LD Schema, Canonical graphs, Sitemaps' },
              { title: 'Privacy Engineering', desc: 'Zero-knowledge browser execution architectures' },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{skill.title}</h4>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Google People Also Ask FAQs */}
        <section className="mt-12 space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Frequently Asked Questions (FAQ)
            </h2>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50 divide-y divide-zinc-100 dark:divide-zinc-800">
            {FOUNDER_FAQ.map((f) => (
              <div key={f.q} className="py-4 first:pt-0 last:pb-0">
                <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{f.q}</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-12 text-center rounded-3xl bg-linear-to-br from-indigo-600 to-violet-600 p-8 text-white shadow-lg shadow-indigo-500/10">
          <Heart className="h-8 w-8 mx-auto mb-3 text-rose-300" />
          <h3 className="text-xl font-bold">Connect with Ammar Master</h3>
          <p className="text-xs text-indigo-100 mt-1 max-w-md mx-auto">
            Have a suggestion, partnership idea, or feature request? We welcome collaboration and community feedback.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:contact@toolnest.app"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-bold text-indigo-600 hover:bg-indigo-50 transition-colors shadow-xs"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Contact Ammar Master</span>
            </a>
            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
            >
              <span>Explore 1,000+ Tools</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
