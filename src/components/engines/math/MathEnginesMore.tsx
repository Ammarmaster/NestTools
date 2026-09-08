'use client';

import React, { useState } from 'react';
import { Copy, Check, RefreshCw, Dices, Sparkles } from 'lucide-react';

// -------------------------------------------------------------
// 1. Scientific Calculator Engine
// -------------------------------------------------------------
export const ScientificCalculatorEngine: React.FC = () => {
  const [expr, setExpr] = useState<string>('sin(45) * 2 + sqrt(16)');
  const [result, setResult] = useState<string>('');
  const [isRad, setIsRad] = useState<boolean>(false);

  const calculate = () => {
    try {
      // Safe mathematical evaluation without arbitrary eval
      let sanitized = expr
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E')
        .replace(/sqrt\(/g, 'Math.sqrt(')
        .replace(/sin\(/g, isRad ? 'Math.sin(' : 'Math.sin((Math.PI/180)*')
        .replace(/cos\(/g, isRad ? 'Math.cos(' : 'Math.cos((Math.PI/180)*')
        .replace(/tan\(/g, isRad ? 'Math.tan(' : 'Math.tan((Math.PI/180)*')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/ln\(/g, 'Math.log(');

      // Only allow safe math tokens
      if (!/^[\d\s+\-*/().MathPIEsqrtcointaleg,]+$/.test(sanitized)) {
        setResult('Invalid formula');
        return;
      }
      const fn = new Function(`return (${sanitized})`);
      const val = fn();
      setResult(String(val));
    } catch (e) {
      setResult('Error');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <button
          type="button"
          onClick={() => setIsRad(!isRad)}
          className="rounded-xl bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
        >
          {isRad ? 'Radian (RAD)' : 'Degree (DEG)'} Mode
        </button>

        <button
          type="button"
          onClick={calculate}
          className="rounded-xl bg-indigo-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-indigo-700"
        >
          Calculate
        </button>
      </div>

      <input
        type="text"
        value={expr}
        onChange={(e) => setExpr(e.target.value)}
        placeholder="e.g. sqrt(144) + 2^3"
        className="w-full rounded-2xl border border-zinc-200 bg-white p-3.5 font-mono text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
      />

      <div className="flex flex-wrap gap-2 text-xs font-semibold">
        {['sin(', 'cos(', 'tan(', 'sqrt(', 'log(', 'ln(', 'π', 'e', '^2', '(', ')'].map((token) => (
          <button
            key={token}
            type="button"
            onClick={() => setExpr((prev) => prev + token)}
            className="rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-zinc-700 hover:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {token}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20">
        <span className="text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400">Result</span>
        <div className="mt-1 font-mono text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
          {result || '—'}
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. Ratio Calculator Engine
// -------------------------------------------------------------
export const RatioCalculatorEngine: React.FC = () => {
  const [a, setA] = useState<string>('4');
  const [b, setB] = useState<string>('6');
  const [c, setC] = useState<string>('10');
  const [d, setD] = useState<string>('');

  const numA = parseFloat(a);
  const numB = parseFloat(b);
  const numC = parseFloat(c);
  const numD = parseFloat(d);

  let solvedValue = '';
  let solvedLabel = '';

  if (!d && numA && numB && numC) {
    solvedValue = ((numB * numC) / numA).toFixed(2);
    solvedLabel = `D = ${solvedValue}`;
  } else if (!c && numA && numB && numD) {
    solvedValue = ((numA * numD) / numB).toFixed(2);
    solvedLabel = `C = ${solvedValue}`;
  } else if (!b && numA && numC && numD) {
    solvedValue = ((numA * numD) / numC).toFixed(2);
    solvedLabel = `B = ${solvedValue}`;
  } else if (!a && numB && numC && numD) {
    solvedValue = ((numB * numC) / numD).toFixed(2);
    solvedLabel = `A = ${solvedValue}`;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-3 text-lg font-bold">
        <input
          type="number"
          value={a}
          placeholder="A"
          onChange={(e) => setA(e.target.value)}
          className="w-16 rounded-xl border border-zinc-200 bg-white p-2 text-center text-sm font-bold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
        />
        <span>:</span>
        <input
          type="number"
          value={b}
          placeholder="B"
          onChange={(e) => setB(e.target.value)}
          className="w-16 rounded-xl border border-zinc-200 bg-white p-2 text-center text-sm font-bold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
        />
        <span className="mx-2">=</span>
        <input
          type="number"
          value={c}
          placeholder="C"
          onChange={(e) => setC(e.target.value)}
          className="w-16 rounded-xl border border-zinc-200 bg-white p-2 text-center text-sm font-bold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
        />
        <span>:</span>
        <input
          type="number"
          value={d}
          placeholder="D"
          onChange={(e) => setD(e.target.value)}
          className="w-16 rounded-xl border border-zinc-200 bg-white p-2 text-center text-sm font-bold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
        />
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 text-center dark:border-indigo-900/40 dark:bg-indigo-950/20">
        <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
          Equivalent Ratio Solution
        </span>
        <div className="mt-1 text-2xl font-black text-zinc-900 dark:text-zinc-50">
          {solvedLabel || 'Leave one box blank to solve'}
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. LCM & GCD Calculator
// -------------------------------------------------------------
export const LcmGcdEngine: React.FC = () => {
  const [num1, setNum1] = useState<number>(24);
  const [num2, setNum2] = useState<number>(36);

  const calcGcd = (x: number, y: number): number => {
    let a = Math.abs(x);
    let b = Math.abs(y);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a || 1;
  };

  const gcdVal = calcGcd(num1, num2);
  const lcmVal = (num1 * num2) / gcdVal;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">First Number</label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Second Number</label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20">
          <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
            Least Common Multiple (LCM)
          </span>
          <div className="mt-1 text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 font-mono">
            {lcmVal}
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20">
          <span className="text-xs font-semibold uppercase text-emerald-600 dark:text-emerald-400">
            Greatest Common Divisor (GCD / HCF)
          </span>
          <div className="mt-1 text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 font-mono">
            {gcdVal}
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. Random Number Generator
// -------------------------------------------------------------
export const RandomNumberEngine: React.FC = () => {
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(100);
  const [quantity, setQuantity] = useState<number>(5);
  const [uniqueOnly, setUniqueOnly] = useState<boolean>(true);
  const [results, setResults] = useState<number[]>([]);

  const roll = () => {
    const list: number[] = [];
    const span = max - min + 1;
    if (uniqueOnly && quantity > span) {
      setQuantity(span);
    }

    const seen = new Set<number>();
    while (list.length < quantity && (!uniqueOnly || seen.size < span)) {
      const arr = new Uint32Array(1);
      crypto.getRandomValues(arr);
      const val = min + (arr[0] % span);
      if (!uniqueOnly) {
        list.push(val);
      } else if (!seen.has(val)) {
        seen.add(val);
        list.push(val);
      }
    }
    setResults(list);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Min</label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-2.5 text-xs font-semibold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Max</label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-2.5 text-xs font-semibold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Quantity</label>
          <input
            type="number"
            value={quantity}
            min="1"
            max="100"
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-2.5 text-xs font-semibold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div className="flex items-end">
          <button
            type="button"
            onClick={roll}
            className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 p-2.5 text-xs font-bold text-white hover:bg-indigo-700"
          >
            <Dices className="h-4 w-4" />
            <span>Generate</span>
          </button>
        </div>
      </div>

      {results.length > 0 && (
        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20">
          <span className="text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400">
            Random Numbers Generated ({results.length})
          </span>
          <div className="mt-3 flex flex-wrap gap-2">
            {results.map((r, i) => (
              <span key={i} className="rounded-xl bg-white px-3 py-1.5 font-mono text-base font-black text-indigo-600 shadow-2xs border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-indigo-400">
                {r}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
