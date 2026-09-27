import { ToolDefinition, CategoryId } from '@/types/tool';

interface UnitInfo {
  name: string;
  slug: string;
  toBase: number;
  category: CategoryId;
  dimName: string;
}

const ALL_SYNTH_UNITS: Record<string, UnitInfo> = {
  // Length
  'mm': { name: 'Millimeters', slug: 'mm', toBase: 0.001, category: 'converter', dimName: 'Length' },
  'cm': { name: 'Centimeters', slug: 'cm', toBase: 0.01, category: 'converter', dimName: 'Length' },
  'meters': { name: 'Meters', slug: 'meters', toBase: 1, category: 'converter', dimName: 'Length' },
  'm': { name: 'Meters', slug: 'm', toBase: 1, category: 'converter', dimName: 'Length' },
  'km': { name: 'Kilometers', slug: 'km', toBase: 1000, category: 'converter', dimName: 'Length' },
  'inches': { name: 'Inches', slug: 'inches', toBase: 0.0254, category: 'converter', dimName: 'Length' },
  'in': { name: 'Inches', slug: 'in', toBase: 0.0254, category: 'converter', dimName: 'Length' },
  'feet': { name: 'Feet', slug: 'feet', toBase: 0.3048, category: 'converter', dimName: 'Length' },
  'ft': { name: 'Feet', slug: 'ft', toBase: 0.3048, category: 'converter', dimName: 'Length' },
  'yards': { name: 'Yards', slug: 'yards', toBase: 0.9144, category: 'converter', dimName: 'Length' },
  'yd': { name: 'Yards', slug: 'yd', toBase: 0.9144, category: 'converter', dimName: 'Length' },
  'miles': { name: 'Miles', slug: 'miles', toBase: 1609.344, category: 'converter', dimName: 'Length' },
  'nautical-miles': { name: 'Nautical Miles', slug: 'nautical-miles', toBase: 1852, category: 'converter', dimName: 'Length' },

  // Weight & Mass
  'mg': { name: 'Milligrams', slug: 'mg', toBase: 0.001, category: 'converter', dimName: 'Weight' },
  'grams': { name: 'Grams', slug: 'grams', toBase: 1, category: 'converter', dimName: 'Weight' },
  'g': { name: 'Grams', slug: 'g', toBase: 1, category: 'converter', dimName: 'Weight' },
  'kg': { name: 'Kilograms', slug: 'kg', toBase: 1000, category: 'converter', dimName: 'Weight' },
  'metric-tons': { name: 'Metric Tons', slug: 'metric-tons', toBase: 1000000, category: 'converter', dimName: 'Weight' },
  'ounces': { name: 'Ounces', slug: 'ounces', toBase: 28.349523, category: 'converter', dimName: 'Weight' },
  'oz': { name: 'Ounces', slug: 'oz', toBase: 28.349523, category: 'converter', dimName: 'Weight' },
  'lbs': { name: 'Pounds', slug: 'lbs', toBase: 453.59237, category: 'converter', dimName: 'Weight' },
  'pounds': { name: 'Pounds', slug: 'pounds', toBase: 453.59237, category: 'converter', dimName: 'Weight' },
  'carats': { name: 'Carats', slug: 'carats', toBase: 0.2, category: 'converter', dimName: 'Weight' },
  'tola': { name: 'Tola', slug: 'tola', toBase: 11.6638, category: 'converter', dimName: 'Weight' },
  'sovereign': { name: 'Sovereign (Pavan)', slug: 'sovereign', toBase: 8.0, category: 'converter', dimName: 'Weight' },
  'ratti': { name: 'Ratti', slug: 'ratti', toBase: 0.1215, category: 'converter', dimName: 'Weight' },
  'quintal': { name: 'Quintal', slug: 'quintal', toBase: 100000, category: 'converter', dimName: 'Weight' },

  // Area & Land
  'sq-mm': { name: 'Square Millimeters', slug: 'sq-mm', toBase: 1e-6, category: 'converter', dimName: 'Area' },
  'sqmm': { name: 'Square Millimeters', slug: 'sqmm', toBase: 1e-6, category: 'converter', dimName: 'Area' },
  'sq-cm': { name: 'Square Centimeters', slug: 'sq-cm', toBase: 0.0001, category: 'converter', dimName: 'Area' },
  'sqcm': { name: 'Square Centimeters', slug: 'sqcm', toBase: 0.0001, category: 'converter', dimName: 'Area' },
  'sq-m': { name: 'Square Meters', slug: 'sq-m', toBase: 1, category: 'converter', dimName: 'Area' },
  'sqm': { name: 'Square Meters', slug: 'sqm', toBase: 1, category: 'converter', dimName: 'Area' },
  'sq-km': { name: 'Square Kilometers', slug: 'sq-km', toBase: 1e6, category: 'converter', dimName: 'Area' },
  'sqkm': { name: 'Square Kilometers', slug: 'sqkm', toBase: 1e6, category: 'converter', dimName: 'Area' },
  'sq-in': { name: 'Square Inches', slug: 'sq-in', toBase: 0.00064516, category: 'converter', dimName: 'Area' },
  'sqin': { name: 'Square Inches', slug: 'sqin', toBase: 0.00064516, category: 'converter', dimName: 'Area' },
  'sq-ft': { name: 'Square Feet', slug: 'sq-ft', toBase: 0.09290304, category: 'converter', dimName: 'Area' },
  'sqft': { name: 'Square Feet', slug: 'sqft', toBase: 0.09290304, category: 'converter', dimName: 'Area' },
  'sq-yd': { name: 'Square Yards', slug: 'sq-yd', toBase: 0.83612736, category: 'converter', dimName: 'Area' },
  'sqyd': { name: 'Square Yards', slug: 'sqyd', toBase: 0.83612736, category: 'converter', dimName: 'Area' },
  'acres': { name: 'Acres', slug: 'acres', toBase: 4046.85642, category: 'converter', dimName: 'Area' },
  'acre': { name: 'Acre', slug: 'acre', toBase: 4046.85642, category: 'converter', dimName: 'Area' },
  'hectares': { name: 'Hectares', slug: 'hectares', toBase: 10000, category: 'converter', dimName: 'Area' },
  'hectare': { name: 'Hectare', slug: 'hectare', toBase: 10000, category: 'converter', dimName: 'Area' },
  'gaj': { name: 'Gaj', slug: 'gaj', toBase: 0.83612736, category: 'converter', dimName: 'Area' },
  'guntha': { name: 'Guntha', slug: 'guntha', toBase: 101.17141056, category: 'converter', dimName: 'Area' },
  'cent': { name: 'Cent', slug: 'cent', toBase: 40.4685642, category: 'converter', dimName: 'Area' },
  'bigha': { name: 'Bigha', slug: 'bigha', toBase: 2529.285, category: 'converter', dimName: 'Area' },
  'marla': { name: 'Marla', slug: 'marla', toBase: 25.29285, category: 'converter', dimName: 'Area' },
  'kanal': { name: 'Kanal', slug: 'kanal', toBase: 505.857, category: 'converter', dimName: 'Area' },
  'ground': { name: 'Ground', slug: 'ground', toBase: 222.967296, category: 'converter', dimName: 'Area' },
  'biswa': { name: 'Biswa', slug: 'biswa', toBase: 126.464, category: 'converter', dimName: 'Area' },
  'katha': { name: 'Katha', slug: 'katha', toBase: 126.464, category: 'converter', dimName: 'Area' },

  // Volume
  'ml': { name: 'Milliliters', slug: 'ml', toBase: 0.001, category: 'converter', dimName: 'Volume' },
  'liters': { name: 'Liters', slug: 'liters', toBase: 1, category: 'converter', dimName: 'Volume' },
  'l': { name: 'Liters', slug: 'l', toBase: 1, category: 'converter', dimName: 'Volume' },
  'fl-oz': { name: 'Fluid Ounces', slug: 'fl-oz', toBase: 0.0295735, category: 'converter', dimName: 'Volume' },
  'gallons': { name: 'Gallons', slug: 'gallons', toBase: 3.78541, category: 'converter', dimName: 'Volume' },

  // Data
  'kb': { name: 'Kilobytes', slug: 'kb', toBase: 1000, category: 'converter', dimName: 'Data' },
  'mb': { name: 'Megabytes', slug: 'mb', toBase: 1e6, category: 'converter', dimName: 'Data' },
  'gb': { name: 'Gigabytes', slug: 'gb', toBase: 1e9, category: 'converter', dimName: 'Data' },
  'tb': { name: 'Terabytes', slug: 'tb', toBase: 1e12, category: 'converter', dimName: 'Data' },

  // Speed
  'kmh': { name: 'Kilometers Per Hour', slug: 'kmh', toBase: 1 / 3.6, category: 'converter', dimName: 'Speed' },
  'mph': { name: 'Miles Per Hour', slug: 'mph', toBase: 0.44704, category: 'converter', dimName: 'Speed' },
  'knots': { name: 'Knots', slug: 'knots', toBase: 0.514444, category: 'converter', dimName: 'Speed' },
};

