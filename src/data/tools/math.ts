import { ToolDefinition } from '@/types/tool';

export const MATH_TOOLS: ToolDefinition[] = [
  {
    id: 'calculator',
    name: 'Basic Calculator',
    slug: 'calculator',
    category: 'math',
    description: 'A fast, sleek standard calculator for everyday arithmetic with keyboard support, operation memory, and calculation history.',
    icon: 'Calculator',
    keywords: ['basic calculator', 'online calculator', 'math calculator', 'simple calculator', 'free calculator'],
    seoTitle: 'Basic Online Calculator – Fast & Simple Arithmetic | ToolNest',
    seoDescription: 'Clean, responsive online calculator for addition, subtraction, multiplication, division, and percentages. Full keyboard support and history tape.',
    componentKey: 'calculator',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The Basic Calculator performs fundamental arithmetic operations (addition, subtraction, multiplication, division, percentages, negation) with a clean tactile interface and full desktop keyboard support.',
      howToUse: [
        'Use the on-screen buttons or your keyboard number pad to input calculations.',
        'Supports standard operator precedence (PEMDAS).',
        'Review recent calculations in the live history tape.',
        'Press "C" to clear current entry or "AC" to reset.'
      ]
    },
    relatedToolIds: ['scientific-calculator', 'fraction-calculator', 'percentage-calculator']
  },
  {
    id: 'scientific-calculator',
    name: 'Scientific Calculator',
    slug: 'scientific-calculator',
    category: 'math',
    description: 'Advanced scientific calculator with trigonometry (sin, cos, tan), logarithms, powers, roots, factorials, and mathematical constants (π, e).',
    icon: 'Binary',
    keywords: ['scientific calculator', 'advanced calculator', 'trig calculator', 'sin cos tan calculator', 'log calculator'],
    seoTitle: 'Scientific Calculator – Advanced Math & Trigonometry Online | ToolNest',
    seoDescription: 'Free online scientific calculator. Perform trigonometric functions, logarithms, exponents, powers, factorials, and scientific notation with ease.',
    componentKey: 'scientific-calculator',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The Scientific Calculator provides comprehensive higher-level mathematical functions including trigonometric ratios (degrees and radians), natural logarithms, exponential powers, factorials, and roots.',
      howToUse: [
        'Toggle between Degree (DEG) and Radian (RAD) mode for angles.',
        'Use parentheses for complex algebraic expressions.',
        'Access constants like Pi ($\\pi \\approx 3.14159$) and Euler\'s constant ($e \\approx 2.71828$).'
      ]
    },
    relatedToolIds: ['calculator', 'square-root', 'fraction-calculator']
  },
  {
    id: 'fraction-calculator',
    name: 'Fraction Calculator',
    slug: 'fraction-calculator',
    category: 'math',
    description: 'Add, subtract, multiply, and divide fractions and mixed numbers with step-by-step simplification to lowest terms.',
    icon: 'Divide',
    keywords: ['fraction calculator', 'add fractions', 'simplify fractions', 'multiply fractions', 'mixed numbers calculator'],
    seoTitle: 'Fraction Calculator – Add, Subtract & Simplify Fractions | ToolNest',
    seoDescription: 'Perform fraction operations with step-by-step solutions. Add, subtract, multiply, and divide proper, improper, and mixed fractions easily.',
    componentKey: 'fraction-calculator',
    popular: true,
    content: {
      whatIs: 'The Fraction Calculator performs arithmetic across proper fractions, improper fractions, and mixed numbers, reducing the result to its simplest irreducible form.',
      howToUse: [
        'Enter numerator and denominator for Fraction 1 and Fraction 2.',
        'Select the operator ($+$, $-$, $\\times$, $\\div$).',
        'Click "Calculate" to view the resulting fraction, mixed fraction, decimal equivalent, and step-by-step common denominator working.'
      ],
      example: '$\\frac{2}{3} + \\frac{1}{4} = \\frac{8 + 3}{12} = \\frac{11}{12} \\approx 0.9167$'
    },
    relatedToolIds: ['calculator', 'ratio-calculator', 'lcm']
  },
  {
    id: 'ratio-calculator',
    name: 'Ratio Calculator',
    slug: 'ratio-calculator',
    category: 'math',
    description: 'Solve equivalent ratios (A:B = C:D), simplify complex ratios to lowest terms, and scale proportions up or down.',
    icon: 'Scale',
    keywords: ['ratio calculator', 'solve ratios', 'simplify ratio', 'equivalent ratios', 'proportion calculator'],
    seoTitle: 'Ratio Calculator – Simplify & Solve Proportions Online | ToolNest',
    seoDescription: 'Solve missing values in equivalent ratios (A:B = C:D) and simplify ratios to lowest terms. Free online proportion solver with step-by-step math.',
    componentKey: 'ratio-calculator',
    popular: true,
    content: {
      whatIs: 'A ratio compares two quantities by division. The Ratio Calculator solves for an unknown fourth variable in proportional equations ($A:B = C:D$) and simplifies ratios to their simplest integer form.',
      howToUse: [
        'To find an unknown term: leave any one field blank ($A$, $B$, $C$, or $D$) and enter the other three.',
        'To simplify a ratio: enter $A$ and $B$ to reduce them by their Greatest Common Divisor.'
      ],
      formula: '\\frac{A}{B} = \\frac{C}{D} \\implies A \\times D = B \\times C',
      example: 'Solve $4 : 6 = 10 : X$. Cross-multiplying: $4X = 60 \\implies X = 15$.'
    },
    relatedToolIds: ['fraction-calculator', 'percentage-calculator', 'gcd']
  },
  {
    id: 'average-calculator',
    name: 'Average Calculator',
    slug: 'average-calculator',
    category: 'math',
    description: 'Calculate arithmetic mean, geometric mean, harmonic mean, and sum from any set of comma or space-separated numbers.',
    icon: 'Sigma',
    keywords: ['average calculator', 'mean calculator', 'calculate average', 'arithmetic mean', 'geometric mean'],
    seoTitle: 'Average Calculator – Calculate Mean & Sum Online | ToolNest',
    seoDescription: 'Find the average (arithmetic mean) of any list of numbers. Includes geometric mean, harmonic mean, count, sum, and step-by-step division.',
    componentKey: 'average-calculator',
    popular: true,
    content: {
      whatIs: 'The average (arithmetic mean) is the central tendency of a collection of numbers, calculated by summing all values and dividing by the total count of numbers.',
      howToUse: [
        'Paste or type numbers separated by commas, spaces, or newlines.',
        'View the Arithmetic Mean, Sum, Count, Smallest, and Largest values instantly.'
      ],
      formula: '\\bar{x} = \\frac{\\sum_{i=1}^n x_i}{n}',
      example: 'Numbers: 10, 20, 30, 40. Sum = 100, Count = 4. Average = 100 / 4 = 25.'
    },
    relatedToolIds: ['median-calculator', 'mode-calculator', 'standard-deviation']
  },
  {
    id: 'median-calculator',
    name: 'Median Calculator',
    slug: 'median-calculator',
    category: 'math',
    description: 'Find the median middle value of any dataset with sorted number visualization and odd/even set handling.',
    icon: 'SlidersHorizontal',
    keywords: ['median calculator', 'calculate median', 'middle value calculator', 'sorted dataset median'],
    seoTitle: 'Median Calculator – Find the Middle Value of a Dataset | ToolNest',
    seoDescription: 'Calculate the median of any dataset. Automatically sorts values and explains how the middle value or average of two middle values is derived.',
    componentKey: 'median-calculator',
    content: {
      whatIs: 'The median represents the exact middle value separating the higher half from the lower half of a sorted dataset, offering resistance to extreme outliers.',
      howToUse: [
        'Enter numbers separated by spaces or commas.',
        'The tool sorts the numbers in ascending order.',
        'If the count is odd, the middle element is highlighted. If even, the average of the two central numbers is computed.'
      ]
    },
    relatedToolIds: ['average-calculator', 'mode-calculator', 'standard-deviation']
  },
  {
    id: 'mode-calculator',
    name: 'Mode Calculator',
    slug: 'mode-calculator',
    category: 'math',
    description: 'Identify the mode (most frequently occurring numbers) in a dataset with frequency tables and multimodal detection.',
    icon: 'BarChart2',
    keywords: ['mode calculator', 'find mode', 'most frequent number', 'bimodal calculator', 'multimodal'],
    seoTitle: 'Mode Calculator – Find Most Frequent Numbers Online | ToolNest',
    seoDescription: 'Calculate the mode of a dataset. Detects unimodal, bimodal, multimodal datasets, or datasets with no mode, complete with a frequency table.',
    componentKey: 'mode-calculator',
    content: {
      whatIs: 'The mode is the value that appears most often in a set of data. A dataset can be unimodal (one mode), bimodal (two modes), multimodal, or have no mode if all values appear with equal frequency.',
      howToUse: [
        'Enter numbers separated by commas or spaces.',
        'View the mode, frequency count, and complete frequency distribution table.'
      ]
    },
    relatedToolIds: ['average-calculator', 'median-calculator', 'standard-deviation']
  },
  {
    id: 'standard-deviation',
    name: 'Standard Deviation Calculator',
    slug: 'standard-deviation',
    category: 'math',
    description: 'Calculate sample standard deviation, population standard deviation, variance, and mean with step-by-step deviation tables.',
    icon: 'LineChart',
    keywords: ['standard deviation calculator', 'variance calculator', 'population standard deviation', 'sample standard deviation'],
    seoTitle: 'Standard Deviation Calculator – Sample & Population Variance | ToolNest',
    seoDescription: 'Calculate standard deviation ($s$ and $\\sigma$), variance ($s^2$), mean, and sum of squares. Full step-by-step deviations table included.',
    componentKey: 'standard-deviation',
    popular: true,
    featured: true,
    content: {
      whatIs: 'Standard deviation measures the dispersion or spread of values around their arithmetic mean. A low standard deviation indicates values cluster tightly near the mean; a high value indicates wide dispersion.',
      howToUse: [
        'Enter your dataset numbers separated by spaces or commas.',
        'Review both Sample Standard Deviation ($s$, dividing by $n-1$) and Population Standard Deviation ($\\sigma$, dividing by $N$).',
        'Inspect the variance and step-by-step deviation table.'
      ],
      formula: 's = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}} \\quad | \\quad \\sigma = \\sqrt{\\frac{\\sum (x_i - \\mu)^2}{N}}'
    },
    relatedToolIds: ['average-calculator', 'median-calculator', 'probability-calculator']
  },
  {
    id: 'probability-calculator',
    name: 'Probability Calculator',
    slug: 'probability-calculator',
    category: 'math',
    description: 'Calculate single event probabilities, complementary events, independent event intersections (A AND B), and unions (A OR B).',
    icon: 'Dice5',
    keywords: ['probability calculator', 'calculate probability', 'odds calculator', 'independent events probability'],
    seoTitle: 'Probability Calculator – Event Probability & Odds Online | ToolNest',
    seoDescription: 'Calculate probabilities for single events, compound events, independent intersections, and unions. Includes percentage and odds for/against.',
    componentKey: 'probability-calculator',
    content: {
      whatIs: 'Probability quantifies the likelihood of an event occurring, expressed as a number between 0 (impossible) and 1 (certain).',
      howToUse: [
        'For single event: enter favorable outcomes and total possible outcomes.',
        'For compound events: enter Probability of A and Probability of B to calculate $P(A \\cap B)$ and $P(A \\cup B)$.'
      ],
      formula: 'P(E) = \\frac{\\text{Favorable Outcomes}}{\\text{Total Outcomes}}'
    },
    relatedToolIds: ['random-number', 'standard-deviation', 'average-calculator']
  },
  {
    id: 'square-root',
    name: 'Square Root Calculator',
    slug: 'square-root',
    category: 'math',
    description: 'Calculate square roots, cube roots, and custom Nth roots with radical simplification and perfect square checks.',
    icon: 'Radical',
    keywords: ['square root calculator', 'cube root calculator', 'nth root', 'simplify radical', 'perfect square checker'],
    seoTitle: 'Square Root Calculator – Cube Root & Nth Root Solver | ToolNest',
    seoDescription: 'Calculate square roots, cube roots, and nth roots with high precision. Check whether a number is a perfect square with simplified radical forms.',
    componentKey: 'square-root',
    content: {
      whatIs: 'The square root of a number $x$ is a value $r$ such that $r^2 = x$. The Nth root is a value that, multiplied by itself $n$ times, equals the radicand.',
      howToUse: [
        'Enter the number (radicand).',
        'Choose root degree (default is 2 for square root, or enter 3 for cube root).',
        'Get the exact root value, simplified radical, and perfect root confirmation.'
      ],
      example: '$\\sqrt{144} = 12$, $\\sqrt[3]{125} = 5$'
    },
    relatedToolIds: ['scientific-calculator', 'calculator', 'scientific-notation']
  },
  {
    id: 'lcm',
    name: 'LCM Calculator',
    slug: 'lcm',
    category: 'math',
    description: 'Find the Least Common Multiple (LCM) of two or more numbers with prime factorization steps.',
    icon: 'Share2',
    keywords: ['lcm calculator', 'least common multiple', 'lowest common multiple', 'find lcm online', 'lcm prime factorization'],
    seoTitle: 'LCM Calculator – Least Common Multiple Solver | ToolNest',
    seoDescription: 'Find the Least Common Multiple (LCM) of multiple numbers instantly. Displays prime factorization method and division steps.',
    componentKey: 'lcm',
    popular: true,
    content: {
      whatIs: 'The Least Common Multiple (LCM) of two or more integers is the smallest positive integer that is evenly divisible by all of them.',
      howToUse: [
        'Enter two or more integers separated by commas or spaces.',
        'Click "Calculate LCM".',
        'View the LCM alongside prime factorizations for each input number.'
      ],
      example: 'LCM of 12 and 18: $12 = 2^2 \\times 3$, $18 = 2 \\times 3^2$. $\\text{LCM} = 2^2 \\times 3^2 = 36$.'
    },
    relatedToolIds: ['gcd', 'prime-checker', 'fraction-calculator']
  },
  {
    id: 'gcd',
    name: 'GCD Calculator',
    slug: 'gcd',
    category: 'math',
    description: 'Find the Greatest Common Divisor (GCD / HCF) of two or more numbers using the Euclidean algorithm with step-by-step working.',
    icon: 'Maximize2',
    keywords: ['gcd calculator', 'hcf calculator', 'greatest common divisor', 'highest common factor', 'euclidean algorithm'],
    seoTitle: 'GCD Calculator – Greatest Common Divisor (HCF) Solver | ToolNest',
    seoDescription: 'Calculate the Greatest Common Divisor (GCD) or Highest Common Factor (HCF) of numbers using the step-by-step Euclidean algorithm.',
    componentKey: 'gcd',
    popular: true,
    content: {
      whatIs: 'The Greatest Common Divisor (GCD), also known as the Highest Common Factor (HCF), is the largest positive integer that divides each of the numbers without leaving a remainder.',
      howToUse: [
        'Enter two or more positive integers.',
        'View the GCD and step-by-step Euclidean division remainder table.'
      ],
      example: 'GCD of 48 and 18: $48 = 18 \\times 2 + 12$; $18 = 12 \\times 1 + 6$; $12 = 6 \\times 2 + 0$. Remainder is 0, so $\\text{GCD} = 6$.'
    },
    relatedToolIds: ['lcm', 'prime-checker', 'fraction-calculator']
  },
  {
    id: 'prime-checker',
    name: 'Prime Number Checker',
    slug: 'prime-checker',
    category: 'math',
    description: 'Check whether a number is prime or composite, discover its complete prime factorization, and find adjacent prime numbers.',
    icon: 'ShieldCheck',
    keywords: ['prime number checker', 'is it prime', 'prime factorization', 'composite number checker', 'next prime number'],
    seoTitle: 'Prime Number Checker & Factorizer Online | ToolNest',
    seoDescription: 'Test if any number is prime or composite. Instantly computes full prime factorization tree, next prime number, and all factors.',
    componentKey: 'prime-checker',
    popular: true,
    content: {
      whatIs: 'A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers. A number greater than 1 that is not prime is called a composite number.',
      howToUse: [
        'Enter any positive integer.',
        'Get immediate confirmation (Prime or Composite).',
        'Review its prime factors (e.g. $84 = 2^2 \\times 3 \\times 7$), all divisors, and the nearest previous/next primes.'
      ]
    },
    relatedToolIds: ['gcd', 'lcm', 'random-number']
  },
  {
    id: 'random-number',
    name: 'Random Number Generator',
    slug: 'random-number',
    category: 'math',
    description: 'Generate cryptographically random numbers within custom ranges, generate unique non-repeating sets, or roll virtual dice.',
    icon: 'Dices',
    keywords: ['random number generator', 'rng', 'random integer generator', 'roll dice online', 'random pick'],
    seoTitle: 'Random Number Generator – True Random Integers & Dice | ToolNest',
    seoDescription: 'Generate truly random numbers within custom minimum and maximum ranges. Options for unique non-repeating picks, bulk generation, and dice rolls.',
    componentKey: 'random-number',
    popular: true,
    content: {
      whatIs: 'The Random Number Generator uses the browser\'s cryptographically strong `crypto.getRandomValues()` API to yield unbiased, statistically uniform random numbers.',
      howToUse: [
        'Set Minimum and Maximum bounds (e.g. 1 to 100).',
        'Set desired quantity of numbers to generate.',
        'Toggle "Unique only" if you do not want duplicate numbers.',
        'Click "Generate" to roll the numbers.'
      ]
    },
    relatedToolIds: ['probability-calculator', 'password-generator', 'uuid-generator']
  },
  {
    id: 'scientific-notation',
    name: 'Scientific Notation Converter',
    slug: 'scientific-notation',
    category: 'math',
    description: 'Convert standard decimal numbers to scientific notation ($a \\times 10^b$), engineering notation, and e-notation formats.',
    icon: 'Sparkles',
    keywords: ['scientific notation converter', 'standard form converter', 'engineering notation', 'e notation calculator'],
    seoTitle: 'Scientific Notation Converter – Standard Form Online | ToolNest',
    seoDescription: 'Convert decimal numbers to scientific notation ($a \\times 10^b$) and engineering notation with precision controls and metric prefix names.',
    componentKey: 'scientific-notation',
    content: {
      whatIs: 'Scientific notation represents very large or very small numbers in the format $a \\times 10^b$, where $1 \\le |a| < 10$ and $b$ is an integer exponent.',
      howToUse: [
        'Enter either a standard decimal number (e.g. `0.0000456`) or scientific notation (e.g. `4.56e-5`).',
        'View conversion across Standard Form, Engineering Notation, E-Notation, and Metric Prefixes (micro, nano, mega, giga).'
      ]
    },
    relatedToolIds: ['scientific-calculator', 'calculator', 'data-storage']
  }
];
