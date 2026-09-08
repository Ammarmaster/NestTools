'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, DollarSign, TrendingUp, Briefcase, FileSearch, ArrowRight } from 'lucide-react';
import { trackCopy, trackToolUse } from '@/lib/analytics';

// -------------------------------------------------------------
// 1. CTC to In-Hand Salary Calculator
// -------------------------------------------------------------
export const CtcToInHandSalaryEngine: React.FC = () => {
  const [annualCtc, setAnnualCtc] = useState<number>(60000);
  const [basicPercent, setBasicPercent] = useState<number>(50);
  const [copied, setCopied] = useState(false);

  // Calculations
  const grossMonthly = annualCtc / 12;
  const basicMonthly = (grossMonthly * basicPercent) / 100;
  
  // Employee EPF is 12% of basic
  const employeeEpfMonthly = basicMonthly * 0.12;
  
  // Professional tax (standard average ~200/mo or $20)
  const profTaxMonthly = 200;
  
  // Estimated income tax (approx 10-15% effective on taxable)
  const taxableAnnual = Math.max(0, annualCtc - (employeeEpfMonthly * 12));
  const estimatedTaxMonthly = (taxableAnnual * 0.08) / 12;

  const totalDeductionsMonthly = employeeEpfMonthly + profTaxMonthly + estimatedTaxMonthly;
  const inHandMonthly = Math.max(0, grossMonthly - totalDeductionsMonthly);

  const handleCopy = () => {
    const txt = `Annual CTC: $${annualCtc.toLocaleString()} | Monthly In-Hand: $${inHandMonthly.toFixed(2)} | Gross Monthly: $${grossMonthly.toFixed(2)}`;
    navigator.clipboard.writeText(txt);
    setCopied(true);
    trackCopy('ctc-to-inhand-salary', 'result');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
            Annual Cost to Company (CTC)
          </label>
          <div className="relative mt-1">
            <span className="absolute left-3.5 top-3 text-zinc-400">$</span>
            <input
              type="number"
              value={annualCtc}
              onChange={(e) => setAnnualCtc(Math.max(0, Number(e.target.value)))}
              className="w-full rounded-xl border border-zinc-200 bg-white p-3 pl-8 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
            Basic Salary Proportion ({basicPercent}%)
          </label>
          <input
            type="range"
            min="30"
            max="60"
            value={basicPercent}
            onChange={(e) => setBasicPercent(Number(e.target.value))}
            className="mt-4 w-full accent-indigo-600"
          />
        </div>
      </div>

      {/* Main Take Home Card */}
      <div className="rounded-3xl border border-indigo-100 bg-linear-to-br from-indigo-50/80 to-purple-50/50 p-6 dark:border-indigo-900/40 dark:from-indigo-950/30 dark:to-zinc-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Estimated Monthly Take-Home Pay
          </span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-4xl font-black text-zinc-900 dark:text-zinc-50">
              ${inHandMonthly.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className="text-sm font-semibold text-zinc-500">/ month</span>
          </div>
          <span className="text-xs text-zinc-500 mt-1 block">
            Annual take-home approx ${(inHandMonthly * 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-indigo-700 transition-colors self-start sm:self-center"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span>{copied ? 'Copied' : 'Copy Pay Breakdown'}</span>
        </button>
      </div>

      {/* Itemized Table */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
          Monthly Salary Deductions Breakdown
        </h4>
        <div className="divide-y divide-zinc-100 text-xs dark:divide-zinc-800">
          <div className="flex justify-between py-2 text-zinc-700 dark:text-zinc-300">
            <span>Gross Monthly Wage</span>
            <span className="font-semibold">${grossMonthly.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 text-zinc-700 dark:text-zinc-300">
            <span>Employee Provident Fund (EPF 12%)</span>
            <span className="font-semibold text-rose-500">-${employeeEpfMonthly.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 text-zinc-700 dark:text-zinc-300">
            <span>Estimated Income Tax / TDS</span>
            <span className="font-semibold text-rose-500">-${estimatedTaxMonthly.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 text-zinc-700 dark:text-zinc-300">
            <span>Professional Tax</span>
            <span className="font-semibold text-rose-500">-${profTaxMonthly.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. Salary Hike Calculator
// -------------------------------------------------------------
export const SalaryHikeEngine: React.FC = () => {
  const [currentSalary, setCurrentSalary] = useState<number>(75000);
  const [hikePercentage, setHikePercentage] = useState<number>(25);

  const incrementAmount = (currentSalary * hikePercentage) / 100;
  const newSalary = currentSalary + incrementAmount;
  const monthlyHike = incrementAmount / 12;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Current Salary ($)</label>
          <input
            type="number"
            value={currentSalary}
            onChange={(e) => setCurrentSalary(Math.max(0, Number(e.target.value)))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Hike Percentage (%)</label>
          <input
            type="number"
            value={hikePercentage}
            onChange={(e) => setHikePercentage(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-6 dark:border-emerald-900/30 dark:bg-emerald-950/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase text-emerald-600 dark:text-emerald-400">
            Revised New Salary
          </span>
          <div className="mt-1 text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">
            ${newSalary.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </div>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Annual Increment: +${incrementAmount.toLocaleString()} (+${monthlyHike.toFixed(2)}/month)
          </p>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. Resume Word Counter & 1-Page Check
// -------------------------------------------------------------
export const ResumeWordCounterEngine: React.FC = () => {
  const [text, setText] = useState<string>(
    `PROFESSIONAL SUMMARY\nResults-driven Software Engineer with 4+ years of experience in architecting full-stack React and Node.js applications. Scaled distributed microservices handling 2M+ daily active users.\n\nEXPERIENCE\nSenior Frontend Engineer | TechCorp (2023 - Present)\n• Spearheaded the migration from legacy monolithic views to Next.js App Router, decreasing page load latencies by 42%.\n• Collaborated with cross-functional product and UX teams to deliver 15 high-converting features.\n• Mentored 4 junior engineers on clean code and unit testing principles.`
  );

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;
  const lines = text.split('\n').length;
  const readingTimeMins = Math.ceil(words / 200);

  // 1-page guideline: 400 to 650 words
  const pageFitStatus = words === 0
    ? 'Empty'
    : words <= 650
    ? 'Perfect 1-Page Resume'
    : words <= 1200
    ? '2-Page Resume (For Senior Roles)'
    : 'Too Long (Consider Condensing)';

  return (
    <div className="space-y-6">
      <div>
        <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5 block">
          Paste Resume Text
        </label>
        <textarea
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your CV text here to analyze length and page fit..."
          className="w-full rounded-2xl border border-zinc-200 bg-white p-4 text-xs font-mono leading-relaxed outline-hidden focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-[11px] font-medium text-zinc-400 block">Total Words</span>
          <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{words}</span>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-[11px] font-medium text-zinc-400 block">Characters</span>
          <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{characters}</span>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-[11px] font-medium text-zinc-400 block">Total Lines</span>
          <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{lines}</span>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-[11px] font-medium text-zinc-400 block">Reading Time</span>
          <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">~{readingTimeMins} min</span>
        </div>
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4 dark:border-indigo-900/40 dark:bg-indigo-950/20 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase text-indigo-600 dark:text-indigo-400">
            Page Fit Assessment
          </span>
          <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
            {pageFitStatus}
          </div>
        </div>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">
          Optimal 1-Page: 400–650 words
        </span>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. Resume ATS Keyword Checker
// -------------------------------------------------------------
export const AtsKeywordCheckerEngine: React.FC = () => {
  const [resumeText, setResumeText] = useState<string>(
    `Frontend developer proficient in React, Next.js, TypeScript, Tailwind CSS, REST APIs, Git, and automated unit testing with Jest.`
  );
  const [jobDescText, setJobDescText] = useState<string>(
    `Looking for a Senior Frontend Engineer with strong proficiency in React, TypeScript, GraphQL, Docker, Next.js, Tailwind CSS, CI/CD, and AWS.`
  );

  // Extract words of length >= 3, lowercase
  const extractKeywords = (txt: string) => {
    const commonStopwords = new Set([
      'the', 'and', 'for', 'with', 'that', 'this', 'from', 'are', 'you', 'will', 'have',
      'your', 'looking', 'about', 'role', 'team', 'work', 'experience', 'strong'
    ]);
    const clean = txt.toLowerCase().match(/\b[a-z0-9+#.-]{3,}\b/g) || [];
    return Array.from(new Set(clean)).filter((w) => !commonStopwords.has(w));
  };

  const resumeKeywords = new Set(extractKeywords(resumeText));
  const jdKeywords = extractKeywords(jobDescText);

  const matchedKeywords = jdKeywords.filter((k) => resumeKeywords.has(k));
  const missingKeywords = jdKeywords.filter((k) => !resumeKeywords.has(k));

  const score = jdKeywords.length > 0 ? Math.round((matchedKeywords.length / jdKeywords.length) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5 block">
            1. Your Resume Text
          </label>
          <textarea
            rows={6}
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            placeholder="Paste your resume content..."
            className="w-full rounded-2xl border border-zinc-200 bg-white p-3 text-xs outline-hidden focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5 block">
            2. Target Job Description (JD)
          </label>
          <textarea
            rows={6}
            value={jobDescText}
            onChange={(e) => setJobDescText(e.target.value)}
            placeholder="Paste job description..."
            className="w-full rounded-2xl border border-zinc-200 bg-white p-3 text-xs outline-hidden focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      {/* Match Score Display */}
      <div className="rounded-3xl border border-indigo-100 bg-indigo-50/50 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            ATS Match Score
          </span>
          <div className="mt-1 text-4xl font-black text-zinc-900 dark:text-zinc-50">
            {score}%
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            {score >= 70 ? '🎉 Excellent keyword density for ATS screening' : '⚠️ Missing key skills mentioned in JD'}
          </p>
        </div>

        <div className="text-xs space-y-1">
          <div className="text-emerald-600 dark:text-emerald-400 font-semibold">
            ✓ {matchedKeywords.length} Skills Matched
          </div>
          <div className="text-rose-500 font-semibold">
            ✗ {missingKeywords.length} Missing Keywords
          </div>
        </div>
      </div>

      {/* Missing Keywords Tags */}
      {missingKeywords.length > 0 && (
        <div>
          <h4 className="text-xs font-bold uppercase text-zinc-500 mb-2">
            Recommended Missing Skills to Add
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {missingKeywords.map((w) => (
              <span key={w} className="rounded-lg bg-rose-50 border border-rose-200/80 px-2.5 py-1 text-xs font-medium text-rose-600 dark:bg-rose-950/40 dark:border-rose-900 dark:text-rose-400">
                + {w}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
