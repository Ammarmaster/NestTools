import { ToolDefinition } from '@/types/tool';

export const FINANCE_TOOLS: ToolDefinition[] = [
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    slug: 'bmi-calculator',
    category: 'finance',
    description: 'Calculate Body Mass Index (BMI) using metric (cm/kg) or imperial (ft-in/lbs) units, with WHO weight categories and healthy weight range.',
    icon: 'Activity',
    keywords: ['bmi calculator', 'body mass index', 'calculate bmi', 'healthy weight calculator', 'bmi formula'],
    seoTitle: 'BMI Calculator – Body Mass Index & Healthy Weight Range | ToolNest',
    seoDescription: 'Calculate your Body Mass Index (BMI) in metric or imperial units. Find your ideal healthy weight range and WHO weight classification.',
    componentKey: 'bmi-calculator',
    popular: true,
    featured: true,
    content: {
      whatIs: 'Body Mass Index (BMI) is a screening tool used by healthcare organizations worldwide to categorize whether an adult\'s body weight falls into a healthy range for their height.',
      howToUse: [
        'Select unit system (Metric: cm & kg, or Imperial: feet/inches & lbs).',
        'Enter height and weight.',
        'View your BMI score, WHO category (Underweight, Normal, Overweight, Obese), and ideal healthy weight span for your height.'
      ],
      formula: '\\text{BMI} = \\frac{\\text{Weight (kg)}}{[\\text{Height (m)}]^2} \\quad \\text{or} \\quad \\text{BMI} = \\frac{703 \\times \\text{Weight (lbs)}}{[\\text{Height (inches)}]^2}',
      example: 'Height = 175 cm (1.75 m), Weight = 70 kg. $\\text{BMI} = 70 / (1.75)^2 = 70 / 3.0625 = 22.86$ (Normal Weight).'
    },
    relatedToolIds: ['weight', 'loan-emi-calculator', 'percentage-calculator']
  },
  {
    id: 'loan-emi-calculator',
    name: 'Loan EMI Calculator',
    slug: 'loan-emi-calculator',
    category: 'finance',
    description: 'Calculate monthly loan EMI payments, total interest payable, and total payback for home loans, car loans, and personal loans with amortization schedule.',
    icon: 'Landmark',
    keywords: ['loan emi calculator', 'emi calculator', 'home loan emi', 'car loan emi', 'loan amortization calculator'],
    seoTitle: 'Loan EMI Calculator – Monthly Loan Payment & Interest | ToolNest',
    seoDescription: 'Calculate your Equated Monthly Installment (EMI) for home, car, and personal loans. Includes total interest breakdown and year-by-year schedule.',
    componentKey: 'loan-emi-calculator',
    popular: true,
    featured: true,
    content: {
      whatIs: 'An Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month until the principal and interest are paid in full.',
      howToUse: [
        'Enter Loan Principal Amount.',
        'Enter Annual Interest Rate (%).',
        'Enter Loan Tenure in Years or Months.',
        'Inspect the Monthly EMI, Total Interest Payable, Total Payment, and visual Principal vs Interest share.'
      ],
      formula: 'E = P \\times r \\times \\frac{(1 + r)^n}{(1 + r)^n - 1}',
      example: '$100,000 at 7.5% for 15 years yields a monthly EMI of $927.01, with $66,862.29 total interest.'
    },
    relatedToolIds: ['compound-interest-calculator', 'simple-interest-calculator', 'ctc-to-inhand-salary']
  },
  {
    id: 'discount-calculator',
    name: 'Discount Calculator',
    slug: 'discount-calculator',
    category: 'finance',
    description: 'Calculate discounted sale prices, total money saved, and final checkout price with additional sales tax.',
    icon: 'Tag',
    keywords: ['discount calculator', 'sale price calculator', 'percentage off calculator', 'calculate discount', 'shopping discount'],
    seoTitle: 'Discount Calculator – Calculate Sale Price & Savings | ToolNest',
    seoDescription: 'Calculate the final sale price and total dollar savings from percentage discounts. Supports double discounts and sales tax addition.',
    componentKey: 'discount-calculator',
    popular: true,
    content: {
      whatIs: 'The Discount Calculator computes final purchase prices during retail sales, calculating exact dollar savings and the final post-tax checkout total.',
      howToUse: [
        'Enter original retail price.',
        'Enter discount percentage (e.g. 20% off).',
        'Optionally add a secondary coupon discount or local sales tax percentage.',
        'Get final price to pay and total money saved.'
      ],
      formula: '\\text{Discount Amount} = \\text{Original Price} \\times \\left(\\frac{\\text{Discount \\%}}{100}\\right)',
      example: '$120 item with a 25% discount saves $30, making the final price $90.'
    },
    relatedToolIds: ['percentage-calculator', 'gst-calculator', 'tip-calculator']
  },
  {
    id: 'gst-calculator',
    name: 'GST Calculator',
    slug: 'gst-calculator',
    category: 'finance',
    description: 'Calculate Goods and Services Tax (GST) or VAT for inclusive and exclusive prices with standard tax slabs (5%, 12%, 18%, 28%) and CGST/SGST breakdown.',
    icon: 'Receipt',
    keywords: ['gst calculator', 'vat calculator', 'calculate gst', 'gst inclusive', 'gst exclusive', 'sales tax calculator'],
    seoTitle: 'GST Calculator – Inclusive & Exclusive GST / VAT Rates | ToolNest',
    seoDescription: 'Calculate GST and VAT amounts online. Fast calculation for GST inclusive and exclusive prices with standard slabs and CGST/SGST split.',
    componentKey: 'gst-calculator',
    popular: true,
    content: {
      whatIs: 'Goods and Services Tax (GST) is an indirect consumption tax levied on the supply of goods and services. GST Exclusive means tax is added on top of the base price; GST Inclusive means the displayed price already incorporates tax.',
      howToUse: [
        'Enter the base or total amount.',
        'Select whether the price is GST Exclusive or GST Inclusive.',
        'Choose a standard rate (5%, 12%, 18%, 28%) or enter a custom tax rate.',
        'View net price, tax amount (with 50/50 CGST and SGST split), and final gross total.'
      ],
      formula: '\\text{GST Amount (Exclusive)} = \\text{Amount} \\times \\frac{\\text{GST Rate}}{100} \\quad | \\quad \\text{GST (Inclusive)} = \\text{Amount} - \\left(\\frac{\\text{Amount}}{1 + \\frac{\\text{GST Rate}}{100}}\\right)'
    },
    relatedToolIds: ['discount-calculator', 'profit-margin-calculator', 'break-even-calculator']
  },
  {
    id: 'tip-calculator',
    name: 'Tip Calculator',
    slug: 'tip-calculator',
    category: 'finance',
    description: 'Calculate restaurant gratuity tips quickly with one-click tip percentages (10%, 15%, 18%, 20%), custom amounts, and total bill tally.',
    icon: 'ReceiptCheck',
    keywords: ['tip calculator', 'gratuity calculator', 'calculate tip', 'restaurant tip calculator', 'how much to tip'],
    seoTitle: 'Tip Calculator – Fast Gratuity & Bill Calculation | ToolNest',
    seoDescription: 'Calculate restaurant tip amounts and total bill in seconds. Preset tip buttons (15%, 18%, 20%) and custom gratuity percentages.',
    componentKey: 'tip-calculator',
    popular: true,
    content: {
      whatIs: 'The Tip Calculator helps diners determine appropriate gratuity amounts for hospitality staff based on food and beverage subtotals.',
      howToUse: [
        'Enter your bill total.',
        'Click a standard tip percentage button (15%, 18%, 20%) or enter a custom rate.',
        'View the tip dollar amount and total combined bill.'
      ],
      example: 'Bill of $84.00 with an 18% tip = $15.12 tip, totaling $99.12.'
    },
    relatedToolIds: ['split-bill-calculator', 'discount-calculator', 'percentage-calculator']
  },
  {
    id: 'split-bill-calculator',
    name: 'Split Bill Calculator',
    slug: 'split-bill-calculator',
    category: 'finance',
    description: 'Evenly divide group dining checks, bar tabs, or shared expenses among multiple people with customizable tip and rounding options.',
    icon: 'Users',
    keywords: ['split bill calculator', 'divide bill', 'split check', 'split dinner bill', 'bill splitter with tip'],
    seoTitle: 'Split Bill Calculator – Divide Checks & Tips Among Friends | ToolNest',
    seoDescription: 'Split group restaurant bills and tips evenly between friends. Includes custom tip %, number of people, and round up to whole dollars.',
    componentKey: 'split-bill-calculator',
    popular: true,
    content: {
      whatIs: 'The Split Bill Calculator calculates individual per-person shares for shared group meals, including gratuity, preventing awkward end-of-meal division disputes.',
      howToUse: [
        'Enter total bill amount.',
        'Select tip percentage.',
        'Enter number of people splitting the check.',
        'Optionally enable "Round Up to Nearest Dollar" for simple cash settlements.',
        'Instantly see total tip, total bill, and each person\'s exact share.'
      ],
      example: '$120 bill with 20% tip ($24) split among 4 friends = $36.00 per person.'
    },
    relatedToolIds: ['tip-calculator', 'discount-calculator', 'percentage-calculator']
  },
  {
    id: 'compound-interest-calculator',
    name: 'Compound Interest Calculator',
    slug: 'compound-interest-calculator',
    category: 'finance',
    description: 'Calculate investment growth and compound interest with compounding frequencies (annually, semi-annually, quarterly, monthly) and regular monthly deposits.',
    icon: 'TrendingUp',
    keywords: ['compound interest calculator', 'investment calculator', 'compound growth', 'interest compounding monthly'],
    seoTitle: 'Compound Interest Calculator – Investment Growth Planner | ToolNest',
    seoDescription: 'Calculate compound interest and future wealth growth. Supports regular monthly contributions, custom compounding frequencies, and detailed charts.',
    componentKey: 'compound-interest-calculator',
    popular: true,
    featured: true,
    content: {
      whatIs: 'Compound interest is interest earned not only on the initial principal but also on the accumulated interest of prior periods, causing wealth to grow exponentially over time.',
      howToUse: [
        'Enter initial principal deposit.',
        'Enter annual interest rate (e.g. 8% for stock index funds).',
        'Enter investment duration in years.',
        'Select compounding frequency (Monthly, Quarterly, Annually).',
        'Optionally add a recurring monthly contribution.',
        'View future maturity value, total principal invested, and interest earned.'
      ],
      formula: 'A = P \\left(1 + \\frac{r}{n}\\right)^{nt}',
      example: '$10,000 invested for 10 years at 8% compounded monthly grows to $22,196.40, earning $12,196.40 in compound interest alone.'
    },
    relatedToolIds: ['simple-interest-calculator', 'loan-emi-calculator', 'profit-margin-calculator']
  },
  {
    id: 'simple-interest-calculator',
    name: 'Simple Interest Calculator',
    slug: 'simple-interest-calculator',
    category: 'finance',
    description: 'Calculate simple interest, maturity amount, and interest yield for bonds, promissory notes, and short-term loans.',
    icon: 'Percent',
    keywords: ['simple interest calculator', 'calculate simple interest', 'pnr calculator', 'simple interest formula'],
    seoTitle: 'Simple Interest Calculator – Fixed Interest & Maturity Amount | ToolNest',
    seoDescription: 'Calculate simple interest and final payoff balance using the standard $I = P \\times r \\times t$ formula with step-by-step math explanation.',
    componentKey: 'simple-interest-calculator',
    popular: true,
    content: {
      whatIs: 'Simple interest is determined solely by multiplying the daily interest rate by the principal by the number of days that elapse between payments, without compounding.',
      howToUse: [
        'Enter Principal Amount ($P$).',
        'Enter Annual Interest Rate ($R$).',
        'Enter Time Period in Years or Months ($T$).',
        'View Simple Interest Earned and Total Repayment Amount.'
      ],
      formula: 'I = \\frac{P \\times R \\times T}{100} \\quad | \\quad \\text{Total} = P + I',
      example: '$5,000 at 6% simple interest for 3 years: $I = (5000 \\times 6 \\times 3) / 100 = $900. Total = $5,900.'
    },
    relatedToolIds: ['compound-interest-calculator', 'loan-emi-calculator', 'percentage-calculator']
  },
  {
    id: 'profit-margin-calculator',
    name: 'Profit Margin Calculator',
    slug: 'profit-margin-calculator',
    category: 'finance',
    description: 'Calculate gross profit, gross margin percentage, and markup percentage from item cost and selling revenue.',
    icon: 'DollarSign',
    keywords: ['profit margin calculator', 'margin vs markup', 'gross profit margin', 'calculate markup', 'business profit calculator'],
    seoTitle: 'Profit Margin Calculator – Gross Margin & Markup Percentage | ToolNest',
    seoDescription: 'Calculate profit margin and markup percentages instantly from cost and selling price. Understand the key difference between margin and markup.',
    componentKey: 'profit-margin-calculator',
    popular: true,
    content: {
      whatIs: 'The Profit Margin Calculator computes profit margins (profit as a percentage of selling price) and markup (profit as a percentage of cost price) for business owners and ecommerce sellers.',
      howToUse: [
        'Enter product Cost price.',
        'Enter Selling price (or target margin %).',
        'Instantly view Gross Profit dollar amount, Gross Profit Margin %, and Markup %.'
      ],
      formula: '\\text{Gross Margin} = \\left(\\frac{\\text{Revenue} - \\text{Cost}}{\\text{Revenue}}\\right) \\times 100 \\quad | \\quad \\text{Markup} = \\left(\\frac{\\text{Revenue} - \\text{Cost}}{\\text{Cost}}\\right) \\times 100',
      example: 'Cost = $60, Selling Price = $100. Profit = $40. Profit Margin = ($40 / $100) * 100 = 40%. Markup = ($40 / $60) * 100 = 66.67%.'
    },
    relatedToolIds: ['break-even-calculator', 'discount-calculator', 'gst-calculator']
  },
  {
    id: 'break-even-calculator',
    name: 'Break-Even Calculator',
    slug: 'break-even-calculator',
    category: 'finance',
    description: 'Determine the exact sales volume in units and revenue dollars required to cover all fixed and variable business costs.',
    icon: 'Crosshair',
    keywords: ['break even calculator', 'break even point', 'bep calculator', 'fixed costs variable costs', 'break even revenue'],
    seoTitle: 'Break-Even Calculator – Break-Even Point in Units & Revenue | ToolNest',
    seoDescription: 'Calculate your business break-even point in units and sales dollars. Input fixed costs, unit price, and variable cost per unit to find profitability.',
    componentKey: 'break-even-calculator',
    popular: true,
    content: {
      whatIs: 'The Break-Even Point (BEP) is the production and sales level at which total revenues equal total expenses, meaning the business neither makes a profit nor incurs a loss.',
      howToUse: [
        'Enter Total Fixed Costs (rent, salaries, software).',
        'Enter Variable Cost per Unit (materials, packaging).',
        'Enter Selling Price per Unit.',
        'Review the Break-Even Quantity (units to sell), Break-Even Revenue, and Contribution Margin per unit.'
      ],
      formula: '\\text{Break-Even Units} = \\frac{\\text{Fixed Costs}}{\\text{Selling Price} - \\text{Variable Cost per Unit}}',
      example: 'Fixed Costs = $20,000. Price = $50. Variable Cost = $20. Contribution Margin = $30. Break-Even Units = $20,000 / $30 = 667 units ($33,350 revenue).'
    },
    relatedToolIds: ['profit-margin-calculator', 'compound-interest-calculator', 'loan-emi-calculator']
  }
];
