import { ToolDefinition } from '@/types/tool';

export const DEVELOPER_TOOLS: ToolDefinition[] = [
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    slug: 'json-formatter',
    category: 'developer',
    description: 'Format, beautify, and inspect messy or minified JSON data with 2-space or 4-space indentation, syntax highlighting, and download option.',
    icon: 'FileCode2',
    keywords: ['json formatter', 'beautify json', 'pretty print json', 'format json online', 'json viewer'],
    seoTitle: 'JSON Formatter & Beautifier – Free Online Pretty Print | ToolNest',
    seoDescription: 'Format, pretty print, and validate raw JSON data instantly in your browser. Configurable indentation, syntax error detection, and copy/download.',
    componentKey: 'json-formatter',
    popular: true,
    featured: true,
    content: {
      whatIs: 'JSON (JavaScript Object Notation) is the ubiquitous standard data format for web APIs and configuration. A JSON Formatter parses unformatted or single-line JSON text and structures it with consistent hierarchy and indentation for easy debugging.',
      howToUse: [
        'Paste raw or minified JSON text into the editor, or click "Load Sample".',
        'Choose your desired indent style (2 spaces, 4 spaces, or tabs).',
        'Click "Format JSON" to beautify.',
        'Use "Copy to Clipboard" or "Download .json" to export the result.'
      ],
      tips: [
        'Trailing commas after the last array item or object property are invalid in standard JSON.',
        'Strings and keys in JSON must be enclosed in double quotes (`"key"`), not single quotes.'
      ],
      faqs: [
        {
          question: 'Is my JSON uploaded to a server?',
          answer: 'No! All parsing and formatting happens directly in your browser JavaScript engine. Your API payloads and sensitive tokens never leave your machine.'
        },
        {
          question: 'What is the maximum JSON file size supported?',
          answer: 'ToolNest can smoothly parse JSON strings up to several megabytes in size with instantaneous browser responsiveness.'
        }
      ]
    },
    relatedToolIds: ['json-validator', 'json-minifier', 'jwt-decoder', 'base64-decoder']
  },
  {
    id: 'json-validator',
    name: 'JSON Validator',
    slug: 'json-validator',
    category: 'developer',
    description: 'Validate JSON syntax in real time, locate parsing errors with exact line and column numbers, and view detailed diagnostics.',
    icon: 'CheckCircle',
    keywords: ['json validator', 'validate json', 'json syntax check', 'json linter', 'check json online'],
    seoTitle: 'JSON Validator – Validate JSON Syntax Online | ToolNest',
    seoDescription: 'Validate your JSON payloads for syntax correctness. Pinpoint exact line and column numbers of errors with human-friendly diagnostic advice.',
    componentKey: 'json-validator',
    popular: true,
    content: {
      whatIs: 'The JSON Validator checks whether a given text string strictly adheres to the ECMA-404 JSON Data Interchange Standard, catching missing brackets, illegal characters, and syntax violations.',
      howToUse: [
        'Enter or paste the JSON text in the validation area.',
        'Click "Validate JSON".',
        'If valid, see green confirmation and data statistics (key counts, depth). If invalid, inspect the highlighted line and error message.'
      ],
      tips: [
        'Comments (`//` or `/* */`) are not allowed in pure JSON specifications.',
        'Watch out for smart/curly quotes pasted from rich text apps like Microsoft Word.'
      ],
      faqs: [
        {
          question: 'Why does my JSON say "Unexpected token at position..."?',
          answer: 'This error occurs when the parser encounters a character that violates JSON syntax rules, such as an unescaped newline, missing colon, or trailing comma.'
        }
      ]
    },
    relatedToolIds: ['json-formatter', 'json-minifier', 'sql-validator']
  },
  {
    id: 'json-minifier',
    name: 'JSON Minifier',
    slug: 'json-minifier',
    category: 'developer',
    description: 'Compress and minify JSON payloads by stripping whitespace, line breaks, and indentation to reduce payload transfer size.',
    icon: 'Minimize2',
    keywords: ['json minifier', 'compress json', 'minify json online', 'shrink json'],
    seoTitle: 'JSON Minifier – Compress JSON Payloads Online | ToolNest',
    seoDescription: 'Strip unnecessary whitespace and indentation from JSON payloads. Reduce network payload size and verify compression statistics.',
    componentKey: 'json-minifier',
    content: {
      whatIs: 'Minifying JSON removes extraneous spaces, carriage returns, and indentation tabs while preserving the exact data structure, reducing payload size for network requests and storage.',
      howToUse: [
        'Paste your formatted or verbose JSON.',
        'Click "Minify JSON".',
        'Review original size vs minified size and % byte reduction.',
        'Copy or download the compressed output.'
      ],
      tips: ['Minifying large JSON fixtures can reduce payload size by 30% to 50% without any loss of data integrity.'],
      faqs: [
        {
          question: 'Does minification change the data structure?',
          answer: 'Not at all. The object keys, array items, numbers, strings, and booleans remain identical.'
        }
      ]
    },
    relatedToolIds: ['json-formatter', 'css-minifier', 'json-validator']
  },
  {
    id: 'sql-formatter',
    name: 'SQL Formatter',
    slug: 'sql-formatter',
    category: 'developer',
    description: 'Beautify and format messy SQL queries with standardized keyword capitalization, clause indentation, and clean line breaks.',
    icon: 'Database',
    keywords: ['sql formatter', 'format sql query', 'beautify sql', 'sql pretty print', 'uppercase sql keywords'],
    seoTitle: 'SQL Formatter & Beautifier – Clean SQL Queries Online | ToolNest',
    seoDescription: 'Format, indent, and uppercase SQL queries instantly. Supports standard ANSI SQL, MySQL, PostgreSQL, SQLite, and SQL Server syntax.',
    componentKey: 'sql-formatter',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The SQL Formatter organizes complex, single-line, or nested relational database queries into readable clauses with consistent capitalization of keywords (SELECT, FROM, WHERE, JOIN, GROUP BY).',
      howToUse: [
        'Paste your SQL query into the input box or click "Load Sample".',
        'Toggle keyword casing (Uppercase or lowercase).',
        'Click "Format SQL" to reorganize clauses and subqueries cleanly.',
        'Copy the formatted query to your clipboard.'
      ],
      example: '`select id,name from users where active=1` becomes:\n\n```sql\nSELECT\n  id,\n  name\nFROM users\nWHERE active = 1;\n```',
      tips: ['Consistent capitalization of SQL reserved keywords is standard practice in software engineering teams.'],
      faqs: [
        {
          question: 'Which SQL dialects are supported?',
          answer: 'Our formatter cleanly formats standard ANSI SQL, PostgreSQL, MySQL, SQLite, Oracle, MariaDB, and Microsoft SQL Server.'
        }
      ]
    },
    relatedToolIds: ['sql-validator', 'json-formatter', 'regex-tester']
  },
  {
    id: 'sql-validator',
    name: 'SQL Query Validator',
    slug: 'sql-validator',
    category: 'developer',
    description: 'Check SQL queries for structural syntax errors, unclosed quotes, mismatched parentheses, and keyword sequencing mistakes.',
    icon: 'ShieldCheck',
    keywords: ['sql validator', 'validate sql syntax', 'sql syntax checker', 'check sql query'],
    seoTitle: 'SQL Query Validator – Check SQL Syntax Errors Online | ToolNest',
    seoDescription: 'Validate your SQL statements for syntax flaws, bracket balancing, unclosed string literals, and clause ordering before executing in production.',
    componentKey: 'sql-validator',
    content: {
      whatIs: 'The SQL Query Validator parses database statements to catch syntax errors such as unclosed quotes, dangling commas, unbalanced parenthesis, and incorrect keyword ordering.',
      howToUse: [
        'Paste your SQL statement into the validation field.',
        'Click "Validate SQL".',
        'Check the validation report: green if structurally sound, or diagnostic warnings highlighting specific issues.'
      ],
      tips: ['Always validate complex subqueries and analytical window functions before executing migrations against live production databases.'],
      faqs: [
        {
          question: 'Does this check database schema or column names?',
          answer: 'The validator checks syntax structure and syntax rules. It does not connect to your private database schema.'
        }
      ]
    },
    relatedToolIds: ['sql-formatter', 'json-validator', 'regex-tester']
  },
  {
    id: 'base64-encoder',
    name: 'Base64 Encoder',
    slug: 'base64-encoder',
    category: 'developer',
    description: 'Convert plain text, strings, and UTF-8 characters into standard Base64 encoding with optional URL-safe mode.',
    icon: 'Binary',
    keywords: ['base64 encoder', 'encode base64', 'text to base64', 'base64 convert online', 'url safe base64'],
    seoTitle: 'Base64 Encoder – Convert Text to Base64 Online | ToolNest',
    seoDescription: 'Encode plain text or UTF-8 strings into Base64 format instantly. Full Unicode support and optional URL-safe Base64 mode.',
    componentKey: 'base64-encoder',
    popular: true,
    content: {
      whatIs: 'Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format by translating it into a radix-64 representation. It is standard for data URIs, basic auth headers, and email attachments.',
      howToUse: [
        'Type or paste plain text into the input field.',
        'Toggle URL-Safe mode if you plan to pass the encoded string in HTTP GET query parameters.',
        'Instant Base64 encoded string is output with one-click copy.'
      ],
      example: 'Input: `Hello, World!` -> Base64: `SGVsbG8sIFdvcmxkIQ==`',
      tips: ['Base64 encoding increases data size by approximately 33% compared to raw binary data.'],
      faqs: [
        {
          question: 'Is Base64 encryption?',
          answer: 'No! Base64 is an encoding format designed for safe transmission across text systems, not encryption. Anyone can decode it immediately.'
        }
      ]
    },
    relatedToolIds: ['base64-decoder', 'url-encoder', 'html-encoder', 'jwt-decoder']
  },
  {
    id: 'base64-decoder',
    name: 'Base64 Decoder',
    slug: 'base64-decoder',
    category: 'developer',
    description: 'Decode Base64 encoded strings back into clean, readable plain text with UTF-8 character support and error detection.',
    icon: 'Binary',
    keywords: ['base64 decoder', 'decode base64', 'base64 to text', 'base64 string decoder'],
    seoTitle: 'Base64 Decoder – Decode Base64 Strings Online | ToolNest',
    seoDescription: 'Decode Base64 strings to plain text online. Handles UTF-8 Unicode characters and detects invalid Base64 characters instantly.',
    componentKey: 'base64-decoder',
    popular: true,
    content: {
      whatIs: 'The Base64 Decoder reverses Base64 representations back into their original plain text characters or readable strings.',
      howToUse: [
        'Paste your Base64 encoded string into the input area.',
        'View the decoded plain text output in real time.',
        'If invalid characters are detected, helpful formatting hints are displayed.'
      ],
      example: '`SGVsbG8gV29ybGQ=` decodes to `Hello World`',
      tips: ['Base64 strings typically end with `=` or `==` padding characters to ensure a 4-character multiple block.'],
      faqs: [
        {
          question: 'What characters are allowed in Base64?',
          answer: 'Standard Base64 consists of uppercase A-Z, lowercase a-z, digits 0-9, plus `+` and `/`, and `=` for padding.'
        }
      ]
    },
    relatedToolIds: ['base64-encoder', 'url-decoder', 'jwt-decoder']
  },
  {
    id: 'url-encoder',
    name: 'URL Encoder',
    slug: 'url-encoder',
    category: 'developer',
    description: 'Encode special characters, spaces, and parameters into percent-encoded strings for safe HTTP URLs and query strings.',
    icon: 'Link',
    keywords: ['url encoder', 'percent encoding', 'encode uri component', 'url parameter encoder'],
    seoTitle: 'URL Encoder – Percent-Encode URLs & Query Parameters | ToolNest',
    seoDescription: 'Safely encode URLs and query strings into percent-encoded format. Choose between encodeURI and encodeURIComponent standards.',
    componentKey: 'url-encoder',
    content: {
      whatIs: 'URL encoding (also called percent-encoding) converts reserved and non-ASCII characters into `%` followed by two hexadecimal digits so they can be safely transmitted over the Internet in URLs.',
      howToUse: [
        'Enter raw URL or query parameter text.',
        'Choose standard: "Full URL (encodeURI)" or "Component/Param (encodeURIComponent)".',
        'Copy the percent-encoded string.'
      ],
      example: '`https://example.com/search?q=hello world & more` becomes `https://example.com/search?q=hello%20world%20%26%20more`',
      tips: ['Use component encoding when formatting individual query string values that contain characters like `&` or `=`.']
    },
    relatedToolIds: ['url-decoder', 'html-encoder', 'base64-encoder']
  },
  {
    id: 'url-decoder',
    name: 'URL Decoder',
    slug: 'url-decoder',
    category: 'developer',
    description: 'Decode percent-encoded (%20, %2F, %26, etc.) URLs and query string parameters back into clean readable text.',
    icon: 'Link2Off',
    keywords: ['url decoder', 'percent decode', 'decode url online', 'decode url parameters'],
    seoTitle: 'URL Decoder – Decode Percent-Encoded URLs Online | ToolNest',
    seoDescription: 'Decode percent-encoded URLs and query strings back to readable text. Supports UTF-8 encoded characters and plus-to-space normalization.',
    componentKey: 'url-decoder',
    content: {
      whatIs: 'The URL Decoder transforms percent-encoded sequences (e.g. `%20` for space, `%2F` for forward slash) back into regular human-readable characters.',
      howToUse: [
        'Paste your percent-encoded URL or query string into the input box.',
        'Instant decoded plain text is displayed.',
        'Optionally toggle whether `+` should be treated as spaces (standard form encoding).'
      ],
      tips: ['Useful for inspecting obscure redirects and affiliate parameters in lengthy tracking URLs.']
    },
    relatedToolIds: ['url-encoder', 'html-decoder', 'base64-decoder']
  },
  {
    id: 'html-encoder',
    name: 'HTML Encoder',
    slug: 'html-encoder',
    category: 'developer',
    description: 'Convert special HTML characters (&, <, >, ", \') into secure HTML entities to prevent XSS vulnerabilities and render issues.',
    icon: 'Code',
    keywords: ['html encoder', 'html entities', 'escape html', 'html special chars', 'prevent xss'],
    seoTitle: 'HTML Encoder – Escape HTML Entities Online | ToolNest',
    seoDescription: 'Escape special HTML characters into safe HTML entities (&amp;, &lt;, &gt;, etc.) to protect against cross-site scripting (XSS).',
    componentKey: 'html-encoder',
    content: {
      whatIs: 'HTML encoding replaces characters that have special structural meaning in HTML with their corresponding character entities to prevent browser misinterpretation and injection attacks.',
      howToUse: [
        'Paste raw HTML markup or text containing `<script>`, `&`, or quotes.',
        'View the converted HTML entity string.',
        'Copy the escaped text directly into your code, markdown, or documentation.'
      ],
      example: '`<div class="alert">Hello & Welcome</div>` -> `&lt;div class=&quot;alert&quot;&gt;Hello &amp; Welcome&lt;/div&gt;`'
    },
    relatedToolIds: ['html-decoder', 'url-encoder', 'base64-encoder']
  },
  {
    id: 'html-decoder',
    name: 'HTML Decoder',
    slug: 'html-decoder',
    category: 'developer',
    description: 'Convert escaped HTML entities (&amp;, &lt;, &gt;, &quot;) back into standard raw HTML tags and plain characters.',
    icon: 'Code',
    keywords: ['html decoder', 'unescape html', 'html entity decoder', 'decode html characters'],
    seoTitle: 'HTML Decoder – Unescape HTML Entities Online | ToolNest',
    seoDescription: 'Decode HTML entities back to raw HTML code and plain text characters. Handles named, decimal, and hexadecimal HTML entities.',
    componentKey: 'html-decoder',
    content: {
      whatIs: 'The HTML Decoder restores escaped HTML entities back into their original characters for clean reading and editing.',
      howToUse: [
        'Paste text containing HTML entities (named or numeric).',
        'Receive the decoded unescaped HTML instantly.',
        'Copy the result with one click.'
      ]
    },
    relatedToolIds: ['html-encoder', 'url-decoder', 'base64-decoder']
  },
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    slug: 'regex-tester',
    category: 'developer',
    description: 'Test regular expressions in real time with syntax highlighting, flag toggles (g, i, m, s), capture group breakdowns, and quick cheatsheet.',
    icon: 'SearchCode',
    keywords: ['regex tester', 'regular expression tester', 'test regex online', 'regex validator', 'regex flags'],
    seoTitle: 'Regex Tester & Debugger – Real-Time Regular Expressions | ToolNest',
    seoDescription: 'Test and debug regular expressions online with live match highlighting, capture group extraction, standard flags, and regex cheat sheet.',
    componentKey: 'regex-tester',
    popular: true,
    featured: true,
    content: {
      whatIs: 'A regular expression (Regex) is a sequence of characters defining a search pattern. The Regex Tester executes expressions directly against your sample text with visual match highlighting.',
      howToUse: [
        'Type your regular expression pattern in the regex bar (e.g. `[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}`).',
        'Toggle flags: Global (`g`), Case-Insensitive (`i`), Multiline (`m`), Single-line (`s`).',
        'Type or paste test strings into the editor.',
        'Review matched substrings, match count, and indexed capture groups.'
      ],
      tips: [
        'The `g` flag finds all matches throughout the text rather than stopping after the first match.',
        'Use non-capturing groups `(?:...)` when grouping without creating additional capture indexes.'
      ],
      faqs: [
        {
          question: 'Does this support JavaScript regex?',
          answer: 'Yes! The tester runs native ECMAScript regular expressions directly in your browser.'
        }
      ]
    },
    relatedToolIds: ['sql-validator', 'json-validator', 'text-sorter']
  },
  {
    id: 'uuid-generator',
    name: 'UUID Generator',
    slug: 'uuid-generator',
    category: 'developer',
    description: 'Generate cryptographically secure RFC 4122 Version 4 UUIDs (Universally Unique Identifiers) in bulk with case and hyphen controls.',
    icon: 'Fingerprint',
    keywords: ['uuid generator', 'guid generator', 'v4 uuid', 'generate uuid online', 'bulk uuid generator'],
    seoTitle: 'UUID Generator – Free RFC 4122 v4 UUID & GUID Tool | ToolNest',
    seoDescription: 'Generate cryptographically secure Version 4 UUIDs / GUIDs instantly. Supports bulk generation up to 100, uppercase/lowercase, and hyphens.',
    componentKey: 'uuid-generator',
    popular: true,
    content: {
      whatIs: 'A Universally Unique Identifier (UUID) is a 128-bit label used for identifying information in computer systems. Version 4 UUIDs are generated using pseudo-random numbers with $5.3 \\times 10^{36}$ possible combinations, making collisions mathematically negligible.',
      howToUse: [
        'Specify how many UUIDs to generate (1 to 100).',
        'Choose whether to include hyphens and select Uppercase or Lowercase.',
        'Click "Generate UUIDs" or copy the entire list with one click.'
      ],
      tips: ['V4 UUIDs use `crypto.getRandomValues()` for true cryptographic randomness.'],
      faqs: [
        {
          question: 'What are the chances of two v4 UUIDs colliding?',
          answer: 'To have a 50% probability of a single collision, you would need to generate approximately 2.71 quintillion UUIDs.'
        }
      ]
    },
    relatedToolIds: ['password-generator', 'hash-generator', 'timestamp-converter']
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    slug: 'password-generator',
    category: 'developer',
    description: 'Generate secure, randomized passwords with custom length, symbols, numbers, character exclusion, and entropy strength meter.',
    icon: 'KeyRound',
    keywords: ['password generator', 'strong password generator', 'random password', 'secure password generator'],
    seoTitle: 'Strong Password Generator – Secure & Randomized Passwords | ToolNest',
    seoDescription: 'Create cryptographically strong, random passwords. Customize length, uppercase, numbers, symbols, and test password entropy strength.',
    componentKey: 'password-generator',
    popular: true,
    featured: true,
    content: {
      whatIs: 'The Password Generator creates high-entropy random character strings using your browser cryptographically secure pseudorandom number generator (CSPRNG), protecting your digital accounts from brute-force dictionary attacks.',
      howToUse: [
        'Select desired length (recommend 16–32 characters).',
        'Toggle uppercase, lowercase, numbers, and special symbols.',
        'Optionally exclude ambiguous characters (like `0`, `O`, `l`, `1`, `I`).',
        'Check the entropy score and copy your secure password.'
      ],
      tips: [
        'Using a password of 16+ characters with mixed symbols requires trillions of years for modern computers to brute-force.',
        'Never reuse the same password across multiple online services.'
      ],
      faqs: [
        {
          question: 'Are generated passwords saved anywhere?',
          answer: 'No. Passwords are generated exclusively on your local device and vanish as soon as you refresh or close the page.'
        }
      ]
    },
    relatedToolIds: ['uuid-generator', 'hash-generator', 'base64-encoder']
  },
  {
    id: 'hash-generator',
    name: 'Hash Generator',
    slug: 'hash-generator',
    category: 'developer',
    description: 'Generate cryptographic message digests in SHA-256, SHA-512, SHA-1, and MD5 using native Web Crypto APIs.',
    icon: 'Hash',
    keywords: ['hash generator', 'sha256 generator', 'md5 hash', 'sha512 generator', 'cryptographic hash'],
    seoTitle: 'Hash Generator – SHA-256, SHA-512, SHA-1 & MD5 Online | ToolNest',
    seoDescription: 'Generate cryptographic hashes for text in real time. Instant SHA-256, SHA-512, SHA-1, and MD5 hashes calculated locally with Web Crypto.',
    componentKey: 'hash-generator',
    popular: true,
    content: {
      whatIs: 'A cryptographic hash function maps input data of arbitrary size to a fixed-size bit string. A minute change in the input produces an unrecognizable change in the output hash digest (the avalanche effect).',
      howToUse: [
        'Type or paste text into the input field.',
        'View real-time hash values generated simultaneously for SHA-256, SHA-512, SHA-1, and MD5.',
        'Click the copy icon beside any algorithm.'
      ],
      tips: ['For security applications, avoid MD5 and SHA-1 as they have documented collision vulnerabilities; use SHA-256 or SHA-512.'],
      faqs: [
        {
          question: 'Can you decrypt a SHA-256 hash?',
          answer: 'No. Cryptographic hashes are strictly one-way mathematical functions and cannot be decrypted back into original plaintext.'
        }
      ]
    },
    relatedToolIds: ['password-generator', 'uuid-generator', 'jwt-decoder']
  },
  {
    id: 'timestamp-converter',
    name: 'Timestamp Converter',
    slug: 'timestamp-converter',
    category: 'developer',
    description: 'Convert human-readable dates to Unix timestamps (seconds and milliseconds) and timestamps back to ISO 8601, UTC, and local date formats.',
    icon: 'Clock4',
    keywords: ['timestamp converter', 'epoch converter', 'unix time to date', 'human date to timestamp', 'epoch to date'],
    seoTitle: 'Timestamp Converter – Unix Epoch to Human Date | ToolNest',
    seoDescription: 'Convert Unix epoch timestamps (seconds and milliseconds) to human-readable dates and vice-versa. Real-time UTC, Local, and ISO 8601 conversions.',
    componentKey: 'timestamp-converter',
    popular: true,
    content: {
      whatIs: 'Unix time (or epoch time) tracks time as a running count of seconds that have elapsed since Thursday, 1 January 1970 00:00:00 UTC, ignoring leap seconds.',
      howToUse: [
        'To convert from epoch: enter a 10-digit (seconds) or 13-digit (milliseconds) timestamp.',
        'To convert to epoch: select a calendar date and time.',
        'View instantaneous conversions in UTC, Local Timezone, ISO 8601, and relative human format ("3 hours ago").'
      ],
      tips: ['A 10-digit number represents seconds; a 13-digit number represents milliseconds.']
    },
    relatedToolIds: ['unix-timestamp', 'time-duration', 'date-difference-calculator']
  },
  {
    id: 'unix-timestamp',
    name: 'Unix Timestamp Converter',
    slug: 'unix-timestamp',
    category: 'developer',
    description: 'Live ticking Unix epoch clock with one-click timestamp copy, date format generator, and epoch time math.',
    icon: 'Watch',
    keywords: ['unix timestamp', 'current unix time', 'epoch timestamp now', 'live unix clock'],
    seoTitle: 'Unix Timestamp Converter & Live Epoch Clock | ToolNest',
    seoDescription: 'Live ticking current Unix timestamp in seconds and milliseconds. One-click copy, epoch time conversions, and developer date utilities.',
    componentKey: 'unix-timestamp',
    content: {
      whatIs: 'The Unix Timestamp tool provides an active live clock of the current epoch timestamp, essential for backend developers setting token expiries and database queries.',
      howToUse: [
        'Inspect the live ticking timestamp in seconds and milliseconds.',
        'Click "Copy Current Epoch" to grab the timestamp immediately.',
        'Convert any past or future epoch value on the fly.'
      ]
    },
    relatedToolIds: ['timestamp-converter', 'countdown', 'stopwatch']
  },
  {
    id: 'jwt-decoder',
    name: 'JWT Decoder',
    slug: 'jwt-decoder',
    category: 'developer',
    description: 'Decode and inspect JSON Web Tokens (JWT) into Header and Payload JSON without transmitting your token over the internet.',
    icon: 'ShieldAlert',
    keywords: ['jwt decoder', 'decode jwt online', 'inspect jwt', 'jwt parser', 'jwt expiry check'],
    seoTitle: 'JWT Decoder – Decode JSON Web Tokens Online Securely | ToolNest',
    seoDescription: 'Decode and inspect JWT headers and payload claims in your browser. Check token expiration status without sending auth credentials anywhere.',
    componentKey: 'jwt-decoder',
    popular: true,
    featured: true,
    content: {
      whatIs: 'A JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact, URL-safe means for securely transmitting information between parties as a JSON object. It consists of three parts separated by dots: Header, Payload, and Signature.',
      howToUse: [
        'Paste your bearer token or JWT string.',
        'View the decoded Header (algorithm and token type) and Payload (claims, user ID, roles).',
        'Inspect the expiration date (`exp` claim) with automated expired/active status alert.'
      ],
      tips: ['Never share production secret keys or paste live production tokens into untrusted third-party servers. ToolNest decodes entirely in your browser.'],
      faqs: [
        {
          question: 'Does decoding a JWT verify its signature?',
          answer: 'Decoding displays the payload data inside the token. Verifying the signature requires the secret or public RSA key, which should remain secure on your server.'
        }
      ]
    },
    relatedToolIds: ['base64-decoder', 'json-formatter', 'hash-generator']
  },
  {
    id: 'color-converter',
    name: 'Color Converter',
    slug: 'color-converter',
    category: 'developer',
    description: 'Convert color codes between HEX, RGB, HSL, and CMYK formats with interactive color picker and palette preview.',
    icon: 'Palette',
    keywords: ['color converter', 'hex to rgb', 'rgb to hex', 'rgb to hsl', 'color picker online'],
    seoTitle: 'Color Converter – HEX, RGB, HSL & CMYK Online | ToolNest',
    seoDescription: 'Convert color formats between HEX, RGB, HSL, and CMYK. Visual color swatch, contrast checker, and instant one-click format copying.',
    componentKey: 'color-converter',
    popular: true,
    content: {
      whatIs: 'The Color Converter enables designers and frontend developers to seamlessly translate colors between digital screen models (RGB, HEX, HSL) and print standards (CMYK).',
      howToUse: [
        'Enter any color value (e.g. `#4F46E5`, `rgb(79, 70, 229)`, or `hsl(243, 75%, 59%)`) or click the color swatch.',
        'All color formats update simultaneously.',
        'Click the copy button beside your preferred format.'
      ],
      tips: ['HSL is often easier for UI styling adjustments because you can alter lightness or saturation while preserving the exact base hue.']
    },
    relatedToolIds: ['css-minifier', 'html-encoder', 'json-formatter']
  },
  {
    id: 'css-minifier',
    name: 'CSS Minifier',
    slug: 'css-minifier',
    category: 'developer',
    description: 'Minify and optimize CSS styles by stripping comments, consolidating selectors, and removing whitespace to speed up stylesheet downloads.',
    icon: 'FileSpreadsheet',
    keywords: ['css minifier', 'compress css', 'minify css online', 'optimize css', 'css compressor'],
    seoTitle: 'CSS Minifier – Compress Stylesheets Online | ToolNest',
    seoDescription: 'Minify and compress your CSS code online. Remove unused whitespace, comments, and redundant semicolons to boost page load speed.',
    componentKey: 'css-minifier',
    content: {
      whatIs: 'Minifying CSS removes unnecessary whitespace, comments, and redundant formatting from stylesheets, reducing file transfer size and speeding up browser rendering times.',
      howToUse: [
        'Paste your standard CSS stylesheet into the editor.',
        'Click "Minify CSS".',
        'Review original size, compressed size, and percentage savings.',
        'Copy or download the optimized `.min.css` code.'
      ]
    },
    relatedToolIds: ['json-minifier', 'color-converter', 'html-encoder']
  }
];
