'use client';

import React, { useState } from 'react';
import { Copy, Check, RotateCcw, ArrowUpDown, AlignLeft, Type } from 'lucide-react';

// -------------------------------------------------------------
// 1. Live Word & Text Counter
// -------------------------------------------------------------
export const WordCounterEngine: React.FC = () => {
  const [text, setText] = useState<string>(
    'ToolNest is a free, modern platform containing 110+ productivity tools built for students, developers, and job seekers. Fast, private, and runs directly in your browser.'
  );
  const [copied, setCopied] = useState<boolean>(false);

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charsWithSpaces = text.length;
  const charsNoSpaces = text.replace(/\s+/g, '').length;
  const sentences = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphs = text.split(/\n+/).filter((p) => p.trim().length > 0).length;
  const readingTimeSecs = Math.ceil((words / 200) * 60);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-[11px] font-medium text-zinc-400 block">Words</span>
          <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{words}</span>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-[11px] font-medium text-zinc-400 block">Characters</span>
          <span className="text-2xl font-black text-zinc-900 dark:text-zinc-100">{charsWithSpaces}</span>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-[11px] font-medium text-zinc-400 block">No Spaces</span>
          <span className="text-2xl font-black text-zinc-900 dark:text-zinc-100">{charsNoSpaces}</span>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-[11px] font-medium text-zinc-400 block">Sentences</span>
          <span className="text-2xl font-black text-zinc-900 dark:text-zinc-100">{sentences}</span>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900 col-span-2 sm:col-span-1">
          <span className="text-[11px] font-medium text-zinc-400 block">Reading Time</span>
          <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
            {readingTimeSecs < 60 ? `${readingTimeSecs}s` : `${Math.ceil(readingTimeSecs / 60)}m`}
          </span>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="text-xs font-bold uppercase text-zinc-400">Type or Paste Text</label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="text-xs text-indigo-600 hover:text-indigo-700 font-semibold dark:text-indigo-400"
            >
              {copied ? 'Copied!' : 'Copy Text'}
            </button>
            <button
              type="button"
              onClick={() => setText('')}
              className="text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              Clear
            </button>
          </div>
        </div>
        <textarea
          rows={9}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste content..."
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 text-xs leading-relaxed outline-hidden focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100"
        />
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. Case Converter Engine
// -------------------------------------------------------------
export const CaseConverterEngine: React.FC = () => {
  const [text, setText] = useState<string>('ToolNest free productivity tools platform');

  const toSentence = (s: string) =>
    s.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());

  const toTitle = (s: string) =>
    s
      .toLowerCase()
      .split(' ')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

  const toCamel = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());

  const toPascal = (s: string) => {
    const c = toCamel(s);
    return c.charAt(0).toUpperCase() + c.slice(1);
  };

  const toSnake = (s: string) =>
    s
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^a-zA-Z0-9_]/g, '');

  const toKebab = (s: string) =>
    s
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '');

  const toAlternating = (s: string) =>
    s
      .split('')
      .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
      .join('');

  return (
    <div className="space-y-6">
      <div>
        <label className="text-xs font-bold uppercase text-zinc-400 mb-1.5 block">Your Text</label>
        <textarea
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 text-xs font-medium outline-hidden focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setText(toSentence(text))}
          className="rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          Sentence case
        </button>
        <button
          type="button"
          onClick={() => setText(text.toUpperCase())}
          className="rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          UPPERCASE
        </button>
        <button
          type="button"
          onClick={() => setText(text.toLowerCase())}
          className="rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          lowercase
        </button>
        <button
          type="button"
          onClick={() => setText(toTitle(text))}
          className="rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          Title Case
        </button>
        <button
          type="button"
          onClick={() => setText(toCamel(text))}
          className="rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          camelCase
        </button>
        <button
          type="button"
          onClick={() => setText(toPascal(text))}
          className="rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          PascalCase
        </button>
        <button
          type="button"
          onClick={() => setText(toSnake(text))}
          className="rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          snake_case
        </button>
        <button
          type="button"
          onClick={() => setText(toKebab(text))}
          className="rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          kebab-case
        </button>
        <button
          type="button"
          onClick={() => setText(toAlternating(text))}
          className="rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          aLtErNaTiNg
        </button>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. Remove Duplicate Lines
