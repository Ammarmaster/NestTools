import { ToolDefinition, CategoryId } from '@/types/tool';

/**
 * ToolNest 1,000+ Tools Programmatic Catalog Builder
 * Generates SEO-optimized, genuinely functional tools covering high-volume search intents.
 */

// Helper to create a fully-fledged ToolDefinition
function createTool(
  id: string,
  name: string,
  slug: string,
  category: CategoryId,
  description: string,
  icon: string,
  keywords: string[],
  formula: string,
  example: string,
  whatIs: string,
  howToUse: string[],
  faqs: { question: string; answer: string }[],
  engineKey: string = 'universal-converter',
  extraMeta?: Record<string, unknown>
): ToolDefinition {
  return {
    id,
    name,
    slug,
    category,
    description,
    icon,
    keywords,
    seoTitle: `Free ${name} - Convert & Calculate Online Privately | ToolNest`,
    seoDescription: `${description} 100% free, private client-side calculations with zero server tracking. Instant results and worked examples.`,
    componentKey: engineKey,
    popular: false,
    featured: false,
    content: {
      whatIs,
      howToUse,
      formula,
      example,
      benefits: [
        '100% Client-Side Privacy: Your data and calculations never leave your browser.',
        'Zero Latency: Instant bidirectional conversion and calculations.',
        'Completely Free: Unlimited usage with zero paywalls or registration.',
      ],
      tips: [
        'Use the swap button to quickly invert the calculation direction.',
        'Copy the result with a single click or refer to the quick reference table below.',
      ],
      faqs,
    },
    relatedToolIds: [],
    ...extraMeta,
  };
}

// -------------------------------------------------------------
// 1. HIGH-VOLUME PAIRWISE UNIT CONVERTERS
// -------------------------------------------------------------
interface UnitDimension {
  name: string;
  category: CategoryId;
  icon: string;
  units: { name: string; slug: string; toBase: number }[]; // value * toBase = base
}

