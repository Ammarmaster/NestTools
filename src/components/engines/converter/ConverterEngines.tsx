'use client';

import React, { useState } from 'react';
import { ArrowLeftRight, Copy, Check, Sparkles } from 'lucide-react';

// -------------------------------------------------------------
// 1. Unified Multi-Unit Converter (Length, Weight, Area, Volume, Speed, Time, Data Storage)
// -------------------------------------------------------------
interface UnitDef {
  id: string;
  name: string;
  ratio: number; // Ratio relative to base unit
}

const UNIT_GROUPS: Record<string, { base: string; units: UnitDef[] }> = {
  length: {
    base: 'meter',
    units: [
      { id: 'm', name: 'Meters (m)', ratio: 1 },
      { id: 'km', name: 'Kilometers (km)', ratio: 1000 },
      { id: 'cm', name: 'Centimeters (cm)', ratio: 0.01 },
      { id: 'mm', name: 'Millimeters (mm)', ratio: 0.001 },
      { id: 'ft', name: 'Feet (ft)', ratio: 0.3048 },
      { id: 'in', name: 'Inches (in)', ratio: 0.0254 },
      { id: 'yd', name: 'Yards (yd)', ratio: 0.9144 },
      { id: 'mi', name: 'Miles (mi)', ratio: 1609.344 },
      { id: 'nmi', name: 'Nautical Miles', ratio: 1852 },
    ],
  },
  weight: {
    base: 'kilogram',
    units: [
      { id: 'kg', name: 'Kilograms (kg)', ratio: 1 },
      { id: 'g', name: 'Grams (g)', ratio: 0.001 },
      { id: 'mg', name: 'Milligrams (mg)', ratio: 0.000001 },
      { id: 'lb', name: 'Pounds (lbs)', ratio: 0.45359237 },
      { id: 'oz', name: 'Ounces (oz)', ratio: 0.02834952 },
      { id: 't', name: 'Metric Tons', ratio: 1000 },
      { id: 'st', name: 'Stones', ratio: 6.35029 },
    ],
  },
  area: {
    base: 'sq_meter',
    units: [
      { id: 'sqm', name: 'Square Meters (m²)', ratio: 1 },
      { id: 'sqkm', name: 'Square Kilometers (km²)', ratio: 1000000 },
      { id: 'sqft', name: 'Square Feet (ft²)', ratio: 0.092903 },
      { id: 'sqyd', name: 'Square Yards (yd²)', ratio: 0.836127 },
      { id: 'acre', name: 'Acres', ratio: 4046.85642 },
      { id: 'ha', name: 'Hectares (ha)', ratio: 10000 },
      { id: 'sqmi', name: 'Square Miles', ratio: 2589988.11 },
    ],
  },
  volume: {
    base: 'liter',
    units: [
      { id: 'l', name: 'Liters (L)', ratio: 1 },
      { id: 'ml', name: 'Milliliters (mL)', ratio: 0.001 },
      { id: 'm3', name: 'Cubic Meters (m³)', ratio: 1000 },
      { id: 'gal_us', name: 'Gallons (US)', ratio: 3.78541 },
      { id: 'gal_uk', name: 'Gallons (UK)', ratio: 4.54609 },
      { id: 'floz', name: 'Fluid Ounces (fl oz)', ratio: 0.0295735 },
      { id: 'cup', name: 'Cups (US)', ratio: 0.236588 },
    ],
  },
  speed: {
    base: 'mps',
    units: [
      { id: 'kmh', name: 'Kilometers per hour (km/h)', ratio: 0.277778 },
      { id: 'mph', name: 'Miles per hour (mph)', ratio: 0.44704 },
      { id: 'mps', name: 'Meters per second (m/s)', ratio: 1 },
      { id: 'knot', name: 'Knots (kn)', ratio: 0.514444 },
      { id: 'fps', name: 'Feet per second (ft/s)', ratio: 0.3048 },
    ],
  },
  time: {
    base: 'second',
    units: [
      { id: 's', name: 'Seconds (s)', ratio: 1 },
      { id: 'ms', name: 'Milliseconds (ms)', ratio: 0.001 },
      { id: 'min', name: 'Minutes (min)', ratio: 60 },
      { id: 'hr', name: 'Hours (hr)', ratio: 3600 },
      { id: 'day', name: 'Days', ratio: 86400 },
      { id: 'week', name: 'Weeks', ratio: 604800 },
      { id: 'yr', name: 'Years (365 days)', ratio: 31536000 },
    ],
  },
  'data-storage': {
    base: 'byte',
    units: [
      { id: 'b', name: 'Bytes (B)', ratio: 1 },
      { id: 'kb', name: 'Kilobytes (KB - 1000)', ratio: 1000 },
      { id: 'mb', name: 'Megabytes (MB)', ratio: 1000000 },
      { id: 'gb', name: 'Gigabytes (GB)', ratio: 1000000000 },
      { id: 'tb', name: 'Terabytes (TB)', ratio: 1000000000000 },
      { id: 'kib', name: 'Kibibytes (KiB - 1024)', ratio: 1024 },
      { id: 'mib', name: 'Mebibytes (MiB)', ratio: 1048576 },
      { id: 'gib', name: 'Gibibytes (GiB)', ratio: 1073741824 },
      { id: 'tib', name: 'Tebibytes (TiB)', ratio: 1099511627776 },
    ],
  },
};