// -------------------------------------------------------------
export const RemoveDuplicateLinesEngine: React.FC = () => {
  const [input, setInput] = useState<string>(
    'apple\nbanana\norange\napple\ngrape\nbanana\nwatermelon'
  );
  const [output, setOutput] = useState<string>('');
  const [caseSensitive, setCaseSensitive] = useState<boolean>(false);
  const [trimLines, setTrimLines] = useState<boolean>(true);

  const removeDuplicates = () => {
    const lines = input.split('\n');
    const seen = new Set<string>();
    const result: string[] = [];

    lines.forEach((line) => {
      const processed = trimLines ? line.trim() : line;
      const compareKey = caseSensitive ? processed : processed.toLowerCase();
      if (!seen.has(compareKey)) {
        seen.add(compareKey);
        result.push(processed);
      }
    });

    setOutput(result.join('\n'));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <div className="flex items-center gap-4 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
          <label className="flex items-center gap-1.5">
            <input
              type="checkbox"
              checked={caseSensitive}
              onChange={(e) => setCaseSensitive(e.target.checked)}
              className="rounded-md border-zinc-300 text-indigo-600"
            />
            Case Sensitive
          </label>
          <label className="flex items-center gap-1.5">
            <input
              type="checkbox"
              checked={trimLines}
              onChange={(e) => setTrimLines(e.target.checked)}
              className="rounded-md border-zinc-300 text-indigo-600"
            />
            Trim Whitespace
          </label>
        </div>

        <button
          type="button"
          onClick={removeDuplicates}
          className="rounded-xl bg-indigo-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-indigo-700"
        >
          Deduplicate Lines
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold uppercase text-zinc-400 mb-1 block">Input List</label>
          <textarea
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-3 font-mono text-xs outline-hidden dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200"
          />
        </div>
        <div>
          <label className="text-xs font-bold uppercase text-zinc-400 mb-1 block">Unique List</label>
          <textarea
            rows={10}
            value={output || input}
            readOnly
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-3 font-mono text-xs outline-hidden dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200"
          />
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. Text Sorter & Reverser
// -------------------------------------------------------------
export const TextSorterEngine: React.FC = () => {
  const [text, setText] = useState<string>('Zebra\nApple\nMango\nBanana\nOrange');

  const sortAZ = () => {
    const sorted = text.split('\n').sort((a, b) => a.localeCompare(b));
    setText(sorted.join('\n'));
  };

  const sortZA = () => {
    const sorted = text.split('\n').sort((a, b) => b.localeCompare(a));
    setText(sorted.join('\n'));
  };

  const sortLength = () => {
    const sorted = text.split('\n').sort((a, b) => a.length - b.length);
    setText(sorted.join('\n'));
  };

  const reverseLines = () => {
    setText(text.split('\n').reverse().join('\n'));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <button
          type="button"
          onClick={sortAZ}
          className="rounded-xl border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          Sort A &rarr; Z
        </button>
        <button
          type="button"
          onClick={sortZA}
          className="rounded-xl border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          Sort Z &rarr; A
        </button>
        <button
          type="button"
          onClick={sortLength}
          className="rounded-xl border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          Sort by Length
        </button>
        <button
          type="button"
          onClick={reverseLines}
          className="rounded-xl border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          Reverse Lines
        </button>
      </div>

      <textarea
        rows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 font-mono text-xs outline-hidden focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200"
      />
    </div>
  );
};

// -------------------------------------------------------------
// 5. Slug Generator Engine
// -------------------------------------------------------------
export const SlugGeneratorEngine: React.FC = () => {
  const [headline, setHeadline] = useState<string>('10 Powerful Tips for Modern Web Development in 2026!');
  const [separator, setSeparator] = useState<string>('-');
  const [copied, setCopied] = useState<boolean>(false);

  const slug = headline
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, separator)
    .replace(/^-+|-+$/g, '');

  const handleCopy = () => {
    navigator.clipboard.writeText(slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Headline or Title</label>
        <input
          type="text"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
        />
      </div>

      <div className="flex items-center gap-4 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
        <span>Separator:</span>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="sep"
            checked={separator === '-'}
            onChange={() => setSeparator('-')}
          />
          Hyphen (-)
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="sep"
            checked={separator === '_'}
            onChange={() => setSeparator('_')}
          />
          Underscore (_)
        </label>
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
            Clean URL Slug
          </span>
          <div className="mt-1 font-mono text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 select-all">
            /{slug}
          </div>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span>{copied ? 'Copied' : 'Copy Slug'}</span>
        </button>
      </div>
    </div>
  );
};