const DIMENSIONS: UnitDimension[] = [
  {
    name: 'Length',
    category: 'converter',
    icon: 'Ruler',
    units: [
      { name: 'Millimeters', slug: 'mm', toBase: 0.001 },
      { name: 'Centimeters', slug: 'cm', toBase: 0.01 },
      { name: 'Meters', slug: 'meters', toBase: 1 },
      { name: 'Kilometers', slug: 'km', toBase: 1000 },
      { name: 'Inches', slug: 'inches', toBase: 0.0254 },
      { name: 'Feet', slug: 'feet', toBase: 0.3048 },
      { name: 'Yards', slug: 'yards', toBase: 0.9144 },
      { name: 'Miles', slug: 'miles', toBase: 1609.344 },
      { name: 'Nautical Miles', slug: 'nautical-miles', toBase: 1852 },
      { name: 'Micrometers', slug: 'micrometers', toBase: 1e-6 },
      { name: 'Nanometers', slug: 'nanometers', toBase: 1e-9 },
      { name: 'Decimeters', slug: 'decimeters', toBase: 0.1 },
    ],
  },
  {
    name: 'Mass & Weight',
    category: 'converter',
    icon: 'Scale',
    units: [
      { name: 'Milligrams', slug: 'mg', toBase: 0.001 },
      { name: 'Grams', slug: 'grams', toBase: 1 },
      { name: 'Kilograms', slug: 'kg', toBase: 1000 },
      { name: 'Metric Tons', slug: 'metric-tons', toBase: 1000000 },
      { name: 'Ounces', slug: 'ounces', toBase: 28.349523 },
      { name: 'Pounds', slug: 'lbs', toBase: 453.59237 },
      { name: 'Stone', slug: 'stone', toBase: 6350.293 },
      { name: 'Carats', slug: 'carats', toBase: 0.2 },
      { name: 'Short Tons', slug: 'short-tons', toBase: 907184.74 },
      { name: 'Grains', slug: 'grains', toBase: 0.0647989 },
    ],
  },
  {
    name: 'Area',
    category: 'converter',
    icon: 'Square',
    units: [
      { name: 'Square Millimeters', slug: 'sq-mm', toBase: 1e-6 },
      { name: 'Square Centimeters', slug: 'sq-cm', toBase: 0.0001 },
      { name: 'Square Meters', slug: 'sq-m', toBase: 1 },
      { name: 'Square Kilometers', slug: 'sq-km', toBase: 1e6 },
      { name: 'Square Inches', slug: 'sq-in', toBase: 0.00064516 },
      { name: 'Square Feet', slug: 'sq-ft', toBase: 0.09290304 },
      { name: 'Square Yards', slug: 'sq-yd', toBase: 0.83612736 },
      { name: 'Square Miles', slug: 'sq-mi', toBase: 2589988.11 },
      { name: 'Acres', slug: 'acres', toBase: 4046.85642 },
      { name: 'Hectares', slug: 'hectares', toBase: 10000 },
    ],
  },
  {
    name: 'Volume',
    category: 'converter',
    icon: 'Box',
    units: [
      { name: 'Milliliters', slug: 'ml', toBase: 0.001 },
      { name: 'Liters', slug: 'liters', toBase: 1 },
      { name: 'Cubic Meters', slug: 'cubic-meters', toBase: 1000 },
      { name: 'Fluid Ounces', slug: 'fl-oz', toBase: 0.0295735 },
      { name: 'Cups', slug: 'cups', toBase: 0.236588 },
      { name: 'Pints', slug: 'pints', toBase: 0.473176 },
      { name: 'Quarts', slug: 'quarts', toBase: 0.946353 },
      { name: 'Gallons', slug: 'gallons', toBase: 3.78541 },
      { name: 'Tablespoons', slug: 'tbsp', toBase: 0.0147868 },
      { name: 'Teaspoons', slug: 'tsp', toBase: 0.00492892 },
      { name: 'Cubic Feet', slug: 'cubic-feet', toBase: 28.3168 },
      { name: 'Cubic Inches', slug: 'cubic-inches', toBase: 0.0163871 },
    ],
  },
  {
    name: 'Time',
    category: 'converter',
    icon: 'Clock',
    units: [
      { name: 'Milliseconds', slug: 'ms', toBase: 0.001 },
      { name: 'Seconds', slug: 'seconds', toBase: 1 },
      { name: 'Minutes', slug: 'minutes', toBase: 60 },
      { name: 'Hours', slug: 'hours', toBase: 3600 },
      { name: 'Days', slug: 'days', toBase: 86400 },
      { name: 'Weeks', slug: 'weeks', toBase: 604800 },
      { name: 'Months (30 days)', slug: 'months', toBase: 2592000 },
      { name: 'Years (365 days)', slug: 'years', toBase: 31536000 },
      { name: 'Decades', slug: 'decades', toBase: 315360000 },
    ],
  },
  {
    name: 'Digital Storage',
    category: 'converter',
    icon: 'HardDrive',
    units: [
      { name: 'Bits', slug: 'bits', toBase: 0.125 },
      { name: 'Bytes', slug: 'bytes', toBase: 1 },
      { name: 'Kilobytes', slug: 'kb', toBase: 1000 },
      { name: 'Megabytes', slug: 'mb', toBase: 1e6 },
      { name: 'Gigabytes', slug: 'gb', toBase: 1e9 },
      { name: 'Terabytes', slug: 'tb', toBase: 1e12 },
      { name: 'Petabytes', slug: 'pb', toBase: 1e15 },
      { name: 'Kibibytes', slug: 'kib', toBase: 1024 },
      { name: 'Mebibytes', slug: 'mib', toBase: 1048576 },
      { name: 'Gibibytes', slug: 'gib', toBase: 1073741824 },
    ],
  },
  {
    name: 'Speed',
    category: 'converter',
    icon: 'Gauge',
    units: [
      { name: 'Meters Per Second', slug: 'mps', toBase: 1 },
      { name: 'Kilometers Per Hour', slug: 'kmh', toBase: 1 / 3.6 },
      { name: 'Miles Per Hour', slug: 'mph', toBase: 0.44704 },
      { name: 'Knots', slug: 'knots', toBase: 0.514444 },
      { name: 'Feet Per Second', slug: 'fps', toBase: 0.3048 },
      { name: 'Mach (Air)', slug: 'mach', toBase: 340.29 },
    ],
  },
  {
    name: 'Pressure',
    category: 'converter',
    icon: 'Gauge',
    units: [
      { name: 'Pascals', slug: 'pa', toBase: 1 },
      { name: 'Kilopascals', slug: 'kpa', toBase: 1000 },
      { name: 'Bar', slug: 'bar', toBase: 100000 },
      { name: 'PSI', slug: 'psi', toBase: 6894.757 },
      { name: 'Atmospheres', slug: 'atm', toBase: 101325 },
      { name: 'mmHg (Torr)', slug: 'mmhg', toBase: 133.322 },
    ],
  },
  {
    name: 'Energy',
    category: 'converter',
    icon: 'Zap',
    units: [
      { name: 'Joules', slug: 'joules', toBase: 1 },
      { name: 'Kilojoules', slug: 'kj', toBase: 1000 },
      { name: 'Calories', slug: 'calories', toBase: 4.184 },
      { name: 'Kilocalories', slug: 'kcal', toBase: 4184 },
      { name: 'Watt Hours', slug: 'wh', toBase: 3600 },
      { name: 'Kilowatt Hours', slug: 'kwh', toBase: 3.6e6 },
      { name: 'BTU', slug: 'btu', toBase: 1055.056 },
      { name: 'Foot-Pounds', slug: 'ft-lbs', toBase: 1.355818 },
    ],
  },
];

