'use client';

import React, { useState } from 'react';
import { Copy, Check, DollarSign, TrendingUp, Percent, PieChart, Activity, Landmark } from 'lucide-react';
import { trackCopy } from '@/lib/analytics';

// -------------------------------------------------------------
// 1. BMI Calculator Engine
// -------------------------------------------------------------
export const BmiCalculatorEngine: React.FC = () => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [heightCm, setHeightCm] = useState<number>(175);
  const [weightKg, setWeightKg] = useState<number>(70);
  const [heightFt, setHeightFt] = useState<number>(5);
  const [heightIn, setHeightIn] = useState<number>(9);
  const [weightLbs, setWeightLbs] = useState<number>(155);

  let bmi = 0;
  if (unit === 'metric') {
    const heightM = heightCm / 100;
    bmi = heightM > 0 ? weightKg / (heightM * heightM) : 0;
  } else {
    const totalInches = heightFt * 12 + heightIn;
    bmi = totalInches > 0 ? (703 * weightLbs) / (totalInches * totalInches) : 0;
  }

  const getBmiCategory = (score: number) => {
    if (score < 18.5) return { label: 'Underweight', color: 'text-amber-500', badge: 'bg-amber-50 border-amber-200' };
    if (score < 25) return { label: 'Normal Weight', color: 'text-emerald-500', badge: 'bg-emerald-50 border-emerald-200' };
    if (score < 30) return { label: 'Overweight', color: 'text-amber-600', badge: 'bg-amber-50 border-amber-200' };
    return { label: 'Obese', color: 'text-rose-500', badge: 'bg-rose-50 border-rose-200' };
  };

  const cat = getBmiCategory(bmi);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <button
          type="button"
          onClick={() => setUnit('metric')}
          className={`rounded-xl px-4 py-1.5 text-xs font-bold transition-all ${
            unit === 'metric' ? 'bg-indigo-600 text-white' : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300'
          }`}
        >
          Metric (cm / kg)
        </button>
        <button
          type="button"
          onClick={() => setUnit('imperial')}
          className={`rounded-xl px-4 py-1.5 text-xs font-bold transition-all ${
            unit === 'imperial' ? 'bg-indigo-600 text-white' : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300'
          }`}
        >
          Imperial (ft-in / lbs)
        </button>
      </div>

      {unit === 'metric' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Height (cm)</label>
            <input
              type="number"
              value={heightCm}
              onChange={(e) => setHeightCm(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Weight (kg)</label>
            <input
              type="number"
              value={weightKg}
              onChange={(e) => setWeightKg(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Feet</label>
            <input
              type="number"
              value={heightFt}
              onChange={(e) => setHeightFt(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Inches</label>
            <input
              type="number"
              value={heightIn}
              onChange={(e) => setHeightIn(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Weight (lbs)</label>
            <input
              type="number"
              value={weightLbs}
              onChange={(e) => setWeightLbs(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>
        </div>
      )}

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
            Body Mass Index (BMI)
          </span>
          <div className="mt-1 text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
            {bmi.toFixed(1)} <span className={`text-sm font-bold ${cat.color}`}>({cat.label})</span>
          </div>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Healthy weight BMI span: 18.5 – 24.9
          </p>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. Loan EMI Calculator
// -------------------------------------------------------------
export const LoanEmiEngine: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [rate, setRate] = useState<number>(7.5);
  const [tenureYears, setTenureYears] = useState<number>(15);

  const monthlyRate = rate / 12 / 100;
  const numMonths = tenureYears * 12;

  let emi = 0;
  if (monthlyRate > 0 && numMonths > 0) {
    emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numMonths)) / (Math.pow(1 + monthlyRate, numMonths) - 1);
  }

  const totalPayment = emi * numMonths;
  const totalInterest = Math.max(0, totalPayment - loanAmount);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Loan Amount ($)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Math.max(0, Number(e.target.value)))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Annual Interest Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Loan Tenure (Years)</label>
          <input
            type="number"
            value={tenureYears}
            onChange={(e) => setTenureYears(Math.max(1, Number(e.target.value)))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="rounded-3xl border border-indigo-100 bg-indigo-50/50 p-6 dark:border-indigo-900/40 dark:bg-indigo-950/20">
        <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
          Monthly Loan EMI
        </span>
        <div className="mt-1 text-4xl font-black text-zinc-900 dark:text-zinc-50">
          ${emi.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="rounded-xl bg-white p-3 border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
            <span className="text-[11px] text-zinc-400 block">Principal Amount</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">${loanAmount.toLocaleString()}</span>
          </div>
          <div className="rounded-xl bg-white p-3 border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
            <span className="text-[11px] text-zinc-400 block">Total Interest Payable</span>
            <span className="text-sm font-bold text-rose-500">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="rounded-xl bg-white p-3 border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700 col-span-2 sm:col-span-1">
            <span className="text-[11px] text-zinc-400 block">Total Amount to Pay</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">${totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. Discount Calculator
// -------------------------------------------------------------
export const DiscountCalculatorEngine: React.FC = () => {
  const [originalPrice, setOriginalPrice] = useState<number>(120);
  const [discountPercent, setDiscountPercent] = useState<number>(25);
  const [taxPercent, setTaxPercent] = useState<number>(5);

  const discountAmount = (originalPrice * discountPercent) / 100;
  const discountedPrice = originalPrice - discountAmount;
  const taxAmount = (discountedPrice * taxPercent) / 100;
  const finalPrice = discountedPrice + taxAmount;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Original Price ($)</label>
          <input
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Discount (%)</label>
          <input
            type="number"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Sales Tax (%)</label>
          <input
            type="number"
            value={taxPercent}
            onChange={(e) => setTaxPercent(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-6 dark:border-emerald-900/30 dark:bg-emerald-950/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase text-emerald-600 dark:text-emerald-400">
            Final Checkout Price
          </span>
          <div className="mt-1 text-4xl font-black text-emerald-600 dark:text-emerald-400">
            ${finalPrice.toFixed(2)}
          </div>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            You save: <strong className="text-emerald-600">${discountAmount.toFixed(2)}</strong> (pre-tax)
          </p>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. GST & Sales Tax Calculator
// -------------------------------------------------------------
export const GstCalculatorEngine: React.FC = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [gstRate, setGstRate] = useState<number>(18);
  const [type, setType] = useState<'exclusive' | 'inclusive'>('exclusive');

  let net = 0;
  let gst = 0;
  let gross = 0;

  if (type === 'exclusive') {
    net = amount;
    gst = (amount * gstRate) / 100;
    gross = net + gst;
  } else {
    gross = amount;
    net = (amount * 100) / (100 + gstRate);
    gst = gross - net;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <button
          type="button"
          onClick={() => setType('exclusive')}
          className={`rounded-xl px-4 py-1.5 text-xs font-bold transition-all ${
            type === 'exclusive' ? 'bg-indigo-600 text-white' : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300'
          }`}
        >
          GST Exclusive (Add Tax)
        </button>
        <button
          type="button"
          onClick={() => setType('inclusive')}
          className={`rounded-xl px-4 py-1.5 text-xs font-bold transition-all ${
            type === 'inclusive' ? 'bg-indigo-600 text-white' : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300'
          }`}
        >
          GST Inclusive (Extract Tax)
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Base Amount ($)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">GST Rate (%)</label>
          <select
            value={gstRate}
            onChange={(e) => setGstRate(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          >
            <option value={5}>5%</option>
            <option value={12}>12%</option>
            <option value={18}>18%</option>
            <option value={28}>28%</option>
          </select>
        </div>
      </div>

      <div className="rounded-3xl border border-indigo-100 bg-indigo-50/50 p-6 dark:border-indigo-900/40 dark:bg-indigo-950/20">
        <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
          Total Gross Amount
        </span>
        <div className="mt-1 text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50">
          ${gross.toFixed(2)}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white p-3 border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
            <span className="text-[11px] text-zinc-400 block">Net Base Price</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">${net.toFixed(2)}</span>
          </div>
          <div className="rounded-xl bg-white p-3 border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
            <span className="text-[11px] text-zinc-400 block">Total GST ({gstRate}%)</span>
            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">${gst.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 5. Tip & Split Bill Calculator
// -------------------------------------------------------------
export const TipSplitBillEngine: React.FC = () => {
  const [bill, setBill] = useState<number>(85);
  const [tipPercent, setTipPercent] = useState<number>(18);
  const [people, setPeople] = useState<number>(3);

  const tipAmount = (bill * tipPercent) / 100;
  const totalBill = bill + tipAmount;
  const perPerson = people > 0 ? totalBill / people : totalBill;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Bill Total ($)</label>
          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Tip (%)</label>
          <div className="flex gap-1 mt-1">
            {[15, 18, 20].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTipPercent(t)}
                className={`flex-1 rounded-xl p-2.5 text-xs font-bold border ${
                  tipPercent === t
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white border-zinc-200 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
                }`}
              >
                {t}%
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Number of People</label>
          <input
            type="number"
            min="1"
            value={people}
            onChange={(e) => setPeople(Math.max(1, Number(e.target.value)))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="rounded-3xl border border-indigo-100 bg-indigo-50/50 p-6 dark:border-indigo-900/40 dark:bg-indigo-950/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
            Amount Per Person
          </span>
          <div className="mt-1 text-4xl font-black text-zinc-900 dark:text-zinc-50">
            ${perPerson.toFixed(2)}
          </div>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Total Bill: ${totalBill.toFixed(2)} (includes ${tipAmount.toFixed(2)} tip)
          </p>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 6. Compound & Simple Interest Engine
// -------------------------------------------------------------
export const CompoundInterestEngine: React.FC = () => {
  const [principal, setPrincipal] = useState<number>(10000);
  const [rate, setRate] = useState<number>(8);
  const [years, setYears] = useState<number>(10);
  const [compoundsPerYear, setCompoundsPerYear] = useState<number>(12); // monthly

  // A = P * (1 + r/n)^(nt)
  const r = rate / 100;
  const futureValue = principal * Math.pow(1 + r / compoundsPerYear, compoundsPerYear * years);
  const interestEarned = futureValue - principal;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Principal ($)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Annual Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Time (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Frequency</label>
          <select
            value={compoundsPerYear}
            onChange={(e) => setCompoundsPerYear(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          >
            <option value={1}>Annually</option>
            <option value={4}>Quarterly</option>
            <option value={12}>Monthly</option>
          </select>
        </div>
      </div>

      <div className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-6 dark:border-emerald-900/30 dark:bg-emerald-950/20">
        <span className="text-xs font-semibold uppercase text-emerald-600 dark:text-emerald-400">
          Future Investment Maturity Value
        </span>
        <div className="mt-1 text-4xl font-black text-emerald-600 dark:text-emerald-400">
          ${futureValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
          Total Interest Earned: <strong className="text-emerald-600">${interestEarned.toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong>
        </p>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 7. Profit Margin & Break-Even Engine
// -------------------------------------------------------------
export const ProfitMarginEngine: React.FC = () => {
  const [cost, setCost] = useState<number>(60);
  const [sellingPrice, setSellingPrice] = useState<number>(100);

  const grossProfit = sellingPrice - cost;
  const marginPercent = sellingPrice > 0 ? (grossProfit / sellingPrice) * 100 : 0;
  const markupPercent = cost > 0 ? (grossProfit / cost) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Product Cost ($)</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Selling Price ($)</label>
          <input
            type="number"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-[11px] font-bold text-zinc-400 uppercase block">Gross Profit</span>
          <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
            ${grossProfit.toFixed(2)}
          </span>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-[11px] font-bold text-zinc-400 uppercase block">Profit Margin</span>
          <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
            {marginPercent.toFixed(1)}%
          </span>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-[11px] font-bold text-zinc-400 uppercase block">Markup Percentage</span>
          <span className="text-2xl font-black text-amber-500">
            {markupPercent.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
};
