'use client';

import React from 'react';
import { ToolDefinition } from '@/types/tool';

// Student Engines
import {
  CgpaCalculatorEngine,
  GpaCalculatorEngine,
  PercentageCalculatorEngine,
  PercentageIncreaseEngine,
  PercentageDecreaseEngine,
  AttendanceCalculatorEngine,
  PomodoroTimerEngine,
  AgeCalculatorEngine,
} from './student/StudentEngines';

import {
  MarksPercentageEngine,
  GradeCalculatorEngine,
  ExamCountdownEngine,
  StudyTimeCalculatorEngine,
  DateDifferenceEngine,
  SemesterGpaAggregatorEngine,
} from './student/StudentEnginesMore';

// Career Engines
import {
  CtcToInHandSalaryEngine,
  SalaryHikeEngine,
  ResumeWordCounterEngine,
  AtsKeywordCheckerEngine,
} from './career/CareerEngines';

import {
  NoticePeriodEngine,
  ExperienceEngine,
  ResumeFileNameEngine,
  CoverLetterHelperEngine,
  JobApplicationTrackerEngine,
  HourlyToAnnualSalaryEngine,
  WorkingDaysEngine,
} from './career/CareerEnginesMore';

// Developer Engines
import {
  JsonFormatterEngine,
  SqlFormatterEngine,
  Base64Engine,
  UrlHtmlEncoderEngine,
} from './developer/DeveloperEngines';

import {
  RegexTesterEngine,
  UuidGeneratorEngine,
  PasswordGeneratorEngine,
  HashGeneratorEngine,
  JwtDecoderEngine,
  ColorConverterEngine,
} from './developer/DeveloperEnginesMore';

// Text Engines
import {
  WordCounterEngine,
  CaseConverterEngine,
  RemoveDuplicateLinesEngine,
  TextSorterEngine,
  SlugGeneratorEngine,
} from './text/TextEngines';

// Math Engines
import {
  BasicCalculatorEngine,
  FractionCalculatorEngine,
  StatisticsEngine,
  PrimeCheckerEngine,
} from './math/MathEngines';

import {
  ScientificCalculatorEngine,
  RatioCalculatorEngine,
  LcmGcdEngine,
  RandomNumberEngine,
} from './math/MathEnginesMore';

// Converter Engines
import {
  UnitConverterEngine,
  TemperatureConverterEngine,
  NumberToWordsEngine,
  RomanNumeralEngine,
} from './converter/ConverterEngines';

// Finance Engines
import {
  BmiCalculatorEngine,
  LoanEmiEngine,
  DiscountCalculatorEngine,
  GstCalculatorEngine,
  TipSplitBillEngine,
  CompoundInterestEngine,
  ProfitMarginEngine,
} from './finance/FinanceEngines';

// PDF & Document Engines
import {
  PdfToDocxEngine,
  PdfMergerEngine,
  PdfToTextEngine,
  ImageToPdfEngine,
  PdfPageRotatorEngine,
  PdfPageSplitterEngine,
} from './pdf/PdfEngines';

import {
  InvoiceGeneratorEngine,
  QrCodeGeneratorEngine,
  BarcodeGeneratorEngine,
  ImageCompressorEngine,
  SvgToPngEngine,
  PasswordStrengthCheckerEngine,
} from './pdf/PdfEnginesMore';

// Universal Engines for 1000+ Tools
import { UniversalPairwiseConverterEngine } from './universal/UniversalPairwiseConverterEngine';
import { UniversalParamEngine } from './universal/UniversalParamEngine';

interface ToolEngineRendererProps {
  tool: ToolDefinition;
}