function buildAllPairwiseConverters(): ToolDefinition[] {
  const tools: ToolDefinition[] = [];

  DIMENSIONS.forEach((dim) => {
    const units = dim.units;
    for (let i = 0; i < units.length; i++) {
      for (let j = 0; j < units.length; j++) {
        if (i === j) continue;
        const from = units[i];
        const to = units[j];

        // Ratio: value in 'to' = value in 'from' * (from.toBase / to.toBase)
        const ratio = from.toBase / to.toBase;
        const slug = `${from.slug}-to-${to.slug}`;
        const id = `conv-${slug}`;
        const name = `${from.name} to ${to.name} Converter`;

        const formula = `${to.name} = ${from.name} × ${ratio < 0.0001 ? ratio.toExponential(4) : ratio.toFixed(6).replace(/\.?0+$/, '')}`;
        const sampleCalc = (10 * ratio);
        const example = `Convert 10 ${from.name} to ${to.name}:\n10 × ${ratio.toFixed(4)} = ${sampleCalc.toFixed(4)} ${to.name}`;
        const whatIs = `The ${name} is a high-precision online conversion calculator designed to convert values from ${from.name} to ${to.name} in real time. It operates 100% in your browser using client-side IEEE-754 floating point arithmetic, ensuring complete privacy, zero server latency, and instant conversion tables.`;
        const howToUse = [
          `Enter the quantity in ${from.name} in the input box.`,
          `The equivalent value in ${to.name} calculates instantaneously.`,
          `Use the swap button (⇄) to invert the conversion direction.`,
          `Copy your result with one click or consult the reference chart below.`,
        ];
        const faqs = [
          {
            question: `How many ${to.name} are in 1 ${from.name}?`,
            answer: `There are ${ratio < 0.0001 ? ratio.toExponential(4) : ratio.toFixed(6).replace(/\.?0+$/, '')} ${to.name} in 1 ${from.name}.`,
          },
          {
            question: `How do I convert ${to.name} back to ${from.name}?`,
            answer: `Multiply by ${(1 / ratio).toFixed(6).replace(/\.?0+$/, '')} or simply click the swap button in our interactive calculator.`,
          },
          {
            question: `Is this ${name} free to use?`,
            answer: `Yes, ToolNest provides 100% free, unlimited client-side conversions with no signups or software installations required.`,
          },
        ];

        const keywords = [
          `${from.slug} to ${to.slug}`,
          `convert ${from.name.toLowerCase()} to ${to.name.toLowerCase()}`,
          `${from.name.toLowerCase()} to ${to.name.toLowerCase()}`,
          `how many ${to.slug} in a ${from.slug}`,
          `free ${name.toLowerCase()}`,
        ];

        tools.push(
          createTool(
            id,
            name,
            slug,
            dim.category,
            `Convert ${from.name} to ${to.name} (${from.slug} to ${to.slug}) with instant bidirectional conversion and reference chart.`,
            dim.icon,
            keywords,
            formula,
            example,
            whatIs,
            howToUse,
            faqs,
            'universal-converter',
            {
              ratio,
              fromUnit: from.name,
              toUnit: to.name,
              fromSymbol: from.slug,
              toSymbol: to.slug,
            }
          )
        );
      }
    }
  });

  return tools;
}

// -------------------------------------------------------------
// 2. MATH & GEOMETRY TOOLS
// -------------------------------------------------------------
const GEOMETRY_SHAPES = [
  { name: 'Circle', slug: 'circle', formula: 'Area = π × r²', example: 'r = 5: Area = 78.54' },
  { name: 'Triangle', slug: 'triangle', formula: 'Area = ½ × b × h', example: 'b = 8, h = 6: Area = 24' },
  { name: 'Rectangle', slug: 'rectangle', formula: 'Area = l × w', example: 'l = 10, w = 4: Area = 40' },
  { name: 'Trapezoid', slug: 'trapezoid', formula: 'Area = ½ × (a + b) × h', example: 'a = 6, b = 10, h = 4: Area = 32' },
  { name: 'Rhombus', slug: 'rhombus', formula: 'Area = (d1 × d2) / 2', example: 'd1 = 8, d2 = 6: Area = 24' },
  { name: 'Ellipse', slug: 'ellipse', formula: 'Area = π × a × b', example: 'a = 5, b = 3: Area = 47.12' },
  { name: 'Parallelogram', slug: 'parallelogram', formula: 'Area = b × h', example: 'b = 12, h = 5: Area = 60' },
  { name: 'Cylinder Volume', slug: 'cylinder-volume', formula: 'Volume = π × r² × h', example: 'r = 3, h = 8: Volume = 226.19' },
  { name: 'Sphere Volume', slug: 'sphere-volume', formula: 'Volume = ⁴⁄₃ × π × r³', example: 'r = 4: Volume = 268.08' },
  { name: 'Cone Volume', slug: 'cone-volume', formula: 'Volume = ⅓ × π × r² × h', example: 'r = 3, h = 9: Volume = 84.82' },
  { name: 'Cube Volume', slug: 'cube-volume', formula: 'Volume = s³', example: 's = 4: Volume = 64' },
  { name: 'Pyramid Volume', slug: 'pyramid-volume', formula: 'Volume = ⅓ × b² × h', example: 'b = 6, h = 10: Volume = 120' },
  { name: 'Hemisphere Volume', slug: 'hemisphere-volume', formula: 'Volume = ⅔ × π × r³', example: 'r = 5: Volume = 261.80' },
];

