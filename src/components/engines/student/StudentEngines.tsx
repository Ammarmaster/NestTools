'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Plus, Trash2, Copy, Check, Play, Pause, RotateCcw, Award, CheckCircle } from 'lucide-react';
import { trackToolUse, trackCopy } from '@/lib/analytics';

// -------------------------------------------------------------
// 1. CGPA Calculator
// -------------------------------------------------------------
interface CourseRow {
  id: string;
  name: string;
  credits: number;
  gradePoint: number;
}

export const CgpaCalculatorEngine: React.FC = () => {
  const [scale, setScale] = useState<number>(10.0);
  const [courses, setCourses] = useState<CourseRow[]>([
    { id: '1', name: 'Course 1', credits: 4, gradePoint: 9.0 },
    { id: '2', name: 'Course 2', credits: 3, gradePoint: 8.5 },
    { id: '3', name: 'Course 3', credits: 3, gradePoint: 9.5 },
    { id: '4', name: 'Course 4', credits: 4, gradePoint: 8.0 },
  ]);
  const [copied, setCopied] = useState(false);

  const addCourse = () => {
    setCourses([
      ...courses,
      { id: Date.now().toString(), name: `Course ${courses.length + 1}`, credits: 3, gradePoint: scale === 10 ? 8.0 : 3.5 },
    ]);
  };

  const removeCourse = (id: string) => {
    if (courses.length <= 1) return;
    setCourses(courses.filter((c) => c.id !== id));
  };

  const updateCourse = (id: string, field: 'name' | 'credits' | 'gradePoint', value: any) => {
    setCourses(
      courses.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  const totalCredits = courses.reduce((sum, c) => sum + (Number(c.credits) || 0), 0);
  const totalPoints = courses.reduce((sum, c) => sum + ((Number(c.credits) || 0) * (Number(c.gradePoint) || 0)), 0);
  const cgpa = totalCredits > 0 ? (totalPoints / totalCredits) : 0;
  const percentage = scale === 10 ? (cgpa * 9.5) : ((cgpa / 4.0) * 100);

  const handleCopy = () => {
    const text = `CGPA: ${cgpa.toFixed(2)} / ${scale.toFixed(1)} | Percentage: ${percentage.toFixed(2)}% | Total Credits: ${totalCredits}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    trackCopy('cgpa-calculator', 'result');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400">
            Grading Scale
          </label>
          <div className="mt-1 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setScale(10.0)}
              className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                scale === 10.0
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300'
              }`}
            >
              10.0 Scale
            </button>
            <button
              type="button"
              onClick={() => setScale(4.0)}
              className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                scale === 4.0
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300'
              }`}
            >
              4.0 Scale
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={addCourse}
          className="flex items-center gap-1.5 rounded-xl bg-indigo-50 px-3.5 py-2 text-xs font-semibold text-indigo-600 transition-colors hover:bg-indigo-100 dark:bg-indigo-950/60 dark:text-indigo-400 dark:hover:bg-indigo-900/60"
        >
          <Plus className="h-4 w-4" />
          <span>Add Course / Subject</span>
        </button>
      </div>

      {/* Courses List */}
      <div className="space-y-2.5">
        <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-zinc-400 dark:text-zinc-500 px-2">
          <div className="col-span-5 sm:col-span-6">Course Name</div>
          <div className="col-span-3 sm:col-span-2">Credits</div>
          <div className="col-span-3 sm:col-span-3">Grade Point</div>
          <div className="col-span-1 text-right"></div>
        </div>

        {courses.map((course, idx) => (
          <div key={course.id} className="grid grid-cols-12 gap-2 items-center rounded-2xl border border-zinc-100 bg-zinc-50/60 p-2 sm:p-2.5 dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="col-span-5 sm:col-span-6">
              <input
                type="text"
                value={course.name}
                onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                placeholder={`Course ${idx + 1}`}
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-900 placeholder-zinc-400 outline-hidden focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div className="col-span-3 sm:col-span-2">
              <input
                type="number"
                min="1"
                max="20"
                value={course.credits}
                onChange={(e) => updateCourse(course.id, 'credits', Number(e.target.value))}
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-900 outline-hidden focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div className="col-span-3 sm:col-span-3">
              <input
                type="number"
                step="0.1"
                min="0"
                max={scale}
                value={course.gradePoint}
                onChange={(e) => updateCourse(course.id, 'gradePoint', Number(e.target.value))}
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-900 outline-hidden focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div className="col-span-1 text-right">
              <button
                type="button"
                onClick={() => removeCourse(course.id)}
                disabled={courses.length <= 1}
                className="rounded-lg p-1.5 text-zinc-400 hover:text-rose-500 disabled:opacity-30 dark:hover:text-rose-400"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Result Card */}
      <div className="rounded-2xl border border-indigo-100 bg-linear-to-br from-indigo-50/80 to-purple-50/50 p-5 dark:border-indigo-900/40 dark:from-indigo-950/30 dark:to-zinc-900">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Your Calculated CGPA
            </span>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                {cgpa.toFixed(2)}
              </span>
              <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                / {scale.toFixed(1)}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <div className="rounded-xl bg-white/80 px-3.5 py-2 border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
              <span className="text-zinc-500 dark:text-zinc-400 block">Equivalent %</span>
              <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                {percentage.toFixed(2)}%
              </span>
            </div>
            <div className="rounded-xl bg-white/80 px-3.5 py-2 border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
              <span className="text-zinc-500 dark:text-zinc-400 block">Total Credits</span>
              <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                {totalCredits}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white shadow-xs transition-colors hover:bg-indigo-700"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              <span>{copied ? 'Copied' : 'Copy Result'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. GPA Calculator (Letter Grades)
// -------------------------------------------------------------
const GRADE_POINTS_MAP: Record<string, number> = {
  'A+': 4.0,
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'C-': 1.7,
  'D+': 1.3,
  'D': 1.0,
  'F': 0.0,
};

export const GpaCalculatorEngine: React.FC = () => {
  const [courses, setCourses] = useState([
    { id: '1', name: 'Mathematics', grade: 'A', credits: 4 },
    { id: '2', name: 'Physics', grade: 'B+', credits: 3 },
    { id: '3', name: 'Computer Science', grade: 'A', credits: 4 },
    { id: '4', name: 'English', grade: 'A-', credits: 3 },
  ]);
  const [copied, setCopied] = useState(false);

  const addCourse = () => {
    setCourses([
      ...courses,
      { id: Date.now().toString(), name: `Subject ${courses.length + 1}`, grade: 'A', credits: 3 },
    ]);
  };

  const removeCourse = (id: string) => {
    if (courses.length <= 1) return;
    setCourses(courses.filter((c) => c.id !== id));
  };

  const updateCourse = (id: string, field: string, value: any) => {
    setCourses(courses.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  const totalCredits = courses.reduce((sum, c) => sum + (Number(c.credits) || 0), 0);
  const totalHonorPoints = courses.reduce(
    (sum, c) => sum + ((Number(c.credits) || 0) * (GRADE_POINTS_MAP[c.grade] ?? 0)),
    0
  );
  const gpa = totalCredits > 0 ? (totalHonorPoints / totalCredits) : 0;

  const handleCopy = () => {
    navigator.clipboard.writeText(`Semester GPA: ${gpa.toFixed(2)} / 4.00 (${totalCredits} Credits)`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase">
          Semester Course Grades
        </span>
        <button
          type="button"
          onClick={addCourse}
          className="flex items-center gap-1 rounded-xl bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:text-indigo-400"
        >
          <Plus className="h-3.5 w-3.5" /> Add Course
        </button>
      </div>

      <div className="space-y-2.5">
        {courses.map((c) => (
          <div key={c.id} className="grid grid-cols-12 gap-2 items-center rounded-2xl border border-zinc-100 bg-zinc-50/50 p-2 dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="col-span-5 sm:col-span-6">
              <input
                type="text"
                value={c.name}
                onChange={(e) => updateCourse(c.id, 'name', e.target.value)}
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div className="col-span-3 sm:col-span-3">
              <select
                value={c.grade}
                onChange={(e) => updateCourse(c.id, 'grade', e.target.value)}
                className="w-full rounded-xl border border-zinc-200 bg-white px-2 py-1.5 text-xs font-semibold text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              >
                {Object.keys(GRADE_POINTS_MAP).map((grade) => (
                  <option key={grade} value={grade}>
                    {grade} ({GRADE_POINTS_MAP[grade].toFixed(1)})
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-3 sm:col-span-2">
              <input
                type="number"
                min="1"
                max="10"
                value={c.credits}
                onChange={(e) => updateCourse(c.id, 'credits', Number(e.target.value))}
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div className="col-span-1 text-right">
              <button
                type="button"
                onClick={() => removeCourse(c.id)}
                className="text-zinc-400 hover:text-rose-500"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-linear-to-br from-indigo-50/80 to-purple-50/50 p-5 dark:border-indigo-900/40 dark:from-indigo-950/30 dark:to-zinc-900 flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
            Calculated GPA
          </span>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
            {gpa.toFixed(2)}{' '}
            <span className="text-sm font-normal text-zinc-500">/ 4.00</span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span>{copied ? 'Copied' : 'Copy GPA'}</span>
        </button>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. Percentage Calculator (Comprehensive)
// -------------------------------------------------------------
export const PercentageCalculatorEngine: React.FC = () => {
  // Mode 1: What is X% of Y
  const [m1X, setM1X] = useState<number>(15);
  const [m1Y, setM1Y] = useState<number>(200);

  // Mode 2: X is what % of Y
  const [m2X, setM2X] = useState<number>(45);
  const [m2Y, setM2Y] = useState<number>(180);

  const res1 = (m1X / 100) * m1Y;
  const res2 = m2Y !== 0 ? (m2X / m2Y) * 100 : 0;

  return (
    <div className="space-y-8">
      {/* Box 1 */}
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-3">
          1. What is X% of Y?
        </h3>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span>What is</span>
          <input
            type="number"
            value={m1X}
            onChange={(e) => setM1X(Number(e.target.value))}
            className="w-24 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 font-semibold text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
          <span>% of</span>
          <input
            type="number"
            value={m1Y}
            onChange={(e) => setM1Y(Number(e.target.value))}
            className="w-28 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 font-semibold text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
          <span>?</span>
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-white p-3 border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Result:</span>
          <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
            {res1.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Box 2 */}
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-3">
          2. X is what percent of Y?
        </h3>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <input
            type="number"
            value={m2X}
            onChange={(e) => setM2X(Number(e.target.value))}
            className="w-24 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 font-semibold text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
          <span>is what percent of</span>
          <input
            type="number"
            value={m2Y}
            onChange={(e) => setM2Y(Number(e.target.value))}
            className="w-28 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 font-semibold text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
          <span>?</span>
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-white p-3 border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Result:</span>
          <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
            {res2.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. Percentage Increase Calculator
// -------------------------------------------------------------
export const PercentageIncreaseEngine: React.FC = () => {
  const [initial, setInitial] = useState<number>(100);
  const [finalVal, setFinalVal] = useState<number>(135);

  const diff = finalVal - initial;
  const percentInc = initial !== 0 ? (diff / Math.abs(initial)) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Initial Value</label>
          <input
            type="number"
            value={initial}
            onChange={(e) => setInitial(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Final Value</label>
          <input
            type="number"
            value={finalVal}
            onChange={(e) => setFinalVal(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 dark:border-emerald-900/30 dark:bg-emerald-950/20">
        <span className="text-xs font-semibold uppercase text-emerald-600 dark:text-emerald-400">
          Percentage Increase
        </span>
        <div className="mt-1 text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
          +{percentInc.toFixed(2)}%
        </div>
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
          Absolute difference: +{diff.toLocaleString()} | Multiplier: {(finalVal / (initial || 1)).toFixed(3)}x
        </p>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 5. Percentage Decrease Calculator
// -------------------------------------------------------------
export const PercentageDecreaseEngine: React.FC = () => {
  const [initial, setInitial] = useState<number>(150);
  const [finalVal, setFinalVal] = useState<number>(105);

  const diff = initial - finalVal;
  const percentDec = initial !== 0 ? (diff / Math.abs(initial)) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Original Value</label>
          <input
            type="number"
            value={initial}
            onChange={(e) => setInitial(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Reduced Value</label>
          <input
            type="number"
            value={finalVal}
            onChange={(e) => setFinalVal(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-rose-100 bg-rose-50/50 p-5 dark:border-rose-900/30 dark:bg-rose-950/20">
        <span className="text-xs font-semibold uppercase text-rose-600 dark:text-rose-400">
          Percentage Decrease
        </span>
        <div className="mt-1 text-3xl font-extrabold text-rose-600 dark:text-rose-400">
          -{percentDec.toFixed(2)}%
        </div>
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
          Total reduction: -{diff.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 6. Attendance & Bunk Calculator
// -------------------------------------------------------------
export const AttendanceCalculatorEngine: React.FC = () => {
  const [totalClasses, setTotalClasses] = useState<number>(60);
  const [attendedClasses, setAttendedClasses] = useState<number>(48);
  const [targetPercent, setTargetPercent] = useState<number>(75);

  const currentPercent = totalClasses > 0 ? (attendedClasses / totalClasses) * 100 : 0;

  // If current < target: need X more classes: (attended + x)/(total + x) = target/100
  // => attended + x = (target/100)*total + (target/100)*x
  // => x*(1 - target/100) = (target/100)*total - attended
  // => x = ((target * total) - (100 * attended)) / (100 - target)
  let classesNeeded = 0;
  if (currentPercent < targetPercent && targetPercent < 100) {
    classesNeeded = Math.ceil(((targetPercent * totalClasses) - (100 * attendedClasses)) / (100 - targetPercent));
    classesNeeded = Math.max(0, classesNeeded);
  }

  // If current >= target: can bunk Y classes: attended / (total + y) >= target/100
  // => attended * 100 >= target * (total + y)
  // => y <= (attended * 100 - target * total) / target
  let bunksAllowed = 0;
  if (currentPercent >= targetPercent && targetPercent > 0) {
    bunksAllowed = Math.floor(((attendedClasses * 100) - (targetPercent * totalClasses)) / targetPercent);
    bunksAllowed = Math.max(0, bunksAllowed);
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Total Classes Held</label>
          <input
            type="number"
            min="1"
            value={totalClasses}
            onChange={(e) => setTotalClasses(Math.max(1, Number(e.target.value)))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Classes Attended</label>
          <input
            type="number"
            min="0"
            max={totalClasses}
            value={attendedClasses}
            onChange={(e) => setAttendedClasses(Math.min(totalClasses, Math.max(0, Number(e.target.value))))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Target Attendance (%)</label>
          <input
            type="number"
            min="50"
            max="99"
            value={targetPercent}
            onChange={(e) => setTargetPercent(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className={`rounded-2xl border p-5 ${
        currentPercent >= targetPercent
          ? 'border-emerald-200 bg-emerald-50/50 dark:border-emerald-900/40 dark:bg-emerald-950/20'
          : 'border-rose-200 bg-rose-50/50 dark:border-rose-900/40 dark:bg-rose-950/20'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400">
              Current Attendance
            </span>
            <div className={`text-4xl font-extrabold ${currentPercent >= targetPercent ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
              {currentPercent.toFixed(1)}%
            </div>
          </div>

          <div className="rounded-xl bg-white/90 p-4 border border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700">
            {currentPercent >= targetPercent ? (
              <div>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                  On Track!
                </p>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">
                  You can safely skip <span className="text-indigo-600 dark:text-indigo-400 font-extrabold text-base">{bunksAllowed}</span> next class{bunksAllowed === 1 ? '' : 'es'} without dropping below {targetPercent}%.
                </p>
              </div>
            ) : (
              <div>
                <p className="text-xs text-rose-600 dark:text-rose-400 font-bold">
                  Attendance Shortage!
                </p>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">
                  You must attend the next <span className="text-rose-600 dark:text-rose-400 font-extrabold text-base">{classesNeeded}</span> consecutive class{classesNeeded === 1 ? '' : 'es'} to reach {targetPercent}%.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 7. Pomodoro Timer
// -------------------------------------------------------------
export const PomodoroTimerEngine: React.FC = () => {
  const [mode, setMode] = useState<'focus' | 'short' | 'long'>('focus');
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [sessionsCompleted, setSessionsCompleted] = useState<number>(0);

  const durations = {
    focus: 25 * 60,
    short: 5 * 60,
    long: 15 * 60,
  };

  useEffect(() => {
    let timer: any = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      if (mode === 'focus') {
        setSessionsCompleted((prev) => prev + 1);
        setMode('short');
        setTimeLeft(durations.short);
      } else {
        setMode('focus');
        setTimeLeft(durations.focus);
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, mode]);

  const switchMode = (newMode: 'focus' | 'short' | 'long') => {
    setIsRunning(false);
    setMode(newMode);
    setTimeLeft(durations[newMode]);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(durations[mode]);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="flex flex-col items-center justify-center py-6 space-y-6">
      {/* Mode Switches */}
      <div className="flex items-center gap-2 rounded-2xl bg-zinc-100 p-1.5 dark:bg-zinc-800">
        <button
          type="button"
          onClick={() => switchMode('focus')}
          className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            mode === 'focus' ? 'bg-white text-indigo-600 shadow-xs dark:bg-zinc-900 dark:text-indigo-400' : 'text-zinc-600 dark:text-zinc-400'
          }`}
        >
          Focus (25m)
        </button>
        <button
          type="button"
          onClick={() => switchMode('short')}
          className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            mode === 'short' ? 'bg-white text-indigo-600 shadow-xs dark:bg-zinc-900 dark:text-indigo-400' : 'text-zinc-600 dark:text-zinc-400'
          }`}
        >
          Short Break (5m)
        </button>
        <button
          type="button"
          onClick={() => switchMode('long')}
          className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            mode === 'long' ? 'bg-white text-indigo-600 shadow-xs dark:bg-zinc-900 dark:text-indigo-400' : 'text-zinc-600 dark:text-zinc-400'
          }`}
        >
          Long Break (15m)
        </button>
      </div>

      {/* Timer Display */}
      <div className="text-7xl font-extrabold tracking-tight text-zinc-900 sm:text-8xl dark:text-zinc-50 font-mono">
        {timeFormatted}
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => setIsRunning(!isRunning)}
          className="flex items-center gap-2 rounded-2xl bg-indigo-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-colors"
        >
          {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          <span>{isRunning ? 'Pause' : 'Start Focus'}</span>
        </button>
        <button
          type="button"
          onClick={resetTimer}
          className="rounded-2xl border border-zinc-200 bg-white p-3 text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          title="Reset timer"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        Completed focus sessions: <span className="font-bold text-indigo-600 dark:text-indigo-400">{sessionsCompleted}</span>
      </p>
    </div>
  );
};

