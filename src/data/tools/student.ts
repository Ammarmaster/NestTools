import { ToolDefinition } from '@/types/tool';

export const STUDENT_TOOLS: ToolDefinition[] = [
  {
    id: 'cgpa-calculator',
    name: 'CGPA Calculator',
    slug: 'cgpa-calculator',
    category: 'student',
    description: 'Calculate your Cumulative Grade Point Average (CGPA) across all semesters with weighted credits and instant percentage conversion.',
    icon: 'GraduationCap',
    keywords: ['cgpa calculator', 'calculate cgpa', 'cgpa to percentage', 'cumulative gpa', 'college cgpa calculator'],
    seoTitle: 'CGPA Calculator – Calculate Your CGPA Online Free | ToolNest',
    seoDescription: 'Calculate your Cumulative Grade Point Average (CGPA) quickly and accurately. Add semesters, courses, and credits with instant percentage conversion.',
    componentKey: 'cgpa-calculator',
    popular: true,
    featured: true,
    content: {
      whatIs: 'A Cumulative Grade Point Average (CGPA) represents the overall academic performance of a student across multiple semesters or terms. Unlike GPA which typically measures a single semester, CGPA aggregates all credit-weighted grade points earned throughout a degree program.',
      howToUse: [
        'Select your grading scale standard (10.0 scale or 4.0 scale).',
        'Enter each semester or subject with its corresponding credit hours and obtained Grade Point.',
        'Click "Add Row" to include more semesters or subjects as required.',
        'View your cumulative CGPA, total credits earned, and equivalent percentage instantly.'
      ],
      formula: 'CGPA = \\frac{\\sum (\\text{Grade Point}_i \\times \\text{Credit Hours}_i)}{\\sum \\text{Credit Hours}_i}',
      example: 'If you have Semester 1 (20 credits, 8.5 GPA) and Semester 2 (22 credits, 9.0 GPA), Total Grade Points = (20×8.5) + (22×9.0) = 170 + 198 = 368. Total Credits = 42. CGPA = 368 / 42 = 8.76.',
      tips: [
        'Always double-check credit weighting from your academic syllabus.',
        'Courses with higher credit hours exert a stronger influence on your final CGPA.',
        'To convert a 10-point CGPA to percentage, standard universities commonly multiply by 9.5 (or direct scale % = CGPA × 10).'
      ],
      faqs: [
        {
          question: 'What is the difference between GPA and CGPA?',
          answer: 'GPA (Grade Point Average) measures your academic performance for a single academic term or semester, whereas CGPA (Cumulative Grade Point Average) evaluates your cumulative performance across all completed semesters.'
        },
        {
          question: 'How do I convert my CGPA to a percentage?',
          answer: 'For a 10-point scale (like CBSE and Indian universities), the standard formula is Percentage = CGPA × 9.5. For 4.0 scales, Percentage is often calculated as (CGPA / 4.0) × 100.'
        },
        {
          question: 'Do failed courses affect my CGPA?',
          answer: 'Yes, until a course is retaken and cleared with an updated grade, a 0 grade point with credit weight is factored into your cumulative average.'
        }
      ]
    },
    relatedToolIds: ['gpa-calculator', 'sgpa-calculator', 'percentage-calculator', 'grade-calculator', 'semester-gpa-calculator']
  },
  {
    id: 'gpa-calculator',
    name: 'GPA Calculator',
    slug: 'gpa-calculator',
    category: 'student',
    description: 'Calculate semester Grade Point Average (GPA) using letter grades (A+, A, B, etc.) or 4.0 scale with custom course credits.',
    icon: 'Award',
    keywords: ['gpa calculator', 'semester gpa', 'college gpa', 'high school gpa', 'letter grade calculator'],
    seoTitle: 'GPA Calculator – Free Semester & College GPA Tool | ToolNest',
    seoDescription: 'Calculate your semester GPA with letter grades and credit hours. Easy, fast, accurate 4.0 and 5.0 scale GPA calculation for college and school.',
    componentKey: 'gpa-calculator',
    popular: true,
    content: {
      whatIs: 'A Grade Point Average (GPA) is a standard numeric index summarizing academic achievement in a specific term or semester. Each letter grade corresponds to a numeric point value which is multiplied by the course credit hours.',
      howToUse: [
        'Add each course taken in the term with course name or code.',
        'Select the letter grade earned (A+, A, A-, B+, etc.).',
        'Specify the credit hours assigned to each course.',
        'Review the final calculated GPA and breakdown of total honor points.'
      ],
      formula: '\\text{GPA} = \\frac{\\sum (\\text{Grade Value} \\times \\text{Credits})}{\\text{Total Credits}}',
      example: 'Math (4 credits, Grade A = 4.0) gives 16 points. Physics (3 credits, Grade B = 3.0) gives 9 points. Total points = 25 for 7 credits. GPA = 25 / 7 = 3.57.',
      tips: [
        'Check whether your institution awards A+ as 4.0 or 4.3.',
        'Pass/Fail courses generally do not impact your numerical GPA calculation.'
      ],
      faqs: [
        {
          question: 'What is a 4.0 GPA scale?',
          answer: 'In the 4.0 scale common in the US and international schools, an A is 4.0, B is 3.0, C is 2.0, D is 1.0, and F is 0.0.'
        },
        {
          question: 'Does withdrawing from a class hurt GPA?',
          answer: 'A "W" (Withdrawal) grade typically does not impact your GPA, though it may appear on your academic transcript.'
        }
      ]
    },
    relatedToolIds: ['cgpa-calculator', 'sgpa-calculator', 'grade-calculator', 'marks-percentage-calculator']
  },
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    slug: 'percentage-calculator',
    category: 'student',
    description: 'Perform all standard percentage calculations: what is X% of Y, X is what percent of Y, and percentage difference.',
    icon: 'Percent',
    keywords: ['percentage calculator', 'calculate percentage', 'percent of number', 'what percent is'],
    seoTitle: 'Percentage Calculator – Fast Online % Calculation | ToolNest',
    seoDescription: 'Calculate percentages easily with our free online percentage calculator. Find X% of Y, percentage share, and percentage differences instantly.',
    componentKey: 'percentage-calculator',
    popular: true,
    content: {
      whatIs: 'A percentage represents a fraction of 100. It is one of the most widely used mathematical concepts for scoring, business metrics, interest rates, and discounts.',
      howToUse: [
        'Choose your calculation mode (X% of Y, What % is X of Y, or % Difference).',
        'Input your numerical values into the corresponding fields.',
        'Instant results are computed live with step-by-step mathematical breakdown.'
      ],
      formula: 'P = \\frac{X}{100} \\times Y \\quad | \\quad \\% = \\left(\\frac{X}{Y}\\right) \\times 100',
      example: 'What is 15% of 240? Result = (15 / 100) * 240 = 36.',
      tips: [
        'To quickly calculate 10% of any number, move the decimal point one place to the left.',
        'Percentages are reversible: 8% of 50 is the exact same as 50% of 8 (which is 4).'
      ],
      faqs: [
        {
          question: 'How do you calculate a percentage of a number?',
          answer: 'Divide the percentage by 100 and multiply by the total number. For example, 25% of 80 is (25/100) × 80 = 20.'
        }
      ]
    },
    relatedToolIds: ['percentage-increase-calculator', 'percentage-decrease-calculator', 'marks-percentage-calculator', 'discount-calculator']
  },
  {
    id: 'percentage-increase-calculator',
    name: 'Percentage Increase Calculator',
    slug: 'percentage-increase-calculator',
    category: 'student',
    description: 'Calculate the percentage growth or increase from an initial value to a new final value with absolute difference.',
    icon: 'TrendingUp',
    keywords: ['percentage increase', 'percent growth', 'growth rate calculator', 'increase calculator'],
    seoTitle: 'Percentage Increase Calculator – Calculate Growth Online | ToolNest',
    seoDescription: 'Compute percentage increase and growth rate between two values. Free, accurate, and includes absolute change breakdown.',
    componentKey: 'percentage-increase-calculator',
    content: {
      whatIs: 'Percentage increase measures the proportional growth of a quantity from its original value to a higher final value, expressed as a fraction of 100.',
      howToUse: [
        'Enter the initial original value.',
        'Enter the final increased value.',
        'Get the percentage increase, absolute difference, and multiplier.'
      ],
      formula: '\\text{Percentage Increase} = \\left(\\frac{\\text{New Value} - \\text{Old Value}}{\\text{Old Value}}\\right) \\times 100',
      example: 'If an investment goes from $120 to $150, the increase is ((150 - 120) / 120) * 100 = 25%.',
      tips: ['Ensure the initial value is non-zero, as dividing by zero is undefined.'],
      faqs: [
        {
          question: 'Can percentage increase exceed 100%?',
          answer: 'Yes! When a value doubles from 50 to 100, that is a 100% increase. If it triples from 50 to 150, it is a 200% increase.'
        }
      ]
    },
    relatedToolIds: ['percentage-calculator', 'percentage-decrease-calculator', 'salary-hike-calculator']
  },
  {
    id: 'percentage-decrease-calculator',
    name: 'Percentage Decrease Calculator',
    slug: 'percentage-decrease-calculator',
    category: 'student',
    description: 'Determine the percentage reduction, discount, or drop from an initial value to a lower final value.',
    icon: 'TrendingDown',
    keywords: ['percentage decrease', 'percent drop', 'reduction calculator', 'percentage discount'],
    seoTitle: 'Percentage Decrease Calculator – Calculate Drop & Reduction | ToolNest',
    seoDescription: 'Quickly find the percentage decrease between two numbers. Free tool with step-by-step subtraction and percentage reduction formula.',
    componentKey: 'percentage-decrease-calculator',
    content: {
      whatIs: 'Percentage decrease measures how much a value has dropped relative to its starting point, expressed as a percentage.',
      howToUse: [
        'Enter the original starting value.',
        'Enter the decreased final value.',
        'Receive the percentage decrease and total value reduction.'
      ],
      formula: '\\text{Percentage Decrease} = \\left(\\frac{\\text{Old Value} - \\text{New Value}}{\\text{Old Value}}\\right) \\times 100',
      example: 'A product discounted from $80 to $60 has decreased by ((80 - 60) / 80) * 100 = 25%.',
      tips: ['Percentage decrease cannot exceed 100% for non-negative physical quantities.'],
      faqs: [
        {
          question: 'What is the difference between percentage decrease and difference?',
          answer: 'Percentage decrease specifies direction (loss relative to the old starting number), whereas difference can simply be absolute disparity.'
        }
      ]
    },
    relatedToolIds: ['percentage-calculator', 'percentage-increase-calculator', 'discount-calculator']
  },
  {
    id: 'attendance-calculator',
    name: 'Attendance Calculator',
    slug: 'attendance-calculator',
    category: 'student',
    description: 'Track your college or school attendance percentage and find out how many classes you can bunk or need to attend to maintain target attendance.',
    icon: 'CheckSquare',
    keywords: ['attendance calculator', 'college attendance', 'bunk calculator', '75 percent attendance', 'minimum attendance'],
    seoTitle: 'Attendance Calculator – College & School Bunk Calculator | ToolNest',
    seoDescription: 'Calculate your attendance percentage. Check how many classes you can safely skip or need to attend to maintain 75% or 80% criteria.',
    componentKey: 'attendance-calculator',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The Attendance Calculator helps students track their current attendance ratio and mathematically projects whether they can safely miss upcoming lectures or must attend consecutive classes to satisfy institutional attendance mandates (such as 75% or 85%).',
      howToUse: [
        'Enter the total number of classes held to date.',
        'Enter the number of classes you have attended.',
        'Set your institutional minimum required attendance threshold (e.g., 75%).',
        'Review your status: either how many more consecutive classes you need to attend, or how many you can safely skip.'
      ],
      formula: '\\text{Attendance } \\% = \\left(\\frac{\\text{Attended Classes}}{\\text{Total Classes}}\\right) \\times 100',
      example: 'You attended 38 out of 50 classes (76%). With a 75% requirement, you can miss 0 classes because missing 1 class (38/51) drops you to 74.5%.',
      tips: [
        'Always keep a safety buffer above the required minimum for medical or unforeseen emergencies.',
        'Duty leaves and certified sick leaves should be credited according to your college dean guidelines.'
      ],
      faqs: [
        {
          question: 'How do I recover from 60% attendance to 75%?',
          answer: 'If you have attended 30 out of 50 classes (60%), to reach 75%, let x be classes needed: (30 + x) / (50 + x) = 0.75. Solving gives x = 30 consecutive classes.'
        }
      ]
    },
    relatedToolIds: ['marks-percentage-calculator', 'grade-calculator', 'study-time-calculator']
  },
  {
    id: 'marks-percentage-calculator',
    name: 'Marks Percentage Calculator',
    slug: 'marks-percentage-calculator',
    category: 'student',
    description: 'Calculate your overall aggregate marks percentage and grade division across all academic subjects.',
    icon: 'FileSpreadsheet',
    keywords: ['marks percentage', 'calculate marks percent', 'exam marks calculator', 'aggregate marks'],
    seoTitle: 'Marks Percentage Calculator – Calculate Total Exam Marks % | ToolNest',
    seoDescription: 'Calculate your overall marks percentage from exam subjects with maximum marks and obtained score. Includes grade division breakdown.',
    componentKey: 'marks-percentage-calculator',
    content: {
      whatIs: 'Marks percentage calculator standardizes exam scores across different subjects into an aggregate percentage out of 100, providing academic classification (First Class with Distinction, First Class, Second Class).',
      howToUse: [
        'Input subject names along with marks obtained and maximum marks per subject.',
        'Add as many subjects as needed.',
        'View total marks obtained, total maximum marks, overall percentage, and grade division.'
      ],
      formula: '\\text{Percentage} = \\left(\\frac{\\sum \\text{Marks Obtained}}{\\sum \\text{Maximum Marks}}\\right) \\times 100',
      example: 'Scoring 450 out of 500 across 5 subjects gives (450 / 500) * 100 = 90.0% (Distinction).',
      tips: ['If some subjects have practical and theory portions, combine them or add them as distinct subject rows.'],
      faqs: [
        {
          question: 'What percentage is considered First Class?',
          answer: 'In most educational systems, 60% and above is First Class, 75% and above is Distinction, and 50% to 59% is Second Class.'
        }
      ]
    },
    relatedToolIds: ['grade-calculator', 'percentage-calculator', 'cgpa-calculator']
  },
  {
    id: 'grade-calculator',
    name: 'Grade Calculator',
    slug: 'grade-calculator',
    category: 'student',
    description: 'Calculate your current course grade and determine the exact score needed on your final exam to achieve your desired target grade.',
    icon: 'CheckCircle2',
    keywords: ['grade calculator', 'final grade calculator', 'weighted grade calculator', 'score needed on final'],
    seoTitle: 'Grade Calculator – Final Exam Score & Weighted Grade | ToolNest',
    seoDescription: 'Calculate your weighted class grade and determine the exact score you need on your final exam to pass or secure an A.',
    componentKey: 'grade-calculator',
    popular: true,
    content: {
      whatIs: 'A weighted grade calculator factors in different syllabus weightings (e.g., Homework 20%, Midterm 30%, Final 50%) to compute your running average and forecast the required final exam score.',
      howToUse: [
        'Enter each assessment component (e.g., Quizzes, Midterm, Assignments).',
        'Enter your score (%) and its corresponding weight (%).',
        'Specify your desired overall target grade.',
        'View your current weighted grade and the required score on remaining coursework.'
      ],
      formula: '\\text{Target Final Score} = \\frac{\\text{Target Grade} - (\\text{Current Grade} \\times \\text{Current Weight})}{\\text{Final Weight}}',
      example: 'If your current weighted score is 82% over 70% of the syllabus, and you want an 85% overall, you need (85 - (82 * 0.70)) / 0.30 = 92% on the 30% final exam.',
      tips: ['Ensure the total sum of component weights does not exceed 100%.'],
      faqs: [
        {
          question: 'What if the required final score is over 100%?',
          answer: 'If the calculation returns a number greater than 100%, extra credit will be required to mathematically reach your target grade.'
        }
      ]
    },
    relatedToolIds: ['gpa-calculator', 'cgpa-calculator', 'attendance-calculator']
  },
  {
    id: 'sgpa-calculator',
    name: 'SGPA Calculator',
    slug: 'sgpa-calculator',
    category: 'student',
    description: 'Calculate Semester Grade Point Average (SGPA) for engineering, sciences, and university degree programs.',
    icon: 'Layers',
    keywords: ['sgpa calculator', 'semester grade point average', 'engineering sgpa', 'sgpa to cgpa'],
    seoTitle: 'SGPA Calculator – Semester Grade Point Average Tool | ToolNest',
    seoDescription: 'Calculate your SGPA online. Input subject credits and grades to compute your semester grade point average instantly.',
    componentKey: 'sgpa-calculator',
    content: {
      whatIs: 'SGPA (Semester Grade Point Average) evaluates academic accomplishment in an individual semester. It serves as the primary component that feeds into your cumulative CGPA.',
      howToUse: [
        'Add your semester subjects with credit units.',
        'Select or enter grade points scored (0-10 or 0-4).',
        'View total credit points earned and your official semester SGPA.'
      ],
      formula: '\\text{SGPA} = \\frac{\\sum (C_i \\times G_i)}{\\sum C_i}',
      example: '3 credits with grade 9 (27 points) and 4 credits with grade 8 (32 points) = 59 points / 7 credits = 8.43 SGPA.',
      tips: ['High credit lab courses and major projects significantly swing your semester SGPA.'],
      faqs: [
        {
          question: 'How do you convert SGPA to CGPA?',
          answer: 'CGPA is the credit-weighted mean of all your semester SGPAs: sum of (SGPA × Semester Credits) / Total Degree Credits.'
        }
      ]
    },
    relatedToolIds: ['cgpa-calculator', 'semester-gpa-calculator', 'gpa-calculator']
  },
  {
    id: 'exam-countdown',
    name: 'Exam Countdown',
    slug: 'exam-countdown',
    category: 'student',
    description: 'Live countdown timer and study milestone organizer for your upcoming exams, tests, and finals.',
    icon: 'Clock',
    keywords: ['exam countdown', 'study countdown timer', 'finals countdown', 'exam timer'],
    seoTitle: 'Exam Countdown Timer – Real-Time Finals Countdown | ToolNest',
    seoDescription: 'Track time remaining until your exams with a live countdown timer showing days, hours, minutes, and seconds. Stay focused and organized.',
    componentKey: 'exam-countdown',
    content: {
      whatIs: 'The Exam Countdown provides an accurate real-time visual timer to your test deadlines, enabling effective revision scheduling and reducing procrastination.',
      howToUse: [
        'Enter your exam name or course subject.',
        'Select the examination date and start time.',
        'Watch the live countdown and see study preparation milestones.'
      ],
      tips: ['Bookmark this tool or leave it open during revision sessions for continuous time awareness.'],
      faqs: [
        {
          question: 'Does the timer work if I close the tab?',
          answer: 'Yes, your exam target date is saved in your browser so when you return, the live countdown is instantly synchronized.'
        }
      ]
    },
    relatedToolIds: ['study-time-calculator', 'pomodoro-timer', 'interview-countdown']
  },
  {
    id: 'study-time-calculator',
    name: 'Study Time Calculator',
    slug: 'study-time-calculator',
    category: 'student',
    description: 'Calculate daily study hours required to finish your syllabus or textbook chapters before exam day.',
    icon: 'BookOpen',
    keywords: ['study time calculator', 'study plan calculator', 'revision hours', 'daily study time'],
    seoTitle: 'Study Time Calculator – Daily Revision Hours Planner | ToolNest',
    seoDescription: 'Plan your syllabus coverage. Input total chapters, revision days, and study speed to calculate ideal daily study hours.',
    componentKey: 'study-time-calculator',
    content: {
      whatIs: 'The Study Time Calculator decomposes large textbooks, revision topics, or lecture slides into realistic daily time commitments leading up to test day.',
      howToUse: [
        'Enter the total number of chapters or topics to study.',
        'Enter the average hours required per chapter.',
        'Select your exam date to calculate available preparation days.',
        'Get the exact recommended daily study hours and revision buffer days.'
      ],
      formula: '\\text{Daily Hours} = \\frac{\\text{Total Topics} \\times \\text{Hours per Topic}}{\\text{Days Available} - \\text{Buffer Days}}',
      example: '20 chapters at 3 hours each = 60 hours total. With 15 days available and 3 buffer days for mock tests, you need 60 / 12 = 5 hours of study per day.',
      tips: ['Always schedule at least 20% of your total study time for active recall and past paper revision.'],
      faqs: [
        {
          question: 'How many hours should a college student study per day?',
          answer: 'General academic guidance suggests 2 to 3 hours of independent study for every 1 credit hour of class time per week.'
        }
      ]
    },
    relatedToolIds: ['pomodoro-timer', 'exam-countdown', 'attendance-calculator']
  },
  {
    id: 'pomodoro-timer',
    name: 'Pomodoro Timer',
    slug: 'pomodoro-timer',
    category: 'student',
    description: 'Boost focus and productivity with an interactive Pomodoro timer featuring custom focus intervals, short breaks, and long breaks.',
    icon: 'Timer',
    keywords: ['pomodoro timer', 'study timer', 'focus timer', 'productivity timer', 'pomodoro technique'],
    seoTitle: 'Pomodoro Timer – Online Study & Focus Timer | ToolNest',
    seoDescription: 'Free online Pomodoro timer with customizable 25-minute study intervals, 5-minute short breaks, audio notifications, and task tracker.',
    componentKey: 'pomodoro-timer',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The Pomodoro Technique, invented by Francesco Cirillo, utilizes focused 25-minute intervals of uninterrupted work followed by 5-minute restorative breaks to maximize cognitive retention and eliminate mental fatigue.',
      howToUse: [
        'Pick a specific study task or subject to focus on.',
        'Start the 25-minute focus timer and work without any distractions.',
        'Take a 5-minute break when the alarm chimes.',
        'After completing 4 consecutive Pomodoros, enjoy an extended 15-30 minute break.'
      ],
      tips: [
        'Put your phone on Do Not Disturb while the timer is running.',
        'During the 5-minute break, stand up, stretch, and look away from all screens.'
      ],
      faqs: [
        {
          question: 'Why is it called Pomodoro?',
          answer: 'The technique was named after the Italian word for "tomato" because the creator used a tomato-shaped kitchen timer as a university student.'
        }
      ]
    },
    relatedToolIds: ['study-time-calculator', 'exam-countdown', 'stopwatch']
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    slug: 'age-calculator',
    category: 'student',
    description: 'Calculate your exact age in years, months, weeks, days, hours, and minutes from your date of birth, with countdown to your next birthday.',
    icon: 'Calendar',
    keywords: ['age calculator', 'calculate my age', 'exact age in days', 'chronological age calculator'],
    seoTitle: 'Age Calculator – Calculate Exact Age & Next Birthday | ToolNest',
    seoDescription: 'Find your exact age down to the day and minute. Free online age calculator with next birthday countdown and total life stats.',
    componentKey: 'age-calculator',
    popular: true,
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
    relatedToolIds: ['date-difference-calculator', 'days-between-dates', 'countdown']
  },
  {
    id: 'date-difference-calculator',
    name: 'Date Difference Calculator',
    slug: 'date-difference-calculator',
    category: 'student',
    description: 'Calculate the exact number of days, weeks, months, and years between any two calendar dates.',
    icon: 'CalendarRange',
    keywords: ['date difference', 'days between dates', 'calculate date gap', 'duration between dates'],
    seoTitle: 'Date Difference Calculator – Days & Months Between Dates | ToolNest',
    seoDescription: 'Calculate the exact time difference between two dates in days, weeks, months, and years. Fast, accurate calendar difference tool.',
    componentKey: 'date-difference-calculator',
    content: {
      whatIs: 'The Date Difference Calculator measures the duration elapsed between a start date and an end date, breaking the interval down into calendar units.',
      howToUse: [
        'Select the start date.',
        'Select the end date.',
        'Toggle whether to include the end day.',
        'View the total days, months, years, and business day estimates.'
      ],
      tips: ['Useful for calculating project deadlines, age of legal documents, and billing cycles.'],
      faqs: [
        {
          question: 'How do you calculate days between dates manually?',
          answer: 'Count the remaining days in the start month, add the full days of intermediate months, and add the days elapsed in the final month, accounting for leap years.'
        }
      ]
    },
    relatedToolIds: ['age-calculator', 'days-between-dates', 'working-days-calculator']
  },
  {
    id: 'semester-gpa-calculator',
    name: 'Semester GPA Calculator',
    slug: 'semester-gpa-calculator',
    category: 'student',
    description: 'Aggregate multiple semester GPAs into an overall degree CGPA with credit weighting.',
    icon: 'GraduationCap',
    keywords: ['semester gpa calculator', 'aggregate gpa', 'multiple semester gpa', 'degree gpa'],
    seoTitle: 'Semester GPA Calculator – Combine Multiple Semesters | ToolNest',
    seoDescription: 'Calculate your combined GPA across multiple semesters. Weighted credits per semester for accurate college and university degree tracking.',
    componentKey: 'semester-gpa-calculator',
    content: {
      whatIs: 'The Semester GPA Calculator aggregates individual semester GPAs into a single cumulative academic index, accounting for differing credit weights per semester.',
      howToUse: [
        'Enter each semester number or title.',
        'Enter the semester GPA and total credits completed in that term.',
        'Add as many semesters as completed (e.g. Sem 1 through Sem 8).',
        'Instantly view your cumulative academic GPA.'
      ],
      formula: '\\text{Cumulative GPA} = \\frac{\\sum (\\text{Semester GPA}_k \\times \\text{Credits}_k)}{\\sum \\text{Credits}_k}',
      example: 'Sem 1 (3.4 GPA, 15 credits) + Sem 2 (3.8 GPA, 18 credits) = (51 + 68.4) / 33 = 3.618 overall GPA.',
      tips: ['Ensure credits include all graded courses and exclude ungraded audit courses.'],
      faqs: [
        {
          question: 'Can I use this for 8 semesters of engineering?',
          answer: 'Yes, you can add up to 10+ semesters dynamically and get an instant cumulative CGPA.'
        }
      ]
    },
    relatedToolIds: ['cgpa-calculator', 'sgpa-calculator', 'gpa-calculator']
  }
];
