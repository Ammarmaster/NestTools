import { ToolDefinition } from '@/types/tool';

export const CONVERTER_TOOLS: ToolDefinition[] = [
  {
    id: 'converter-length',
    name: 'Length Converter',
    slug: 'length',
    category: 'converter',
    description: 'Convert between metric and imperial length units: meters, kilometers, centimeters, millimeters, inches, feet, yards, miles, and nautical miles.',
    icon: 'Ruler',
    keywords: ['length converter', 'meters to feet', 'inches to cm', 'miles to km', 'distance converter'],
    seoTitle: 'Length Converter – Metric & Imperial Distance Conversion | ToolNest',
    seoDescription: 'Convert length and distance units online. Fast conversions between meters, feet, inches, centimeters, kilometers, miles, and yards with swap button.',
    componentKey: 'unit-converter',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The Length Converter translates distance and length measurements between the International System of Units (metric) and the US customary/Imperial systems.',
      howToUse: [
        'Enter the numerical value to convert.',
        'Select the "From" unit (e.g. Feet) and "To" unit (e.g. Meters).',
        'Use the "Swap" button to reverse directions instantly.',
        'View the exact result and a quick reference conversion table.'
      ],
      example: '1 Foot = 0.3048 Meters. 100 Feet = 30.48 Meters. 1 Mile = 1.60934 Kilometers.'
    },
    relatedToolIds: ['area', 'volume', 'weight', 'speed']
  },
  {
    id: 'converter-weight',
    name: 'Weight Converter',
    slug: 'weight',
    category: 'converter',
    description: 'Convert between mass and weight units: kilograms, grams, milligrams, pounds (lbs), ounces (oz), stones, and metric tons.',
    icon: 'Scale',
    keywords: ['weight converter', 'kg to lbs', 'pounds to kilograms', 'grams to ounces', 'mass converter'],
    seoTitle: 'Weight Converter – Kilograms, Pounds & Ounces Online | ToolNest',
    seoDescription: 'Convert weight and mass units instantly. Convert between kilograms, grams, pounds, ounces, and stones with precision controls.',
    componentKey: 'unit-converter',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The Weight Converter converts mass values between metric units (kilograms, grams) and imperial units (pounds, ounces, stones).',
      howToUse: [
        'Input your mass value.',
        'Choose source and target units.',
        'Instant high-precision conversion with scientific notation support.'
      ],
      example: '1 Kilogram = 2.20462 Pounds. 1 Pound = 453.592 Grams = 16 Ounces.'
    },
    relatedToolIds: ['length', 'volume', 'bmi-calculator']
  },
  {
    id: 'converter-temperature',
    name: 'Temperature Converter',
    slug: 'temperature',
    category: 'converter',
    description: 'Convert temperatures between Celsius (°C), Fahrenheit (°F), Kelvin (K), and Rankine (°R) with step-by-step conversion formulas.',
    icon: 'Thermometer',
    keywords: ['temperature converter', 'celsius to fahrenheit', 'fahrenheit to celsius', 'kelvin to celsius', 'temp convert'],
    seoTitle: 'Temperature Converter – Celsius, Fahrenheit & Kelvin | ToolNest',
    seoDescription: 'Convert temperature values between Celsius, Fahrenheit, and Kelvin. Interactive slider and detailed mathematical formulas included.',
    componentKey: 'temperature-converter',
    popular: true,
    featured: true,
    content: {
      whatIs: 'Temperature measures the average kinetic energy of the particles in a system. The three primary scales are Celsius (water freezing at 0°C, boiling at 100°C), Fahrenheit (freezing at 32°F, boiling at 212°F), and Kelvin (absolute thermodynamic scale where 0 K is absolute zero).',
      howToUse: [
        'Enter temperature in any box.',
        'All other temperature scales update live.',
        'Review the exact mathematical conversion formula applied.'
      ],
      formula: '°F = (°C \\times \\frac{9}{5}) + 32 \\quad | \\quad K = °C + 273.15',
      example: 'Convert 25°C to Fahrenheit: $(25 \\times 1.8) + 32 = 45 + 32 = 77°F$.'
    },
    relatedToolIds: ['speed', 'length', 'time']
  },
  {
    id: 'converter-area',
    name: 'Area Converter',
    slug: 'area',
    category: 'converter',
    description: 'Convert between land and geometric area units: square meters, square feet, square yards, acres, hectares, and square kilometers.',
    icon: 'Maximize',
    keywords: ['area converter', 'square feet to square meters', 'acres to hectares', 'sq ft to sq meters', 'land area converter'],
    seoTitle: 'Area Converter – Square Feet, Acres & Hectares Online | ToolNest',
    seoDescription: 'Convert land and property area units online. Convert between square feet, square meters, acres, hectares, and square kilometers with ease.',
    componentKey: 'unit-converter',
    popular: true,
    content: {
      whatIs: 'The Area Converter translates surface area measurements for real estate, construction, interior design, and land surveying.',
      howToUse: [
        'Enter your area value.',
        'Select initial and target units (e.g., Acres to Hectares or Sq Ft to Sq Meters).',
        'Receive the exact scaled conversion.'
      ],
      example: '1 Acre = 43,560 Square Feet $\\approx$ 4,046.86 Square Meters $\\approx$ 0.4047 Hectares.'
    },
    relatedToolIds: ['length', 'volume', 'data-storage']
  },
  {
    id: 'converter-volume',
    name: 'Volume Converter',
    slug: 'volume',
    category: 'converter',
    description: 'Convert liquid and dry volume units: liters, milliliters, cubic meters, US gallons, UK gallons, fluid ounces, cups, and tablespoons.',
    icon: 'Box',
    keywords: ['volume converter', 'liters to gallons', 'gallons to liters', 'cups to ml', 'fluid ounces to ml', 'liquid converter'],
    seoTitle: 'Volume Converter – Liters, Gallons & Milliliters Online | ToolNest',
    seoDescription: 'Convert volume and fluid capacities online. Fast conversions between liters, milliliters, US gallons, UK gallons, fluid ounces, and cups.',
    componentKey: 'unit-converter',
    popular: true,
    content: {
      whatIs: 'The Volume Converter provides bidirectional conversion between three-dimensional capacity and fluid measures used in science, culinary recipes, and shipping logistics.',
      howToUse: [
        'Input volume number.',
        'Choose units (e.g. US Gallons to Liters, or Milliliters to Fluid Ounces).',
        'Instant result displayed with precision tuning.'
      ],
      example: '1 US Gallon = 3.78541 Liters. 1 Liter = 1,000 Milliliters = 33.814 Fluid Ounces.'
    },
    relatedToolIds: ['area', 'weight', 'length']
  },
  {
    id: 'converter-speed',
    name: 'Speed Converter',
    slug: 'speed',
    category: 'converter',
    description: 'Convert between speed and velocity units: km/h, mph, meters per second (m/s), knots, feet per second (ft/s), and Mach.',
    icon: 'Gauge',
    keywords: ['speed converter', 'kmh to mph', 'mph to kmh', 'knots to mph', 'meters per second to kmh', 'velocity converter'],
    seoTitle: 'Speed Converter – KM/H, MPH, Knots & M/S Online | ToolNest',
    seoDescription: 'Convert speed and velocity units instantly. Easily convert between kilometers per hour (km/h), miles per hour (mph), knots, and meters per second.',
    componentKey: 'unit-converter',
    popular: true,
    content: {
      whatIs: 'The Speed Converter translates velocity rates for automotive travel, aviation, maritime navigation (knots), and physics calculations.',
      howToUse: [
        'Enter speed value.',
        'Select From (e.g. Miles per hour) and To (e.g. Kilometers per hour).',
        'View instantaneous converted speed.'
      ],
      example: '60 MPH = 96.5606 KM/H = 26.8224 M/S = 52.1386 Knots.'
    },
    relatedToolIds: ['length', 'time', 'temperature']
  },
  {
    id: 'converter-time',
    name: 'Time Converter',
    slug: 'time',
    category: 'converter',
    description: 'Convert time intervals between milliseconds, seconds, minutes, hours, days, weeks, months, and calendar years.',
    icon: 'Hourglass',
    keywords: ['time converter', 'seconds to hours', 'hours to days', 'minutes to seconds', 'convert time units'],
    seoTitle: 'Time Converter – Seconds, Minutes, Hours & Days | ToolNest',
    seoDescription: 'Convert time units instantly between milliseconds, seconds, minutes, hours, days, weeks, and years. Fast, accurate, and bidirectional.',
    componentKey: 'unit-converter',
    content: {
      whatIs: 'The Time Converter transforms temporal durations between fine units (milliseconds, seconds) and larger intervals (hours, weeks, years).',
      howToUse: [
        'Enter duration.',
        'Choose source time unit and target time unit.',
        'View equivalent time breakdown.'
      ]
    },
    relatedToolIds: ['time-duration', 'timestamp-converter', 'speed']
  },
  {
    id: 'converter-data-storage',
    name: 'Data Storage Converter',
    slug: 'data-storage',
    category: 'converter',
    description: 'Convert digital storage units between Bytes, KB, MB, GB, TB, and PB in both decimal (1,000 bytes) and binary kibibytes (1,024 bytes).',
    icon: 'HardDrive',
    keywords: ['data storage converter', 'mb to gb', 'gb to tb', 'bytes to megabytes', 'kibibytes to kilobytes', 'bandwidth converter'],
    seoTitle: 'Data Storage Converter – Bytes, KB, MB, GB & TB Online | ToolNest',
    seoDescription: 'Convert data storage units accurately. Supports decimal (1000) and binary IEC standard (1024 KiB/MiB/GiB) file size conversions.',
    componentKey: 'unit-converter',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The Data Storage Converter translates computer memory and file size representations. Operating systems like Windows report binary gibibytes (1 GiB = 1024 MiB), while hard drive manufacturers advertise decimal gigabytes (1 GB = 1000 MB).',
      howToUse: [
        'Enter file or disk size.',
        'Choose base system: Decimal (1 KB = 1,000 Bytes) or Binary (1 KiB = 1,024 Bytes).',
        'Inspect the complete converted hierarchy from Bytes up to Petabytes.'
      ],
      example: '1 Gigabyte (GB) = 1,000 Megabytes (MB) = 1,000,000 Kilobytes (KB). 1 Gibibyte (GiB) = 1,024 Mebibytes (MiB).'
    },
    relatedToolIds: ['speed', 'number-to-words', 'json-minifier']
  },
  {
    id: 'converter-number-to-words',
    name: 'Number to Words Converter',
    slug: 'number-to-words',
    category: 'converter',
    description: 'Convert digits and numbers into spelled-out English words with support for currency check writing (Dollars & Cents, Rupees, Pounds).',
    icon: 'WholeWord',
    keywords: ['number to words converter', 'write numbers in words', 'numbers to words for checks', 'spell out numbers', 'cheque amount in words'],
    seoTitle: 'Number to Words Converter – Spell Out Numbers Online | ToolNest',
    seoDescription: 'Convert any number into written English words. Perfect for writing checks, legal contracts, receipts, and invoices with currency modes.',
    componentKey: 'number-to-words',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The Number to Words Converter translates numerical values into formal English word representations, preventing ambiguity and fraud on checks and legal contracts.',
      howToUse: [
        'Enter any positive or negative number (supports decimals).',
        'Choose format: Standard Cardinal ("Twelve Thousand"), Currency ("Twelve Thousand Dollars and Zero Cents"), or Indian Numbering ("Twelve Lakh").',
        'Copy the spelled-out text with one click.'
      ],
      example: '`14250.75` becomes "Fourteen Thousand Two Hundred Fifty Dollars and Seventy-Five Cents".'
    },
    relatedToolIds: ['roman-numeral', 'percentage-calculator', 'calculator']
  },
  {
    id: 'converter-roman-numeral',
    name: 'Roman Numeral Converter',
    slug: 'roman-numeral',
    category: 'converter',
    description: 'Bidirectional converter between Roman numerals (I, V, X, L, C, D, M) and standard Arabic integers with syntax validation.',
    icon: 'Coins',
    keywords: ['roman numeral converter', 'arabic to roman', 'roman to arabic numbers', 'roman numerals 1 to 1000'],
    seoTitle: 'Roman Numeral Converter – Arabic to Roman Numerals | ToolNest',
    seoDescription: 'Convert Arabic numbers (1 to 3,999,999) to Roman numerals and decode Roman numerals back to numbers. Instant validation and rule explanation.',
    componentKey: 'roman-numeral',
    popular: true,
    content: {
      whatIs: 'Roman numerals originated in ancient Rome and use combinations of seven basic Latin letters: I (1), V (5), X (10), L (50), C (100), D (500), and M (1000) using additive and subtractive notation.',
      howToUse: [
        'Enter either a number (e.g. `2026`) or Roman numeral (e.g. `MMXXVI`).',
        'Bidirectional conversion happens automatically.',
        'Review the historical breakdown and notation rules.'
      ],
      example: '`2026` = MM (2000) + XX (20) + VI (6) = `MMXXVI`'
    },
    relatedToolIds: ['number-to-words', 'calculator', 'fraction-calculator']
  },
  {
    id: 'converter-sqmm-to-sqft',
    name: 'SQMM to SQFT Converter (Square Millimeters to Square Feet)',
    slug: 'sqmm-to-sqft',
    category: 'converter',
    description: 'Convert SQMM to SQFT instantly (1 sq mm = 0.00001076 sq ft). Includes electrical cable wire size chart (1.5mm², 2.5mm², 4mm²), formula, and reverse converter.',
    icon: 'Zap',
    keywords: [
      'sqmm to sqft',
      'sq mm to sq ft',
      'sqmm to sqft converter',
      'convert sqmm to sqft',
      'square millimeters to square feet',
      'sqft to sqmm',
      '1.5 sqmm in sqft',
      '2.5 sqmm to sqft',
      '4 sqmm to sqft',
      'cable sqmm to sqft',
      'wire size sqmm to sqft',
      'sqmm to sqft formula',
      'sqmm to sqft chart'
    ],
    seoTitle: 'SQMM to SQFT Converter (1 sq mm = 0.00001076 ft²) | Wire Chart',
    seoDescription: '1 sq mm = 0.0000107639 sq ft (1 sq ft = 92,903.04 sq mm). Instant online SQMM to SQFT converter with electrical wire & cable chart (1.5mm², 2.5mm², 4mm²), formula & calculator.',
    componentKey: 'sqmm-to-sqft',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The SQMM to SQFT Converter transforms square millimeters (mm² / sq mm) into square feet (ft² / sq ft) with micro-precision. In electrical engineering and residential wiring, cable cross-sectional area is measured in sq mm (such as 1.5 sqmm for lighting or 4 sqmm for AC power), while architectural floor plans and duct clearances are specified in square feet or square inches.',
      howToUse: [
        'Enter the cable area or surface area in SQMM (square millimeters).',
        'The equivalent area in SQFT (square feet) calculates immediately in real-time.',
        'Click on any cable preset (1.5 mm², 2.5 mm², 4.0 mm², 10 mm², 16 mm²) for quick wire sizing.',
        'Use the Swap button (⇄) to convert SQFT back to SQMM.',
        'Copy your converted result with a single click.'
      ],
      formula: 'Square Feet = Square Millimeters ÷ 92,903.04 (or mm² × 0.0000107639)',
      example: '1) 1.5 sq mm cable = 1.5 ÷ 92,903.04 = 0.0000161458 sq ft\n2) 2.5 sq mm cable = 2.5 ÷ 92,903.04 = 0.0000269098 sq ft\n3) 4.0 sq mm cable = 4.0 ÷ 92,903.04 = 0.0000430556 sq ft\n4) 92,903.04 sq mm = exactly 1.0 Square Foot.',
      benefits: [
        'Instant Electrical Cable Sizing: Includes built-in standard wire gauge and cross-section presets.',
        'Micro-Precision Floating Point: Accurate to 10 decimal places, preventing round-off errors in engineering designs.',
        'Bidirectional Swap: Easily calculate both sqmm to sqft and sqft to sqmm.',
        '100% Free & Private: Runs entirely in your browser with zero latency.'
      ],
      tips: [
        'Remember the quick factor: Divide sq mm by 92,903.04 to get sq ft.',
        'To convert square feet to square millimeters, multiply by 92,903.04.',
        'For domestic house wiring, lighting circuits typically use 1.5 sqmm (0.00001615 sq ft) and power sockets use 2.5 sqmm (0.00002691 sq ft).'
      ],
      faqs: [
        {
          question: 'How many square feet are in 1 sq mm?',
          answer: '1 square millimeter equals 0.0000107639 square feet (10.7639 × 10⁻⁶ ft²). To convert, divide your sq mm figure by 92,903.04.'
        },
        {
          question: 'How many sq mm are in 1 sq ft?',
          answer: 'There are exactly 92,903.04 square millimeters in 1 square foot. Multiply square feet by 92,903.04 to obtain square millimeters.'
        },
        {
          question: 'What is 1.5 sqmm in sqft?',
          answer: '1.5 sq mm equals 0.0000161458 sq ft (1.6146 × 10⁻⁵ sq ft). 1.5 sqmm is the standard conductor size for residential lighting and ceiling fan circuits.'
        },
        {
          question: 'What is 2.5 sqmm in sqft?',
          answer: '2.5 sq mm equals 0.0000269098 sq ft (2.691 × 10⁻⁵ sq ft). 2.5 sqmm is the standard copper wire size used for 16-amp power plugs and home appliances.'
        },
        {
          question: 'What is 4 sqmm in sqft?',
          answer: '4.0 sq mm equals 0.0000430556 sq ft (4.3056 × 10⁻⁵ sq ft). 4.0 sqmm copper wire is commonly used for air conditioners (1.5–2 Ton) and geysers.'
        },
        {
          question: 'Why do electricians convert sqmm to sqft?',
          answer: 'Electricians and electrical engineers convert sq mm to sq ft or sq inches when sizing electrical conduits, cable trays, and trunking to ensure compliance with National Electrical Code (NEC) fill capacity percentages.'
        }
      ]
    },
    relatedToolIds: ['converter-sq-mm-to-sq-ft', 'converter-length', 'converter-area']
  },
  {
    id: 'converter-sq-mm-to-sq-ft',
    name: 'Square Millimeters to Square Feet Converter (SQMM to SQFT)',
    slug: 'sq-mm-to-sq-ft',
    category: 'converter',
    description: 'Convert SQMM to SQFT instantly (1 sq mm = 0.00001076 sq ft). Includes electrical cable wire size chart (1.5mm², 2.5mm², 4mm²), formula, and reverse converter.',
    icon: 'Zap',
    keywords: [
      'sq mm to sq ft',
      'sqmm to sqft',
      'convert sq mm to sq ft',
      'square millimeters to square feet',
      'sq ft to sq mm',
      '1.5 sqmm in sqft',
      '2.5 sqmm to sqft',
      '4 sqmm to sqft',
      'cable sqmm to sqft',
      'wire size sqmm to sqft',
      'sqmm to sqft formula',
      'sqmm to sqft chart'
    ],
    seoTitle: 'SQMM to SQFT Converter (1 sq mm = 0.00001076 ft²) | Wire Chart',
    seoDescription: '1 sq mm = 0.0000107639 sq ft (1 sq ft = 92,903.04 sq mm). Instant online SQMM to SQFT converter with electrical wire & cable chart (1.5mm², 2.5mm², 4mm²), formula & calculator.',
    componentKey: 'sqmm-to-sqft',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The SQMM to SQFT Converter transforms square millimeters (mm² / sq mm) into square feet (ft² / sq ft) with micro-precision. In electrical engineering and residential wiring, cable cross-sectional area is measured in sq mm (such as 1.5 sqmm for lighting or 4 sqmm for AC power), while architectural floor plans and duct clearances are specified in square feet or square inches.',
      howToUse: [
        'Enter the cable area or surface area in SQMM (square millimeters).',
        'The equivalent area in SQFT (square feet) calculates immediately in real-time.',
        'Click on any cable preset (1.5 mm², 2.5 mm², 4.0 mm², 10 mm², 16 mm²) for quick wire sizing.',
        'Use the Swap button (⇄) to convert SQFT back to SQMM.',
        'Copy your converted result with a single click.'
      ],
      formula: 'Square Feet = Square Millimeters ÷ 92,903.04 (or mm² × 0.0000107639)',
      example: '1) 1.5 sq mm cable = 1.5 ÷ 92,903.04 = 0.0000161458 sq ft\n2) 2.5 sq mm cable = 2.5 ÷ 92,903.04 = 0.0000269098 sq ft\n3) 4.0 sq mm cable = 4.0 ÷ 92,903.04 = 0.0000430556 sq ft\n4) 92,903.04 sq mm = exactly 1.0 Square Foot.',
      benefits: [
        'Instant Electrical Cable Sizing: Includes built-in standard wire gauge and cross-section presets.',
        'Micro-Precision Floating Point: Accurate to 10 decimal places, preventing round-off errors in engineering designs.',
        'Bidirectional Swap: Easily calculate both sqmm to sqft and sqft to sqmm.',
        '100% Free & Private: Runs entirely in your browser with zero latency.'
      ],
      tips: [
        'Remember the quick factor: Divide sq mm by 92,903.04 to get sq ft.',
        'To convert square feet to square millimeters, multiply by 92,903.04.',
        'For domestic house wiring, lighting circuits typically use 1.5 sqmm (0.00001615 sq ft) and power sockets use 2.5 sqmm (0.00002691 sq ft).'
      ],
      faqs: [
        {
          question: 'How many square feet are in 1 sq mm?',
          answer: '1 square millimeter equals 0.0000107639 square feet (10.7639 × 10⁻⁶ ft²). To convert, divide your sq mm figure by 92,903.04.'
        },
        {
          question: 'How many sq mm are in 1 sq ft?',
          answer: 'There are exactly 92,903.04 square millimeters in 1 square foot. Multiply square feet by 92,903.04 to obtain square millimeters.'
        },
        {
          question: 'What is 1.5 sqmm in sqft?',
          answer: '1.5 sq mm equals 0.0000161458 sq ft (1.6146 × 10⁻⁵ sq ft). 1.5 sqmm is the standard conductor size for residential lighting and ceiling fan circuits.'
        },
        {
          question: 'What is 2.5 sqmm in sqft?',
          answer: '2.5 sq mm equals 0.0000269098 sq ft (2.691 × 10⁻⁵ sq ft). 2.5 sqmm is the standard copper wire size used for 16-amp power plugs and home appliances.'
        },
        {
          question: 'What is 4 sqmm in sqft?',
          answer: '4.0 sq mm equals 0.0000430556 sq ft (4.3056 × 10⁻⁵ sq ft). 4.0 sqmm copper wire is commonly used for air conditioners (1.5–2 Ton) and geysers.'
        },
        {
          question: 'Why do electricians convert sqmm to sqft?',
          answer: 'Electricians and electrical engineers convert sq mm to sq ft or sq inches when sizing electrical conduits, cable trays, and trunking to ensure compliance with National Electrical Code (NEC) fill capacity percentages.'
        }
      ]
    },
    relatedToolIds: ['converter-sqmm-to-sqft', 'converter-length', 'converter-area']
  },
  {
    id: 'converter-sqft-to-sqmm',
    name: 'SQFT to SQMM Converter (Square Feet to Square Millimeters)',
    slug: 'sqft-to-sqmm',
    category: 'converter',
    description: 'Convert SQFT to SQMM instantly (1 sq ft = 92,903.04 sq mm). Fast bidirectional calculation with formula and electrical wire table.',
    icon: 'Zap',
    keywords: [
      'sqft to sqmm',
      'sq ft to sq mm',
      'convert sqft to sqmm',
      'square feet to square millimeters',
      'sqmm to sqft',
      'sqft to sq mm formula'
    ],
    seoTitle: 'SQFT to SQMM Converter (1 sq ft = 92,903.04 sq mm) | Fast & Accurate',
    seoDescription: 'Convert SQFT to SQMM instantly. 1 Square Foot = 92,903.04 Square Millimeters. Free online converter with cable reference chart and formulas.',
    componentKey: 'sqmm-to-sqft',
    popular: true,
    featured: false,
    content: {
      whatIs: 'The SQFT to SQMM Converter transforms square feet (ft² / sq ft) into square millimeters (mm² / sq mm). 1 square foot contains exactly 92,903.04 square millimeters.',
      howToUse: [
        'Enter area in SQFT (square feet).',
        'Instant result in SQMM (square millimeters) appears automatically.',
        'Copy the result or use the swap button to reverse the calculation.'
      ],
      formula: 'Square Millimeters = Square Feet × 92,903.04',
      example: '0.00001615 sq ft = 0.00001615 × 92,903.04 ≈ 1.5 sq mm (standard 10A lighting wire).\n1.0 sq ft = 92,903.04 sq mm.',
      benefits: [
        'Accurate reverse engineering calculations.',
        'Instant copy to clipboard.',
        '100% free and client-side private.'
      ],
      faqs: [
        {
          question: 'How do you convert SQFT to SQMM?',
          answer: 'Multiply the square feet value by 92,903.04. For example, 2 sq ft = 2 × 92,903.04 = 185,806.08 sq mm.'
        },
        {
          question: 'How many SQMM in 1 SQFT?',
          answer: 'There are exactly 92,903.04 square millimeters in 1 square foot.'
        }
      ]
    },
    relatedToolIds: ['converter-sqmm-to-sqft', 'converter-sq-mm-to-sq-ft']
  },
  {
    id: 'converter-gaj-to-sqft',
    name: 'Gaj to Sq Ft Converter (Gaj to Square Feet)',
    slug: 'gaj-to-sqft',
    category: 'converter',
    description: 'Convert Gaj to Square Feet instantly (1 Gaj = 9 Sq Ft). Free online land and plot area calculator for India with price estimator.',
    icon: 'Ruler',
    keywords: [
      'gaj to sqft',
      'gaj to square feet',
      '1 gaj in sq ft',
      'convert gaj to sqft',
      '100 gaj in sq ft',
      '50 gaj in sq ft',
      'gaj to sq ft formula',
      'plot area in gaj to sqft'
    ],
    seoTitle: 'Gaj to Sq Ft Converter (1 Gaj = 9 Sq Ft) | Plot & Land Calculator',
    seoDescription: '1 Gaj = 9 Square Feet (1 Sq Ft = 0.1111 Gaj). Convert Gaj to Sq Ft online instantly. Essential plot calculator for property buyers in Delhi, Punjab, Haryana & UP.',
    componentKey: 'universal-converter',
    popular: true,
    featured: true,
    content: {
      whatIs: 'Gaj (also known as Gaz or Square Yard) is a traditional unit of land measurement widely used in Northern India (Delhi, Punjab, Haryana, Uttar Pradesh, Rajasthan). Exactly 1 Gaj equals 9 Square Feet (1 Square Yard = 3 ft × 3 ft = 9 sq ft).',
      howToUse: [
        'Enter the plot or land area in Gaj (e.g. 50, 100, 200).',
        'The exact area in Square Feet displays immediately.',
        'Refer to the common plot size quick table (50 Gaj = 450 sq ft, 100 Gaj = 900 sq ft, 200 Gaj = 1800 sq ft).'
      ],
      formula: 'Square Feet = Gaj × 9',
      example: '50 Gaj = 50 × 9 = 450 Sq Ft\n100 Gaj = 100 × 9 = 900 Sq Ft\n200 Gaj = 200 × 9 = 1,800 Sq Ft\n500 Gaj = 500 × 9 = 4,500 Sq Ft',
      benefits: [
        'Essential for real estate & plot deals in India.',
        'Instant accurate multiplication by 9.',
        'Includes popular residential plot benchmarks.'
      ],
      faqs: [
        {
          question: 'How many square feet are in 1 Gaj?',
          answer: '1 Gaj is exactly equal to 9 Square Feet. Gaj is the Hindi/Urdu term for a Square Yard (1 yard = 3 feet, so 3 × 3 = 9 sq ft).'
        },
        {
          question: 'How many square feet is a 100 Gaj plot?',
          answer: 'A 100 Gaj plot equals exactly 900 Square Feet (100 × 9 = 900 sq ft). Typical dimensions are 15 ft × 60 ft or 20 ft × 45 ft.'
        },
        {
          question: 'How many square feet is a 50 Gaj plot?',
          answer: 'A 50 Gaj plot equals 450 Square Feet (50 × 9 = 450 sq ft), a standard size for affordable housing and builder floors in Delhi NCR.'
        },
        {
          question: 'How do I convert Sq Ft back to Gaj?',
          answer: 'Divide the square feet by 9. For example, 1,800 sq ft ÷ 9 = 200 Gaj.'
        }
      ]
    },
    relatedToolIds: ['converter-sqft-to-gaj', 'converter-sqm-to-sqft', 'converter-bigha-to-sqft']
  },
  {
    id: 'converter-sqft-to-gaj',
    name: 'Sq Ft to Gaj Converter (Square Feet to Gaj)',
    slug: 'sqft-to-gaj',
    category: 'converter',
    description: 'Convert Square Feet to Gaj instantly (1 Sq Ft = 0.1111 Gaj). Free online plot & land measurement converter.',
    icon: 'Ruler',
    keywords: [
      'sqft to gaj',
      'square feet to gaj',
      'convert sq ft to gaj',
      'how many gaj in 1000 sq ft',
      '900 sq ft to gaj',
      'sqft to gaj formula'
    ],
    seoTitle: 'Sq Ft to Gaj Converter (100 Sq Ft = 11.11 Gaj) | Land Measurement',
    seoDescription: 'Convert Square Feet to Gaj instantly. Divide sq ft by 9 to get Gaj. 900 sq ft = 100 Gaj, 1800 sq ft = 200 Gaj. Free property conversion tool.',
    componentKey: 'universal-converter',
    popular: true,
    featured: false,
    content: {
      whatIs: 'The Sq Ft to Gaj Converter converts square footage into Gaj (square yards). In real estate transactions, architectural floor plans are drawn in sq ft while land registries and plot sales are quoted in Gaj.',
      howToUse: [
        'Enter area in Square Feet.',
        'View the converted area in Gaj immediately (sq ft ÷ 9).',
        'Copy the result with one click.'
      ],
      formula: 'Gaj = Square Feet ÷ 9',
      example: '900 Sq Ft = 900 ÷ 9 = 100 Gaj\n1,000 Sq Ft = 1,000 ÷ 9 = 111.11 Gaj\n1,800 Sq Ft = 1,800 ÷ 9 = 200 Gaj',
      faqs: [
        {
          question: 'How many Gaj is 1,000 sq ft?',
          answer: '1,000 square feet equals 111.11 Gaj (1,000 ÷ 9 = 111.11 Gaj).'
        },
        {
          question: 'How many Gaj is 900 sq ft?',
          answer: '900 square feet is exactly 100 Gaj (900 ÷ 9 = 100 Gaj).'
        }
      ]
    },
    relatedToolIds: ['converter-gaj-to-sqft', 'converter-sqm-to-sqft']
  },
  {
    id: 'converter-sqm-to-sqft',
    name: 'Sq M to Sq Ft Converter (Square Meters to Square Feet)',
    slug: 'sqm-to-sqft',
    category: 'converter',
    description: 'Convert Sq M to Sq Ft instantly (1 Sq M = 10.7639 Sq Ft). Free online real estate and apartment area calculator.',
    icon: 'Maximize2',
    keywords: [
      'sqm to sqft',
      'sq m to sq ft',
      'square meters to square feet',
      'convert sqm to sqft',
      '1 sqm in sqft',
      'sqm to sqft formula',
      'apartment carpet area sqm to sqft'
    ],
    seoTitle: 'Sq M to Sq Ft Converter (1 Sq M = 10.7639 Sq Ft) | Instant Calculator',
    seoDescription: '1 Sq M = 10.76391 Sq Ft (1 Sq Ft = 0.0929 Sq M). Convert Square Meters to Square Feet instantly. Perfect for RERA carpet area, apartments & floor plans.',
    componentKey: 'universal-converter',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The Sq M to Sq Ft Converter translates square meters (metric) to square feet (imperial). Under real estate regulations (such as RERA in India and international architectural codes), carpet area is officially declared in square meters while consumers browse properties in square feet.',
      howToUse: [
        'Enter the area in Square Meters (sq m / m²).',
        'Instant result in Square Feet (sq ft / ft²) displays automatically.',
        'Use swap (⇄) to convert Square Feet back to Square Meters.'
      ],
      formula: 'Square Feet = Square Meters × 10.76391',
      example: '50 Sq M = 50 × 10.7639 = 538.2 Sq Ft\n75 Sq M (2 BHK) = 75 × 10.7639 = 807.3 Sq Ft\n100 Sq M = 100 × 10.7639 = 1,076.39 Sq Ft',
      faqs: [
        {
          question: 'How many square feet are in 1 square meter?',
          answer: '1 square meter equals exactly 10.7639104 square feet. Multiply square meters by 10.7639 to get square feet.'
        },
        {
          question: 'How big is a 100 sq meter apartment in sq ft?',
          answer: 'A 100 square meter apartment is 1,076.39 square feet, typically equivalent to a spacious 2 BHK or compact 3 BHK apartment.'
        }
      ]
    },
    relatedToolIds: ['converter-sqft-to-sqm', 'converter-gaj-to-sqft', 'converter-sqmm-to-sqft']
  },
  {
    id: 'converter-sqft-to-sqm',
    name: 'Sq Ft to Sq M Converter (Square Feet to Square Meters)',
    slug: 'sqft-to-sqm',
    category: 'converter',
    description: 'Convert Square Feet to Square Meters instantly (1 Sq Ft = 0.092903 Sq M). Free online converter for RERA flat sizes and floor plans.',
    icon: 'Maximize2',
    keywords: [
      'sqft to sqm',
      'sq ft to sq m',
      'square feet to square meters',
      'convert sqft to sqm',
      '1000 sq ft to sqm',
      'sqft to sqm formula'
    ],
    seoTitle: 'Sq Ft to Sq M Converter (1 Sq Ft = 0.0929 Sq M) | Instant Calculator',
    seoDescription: 'Convert Square Feet to Square Meters instantly. 1 Sq Ft = 0.092903 Sq M. 1000 sq ft = 92.9 sq m. Free online converter with formula & reference chart.',
    componentKey: 'universal-converter',
    popular: true,
    featured: false,
    content: {
      whatIs: 'The Sq Ft to Sq M Converter transforms square footage into square meters. Essential for submitting architectural blueprints to municipal authorities and government land registries.',
      howToUse: [
        'Enter area in Square Feet.',
        'View the converted area in Square Meters (sq ft × 0.092903).',
        'Copy the result with one click.'
      ],
      formula: 'Square Meters = Square Feet × 0.092903 (or sq ft ÷ 10.7639)',
      example: '500 Sq Ft = 46.45 Sq M\n1,000 Sq Ft = 92.90 Sq M\n1,500 Sq Ft = 139.35 Sq M',
      faqs: [
        {
          question: 'How do I convert Sq Ft to Sq M?',
          answer: 'Multiply square feet by 0.092903 (or divide by 10.7639). For example, 1,000 sq ft ÷ 10.7639 = 92.90 sq m.'
        },
        {
          question: 'How many sq meters is a 1,000 sq ft house?',
          answer: 'A 1,000 sq ft house is 92.90 square meters.'
        }
      ]
    },
    relatedToolIds: ['converter-sqm-to-sqft', 'converter-gaj-to-sqft']
  },
  {
    id: 'converter-cent-to-sqft',
    name: 'Cent to Sq Ft Converter (Cent to Square Feet)',
    slug: 'cent-to-sqft',
    category: 'converter',
    description: 'Convert Cent to Square Feet instantly (1 Cent = 435.6 Sq Ft). Essential land measurement calculator for Kerala, Tamil Nadu, Andhra Pradesh & Telangana.',
    icon: 'Ruler',
    keywords: [
      'cent to sqft',
      'cent to square feet',
      '1 cent in sq ft',
      'convert cent to sqft',
      '5 cent in sq ft',
      '10 cent in sq ft',
      'cent to sqft formula kerala tamil nadu'
    ],
    seoTitle: 'Cent to Sq Ft Converter (1 Cent = 435.6 Sq Ft) | Land Calculator',
    seoDescription: '1 Cent = 435.6 Square Feet (1 Acre = 100 Cents). Convert Cent to Sq Ft online instantly. Trusted land measurement tool for South India property buyers.',
    componentKey: 'universal-converter',
    popular: true,
    featured: true,
    content: {
      whatIs: 'Cent is the primary land measurement unit used in Southern Indian states including Kerala, Tamil Nadu, Andhra Pradesh, and Telangana. Exactly 1 Cent is equal to 435.6 Square Feet, and 100 Cents make up exactly 1 Acre (43,560 sq ft).',
      howToUse: [
        'Enter land area in Cent (e.g. 3, 5, 10 Cents).',
        'Instant calculation in Square Feet (Cent × 435.6).',
        'Check common property benchmarks (5 Cents = 2,178 sq ft, 10 Cents = 4,356 sq ft).'
      ],
      formula: 'Square Feet = Cent × 435.6',
      example: '3 Cents = 3 × 435.6 = 1,306.8 Sq Ft\n5 Cents = 5 × 435.6 = 2,178 Sq Ft\n10 Cents = 10 × 435.6 = 4,356 Sq Ft\n50 Cents = 21,780 Sq Ft (0.5 Acre)',
      faqs: [
        {
          question: 'How many square feet are in 1 Cent of land?',
          answer: '1 Cent equals exactly 435.6 Square Feet. Since 1 Acre equals 43,560 sq ft and contains 100 Cents, 43,560 ÷ 100 = 435.6 sq ft.'
        },
        {
          question: 'How many sq ft is 5 Cent of land?',
          answer: '5 Cents of land equals exactly 2,178 Square Feet (5 × 435.6 = 2,178 sq ft), standard for a residential villa in Kerala and Tamil Nadu.'
        },
        {
          question: 'How many Cents in 1 Acre?',
          answer: 'There are exactly 100 Cents in 1 Acre.'
        }
      ]
    },
    relatedToolIds: ['converter-guntha-to-sqft', 'converter-gaj-to-sqft', 'converter-sqm-to-sqft']
  },
  {
    id: 'converter-guntha-to-sqft',
    name: 'Guntha to Sq Ft Converter (Guntha to Square Feet)',
    slug: 'guntha-to-sqft',
    category: 'converter',
    description: 'Convert Guntha to Square Feet instantly (1 Guntha = 1,089 Sq Ft). Essential land calculator for Maharashtra, Karnataka, and Gujarat.',
    icon: 'Ruler',
    keywords: [
      'guntha to sqft',
      'guntha to square feet',
      '1 guntha in sq ft',
      'convert guntha to sqft',
      'guntha to sqft maharashtra karnataka',
      '1 guntha plot in sq ft'
    ],
    seoTitle: 'Guntha to Sq Ft Converter (1 Guntha = 1,089 Sq Ft) | Land Calculator',
    seoDescription: '1 Guntha = 1,089 Square Feet (1 Acre = 40 Gunthas). Convert Guntha to Sq Ft online instantly. Standard property calculator for Maharashtra & Karnataka.',
    componentKey: 'universal-converter',
    popular: true,
    featured: true,
    content: {
      whatIs: 'Guntha (also spelled Gunta) is a traditional land area measurement unit widely used in Maharashtra, Karnataka, Gujarat, and parts of Andhra Pradesh. Exactly 1 Guntha equals 1,089 Square Feet (or 33 ft × 33 ft). Exactly 40 Gunthas make up 1 Acre (40 × 1,089 = 43,560 sq ft).',
      howToUse: [
        'Enter area in Guntha (e.g. 1, 2, 5, 10).',
        'The exact area in Square Feet appears immediately (Guntha × 1,089).',
        'Consult the quick conversion table below.'
      ],
      formula: 'Square Feet = Guntha × 1,089',
      example: '1 Guntha = 1,089 Sq Ft\n2 Gunthas = 2,178 Sq Ft\n5 Gunthas = 5,445 Sq Ft\n40 Gunthas = 43,560 Sq Ft (1 Acre)',
      faqs: [
        {
          question: 'How many square feet are in 1 Guntha?',
          answer: '1 Guntha equals exactly 1,089 Square Feet (equivalent to 33 feet by 33 feet, or 121 square yards).'
        },
        {
          question: 'How many Gunthas are in 1 Acre?',
          answer: 'There are exactly 40 Gunthas in 1 Acre (40 × 1,089 = 43,560 sq ft).'
        },
        {
          question: 'How many sq ft is 2 Guntha?',
          answer: '2 Gunthas equal 2,178 Square Feet (2 × 1,089 = 2,178 sq ft).'
        }
      ]
    },
    relatedToolIds: ['converter-cent-to-sqft', 'converter-bigha-to-sqft', 'converter-gaj-to-sqft']
  },
  {
    id: 'converter-bigha-to-sqft',
    name: 'Bigha to Sq Ft Converter (Bigha to Square Feet)',
    slug: 'bigha-to-sqft',
    category: 'converter',
    description: 'Convert Bigha to Square Feet instantly. Supports standard Uttar Pradesh, Bihar, Rajasthan, MP, and Punjab bigha variations.',
    icon: 'Ruler',
    keywords: [
      'bigha to sqft',
      'bigha to square feet',
      '1 bigha in sq ft',
      'convert bigha to sqft',
      '1 bigha in square feet up bihar',
      'bigha to sqft formula'
    ],
    seoTitle: 'Bigha to Sq Ft Converter (1 Bigha = 27,225 Sq Ft) | Land Calculator',
    seoDescription: 'Convert Bigha to Square Feet online instantly. Standard Pucca Bigha = 27,225 Sq Ft (3,025 Gaj). Trusted agricultural and plot land conversion tool.',
    componentKey: 'universal-converter',
    popular: true,
    featured: true,
    content: {
      whatIs: 'Bigha is one of the oldest and most widely used traditional units of land measurement across North and East India, including Uttar Pradesh, Bihar, Rajasthan, Madhya Pradesh, West Bengal, and Punjab. In standard Pucca Bigha, 1 Bigha equals 27,225 Square Feet (3,025 Square Yards / Gaj or 5/8 of an Acre).',
      howToUse: [
        'Enter land area in Bigha.',
        'View the converted area in Square Feet instantly.',
        'Refer to state-specific notes in the guide below.'
      ],
      formula: 'Square Feet = Bigha × 27,225 (Standard Pucca Bigha)',
      example: '1 Bigha = 27,225 Sq Ft (3,025 Gaj)\n2 Bigha = 54,450 Sq Ft\n0.5 Bigha = 13,612.5 Sq Ft',
      faqs: [
        {
          question: 'How many square feet are in 1 Bigha?',
          answer: 'In the standard Pucca Bigha (used in UP, Bihar, Rajasthan, Punjab), 1 Bigha equals 27,225 Square Feet (or 3,025 Gaj / Square Yards). In Bengal, 1 Bigha is standard at 14,400 sq ft (1,600 sq yards).'
        },
        {
          question: 'How many Bighas are in 1 Acre?',
          answer: 'In standard Pucca Bigha, 1 Acre equals 1.6 Bighas (43,560 ÷ 27,225 = 1.6 Bigha). In Bengal, 1 Acre equals 3.025 Bighas.'
        }
      ]
    },
    relatedToolIds: ['converter-gaj-to-sqft', 'converter-guntha-to-sqft', 'converter-cent-to-sqft']
  }
];
