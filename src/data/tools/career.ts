import { ToolDefinition } from '@/types/tool';

export const CAREER_TOOLS: ToolDefinition[] = [
  {
    id: 'ctc-to-inhand-salary',
    name: 'CTC to In-Hand Salary Calculator',
    slug: 'ctc-to-inhand-salary',
    category: 'career',
    description: 'Calculate your actual monthly take-home salary from your gross CTC, factoring in Basic salary, HRA, EPF deductions, and Professional Tax.',
    icon: 'Wallet',
    keywords: ['ctc to in hand', 'in hand salary calculator', 'take home salary', 'ctc breakdown', 'monthly salary calculator'],
    seoTitle: 'CTC to In-Hand Salary Calculator – Monthly Take-Home Pay | ToolNest',
    seoDescription: 'Calculate your real monthly take-home in-hand salary from gross annual CTC. Includes deductions for EPF, Professional Tax, and allowances.',
    componentKey: 'ctc-to-inhand-salary',
    popular: true,
    featured: true,
    content: {
      whatIs: 'Cost to Company (CTC) is the total annual expenditure an employer spends on an employee. It includes basic wage, allowances, gratuity, employer PF contributions, and medical insurance. In-hand salary is the actual net cash transferred to your bank account after mandatory statutory deductions.',
      howToUse: [
        'Enter your annual Cost to Company (CTC).',
        'Adjust the Basic Salary percentage (standard default is 40%–50% of CTC).',
        'Verify Employee Provident Fund (EPF) and Professional Tax settings.',
        'Review your monthly net take-home salary alongside a detailed deduction summary.'
      ],
      formula: '\\text{In-Hand Salary} = \\text{Gross Salary} - (\\text{Employee EPF} + \\text{Professional Tax} + \\text{Income Tax/TDS})',
      example: 'On an annual CTC of $60,000, assuming $5,000 gross monthly pay and $400 in combined taxes and retirement contributions, your monthly in-hand salary is $4,600.',
      tips: [
        'Employer EPF is part of CTC but does not arrive in your monthly bank transfer.',
        'Opting for higher voluntary deductions (VPO) increases retirement savings while lowering immediate in-hand pay.'
      ],
      faqs: [
        {
          question: 'Why is in-hand salary less than CTC divided by 12?',
          answer: 'CTC incorporates employer contributions (like gratuity, group insurance, and employer EPF) that are deferred benefits rather than immediate monthly cash.'
        },
        {
          question: 'What is standard EPF contribution?',
          answer: 'Standard EPF is 12% of Basic salary contributed by the employee matched by 12% from the employer.'
        }
      ]
    },
    relatedToolIds: ['salary-hike-calculator', 'salary-percentage-calculator', 'hourly-to-annual-salary']
  },
  {
    id: 'salary-hike-calculator',
    name: 'Salary Hike Calculator',
    slug: 'salary-hike-calculator',
    category: 'career',
    description: 'Calculate your new salary and exact monthly pay increase based on your current salary and offered hike percentage or increment amount.',
    icon: 'TrendingUp',
    keywords: ['salary hike calculator', 'percentage hike calculator', 'appraisal calculator', 'increment calculator'],
    seoTitle: 'Salary Hike Calculator – Calculate Increment & New CTC | ToolNest',
    seoDescription: 'Calculate your new salary after appraisal or job switch. Free salary hike calculator with percentage increase and monthly increase breakdown.',
    componentKey: 'salary-hike-calculator',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The Salary Hike Calculator evaluates compensation increments during annual performance appraisals or job transitions, giving both total annual growth and monthly wage difference.',
      howToUse: [
        'Enter your current annual or monthly salary.',
        'Enter either the percentage hike offered or the new offered salary.',
        'Instantly view the revised annual package, absolute annual increment, and additional monthly pay.'
      ],
      formula: '\\text{New Salary} = \\text{Current Salary} \\times \\left(1 + \\frac{\\text{Hike \\%}}{100}\\right)',
      example: 'If your current CTC is $75,000 and you receive a 25% hike, your absolute increment is $18,750, making your new CTC $93,750 (an extra $1,562.50 per month).',
      tips: [
        'When negotiating a job switch, consider inflation and standard market switch rates (typically 20%–35%).',
        'Compare in-hand salary differences rather than just gross CTC figures.'
      ],
      faqs: [
        {
          question: 'What is a typical appraisal hike?',
          answer: 'Standard annual merit hikes typically range between 5% and 15%, while lateral switches between companies often command 20% to 40%.'
        }
      ]
    },
    relatedToolIds: ['ctc-to-inhand-salary', 'salary-percentage-calculator', 'hourly-to-annual-salary']
  },
  {
    id: 'salary-percentage-calculator',
    name: 'Salary Percentage Calculator',
    slug: 'salary-percentage-calculator',
    category: 'career',
    description: 'Calculate what percentage of your salary goes toward rent, investments, savings, or tax deductions.',
    icon: 'PieChart',
    keywords: ['salary percentage calculator', 'budget percentage', 'salary allocation', 'income percentage'],
    seoTitle: 'Salary Percentage Calculator – Income Allocation & Shares | ToolNest',
    seoDescription: 'Determine the exact percentage of your monthly salary spent on expenses, rent, savings, or investments with the 50/30/20 rule comparison.',
    componentKey: 'salary-percentage-calculator',
    content: {
      whatIs: 'The Salary Percentage Calculator helps you understand your personal finance breakdown by measuring expense and savings proportions against total take-home pay.',
      howToUse: [
        'Enter your monthly net salary.',
        'Enter expense or budget amounts (e.g. Rent, Groceries, Investments).',
        'Get percentage shares for each item and see how they map against the 50/30/20 budgeting rule.'
      ],
      tips: ['Financial planners generally recommend keeping housing and rent below 30% of your take-home pay.'],
      faqs: [
        {
          question: 'What is the 50/30/20 rule?',
          answer: '50% of your income covers Needs (housing, groceries, utilities), 30% goes to Wants (dining, hobbies), and 20% is committed to Savings and debt repayment.'
        }
      ]
    },
    relatedToolIds: ['ctc-to-inhand-salary', 'percentage-calculator', 'salary-hike-calculator']
  },
  {
    id: 'experience-calculator',
    name: 'Experience Calculator',
    slug: 'experience-calculator',
    category: 'career',
    description: 'Calculate your total professional work experience in years, months, and days across multiple jobs with gap detection.',
    icon: 'Briefcase',
    keywords: ['experience calculator', 'total work experience', 'years of experience', 'job experience calculator'],
    seoTitle: 'Experience Calculator – Total Work Experience in Years & Months | ToolNest',
    seoDescription: 'Accurately calculate your total professional work experience across multiple employers. Includes gap analysis and exact months breakdown.',
    componentKey: 'experience-calculator',
    popular: true,
    content: {
      whatIs: 'The Experience Calculator merges dates from all your past and current employments to compute an exact cumulative tenure for resumes, visa applications, and job forms.',
      howToUse: [
        'Add each job position with start date and end date (or mark as "Currently Working").',
        'Add multiple past employers.',
        'View total work experience in years and months, with tenure breakdown per role.'
      ],
      tips: ['Overlapping employment or side freelancing should be checked to avoid double-counting on formal verification resumes.'],
      faqs: [
        {
          question: 'How do employers count partial months?',
          answer: 'Most HR systems round 15 or more days within a calendar month up to a full month of work experience.'
        }
      ]
    },
    relatedToolIds: ['work-experience-calculator', 'notice-period-calculator', 'internship-duration-calculator']
  },
  {
    id: 'notice-period-calculator',
    name: 'Notice Period Calculator',
    slug: 'notice-period-calculator',
    category: 'career',
    description: 'Calculate your official last working day (LWD) from your resignation date and notice period length in days or months.',
    icon: 'CalendarX2',
    keywords: ['notice period calculator', 'last working day calculator', 'lwd calculator', 'resignation date calculator'],
    seoTitle: 'Notice Period Calculator – Find Your Last Working Day | ToolNest',
    seoDescription: 'Calculate your official Last Working Day (LWD) after submitting resignation. Input notice period in days or months with weekend adjustment.',
    componentKey: 'notice-period-calculator',
    popular: true,
    content: {
      whatIs: 'When transitioning between roles, your notice period dictates the required duration you must continue working after serving formal resignation notice.',
      howToUse: [
        'Select your formal resignation submission date.',
        'Select notice period duration (e.g., 30 days, 60 days, 90 days, or 1 to 3 months).',
        'Optionally deduct approved leave buyouts or accrued leave days.',
        'Get your official Last Working Day (LWD) and remaining days countdown.'
      ],
      tips: ['Confirm whether your company policy counts calendar days or business days for notice period.'],
      faqs: [
        {
          question: 'Does notice period start on the day of resignation?',
          answer: 'Usually the notice period begins the day after formal written acceptance of resignation by your reporting manager or HR department.'
        }
      ]
    },
    relatedToolIds: ['experience-calculator', 'working-days-calculator', 'interview-countdown']
  },
  {
    id: 'work-experience-calculator',
    name: 'Work Experience Calculator',
    slug: 'work-experience-calculator',
    category: 'career',
    description: 'Detailed career timeline aggregator separating full-time roles, internships, and contract work with clean formatting for LinkedIn and CVs.',
    icon: 'History',
    keywords: ['work experience calculator', 'career duration calculator', 'cv experience calculator'],
    seoTitle: 'Work Experience Calculator – Career Tenure & Timeline | ToolNest',
    seoDescription: 'Calculate full-time vs internship experience accurately. Formatted for resumes, LinkedIn profiles, and job applications.',
    componentKey: 'work-experience-calculator',
    content: {
      whatIs: 'The Work Experience Calculator lets job seekers distinguish between full-time professional experience and internships or apprenticeships for precise resume representations.',
      howToUse: [
        'Add employment entries categorizing each as Full-Time, Part-Time, Internship, or Freelance.',
        'Enter respective start and end dates.',
        'Review aggregated experience metrics separated by employment classification.'
      ],
      tips: ['Many applicant tracking systems filter candidates by minimum years of "Full-Time" experience.'],
      faqs: [
        {
          question: 'Do internships count as work experience?',
          answer: 'Yes, internships count as valuable relevant work experience, though some senior corporate roles specifically ask for full-time post-graduate tenure.'
        }
      ]
    },
    relatedToolIds: ['experience-calculator', 'internship-duration-calculator', 'resume-word-counter']
  },
  {
    id: 'resume-word-counter',
    name: 'Resume Word Counter',
    slug: 'resume-word-counter',
    category: 'career',
    description: 'Analyze your resume text for word count, character count, page length estimation (1-page vs 2-page rule), and action verb density.',
    icon: 'FileText',
    keywords: ['resume word counter', 'cv word count', 'how many words in resume', '1 page resume words'],
    seoTitle: 'Resume Word Counter – Optimize CV Length & Page Fit | ToolNest',
    seoDescription: 'Check if your resume is the optimal length. Count words, estimate page fit (400-600 words for 1 page), and inspect action verb strength.',
    componentKey: 'resume-word-counter',
    popular: true,
    content: {
      whatIs: 'The Resume Word Counter evaluates your CV text against industry recruitment benchmarks to ensure you do not exceed the golden 1-page (400–600 words) or 2-page (800–1200 words) threshold.',
      howToUse: [
        'Paste your resume text into the editor.',
        'Get immediate word count, character count, and estimated page length.',
        'Check density of active leadership and impact action verbs.'
      ],
      tips: [
        'Under 5 years of experience should almost always fit comfortably on a single page (approx 450–600 words).',
        'Avoid lengthy narrative paragraphs; use 3 to 5 concise bullet points per role focusing on quantifiable outcomes.'
      ],
      faqs: [
        {
          question: 'What is the ideal word count for a resume?',
          answer: 'For a one-page resume, 450 to 650 words is considered the sweet spot for clean readability and ATS parsing.'
        }
      ]
    },
    relatedToolIds: ['ats-keyword-checker', 'resume-file-name-generator', 'cover-letter-helper']
  },
  {
    id: 'ats-keyword-checker',
    name: 'Resume ATS Keyword Checker',
    slug: 'ats-keyword-checker',
    category: 'career',
    description: 'Compare your resume against a job description to calculate keyword match percentage and identify missing critical skills.',
    icon: 'FileSearch',
    keywords: ['ats resume checker', 'ats keyword match', 'resume optimizer', 'job description keyword scanner'],
    seoTitle: 'Resume ATS Keyword Checker – Match Resume to Job Description | ToolNest',
    seoDescription: 'Paste your resume and target job description to get an instant ATS keyword match score, frequency breakdown, and missing key skills list.',
    componentKey: 'ats-keyword-checker',
    popular: true,
    featured: true,
    content: {
      whatIs: 'Applicant Tracking Systems (ATS) scan incoming candidate resumes for specific technical keywords, competencies, and tool proficiencies present in the job requisition. This tool simulates ATS text matching in your browser with complete privacy.',
      howToUse: [
        'Paste your resume text in the left panel.',
        'Paste the target Job Description (JD) in the right panel.',
        'Review your ATS Match Score (0%–100%), matching keywords, and missing critical terms.',
        'Incorporate relevant missing skills naturally into your resume experience bullet points.'
      ],
      tips: [
        'Do not keyword stuff in white text; modern ATS algorithms detect and flag invisible text as spam.',
        'Use both full acronyms and spelled-out terms (e.g. "Search Engine Optimization (SEO)").'
      ],
      faqs: [
        {
          question: 'What is a good ATS match score?',
          answer: 'A match score of 70% or higher is generally considered strong enough to pass initial algorithmic screening filters.'
        },
        {
          question: 'Is my resume data sent to an external server?',
          answer: 'No! ToolNest operates 100% locally in your browser. None of your resume or job text ever leaves your computer.'
        }
      ]
    },
    relatedToolIds: ['resume-word-counter', 'cover-letter-helper', 'resume-file-name-generator']
  },
  {
    id: 'resume-file-name-generator',
    name: 'Resume File Name Generator',
    slug: 'resume-file-name-generator',
    category: 'career',
    description: 'Generate clean, professional, ATS-friendly file names for your resume, CV, and portfolio attachments.',
    icon: 'FileCheck',
    keywords: ['resume file name generator', 'professional resume file name', 'cv naming convention', 'ats resume name'],
    seoTitle: 'Resume File Name Generator – ATS-Friendly File Names | ToolNest',
    seoDescription: 'Generate clean, recruiter-approved file names for your resume and cover letter. Avoid generic names like "Resume.pdf" that get lost in recruiter inboxes.',
    componentKey: 'resume-file-name-generator',
    content: {
      whatIs: 'Recruiters download hundreds of applicant files daily. Naming your file "Resume.pdf" makes it difficult to find. A structured name (e.g. `Jane_Doe_Product_Manager_Resume_2026.pdf`) ensures instant recognition and professionalism.',
      howToUse: [
        'Enter your first and last name.',
        'Enter your target job title or specialization.',
        'Select preferred separator (Underscore, Hyphen, or CamelCase).',
        'Copy your formatted filename or click to rename your document.'
      ],
      tips: ['Never include version numbers like "Resume_v3_final_final.pdf" in submitted files.'],
      faqs: [
        {
          question: 'Should I use PDF or Word for resumes?',
          answer: 'PDF preserves fonts and styling across all operating systems and is preferred by 95% of recruiters, unless a job post explicitly requests .docx.'
        }
      ]
    },
    relatedToolIds: ['resume-word-counter', 'ats-keyword-checker', 'cover-letter-helper']
  },
  {
    id: 'cover-letter-helper',
    name: 'Cover Letter Helper',
    slug: 'cover-letter-helper',
    category: 'career',
    description: 'Draft tailored, impactful cover letter templates by inputting your target company, role, key achievements, and skills.',
    icon: 'PenTool',
    keywords: ['cover letter helper', 'cover letter generator', 'job cover letter draft', 'cover letter template'],
    seoTitle: 'Cover Letter Helper – Structured Job Application Drafts | ToolNest',
    seoDescription: 'Create tailored, high-converting cover letter drafts in minutes. Structured templates for tech, business, design, and career transitions.',
    componentKey: 'cover-letter-helper',
    popular: true,
    content: {
      whatIs: 'The Cover Letter Helper guides you through writing compelling application letters that highlight your specific value proposition, culture alignment, and standout accomplishments.',
      howToUse: [
        'Enter the hiring manager name (or Hiring Team), company name, and job title.',
        'Select the tone (Professional, Confident, Passionate, or Direct).',
        'Enter 2-3 of your proudest career achievements with quantifiable metrics.',
        'Generate your draft, fine-tune the sentences, and copy with one click.'
      ],
      tips: [
        'Always research the company mission and reference an authentic reason why you are excited about their specific product.',
        'Keep your cover letter between 250 and 400 words.'
      ],
      faqs: [
        {
          question: 'Do recruiters actually read cover letters?',
          answer: 'While some recruiters skim them, when candidates have similar qualifications, a well-crafted cover letter is often the deciding factor for an interview invite.'
        }
      ]
    },
    relatedToolIds: ['resume-word-counter', 'ats-keyword-checker', 'job-application-tracker']
  },
  {
    id: 'job-application-tracker',
    name: 'Job Application Tracker',
    slug: 'job-application-tracker',
    category: 'career',
    description: 'Track and organize your job applications, interview stages, follow-up dates, and salary offers with browser localStorage persistence.',
    icon: 'Kanban',
    keywords: ['job application tracker', 'job tracker', 'track job applications', 'job search spreadsheet'],
    seoTitle: 'Job Application Tracker – Organize Your Job Search | ToolNest',
    seoDescription: 'Free browser-based job application tracker. Keep track of companies, job titles, status stages, interview dates, and salary ranges without login.',
    componentKey: 'job-application-tracker',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The Job Application Tracker provides a clean kanban/table dashboard to keep tabs on every application you submit, preventing missed follow-ups or awkward interview confusion.',
      howToUse: [
        'Add a new job entry with Company, Role, Date Applied, and Link.',
        'Update status as you progress: Applied, Screening, Technical Interview, Final Round, Offer, or Rejected.',
        'Set follow-up reminder dates and log recruiter contact notes.',
        'All records automatically save locally in your browser.'
      ],
      tips: ['Following up with a recruiter 5-7 business days after applying increases response rates by over 30%.'],
      faqs: [
        {
          question: 'Is my data secure?',
          answer: 'Yes, all application notes and salary details are saved exclusively in your browser localStorage and never sent over the internet.'
        }
      ]
    },
    relatedToolIds: ['interview-countdown', 'notice-period-calculator', 'experience-calculator']
  },
  {
    id: 'interview-countdown',
    name: 'Interview Countdown',
    slug: 'interview-countdown',
    category: 'career',
    description: 'Live countdown timer for upcoming job interviews with an essential pre-interview checklist and preparation timeline.',
    icon: 'Clock',
    keywords: ['interview countdown', 'job interview timer', 'interview preparation countdown'],
    seoTitle: 'Interview Countdown – Real-Time Timer & Prep Checklist | ToolNest',
    seoDescription: 'Stay composed and organized with an interview countdown timer. Includes pre-interview research reminders and technology checks.',
    componentKey: 'interview-countdown',
    content: {
      whatIs: 'The Interview Countdown helps candidates manage pre-interview preparation milestones, ensuring time for company research, mock questions, and technology setup.',
      howToUse: [
        'Enter the hiring company name and interview stage.',
        'Set the scheduled interview date and time.',
        'Follow the interactive preparation checklist (Audio/Video check, STAR stories, questions for the interviewer).'
      ],
      tips: ['Log into the video meeting link 5 minutes early to test microphone and camera clarity.'],
      faqs: [
        {
          question: 'What questions should I ask at the end of an interview?',
          answer: 'Ask about team priorities for the next 90 days, engineering culture, and how success is measured in this specific role.'
        }
      ]
    },
    relatedToolIds: ['job-application-tracker', 'exam-countdown', 'cover-letter-helper']
  },
  {
    id: 'internship-duration-calculator',
    name: 'Internship Duration Calculator',
    slug: 'internship-duration-calculator',
    category: 'career',
    description: 'Calculate total weeks, business days, and credited hours completed during an internship or co-op program.',
    icon: 'CalendarCheck',
    keywords: ['internship duration', 'co op hours calculator', 'internship weeks', 'internship certificate calculator'],
    seoTitle: 'Internship Duration Calculator – Weeks & Hours Completed | ToolNest',
    seoDescription: 'Calculate completed internship weeks, business working days, and total hourly credit for college verification and resume listing.',
    componentKey: 'internship-duration-calculator',
    content: {
      whatIs: 'Many universities require student interns to complete a certified minimum number of hours or weeks (e.g. 8 weeks / 320 hours) to receive academic degree credit.',
      howToUse: [
        'Select internship start date and end date.',
        'Specify expected weekly working hours (e.g. 40 hrs/week full-time, 20 hrs/week part-time).',
        'Get total calendar duration, working days, and accumulated hours.'
      ],
      tips: ['Keep an accurate weekly log of project milestones to accompany your final internship report.'],
      faqs: [
        {
          question: 'How many hours is a standard 12-week internship?',
          answer: 'A standard 12-week full-time internship (40 hours per week) equates to 480 total working hours.'
        }
      ]
    },
    relatedToolIds: ['working-days-calculator', 'experience-calculator', 'hourly-to-annual-salary']
  },
  {
    id: 'working-days-calculator',
    name: 'Working Days Calculator',
    slug: 'working-days-calculator',
    category: 'career',
    description: 'Calculate the exact number of business working days between two dates, excluding Saturdays, Sundays, and custom holidays.',
    icon: 'CalendarDays',
    keywords: ['working days calculator', 'business days calculator', 'exclude weekends calculator', 'work days between dates'],
    seoTitle: 'Working Days Calculator – Business Days Between Dates | ToolNest',
    seoDescription: 'Calculate the exact number of working days between two dates. Automatically excludes weekends and supports custom public holidays.',
    componentKey: 'working-days-calculator',
    popular: true,
    content: {
      whatIs: 'The Working Days Calculator computes Monday-to-Friday business days between two dates, vital for project sprints, contractual service level agreements (SLAs), and payroll cycles.',
      howToUse: [
        'Choose the starting date.',
        'Choose the ending date.',
        'Choose whether weekends are Saturday/Sunday or Sunday-only.',
        'Optionally input number of recognized public holidays.',
        'View the exact count of net working days and calendar days.'
      ],
      tips: ['Include national public holidays in the holiday deduction field for strict SLA and legal milestone calculations.'],
      faqs: [
        {
          question: 'How many working days are in an average year?',
          answer: 'A regular year consists of 260 to 262 weekdays (Monday through Friday). After factoring in 10 observed holidays, typical working days range from 250 to 252.'
        }
      ]
    },
    relatedToolIds: ['date-difference-calculator', 'notice-period-calculator', 'hourly-to-annual-salary']
  },
  {
    id: 'hourly-to-annual-salary',
    name: 'Hourly to Annual Salary Calculator',
    slug: 'hourly-to-annual-salary',
    category: 'career',
    description: 'Convert hourly wage to annual salary, monthly earnings, bi-weekly paychecks, and daily income with paid time off adjustments.',
    icon: 'CircleDollarSign',
    keywords: ['hourly to annual salary', 'hourly wage to salary', 'convert hourly to yearly', 'hourly rate calculator'],
    seoTitle: 'Hourly to Annual Salary Calculator – Wage Conversion | ToolNest',
    seoDescription: 'Convert hourly pay to annual, monthly, and bi-weekly salary. Adjust for weekly hours, unpaid time off, and overtime multipliers.',
    componentKey: 'hourly-to-annual-salary',
    popular: true,
    content: {
      whatIs: 'The Hourly to Annual Salary Calculator translates hourly consulting or employment rates into standardized annual, monthly, bi-weekly, and weekly compensation.',
      howToUse: [
        'Enter your hourly wage ($/hr).',
        'Specify average hours worked per week (default is 40).',
        'Enter paid or unpaid vacation weeks per year (default is 52 working weeks).',
        'See immediate conversions across all standard payroll frequencies.'
      ],
      formula: '\\text{Annual Salary} = \\text{Hourly Rate} \\times \\text{Hours per Week} \\times \\text{Weeks Worked per Year}',
      example: '$35/hour × 40 hours/week × 52 weeks = $72,800 annual salary ($6,066.67/month or $2,800 bi-weekly).',
      tips: ['A quick mental math shortcut for 40 hours/week is multiplying your hourly wage by 2,000 (e.g. $40/hr ≈ $80,000/yr).'],
      faqs: [
        {
          question: 'How many working hours are in a year for a 40-hour work week?',
          answer: '40 hours per week × 52 weeks = 2,080 working hours in a standard year.'
        }
      ]
    },
    relatedToolIds: ['ctc-to-inhand-salary', 'salary-hike-calculator', 'salary-percentage-calculator']
  }
];
