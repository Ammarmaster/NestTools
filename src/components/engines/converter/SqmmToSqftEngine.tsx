'use client';

import React, { useState } from 'react';
import { ArrowLeftRight, Copy, Check, Sparkles, Zap, HelpCircle, Layers, ShieldCheck } from 'lucide-react';

const CABLE_PRESETS = [
  { label: '0.5 mm²', sqmm: 0.5, desc: 'Signal & Sensor' },
  { label: '0.75 mm²', sqmm: 0.75, desc: 'Control wiring' },
  { label: '1.0 mm²', sqmm: 1.0, desc: '5A Lighting' },
  { label: '1.5 mm²', sqmm: 1.5, desc: '10A Domestic fan/light' },
  { label: '2.5 mm²', sqmm: 2.5, desc: '16A Power sockets' },
  { label: '4.0 mm²', sqmm: 4.0, desc: '20A Air conditioner' },
  { label: '6.0 mm²', sqmm: 6.0, desc: '32A Heavy appliance' },
  { label: '10 mm²', sqmm: 10, desc: 'Main incoming supply' },
  { label: '16 mm²', sqmm: 16, desc: 'Sub-main distribution' },
  { label: '25 mm²', sqmm: 25, desc: 'Commercial feeder' },
  { label: '50 mm²', sqmm: 50, desc: 'Industrial equipment' },
  { label: '92,903 mm²', sqmm: 92903.04, desc: 'Exactly 1.0 Sq Ft' },
];

