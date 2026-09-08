'use client';

import React, { useState } from 'react';
import { ToolDefinition } from '@/types/tool';
import { ArrowLeftRight, Copy, Check, Sparkles, Hash } from 'lucide-react';

interface UniversalConverterProps {
  tool: ToolDefinition;
}

export const UniversalPairwiseConverterEngine: React.FC<UniversalConverterProps> = ({ tool }) => {
  const extra = tool as unknown as {
    ratio?: number;
    fromUnit?: string;
    toUnit?: string;
    fromSymbol?: string;
    toSymbol?: string;
  };

  const ratio = extra.ratio || 1;
  const fromName = extra.fromUnit || 'Unit A';
  const toName = extra.toUnit || 'Unit B';

  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>((1 * ratio).toFixed(4).replace(/\.?0+$/, ''));
  const [copied, setCopied] = useState<boolean>(false);

  const handleFromChange = (val: string) => {
    setFromValue(val);
    const num = parseFloat(val);
    if (isNaN(num)) {
      setToValue('');
    } else {
      const converted = num * ratio;
      setToValue(converted < 0.0001 && converted > 0 ? converted.toExponential(4) : converted.toFixed(6).replace(/\.?0+$/, ''));
    }
  };

  const handleToChange = (val: string) => {
    setToValue(val);
    const num = parseFloat(val);
    if (isNaN(num)) {
      setFromValue('');
    } else {
      const converted = num / ratio;
      setFromValue(converted < 0.0001 && converted > 0 ? converted.toExponential(4) : converted.toFixed(6).replace(/\.?0+$/, ''));
    }
  };

  const handleSwap = () => {
    // Invert calculation
    const oldFrom = fromValue;
    const oldTo = toValue;
    setFromValue(oldTo);
    setToValue(oldFrom);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${fromValue} ${fromName} = ${toValue} ${toName}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Quick lookup table steps
  const referenceValues = [1, 2, 5, 10, 20, 50, 100, 250, 500, 1000];

  return (
    <div className="space-y-6">
      {/* Dual Bidirectional Conversion Box */}
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Source Input */}
          <div className="w-full flex-1 space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              {fromName}
            </label>
            <div className="relative">
              <input
                type="number"
                step="any"
                inputMode="decimal"
                value={fromValue}
                onChange={(e) => handleFromChange(e.target.value)}
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-lg font-bold text-zinc-900 focus:border-indigo-500 focus:bg-white focus:outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50"
              />
            </div>
          </div>

          {/* Swap Button */}
          <div className="pt-5">
            <button
              type="button"
              onClick={handleSwap}
              title="Swap units"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 text-zinc-600 transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 active:scale-95 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              <ArrowLeftRight className="h-4 w-4" />
            </button>
          </div>

          {/* Target Input */}
          <div className="w-full flex-1 space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              {toName}
            </label>
            <div className="relative">
              <input
                type="number"
                step="any"
                inputMode="decimal"
                value={toValue}
                onChange={(e) => handleToChange(e.target.value)}
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-lg font-bold text-indigo-600 focus:border-indigo-500 focus:bg-white focus:outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-indigo-400"
              />
            </div>
          </div>
        </div>

        {/* Live Result Summary & Copy */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-100 pt-5 dark:border-zinc-800">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            <Sparkles className="h-4 w-4 text-indigo-500 shrink-0" />
            <span>
              {fromValue || 0} {fromName} = <strong className="text-indigo-600 dark:text-indigo-400">{toValue || 0}</strong> {toName}
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? 'Copied Result!' : 'Copy Result'}</span>
          </button>
        </div>
      </div>

      {/* Quick-Reference Lookup Table */}
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="flex items-center gap-2 mb-4">
          <Hash className="h-4 w-4 text-zinc-400" />
          <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Quick Conversion Chart: {fromName} to {toName}
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50/60 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-800/40">
                <th className="py-2.5 px-3 font-semibold">{fromName}</th>
                <th className="py-2.5 px-3 font-semibold">{toName}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {referenceValues.map((val) => (
                <tr key={val} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30">
                  <td className="py-2 px-3 font-medium text-zinc-800 dark:text-zinc-200">{val} {fromName}</td>
                  <td className="py-2 px-3 font-mono text-indigo-600 dark:text-indigo-400">
                    {(val * ratio).toFixed(4).replace(/\.?0+$/, '')} {toName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
