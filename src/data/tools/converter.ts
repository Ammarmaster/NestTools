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
  }
];