export const UnitConverterEngine: React.FC<{ categoryKey?: string }> = ({
  categoryKey = 'length',
}) => {
  const group = UNIT_GROUPS[categoryKey] || UNIT_GROUPS.length;
  const [val, setVal] = useState<number>(10);
  const [fromUnit, setFromUnit] = useState<string>(group.units[0].id);
  const [toUnit, setToUnit] = useState<string>(group.units[1].id);
  const [copied, setCopied] = useState<boolean>(false);

  const uFrom = group.units.find((u) => u.id === fromUnit) || group.units[0];
  const uTo = group.units.find((u) => u.id === toUnit) || group.units[1];

  // Convert to base, then to target
  const baseVal = val * uFrom.ratio;
  const result = baseVal / (uTo.ratio || 1);

  const swap = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${val} ${uFrom.name} = ${result.toLocaleString()} ${uTo.name}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center">
        {/* From Side */}
        <div className="md:col-span-2 space-y-1.5">
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Value</label>
          <input
            type="number"
            value={val}
            onChange={(e) => setVal(Number(e.target.value))}
            className="w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-white p-2.5 text-xs font-semibold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          >
            {group.units.map((u) => (
              <option key={u.id} value={u.id}>{u.name}</option>
            ))}
          </select>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center pt-4">
          <button
            type="button"
            onClick={swap}
            className="rounded-2xl border border-zinc-200 bg-white p-3 text-zinc-600 hover:bg-zinc-50 shadow-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            title="Swap units"
          >
            <ArrowLeftRight className="h-4 w-4" />
          </button>
        </div>

        {/* To Side */}
        <div className="md:col-span-2 space-y-1.5">
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Converted Value</label>
          <div className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm font-bold text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 truncate">
            {result.toLocaleString(undefined, { maximumFractionDigits: 6 })}
          </div>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-white p-2.5 text-xs font-semibold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          >
            {group.units.map((u) => (
              <option key={u.id} value={u.id}>{u.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Result Card */}
      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">Conversion Result</span>
          <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
            {val} {uFrom.name.split(' ')[0]} = {result.toLocaleString(undefined, { maximumFractionDigits: 6 })} {uTo.name.split(' ')[0]}
          </div>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 shadow-xs"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. Temperature Converter Engine
// -------------------------------------------------------------
export const TemperatureConverterEngine: React.FC = () => {
  const [celsius, setCelsius] = useState<number>(25);

  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;
  const rankine = (celsius + 273.15) * 1.8;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <label className="text-xs font-bold text-zinc-400 uppercase block mb-1">Celsius (°C)</label>
          <input
            type="number"
            value={celsius}
            onChange={(e) => setCelsius(Number(e.target.value))}
            className="w-full text-xl font-black text-indigo-600 dark:text-indigo-400 outline-hidden bg-transparent"
          />
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <label className="text-xs font-bold text-zinc-400 uppercase block mb-1">Fahrenheit (°F)</label>
          <input
            type="number"
            value={Number(fahrenheit.toFixed(2))}
            onChange={(e) => setCelsius(((Number(e.target.value) - 32) * 5) / 9)}
            className="w-full text-xl font-black text-zinc-900 dark:text-zinc-100 outline-hidden bg-transparent"
          />
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <label className="text-xs font-bold text-zinc-400 uppercase block mb-1">Kelvin (K)</label>
          <input
            type="number"
            value={Number(kelvin.toFixed(2))}
            onChange={(e) => setCelsius(Number(e.target.value) - 273.15)}
            className="w-full text-xl font-black text-zinc-900 dark:text-zinc-100 outline-hidden bg-transparent"
          />
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
          <label className="text-xs font-bold text-zinc-400 uppercase block mb-1">Rankine (°R)</label>
          <div className="text-xl font-black text-zinc-900 dark:text-zinc-100">
            {rankine.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. Number to Words Converter
// -------------------------------------------------------------
export const NumberToWordsEngine: React.FC = () => {
  const [numberInput, setNumberInput] = useState<string>('12450.75');

  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const convertGroup = (n: number): string => {
    let s = '';
    if (n >= 100) {
      s += ones[Math.floor(n / 100)] + ' hundred ';
      n %= 100;
    }
    if (n >= 20) {
      s += tens[Math.floor(n / 10)] + (n % 10 ? '-' + ones[n % 10] : '');
    } else if (n > 0) {
      s += ones[n];
    }
    return s.trim();
  };

  const toWords = (num: number): string => {
    if (num === 0) return 'zero';
    let n = Math.floor(Math.abs(num));
    const parts: string[] = [];

    const scales = ['', 'thousand', 'million', 'billion', 'trillion'];
    let scaleIdx = 0;

    while (n > 0) {
      const chunk = n % 1000;
      if (chunk !== 0) {
        const wordsChunk = convertGroup(chunk);
        parts.unshift(wordsChunk + (scales[scaleIdx] ? ' ' + scales[scaleIdx] : ''));
      }
      n = Math.floor(n / 1000);
      scaleIdx++;
    }

    return parts.join(', ');
  };

  const val = parseFloat(numberInput) || 0;
  const wordsResult = toWords(val);
  const formattedCapitalized = wordsResult.charAt(0).toUpperCase() + wordsResult.slice(1);

  return (
    <div className="space-y-6">
      <div>
        <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Enter Number</label>
        <input
          type="number"
          value={numberInput}
          onChange={(e) => setNumberInput(e.target.value)}
          className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 font-mono text-base font-bold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
        />
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20">
        <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
          In English Words
        </span>
        <div className="mt-1 text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-50 leading-relaxed capitalize">
          {formattedCapitalized}
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. Roman Numeral Converter
// -------------------------------------------------------------
export const RomanNumeralEngine: React.FC = () => {
  const [arabic, setArabic] = useState<number>(2026);
  const [roman, setRoman] = useState<string>('MMXXVI');

  const toRoman = (num: number): string => {
    const lookup: [number, string][] = [
      [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
      [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];
    let res = '';
    let n = num;
    for (const [v, r] of lookup) {
      while (n >= v) {
        res += r;
        n -= v;
      }
    }
    return res;
  };

  const handleArabicChange = (val: number) => {
    const clamped = Math.max(1, Math.min(3999, val));
    setArabic(clamped);
    setRoman(toRoman(clamped));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Arabic Integer (1 to 3999)</label>
          <input
            type="number"
            value={arabic}
            onChange={(e) => handleArabicChange(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-lg font-bold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Roman Numeral</label>
          <div className="mt-1 rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-lg font-bold font-serif text-indigo-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-indigo-400">
            {roman}
          </div>
        </div>
      </div>
    </div>
  );
};
