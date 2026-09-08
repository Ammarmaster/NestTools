import React from 'react';
import Link from 'next/link';
import { CATEGORY_LIST } from '@/data/categories';
import { Wrench, Heart, ShieldCheck, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white">
                  <Wrench className="h-4 w-4" />
                </div>
                <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Tool<span className="text-indigo-600 dark:text-indigo-400">Nest</span>
                </span>
              </Link>

              <a
                href="https://prodevopz.jobsio.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50/80 px-2.5 py-0.5 text-[11px] font-bold text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-300 dark:hover:bg-indigo-900/60 transition-colors"
                title="A product by ProDevOpz"
              >
                <span>A Product by ProDevOpz</span>
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
            </div>
            <p className="max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
              Free, fast, mobile-friendly online tools for students, software engineers, career professionals, and everyday mathematical tasks. No signup required.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>100% Client-Side Processing • Your Data Never Leaves Your Device</span>
            </div>
          </div>

          {/* Popular Categories Col 1 */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Categories
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {CATEGORY_LIST.slice(0, 4).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/${cat.slug}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Col 2 */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              More Tools
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {CATEGORY_LIST.slice(4).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/${cat.slug}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/tools" className="font-semibold text-indigo-600 dark:text-indigo-400">
                  View All 1,000+ Tools &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Company Pages */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Company & Legal
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/founder" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                  Meet the Founder
                </Link>
              </li>
              <li>
                <a
                  href="https://prodevopz.jobsio.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>ProDevOpz Ecosystem</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  About ToolNest
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Contact & Feedback
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Calculator Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-100 pt-8 sm:flex-row dark:border-zinc-900">
          <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center sm:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} ToolNest — A product by <a href="https://prodevopz.jobsio.in" target="_blank" rel="noopener noreferrer" className="font-bold text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 underline decoration-indigo-300">ProDevOpz</a>. Founded & engineered by <strong>Md Jalaluddin Master</strong> (aka <strong>Ammar Master</strong>). Built for speed, privacy, and productivity.
          </p>
          <div className="flex items-center gap-4 text-xs text-zinc-400 dark:text-zinc-500">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/sitemap.xml" className="hover:underline">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
