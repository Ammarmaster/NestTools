import { ToolDefinition } from '@/types/tool';

export const TEXT_TOOLS: ToolDefinition[] = [
  {
    id: 'word-counter',
    name: 'Word Counter',
    slug: 'word-counter',
    category: 'text',
    description: 'Count words, characters, sentences, paragraphs, and estimate reading and speaking time in real time as you type.',
    icon: 'AlignLeft',
    keywords: ['word counter', 'count words online', 'character count', 'essay word count', 'reading time estimator'],
    seoTitle: 'Word Counter – Free Real-Time Text Statistics | ToolNest',
    seoDescription: 'Count words and characters online in real time. Accurate statistics for essays, articles, and social media with reading and speaking time.',
    componentKey: 'word-counter',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The Word Counter is a comprehensive real-time writing analysis tool that counts words, characters with and without spaces, sentences, paragraphs, and reading duration.',
      howToUse: [
        'Type or paste your text directly into the text box.',
        'View instant real-time statistics updating on every keystroke.',
        'Inspect estimated reading time (at 200 WPM) and speaking presentation time (at 130 WPM).'
      ],
      tips: [
        'Twitter/X has a 280-character limit for standard posts.',
        'Meta descriptions for SEO should typically stay between 150 and 160 characters.'
      ],
      faqs: [
        {
          question: 'How is a word defined?',
          answer: 'A word is defined as a non-whitespace character cluster bounded by spaces, punctuation, or line breaks.'
        }
      ]
    },
    relatedToolIds: ['character-counter', 'reading-time', 'case-converter', 'sentence-counter']
  },
  {
    id: 'character-counter',
    name: 'Character Counter',
    slug: 'character-counter',
    category: 'text',
    description: 'Calculate character counts with spaces, characters without spaces, letter count, digit count, and special symbols.',
    icon: 'LetterText',
    keywords: ['character counter', 'count characters', 'letter counter', 'characters with spaces', 'tweet character counter'],
    seoTitle: 'Character Counter – Count Characters With & Without Spaces | ToolNest',
    seoDescription: 'Accurately count characters, letters, numbers, and symbols in your text. Essential for character limits on social media, SMS, and SEO tags.',
    componentKey: 'character-counter',
    popular: true,
    content: {
      whatIs: 'The Character Counter isolates the exact number of Unicode characters, letters, whitespace spaces, numbers, and symbols in any text.',
      howToUse: [
        'Paste your text into the editor.',
        'Instantly view breakdown: Total Characters, Characters (no spaces), Letters, Numbers, and Whitespace.',
        'Monitor against preset limits (SMS 160 chars, Twitter 280 chars, LinkedIn 3,000 chars).'
      ]
    },
    relatedToolIds: ['word-counter', 'sentence-counter', 'line-counter']
  },
  {
    id: 'sentence-counter',
    name: 'Sentence Counter',
    slug: 'sentence-counter',
    category: 'text',
    description: 'Count sentences, compute average sentence length, and evaluate readability scores for essays and articles.',
    icon: 'Pilcrow',
    keywords: ['sentence counter', 'count sentences', 'average sentence length', 'readability checker'],
    seoTitle: 'Sentence Counter – Count Sentences & Check Readability | ToolNest',
    seoDescription: 'Count sentences and calculate average words per sentence. Improve your writing clarity and readability for academic and blog writing.',
    componentKey: 'sentence-counter',
    content: {
      whatIs: 'The Sentence Counter analyzes terminal punctuation (periods, question marks, exclamation points) to count distinct sentences and measure syntactic density.',
      howToUse: [
        'Paste your paragraph or manuscript.',
        'Review total sentence count and average words per sentence.',
        'Sentences longer than 25 words are flagged for readability tuning.'
      ],
      tips: ['For general web readability, aim for an average of 14 to 18 words per sentence.']
    },
    relatedToolIds: ['word-counter', 'paragraph-counter', 'reading-time']
  },
  {
    id: 'paragraph-counter',
    name: 'Paragraph Counter',
    slug: 'paragraph-counter',
    category: 'text',
    description: 'Count paragraphs, calculate average sentences per paragraph, and inspect layout pacing in articles and documents.',
    icon: 'AlignJustify',
    keywords: ['paragraph counter', 'count paragraphs', 'paragraph analyzer', 'essay structure counter'],
    seoTitle: 'Paragraph Counter – Count & Analyze Paragraphs Online | ToolNest',
    seoDescription: 'Analyze paragraph structure and count. Get average paragraph lengths and sentences per paragraph to improve reader engagement.',
    componentKey: 'paragraph-counter',
    content: {
      whatIs: 'The Paragraph Counter detects line break separations to identify distinct thematic paragraphs in your writing.',
      howToUse: [
        'Paste your document.',
        'View total paragraphs, average words per paragraph, and dense wall-of-text warnings.'
      ]
    },
    relatedToolIds: ['sentence-counter', 'word-counter', 'line-counter']
  },
  {
    id: 'reading-time',
    name: 'Reading Time Calculator',
    slug: 'reading-time',
    category: 'text',
    description: 'Calculate estimated silent reading time and spoken presentation duration based on average human reading speeds.',
    icon: 'Hourglass',
    keywords: ['reading time calculator', 'calculate reading time', 'speech time calculator', 'words to minutes'],
    seoTitle: 'Reading Time Calculator – Estimate Article & Speech Duration | ToolNest',
    seoDescription: 'Calculate how long it takes to read or speak any text. Ideal for blog posts, speeches, keynote presentations, and podcast scripts.',
    componentKey: 'reading-time',
    popular: true,
    content: {
      whatIs: 'The Reading Time Calculator translates total word count into time duration using standard cognitive benchmarks (average adult silent reading speed: 200–250 words per minute; speaking presentation speed: 120–150 words per minute).',
      howToUse: [
        'Paste your speech, script, or blog article.',
        'Adjust the reading speed slider (Slow, Average, Fast).',
        'Receive the exact minutes and seconds required to read silently or deliver aloud.'
      ],
      formula: '\\text{Time (minutes)} = \\frac{\\text{Total Words}}{\\text{Words Per Minute (WPM)}}',
      example: 'A 1,000-word blog post at 200 WPM takes 5 minutes to read. A 1,000-word keynote speech at 130 WPM takes 7 minutes and 41 seconds to deliver.'
    },
    relatedToolIds: ['word-counter', 'sentence-counter', 'character-counter']
  },
  {
    id: 'case-converter',
    name: 'Text Case Converter',
    slug: 'case-converter',
    category: 'text',
    description: 'Convert text between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, kebab-case, and PascalCase with one click.',
    icon: 'CaseSensitive',
    keywords: ['case converter', 'text case', 'title case', 'camelcase converter', 'snake_case converter', 'kebab-case'],
    seoTitle: 'Text Case Converter – Upper, Lower, Title & Code Cases | ToolNest',
    seoDescription: 'Convert text between Uppercase, Lowercase, Title Case, Sentence Case, camelCase, kebab-case, and snake_case instantly. Free online tool.',
    componentKey: 'case-converter',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The Text Case Converter transforms typographical casing for authors, copywriters, and programmers transitioning strings between naming conventions.',
      howToUse: [
        'Type or paste your text.',
        'Click any conversion button (Title Case, Sentence case, UPPERCASE, lowercase, camelCase, kebab-case, snake_case, PascalCase, Alternating cAsE).',
        'Copy the formatted output immediately.'
      ]
    },
    relatedToolIds: ['uppercase', 'lowercase', 'slug-generator', 'text-sorter']
  },
  {
    id: 'uppercase',
    name: 'Uppercase Converter',
    slug: 'uppercase',
    category: 'text',
    description: 'Transform any text or document into all capital letters (UPPERCASE) instantly.',
    icon: 'ArrowUpCircle',
    keywords: ['uppercase converter', 'capitalize text', 'convert to all caps', 'capital letters generator'],
    seoTitle: 'Uppercase Converter – Convert Text to All Caps Online | ToolNest',
    seoDescription: 'Convert all letters in your text to uppercase capital letters instantly. Fast, free, browser-based tool with one-click copy.',
    componentKey: 'uppercase',
    content: {
      whatIs: 'Transforms all lowercase alphabetical characters to their capitalized UPPERCASE equivalents.',
      howToUse: [
        'Paste your text.',
        'The text is immediately capitalized.',
        'Click "Copy to Clipboard".'
      ]
    },
    relatedToolIds: ['lowercase', 'case-converter', 'text-reverser']
  },
  {
    id: 'lowercase',
    name: 'Lowercase Converter',
    slug: 'lowercase',
    category: 'text',
    description: 'Convert all capitalized letters and text into clean lowercase characters with one click.',
    icon: 'ArrowDownCircle',
    keywords: ['lowercase converter', 'small letters converter', 'convert to lowercase', 'all small caps'],
    seoTitle: 'Lowercase Converter – Convert Text to Lowercase Online | ToolNest',
    seoDescription: 'Convert any uppercase or mixed case text into all lowercase characters instantly. Free, lightweight text formatter.',
    componentKey: 'lowercase',
    content: {
      whatIs: 'Translates all uppercase letters into lowercase letters while preserving spaces, digits, and punctuation.',
      howToUse: [
        'Paste text with accidental caps lock or mixed casing.',
        'Instantly view clean lowercase text.',
        'Copy with one click.'
      ]
    },
    relatedToolIds: ['uppercase', 'case-converter', 'slug-generator']
  },
  {
    id: 'remove-duplicate-lines',
    name: 'Remove Duplicate Lines',
    slug: 'remove-duplicate-lines',
    category: 'text',
    description: 'Deduplicate lines from lists, emails, keywords, or CSV exports with case sensitivity and empty line controls.',
    icon: 'CopySlash',
    keywords: ['remove duplicate lines', 'deduplicate list', 'delete duplicate lines', 'unique lines filter'],
    seoTitle: 'Remove Duplicate Lines – Deduplicate Text Online | ToolNest',
    seoDescription: 'Remove duplicate lines from lists, keywords, and data exports. Filter out repeated entries, trim whitespace, and keep only unique lines.',
    componentKey: 'remove-duplicate-lines',
    popular: true,
    content: {
      whatIs: 'The Duplicate Line Remover scans line-by-line lists (such as email rosters, inventory codes, or search keywords) to eliminate redundant entries, leaving only unique rows.',
      howToUse: [
        'Paste your list into the input box.',
        'Toggle "Case Sensitive" or "Trim Whitespace" as needed.',
        'Click "Remove Duplicates".',
        'Review original line count vs unique line count and copy your cleaned list.'
      ]
    },
    relatedToolIds: ['remove-extra-spaces', 'text-sorter', 'line-counter']
  },
  {
    id: 'remove-extra-spaces',
    name: 'Remove Extra Spaces',
    slug: 'remove-extra-spaces',
    category: 'text',
    description: 'Clean up text by removing consecutive spaces, leading and trailing whitespace, and excessive empty line breaks.',
    icon: 'Minimize',
    keywords: ['remove extra spaces', 'clean text whitespace', 'remove leading spaces', 'strip multiple spaces'],
    seoTitle: 'Remove Extra Spaces – Clean Text & Blank Lines Online | ToolNest',
    seoDescription: 'Remove double spaces, trailing whitespace, and redundant blank lines from your text. Clean up formatting copied from PDFs or websites.',
    componentKey: 'remove-extra-spaces',
    content: {
      whatIs: 'Cleans text copied from PDFs, scans, or raw HTML by standardizing multiple spaces into single spaces and trimming superfluous line breaks.',
      howToUse: [
        'Paste messy text containing double spaces or irregular indents.',
        'Choose cleanup options: Single Spaces Only, Remove Empty Lines, or Trim Ends.',
        'Copy the pristine, standardized text.'
      ]
    },
    relatedToolIds: ['remove-duplicate-lines', 'line-counter', 'case-converter']
  },
  {
    id: 'text-sorter',
    name: 'Text Sorter',
    slug: 'text-sorter',
    category: 'text',
    description: 'Sort lists alphabetically (A to Z or Z to A), numerically, by line length, or in randomized shuffle order.',
    icon: 'ArrowUpDown',
    keywords: ['text sorter', 'alphabetize list', 'sort lines online', 'alphabetical order', 'sort lines by length'],
    seoTitle: 'Text Sorter – Alphabetize & Sort Lists Online | ToolNest',
    seoDescription: 'Sort text lines alphabetically (A-Z, Z-A), numerically, or by character length. Instant sorting for keyword lists, names, and logs.',
    componentKey: 'text-sorter',
    popular: true,
    content: {
      whatIs: 'The Text Sorter organizes lists of items into ordered sequences using natural alphabetical, numerical, or length-based algorithms.',
      howToUse: [
        'Paste your list (one item per line).',
        'Select sort criterion: Alphabetical (A-Z), Reverse (Z-A), Numeric, Line Length, or Random Shuffle.',
        'View the sorted output and copy.'
      ]
    },
    relatedToolIds: ['remove-duplicate-lines', 'text-reverser', 'line-counter']
  },
  {
    id: 'text-reverser',
    name: 'Text Reverser',
    slug: 'text-reverser',
    category: 'text',
    description: 'Reverse text characters, flip word order, or reverse entire lines upside down and backward.',
    icon: 'Repeat',
    keywords: ['text reverser', 'reverse text', 'backwards text generator', 'reverse words', 'reverse lines'],
    seoTitle: 'Text Reverser – Reverse Characters, Words & Lines | ToolNest',
    seoDescription: 'Reverse text backward, reverse word ordering in sentences, or invert line order. Fun, fast, and interactive text flipper tool.',
    componentKey: 'text-reverser',
    content: {
      whatIs: 'The Text Reverser flips string sequences at the character level, word level, or line level for puzzles, testing, and creative styling.',
      howToUse: [
        'Enter your text.',
        'Select reversal mode: Reverse Characters, Reverse Word Order, or Reverse Lines.',
        'Copy your reversed output.'
      ]
    },
    relatedToolIds: ['text-sorter', 'case-converter', 'uppercase']
  },
  {
    id: 'line-counter',
    name: 'Line Counter',
    slug: 'line-counter',
    category: 'text',
    description: 'Count total lines, non-empty lines, empty blank lines, and average line character lengths in any document or code block.',
    icon: 'ListOrdered',
    keywords: ['line counter', 'count lines in text', 'count code lines', 'blank lines counter'],
    seoTitle: 'Line Counter – Count Total & Non-Empty Lines Online | ToolNest',
    seoDescription: 'Count lines in text or source code files. Breaks down total lines, populated lines, blank lines, and average characters per line.',
    componentKey: 'line-counter',
    content: {
      whatIs: 'The Line Counter tallies lines in text, transcripts, or code snippets, distinguishing between populated rows and blank lines.',
      howToUse: [
        'Paste text or code into the counter.',
        'Inspect the line breakdown metrics.',
        'Optionally add line numbers to every line with one click.'
      ]
    },
    relatedToolIds: ['word-counter', 'remove-duplicate-lines', 'character-counter']
  },
  {
    id: 'slug-generator',
    name: 'Slug Generator',
    slug: 'slug-generator',
    category: 'text',
    description: 'Convert article headlines and titles into clean, SEO-friendly URL slugs with lowercase formatting and accent removal.',
    icon: 'Link',
    keywords: ['slug generator', 'url slug generator', 'seo slug generator', 'permalink generator'],
    seoTitle: 'Slug Generator – Create Clean SEO URL Slugs Online | ToolNest',
    seoDescription: 'Transform titles and blog headlines into URL-friendly slugs. Strips special characters, transliterates accents, and standardizes hyphens.',
    componentKey: 'slug-generator',
    popular: true,
    content: {
      whatIs: 'A URL slug is the human-readable portion of a web address that identifies a specific page. Clean slugs boost search engine click-through rates and SEO rankings.',
      howToUse: [
        'Enter an article title or headline.',
        'Select separator (Hyphen `-` or Underscore `_`).',
        'Copy the normalized, lowercase, web-safe URL slug.'
      ],
      example: '`10 Tips for Modern Web Development in 2026!` becomes `10-tips-for-modern-web-development-in-2026`'
    },
    relatedToolIds: ['case-converter', 'url-encoder', 'lowercase']
  },
  {
    id: 'lorem-ipsum-generator',
    name: 'Lorem Ipsum Generator',
    slug: 'lorem-ipsum-generator',
    category: 'text',
    description: 'Generate customizable dummy placeholder text by paragraphs, sentences, words, or lists for UI layouts and wireframes.',
    icon: 'FileCode',
    keywords: ['lorem ipsum generator', 'dummy text generator', 'placeholder text', 'generate lorem ipsum'],
    seoTitle: 'Lorem Ipsum Generator – Dummy Placeholder Text Online | ToolNest',
    seoDescription: 'Generate custom dummy Lorem Ipsum placeholder text for web design, prototypes, and mockups. Customize paragraphs, words, or sentences.',
    componentKey: 'lorem-ipsum-generator',
    popular: true,
    content: {
      whatIs: 'Lorem Ipsum is standard placeholder dummy text derived from Cicero\'s classical 45 BC philosophical treatise "De finibus bonorum et malorum", used by printers and designers since the 1500s.',
      howToUse: [
        'Select whether you want Paragraphs, Sentences, Words, or List Items.',
        'Enter the desired quantity (1 to 50).',
        'Optionally check "Start with \'Lorem ipsum dolor sit amet...\'".',
        'Click "Generate Text" and copy to clipboard.'
      ]
    },
    relatedToolIds: ['word-counter', 'slug-generator', 'case-converter']
  }
];
