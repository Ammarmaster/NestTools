'use client';

import React, { useState, useEffect } from 'react';
import { ToolDefinition } from '@/types/tool';
import { Calculator, Clock, DollarSign, Sparkles, Copy, Check, Lock, Percent } from 'lucide-react';

interface UniversalParamEngineProps {
  tool: ToolDefinition;
}

export const UniversalParamEngine: React.FC<UniversalParamEngineProps> = ({ tool }) => {
  const meta = tool as unknown as {
    hourlyRate?: number;
    discountPercent?: number;
    tipPercent?: number;
    salesTax?: number;
    loanAmount?: number;
    targetMonth?: number;
    targetDay?: number;
    devType?: string;
  };

  const key = tool.componentKey;

  // 1. SALARY CALCULATOR ENGINE
  if (key === 'universal-salary') {
    return <SalaryEngine defaultHourly={meta.hourlyRate || 25} />;
  }

  // 2. FINANCE (DISCOUNT / TIP / TAX / MORTGAGE)
  if (key === 'universal-finance') {
    return <FinanceParamEngine meta={meta} />;
  }

  // 3. COUNTDOWN ENGINE
  if (key === 'universal-countdown') {
    return <CountdownEngine targetMonth={meta.targetMonth ?? 11} targetDay={meta.targetDay ?? 25} title={tool.name} />;
  }

  // 4. DEV / ENCODING / HASH ENGINE
  if (key === 'universal-dev') {
    return <DevParamEngine devType={meta.devType || 'b64encode'} />;
  }

  // 5. GENERIC MATH / GEOMETRY ENGINE
  return <GenericMathEngine tool={tool} />;
};

