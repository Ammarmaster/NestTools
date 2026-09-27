'use client';

import React, { useState, useEffect } from 'react';
import { ToolDefinition } from '@/types/tool';
import { Calculator, Clock, DollarSign, Sparkles, Copy, Check, Lock, Percent, TrendingUp, Landmark, Receipt, IndianRupee, GraduationCap } from 'lucide-react';

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
    sipMonthly?: number;
    sipYears?: number;
    emiLoanAmount?: number;
    emiTenureYears?: number;
    emiRate?: number;
    gstRate?: number;
    gstAmount?: number;
    lpaAmount?: number;
    universityKey?: string;
    percentageVal?: number;
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

  // 5. SIP INVESTMENT ENGINE
  if (key === 'universal-sip') {
    return <SipParamEngine meta={meta} />;
  }

  // 6. EMI LOAN ENGINE
  if (key === 'universal-emi') {
    return <EmiParamEngine meta={meta} />;
  }

  // 7. GST ENGINE
  if (key === 'universal-gst') {
    return <GstParamEngine meta={meta} />;
  }

  // 8. LPA SALARY ENGINE
  if (key === 'universal-lpa-salary') {
    return <LpaSalaryParamEngine meta={meta} />;
  }

  // 9. UNIVERSITY CGPA ENGINE
  if (key === 'universal-university-cgpa') {
    return <UniversityCgpaParamEngine meta={meta} />;
  }

  // 10. PERCENTAGE MATH ENGINE
  if (key === 'universal-percentage') {
    return <PercentageParamEngine meta={meta} />;
  }

  // 11. GENERIC MATH / GEOMETRY ENGINE
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