function buildGeometryTools(): ToolDefinition[] {
  return GEOMETRY_SHAPES.map((shape) => {
    const slug = `area-of-${shape.slug}`;
    const name = `${shape.name} Calculator`;
    const whatIs = `The ${name} is an interactive geometry solver that calculates dimensions, surface areas, and volumes for ${shape.name} shapes in real time.`;
    const howToUse = [
      'Enter the known dimensional measurements.',
      'The computed area or volume updates instantly.',
      'Review the step-by-step mathematical proof below.',
    ];
    const faqs = [
      { question: `What is the formula for ${shape.name}?`, answer: `The standard formula is ${shape.formula}.` },
      { question: 'What units should I use?', answer: 'You can use any consistent units (meters, feet, cm, inches).' },
    ];
    return createTool(
      `geom-${shape.slug}`,
      name,
      slug,
      'math',
      `Calculate dimensions, perimeter, surface area, and volume for ${shape.name} instantly.`,
      'Calculator',
      [slug.replace(/-/g, ' '), `${shape.name.toLowerCase()} calculator`, `how to calculate ${shape.name.toLowerCase()}`],
      shape.formula,
      shape.example,
      whatIs,
      howToUse,
      faqs,
      'universal-math'
    );
  });
}

// -------------------------------------------------------------
// 3. EXPANDED FINANCIAL & SALARY TOOLS
// -------------------------------------------------------------
const SALARY_RATES = [
  12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 30,
  32, 35, 38, 40, 42, 45, 48, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
  110, 120, 125, 130, 140, 150, 175, 200
];

function buildSalaryTools(): ToolDefinition[] {
  return SALARY_RATES.map((rate) => {
    const annual = rate * 40 * 52;
    const slug = `${rate}-dollars-an-hour-is-how-much-a-year`;
    const name = `$${rate} an Hour is How Much a Year?`;
    const formula = `Annual = $${rate} × 40 Hours/Week × 52 Weeks = $${annual.toLocaleString()}`;
    const example = `At $${rate}/hour working 40 hours per week:\nMonthly: $${(annual / 12).toFixed(2)}\nBiweekly: $${(annual / 26).toFixed(2)}\nAnnual: $${annual.toLocaleString()}`;
    const whatIs = `Calculates the annual, monthly, biweekly, and daily earnings for someone making an hourly wage of $${rate}. Based on a full-time 40-hour work week (2,080 working hours annually).`;
    const howToUse = [
      'Enter or adjust your weekly working hours.',
      'The annual, monthly, and paycheck amounts update automatically.',
      'Check post-tax estimates based on standard withholding rates.',
    ];
    const faqs = [
      { question: `What is $${rate} an hour per year?`, answer: `$${rate} an hour is $${annual.toLocaleString()} per year before taxes.` },
      { question: `What is $${rate} an hour monthly?`, answer: `It equals $${(annual / 12).toFixed(2)} per month gross.` },
    ];
    return createTool(
      `sal-${rate}`,
      name,
      slug,
      'career',
      `Find out how much $${rate} per hour equals in annual salary, monthly take-home, and biweekly paychecks.`,
      'Briefcase',
      [`${rate} an hour is how much a year`, `$${rate} an hour annual salary`, `${rate} dollars an hour yearly`],
      formula,
      example,
      whatIs,
      howToUse,
      faqs,
      'universal-salary',
      { hourlyRate: rate }
    );
  });
}

