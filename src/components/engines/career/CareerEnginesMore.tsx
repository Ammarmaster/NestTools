'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Copy, Check, Calendar, Clock, Download, Kanban, Sparkles } from 'lucide-react';
import { trackCopy } from '@/lib/analytics';

// -------------------------------------------------------------
// 1. Notice Period & Last Working Day Calculator
// -------------------------------------------------------------
export const NoticePeriodEngine: React.FC = () => {
  const [resignationDate, setResignationDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [noticeDays, setNoticeDays] = useState<number>(60);
  const [leaveDeduction, setLeaveDeduction] = useState<number>(0);

  const netNotice = Math.max(0, noticeDays - leaveDeduction);
  const start = new Date(resignationDate);
  const lwd = new Date(start);
  lwd.setDate(lwd.getDate() + netNotice);

  const daysLeft = Math.max(
    0,
    Math.ceil((lwd.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Resignation Date</label>
          <input
            type="date"
            value={resignationDate}
            onChange={(e) => setResignationDate(e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Notice Period (Days)</label>
          <input
            type="number"
            value={noticeDays}
            onChange={(e) => setNoticeDays(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Leaves / Buyout (Days)</label>
          <input
            type="number"
            value={leaveDeduction}
            onChange={(e) => setLeaveDeduction(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="rounded-3xl border border-indigo-100 bg-linear-to-br from-indigo-50/80 to-purple-50/50 p-6 dark:border-indigo-900/40 dark:from-indigo-950/30 dark:to-zinc-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
            Official Last Working Day (LWD)
          </span>
          <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
            {lwd.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            {daysLeft} calendar day{daysLeft === 1 ? '' : 's'} remaining from today
          </p>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. Experience Calculator (Multiple Roles)
// -------------------------------------------------------------
export const ExperienceEngine: React.FC = () => {
  const [stints, setStints] = useState([
    { id: '1', company: 'Company A', start: '2021-06-01', end: '2023-12-31' },
    { id: '2', company: 'Company B', start: '2024-01-15', end: '2026-09-08' },
  ]);

  const addStint = () => {
    setStints([
      ...stints,
      { id: Date.now().toString(), company: `Company ${stints.length + 1}`, start: '2020-01-01', end: '2021-05-31' },
    ]);
  };

  const removeStint = (id: string) => {
    if (stints.length <= 1) return;
    setStints(stints.filter((s) => s.id !== id));
  };

  const updateStint = (id: string, field: string, val: string) => {
    setStints(stints.map((s) => (s.id === id ? { ...s, [field]: val } : s)));
  };

  let totalDays = 0;
  stints.forEach((s) => {
    const sDate = new Date(s.start).getTime();
    const eDate = new Date(s.end).getTime();
    if (eDate > sDate) {
      totalDays += (eDate - sDate) / (1000 * 60 * 60 * 24);
    }
  });

  const totalYears = Math.floor(totalDays / 365.25);
  const remainingMonths = Math.floor((totalDays % 365.25) / 30.4375);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <span className="text-xs font-semibold text-zinc-500 uppercase dark:text-zinc-400">
          Employment History
        </span>
        <button
          type="button"
          onClick={addStint}
          className="flex items-center gap-1 rounded-xl bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:text-indigo-400"
        >
          <Plus className="h-3.5 w-3.5" /> Add Job
        </button>
      </div>

      <div className="space-y-2.5">
        {stints.map((stint) => (
          <div key={stint.id} className="grid grid-cols-12 gap-2 items-center rounded-2xl border border-zinc-100 bg-zinc-50/50 p-2 dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="col-span-12 sm:col-span-4">
              <input
                type="text"
                value={stint.company}
                onChange={(e) => updateStint(stint.id, 'company', e.target.value)}
                placeholder="Employer Name"
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div className="col-span-5 sm:col-span-3">
              <input
                type="date"
                value={stint.start}
                onChange={(e) => updateStint(stint.id, 'start', e.target.value)}
                className="w-full rounded-xl border border-zinc-200 bg-white px-2 py-1.5 text-xs text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div className="col-span-5 sm:col-span-3">
              <input
                type="date"
                value={stint.end}
                onChange={(e) => updateStint(stint.id, 'end', e.target.value)}
                className="w-full rounded-xl border border-zinc-200 bg-white px-2 py-1.5 text-xs text-zinc-900 outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div className="col-span-2 text-right">
              <button
                type="button"
                onClick={() => removeStint(stint.id)}
                className="text-zinc-400 hover:text-rose-500"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20">
        <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
          Total Cumulative Work Experience
        </span>
        <div className="mt-1 text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
          {totalYears} Years, {remainingMonths} Months
        </div>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
          Total of {Math.round(totalDays).toLocaleString()} verified working days.
        </p>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. Resume File Name Generator
// -------------------------------------------------------------
export const ResumeFileNameEngine: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('Jane');
  const [lastName, setLastName] = useState<string>('Doe');
  const [role, setRole] = useState<string>('Software Engineer');
  const [year, setYear] = useState<number>(2026);
  const [copied, setCopied] = useState(false);

  const cleanName = `${firstName.trim()}_${lastName.trim()}`.replace(/\s+/g, '_');
  const cleanRole = role.trim().replace(/\s+/g, '_');
  const filename = `${cleanName}_${cleanRole}_Resume_${year}.pdf`;

  const handleCopy = () => {
    navigator.clipboard.writeText(filename);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Target Role Title</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
            ATS-Approved Clean File Name
          </span>
          <div className="mt-1 text-base sm:text-lg font-mono font-bold text-zinc-900 dark:text-zinc-100 select-all">
            {filename}
          </div>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span>{copied ? 'Copied' : 'Copy File Name'}</span>
        </button>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. Cover Letter Helper Engine
// -------------------------------------------------------------
export const CoverLetterHelperEngine: React.FC = () => {
  const [candidateName, setCandidateName] = useState<string>('Alex Johnson');
  const [companyName, setCompanyName] = useState<string>('Acme Corp');
  const [roleTitle, setRoleTitle] = useState<string>('Product Manager');
  const [keySkills, setKeySkills] = useState<string>('data analysis, user research, agile roadmapping');
  const [copied, setCopied] = useState<boolean>(false);

  const letterText = `Dear Hiring Team at ${companyName},\n\nI am writing to express my enthusiastic interest in the ${roleTitle} role at ${companyName}. With a proven track record in ${keySkills}, I have consistently delivered customer-centric solutions that drive measurable business impact.\n\nAt my previous company, I spearheaded cross-functional initiatives that increased user retention by 28% and accelerated sprint velocity. I have long admired ${companyName}'s innovation in the industry, and I am excited by the opportunity to bring my analytical rigor and collaborative mindset to your team.\n\nThank you for your time and consideration. I welcome the opportunity to discuss how my skill set aligns with your upcoming objectives.\n\nSincerely,\n${candidateName}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(letterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Your Name</label>
          <input
            type="text"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-2.5 text-xs font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-2.5 text-xs font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Target Role</label>
          <input
            type="text"
            value={roleTitle}
            onChange={(e) => setRoleTitle(e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-2.5 text-xs font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Key Core Skills (Comma-separated)</label>
          <input
            type="text"
            value={keySkills}
            onChange={(e) => setKeySkills(e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-2.5 text-xs font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase text-zinc-500">Generated Cover Letter Draft</span>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Text'}</span>
          </button>
        </div>
        <textarea
          rows={10}
          value={letterText}
          readOnly
          className="w-full rounded-xl border border-zinc-200 bg-white p-3 text-xs leading-relaxed text-zinc-800 font-sans outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        />
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 5. Job Application Tracker (LocalStorage Backed)
// -------------------------------------------------------------
interface JobApp {
  id: string;
  company: string;
  role: string;
  status: 'Applied' | 'Interview' | 'Offer' | 'Rejected';
  date: string;
}

export const JobApplicationTrackerEngine: React.FC = () => {
  const [apps, setApps] = useState<JobApp[]>([]);
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState<JobApp['status']>('Applied');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('toolnest_job_apps');
      if (stored) {
        setApps(JSON.parse(stored));
      } else {
        // Starter samples
        const sample: JobApp[] = [
          { id: '1', company: 'Google', role: 'Software Engineer', status: 'Interview', date: '2026-09-01' },
          { id: '2', company: 'Stripe', role: 'Frontend Engineer', status: 'Applied', date: '2026-09-04' },
        ];
        setApps(sample);
      }
    } catch (e) {}
  }, []);

  const saveApps = (newApps: JobApp[]) => {
    setApps(newApps);
    try {
      localStorage.setItem('toolnest_job_apps', JSON.stringify(newApps));
    } catch (e) {}
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company.trim() || !role.trim()) return;
    const newEntry: JobApp = {
      id: Date.now().toString(),
      company: company.trim(),
      role: role.trim(),
      status,
      date: new Date().toISOString().split('T')[0],
    };
    saveApps([newEntry, ...apps]);
    setCompany('');
    setRole('');
  };

  const handleDelete = (id: string) => {
    saveApps(apps.filter((a) => a.id !== id));
  };

  const handleStatusChange = (id: string, newStatus: JobApp['status']) => {
    saveApps(apps.map((a) => (a.id === id ? { ...a, status: newStatus } : a)));
  };

  return (
    <div className="space-y-6">
      {/* Quick Add Form */}
      <form onSubmit={handleAdd} className="grid grid-cols-1 sm:grid-cols-4 gap-3 bg-zinc-50/70 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900/40">
        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          required
        />
        <input
          type="text"
          placeholder="Role Title"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as any)}
          className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button
          type="submit"
          className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-700"
        >
          Add Application
        </button>
      </form>

      {/* Applications Roster */}
      <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden dark:border-zinc-800 dark:bg-zinc-900">
        <div className="px-4 py-3 border-b border-zinc-100 flex items-center justify-between text-xs font-bold uppercase text-zinc-500 dark:border-zinc-800">
          <span>Active Tracked Applications ({apps.length})</span>
          <span className="text-[10px] text-zinc-400">Stored locally in browser</span>
        </div>

        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {apps.map((app) => (
            <div key={app.id} className="p-3.5 flex items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-zinc-900 dark:text-zinc-100 text-sm block">
                  {app.company}
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">{app.role} • {app.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={app.status}
                  onChange={(e) => handleStatusChange(app.id, e.target.value as any)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-semibold border ${
                    app.status === 'Offer'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-950/40 dark:border-emerald-800'
                      : app.status === 'Interview'
                      ? 'bg-amber-50 border-amber-200 text-amber-600 dark:bg-amber-950/40 dark:border-amber-800'
                      : app.status === 'Rejected'
                      ? 'bg-rose-50 border-rose-200 text-rose-600 dark:bg-rose-950/40 dark:border-rose-800'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
                <button
                  type="button"
                  onClick={() => handleDelete(app.id)}
                  className="text-zinc-400 hover:text-rose-500 p-1"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 6. Hourly to Annual Salary Calculator
// -------------------------------------------------------------
export const HourlyToAnnualSalaryEngine: React.FC = () => {
  const [hourlyRate, setHourlyRate] = useState<number>(35);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [weeksPerYear, setWeeksPerYear] = useState<number>(52);

  const annual = hourlyRate * hoursPerWeek * weeksPerYear;
  const monthly = annual / 12;
  const biweekly = annual / 26;
  const weekly = annual / weeksPerYear;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Hourly Pay Rate ($/hr)</label>
          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Hours per Week</label>
          <input
            type="number"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Paid Weeks per Year</label>
          <input
            type="number"
            value={weeksPerYear}
            onChange={(e) => setWeeksPerYear(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="rounded-3xl border border-indigo-100 bg-indigo-50/50 p-6 dark:border-indigo-900/40 dark:bg-indigo-950/20">
        <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
          Equivalent Annual Salary
        </span>
        <div className="mt-1 text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50">
          ${annual.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-white p-3 border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
            <span className="text-[11px] text-zinc-400 block">Monthly Pay</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">${monthly.toFixed(2)}</span>
          </div>
          <div className="rounded-xl bg-white p-3 border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
            <span className="text-[11px] text-zinc-400 block">Bi-Weekly Pay</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">${biweekly.toFixed(2)}</span>
          </div>
          <div className="rounded-xl bg-white p-3 border border-zinc-200/80 dark:bg-zinc-800 dark:border-zinc-700">
            <span className="text-[11px] text-zinc-400 block">Weekly Pay</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">${weekly.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 7. Working Days & Internship Duration Engine
// -------------------------------------------------------------
export const WorkingDaysEngine: React.FC = () => {
  const [start, setStart] = useState<string>('2026-09-01');
  const [end, setEnd] = useState<string>('2026-10-31');
  const [holidays, setHolidays] = useState<number>(2);

  // Calculate weekdays
  let cur = new Date(start);
  const target = new Date(end);
  let weekdays = 0;
  let totalDays = 0;

  while (cur <= target) {
    totalDays++;
    const day = cur.getDay();
    if (day !== 0 && day !== 6) {
      weekdays++;
    }
    cur.setDate(cur.getDate() + 1);
  }

  const netWorkingDays = Math.max(0, weekdays - holidays);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Start Date</label>
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">End Date</label>
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Public Holidays</label>
          <input
            type="number"
            value={holidays}
            onChange={(e) => setHolidays(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20">
        <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
          Net Working Days (Excluding Weekends & Holidays)
        </span>
        <div className="mt-1 text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
          {netWorkingDays} Business Days
        </div>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
          Total calendar span: {totalDays} days | Weekend days skipped: {totalDays - weekdays}
        </p>
      </div>
    </div>
  );
};