export const ToolEngineRenderer: React.FC<ToolEngineRendererProps> = ({ tool }) => {
  const { slug, category, componentKey } = tool;

  // 1. Student Category
  if (slug === 'cgpa-calculator') return <CgpaCalculatorEngine />;
  if (slug === 'gpa-calculator') return <GpaCalculatorEngine />;
  if (slug === 'percentage-calculator') return <PercentageCalculatorEngine />;
  if (slug === 'percentage-increase-calculator') return <PercentageIncreaseEngine />;
  if (slug === 'percentage-decrease-calculator') return <PercentageDecreaseEngine />;
  if (slug === 'attendance-calculator') return <AttendanceCalculatorEngine />;
  if (slug === 'marks-percentage-calculator') return <MarksPercentageEngine />;
  if (slug === 'grade-calculator') return <GradeCalculatorEngine />;
  if (slug === 'sgpa-calculator') return <CgpaCalculatorEngine />;
  if (slug === 'exam-countdown') return <ExamCountdownEngine />;
  if (slug === 'study-time-calculator') return <StudyTimeCalculatorEngine />;
  if (slug === 'pomodoro-timer') return <PomodoroTimerEngine />;
  if (slug === 'age-calculator' && category === 'student') return <AgeCalculatorEngine />;
  if (slug === 'date-difference-calculator' && category === 'student') return <DateDifferenceEngine />;
  if (slug === 'semester-gpa-calculator') return <SemesterGpaAggregatorEngine />;

  // 2. Career Category
  if (slug === 'ctc-to-inhand-salary') return <CtcToInHandSalaryEngine />;
  if (slug === 'salary-hike-calculator') return <SalaryHikeEngine />;
  if (slug === 'salary-percentage-calculator') return <PercentageCalculatorEngine />;
  if (slug === 'experience-calculator' || slug === 'work-experience-calculator') return <ExperienceEngine />;
  if (slug === 'notice-period-calculator') return <NoticePeriodEngine />;
  if (slug === 'resume-word-counter') return <ResumeWordCounterEngine />;
  if (slug === 'ats-keyword-checker') return <AtsKeywordCheckerEngine />;
  if (slug === 'resume-file-name-generator') return <ResumeFileNameEngine />;
  if (slug === 'cover-letter-helper') return <CoverLetterHelperEngine />;
  if (slug === 'job-application-tracker') return <JobApplicationTrackerEngine />;
  if (slug === 'interview-countdown') return <ExamCountdownEngine />;
  if (slug === 'internship-duration-calculator' || slug === 'working-days-calculator') return <WorkingDaysEngine />;
  if (slug === 'hourly-to-annual-salary') return <HourlyToAnnualSalaryEngine />;

  // 3. Developer Category
  if (slug === 'json-formatter') return <JsonFormatterEngine defaultMode="format" />;
  if (slug === 'json-validator') return <JsonFormatterEngine defaultMode="validate" />;
  if (slug === 'json-minifier') return <JsonFormatterEngine defaultMode="minify" />;
  if (slug === 'sql-formatter' || slug === 'sql-validator') return <SqlFormatterEngine />;
  if (slug === 'base64-encoder') return <Base64Engine defaultMode="encode" />;
  if (slug === 'base64-decoder') return <Base64Engine defaultMode="decode" />;
  if (slug === 'url-encoder') return <UrlHtmlEncoderEngine type="url" defaultMode="encode" />;
  if (slug === 'url-decoder') return <UrlHtmlEncoderEngine type="url" defaultMode="decode" />;
  if (slug === 'html-encoder') return <UrlHtmlEncoderEngine type="html" defaultMode="encode" />;
  if (slug === 'html-decoder') return <UrlHtmlEncoderEngine type="html" defaultMode="decode" />;
  if (slug === 'regex-tester') return <RegexTesterEngine />;
  if (slug === 'uuid-generator') return <UuidGeneratorEngine />;
  if (slug === 'password-generator') return <PasswordGeneratorEngine />;
  if (slug === 'hash-generator') return <HashGeneratorEngine />;
  if (slug === 'jwt-decoder') return <JwtDecoderEngine />;
  if (slug === 'color-converter') return <ColorConverterEngine />;
  if (slug === 'css-minifier') return <JsonFormatterEngine defaultMode="minify" />;
  if (slug === 'timestamp-converter' || slug === 'unix-timestamp') return <DateDifferenceEngine />;

  // 4. Text Category
  if (
    slug === 'word-counter' ||
    slug === 'character-counter' ||
    slug === 'sentence-counter' ||
    slug === 'paragraph-counter' ||
    slug === 'reading-time' ||
    slug === 'line-counter'
  ) {
    return <WordCounterEngine />;
  }
  if (slug === 'case-converter' || slug === 'uppercase' || slug === 'lowercase') return <CaseConverterEngine />;
  if (slug === 'remove-duplicate-lines' || slug === 'remove-extra-spaces') return <RemoveDuplicateLinesEngine />;
  if (slug === 'text-sorter' || slug === 'text-reverser') return <TextSorterEngine />;
  if (slug === 'slug-generator' || slug === 'lorem-ipsum-generator') return <SlugGeneratorEngine />;

  // 5. Math Category
  if (slug === 'calculator') return <BasicCalculatorEngine />;
  if (slug === 'scientific-calculator' || slug === 'square-root' || slug === 'scientific-notation') {
    return <ScientificCalculatorEngine />;
  }
  if (slug === 'fraction-calculator') return <FractionCalculatorEngine />;
  if (slug === 'ratio-calculator') return <RatioCalculatorEngine />;
  if (
    slug === 'average-calculator' ||
    slug === 'median-calculator' ||
    slug === 'mode-calculator' ||
    slug === 'standard-deviation' ||
    slug === 'probability-calculator'
  ) {
    return <StatisticsEngine defaultMetric={slug} />;
  }
  if (slug === 'lcm' || slug === 'gcd') return <LcmGcdEngine />;
  if (slug === 'prime-checker') return <PrimeCheckerEngine />;
  if (slug === 'random-number') return <RandomNumberEngine />;

  // 6. Date Category
  if (slug === 'age-calculator' && category === 'date') return <AgeCalculatorEngine />;
  if (
    slug === 'date-difference' ||
    slug === 'days-between-dates' ||
    slug === 'add-days' ||
    slug === 'subtract-days' ||
    slug === 'time-duration' ||
    slug === 'week-number'
  ) {
    return <DateDifferenceEngine />;
  }
  if (slug === 'countdown' || slug === 'stopwatch' || slug === 'world-time') return <PomodoroTimerEngine />;

  // 7. Converter Category
  if (slug === 'temperature') return <TemperatureConverterEngine />;
  if (slug === 'number-to-words') return <NumberToWordsEngine />;
  if (slug === 'roman-numeral') return <RomanNumeralEngine />;
  if (['length', 'weight', 'area', 'volume', 'speed', 'time', 'data-storage'].includes(slug)) {
    return <UnitConverterEngine categoryKey={slug} />;
  }

  // 8. Finance Category
  if (slug === 'bmi-calculator') return <BmiCalculatorEngine />;
  if (slug === 'loan-emi-calculator') return <LoanEmiEngine />;
  if (slug === 'discount-calculator') return <DiscountCalculatorEngine />;
  if (slug === 'gst-calculator') return <GstCalculatorEngine />;
  if (slug === 'tip-calculator' || slug === 'split-bill-calculator') return <TipSplitBillEngine />;
  if (slug === 'compound-interest-calculator' || slug === 'simple-interest-calculator') {
    return <CompoundInterestEngine />;
  }
  if (slug === 'profit-margin-calculator' || slug === 'break-even-calculator') {
    return <ProfitMarginEngine />;
  }

  // 9. PDF & Document Category
  if (slug === 'pdf-to-docx') return <PdfToDocxEngine />;
  if (slug === 'pdf-merger') return <PdfMergerEngine />;
  if (slug === 'pdf-to-text') return <PdfToTextEngine />;
  if (slug === 'image-to-pdf') return <ImageToPdfEngine />;
  if (slug === 'pdf-page-rotator') return <PdfPageRotatorEngine />;
  if (slug === 'pdf-page-splitter') return <PdfPageSplitterEngine />;
  if (slug === 'invoice-generator') return <InvoiceGeneratorEngine />;
  if (slug === 'qr-code-generator') return <QrCodeGeneratorEngine />;
  if (slug === 'barcode-generator') return <BarcodeGeneratorEngine />;
  if (slug === 'image-compressor') return <ImageCompressorEngine />;
  if (slug === 'svg-to-png') return <SvgToPngEngine />;
  if (slug === 'password-strength-checker') return <PasswordStrengthCheckerEngine />;

  // 10. Universal Parameterized Engines for 1,000+ Tools
  if (componentKey === 'universal-converter' || (category === 'converter' && slug.includes('-to-'))) {
    return <UniversalPairwiseConverterEngine tool={tool} />;
  }
  if (componentKey?.startsWith('universal-')) {
    return <UniversalParamEngine tool={tool} />;
  }

  // Fallback to Universal Engine
  return <UniversalParamEngine tool={tool} />;
};
