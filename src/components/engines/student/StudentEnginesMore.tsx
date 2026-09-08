'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Copy, Check, Calendar, Clock, Award } from 'lucide-react';

// -------------------------------------------------------------
// 1. Marks Percentage Calculator
// -------------------------------------------------------------
export const MarksPercentageEngine: React.FC = () => {
  const [subjects, setSubjects] = useState([
    { id: '1', name: 'Subject 1', scored: 88, max: 100 },
    { id: '2', name: 'Subject 2', scored: 92, max: 100 },
    { id: '3', name: 'Subject 3', scored: 79, max: 100 },
    { id: '4', name: 'Subject 4', scored: 85, max: 100 },
    { id: '5', name: 'Subject 5', scored: 90, max: 100 },
  ]);

  const addSubject = () => {
    setSubjects([
      ...subjects,
      { id: Date.now().toString(), name: `Subject ${subjects.length + 1}`, scored: 80, max: 100 },
    ]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length <= 1) return;
    setSubjects(subjects.filter((s) => s.id !== id));
  };

  const updateSubject = (id: string, field: string, val: any) => {
    setSubjects(subjects.map((s) => (s.id === id ? { ...s, [field]: val } : s)));
  };

  const totalScored = subjects.reduce((sum, s) => sum + (Number(s.scored) || 0), 0);
  const totalMax = subjects.reduce((sum, s) => sum + (Number(s.max) || 0), 0);
  const percentage = totalMax > 0 ? (totalScored / totalMax) * 100 : 0;

  const getDivision = (pct: number) => {
    if (pct >= 75) return 'First Class with Distinction';
    if (pct >= 60) return 'First Class';
    if (pct >= 50) return 'Second Class';
    if (pct >= 35) return 'Pass';
    return 'Needs Improvement';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <span className="text-xs font-semibold text-zinc-500 uppercase dark:text-zinc-400">
          Subject Marks Roster
        </span>
        <button
          type="button"
          onClick={addSubject}
          className="flex items-center gap-1 rounded-xl bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:text-indigo-400"
        >
          <Plus className="h-3.5 w-3.5" /> Add Subject
        </button>
      </div>

      <div className="space-y-2.5">
        {subjects.map((sub, idx) => (
          <div key={sub.id} className="grid grid-cols-12 gap-2 items-center rounded-2xl border border-zinc-100 bg-zinc-50/50 p-2 dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="col-span-5 sm:col-span-6">
              <input
                type="text"
                value={sub.name}
                onChange={(e) => updateSubject(sub.id, 'name', e.target.value)}
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div className="col-span-3 sm:col-span-3">
              <input
                type="number"
                value={sub.scored}
                placeholder="Scored"
                onChange={(e) => updateSubject(sub.id, 'scored', Number(e.target.value))}
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div className="col-span-3 sm:col-span-2">
              <input
                type="number"
                value={sub.max}
                placeholder="Max"
                onChange={(e) => updateSubject(sub.id, 'max', Number(e.target.value))}
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div className="col-span-1 text-right">
              <button
                type="button"
                onClick={() => removeSubject(sub.id)}
                className="text-zinc-400 hover:text-rose-500"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-linear-to-br from-indigo-50/80 to-purple-50/50 p-5 dark:border-indigo-900/40 dark:from-indigo-950/30 dark:to-zinc-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
            Total Marks Percentage
          </span>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
            {percentage.toFixed(2)}%
          </div>
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            {getDivision(percentage)}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="rounded-xl bg-white p-3 border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
            <span className="text-zinc-400 block">Total Scored</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{totalScored} / {totalMax}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. Grade Calculator (Target Exam Score Needed)
// -------------------------------------------------------------
export const GradeCalculatorEngine: React.FC = () => {
  const [currentGrade, setCurrentGrade] = useState<number>(82);
  const [targetGrade, setTargetGrade] = useState<number>(85);
  const [finalExamWeight, setFinalExamWeight] = useState<number>(30);

  // currentWeight = 100 - finalExamWeight
  // target = (currentGrade * currentWeight + needed * finalWeight) / 100
  // => needed = (target * 100 - currentGrade * currentWeight) / finalWeight
  const currentWeight = 100 - finalExamWeight;
  const neededScore = finalExamWeight > 0
    ? ((targetGrade * 100) - (currentGrade * currentWeight)) / finalExamWeight
    : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
            Current Running Grade (%)
          </label>
          <input
            type="number"
            value={currentGrade}
            onChange={(e) => setCurrentGrade(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
            Desired Target Grade (%)
          </label>
          <input
            type="number"
            value={targetGrade}
            onChange={(e) => setTargetGrade(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
            Final Exam Weight (%)
          </label>
          <input
            type="number"
            min="1"
            max="99"
            value={finalExamWeight}
            onChange={(e) => setFinalExamWeight(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20">
        <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
          Required Score on Final Exam
        </span>
        <div className="mt-1 text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
          {neededScore <= 0 ? '100% Guaranteed Pass (0%)' : `${neededScore.toFixed(1)}%`}
        </div>
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
          {neededScore > 100
            ? '⚠️ You will need extra credit to reach your target grade mathematically.'
            : `You must score at least ${neededScore.toFixed(1)}% on your ${finalExamWeight}% final exam to finish with a ${targetGrade}%.`}
        </p>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. Exam Countdown
// -------------------------------------------------------------
export const ExamCountdownEngine: React.FC = () => {
  const [examName, setExamName] = useState<string>('Final Semester Exam');
  const [examDate, setExamDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    return d.toISOString().split('T')[0];
  });

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const target = new Date(examDate).getTime();
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [examDate]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Exam / Test Name</label>
          <input
            type="text"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Exam Date</label>
          <input
            type="date"
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="rounded-3xl border border-indigo-100 bg-linear-to-br from-indigo-50 to-purple-50/50 p-6 text-center dark:border-indigo-900/40 dark:from-indigo-950/30 dark:to-zinc-900">
        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{examName}</h3>
        <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
          <div className="rounded-2xl bg-white p-3 shadow-2xs border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
            <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">
              {timeLeft.days}
            </span>
            <span className="block text-[10px] font-semibold text-zinc-400 uppercase mt-0.5">Days</span>
          </div>
          <div className="rounded-2xl bg-white p-3 shadow-2xs border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
            <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">
              {timeLeft.hours}
            </span>
            <span className="block text-[10px] font-semibold text-zinc-400 uppercase mt-0.5">Hours</span>
          </div>
          <div className="rounded-2xl bg-white p-3 shadow-2xs border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
            <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">
              {timeLeft.minutes}
            </span>
            <span className="block text-[10px] font-semibold text-zinc-400 uppercase mt-0.5">Mins</span>
          </div>
          <div className="rounded-2xl bg-white p-3 shadow-2xs border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
            <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">
              {timeLeft.seconds}
            </span>
            <span className="block text-[10px] font-semibold text-zinc-400 uppercase mt-0.5">Secs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. Study Time Calculator
// -------------------------------------------------------------
export const StudyTimeCalculatorEngine: React.FC = () => {
  const [totalChapters, setTotalChapters] = useState<number>(18);
  const [hoursPerChapter, setHoursPerChapter] = useState<number>(3);
  const [daysAvailable, setDaysAvailable] = useState<number>(14);

  const totalStudyHoursNeeded = totalChapters * hoursPerChapter;
  const dailyHours = daysAvailable > 0 ? (totalStudyHoursNeeded / daysAvailable) : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Total Chapters / Topics</label>
          <input
            type="number"
            value={totalChapters}
            onChange={(e) => setTotalChapters(Math.max(1, Number(e.target.value)))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Avg Hours per Chapter</label>
          <input
            type="number"
            step="0.5"
            value={hoursPerChapter}
            onChange={(e) => setHoursPerChapter(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Days Available</label>
          <input
            type="number"
            value={daysAvailable}
            onChange={(e) => setDaysAvailable(Math.max(1, Number(e.target.value)))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20">
        <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
          Recommended Daily Study Pace
        </span>
        <div className="mt-1 text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
          {dailyHours.toFixed(1)} hours / day
        </div>
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
          Total syllabus effort: {totalStudyHoursNeeded} hours across {daysAvailable} days.
        </p>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 5. Date Difference Calculator
// -------------------------------------------------------------
export const DateDifferenceEngine: React.FC = () => {
  const [startDate, setStartDate] = useState<string>('2026-01-01');
  const [endDate, setEndDate] = useState<string>('2026-09-08');
  const [includeEndDay, setIncludeEndDay] = useState<boolean>(true);

  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + (includeEndDay ? 1 : 0);
  const weeks = Math.floor(diffDays / 7);
  const remDays = diffDays % 7;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="includeEndDay"
          checked={includeEndDay}
          onChange={(e) => setIncludeEndDay(e.target.checked)}
          className="rounded-md border-zinc-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
        />
        <label htmlFor="includeEndDay" className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
          Include end day in calculation
        </label>
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20">
        <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
          Total Duration
        </span>
        <div className="mt-1 text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
          {diffDays.toLocaleString()} Days
        </div>
        <p className="mt-1 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
          Equivalent to {weeks} weeks and {remDays} days (approx. {(diffDays / 30.4375).toFixed(1)} months)
        </p>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 6. SGPA & Semester GPA Aggregator
// -------------------------------------------------------------
export const SemesterGpaAggregatorEngine: React.FC = () => {
  const [semesters, setSemesters] = useState([
    { id: '1', name: 'Semester 1', sgpa: 8.4, credits: 21 },
    { id: '2', name: 'Semester 2', sgpa: 8.8, credits: 22 },
    { id: '3', name: 'Semester 3', sgpa: 9.1, credits: 20 },
    { id: '4', name: 'Semester 4', sgpa: 8.6, credits: 24 },
  ]);

  const addSemester = () => {
    setSemesters([
      ...semesters,
      { id: Date.now().toString(), name: `Semester ${semesters.length + 1}`, sgpa: 8.5, credits: 22 },
    ]);
  };

  const removeSemester = (id: string) => {
    if (semesters.length <= 1) return;
    setSemesters(semesters.filter((s) => s.id !== id));
  };

  const updateSemester = (id: string, field: string, val: any) => {
    setSemesters(semesters.map((s) => (s.id === id ? { ...s, [field]: val } : s)));
  };

  const totalCredits = semesters.reduce((sum, s) => sum + (Number(s.credits) || 0), 0);
  const totalPoints = semesters.reduce((sum, s) => sum + ((Number(s.credits) || 0) * (Number(s.sgpa) || 0)), 0);
  const cgpa = totalCredits > 0 ? (totalPoints / totalCredits) : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <span className="text-xs font-semibold text-zinc-500 uppercase dark:text-zinc-400">
          Completed Semesters
        </span>
        <button
          type="button"
          onClick={addSemester}
          className="flex items-center gap-1 rounded-xl bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:text-indigo-400"
        >
          <Plus className="h-3.5 w-3.5" /> Add Semester
        </button>
      </div>

      <div className="space-y-2.5">
        {semesters.map((sem) => (
          <div key={sem.id} className="grid grid-cols-12 gap-2 items-center rounded-2xl border border-zinc-100 bg-zinc-50/50 p-2 dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="col-span-5 sm:col-span-6">
              <input
                type="text"
                value={sem.name}
                onChange={(e) => updateSemester(sem.id, 'name', e.target.value)}
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div className="col-span-3 sm:col-span-3">
              <input
                type="number"
                step="0.01"
                min="0"
                max="10"
                value={sem.sgpa}
                placeholder="SGPA"
                onChange={(e) => updateSemester(sem.id, 'sgpa', Number(e.target.value))}
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div className="col-span-3 sm:col-span-2">
              <input
                type="number"
                value={sem.credits}
                placeholder="Credits"
                onChange={(e) => updateSemester(sem.id, 'credits', Number(e.target.value))}
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div className="col-span-1 text-right">
              <button
                type="button"
                onClick={() => removeSemester(sem.id)}
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
            Aggregated Cumulative CGPA
          </span>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
            {cgpa.toFixed(2)}{' '}
            <span className="text-sm font-normal text-zinc-500">({totalCredits} Credits)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
