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

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Ammar Master (Mohammad Jalaluddin Master) – Founder at ProDevOpz & ToolNest',
  description:
    'Official portfolio and biography of Ammar Master (Mohammad Jalaluddin Master), Founder and Chief Product Architect at ProDevOpz. Creator of ToolNest and pioneer of 100% client-side privacy web tools.',
  keywords: [
    'Ammar Master',
    'Mohammad Jalaluddin Master',
    'Md Jalaluddin Master',
    'Jalaluddin Master',
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
        about: { '@id': `${baseUrl}/ammar-master#person` },
        mainEntity: { '@id': `${baseUrl}/ammar-master#person` },
      },
      {
        '@type': 'Person',
        '@id': `${baseUrl}/ammar-master#person`,
        name: 'Mohammad Jalaluddin Master',
        alternateName: [
          'Ammar Master',
          'Md Jalaluddin Master',
          'Jalaluddin Master',
          'Ammar',
        ],
        givenName: 'Mohammad Jalaluddin',
        familyName: 'Master',
        additionalName: 'Ammar',
        jobTitle: 'Founder & Chief Product Architect',
        image: `${baseUrl}/images/ammar-master-jalaluddin-master-founder-at-prodevopz.jpg`,
        description:
          'Ammar Master (Mohammad Jalaluddin Master) is a visionary software engineer, product architect, and founder of ToolNest and lead at ProDevOpz (prodevopz.jobsio.in), dedicated to building high-speed, private, client-side web platforms.',
        url: `${baseUrl}/ammar-master`,
        worksFor: {
          '@type': 'Organization',
          name: 'ProDevOpz',
          url: 'https://prodevopz.jobsio.in',
        },
        knowsAbout: [
          'Full-Stack Web Architecture',
          'Client-Side Cryptography',
          'PDF & Document Processing',
          'Next.js 16 & React Performance',
          'SEO Engineering & Structured Data',
          'Software Engineering & DevOps',
        ],
        sameAs: [
          'https://prodevopz.jobsio.in',
          `${baseUrl}/founder`,
          'https://github.com/Ammarmaster',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Who is Ammar Master?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ammar Master is the professional name of Mohammad Jalaluddin Master (also written Md Jalaluddin Master), an innovative software engineer and founder of ToolNest and Chief Product Architect at ProDevOpz.',
            },
          },
          {
            '@type': 'Question',
            name: 'What companies and products did Ammar Master create?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ammar Master built ToolNest (an internet-scale catalog of 1,000+ free online tools) and leads product architecture at ProDevOpz (prodevopz.jobsio.in), which provides engineering and career utilities for developers worldwide.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Ammar Master approach user privacy in software?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ammar Master advocates for 100% client-side execution, ensuring all calculations, conversions, and document processing happen entirely within the user browser without transmitting sensitive files to remote servers.',
            },
          },
        ],
      },
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

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50 divide-y divide-zinc-100 dark:divide-zinc-800 space-y-4">
            <div className="pt-2">
              <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                Who is Ammar Master (Mohammad Jalaluddin Master)?
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Ammar Master is the professional name of <strong>Mohammad Jalaluddin Master</strong> (also known as <strong>Md Jalaluddin Master</strong>). He is a software engineer, product architect, and the founder of ToolNest and Chief Product Architect at ProDevOpz.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                What is the relationship between Ammar Master and ProDevOpz?
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Ammar Master serves as the Chief Product Architect at <strong>ProDevOpz</strong> (<a href="https://prodevopz.jobsio.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline font-semibold">prodevopz.jobsio.in</a>). ToolNest is an engineering product developed within the ProDevOpz ecosystem.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                Why did Ammar Master build 1,000+ tools with client-side privacy?
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Most web utility websites harvest user files, upload personal documents to untrusted cloud servers, and charge recurring subscriptions. Ammar Master built ToolNest to offer an instant, free, and completely private alternative where calculations and document conversions never leave the client device.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                How can I get in touch with Ammar Master?
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                You can reach Ammar Master via email at <a href="mailto:contact@toolnest.app" className="text-indigo-600 underline font-semibold">contact@toolnest.app</a> or explore his open-source work on GitHub at <a href="https://github.com/Ammarmaster" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline font-semibold">github.com/Ammarmaster</a>.
              </p>
            </div>
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