export const SqmmToSqftEngine: React.FC = () => {
  // Conversion constant: 1 sq mm = 1 / 92903.04 sq ft = 0.0000107639104 sq ft
  const RATIO = 1 / 92903.04;

  const [sqmm, setSqmm] = useState<string>('1.5');
  const [sqft, setSqft] = useState<string>((1.5 * RATIO).toFixed(8).replace(/\.?0+$/, ''));
  const [copied, setCopied] = useState<boolean>(false);

  const handleSqmmChange = (val: string) => {
    setSqmm(val);
    const num = parseFloat(val);
    if (isNaN(num)) {
      setSqft('');
    } else {
      const res = num * RATIO;
      setSqft(res < 0.0001 && res > 0 ? res.toExponential(6) : res.toFixed(8).replace(/\.?0+$/, ''));
    }
  };

  const handleSqftChange = (val: string) => {
    setSqft(val);
    const num = parseFloat(val);
    if (isNaN(num)) {
      setSqmm('');
    } else {
      const res = num / RATIO;
      setSqmm(res.toFixed(4).replace(/\.?0+$/, ''));
    }
  };

  const handleSwap = () => {
    const oldSqmm = sqmm;
    const oldSqft = sqft;
    setSqmm(oldSqft);
    handleSqmmChange(oldSqft);
  };

  const selectPreset = (val: number) => {
    handleSqmmChange(val.toString());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${sqmm} sq mm = ${sqft} sq ft`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Featured Snippet Highlight Card */}
      <div className="rounded-3xl border border-indigo-200 bg-linear-to-r from-indigo-50/70 via-white to-indigo-50/40 p-5 sm:p-6 dark:border-indigo-900/50 dark:from-indigo-950/30 dark:via-zinc-900 dark:to-zinc-900 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-2 py-0.5 text-[11px] font-bold text-white uppercase tracking-wider">
                <Zap className="h-3 w-3" /> Quick Answer
              </span>
              <span className="text-xs font-semibold text-zinc-500">Exact Conversion Factor</span>
            </div>
            <div className="mt-2 text-lg sm:text-2xl font-black text-zinc-900 dark:text-zinc-50">
              1 sq mm = 0.0000107639 sq ft
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
              1 sq ft = 92,903.04 sq mm • Formula: <strong>sqft = sqmm × 0.00001076391</strong>
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-indigo-200 bg-white px-3.5 py-2 text-xs font-bold text-indigo-700 hover:bg-indigo-50 dark:border-indigo-800 dark:bg-zinc-800 dark:text-indigo-300 transition-colors shadow-2xs"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy Result'}</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Dual Conversion Engine */}
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
          {/* SQMM Input */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                Square Millimeters (sq mm / mm²)
              </label>
              <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                Wire & Cross-Section
              </span>
            </div>
            <div className="relative">
              <input
                type="number"
                step="any"
                value={sqmm}
                onChange={(e) => handleSqmmChange(e.target.value)}
                placeholder="e.g. 1.5"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-lg font-mono font-bold text-zinc-900 outline-hidden focus:border-indigo-500 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-100"
              />
              <span className="absolute right-4 top-4 text-xs font-bold text-zinc-400">
                mm²
              </span>
            </div>
          </div>

          {/* Swap Button */}
          <div className="md:col-span-1 flex justify-center py-2 md:py-0">
            <button
              type="button"
              onClick={handleSwap}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-100 text-zinc-600 transition-all hover:bg-indigo-600 hover:text-white hover:border-indigo-600 active:scale-95 shadow-2xs dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-indigo-600"
              title="Reverse conversion direction"
            >
              <ArrowLeftRight className="h-4 w-4" />
            </button>
          </div>

          {/* SQFT Input */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                Square Feet (sq ft / ft²)
              </label>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                Imperial Area
              </span>
            </div>
            <div className="relative">
              <input
                type="number"
                step="any"
                value={sqft}
                onChange={(e) => handleSqftChange(e.target.value)}
                placeholder="e.g. 0.000016"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-lg font-mono font-bold text-zinc-900 outline-hidden focus:border-indigo-500 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-100"
              />
              <span className="absolute right-4 top-4 text-xs font-bold text-zinc-400">
                ft²
              </span>
            </div>
          </div>
        </div>

        {/* Electrical Cable & Wire Quick Presets */}
        <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 block mb-2.5">
            ⚡ Quick Presets (Common Electrical Cable Sizes):
          </span>
          <div className="flex flex-wrap gap-2">
            {CABLE_PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => selectPreset(preset.sqmm)}
                className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all ${
                  parseFloat(sqmm) === preset.sqmm
                    ? 'border-indigo-600 bg-indigo-600 text-white shadow-xs'
                    : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-indigo-400 hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-300'
                }`}
                title={preset.desc}
              >
                <span>{preset.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Electrical Wire Gauge (sq mm) to Sq Ft Official Reference Table */}
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <Layers className="h-4 w-4 text-indigo-500" />
              <span>Standard Electrical Cable & Wire Sizes (sq mm to sq ft)</span>
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              International standard copper conductor sizing conversions
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-[11px]">
                <th className="py-2.5 px-3 font-bold">Cable Cross Section</th>
                <th className="py-2.5 px-3 font-bold text-indigo-600 dark:text-indigo-400">Area in Sq Ft (ft²)</th>
                <th className="py-2.5 px-3 font-semibold">Area in Sq Inches (in²)</th>
                <th className="py-2.5 px-3 font-semibold">Typical Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/80 font-mono text-zinc-700 dark:text-zinc-300 text-[11px]">
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40">
                <td className="py-2 px-3 font-bold">0.5 sq mm</td>
                <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400 font-semibold">0.00000538 ft²</td>
                <td className="py-2 px-3">0.000775 in²</td>
                <td className="py-2 px-3 font-sans text-zinc-500">Sensors, automation & instrumentation</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40">
                <td className="py-2 px-3 font-bold">0.75 sq mm</td>
                <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400 font-semibold">0.00000807 ft²</td>
                <td className="py-2 px-3">0.001163 in²</td>
                <td className="py-2 px-3 font-sans text-zinc-500">Flexible cords, light fixtures</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40">
                <td className="py-2 px-3 font-bold">1.0 sq mm</td>
                <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400 font-semibold">0.00001076 ft²</td>
                <td className="py-2 px-3">0.001550 in²</td>
                <td className="py-2 px-3 font-sans text-zinc-500">Lighting circuits (up to 5 Amps)</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40 bg-indigo-50/30 dark:bg-indigo-950/20">
                <td className="py-2 px-3 font-bold text-indigo-600 dark:text-indigo-400">1.5 sq mm</td>
                <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400 font-bold">0.00001615 ft²</td>
                <td className="py-2 px-3">0.002325 in²</td>
                <td className="py-2 px-3 font-sans text-zinc-700 dark:text-zinc-300 font-semibold">Domestic fans, tubes, lighting (10A)</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40 bg-indigo-50/30 dark:bg-indigo-950/20">
                <td className="py-2 px-3 font-bold text-indigo-600 dark:text-indigo-400">2.5 sq mm</td>
                <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400 font-bold">0.00002691 ft²</td>
                <td className="py-2 px-3">0.003875 in²</td>
                <td className="py-2 px-3 font-sans text-zinc-700 dark:text-zinc-300 font-semibold">Power sockets, refrigerators, irons (16A)</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40 bg-indigo-50/30 dark:bg-indigo-950/20">
                <td className="py-2 px-3 font-bold text-indigo-600 dark:text-indigo-400">4.0 sq mm</td>
                <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400 font-bold">0.00004306 ft²</td>
                <td className="py-2 px-3">0.006200 in²</td>
                <td className="py-2 px-3 font-sans text-zinc-700 dark:text-zinc-300 font-semibold">Air conditioners (1.5 - 2 Ton), geysers (25A)</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40">
                <td className="py-2 px-3 font-bold">6.0 sq mm</td>
                <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400 font-semibold">0.00006458 ft²</td>
                <td className="py-2 px-3">0.009300 in²</td>
                <td className="py-2 px-3 font-sans text-zinc-500">Commercial cooktops, high-load ACs (32A)</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40">
                <td className="py-2 px-3 font-bold">10.0 sq mm</td>
                <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400 font-semibold">0.00010764 ft²</td>
                <td className="py-2 px-3">0.015500 in²</td>
                <td className="py-2 px-3 font-sans text-zinc-500">Main incoming supply to meter board (40A)</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40">
                <td className="py-2 px-3 font-bold">16.0 sq mm</td>
                <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400 font-semibold">0.00017222 ft²</td>
                <td className="py-2 px-3">0.024800 in²</td>
                <td className="py-2 px-3 font-sans text-zinc-500">Sub-main distribution panels (63A)</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40">
                <td className="py-2 px-3 font-bold">25.0 sq mm</td>
                <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400 font-semibold">0.00026910 ft²</td>
                <td className="py-2 px-3">0.038750 in²</td>
                <td className="py-2 px-3 font-sans text-zinc-500">Commercial and 3-phase machinery feeders</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40">
                <td className="py-2 px-3 font-bold">50.0 sq mm</td>
                <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400 font-semibold">0.00053819 ft²</td>
                <td className="py-2 px-3">0.077500 in²</td>
                <td className="py-2 px-3 font-sans text-zinc-500">Heavy industrial plant power feeds</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
