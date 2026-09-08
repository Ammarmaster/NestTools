'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-3xl mx-auto pb-16">
      <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} />

      <div className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white mb-6">
          <Mail className="h-6 w-6" />
        </div>

        <h1 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
          Contact & Tool Suggestions
        </h1>

        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Have an idea for a new tool or noticed an issue with an existing calculator? Send us your feedback below.
        </p>

        {submitted ? (
          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-900 dark:bg-emerald-950/30">
            <CheckCircle2 className="h-8 w-8 text-emerald-500 mx-auto mb-2" />
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-base">Thank You!</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
              Your feedback has been received. We review community requests weekly to expand ToolNest.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-xs font-semibold outline-hidden focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-xs font-semibold outline-hidden focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Message / Tool Request</label>
              <textarea
                rows={5}
                required
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-xs font-semibold outline-hidden focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-xs font-bold text-white hover:bg-indigo-700 transition-colors shadow-xs"
            >
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