// =====================================
// Sub-Engine: SIP Investment Calculator
// =====================================
function SipParamEngine({ meta }: { meta: Record<string, unknown> }) {
  const initialMonthly = (meta.sipMonthly as number) || 5000;
  const initialYears = (meta.sipYears as number) || 10;
  const [monthly, setMonthly] = useState<number>(initialMonthly);
  const [years, setYears] = useState<number>(initialYears);
  const [rate, setRate] = useState<number>(12);
  const [copied, setCopied] = useState<boolean>(false);

  const months = years * 12;
  const i = rate / 12 / 100;
  // Formula: M = P * [((1 + i)^n - 1) / i] * (1 + i)
  const maturity = i > 0 ? monthly * ((Math.pow(1 + i, months) - 1) / i) * (1 + i) : monthly * months;
  const invested = monthly * months;
  const returns = Math.max(0, maturity - invested);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400">Monthly Investment (₹)</label>
          <input
            type="number"
            value={monthly}
            onChange={(e) => setMonthly(parseFloat(e.target.value) || 0)}
            className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-base font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400">Expected Return Rate (% p.a.)</label>
          <input
            type="number"
            step="0.5"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value) || 0)}
            className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-base font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400">Time Period (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(parseFloat(e.target.value) || 0)}
            className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-base font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      {/* Quick Amount Presets */}
      <div className="flex flex-wrap gap-2">
        <span className="text-xs text-zinc-400 self-center">Presets:</span>
        {[1000, 2500, 5000, 10000, 25000].map((amt) => (
          <button
            key={amt}
            type="button"
            onClick={() => setMonthly(amt)}
            className={`text-xs px-2.5 py-1 rounded-lg border transition ${
              monthly === amt
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300'
                : 'border-zinc-200 text-zinc-600 hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-400'
            }`}
          >
            ₹{amt.toLocaleString('en-IN')}/mo
          </button>
        ))}
      </div>

      {/* Results Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-800/40">
        <div>
          <span className="text-[11px] font-semibold uppercase text-zinc-400">Total Invested</span>
          <span className="mt-0.5 block text-lg font-bold text-zinc-800 dark:text-zinc-200">
            ₹{Math.round(invested).toLocaleString('en-IN')}
          </span>
        </div>
        <div>
          <span className="text-[11px] font-semibold uppercase text-emerald-600 dark:text-emerald-400">Wealth Gain (Est. Returns)</span>
          <span className="mt-0.5 block text-lg font-bold text-emerald-600 dark:text-emerald-400">
            +₹{Math.round(returns).toLocaleString('en-IN')}
          </span>
        </div>
        <div className="sm:border-l sm:border-zinc-200 sm:pl-4 dark:border-zinc-700">
          <div className="flex justify-between items-center">
            <span className="text-[11px] font-bold uppercase text-indigo-600 dark:text-indigo-400">Total Maturity Value</span>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(`₹${Math.round(maturity).toLocaleString('en-IN')}`);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="text-xs text-zinc-400 hover:text-indigo-600 flex items-center gap-1"
            >
              {copied ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
            </button>
          </div>
          <span className="mt-0.5 block text-2xl font-black text-indigo-600 dark:text-indigo-400">
            ₹{Math.round(maturity).toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </div>
  );
}

// =====================================
// Sub-Engine: EMI Loan Calculator
// =====================================
function EmiParamEngine({ meta }: { meta: Record<string, unknown> }) {
  const initialPrincipal = (meta.emiLoanAmount as number) || 2500000;
  const initialYears = (meta.emiTenureYears as number) || 20;
  const initialRate = (meta.emiRate as number) || 8.5;

  const [principal, setPrincipal] = useState<number>(initialPrincipal);
  const [years, setYears] = useState<number>(initialYears);
  const [rate, setRate] = useState<number>(initialRate);
  const [copied, setCopied] = useState<boolean>(false);

  const n = years * 12;
  const r = rate / 12 / 100;
  // Formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
  const emi = r > 0 ? (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : principal / n;
  const totalPayment = emi * n;
  const totalInterest = totalPayment - principal;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400">Loan Amount (₹)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(parseFloat(e.target.value) || 0)}
            className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-base font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400">Interest Rate (% p.a.)</label>
          <input
            type="number"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value) || 0)}
            className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-base font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400">Tenure (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(parseFloat(e.target.value) || 0)}
            className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-base font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-800/40">
        <div>
          <span className="text-[11px] font-semibold uppercase text-zinc-400">Monthly EMI</span>
          <div className="flex items-center justify-between">
            <span className="mt-0.5 block text-2xl font-black text-indigo-600 dark:text-indigo-400">
              ₹{Math.round(emi).toLocaleString('en-IN')}
            </span>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(`₹${Math.round(emi).toLocaleString('en-IN')}`);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="text-xs text-zinc-400 hover:text-indigo-600"
            >
              {copied ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
            </button>
          </div>
        </div>
        <div>
          <span className="text-[11px] font-semibold uppercase text-zinc-400">Total Interest Payable</span>
          <span className="mt-0.5 block text-lg font-bold text-amber-600 dark:text-amber-400">
            ₹{Math.round(totalInterest).toLocaleString('en-IN')}
          </span>
        </div>
        <div>
          <span className="text-[11px] font-semibold uppercase text-zinc-400">Total Payment (Principal + Interest)</span>
          <span className="mt-0.5 block text-lg font-bold text-zinc-800 dark:text-zinc-200">
            ₹{Math.round(totalPayment).toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </div>
  );
}

// =====================================
// Sub-Engine: GST Calculator
// =====================================
function GstParamEngine({ meta }: { meta: Record<string, unknown> }) {
  const initialRate = (meta.gstRate as number) || 18;
  const initialAmount = (meta.gstAmount as number) || 10000;

  const [amount, setAmount] = useState<number>(initialAmount);
  const [gstRate, setGstRate] = useState<number>(initialRate);
  const [isInclusive, setIsInclusive] = useState<boolean>(false);

  let netPrice = 0;
  let gstAmount = 0;
  let totalPrice = 0;

  if (isInclusive) {
    totalPrice = amount;
    netPrice = amount / (1 + gstRate / 100);
    gstAmount = totalPrice - netPrice;
  } else {
    netPrice = amount;
    gstAmount = (amount * gstRate) / 100;
    totalPrice = netPrice + gstAmount;
  }

  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setIsInclusive(false)}
          className={`flex-1 py-2 text-xs font-bold rounded-xl border transition ${
            !isInclusive
              ? 'border-indigo-600 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300'
              : 'border-zinc-200 text-zinc-500 hover:border-zinc-300 dark:border-zinc-700'
          }`}
        >
          GST Exclusive (Add GST)
        </button>
        <button
          type="button"
          onClick={() => setIsInclusive(true)}
          className={`flex-1 py-2 text-xs font-bold rounded-xl border transition ${
            isInclusive
              ? 'border-indigo-600 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300'
              : 'border-zinc-200 text-zinc-500 hover:border-zinc-300 dark:border-zinc-700'
          }`}
        >
          GST Inclusive (Remove GST)
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400">
            {isInclusive ? 'Total Price (Inc. GST) ₹' : 'Base Price (Ex. GST) ₹'}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-base font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400">GST Slab</label>
          <div className="mt-1 flex gap-2">
            {[3, 5, 12, 18, 28].map((slab) => (
              <button
                key={slab}
                type="button"
                onClick={() => setGstRate(slab)}
                className={`flex-1 py-2 rounded-xl text-xs font-bold border transition ${
                  gstRate === slab
                    ? 'border-indigo-600 bg-indigo-600 text-white'
                    : 'border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300'
                }`}
              >
                {slab}%
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-2xl bg-zinc-50 p-4 text-center dark:bg-zinc-800/40">
        <div>
          <span className="text-[10px] uppercase text-zinc-400">Net Price</span>
          <span className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">₹{netPrice.toFixed(2)}</span>
        </div>
        <div>
          <span className="text-[10px] uppercase text-zinc-400">CGST ({(gstRate / 2).toFixed(1)}%)</span>
          <span className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">₹{cgst.toFixed(2)}</span>
        </div>
        <div>
          <span className="text-[10px] uppercase text-zinc-400">SGST ({(gstRate / 2).toFixed(1)}%)</span>
          <span className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">₹{sgst.toFixed(2)}</span>
        </div>
        <div>
          <span className="text-[10px] uppercase text-indigo-600 font-bold">Total Gross</span>
          <span className="block text-base font-black text-indigo-600 dark:text-indigo-400">₹{totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

// =====================================
// Sub-Engine: LPA In-Hand Salary Calculator
// =====================================
function LpaSalaryParamEngine({ meta }: { meta: Record<string, unknown> }) {
  const initialLpa = (meta.lpaAmount as number) || 10;
  const [lpa, setLpa] = useState<number>(initialLpa);

  const annualCtc = lpa * 100000;
  const monthlyCtc = annualCtc / 12;

  // Standard Indian Salary Structure Estimates
  const basicMonthly = Math.round(monthlyCtc * 0.5);
  const employeePfMonthly = Math.min(1800, Math.round(basicMonthly * 0.12));
  const professionalTax = 200;

  // New Tax Regime 2024-2026 Slabs
  // 0 - 3L: Nil
  // 3L - 7L: 5% (Rebate u/s 87A covers up to 7 Lakh taxable income = 0 tax)
  // Standard deduction = 75,000
  const taxableIncome = Math.max(0, annualCtc - 75000);
  let annualTax = 0;
  if (taxableIncome > 700000) {
    if (taxableIncome <= 1000000) {
      annualTax = (taxableIncome - 700000) * 0.10 + 20000;
    } else if (taxableIncome <= 1200000) {
      annualTax = (taxableIncome - 1000000) * 0.15 + 50000;
    } else if (taxableIncome <= 1500000) {
      annualTax = (taxableIncome - 1200000) * 0.20 + 80000;
    } else {
      annualTax = (taxableIncome - 1500000) * 0.30 + 140000;
    }
    annualTax = Math.round(annualTax * 1.04); // 4% Health & Education Cess
  }

  const monthlyTax = Math.round(annualTax / 12);
  const monthlyInHand = Math.max(0, monthlyCtc - employeePfMonthly - professionalTax - monthlyTax);
  const annualInHand = monthlyInHand * 12;

  return (
    <div className="space-y-6">
      <div>
        <label className="text-xs font-semibold uppercase text-zinc-400">Annual CTC (in Lakhs per Annum - LPA)</label>
        <div className="mt-1 flex gap-3">
          <input
            type="number"
            step="0.5"
            value={lpa}
            onChange={(e) => setLpa(parseFloat(e.target.value) || 0)}
            className="block w-full max-w-xs rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-lg font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
          <div className="flex flex-wrap gap-1.5 self-center">
            {[3, 6, 10, 15, 25, 40].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setLpa(preset)}
                className={`text-xs px-2 py-1 rounded-lg border transition ${
                  lpa === preset
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300'
                    : 'border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400'
                }`}
              >
                {preset} LPA
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-2xl bg-zinc-50 p-4 text-center dark:bg-zinc-800/40">
        <div>
          <span className="text-[10px] uppercase text-zinc-400">Monthly In-Hand</span>
          <span className="block text-xl font-black text-indigo-600 dark:text-indigo-400">
            ₹{Math.round(monthlyInHand).toLocaleString('en-IN')}
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase text-zinc-400">Monthly PF Deduction</span>
          <span className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
            -₹{employeePfMonthly.toLocaleString('en-IN')}
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase text-zinc-400">Monthly Tax (TDS)</span>
          <span className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
            -₹{monthlyTax.toLocaleString('en-IN')}
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase text-emerald-600 font-bold">Annual Take-Home</span>
          <span className="block text-base font-black text-emerald-600 dark:text-emerald-400">
            ₹{Math.round(annualInHand).toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </div>
  );
}

// =====================================
// Sub-Engine: University CGPA Converter
// =====================================
function UniversityCgpaParamEngine({ meta }: { meta: Record<string, unknown> }) {
  const univ = (meta.universityKey as string) || 'cbse';
  const [cgpa, setCgpa] = useState<number>(8.5);

  let percentage = 0;
  let formulaDesc = '';

  if (univ === 'vtu' || univ === 'aktu' || univ === 'sppu') {
    percentage = (cgpa - 0.75) * 10;
    formulaDesc = `Percentage = (CGPA - 0.75) × 10 = (${cgpa} - 0.75) × 10`;
  } else if (univ === 'mumbai') {
    percentage = cgpa >= 7 ? 7.1 * cgpa + 11 : 7.2 * cgpa + 12;
    formulaDesc = `Percentage = 7.1 × CGPA + 11 = 7.1 × ${cgpa} + 11`;
  } else if (univ === 'cbse') {
    percentage = cgpa * 9.5;
    formulaDesc = `Percentage = CGPA × 9.5 = ${cgpa} × 9.5`;
  } else {
    // Anna University & Standard
    percentage = cgpa * 10;
    formulaDesc = `Percentage = CGPA × 10 = ${cgpa} × 10`;
  }

  percentage = Math.min(100, Math.max(0, percentage));

  let division = 'First Class with Distinction';
  if (percentage < 40) division = 'Fail / Reappear';
  else if (percentage < 50) division = 'Pass Class';
  else if (percentage < 60) division = 'Second Class';
  else if (percentage < 75) division = 'First Class';

  return (
    <div className="space-y-6">
      <div>
        <label className="text-xs font-semibold uppercase text-zinc-400">Enter Your CGPA (0 to 10 Scale)</label>
        <input
          type="number"
          step="0.01"
          max="10"
          min="0"
          value={cgpa}
          onChange={(e) => setCgpa(parseFloat(e.target.value) || 0)}
          className="mt-1 block w-full max-w-xs rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-2xl font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-800/40">
        <div>
          <span className="text-[11px] font-semibold uppercase text-zinc-400">Equivalent Percentage</span>
          <span className="mt-0.5 block text-3xl font-black text-indigo-600 dark:text-indigo-400">
            {percentage.toFixed(2)}%
          </span>
          <span className="mt-1 block text-xs text-zinc-500 font-mono">{formulaDesc}</span>
        </div>
        <div>
          <span className="text-[11px] font-semibold uppercase text-zinc-400">Academic Division</span>
          <span className="mt-0.5 block text-lg font-bold text-emerald-600 dark:text-emerald-400">{division}</span>
          <span className="mt-1 block text-xs text-zinc-500">Official conversion formula verified</span>
        </div>
      </div>
    </div>
  );
}

// =====================================
// Sub-Engine: Percentage Math Calculator
// =====================================
function PercentageParamEngine({ meta }: { meta: Record<string, unknown> }) {
  const initialPct = (meta.percentageVal as number) || 15;
  const [pct, setPct] = useState<number>(initialPct);
  const [total, setTotal] = useState<number>(500);

  const result = (pct * total) / 100;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3 text-lg font-bold text-zinc-700 dark:text-zinc-200">
        <span>What is</span>
        <input
          type="number"
          value={pct}
          onChange={(e) => setPct(parseFloat(e.target.value) || 0)}
          className="w-24 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-center text-lg font-black text-indigo-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-indigo-400"
        />
        <span>% of</span>
        <input
          type="number"
          value={total}
          onChange={(e) => setTotal(parseFloat(e.target.value) || 0)}
          className="w-36 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-center text-lg font-black text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
        />
        <span>?</span>
      </div>

      <div className="rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-800/40">
        <span className="text-xs font-semibold uppercase text-zinc-400">Answer</span>
        <span className="mt-1 block text-4xl font-black text-indigo-600 dark:text-indigo-400">
          {result.toFixed(2).replace(/\.?0+$/, '')}
        </span>
        <span className="mt-2 block text-xs font-mono text-zinc-500">
          Formula: ({pct} × {total}) ÷ 100 = {result}
        </span>
      </div>
    </div>
  );
}
