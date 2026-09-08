'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, Download, Play, AlertTriangle, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { trackCopy } from '@/lib/analytics';

// -------------------------------------------------------------
// 1. JSON Formatter, Validator & Minifier
// -------------------------------------------------------------
export const JsonFormatterEngine: React.FC<{ defaultMode?: 'format' | 'validate' | 'minify' }> = ({
  defaultMode = 'format',
}) => {
  const [input, setInput] = useState<string>(
    '{"product":"ToolNest","features":["fast","free","client-side"],"pricing":{"tier":"free","price":0},"active":true}'
  );
  const [output, setOutput] = useState<string>('');
  const [indent, setIndent] = useState<number>(2);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<{ origSize: number; newSize: number } | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const formatJson = () => {
    try {
      setError(null);
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, indent);
      setOutput(formatted);
      setStats({ origSize: new Blob([input]).size, newSize: new Blob([formatted]).size });
    } catch (err: any) {
      setError(err.message || 'Invalid JSON syntax');
      setOutput('');
    }
  };

  const minifyJson = () => {
    try {
      setError(null);
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setStats({ origSize: new Blob([input]).size, newSize: new Blob([minified]).size });
    } catch (err: any) {
      setError(err.message || 'Invalid JSON syntax');
      setOutput('');
    }
  };

  const loadSample = () => {
    setInput(
      JSON.stringify(
        {
          name: 'ToolNest Free Platform',
          version: '1.0.0',
          categories: ['student', 'career', 'developer', 'text', 'math', 'date', 'converter', 'finance'],
          toolCount: 110,
          privacy: { clientSideOnly: true, serverTracking: false },
        },
        null,
        indent
      )
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output || input);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadJson = () => {
    const blob = new Blob([output || input], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'toolnest-formatted.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      {/* Top Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={formatJson}
            className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-indigo-700 shadow-xs"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Format JSON</span>
          </button>
          <button
            type="button"
            onClick={minifyJson}
            className="rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            Minify JSON
          </button>
          <button
            type="button"
            onClick={loadSample}
            className="rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            Load Sample
          </button>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={indent}
            onChange={(e) => setIndent(Number(e.target.value))}
            className="rounded-xl border border-zinc-200 bg-white px-2.5 py-1 text-xs font-semibold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            <option value={2}>2 Spaces</option>
            <option value={4}>4 Spaces</option>
          </select>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 rounded-xl border border-zinc-200 bg-white px-2.5 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          <button
            type="button"
            onClick={downloadJson}
            className="flex items-center gap-1 rounded-xl border border-zinc-200 bg-white px-2.5 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* Editor Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold uppercase text-zinc-400 mb-1 block">Input JSON</label>
          <textarea
            rows={12}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste raw JSON here..."
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-3.5 font-mono text-xs text-zinc-800 outline-hidden focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200"
          />
        </div>

        <div>
          <label className="text-xs font-bold uppercase text-zinc-400 mb-1 block">Formatted Output</label>
          <textarea
            rows={12}
            value={output || input}
            readOnly
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-3.5 font-mono text-xs text-zinc-800 outline-hidden dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200"
          />
        </div>
      </div>

      {/* Status Alert */}
      {error ? (
        <div className="flex items-center gap-2 rounded-2xl border border-rose-200 bg-rose-50 p-3.5 text-xs text-rose-600 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-400">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          <span className="font-mono">{error}</span>
        </div>
      ) : stats ? (
        <div className="flex items-center justify-between rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-xs text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4" />
            <span className="font-bold">Valid JSON Payload</span>
          </div>
          <span>
            {stats.origSize} bytes → {stats.newSize} bytes
          </span>
        </div>
      ) : null}
    </div>
  );
};

// -------------------------------------------------------------
// 2. SQL Formatter & Validator
// -------------------------------------------------------------
export const SqlFormatterEngine: React.FC = () => {
  const [sql, setSql] = useState<string>(
    'select id, first_name, email from users where active = 1 and status = "confirmed" order by created_at desc limit 25;'
  );
  const [formattedSql, setFormattedSql] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const keywords = [
    'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'ORDER BY', 'GROUP BY',
    'HAVING', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN',
    'LIMIT', 'OFFSET', 'INSERT INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE FROM'
  ];

  const formatSql = () => {
    let result = sql.trim();
    // Uppercase keywords
    keywords.forEach((kw) => {
      const regex = new RegExp(`\\b${kw}\\b`, 'gi');
      result = result.replace(regex, kw);
    });

    // Indentation and line breaks
    result = result
      .replace(/\s+/g, ' ')
      .replace(/\bSELECT\b/g, 'SELECT\n ')
      .replace(/\bFROM\b/g, '\nFROM')
      .replace(/\bWHERE\b/g, '\nWHERE')
      .replace(/\bAND\b/g, '\n  AND')
      .replace(/\bOR\b/g, '\n  OR')
      .replace(/\bGROUP BY\b/g, '\nGROUP BY')
      .replace(/\bORDER BY\b/g, '\nORDER BY')
      .replace(/\bLIMIT\b/g, '\nLIMIT');

    setFormattedSql(result);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedSql || sql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <button
          type="button"
          onClick={formatSql}
          className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-700 shadow-xs"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Format & Uppercase SQL</span>
        </button>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
          <span>{copied ? 'Copied' : 'Copy Query'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold uppercase text-zinc-400 mb-1 block">Input SQL Query</label>
          <textarea
            rows={10}
            value={sql}
            onChange={(e) => setSql(e.target.value)}
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-3.5 font-mono text-xs text-zinc-800 outline-hidden dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200"
          />
        </div>

        <div>
          <label className="text-xs font-bold uppercase text-zinc-400 mb-1 block">Beautified SQL</label>
          <textarea
            rows={10}
            value={formattedSql || sql}
            readOnly
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-3.5 font-mono text-xs text-zinc-800 outline-hidden dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200"
          />
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. Base64 Encoder & Decoder
// -------------------------------------------------------------
export const Base64Engine: React.FC<{ defaultMode?: 'encode' | 'decode' }> = ({
  defaultMode = 'encode',
}) => {
  const [plain, setPlain] = useState<string>('Hello from ToolNest! Free developer utilities.');
  const [encoded, setEncoded] = useState<string>('');
  const [mode, setMode] = useState<'encode' | 'decode'>(defaultMode);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    try {
      if (mode === 'encode') {
        const b64 = btoa(unescape(encodeURIComponent(plain)));
        setEncoded(b64);
      } else {
        const txt = decodeURIComponent(escape(atob(plain)));
        setEncoded(txt);
      }
    } catch (e) {
      setEncoded('Invalid encoding input');
    }
  }, [plain, mode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(encoded);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <button
          type="button"
          onClick={() => setMode('encode')}
          className={`rounded-xl px-4 py-1.5 text-xs font-bold transition-all ${
            mode === 'encode'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300'
          }`}
        >
          Encode to Base64
        </button>
        <button
          type="button"
          onClick={() => setMode('decode')}
          className={`rounded-xl px-4 py-1.5 text-xs font-bold transition-all ${
            mode === 'decode'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300'
          }`}
        >
          Decode from Base64
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold uppercase text-zinc-400 mb-1 block">
            {mode === 'encode' ? 'Plain Text' : 'Base64 Encoded String'}
          </label>
          <textarea
            rows={8}
            value={plain}
            onChange={(e) => setPlain(e.target.value)}
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-3.5 font-mono text-xs text-zinc-800 outline-hidden dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-xs font-bold uppercase text-zinc-400">
              {mode === 'encode' ? 'Base64 Result' : 'Decoded Plain Text'}
            </label>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <textarea
            rows={8}
            value={encoded}
            readOnly
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-3.5 font-mono text-xs text-zinc-800 outline-hidden dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200"
          />
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. URL & HTML Encoder / Decoder
// -------------------------------------------------------------
export const UrlHtmlEncoderEngine: React.FC<{ type: 'url' | 'html'; defaultMode: 'encode' | 'decode' }> = ({
  type,
  defaultMode,
}) => {
  const [input, setInput] = useState<string>(
    type === 'url'
      ? 'https://toolnest.app/search?query=cgpa calculator & sort=popular'
      : '<div class="banner">Welcome to ToolNest & explore 110+ free tools!</div>'
  );
  const [output, setOutput] = useState<string>('');
  const [mode, setMode] = useState<'encode' | 'decode'>(defaultMode);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (type === 'url') {
      if (mode === 'encode') {
        setOutput(encodeURIComponent(input));
      } else {
        try {
          setOutput(decodeURIComponent(input));
        } catch (e) {
          setOutput('Invalid percent-encoding');
        }
      }
    } else {
      // HTML
      if (mode === 'encode') {
        setOutput(
          input
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;')
        );
      } else {
        const doc = new DOMParser().parseFromString(input, 'text/html');
        setOutput(doc.documentElement.textContent || '');
      }
    }
  }, [input, mode, type]);

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <button
          type="button"
          onClick={() => setMode('encode')}
          className={`rounded-xl px-4 py-1.5 text-xs font-bold transition-all ${
            mode === 'encode'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300'
          }`}
        >
          {type === 'url' ? 'Encode URL Component' : 'Escape HTML Entities'}
        </button>
        <button
          type="button"
          onClick={() => setMode('decode')}
          className={`rounded-xl px-4 py-1.5 text-xs font-bold transition-all ${
            mode === 'decode'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300'
          }`}
        >
          {type === 'url' ? 'Decode URL Component' : 'Unescape HTML Entities'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold uppercase text-zinc-400 mb-1 block">Input</label>
          <textarea
            rows={8}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-3.5 font-mono text-xs text-zinc-800 outline-hidden dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-xs font-bold uppercase text-zinc-400">Processed Output</label>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <textarea
            rows={8}
            value={output}
            readOnly
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-3.5 font-mono text-xs text-zinc-800 outline-hidden dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200"
          />
        </div>
      </div>
    </div>
  );
};