/**
 * Dynamically synthesizes high-intent SEO tools on the fly when requested by users or search crawlers.
 * Allows ToolNest to serve hundreds of thousands of long-tail search intent URLs with full working UI.
 */
export function synthesizeDynamicTool(category: string, slug: string): ToolDefinition | undefined {
  // 1. DYNAMIC PAIRWISE CONVERTER (e.g. gaj-to-bigha, tola-to-gram, sqm-to-acres, etc.)
  if (category === 'converter' && slug.includes('-to-')) {
    const parts = slug.split('-to-');
    if (parts.length === 2) {
      const fromSlug = parts[0].toLowerCase();
      const toSlug = parts[1].toLowerCase();
      const from = ALL_SYNTH_UNITS[fromSlug];
      const to = ALL_SYNTH_UNITS[toSlug];

      if (from && to && from.dimName === to.dimName && from.slug !== to.slug) {
        const ratio = from.toBase / to.toBase;
        const formattedRatio = ratio < 0.0001 ? ratio.toExponential(4) : ratio.toFixed(6).replace(/\.?0+$/, '');
        const name = `${from.name} to ${to.name} Converter`;
        const title = `${from.name} to ${to.name} Converter (1 ${from.slug} = ${formattedRatio} ${to.slug}) | ToolNest`;
        const desc = `Convert ${from.name} to ${to.name} (${from.slug} to ${to.slug}) instantly. 1 ${from.slug} = ${formattedRatio} ${to.slug}. Free online calculation with conversion formula, chart, and swap tool.`;

        return {
          id: `dyn-conv-${slug}`,
          name,
          slug,
          category: 'converter',
          description: desc,
          icon: 'ArrowLeftRight',
          keywords: [
            `${from.slug} to ${to.slug}`,
            `${from.name.toLowerCase()} to ${to.name.toLowerCase()}`,
            `convert ${from.slug} to ${to.slug}`,
            `how many ${to.slug} in a ${from.slug}`,
            `1 ${from.slug} in ${to.slug}`,
          ],
          seoTitle: title,
          seoDescription: desc,
          componentKey: 'universal-converter',
          popular: false,
          featured: false,
          content: {
            whatIs: `The ${name} is an instant, browser-based online calculator designed to convert ${from.name} into ${to.name} in real time with micro-precision.`,
            howToUse: [
              `Enter the amount in ${from.name} in the input box.`,
              `The equivalent value in ${to.name} calculates instantaneously.`,
              `Use the swap button (⇄) to reverse directions from ${to.name} to ${from.name}.`,
              'Copy your converted result with a single click.',
            ],
            formula: `${to.name} = ${from.name} × ${formattedRatio}`,
            example: `Convert 10 ${from.name} to ${to.name}:\n10 × ${formattedRatio} = ${(10 * ratio).toFixed(4)} ${to.name}`,
            benefits: [
              'Instant bidirectional conversion with 10-decimal precision.',
              '100% private, client-side math with zero server tracking.',
              'Completely free with no signups or software downloads required.',
            ],
            tips: [
              `To convert back from ${to.name} to ${from.name}, divide by ${formattedRatio} or click the swap button.`,
            ],
            faqs: [
              {
                question: `How many ${to.name} are in 1 ${from.name}?`,
                answer: `There are ${formattedRatio} ${to.name} in 1 ${from.name}.`,
              },
              {
                question: `What is the formula to convert ${from.name} to ${to.name}?`,
                answer: `Multiply your ${from.name} figure by ${formattedRatio} to obtain ${to.name}.`,
              },
            ],
          },
          relatedToolIds: ['converter-length', 'converter-area', 'converter-weight'],
          ...({
            ratio,
            fromUnit: from.name,
            toUnit: to.name,
            fromSymbol: from.slug,
            toSymbol: to.slug,
          } as unknown as Record<string, unknown>),
        };
      }
    }
  }

  // 2. DYNAMIC SIP CALCULATOR (e.g. 7500-per-month-sip-for-15-years)
  const sipMatch = slug.match(/^(\d+)-(?:per-month-)?sip(?:-for-(\d+)-years)?$/i);
  if (category === 'finance' && sipMatch) {
    const monthlyAmt = parseInt(sipMatch[1], 10);
    const yrs = sipMatch[2] ? parseInt(sipMatch[2], 10) : 10;
    if (monthlyAmt >= 100 && monthlyAmt <= 10000000 && yrs >= 1 && yrs <= 40) {
      const i = 0.12 / 12;
      const n = yrs * 12;
      const maturity = Math.round(monthlyAmt * ((Math.pow(1 + i, n) - 1) / i) * (1 + i));
      const invested = monthlyAmt * n;
      const gain = maturity - invested;
      const name = `₹${monthlyAmt.toLocaleString('en-IN')} Monthly SIP for ${yrs} Years Calculator`;

      return {
        id: `dyn-sip-${slug}`,
        name,
        slug,
        category: 'finance',
        description: `Calculate returns on ₹${monthlyAmt.toLocaleString('en-IN')} monthly SIP for ${yrs} years at 12% expected return. Expected maturity is ₹${maturity.toLocaleString('en-IN')}.`,
        icon: 'TrendingUp',
        keywords: [`${monthlyAmt} sip for ${yrs} years`, `${monthlyAmt} monthly sip calculator`, `sip return for ${monthlyAmt}`],
        seoTitle: `₹${monthlyAmt.toLocaleString('en-IN')} SIP for ${yrs} Years = ₹${maturity.toLocaleString('en-IN')} | SIP Calculator`,
        seoDescription: `Investing ₹${monthlyAmt.toLocaleString('en-IN')}/month for ${yrs} years gives ₹${maturity.toLocaleString('en-IN')} at 12% return. Total invested: ₹${invested.toLocaleString('en-IN')}, wealth gain: ₹${gain.toLocaleString('en-IN')}. Free calculator.`,
        componentKey: 'universal-sip',
        popular: false,
        featured: false,
        content: {
          whatIs: `The ${name} projects total maturity corpus and wealth gains when investing ₹${monthlyAmt.toLocaleString('en-IN')} every month into mutual funds for ${yrs} years at an assumed 12% annual compounding return.`,
          howToUse: [
            `Review your pre-set monthly investment of ₹${monthlyAmt.toLocaleString('en-IN')} over ${yrs} years.`,
            'Adjust expected return rate or duration if needed.',
            'View exact breakdown between invested capital and compounding returns.',
          ],
          formula: `M = P × [((1 + i)^n - 1) / i] × (1 + i) where P = ₹${monthlyAmt}, i = 12%/12, n = ${n} months`,
          example: `Total Invested: ₹${invested.toLocaleString('en-IN')}\nEstimated Wealth Gain (12%): ₹${gain.toLocaleString('en-IN')}\nTotal Maturity: ₹${maturity.toLocaleString('en-IN')}`,
          faqs: [
            {
              question: `How much will a ₹${monthlyAmt.toLocaleString('en-IN')} monthly SIP give after ${yrs} years?`,
              answer: `At an average 12% annual return rate, investing ₹${monthlyAmt.toLocaleString('en-IN')} per month for ${yrs} years yields approximately ₹${maturity.toLocaleString('en-IN')} (₹${invested.toLocaleString('en-IN')} invested + ₹${gain.toLocaleString('en-IN')} estimated gains).`,
            },
          ],
        },
        relatedToolIds: ['loan-emi-calculator', 'compound-interest-calculator'],
        ...({
          sipMonthly: monthlyAmt,
          sipYears: yrs,
        } as unknown as Record<string, unknown>),
      };
    }
  }

  // 3. DYNAMIC EMI CALCULATOR (e.g. 35-lakh-home-loan-emi-calculator)
  const emiMatch = slug.match(/^(\d+)-(?:lakh-)?(home-loan|personal-loan|car-loan)-emi(?:-calculator)?$/i);
  if (category === 'finance' && emiMatch) {
    const lakhVal = parseInt(emiMatch[1], 10);
    const loanType = emiMatch[2].toLowerCase();
    const principal = lakhVal * 100000;
    const rate = loanType === 'personal-loan' ? 12.0 : loanType === 'car-loan' ? 9.0 : 8.5;
    const tenure = loanType === 'personal-loan' ? 5 : loanType === 'car-loan' ? 7 : 20;

    const r = rate / 12 / 100;
    const n = tenure * 12;
    const emi = Math.round((principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    const totalPay = emi * n;
    const interest = totalPay - principal;

    const typeTitle = loanType.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    const name = `₹${lakhVal} Lakh ${typeTitle} EMI Calculator`;

    return {
      id: `dyn-emi-${slug}`,
      name,
      slug,
      category: 'finance',
      description: `Calculate monthly EMI for ₹${lakhVal} Lakh ${typeTitle.toLowerCase()} at ${rate}% interest for ${tenure} years. Monthly payment is ₹${emi.toLocaleString('en-IN')}.`,
      icon: 'Landmark',
      keywords: [`${lakhVal} lakh ${typeTitle.toLowerCase()} emi`, `₹${lakhVal} lakh emi calculator`, `emi on ${lakhVal} lakh loan`],
      seoTitle: `₹${lakhVal} Lakh ${typeTitle} EMI = ₹${emi.toLocaleString('en-IN')}/mo | Calculator`,
      seoDescription: `Monthly EMI on a ₹${lakhVal} Lakh ${typeTitle.toLowerCase()} at ${rate}% for ${tenure} years is ₹${emi.toLocaleString('en-IN')}. Total interest: ₹${interest.toLocaleString('en-IN')}. Free calculator.`,
      componentKey: 'universal-emi',
      popular: false,
      featured: false,
      content: {
        whatIs: `The ${name} calculates your monthly installment, interest cost, and total payable amount on a ₹${lakhVal} Lakh loan principal at ${rate}% over ${tenure} years.`,
        howToUse: [
          `Review the ₹${lakhVal} Lakh loan amount at ${rate}%.`,
          'Adjust interest rate or tenure according to your bank offer.',
          'View exact EMI and amortization summary.',
        ],
        formula: `EMI = [P × r × (1+r)^n] / [(1+r)^n - 1]`,
        example: `Monthly EMI: ₹${emi.toLocaleString('en-IN')}\nTotal Interest: ₹${interest.toLocaleString('en-IN')}\nTotal Payment: ₹${totalPay.toLocaleString('en-IN')}`,
        faqs: [
          {
            question: `What is the monthly EMI on a ₹${lakhVal} Lakh ${typeTitle.toLowerCase()}?`,
            answer: `At ${rate}% interest over ${tenure} years, your monthly EMI is ₹${emi.toLocaleString('en-IN')}. Total interest payable is ₹${interest.toLocaleString('en-IN')}.`,
          },
        ],
      },
      relatedToolIds: ['loan-emi-calculator', 'compound-interest-calculator'],
      ...({
        emiLoanAmount: principal,
        emiTenureYears: tenure,
        emiRate: rate,
      } as unknown as Record<string, unknown>),
    };
  }

  // 4. DYNAMIC LPA SALARY (e.g. 8-5-lpa-in-hand-salary)
  const lpaMatch = slug.match(/^(\d+(?:-\d+)?)-lpa-in-hand-salary$/i);
  if (category === 'career' && lpaMatch) {
    const lpaNum = parseFloat(lpaMatch[1].replace('-', '.'));
    if (lpaNum >= 1 && lpaNum <= 200) {
      const annualCtc = lpaNum * 100000;
      const monthlyCtc = annualCtc / 12;
      const basicMonthly = Math.round(monthlyCtc * 0.5);
      const employeePfMonthly = Math.min(1800, Math.round(basicMonthly * 0.12));
      const professionalTax = 200;
      const taxableIncome = Math.max(0, annualCtc - 75000);
      let annualTax = 0;
      if (taxableIncome > 700000) {
        if (taxableIncome <= 1000000) annualTax = (taxableIncome - 700000) * 0.10 + 20000;
        else if (taxableIncome <= 1200000) annualTax = (taxableIncome - 1000000) * 0.15 + 50000;
        else if (taxableIncome <= 1500000) annualTax = (taxableIncome - 1200000) * 0.20 + 80000;
        else annualTax = (taxableIncome - 1500000) * 0.30 + 140000;
        annualTax = Math.round(annualTax * 1.04);
      }
      const monthlyTax = Math.round(annualTax / 12);
      const inHand = Math.max(0, monthlyCtc - employeePfMonthly - professionalTax - monthlyTax);
      const name = `${lpaNum} LPA In Hand Salary Calculator`;

      return {
        id: `dyn-salary-${slug}`,
        name,
        slug,
        category: 'career',
        description: `Calculate monthly in-hand take home salary for ${lpaNum} LPA CTC in India. Estimated in-hand is ₹${Math.round(inHand).toLocaleString('en-IN')}/month.`,
        icon: 'DollarSign',
        keywords: [`${lpaNum} lpa in hand salary`, `${lpaNum} lakh ctc monthly in hand`, `${lpaNum} lpa salary`],
        seoTitle: `${lpaNum} LPA In Hand Salary: ₹${Math.round(inHand).toLocaleString('en-IN')}/Month Take Home | ToolNest`,
        seoDescription: `${lpaNum} LPA CTC gives approximately ₹${Math.round(inHand).toLocaleString('en-IN')} per month in-hand salary in India. Deductions for PF, PT, and Tax (New Regime). Free calculator.`,
        componentKey: 'universal-lpa-salary',
        popular: false,
        featured: false,
        content: {
          whatIs: `The ${name} calculates your estimated monthly take-home salary for a ${lpaNum} Lakh per Annum CTC package in India under the New Tax Regime.`,
          howToUse: [
            `Review your ${lpaNum} LPA salary breakdown.`,
            'Check monthly deductions for PF, Professional Tax, and Income Tax TDS.',
            'View annual take-home earnings.',
          ],
          formula: `Monthly In-Hand = Monthly CTC - PF - PT - TDS`,
          example: `Annual CTC: ₹${annualCtc.toLocaleString('en-IN')}\nMonthly In-Hand: ₹${Math.round(inHand).toLocaleString('en-IN')}\nAnnual In-Hand: ₹${Math.round(inHand * 12).toLocaleString('en-IN')}`,
          faqs: [
            {
              question: `How much is ${lpaNum} LPA in monthly in-hand salary?`,
              answer: `For a ${lpaNum} LPA package, your estimated in-hand monthly salary is ₹${Math.round(inHand).toLocaleString('en-IN')}.`,
            },
          ],
        },
        relatedToolIds: ['ctc-to-inhand-salary', 'salary-hike-calculator'],
        ...({
          lpaAmount: lpaNum,
        } as unknown as Record<string, unknown>),
      };
    }
  }

  // 5. DYNAMIC PERCENTAGE (e.g. what-is-35-percent-of-5000)
  const pctMatch = slug.match(/^what-is-(\d+(?:\.\d+)?)-percent-of(?:-(\d+))?$/i);
  if (category === 'math' && pctMatch) {
    const pct = parseFloat(pctMatch[1]);
    const num = pctMatch[2] ? parseFloat(pctMatch[2]) : 100;
    const ans = (pct * num) / 100;
    const name = `What is ${pct}% of ${num}? Calculator`;

    return {
      id: `dyn-pct-${slug}`,
      name,
      slug,
      category: 'math',
      description: `Calculate ${pct}% of ${num} instantly. Result is ${ans}. Easy formula and free online percentage calculator.`,
      icon: 'Percent',
      keywords: [`what is ${pct} percent of ${num}`, `${pct} percent of ${num}`, `how to calculate ${pct} percent of ${num}`],
      seoTitle: `What is ${pct}% of ${num}? Result = ${ans} | Calculator`,
      seoDescription: `${pct}% of ${num} is exactly ${ans}. Formula: (${pct} × ${num}) ÷ 100 = ${ans}. Instant online percentage calculator by ToolNest.`,
      componentKey: 'universal-percentage',
      popular: false,
      featured: false,
      content: {
        whatIs: `This calculator answers "What is ${pct}% of ${num}?" with step-by-step math and working demonstration.`,
        howToUse: [
          'Review the pre-filled percentage and base number.',
          'Change either value to calculate a new percentage on the fly.',
          'Copy the answer with one click.',
        ],
        formula: `Result = (${pct} × ${num}) ÷ 100 = ${ans}`,
        example: `${pct}% of ${num} = (${pct} × ${num}) ÷ 100 = ${ans}`,
        faqs: [
          {
            question: `What is ${pct}% of ${num}?`,
            answer: `${pct}% of ${num} is equal to ${ans}.`,
          },
        ],
      },
      relatedToolIds: ['calculator', 'percentage-calculator'],
      ...({
        percentageVal: pct,
      } as unknown as Record<string, unknown>),
    };
  }

  // 6. DYNAMIC PDF COMPRESSION (e.g. compress-pdf-to-200kb, compress-pdf-to-100kb, compress-pdf-to-500kb)
  const compressKbMatch = slug.match(/^compress-pdf-to-(\d+)kb$/i);
  if (category === 'pdf' && compressKbMatch) {
    const targetKb = parseInt(compressKbMatch[1], 10);
    const name = `Compress PDF to ${targetKb}KB Online Free`;

    return {
      id: `dyn-pdf-compress-${targetKb}kb`,
      name,
      slug,
      category: 'pdf',
      description: `Compress and reduce PDF file size down to ${targetKb}KB online for free. Ideal for job applications, university submissions, and government portals with strict file size caps. 100% private in-browser.`,
      icon: 'Minimize2',
      keywords: [
        `compress pdf to ${targetKb}kb`,
        `reduce pdf size to ${targetKb}kb online`,
        `compress pdf to ${targetKb} kb free`,
        `shrink pdf file size ${targetKb}kb`,
      ],
      seoTitle: `Compress PDF to ${targetKb}KB Online Free (No Uploads) | ToolNest`,
      seoDescription: `Reduce your PDF file size to ${targetKb}KB or less directly in your browser. 100% private WebAssembly processing with zero server uploads. Free download.`,
      componentKey: 'compress-pdf',
      popular: false,
      featured: false,
      content: {
        whatIs: `This tool optimizes and shrinks your heavy PDF documents to meet strict ${targetKb}KB file upload limits on government portals, job applications, visa services, and university admissions.`,
        howToUse: [
          'Upload your PDF file.',
          'Select the "Extreme Compression" mode to target the smallest possible file footprint.',
          'Click "Compress PDF" and download your optimized document under ' + targetKb + 'KB.',
        ],
        formula: 'Byte Stream Optimization + Font Vector Subsetting + Metadata Truncation',
        example: `Shrinking a 4.2 MB scanned Aadhaar card or marksheet down under ${targetKb} KB for immediate portal acceptance.`,
        benefits: [
          `Guaranteed to help pass strict ${targetKb}KB file upload validations.`,
          '100% Private: Documents never leave your device RAM.',
          'Leaves text sharp and legible for official verification.',
        ],
        faqs: [
          {
            question: `How do I compress a PDF to less than ${targetKb}KB?`,
            answer: `Select the Extreme Compression option. Our algorithm strips unnecessary metadata streams and optimizes vector tables to reach the ${targetKb}KB target.`,
          },
          {
            question: 'Will my text become blurry?',
            answer: 'No. Vector fonts and document text remain crisp and 100% readable even at reduced file sizes.',
          },
        ],
      },
      relatedToolIds: ['pdf-compress-pdf', 'pdf-merger', 'pdf-to-docx'],
    };
  }

  // 7. DYNAMIC IMAGE CONVERTER ALIASES (e.g. convert-png-to-jpg, convert-jpg-to-png, jpg-to-pdf-converter)
  if (category === 'pdf') {
    if (slug.match(/^(?:convert-)?png-to-jpg(?:-converter)?$/i)) {
      return {
        id: 'dyn-png-to-jpg',
        name: 'PNG to JPG Converter Online',
        slug,
        category: 'pdf',
        description: 'Convert PNG images to JPG format online for free. Compress image file size while keeping high visual clarity.',
        icon: 'Image',
        keywords: ['png to jpg', 'convert png to jpg', 'png to jpeg online free'],
        seoTitle: 'PNG to JPG Converter Free Online (No Uploads) | ToolNest',
        seoDescription: 'Convert PNG images to JPG format 100% in your browser. Fast, lossless client-side conversion without uploading files.',
        componentKey: 'png-to-jpg',
        popular: false,
        featured: false,
        content: {
          whatIs: 'Convert transparent or heavy PNG graphics into compressed JPG images suitable for web uploads and documents.',
          howToUse: ['Upload your PNG image.', 'Click Convert Image Format.', 'Download your JPG.'],
          faqs: [{ question: 'Is this conversion private?', answer: 'Yes, 100% client-side in browser RAM.' }],
        },
        relatedToolIds: ['pdf-jpg-to-png', 'pdf-image-resizer', 'pdf-compress-pdf'],
      };
    }

    if (slug.match(/^(?:convert-)?(?:jpg|jpeg)-to-pdf(?:-converter)?$/i)) {
      return {
        id: 'dyn-jpg-to-pdf',
        name: 'JPG to PDF Converter Online Free',
        slug,
        category: 'pdf',
        description: 'Convert JPG and JPEG photos to clean, multi-page PDF documents online. 100% private in-browser with zero server uploads.',
        icon: 'Image',
        keywords: ['jpg to pdf', 'convert jpg to pdf', 'jpeg to pdf converter online'],
        seoTitle: 'JPG to PDF Converter Free Online (No Server Uploads) | ToolNest',
        seoDescription: 'Convert multiple JPG photos into a single professional PDF document. Choose portrait or landscape layout with custom margins.',
        componentKey: 'image-to-pdf',
        popular: false,
        featured: false,
        content: {
          whatIs: 'Combine and convert JPG photos, scanned receipts, and IDs into an organized PDF file.',
          howToUse: ['Upload your JPG images.', 'Select orientation and margins.', 'Click Convert to PDF.'],
          faqs: [{ question: 'Can I combine multiple JPGs?', answer: 'Yes, upload multiple JPGs to make a multi-page PDF.' }],
        },
        relatedToolIds: ['pdf-to-docx', 'pdf-merger', 'pdf-compress-pdf'],
      };
    }
  }

  return undefined;
}