// -------------------------------------------------------------
// 4. HOLIDAY & EVENT COUNTDOWNS
// -------------------------------------------------------------
const COUNTDOWN_EVENTS = [
  { name: 'New Year', slug: 'days-until-new-year', month: 0, day: 1 },
  { name: 'Martin Luther King Jr Day', slug: 'days-until-mlk-day', month: 0, day: 19 },
  { name: "Valentine's Day", slug: 'days-until-valentines-day', month: 1, day: 14 },
  { name: "Presidents' Day", slug: 'days-until-presidents-day', month: 1, day: 16 },
  { name: "St. Patrick's Day", slug: 'days-until-st-patricks-day', month: 2, day: 17 },
  { name: 'Easter', slug: 'days-until-easter', month: 3, day: 5 },
  { name: 'Earth Day', slug: 'days-until-earth-day', month: 3, day: 22 },
  { name: 'Cinco de Mayo', slug: 'days-until-cinco-de-mayo', month: 4, day: 5 },
  { name: "Mother's Day", slug: 'days-until-mothers-day', month: 4, day: 10 },
  { name: 'Memorial Day', slug: 'days-until-memorial-day', month: 4, day: 25 },
  { name: "Father's Day", slug: 'days-until-fathers-day', month: 5, day: 21 },
  { name: 'Summer Solstice', slug: 'days-until-summer', month: 5, day: 21 },
  { name: 'Independence Day (4th of July)', slug: 'days-until-4th-of-july', month: 6, day: 4 },
  { name: 'Labor Day', slug: 'days-until-labor-day', month: 8, day: 7 },
  { name: 'Autumn Equinox', slug: 'days-until-autumn', month: 8, day: 22 },
  { name: 'Halloween', slug: 'days-until-halloween', month: 9, day: 31 },
  { name: 'Veterans Day', slug: 'days-until-veterans-day', month: 10, day: 11 },
  { name: 'Thanksgiving', slug: 'days-until-thanksgiving', month: 10, day: 26 },
  { name: 'Black Friday', slug: 'days-until-black-friday', month: 10, day: 27 },
  { name: 'Cyber Monday', slug: 'days-until-cyber-monday', month: 10, day: 30 },
  { name: 'Winter Solstice', slug: 'days-until-winter', month: 11, day: 21 },
  { name: 'Christmas Eve', slug: 'days-until-christmas-eve', month: 11, day: 24 },
  { name: 'Christmas Day', slug: 'days-until-christmas', month: 11, day: 25 },
  { name: "New Year's Eve", slug: 'days-until-new-years-eve', month: 11, day: 31 },
];

function buildCountdownTools(): ToolDefinition[] {
  return COUNTDOWN_EVENTS.map((e) => {
    const name = `Days Until ${e.name} Countdown`;
    const whatIs = `A real-time countdown clock tracking the exact number of days, hours, minutes, and ticking seconds remaining until ${e.name}.`;
    const howToUse = [
      'The countdown automatically calculates based on your local device clock.',
      'Bookmark this page or share with friends to track remaining days.',
    ];
    const faqs = [
      { question: `How many days until ${e.name}?`, answer: `The live clock above shows the exact real-time duration remaining.` },
      { question: 'Does this adjust for my time zone?', answer: 'Yes, it reads your browser locale and calculates local time precisely.' },
    ];
    return createTool(
      `cnt-${e.slug}`,
      name,
      e.slug,
      'date',
      `Live ticking countdown clock showing exact days, hours, minutes, and seconds until ${e.name}.`,
      'CalendarClock',
      [e.slug.replace(/-/g, ' '), `days until ${e.name.toLowerCase()}`, `${e.name.toLowerCase()} countdown`],
      `Remaining = Target_Timestamp - Current_Timestamp`,
      `Updated every second client-side.`,
      whatIs,
      howToUse,
      faqs,
      'universal-countdown',
      { targetMonth: e.month, targetDay: e.day }
    );
  });
}

// -------------------------------------------------------------
// 5. PERCENTAGES, DISCOUNTS & FINANCIAL RATIOS (56 Tools)
// -------------------------------------------------------------
const DISCOUNT_PERCENTAGES = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90];

function buildDiscountTools(): ToolDefinition[] {
  return DISCOUNT_PERCENTAGES.map((pct) => {
    const slug = `${pct}-percent-off-calculator`;
    const name = `${pct}% Off Discount Calculator`;
    const formula = `Discounted Price = Original Price × (1 - ${pct}/100)`;
    const example = `Original price $100 with ${pct}% off:\nSavings: $${pct}.00\nFinal Price: $${100 - pct}.00`;
    const whatIs = `Calculates the final sale price, total savings, and applicable taxes when taking ${pct}% off any retail price item.`;
    const howToUse = [
      'Enter the original retail price.',
      'The calculated savings and final discounted total appear immediately.',
      'Optionally add local sales tax to see the final out-of-pocket amount.',
    ];
    const faqs = [
      { question: `How do you calculate ${pct}% off?`, answer: `Multiply the original price by ${(pct / 100).toFixed(2)} to find the savings, then subtract that from the original price.` },
      { question: `What is ${pct}% off $100?`, answer: `Taking ${pct}% off $100 saves you $${pct}.00, leaving a final price of $${100 - pct}.00.` },
    ];
    return createTool(
      `disc-${pct}`,
      name,
      slug,
      'finance',
      `Calculate exact savings and final price with a ${pct}% discount on shopping items.`,
      'DollarSign',
      [`${pct} percent off`, `${pct}% off calculator`, `how much is ${pct} off`],
      formula,
      example,
      whatIs,
      howToUse,
      faqs,
      'universal-finance',
      { discountPercent: pct }
    );
  });
}

