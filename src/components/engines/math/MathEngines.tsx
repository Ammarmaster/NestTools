'use client';

import React, { useState } from 'react';
import { Copy, Check, RotateCcw, Calculator as CalcIcon, Dices, Sigma } from 'lucide-react';

// -------------------------------------------------------------
// 1. Basic Interactive Calculator
// -------------------------------------------------------------
export const BasicCalculatorEngine: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');
  const [prev, setPrev] = useState<string | null>(null);
  const [op, setOp] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState<boolean>(true);

  const inputDigit = (d: string) => {
    if (newNumber) {
      setDisplay(d);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? d : display + d);
    }
  };

  const inputDecimal = () => {
    if (newNumber) {
      setDisplay('0.');
      setNewNumber(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearAll = () => {
    setDisplay('0');
    setPrev(null);
    setOp(null);
    setNewNumber(true);
  };

  const performOp = (nextOp: string) => {
    const val = parseFloat(display);
    if (prev === null) {
      setPrev(display);
    } else if (op) {
      const pVal = parseFloat(prev);
      let res = 0;
      switch (op) {
        case '+': res = pVal + val; break;
        case '-': res = pVal - val; break;
        case '×': res = pVal * val; break;
        case '÷': res = val !== 0 ? pVal / val : 0; break;
      }
      setDisplay(String(res));
      setPrev(String(res));
    }
    setOp(nextOp === '=' ? null : nextOp);
    setNewNumber(true);
  };

  return (
    <div className="mx-auto max-w-sm rounded-3xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-md dark:border-zinc-800 dark:bg-zinc-900/60">
      {/* Display */}
      <div className="mb-4 rounded-2xl border border-zinc-200 bg-white p-4 text-right shadow-2xs dark:border-zinc-700 dark:bg-zinc-800">
        <div className="text-[11px] font-semibold text-zinc-400 h-4">
          {prev} {op}
        </div>
        <div className="font-mono text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50 overflow-x-auto">
          {display}
        </div>
      </div>

      {/* Buttons Keypad */}
      <div className="grid grid-cols-4 gap-2 text-sm font-bold">
        <button type="button" onClick={clearAll} className="rounded-xl bg-zinc-200 p-3 text-rose-600 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-rose-400">
          AC
        </button>
        <button type="button" onClick={() => setDisplay(String(-parseFloat(display)))} className="rounded-xl bg-zinc-200 p-3 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-200">
          ±
        </button>
        <button type="button" onClick={() => setDisplay(String(parseFloat(display) / 100))} className="rounded-xl bg-zinc-200 p-3 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-200">
          %
        </button>
        <button type="button" onClick={() => performOp('÷')} className="rounded-xl bg-indigo-600 p-3 text-white hover:bg-indigo-700">
          ÷
        </button>

        <button type="button" onClick={() => inputDigit('7')} className="rounded-xl bg-white p-3 text-zinc-900 shadow-2xs hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100">7</button>
        <button type="button" onClick={() => inputDigit('8')} className="rounded-xl bg-white p-3 text-zinc-900 shadow-2xs hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100">8</button>
        <button type="button" onClick={() => inputDigit('9')} className="rounded-xl bg-white p-3 text-zinc-900 shadow-2xs hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100">9</button>
        <button type="button" onClick={() => performOp('×')} className="rounded-xl bg-indigo-600 p-3 text-white hover:bg-indigo-700">×</button>

        <button type="button" onClick={() => inputDigit('4')} className="rounded-xl bg-white p-3 text-zinc-900 shadow-2xs hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100">4</button>
        <button type="button" onClick={() => inputDigit('5')} className="rounded-xl bg-white p-3 text-zinc-900 shadow-2xs hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100">5</button>
        <button type="button" onClick={() => inputDigit('6')} className="rounded-xl bg-white p-3 text-zinc-900 shadow-2xs hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100">6</button>
        <button type="button" onClick={() => performOp('-')} className="rounded-xl bg-indigo-600 p-3 text-white hover:bg-indigo-700">-</button>

        <button type="button" onClick={() => inputDigit('1')} className="rounded-xl bg-white p-3 text-zinc-900 shadow-2xs hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100">1</button>
        <button type="button" onClick={() => inputDigit('2')} className="rounded-xl bg-white p-3 text-zinc-900 shadow-2xs hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100">2</button>
        <button type="button" onClick={() => inputDigit('3')} className="rounded-xl bg-white p-3 text-zinc-900 shadow-2xs hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100">3</button>
        <button type="button" onClick={() => performOp('+')} className="rounded-xl bg-indigo-600 p-3 text-white hover:bg-indigo-700">+</button>

        <button type="button" onClick={() => inputDigit('0')} className="col-span-2 rounded-xl bg-white p-3 text-zinc-900 shadow-2xs hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100 text-left pl-6">0</button>
        <button type="button" onClick={inputDecimal} className="rounded-xl bg-white p-3 text-zinc-900 shadow-2xs hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100">.</button>
        <button type="button" onClick={() => performOp('=')} className="rounded-xl bg-emerald-600 p-3 text-white hover:bg-emerald-700">=</button>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. Fraction Calculator
// -------------------------------------------------------------
export const FractionCalculatorEngine: React.FC = () => {
  const [num1, setNum1] = useState<number>(3);
  const [den1, setDen1] = useState<number>(4);
  const [op, setOp] = useState<string>('+');
  const [num2, setNum2] = useState<number>(2);
  const [den2, setDen2] = useState<number>(5);

  const gcd = (a: number, b: number): number => {
    let x = Math.abs(a);
    let y = Math.abs(b);
    while (y) {
      const t = y;
      y = x % y;
      x = t;
    }
    return x || 1;
  };

  let resNum = 0;
  let resDen = (den1 || 1) * (den2 || 1);

  if (op === '+') {
    resNum = num1 * den2 + num2 * den1;
  } else if (op === '-') {
    resNum = num1 * den2 - num2 * den1;
  } else if (op === '×') {
    resNum = num1 * num2;
    resDen = den1 * den2;
  } else if (op === '÷') {
    resNum = num1 * den2;
    resDen = den1 * num2;
  }

  const divisor = gcd(resNum, resDen);
  const simpNum = resNum / divisor;
  const simpDen = resDen / divisor;
  const decimal = simpDen !== 0 ? (simpNum / simpDen) : 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-center gap-4 py-4">
        {/* Fraction 1 */}
        <div className="flex flex-col items-center gap-1 w-20">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
            className="w-full text-center rounded-xl border border-zinc-200 bg-white p-2 font-bold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
          <div className="w-full h-0.5 bg-zinc-300 dark:bg-zinc-600 my-0.5" />
          <input
            type="number"
            value={den1}
            onChange={(e) => setDen1(Number(e.target.value))}
            className="w-full text-center rounded-xl border border-zinc-200 bg-white p-2 font-bold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>

        {/* Operator Select */}
        <select
          value={op}
          onChange={(e) => setOp(e.target.value)}
          className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-lg font-bold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="×">×</option>
          <option value="÷">÷</option>
        </select>

        {/* Fraction 2 */}
        <div className="flex flex-col items-center gap-1 w-20">
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
            className="w-full text-center rounded-xl border border-zinc-200 bg-white p-2 font-bold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
          <div className="w-full h-0.5 bg-zinc-300 dark:bg-zinc-600 my-0.5" />
          <input
            type="number"
            value={den2}
            onChange={(e) => setDen2(Number(e.target.value))}
            className="w-full text-center rounded-xl border border-zinc-200 bg-white p-2 font-bold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      {/* Result Card */}
      <div className="rounded-3xl border border-indigo-100 bg-indigo-50/50 p-6 text-center dark:border-indigo-900/40 dark:bg-indigo-950/20">
        <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
          Result (Simplified)
        </span>
        <div className="mt-2 flex items-center justify-center gap-3">
          <div className="flex flex-col items-center text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
            <span>{simpNum}</span>
            <div className="w-12 h-1 bg-zinc-800 dark:bg-zinc-200 my-1" />
            <span>{simpDen}</span>
          </div>
          <span className="text-xl font-bold text-zinc-400">≈</span>
          <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 font-mono">
            {decimal.toFixed(4)}
          </span>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. Statistics Engine (Mean, Median, Mode, Std Dev)
// -------------------------------------------------------------
export const StatisticsEngine: React.FC<{ defaultMetric?: string }> = () => {
  const [input, setInput] = useState<string>('12, 15, 18, 20, 22, 25, 25, 28, 30');

  const numbers = input
    .split(/[\s,]+/)
    .map((s) => parseFloat(s.trim()))
    .filter((n) => !isNaN(n))
    .sort((a, b) => a - b);

  const count = numbers.length;
  const sum = numbers.reduce((a, b) => a + b, 0);
  const mean = count > 0 ? sum / count : 0;

  // Median
  let median = 0;
  if (count > 0) {
    const mid = Math.floor(count / 2);
    median = count % 2 !== 0 ? numbers[mid] : (numbers[mid - 1] + numbers[mid]) / 2;
  }

  // Mode
  const freqs: Record<number, number> = {};
  let maxFreq = 0;
  numbers.forEach((n) => {
    freqs[n] = (freqs[n] || 0) + 1;
    if (freqs[n] > maxFreq) maxFreq = freqs[n];
  });
  const modes = Object.keys(freqs)
    .filter((k) => freqs[Number(k)] === maxFreq && maxFreq > 1)
    .map(Number);

  // Standard Deviation
  const variance = count > 1 ? numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (count - 1) : 0;
  const stdDev = Math.sqrt(variance);

  return (
    <div className="space-y-6">
      <div>
        <label className="text-xs font-bold uppercase text-zinc-400 mb-1 block">
          Enter Numbers (Separated by commas or spaces)
        </label>
        <textarea
          rows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full rounded-2xl border border-zinc-200 bg-white p-3 font-mono text-xs outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-[11px] font-bold text-zinc-400 uppercase block">Mean (Average)</span>
          <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
            {mean.toFixed(2)}
          </span>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-[11px] font-bold text-zinc-400 uppercase block">Median</span>
          <span className="text-2xl font-black text-zinc-900 dark:text-zinc-100 font-mono">
            {median.toFixed(2)}
          </span>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-[11px] font-bold text-zinc-400 uppercase block">Mode</span>
          <span className="text-lg font-black text-zinc-900 dark:text-zinc-100 font-mono truncate block">
            {modes.length > 0 ? modes.join(', ') : 'None'}
          </span>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-[11px] font-bold text-zinc-400 uppercase block">Sample Std Dev (s)</span>
          <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
            {stdDev.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/50 flex flex-wrap gap-4 justify-between">
        <div>Total Count: <strong className="text-zinc-900 dark:text-zinc-100">{count}</strong></div>
        <div>Sum: <strong className="text-zinc-900 dark:text-zinc-100">{sum.toLocaleString()}</strong></div>
        <div>Min: <strong className="text-zinc-900 dark:text-zinc-100">{numbers[0] ?? '-'}</strong></div>
        <div>Max: <strong className="text-zinc-900 dark:text-zinc-100">{numbers[count - 1] ?? '-'}</strong></div>
        <div>Variance: <strong className="text-zinc-900 dark:text-zinc-100">{variance.toFixed(2)}</strong></div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. Prime Number Checker
// -------------------------------------------------------------
export const PrimeCheckerEngine: React.FC = () => {
  const [num, setNum] = useState<number>(97);

  const isPrime = (n: number) => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  };

  const primeStatus = isPrime(num);

  // Prime factors
  const getPrimeFactors = (n: number) => {
    const factors: number[] = [];
    let d = 2;
    let temp = Math.abs(n);
    while (temp >= 2) {
      if (temp % d === 0) {
        factors.push(d);
        temp /= d;
      } else {
        d++;
        if (d * d > temp) {
          if (temp > 1) factors.push(temp);
          break;
        }
      }
    }
    return factors;
  };

  const factors = getPrimeFactors(num);

  return (
    <div className="space-y-6">
      <div>
        <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Enter Integer to Test</label>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(Math.max(1, Number(e.target.value)))}
          className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-lg font-bold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
        />
      </div>

      <div className={`rounded-3xl border p-6 text-center ${
        primeStatus
          ? 'border-emerald-200 bg-emerald-50/50 dark:border-emerald-900/40 dark:bg-emerald-950/20'
          : 'border-amber-200 bg-amber-50/50 dark:border-amber-900/40 dark:bg-amber-950/20'
      }`}>
        <span className="text-xs font-semibold uppercase text-zinc-500">Primality Test</span>
        <div className={`mt-2 text-3xl font-extrabold ${primeStatus ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
          {num} is {primeStatus ? 'A PRIME NUMBER' : 'A COMPOSITE NUMBER'}
        </div>
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
          Prime Factorization: {factors.join(' × ') || num}
        </p>
      </div>
    </div>
  );
};