// =====================================
// Sub-Engine: Salary Calculator
// =====================================
function SalaryEngine({ defaultHourly }: { defaultHourly: number }) {
  const [hourly, setHourly] = useState<number>(defaultHourly);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [weeksPerYear, setWeeksPerYear] = useState<number>(52);

  const annual = hourly * hoursPerWeek * weeksPerYear;
  const monthly = annual / 12;
  const biweekly = annual / 26;
  const weekly = annual / weeksPerYear;
  const daily = weekly / (hoursPerWeek / 8 || 5);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400">Hourly Rate ($)</label>
          <input
            type="number"
            value={hourly}
            onChange={(e) => setHourly(parseFloat(e.target.value) || 0)}
            className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-base font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400">Hours / Week</label>
          <input
            type="number"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(parseFloat(e.target.value) || 0)}
            className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-base font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400">Weeks / Year</label>
          <input
            type="number"
            value={weeksPerYear}
            onChange={(e) => setWeeksPerYear(parseFloat(e.target.value) || 0)}
            className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-base font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 rounded-2xl bg-zinc-50 p-4 text-center dark:bg-zinc-800/40">
        <div>
          <span className="text-[10px] uppercase text-zinc-400 font-bold">Daily</span>
          <span className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">${daily.toFixed(2)}</span>
        </div>
        <div>
          <span className="text-[10px] uppercase text-zinc-400 font-bold">Weekly</span>
          <span className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">${weekly.toFixed(2)}</span>
        </div>
        <div>
          <span className="text-[10px] uppercase text-zinc-400 font-bold">Bi-Weekly</span>
          <span className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">${biweekly.toFixed(2)}</span>
        </div>
        <div>
          <span className="text-[10px] uppercase text-zinc-400 font-bold">Monthly</span>
          <span className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">${monthly.toFixed(2)}</span>
        </div>
        <div className="col-span-2 sm:col-span-1 border-t sm:border-t-0 sm:border-l border-zinc-200 pt-2 sm:pt-0 dark:border-zinc-700">
          <span className="text-[10px] uppercase text-indigo-500 font-bold">Annual Gross</span>
          <span className="block text-base font-black text-indigo-600 dark:text-indigo-400">${annual.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

// =====================================
// Sub-Engine: Finance (Discount, Tip, Tax, Mortgage)
// =====================================
function FinanceParamEngine({ meta }: { meta: Record<string, unknown> }) {
  const [amount, setAmount] = useState<number>(100);
  const discountPct = (meta.discountPercent as number) || 0;
  const tipPct = (meta.tipPercent as number) || 0;
  const salesTaxPct = (meta.salesTax as number) || 0;
  const loanAmt = (meta.loanAmount as number) || 0;

  if (discountPct > 0) {
    const savings = amount * (discountPct / 100);
    const finalPrice = amount - savings;
    return (
      <div className="space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400">Original Retail Price ($)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            className="mt-1 block w-full max-w-sm rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-lg font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div className="grid grid-cols-3 gap-3 rounded-2xl bg-zinc-50 p-4 text-center dark:bg-zinc-800/40">
          <div>
            <span className="text-[10px] uppercase text-zinc-400">Original</span>
            <span className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">${amount.toFixed(2)}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-emerald-600 font-bold">Savings ({discountPct}%)</span>
            <span className="block text-sm font-bold text-emerald-600">-${savings.toFixed(2)}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-indigo-600 font-bold">Final Sale Price</span>
            <span className="block text-base font-black text-indigo-600 dark:text-indigo-400">${finalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  }

  if (tipPct > 0) {
    const tipAmount = amount * (tipPct / 100);
    const totalWithTip = amount + tipAmount;
    return (
      <div className="space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400">Bill Amount ($)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            className="mt-1 block w-full max-w-sm rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-lg font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div className="grid grid-cols-3 gap-3 rounded-2xl bg-zinc-50 p-4 text-center dark:bg-zinc-800/40">
          <div>
            <span className="text-[10px] uppercase text-zinc-400">Subtotal</span>
            <span className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">${amount.toFixed(2)}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-indigo-600 font-bold">Tip ({tipPct}%)</span>
            <span className="block text-sm font-bold text-indigo-600">+${tipAmount.toFixed(2)}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-zinc-900 dark:text-zinc-100 font-bold">Total Bill</span>
            <span className="block text-base font-black text-zinc-900 dark:text-zinc-50">${totalWithTip.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  }

  if (salesTaxPct > 0) {
    const taxAmount = amount * (salesTaxPct / 100);
    const totalWithTax = amount + taxAmount;
    return (
      <div className="space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400">Pre-Tax Price ($)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            className="mt-1 block w-full max-w-sm rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-lg font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div className="grid grid-cols-3 gap-3 rounded-2xl bg-zinc-50 p-4 text-center dark:bg-zinc-800/40">
          <div>
            <span className="text-[10px] uppercase text-zinc-400">Item Price</span>
            <span className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">${amount.toFixed(2)}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-zinc-600 font-bold">Tax ({salesTaxPct}%)</span>
            <span className="block text-sm font-bold text-zinc-600">+${taxAmount.toFixed(2)}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-indigo-600 font-bold">Total With Tax</span>
            <span className="block text-base font-black text-indigo-600 dark:text-indigo-400">${totalWithTax.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  }

  // Mortgage default
  const principal = loanAmt > 0 ? loanAmt : 250000;
  const rate = 0.065 / 12;
  const n30 = 360;
  const m30 = (principal * (rate * Math.pow(1 + rate, n30))) / (Math.pow(1 + rate, n30) - 1);
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-zinc-50 p-5 text-center dark:bg-zinc-800/40">
        <span className="text-xs font-semibold uppercase text-zinc-400">Estimated Monthly Payment (30-Year Fixed at 6.5%)</span>
        <span className="mt-1 block text-3xl font-black text-indigo-600 dark:text-indigo-400">${m30.toFixed(2)} / mo</span>
        <span className="mt-1 block text-xs text-zinc-500">Based on ${principal.toLocaleString()} Loan Principal</span>
      </div>
    </div>
  );
}

// =====================================
// Sub-Engine: Countdown
// =====================================
function CountdownEngine({ targetMonth, targetDay, title }: { targetMonth: number; targetDay: number; title: string }) {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculate = () => {
      const now = new Date();
      let year = now.getFullYear();
      let target = new Date(year, targetMonth, targetDay, 0, 0, 0);

      if (now.getTime() > target.getTime()) {
        target = new Date(year + 1, targetMonth, targetDay, 0, 0, 0);
      }

      const diff = Math.max(0, target.getTime() - now.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetMonth, targetDay]);

  return (
    <div className="space-y-6 text-center">
      <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-xl mx-auto">
        {[
          { label: 'Days', val: timeLeft.days },
          { label: 'Hours', val: timeLeft.hours },
          { label: 'Minutes', val: timeLeft.minutes },
          { label: 'Seconds', val: timeLeft.seconds },
        ].map((unit) => (
          <div key={unit.label} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <span className="block text-2xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
              {unit.val}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">{unit.label}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-zinc-500">Live countdown synced with your local system clock.</p>
    </div>
  );
}

// =====================================
// Sub-Engine: Dev & Encoding
// =====================================
function DevParamEngine({ devType }: { devType: string }) {
  const [input, setInput] = useState('ToolNest Free Online Tools');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      if (devType === 'b64encode') setOutput(btoa(input));
      else if (devType === 'b64decode') setOutput(atob(input));
      else if (devType === 'urlencode') setOutput(encodeURIComponent(input));
      else if (devType === 'urldecode') setOutput(decodeURIComponent(input));
      else if (devType === 'upper') setOutput(input.toUpperCase());
      else if (devType === 'lower') setOutput(input.toLowerCase());
      else if (devType === 'title') {
        setOutput(input.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
      } else if (devType === 'camel') {
        setOutput(input.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()));
      } else if (devType === 'kebab') {
        setOutput(input.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''));
      } else if (devType === 'snake') {
        setOutput(input.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, ''));
      } else if (devType === 'revstr') {
        setOutput(input.split('').reverse().join(''));
      } else if (devType === 'revwords') {
        setOutput(input.split(' ').reverse().join(''));
      } else {
        // Simple hash preview
        setOutput(btoa(input).split('').reverse().join('').substring(0, 32));
      }
    } catch {
      setOutput('Error processing string.');
    }
  }, [input, devType]);

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs font-semibold uppercase text-zinc-400">Input String</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={3}
          className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="text-xs font-semibold uppercase text-zinc-400">Output Result</label>
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(output);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="text-xs text-indigo-600 hover:underline flex items-center gap-1"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
        <textarea
          value={output}
          readOnly
          rows={3}
          className="block w-full rounded-xl border border-zinc-200 bg-white p-3 font-mono text-xs text-indigo-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-indigo-400"
        />
      </div>
    </div>
  );
}

// =====================================
// Sub-Engine: Generic Math
// =====================================
function GenericMathEngine({ tool }: { tool: ToolDefinition }) {
  const [valA, setValA] = useState<number>(5);
  const [valB, setValB] = useState<number>(10);

  const slug = tool.slug;
  let result = 0;
  let label = 'Result';

  if (slug.includes('circle')) {
    result = Math.PI * Math.pow(valA, 2);
    label = `Area (r = ${valA})`;
  } else if (slug.includes('triangle')) {
    result = 0.5 * valA * valB;
    label = `Area (b = ${valA}, h = ${valB})`;
  } else if (slug.includes('rectangle')) {
    result = valA * valB;
    label = `Area (l = ${valA}, w = ${valB})`;
  } else if (slug.includes('cylinder')) {
    result = Math.PI * Math.pow(valA, 2) * valB;
    label = `Volume (r = ${valA}, h = ${valB})`;
  } else if (slug.includes('sphere')) {
    result = (4 / 3) * Math.PI * Math.pow(valA, 3);
    label = `Volume (r = ${valA})`;
  } else if (slug.includes('cone')) {
    result = (1 / 3) * Math.PI * Math.pow(valA, 2) * valB;
    label = `Volume (r = ${valA}, h = ${valB})`;
  } else if (slug.includes('pythagorean')) {
    result = Math.sqrt(Math.pow(valA, 2) + Math.pow(valB, 2));
    label = `Hypotenuse c`;
  } else {
    result = valA * valB;
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 max-w-sm">
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400">Value A</label>
          <input
            type="number"
            value={valA}
            onChange={(e) => setValA(parseFloat(e.target.value) || 0)}
            className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-bold dark:border-zinc-700 dark:bg-zinc-800"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400">Value B</label>
          <input
            type="number"
            value={valB}
            onChange={(e) => setValB(parseFloat(e.target.value) || 0)}
            className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-bold dark:border-zinc-700 dark:bg-zinc-800"
          />
        </div>
      </div>

      <div className="rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-800/40">
        <span className="text-xs font-semibold uppercase text-zinc-400">{label}</span>
        <span className="mt-1 block text-3xl font-black text-indigo-600 dark:text-indigo-400">
          {result.toFixed(4).replace(/\.?0+$/, '')}
        </span>
      </div>
    </div>
  );
}