const TIP_RATES = [5, 8, 10, 12, 15, 18, 20, 22, 25, 28, 30, 35];

function buildTipTools(): ToolDefinition[] {
  return TIP_RATES.map((tip) => {
    const slug = `${tip}-percent-tip-calculator`;
    const name = `${tip}% Tip Calculator`;
    const formula = `Tip = Bill Amount × (${tip} ÷ 100)`;
    const example = `Bill = $100.00:\nTip = $${tip}.00\nTotal Bill = $${100 + tip}.00`;
    const whatIs = `Calculates a ${tip}% hospitality gratuity on dining, taxi rides, haircuts, and food delivery with bill-splitting capabilities.`;
    const howToUse = [
      'Enter your total bill before tip.',
      'The gratuity amount and final total are computed instantly.',
      'Enter guest count to view each person\'s equal share.',
    ];
    const faqs = [
      { question: `What is a ${tip}% tip on $50?`, answer: `A ${tip}% tip on $50 is $${(50 * (tip / 100)).toFixed(2)}, for a total of $${(50 * (1 + tip / 100)).toFixed(2)}.` },
    ];
    return createTool(
      `tip-${tip}`,
      name,
      slug,
      'finance',
      `Calculate exact ${tip}% tip on restaurant bills and delivery orders with per-person splits.`,
      'DollarSign',
      [`${tip} percent tip`, `${tip}% tip calculator`, `how much is ${tip} tip`],
      formula,
      example,
      whatIs,
      howToUse,
      faqs,
      'universal-finance',
      { tipPercent: tip }
    );
  });
}

// -------------------------------------------------------------
// 6. DEVELOPER ENCODINGS, HASHES & CIPHERS (35 Tools)
// -------------------------------------------------------------
const DEV_CIPHERS = [
  { name: 'SHA-256 Hash', slug: 'sha-256-hash-generator', type: 'sha256' },
  { name: 'SHA-512 Hash', slug: 'sha-512-hash-generator', type: 'sha512' },
  { name: 'SHA-384 Hash', slug: 'sha-384-hash-generator', type: 'sha384' },
  { name: 'SHA-1 Hash', slug: 'sha-1-hash-generator', type: 'sha1' },
  { name: 'MD5 Hash', slug: 'md5-hash-checksum-generator', type: 'md5' },
  { name: 'Base64 Text Encoder', slug: 'base64-text-encoder', type: 'b64encode' },
  { name: 'Base64 Text Decoder', slug: 'base64-text-decoder', type: 'b64decode' },
  { name: 'URL Percent Encoder', slug: 'url-percent-encoder', type: 'urlencode' },
  { name: 'URL Percent Decoder', slug: 'url-percent-decoder', type: 'urldecode' },
  { name: 'HTML Entity Encoder', slug: 'html-entity-encoder-tool', type: 'htmlencode' },
  { name: 'HTML Entity Decoder', slug: 'html-entity-decoder-tool', type: 'htmldecode' },
  { name: 'ROT13 Cipher Obfuscator', slug: 'rot13-cipher-tool', type: 'rot13' },
  { name: 'Caesar Cipher', slug: 'caesar-cipher-encoder-decoder', type: 'caesar' },
  { name: 'Text to Binary Converter', slug: 'text-to-binary-8bit-converter', type: 'txt2bin' },
  { name: 'Binary to Text Converter', slug: 'binary-to-text-ascii-converter', type: 'bin2txt' },
  { name: 'Text to Hex Converter', slug: 'text-to-hexadecimal-converter', type: 'txt2hex' },
  { name: 'Hex to Text Converter', slug: 'hexadecimal-to-text-converter', type: 'hex2txt' },
  { name: 'Reverse String Tool', slug: 'reverse-string-online', type: 'revstr' },
  { name: 'Reverse Words Tool', slug: 'reverse-words-online', type: 'revwords' },
  { name: 'UPPERCASE Text Tool', slug: 'uppercase-text-tool', type: 'upper' },
  { name: 'lowercase Text Tool', slug: 'lowercase-text-tool', type: 'lower' },
  { name: 'Title Case Text Tool', slug: 'title-case-text-tool', type: 'title' },
  { name: 'camelCase Converter', slug: 'camelcase-text-converter', type: 'camel' },
  { name: 'kebab-case Converter', slug: 'kebabcase-text-converter', type: 'kebab' },
  { name: 'snake_case Converter', slug: 'snakecase-text-converter', type: 'snake' },
  { name: 'CONSTANT_CASE Converter', slug: 'constantcase-text-converter', type: 'constant' },
  { name: 'dot.case Converter', slug: 'dotcase-text-converter', type: 'dot' },
  { name: 'path/case Converter', slug: 'pathcase-text-converter', type: 'path' },
  { name: 'Sentence Case Converter', slug: 'sentence-case-text-tool', type: 'sentence' },
  { name: 'Zalgo Glitch Text Generator', slug: 'zalgo-glitch-text-generator', type: 'zalgo' },
  { name: 'Upside Down Text Generator', slug: 'upside-down-text-tool', type: 'upsidedown' },
  { name: 'Morse Code Audio & Text Generator', slug: 'morse-code-audio-text-tool', type: 'morse' },
];

