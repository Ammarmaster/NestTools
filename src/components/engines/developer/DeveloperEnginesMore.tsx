'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, RefreshCw, Key, Shield, Hash, Clock, Eye, Sparkles } from 'lucide-react';

// -------------------------------------------------------------
// 1. Regex Tester Engine
// -------------------------------------------------------------
export const RegexTesterEngine: React.FC = () => {
  const [pattern, setPattern] = useState<string>('\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b');
  const [flags, setFlags] = useState<string>('gi');
  const [testText, setTestText] = useState<string>(
    'Contact our team at support@toolnest.app or contact-sales@company.co.uk for inquiries. Invalid: test@.com.'
  );

  let matches: string[] = [];
  let regexError: string | null = null;

  try {
    const re = new RegExp(pattern, flags);
    const m = testText.match(re);
    if (m) {
      matches = Array.from(m);
    }
  } catch (e: any) {
    regexError = e.message;
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <div className="sm:col-span-3">
          <label className="text-xs font-bold uppercase text-zinc-400 mb-1 block">Regex Pattern</label>
          <div className="flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-800">
            <span className="text-zinc-400 font-mono text-sm mr-1">/</span>
            <input
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              className="w-full font-mono text-xs text-zinc-900 outline-hidden dark:text-zinc-100 bg-transparent"
              placeholder="Enter regular expression..."
            />
            <span className="text-zinc-400 font-mono text-sm ml-1">/</span>
          </div>
        </div>

        <div>
          <label className="text-xs font-bold uppercase text-zinc-400 mb-1 block">Flags</label>
          <input
            type="text"
            value={flags}
            onChange={(e) => setFlags(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-white p-2 text-xs font-mono text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            placeholder="g, i, m, s"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-bold uppercase text-zinc-400 mb-1 block">Test String</label>
        <textarea
          rows={6}
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-3.5 font-mono text-xs text-zinc-800 outline-hidden dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200"
        />
      </div>

      {regexError ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-600 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-400">
          Invalid Regex: {regexError}
        </div>
      ) : (
        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4 dark:border-indigo-900/40 dark:bg-indigo-950/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400">
              Matches Found ({matches.length})
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {matches.map((m, idx) => (
              <span key={idx} className="rounded-lg bg-white border border-indigo-200/80 px-2.5 py-1 text-xs font-mono font-semibold text-indigo-700 shadow-2xs dark:bg-zinc-800 dark:border-indigo-900 dark:text-indigo-300">
                {m}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// -------------------------------------------------------------
// 2. UUID Generator Engine
// -------------------------------------------------------------
export const UuidGeneratorEngine: React.FC = () => {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState<number>(5);
  const [uppercase, setUppercase] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const generateUuids = () => {
    const list: string[] = [];
    for (let i = 0; i < count; i++) {
      let u = crypto.randomUUID();
      if (uppercase) u = u.toUpperCase();
      list.push(u);
    }
    setUuids(list);
  };

  useEffect(() => {
    generateUuids();
  }, [count, uppercase]);

  const handleCopyAll = () => {
    navigator.clipboard.writeText(uuids.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Quantity:</label>
          <select
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            <option value={1}>1 UUID</option>
            <option value={5}>5 UUIDs</option>
            <option value={10}>10 UUIDs</option>
            <option value={25}>25 UUIDs</option>
            <option value={50}>50 UUIDs</option>
          </select>

          <label className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 ml-2">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
              className="rounded-md border-zinc-300 text-indigo-600"
            />
            Uppercase
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={generateUuids}
            className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-indigo-700"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Regenerate</span>
          </button>
          <button
            type="button"
            onClick={handleCopyAll}
            className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? 'Copied All' : 'Copy All'}</span>
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 font-mono text-xs text-zinc-800 space-y-2 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200">
        {uuids.map((u, i) => (
          <div key={i} className="flex items-center justify-between hover:bg-white/80 p-1.5 rounded-lg dark:hover:bg-zinc-800/80">
            <span className="select-all">{u}</span>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(u)}
              title="Copy single UUID"
              className="text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-[10px] px-2"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. Password Generator Engine
// -------------------------------------------------------------
export const PasswordGeneratorEngine: React.FC = () => {
  const [length, setLength] = useState<number>(18);
  const [includeUpper, setIncludeUpper] = useState<boolean>(true);
  const [includeLower, setIncludeLower] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const generatePassword = () => {
    let charset = '';
    if (includeLower) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()-_=+[]{}|;:,.<>?';

    if (!charset) charset = 'abcdefghijklmnopqrstuvwxyz';

    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    let res = '';
    for (let i = 0; i < length; i++) {
      res += charset[array[i] % charset.length];
    }
    setPassword(res);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeUpper, includeLower, includeNumbers, includeSymbols]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Entropy estimation
  let poolSize = 0;
  if (includeLower) poolSize += 26;
  if (includeUpper) poolSize += 26;
  if (includeNumbers) poolSize += 10;
  if (includeSymbols) poolSize += 28;
  const entropy = Math.round(length * Math.log2(poolSize || 1));

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-indigo-100 bg-indigo-50/50 p-6 dark:border-indigo-900/40 dark:bg-indigo-950/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="min-w-0 flex-1">
          <span className="text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400">
            Generated Secure Password
          </span>
          <div className="mt-1 font-mono text-xl sm:text-2xl font-bold tracking-wider text-zinc-900 dark:text-zinc-50 break-all select-all">
            {password}
          </div>
          <span className="text-xs text-zinc-500 mt-1 block">
            Entropy: {entropy} bits • {entropy >= 80 ? 'Very Strong' : entropy >= 60 ? 'Strong' : 'Moderate'}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={generatePassword}
            className="rounded-xl border border-zinc-200 bg-white p-2.5 text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            title="Regenerate"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-indigo-700 shadow-xs"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span>{copied ? 'Copied' : 'Copy Password'}</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1">
            <span>Password Length</span>
            <span>{length} characters</span>
          </div>
          <input
            type="range"
            min="8"
            max="48"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeUpper}
              onChange={(e) => setIncludeUpper(e.target.checked)}
              className="rounded-md border-zinc-300 text-indigo-600"
            />
            Uppercase (A-Z)
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeLower}
              onChange={(e) => setIncludeLower(e.target.checked)}
              className="rounded-md border-zinc-300 text-indigo-600"
            />
            Lowercase (a-z)
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="rounded-md border-zinc-300 text-indigo-600"
            />
            Numbers (0-9)
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="rounded-md border-zinc-300 text-indigo-600"
            />
            Symbols (!@#$)
          </label>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. Hash Generator Engine
// -------------------------------------------------------------
export const HashGeneratorEngine: React.FC = () => {
  const [input, setInput] = useState<string>('ToolNest');
  const [hashes, setHashes] = useState<{ sha256: string; sha512: string; sha1: string }>({
    sha256: '',
    sha512: '',
    sha1: '',
  });

  useEffect(() => {
    const computeHashes = async () => {
      const enc = new TextEncoder().encode(input);
      const toHex = (buf: ArrayBuffer) =>
        Array.from(new Uint8Array(buf))
          .map((b) => b.toString(16).padStart(2, '0'))
          .join('');

      try {
        const [h256, h512, h1] = await Promise.all([
          crypto.subtle.digest('SHA-256', enc),
          crypto.subtle.digest('SHA-512', enc),
          crypto.subtle.digest('SHA-1', enc),
        ]);
        setHashes({
          sha256: toHex(h256),
          sha512: toHex(h512),
          sha1: toHex(h1),
        });
      } catch (e) {}
    };

    computeHashes();
  }, [input]);

  const copyHash = (str: string) => {
    navigator.clipboard.writeText(str);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="text-xs font-bold uppercase text-zinc-400 mb-1 block">Input Text</label>
        <textarea
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to hash..."
          className="w-full rounded-2xl border border-zinc-200 bg-white p-3 font-mono text-xs outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
        />
      </div>

      <div className="space-y-3">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400">SHA-256</span>
            <button
              type="button"
              onClick={() => copyHash(hashes.sha256)}
              className="text-xs text-zinc-500 hover:text-indigo-600 dark:text-zinc-400"
            >
              Copy
            </button>
          </div>
          <div className="font-mono text-xs break-all text-zinc-800 dark:text-zinc-200 select-all">
            {hashes.sha256}
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400">SHA-512</span>
            <button
              type="button"
              onClick={() => copyHash(hashes.sha512)}
              className="text-xs text-zinc-500 hover:text-indigo-600 dark:text-zinc-400"
            >
              Copy
            </button>
          </div>
          <div className="font-mono text-xs break-all text-zinc-800 dark:text-zinc-200 select-all">
            {hashes.sha512}
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400">SHA-1</span>
            <button
              type="button"
              onClick={() => copyHash(hashes.sha1)}
              className="text-xs text-zinc-500 hover:text-indigo-600 dark:text-zinc-400"
            >
              Copy
            </button>
          </div>
          <div className="font-mono text-xs break-all text-zinc-800 dark:text-zinc-200 select-all">
            {hashes.sha1}
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 5. JWT Decoder Engine
// -------------------------------------------------------------
export const JwtDecoderEngine: React.FC = () => {
  const [token, setToken] = useState<string>(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFsaWNlIFNtaXRoIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE5OTk5OTk5OTl9.4PEPtMSWEN268kWVdcnWcuWpa-PptmKq1k5L1_qFm9I'
  );

  let headerJson = '';
  let payloadJson = '';
  let isExpired = false;
  let expDate = '';

  try {
    const parts = token.trim().split('.');
    if (parts.length >= 2) {
      const header = JSON.parse(atob(parts[0]));
      const payload = JSON.parse(atob(parts[1]));
      headerJson = JSON.stringify(header, null, 2);
      payloadJson = JSON.stringify(payload, null, 2);

      if (payload.exp) {
        isExpired = Date.now() >= payload.exp * 1000;
        expDate = new Date(payload.exp * 1000).toUTCString();
      }
    }
  } catch (e) {
    headerJson = 'Invalid JWT token format';
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs font-bold uppercase text-zinc-400 mb-1 block">Encoded JWT Token</label>
        <textarea
          rows={4}
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Paste JWT string..."
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-3 font-mono text-xs outline-hidden dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200"
        />
      </div>

      {expDate && (
        <div className={`p-3 rounded-xl border text-xs font-semibold ${
          isExpired
            ? 'bg-rose-50 border-rose-200 text-rose-600 dark:bg-rose-950/40 dark:border-rose-900'
            : 'bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-950/40 dark:border-emerald-900'
        }`}>
          Token Expiration: {expDate} ({isExpired ? 'Expired' : 'Active / Valid'})
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold uppercase text-zinc-400 mb-1 block">Decoded Header</label>
          <pre className="rounded-2xl border border-zinc-200 bg-white p-4 font-mono text-xs overflow-x-auto dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
            {headerJson}
          </pre>
        </div>
        <div>
          <label className="text-xs font-bold uppercase text-zinc-400 mb-1 block">Decoded Payload</label>
          <pre className="rounded-2xl border border-zinc-200 bg-white p-4 font-mono text-xs overflow-x-auto dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
            {payloadJson}
          </pre>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 6. Color Converter Engine (HEX, RGB, HSL, CMYK)
// -------------------------------------------------------------
export const ColorConverterEngine: React.FC = () => {
  const [hex, setHex] = useState<string>('#4F46E5');

  // Convert hex to rgb
  const r = parseInt(hex.slice(1, 3) || '0', 16) || 0;
  const g = parseInt(hex.slice(3, 5) || '0', 16) || 0;
  const b = parseInt(hex.slice(5, 7) || '0', 16) || 0;

  const rgbStr = `rgb(${r}, ${g}, ${b})`;

  // RGB to HSL
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
      case gNorm: h = (bNorm - rNorm) / d + 2; break;
      case bNorm: h = (rNorm - gNorm) / d + 4; break;
    }
    h /= 6;
  }
  const hslStr = `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <input
          type="color"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          className="h-16 w-16 cursor-pointer rounded-2xl border-0 bg-transparent"
        />
        <div>
          <label className="text-xs font-semibold text-zinc-500 uppercase">HEX Color Code</label>
          <input
            type="text"
            value={hex}
            onChange={(e) => setHex(e.target.value)}
            className="w-36 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 font-mono text-sm font-bold uppercase outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
          <span className="font-bold text-zinc-400 uppercase">RGB</span>
          <div className="mt-1 font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">{rgbStr}</div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
          <span className="font-bold text-zinc-400 uppercase">HSL</span>
          <div className="mt-1 font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">{hslStr}</div>
        </div>
      </div>
    </div>
  );
};
