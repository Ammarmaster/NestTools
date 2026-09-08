import { ToolDefinition } from '@/types/tool';

export const DATE_TOOLS: ToolDefinition[] = [
  {
    id: 'date-age-calculator',
    name: 'Age Calculator',
    slug: 'age-calculator',
    category: 'date',
    description: 'Calculate your exact age in years, months, weeks, days, hours, and minutes from your date of birth, with countdown to your next birthday.',
    icon: 'Calendar',
    keywords: ['age calculator', 'calculate my age', 'exact age in days', 'chronological age calculator'],
    seoTitle: 'Age Calculator – Calculate Exact Age & Next Birthday | ToolNest',
    seoDescription: 'Find your exact age down to the day and minute. Free online age calculator with next birthday countdown and total life stats.',
    componentKey: 'age-calculator',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The Age Calculator accurately calculates your exact chronological age between your date of birth and today (or any target date), properly accounting for leap years and month length variations.',
      howToUse: [
        'Select your date of birth.',
        'Optionally select a target date (defaults to today).',
        'View your precise age in years, months, days, along with total days lived and next birthday countdown.'
      ],
      tips: ['Great for filling out government admission forms, civil service exams, and passport applications requiring exact age verification.'],
      faqs: [
        {
          question: 'Does this calculator handle leap years?',
          answer: 'Yes, leap years (February 29) are fully factored into day calculations and next birthday calculations.'
        }
      ]
    },
    relatedToolIds: ['date-difference', 'days-between-dates', 'countdown']
  },
  {
    id: 'date-difference',
    name: 'Date Difference Calculator',
    slug: 'date-difference',
    category: 'date',
    description: 'Calculate the exact number of days, weeks, months, and years between any two calendar dates.',
    icon: 'CalendarRange',
    keywords: ['date difference', 'days between dates', 'calculate date gap', 'duration between dates'],
    seoTitle: 'Date Difference Calculator – Days & Months Between Dates | ToolNest',
    seoDescription: 'Calculate the exact time difference between two dates in days, weeks, months, and years. Fast, accurate calendar difference tool.',
    componentKey: 'date-difference-calculator',
    popular: true,
    content: {
      whatIs: 'The Date Difference Calculator measures the duration elapsed between a start date and an end date, breaking the interval down into calendar units.',
      howToUse: [
        'Select the start date.',
        'Select the end date.',
        'Toggle whether to include the end day.',
        'View the total days, months, years, and business day estimates.'
      ],
      tips: ['Useful for calculating project deadlines, age of legal documents, and billing cycles.']
    },
    relatedToolIds: ['days-between-dates', 'add-days', 'subtract-days']
  },
  {
    id: 'days-between-dates',
    name: 'Days Between Dates',
    slug: 'days-between-dates',
    category: 'date',
    description: 'Quickly count the exact total number of days between two dates with optional inclusive day count.',
    icon: 'CalendarCheck2',
    keywords: ['days between dates', 'how many days between', 'count days between two dates', 'day counter'],
    seoTitle: 'Days Between Dates Calculator – Exact Day Count Online | ToolNest',
    seoDescription: 'Count the exact number of days between any two dates. Clean, lightning fast, with day of the week display and inclusive/exclusive toggle.',
    componentKey: 'days-between-dates',
    popular: true,
    content: {
      whatIs: 'The Days Between Dates tool calculates the pure day count between two points in time without converting into months or years, ideal for loan tenures and warranties.',
      howToUse: [
        'Pick the start date and end date.',
        'Choose whether to include the final date in the count.',
        'Get the exact integer day count and total weeks.'
      ]
    },
    relatedToolIds: ['date-difference', 'add-days', 'working-days-calculator']
  },
  {
    id: 'add-days',
    name: 'Add Days to Date',
    slug: 'add-days',
    category: 'date',
    description: 'Add a number of calendar days or business days to any starting date to determine the exact future target date.',
    icon: 'CalendarPlus',
    keywords: ['add days to date', 'date plus days', 'future date calculator', 'add business days to date'],
    seoTitle: 'Add Days to Date Calculator – Find Future Dates Online | ToolNest',
    seoDescription: 'Add days, weeks, or months to any date. Supports adding only business days (skipping weekends) to calculate warranty or delivery deadlines.',
    componentKey: 'add-days',
    popular: true,
    content: {
      whatIs: 'Calculates the future calendar date resulting from adding a specified number of days, weeks, or months to a reference start date.',
      howToUse: [
        'Select the start date.',
        'Enter the number of days, weeks, or months to add.',
        'Toggle "Business days only (skip weekends)" if calculating delivery or banking SLAs.',
        'View the resulting future date and day of the week.'
      ]
    },
    relatedToolIds: ['subtract-days', 'days-between-dates', 'date-difference']
  },
  {
    id: 'subtract-days',
    name: 'Subtract Days from Date',
    slug: 'subtract-days',
    category: 'date',
    description: 'Subtract days, weeks, or months from any date to find the historical past date and day of the week.',
    icon: 'CalendarMinus',
    keywords: ['subtract days from date', 'date minus days', 'past date calculator', 'subtract days online'],
    seoTitle: 'Subtract Days from Date Calculator – Find Past Dates | ToolNest',
    seoDescription: 'Subtract days, weeks, or months from any date. Quickly determine past dates for billing lookbacks, statutory periods, and record verification.',
    componentKey: 'subtract-days',
    content: {
      whatIs: 'Computes past calendar dates by subtracting an interval of days or months from a chosen date.',
      howToUse: [
        'Select starting date.',
        'Enter days to subtract.',
        'Receive the computed past date and day of the week.'
      ]
    },
    relatedToolIds: ['add-days', 'days-between-dates', 'date-difference']
  },
  {
    id: 'time-duration',
    name: 'Time Duration Calculator',
    slug: 'time-duration',
    category: 'date',
    description: 'Calculate elapsed duration between two clock times (hours, minutes, seconds) with overnight 24-hour wrap-around support.',
    icon: 'Clock',
    keywords: ['time duration calculator', 'calculate elapsed time', 'hours between two times', 'time difference calculator'],
    seoTitle: 'Time Duration Calculator – Hours & Minutes Between Times | ToolNest',
    seoDescription: 'Calculate the exact hours, minutes, and seconds between two times. Handles overnight shifts spanning past midnight effortlessly.',
    componentKey: 'time-duration',
    popular: true,
    content: {
      whatIs: 'The Time Duration Calculator determines the elapsed hours, minutes, and seconds between a start time and an end time, handling shifts that cross midnight.',
      howToUse: [
        'Enter Start Time (e.g. 09:30 AM or 22:00).',
        'Enter End Time (e.g. 05:45 PM or 06:30 next day).',
        'Get total hours, minutes, seconds, and decimal hours (e.g. 8.25 hrs).'
      ]
    },
    relatedToolIds: ['countdown', 'stopwatch', 'working-days-calculator']
  },
  {
    id: 'countdown',
    name: 'Countdown Timer',
    slug: 'countdown',
    category: 'date',
    description: 'Create real-time countdown timers for custom events, holidays, product launches, and birthdays with full-screen mode and audio alert.',
    icon: 'Timer',
    keywords: ['countdown timer', 'event countdown', 'online countdown clock', 'holiday countdown'],
    seoTitle: 'Online Countdown Timer – Real-Time Event Countdown | ToolNest',
    seoDescription: 'Create a live countdown timer to any future date and time. Real-time days, hours, minutes, seconds ticker with celebratory chime.',
    componentKey: 'countdown',
    popular: true,
    content: {
      whatIs: 'The Countdown Timer provides an interactive, second-by-second countdown to any scheduled milestone, conference, or personal event.',
      howToUse: [
        'Enter an event name (e.g. "Product Launch" or "New Year").',
        'Select target date and time.',
        'Watch the live ticker update and celebrate when the clock strikes zero!'
      ]
    },
    relatedToolIds: ['stopwatch', 'exam-countdown', 'interview-countdown']
  },
  {
    id: 'stopwatch',
    name: 'Stopwatch',
    slug: 'stopwatch',
    category: 'date',
    description: 'High-precision online stopwatch with millisecond accuracy, lap time split tracking, and CSV lap export.',
    icon: 'Stopwatch',
    keywords: ['online stopwatch', 'precision stopwatch', 'lap timer', 'stopwatch with laps', 'millisecond stopwatch'],
    seoTitle: 'Online Stopwatch – High-Precision Lap Timer | ToolNest',
    seoDescription: 'Free online stopwatch with millisecond precision, split lap times, pause/resume, and keyboard shortcuts (Space to start/stop, L for lap).',
    componentKey: 'stopwatch',
    popular: true,
    content: {
      whatIs: 'A browser-based millisecond stopwatch for timing sports, productivity sprints, presentations, and scientific trials.',
      howToUse: [
        'Click "Start" (or press Spacebar) to begin timing.',
        'Click "Lap" (or press L) to record individual splits.',
        'Review the lap leaderboard highlighting your fastest and slowest laps.'
      ]
    },
    relatedToolIds: ['countdown', 'pomodoro-timer', 'time-duration']
  },
  {
    id: 'world-time',
    name: 'World Time Converter',
    slug: 'world-time',
    category: 'date',
    description: 'Compare current times across global timezones (UTC, EST, PST, GMT, CET, IST, JST, AEST) with interactive time slider for meeting scheduling.',
    icon: 'Globe',
    keywords: ['world time converter', 'timezone converter', 'compare time zones', 'meeting planner timezone', 'gmt to ist'],
    seoTitle: 'World Time Converter – Global Time Zone Comparison | ToolNest',
    seoDescription: 'Compare times across major world cities and timezones. Interactive time slider helps you find the perfect meeting time across continents.',
    componentKey: 'world-time',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The World Time Converter displays synchronized clocks across multiple international time zones, taking into account Daylight Saving Time (DST) offsets.',
      howToUse: [
        'View live digital clocks for London, New York, San Francisco, Tokyo, New Delhi, Sydney, and UTC.',
        'Drag the meeting planner time slider to see what time 2:00 PM in New York corresponds to in Tokyo and London.'
      ]
    },
    relatedToolIds: ['timestamp-converter', 'unix-timestamp', 'time-duration']
  },
  {
    id: 'week-number',
    name: 'Week Number Calculator',
    slug: 'week-number',
    category: 'date',
    description: 'Find the current ISO 8601 week number of the year, total weeks in any given year, and the start and end dates of each calendar week.',
    icon: 'CalendarCheck',
    keywords: ['week number calculator', 'current week number', 'what week is it', 'iso week number', 'week of the year'],
    seoTitle: 'Week Number Calculator – ISO 8601 Calendar Week | ToolNest',
    seoDescription: 'Find what week of the year it is today according to ISO 8601 standard. View start and end dates for any week number in any calendar year.',
    componentKey: 'week-number',
    content: {
      whatIs: 'The international standard ISO 8601 defines week 1 of a year as the week containing the first Thursday of that year (the week with January 4th). Weeks begin on Monday.',
      howToUse: [
        'Select any date on the calendar (or view today by default).',
        'Instantly see the ISO week number (1 to 53), total weeks in the year, and remaining weeks.'
      ]
    },
    relatedToolIds: ['days-between-dates', 'date-difference', 'add-days']
  }
];