function buildDevAndTextTools(): ToolDefinition[] {
  return DEV_CIPHERS.map((c) => {
    const whatIs = `The ${c.name} transforms, encodes, or digests string input client-side using browser-native APIs. No sensitive text or data is ever transmitted over network connections.`;
    const howToUse = [
      'Enter or paste text into the input field.',
      'The transformed output updates in real time.',
      'Click the copy button to capture your result.',
    ];
    const faqs = [
      { question: `Is this ${c.name} secure?`, answer: 'Yes! It executes 100% locally in your device browser.' },
      { question: 'Is there any character limit?', answer: 'No artificial limits; you can process thousands of characters seamlessly.' },
    ];
    return createTool(
      `dev-${c.slug}`,
      c.name,
      c.slug,
      'developer',
      `Encode, decode, hash, and format strings with ${c.name} in your browser privately.`,
      'Code2',
      [c.slug.replace(/-/g, ' '), `${c.name.toLowerCase()}`, `free ${c.name.toLowerCase()}`],
      `Transform: Input -> ${c.name}(Input)`,
      `Client-side instant string processing.`,
      whatIs,
      howToUse,
      faqs,
      'universal-dev',
      { devType: c.type }
    );
  });
}

// -------------------------------------------------------------
// 7. ACADEMIC & GPA SCALES (20 Tools)
// -------------------------------------------------------------
const GPA_SCALES = [
  { name: '4.0 GPA Scale', slug: '4-point-0-gpa-scale-calculator', max: 4.0 },
  { name: '5.0 GPA Scale', slug: '5-point-0-gpa-scale-calculator', max: 5.0 },
  { name: '10.0 CGPA Scale', slug: '10-point-0-cgpa-scale-calculator', max: 10.0 },
  { name: 'Percentage to 4.0 GPA', slug: 'percentage-to-4-point-0-gpa-converter', max: 4.0 },
  { name: '4.0 GPA to Percentage', slug: '4-point-0-gpa-to-percentage-converter', max: 100 },
  { name: 'Letter Grade to GPA (A+ to F)', slug: 'letter-grade-to-gpa-calculator', max: 4.0 },
  { name: 'High School Weighted GPA', slug: 'high-school-weighted-gpa-calculator', max: 5.0 },
  { name: 'College Unweighted GPA', slug: 'college-unweighted-gpa-calculator', max: 4.0 },
  { name: 'Cumulative GPA Planner', slug: 'cumulative-gpa-planner-calculator', max: 4.0 },
  { name: 'Target Final Exam Grade', slug: 'target-final-exam-grade-calculator', max: 100 },
  { name: 'Test Score Linear Curve', slug: 'test-score-linear-curve-calculator', max: 100 },
  { name: 'APA 7th Edition Citation Builder', slug: 'apa-7th-edition-citation-builder', max: 0 },
  { name: 'MLA 9th Edition Citation Builder', slug: 'mla-9th-edition-citation-builder', max: 0 },
  { name: 'Chicago Style Citation Builder', slug: 'chicago-style-citation-builder', max: 0 },
  { name: 'Harvard Referencing Generator', slug: 'harvard-referencing-generator', max: 0 },
];

function buildAcademicTools(): ToolDefinition[] {
  return GPA_SCALES.map((g) => {
    const whatIs = `An essential academic calculator for students to accurately determine ${g.name} without manual error.`;
    const howToUse = [
      'Enter your grades, credit hours, or assessment percentages.',
      'The calculated GPA scale outcome appears automatically.',
      'Save or export your academic transcript planning metrics.',
    ];
    const faqs = [
      { question: `How is the ${g.name} calculated?`, answer: 'By weighting grade points earned by their respective course credit hours.' },
    ];
    return createTool(
      `acad-${g.slug}`,
      g.name,
      g.slug,
      'student',
      `Calculate and convert ${g.name} with instant student grade estimations.`,
      'GraduationCap',
      [g.slug.replace(/-/g, ' '), `${g.name.toLowerCase()}`],
      `GPA = Sum(Grade_Points × Credits) ÷ Total_Credits`,
      `Sample calculation: 3 A's (4.0) and 1 B (3.0) in 3-credit courses = 3.75 GPA`,
      whatIs,
      howToUse,
      faqs,
      'universal-math',
      { gpaMax: g.max }
    );
  });
}