// -------------------------------------------------------------
// 8. Age Calculator Engine
// -------------------------------------------------------------
export const AgeCalculatorEngine: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>('2002-05-15');
  const [targetDate, setTargetDate] = useState<string>(new Date().toISOString().split('T')[0]);

  const b = new Date(birthDate);
  const t = new Date(targetDate);

  let years = t.getFullYear() - b.getFullYear();
  let months = t.getMonth() - b.getMonth();
  let days = t.getDate() - b.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(t.getFullYear(), t.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = Math.max(0, Math.floor((t.getTime() - b.getTime()) / (1000 * 60 * 60 * 24)));
  const totalHours = totalDays * 24;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Date of Birth</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Target Date (Defaults to Today)</label>
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20">
        <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
          Chronological Age
        </span>
        <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
          {years} years, {months} months, {days} days
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="rounded-xl bg-white p-3 border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
            <span className="text-[11px] text-zinc-400 block">Total Days</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{totalDays.toLocaleString()} days</span>
          </div>
          <div className="rounded-xl bg-white p-3 border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
            <span className="text-[11px] text-zinc-400 block">Total Hours</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{totalHours.toLocaleString()} hours</span>
          </div>
          <div className="rounded-xl bg-white p-3 border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
            <span className="text-[11px] text-zinc-400 block">Total Weeks</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{Math.floor(totalDays / 7).toLocaleString()} weeks</span>
          </div>
        </div>
      </div>
    </div>
  );
};