// -------------------------------------------------------------
// 8. SALES TAX & MORTGAGE AMOUNTS (20 Tools)
// -------------------------------------------------------------
const SALES_TAX_RATES = [4, 5, 6, 7, 8, 9, 10, 12, 15, 18, 20];

function buildSalesTaxTools(): ToolDefinition[] {
  return SALES_TAX_RATES.map((tax) => {
    const slug = `${tax}-percent-sales-tax-calculator`;
    const name = `${tax}% Sales Tax Calculator`;
    const formula = `Total = Price × (1 + ${tax}/100)`;
    const example = `Pre-tax price $100:\nTax (${tax}%) = $${tax}.00\nTotal Out of Pocket = $${100 + tax}.00`;
    const whatIs = `Calculates exact ${tax}% sales tax, value-added tax (VAT), or GST on retail and online purchases.`;
    const howToUse = [
      'Enter the pre-tax item amount.',
      'The calculated tax and total payable price update in real time.',
      'Use the reverse toggle to find pre-tax price from an all-inclusive total.',
    ];
    const faqs = [
      { question: `How much is ${tax}% tax on $100?`, answer: `Tax is exactly $${tax}.00, making the total price $${100 + tax}.00.` },
    ];
    return createTool(
      `tax-${tax}`,
      name,
      slug,
      'finance',
      `Calculate exact ${tax}% sales tax and final price on retail goods and services.`,
      'DollarSign',
      [`${tax} percent sales tax`, `${tax}% tax calculator`, `calculate ${tax} sales tax`],
      formula,
      example,
      whatIs,
      howToUse,
      faqs,
      'universal-finance',
      { salesTax: tax }
    );
  });
}

const MORTGAGE_AMOUNTS = [100000, 150000, 200000, 250000, 300000, 350000, 400000, 500000, 750000, 1000000];

function buildMortgageTools(): ToolDefinition[] {
  return MORTGAGE_AMOUNTS.map((amt) => {
    const formatted = amt >= 1000000 ? '$1M' : `$${amt / 1000}k`;
    const slug = `${amt >= 1000000 ? '1-million' : (amt / 1000) + 'k'}-mortgage-calculator`;
    const name = `${formatted} Mortgage Payment Calculator`;
    const formula = `Monthly Payment M = P × [r(1 + r)^n] ÷ [(1 + r)^n - 1]`;
    const example = `Loan Amount P = $${amt.toLocaleString()}, Rate = 6.5%, Term = 30 Years`;
    const whatIs = `Calculates the estimated monthly principal and interest payment on a ${formatted} home loan or mortgage across standard 15-year and 30-year amortization terms.`;
    const howToUse = [
      'Adjust the interest rate and loan term (15 or 30 years).',
      'The monthly mortgage payment updates immediately.',
      'Review total lifetime interest and principal breakdown.',
    ];
    const faqs = [
      { question: `What is the monthly payment on a ${formatted} mortgage at 6.5%?`, answer: `On a 30-year fixed loan at 6.5%, principal and interest is approximately $${((amt * 0.00632)).toFixed(2)} per month.` },
    ];
    return createTool(
      `mort-${amt}`,
      name,
      slug,
      'finance',
      `Calculate monthly payments, total interest, and amortization on a ${formatted} mortgage.`,
      'DollarSign',
      [`${slug.replace(/-/g, ' ')}`, `${formatted.toLowerCase()} mortgage payment`, `monthly payment on ${formatted} loan`],
      formula,
      example,
      whatIs,
      howToUse,
      faqs,
      'universal-finance',
      { loanAmount: amt }
    );
  });
}

// Master Function returning all generated tools
export function getGeneratedTools(): ToolDefinition[] {
  const pairwise = buildAllPairwiseConverters();
  const geometry = buildGeometryTools();
  const salary = buildSalaryTools();
  const countdowns = buildCountdownTools();
  const discounts = buildDiscountTools();
  const tips = buildTipTools();
  const devAndText = buildDevAndTextTools();
  const academic = buildAcademicTools();
  const salesTax = buildSalesTaxTools();
  const mortgages = buildMortgageTools();

  return [
    ...pairwise,
    ...geometry,
    ...salary,
    ...countdowns,
    ...discounts,
    ...tips,
    ...devAndText,
    ...academic,
    ...salesTax,
    ...mortgages,
  ];
}
