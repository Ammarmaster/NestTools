import { ToolDefinition } from '@/types/tool';

export const pdfTools: ToolDefinition[] = [
  {
    id: 'pdf-to-docx',
    name: 'PDF to Word (DOCX) Converter',
    slug: 'pdf-to-docx',
    category: 'pdf',
    description: 'Convert PDF documents to editable Microsoft Word (.docx) files 100% in your browser without uploading to any remote server.',
    icon: 'FileText',
    keywords: ['pdf to docx', 'convert pdf to word', 'free pdf to docx converter', 'editable word document', 'client side pdf to word'],
    seoTitle: 'Free PDF to DOCX Converter - Convert PDF to Word Online Privately',
    seoDescription: 'Convert PDF files to editable Microsoft Word (.docx) format 100% in your browser. Fast, free, private, with zero server uploads or signups required.',
    componentKey: 'pdf-to-docx',
    popular: true,
    featured: true,
    isNew: true,
    content: {
      whatIs: 'The PDF to Word (DOCX) Converter is a privacy-first utility that converts PDF document text and structure into a standardized Microsoft Word (.docx) file directly inside your browser. Unlike traditional conversion websites that require you to upload confidential files to third-party cloud servers, ToolNest processes your document locally using client-side JavaScript, ensuring total privacy and security for contracts, resumes, and legal papers.',
      howToUse: [
        'Drag and drop your PDF file into the designated upload area or click to select from your device.',
        'Review the extracted document preview and edit or format text sections if needed.',
        'Click the "Generate & Download DOCX" button.',
        'Your converted Microsoft Word document (.docx) will immediately download to your computer.'
      ],
      formula: 'Client-side binary parsing + OpenXML Document Architecture (.docx Package)',
      example: 'Converting an employment agreement from Agreement.pdf to Agreement.docx without sensitive salary figures leaving your device.',
      benefits: [
        '100% Private & Confidential: Files never leave your browser or device.',
        'No File Size Limits or Hidden Paywalls: Completely free with zero subscriptions.',
        'Instantaneous Processing: No server queuing or upload/download waiting time.',
        'Universal Compatibility: Output files open cleanly in Microsoft Word, Google Docs, and LibreOffice.'
      ],
      tips: [
        'Ensure your PDF has selectable text for optimal conversion accuracy.',
        'For scanned physical paper documents, ensure good lighting and contrast prior to OCR.',
        'You can edit the extracted text directly in the preview box before generating the final Word file.'
      ],
      faqs: [
        {
          question: 'Are my confidential files uploaded to any server?',
          answer: 'No. ToolNest operates 100% client-side in your browser using JavaScript and HTML5 File APIs. Your files are processed in local memory and are never transmitted over the internet.'
        },
        {
          question: 'Does the converted DOCX file work in Google Docs and Microsoft Word?',
          answer: 'Yes! The generated file adheres strictly to the ISO/IEC 29500 standard OpenXML (.docx) format, fully compatible with MS Word, Google Docs, Pages, and LibreOffice.'
        },
        {
          question: 'Is there a limit on how many PDFs I can convert?',
          answer: 'There are zero limits. You can convert as many PDF documents as you need, completely free of charge.'
        }
      ]
    },
    relatedToolIds: ['pdf-merger', 'pdf-to-text', 'image-to-pdf']
  },
  {
    id: 'pdf-merger',
    name: 'PDF Merger (Combine PDFs)',
    slug: 'pdf-merger',
    category: 'pdf',
    description: 'Merge and combine multiple PDF documents into a single organized PDF file directly in your browser with zero data uploads.',
    icon: 'Layers',
    keywords: ['merge pdf', 'combine pdfs', 'pdf joiner', 'merge multiple pdf files online', 'combine pdf documents free'],
    seoTitle: 'Free PDF Merger - Combine Multiple PDF Files Online Privately',
    seoDescription: 'Combine multiple PDF files into one clean document in seconds. 100% client-side PDF merger with custom page ordering, zero server uploads, and no watermarks.',
    componentKey: 'pdf-merger',
    popular: true,
    featured: true,
    isNew: true,
    content: {
      whatIs: 'The PDF Merger is a secure client-side tool that allows you to join multiple separate PDF documents into a single continuous file. Powered by the high-performance pdf-lib engine running in WebAssembly/JavaScript, merging happens in milliseconds directly within your device’s local memory, eliminating file size throttles, queues, and privacy hazards.',
      howToUse: [
        'Select or drag-and-drop multiple PDF files into the upload zone.',
        'Rearrange the files into your desired reading order using the up/down controls.',
        'Click the "Merge PDF Files" button.',
        'Download your combined single PDF document instantly.'
      ],
      formula: 'PDF Document Concatenation: Document_Total = Page[1..n](PDF_A) + Page[1..m](PDF_B) + ...',
      example: 'Combining a cover letter (CoverLetter.pdf), resume (Resume.pdf), and letters of recommendation into a single JobApplication.pdf.',
      benefits: [
        'Absolute privacy: Zero document upload to external servers.',
        'Custom page reordering: Easily organize the sequence before merging.',
        'No file size restrictions: Merge large reports without subscription paywalls.',
        'Zero watermarks: Leaves your merged PDFs completely clean and professional.'
      ],
      tips: [
        'Make sure none of your uploaded PDFs are password-encrypted before merging.',
        'Double-check the file order in the list before hitting merge to ensure correct sequence.'
      ],
      faqs: [
        {
          question: 'Will merging decrease the visual quality or text sharpness?',
          answer: 'No. The underlying vector graphics, high-resolution imagery, and embedded fonts are copied losslessly without compression degradation.'
        },
        {
          question: 'How many PDF files can I merge at once?',
          answer: 'You can merge dozens of PDF files simultaneously, limited only by your computer’s local memory capacity.'
        }
      ]
    },
    relatedToolIds: ['pdf-to-docx', 'pdf-page-rotator', 'pdf-page-splitter']
  },
  {
    id: 'pdf-to-text',
    name: 'PDF Text Extractor',
    slug: 'pdf-to-text',
    category: 'pdf',
    description: 'Extract raw text, paragraphs, and content from any PDF document for quick copying, analysis, or editing.',
    icon: 'AlignLeft',
    keywords: ['pdf to text', 'extract text from pdf', 'pdf text extractor', 'copy text from pdf', 'pdf to txt online'],
    seoTitle: 'Free PDF to Text Extractor - Extract Plain Text from PDF Online',
    seoDescription: 'Extract plain text and content from PDF files instantly in your browser. Fast, private, zero server uploads, with one-click copy and TXT download.',
    componentKey: 'pdf-to-text',
    popular: false,
    featured: false,
    isNew: true,
    content: {
      whatIs: 'The PDF Text Extractor reads and pulls all textual content out of PDF files, transforming complex layouts into clean, manageable plain text. It is ideal for extracting data from research papers, ebooks, receipts, and reports without manual re-typing.',
      howToUse: [
        'Upload your PDF file.',
        'The extractor automatically parses all textual content across all pages.',
        'Review the extracted text with word and character statistics.',
        'Click "Copy to Clipboard" or "Download TXT File".'
      ],
      formula: 'PDF Content Stream Parsing + UTF-8 Character Mapping',
      example: 'Extracting references and bibliography from an academic journal paper into clean text format for citation managers.',
      benefits: [
        'Instantly extracts thousands of words in seconds.',
        'One-click copy and .txt file export.',
        'Provides real-time word and character counts of extracted content.',
        'Completely private and offline-capable.'
      ],
      tips: [
        'Works best on text-based PDFs generated from word processors or digital printers.',
        'Scanned image-only PDFs require OCR before textual extraction.'
      ],
      faqs: [
        {
          question: 'Can I extract text from a multi-page PDF?',
          answer: 'Yes! The tool extracts text from all pages sequentially and displays total word and character metrics.'
        }
      ]
    },
    relatedToolIds: ['pdf-to-docx', 'word-counter', 'case-converter']
  },
  {
    id: 'image-to-pdf',
    name: 'Image to PDF Converter',
    slug: 'image-to-pdf',
    category: 'pdf',
    description: 'Convert JPG, PNG, and WebP images into high-resolution, beautifully formatted PDF documents.',
    icon: 'Image',
    keywords: ['image to pdf', 'jpg to pdf', 'png to pdf', 'convert photo to pdf', 'picture to pdf converter online'],
    seoTitle: 'Free Image to PDF Converter - Convert JPG, PNG to PDF Online Privately',
    seoDescription: 'Convert pictures, photos, and scanned images (JPG, PNG, WebP) into professional PDF documents. Choose page orientation, margins, and download instantly.',
    componentKey: 'image-to-pdf',
    popular: true,
    featured: false,
    isNew: true,
    content: {
      whatIs: 'The Image to PDF Converter takes your photos, scans, screenshots, and artwork in JPG, PNG, or WebP format and packages them into clean, standardized PDF pages. You can adjust orientation (portrait vs. landscape) and page margins to produce polished documents suitable for legal submissions, homework, and portfolios.',
      howToUse: [
        'Upload one or more images (JPG, PNG, or WebP).',
        'Choose your desired page orientation (Portrait or Landscape).',
        'Select page margins (None, Small, or Standard).',
        'Click "Convert to PDF" and download your document.'
      ],
      formula: 'PDF Vector Viewport Scaling: Image_Width x Image_Height mapped to Standard A4/Letter Coordinates',
      example: 'Packaging 4 smartphone photos of handwritten class notes or ID cards into a single homework submission PDF.',
      benefits: [
        'Crisp image reproduction without compression blur.',
        'Supports multiple images into a unified multi-page PDF.',
        'Flexible layout controls: portrait, landscape, and margin adjustments.',
        '100% private — your personal photos are never uploaded to any server.'
      ],
      tips: [
        'Use Portrait orientation for documents and receipts; use Landscape for panoramic drawings or slides.',
        'Select "Small Margins" for standard printing compatibility.'
      ],
      faqs: [
        {
          question: 'Can I convert multiple images into one multi-page PDF?',
          answer: 'Yes! You can upload multiple images and they will be compiled into sequential pages of a single PDF file.'
        }
      ]
    },
    relatedToolIds: ['pdf-merger', 'image-compressor', 'pdf-to-docx']
  },
  {
    id: 'pdf-page-rotator',
    name: 'PDF Page Rotator',
    slug: 'pdf-page-rotator',
    category: 'pdf',
    description: 'Rotate upside-down or sideways PDF pages by 90°, 180°, or 270° degrees and download the corrected document.',
    icon: 'RotateCw',
    keywords: ['rotate pdf', 'fix upside down pdf', 'turn pdf pages', 'rotate pdf 90 degrees', 'pdf rotator online free'],
    seoTitle: 'Free PDF Page Rotator - Rotate PDF Pages 90, 180, 270 Degrees Online',
    seoDescription: 'Fix upside-down and sideways scanned PDF pages permanently. Rotate individual or all pages by 90°, 180°, or 270° and download your corrected PDF.',
    componentKey: 'pdf-page-rotator',
    popular: false,
    featured: false,
    isNew: true,
    content: {
      whatIs: 'The PDF Page Rotator allows you to rectify misaligned, sideways, or inverted PDF documents. Whether caused by a faulty scanner feeder or mobile capture, this tool rewrites the page viewport transformation matrix client-side, saving permanent rotation metadata without recompressing or blurring content.',
      howToUse: [
        'Upload your PDF file.',
        'Choose your desired rotation angle (90° Clockwise, 180° Inverted, or 270° / 90° Counter-Clockwise).',
        'Click "Apply Rotation & Download".',
        'Download your properly aligned PDF document.'
      ],
      formula: 'Transformation Matrix: Rotation_New = (Rotation_Current + θ) mod 360°',
      example: 'Rotating a sideways scan of a bank statement 90 degrees clockwise for easy reading and submission.',
      benefits: [
        'Permanent fix: Documents stay correctly oriented across all viewers and printers.',
        'Lossless rotation: Zero re-encoding of photos or vectors.',
        'Instant processing with no server uploads.'
      ],
      tips: [
        'Use 90° Clockwise for standard sideways scanner pages.',
        'Use 180° for upside-down scans.'
      ],
      faqs: [
        {
          question: 'Will this make the file size larger?',
          answer: 'No. Rotating pages only modifies the orientation flag in the PDF dictionary, leaving the file size virtually identical.'
        }
      ]
    },
    relatedToolIds: ['pdf-merger', 'pdf-page-splitter', 'image-to-pdf']
  },
  {
    id: 'pdf-page-splitter',
    name: 'PDF Page Splitter & Extractor',
    slug: 'pdf-page-splitter',
    category: 'pdf',
    description: 'Extract specific pages or page ranges from a large PDF file into a new standalone PDF document.',
    icon: 'Scissors',
    keywords: ['split pdf', 'extract pdf pages', 'separate pdf pages', 'pdf page splitter free', 'cut pdf pages online'],
    seoTitle: 'Free PDF Page Splitter - Extract PDF Pages Online Privately',
    seoDescription: 'Extract specific pages or page ranges from any PDF document. Fast, free, 100% private, with zero server uploads or watermarks.',
    componentKey: 'pdf-page-splitter',
    popular: false,
    featured: false,
    isNew: true,
    content: {
      whatIs: 'The PDF Page Splitter enables you to extract designated pages or continuous ranges from a multi-page document. For example, if you only need pages 5 through 10 of a 200-page manual, this tool isolates those pages and generates a compact, targeted PDF file in seconds.',
      howToUse: [
        'Upload your PDF document.',
        'Specify the page numbers or ranges to extract (e.g., "1-3, 5, 8-10").',
        'Click "Extract Pages & Download".',
        'Your customized PDF containing only the selected pages will download.'
      ],
      formula: 'Sub-Document Extraction: PDF_Target = [Page_i for i in Specified_Range]',
      example: 'Extracting only the signed signature page (Page 14) from a 50-page legal contract to email to a client.',
      benefits: [
        'Substantially reduces file size for quick email attachments.',
        'Protects privacy by stripping out unnecessary or confidential background pages.',
        'Supports both individual pages and hyphenated page ranges.'
      ],
      tips: [
        'Format your range string cleanly with commas and hyphens: e.g. "1, 3-5, 8".',
        'Verify total page count shown on screen before defining ranges.'
      ],
      faqs: [
        {
          question: 'Can I extract non-consecutive pages?',
          answer: 'Yes! Simply separate individual numbers with commas (e.g. 1, 4, 7).'
        }
      ]
    },
    relatedToolIds: ['pdf-merger', 'pdf-page-rotator', 'pdf-to-docx']
  },
  {
    id: 'invoice-generator',
    name: 'Invoice Generator (PDF & Print)',
    slug: 'invoice-generator',
    category: 'pdf',
    description: 'Create professional freelance and business invoices with itemized pricing, taxes, discounts, and one-click PDF download.',
    icon: 'Receipt',
    keywords: ['invoice generator', 'free invoice maker', 'freelance invoice template', 'invoice to pdf', 'online billing invoice creator'],
    seoTitle: 'Free Invoice Generator - Create & Download Invoices in PDF Online',
    seoDescription: 'Generate professional invoices for freelance work and small businesses. Add itemized line items, taxes, discounts, and export to PDF instantly without signups.',
    componentKey: 'invoice-generator',
    popular: true,
    featured: true,
    isNew: true,
    content: {
      whatIs: 'The Invoice Generator is a comprehensive, client-side billing application designed for freelancers, contractors, agencies, and small businesses. It lets you create clean, professional invoices featuring your business details, client information, itemized services, automated subtotal/tax/discount calculations, and export them directly to PDF or print.',
      howToUse: [
        'Enter your company or freelance name, email, and address.',
        'Enter your client’s billing name, invoice number, and due date.',
        'Add line items with descriptions, quantities, and unit rates.',
        'Configure applicable tax rate (%) and discount (%) if applicable.',
        'Click "Print / Download PDF" to get your polished client-ready invoice.'
      ],
      formula: 'Total = (Subtotal - (Subtotal * Discount%)) * (1 + Tax%)',
      example: 'Billing a client $1,500 for Web Development + $300 for SEO Audit with 10% tax = $1,980 Total Payable.',
      benefits: [
        'No account required: Start generating invoices immediately.',
        'Automated math: Subtotals, taxes, discounts, and balances calculate in real time.',
        'Multiple currencies supported: USD ($), EUR (€), GBP (£), INR (₹), CAD, AUD, and more.',
        '100% confidential: Client rates and billing data stay strictly on your device.'
      ],
      tips: [
        'Include payment terms (e.g. "Net 15" or "Due on Receipt") in the notes field.',
        'Save your invoice as PDF and archive it for tax filing season.'
      ],
      faqs: [
        {
          question: 'Can I add multiple line items?',
          answer: 'Yes, you can add unlimited line items with custom descriptions, quantities, and rates.'
        },
        {
          question: 'Does this save my financial data on the web?',
          answer: 'No. All calculations and rendering occur locally in your browser memory.'
        }
      ]
    },
    relatedToolIds: ['freelance-rate-calculator', 'gst-calculator', 'loan-emi-calculator']
  },
  {
    id: 'qr-code-generator',
    name: 'QR Code Generator',
    slug: 'qr-code-generator',
    category: 'pdf',
    description: 'Generate high-resolution, custom-colored QR codes for URLs, text, Wi-Fi networks, and contact info with instant PNG/SVG download.',
    icon: 'QrCode',
    keywords: ['qr code generator', 'create qr code', 'free qr code maker', 'custom qr code', 'download qr code png svg'],
    seoTitle: 'Free QR Code Generator - Create Custom QR Codes Online Privately',
    seoDescription: 'Generate custom QR codes for websites, WiFi, plain text, and emails. Customize colors, size, error correction, and download in high resolution for free.',
    componentKey: 'qr-code-generator',
    popular: true,
    featured: true,
    isNew: true,
    content: {
      whatIs: 'The QR Code Generator creates high-density 2D matrix barcodes (Quick Response codes) readable by any smartphone camera. You can encode website URLs, Wi-Fi passwords, contact cards, and text messages, while customizing colors, resolution, and error correction levels.',
      howToUse: [
        'Type or paste your destination URL, text, or Wi-Fi configuration.',
        'Select your preferred foreground and background colors.',
        'Choose the resolution size and error correction level.',
        'Click "Download PNG" or "Download SVG" to save your QR code.'
      ],
      formula: 'Reed-Solomon Error Correction Code + 2D Binary Matrix Modulation',
      example: 'Encoding "https://toolnest.com" with dark indigo foreground and pure white background for business cards.',
      benefits: [
        'Never expires: Static QR codes with no redirects or third-party tracking links.',
        'Custom colors: Match your brand identity with custom color pickers.',
        'High resolution: Sharp, vector-grade outputs ready for print media and billboards.',
        'Multiple error correction tiers: Scannable even if partially covered or damaged.'
      ],
      tips: [
        'Always maintain high contrast between the foreground and background (dark dots on light background scan best).',
        'Test scan the generated QR code with your phone camera before sending to print.'
      ],
      faqs: [
        {
          question: 'Do these QR codes expire?',
          answer: 'Never. These are direct, static QR codes that encode your data directly into the pixel matrix. They work forever.'
        },
        {
          question: 'Can I use these QR codes commercially?',
          answer: 'Yes, 100% free for commercial and personal usage without attribution.'
        }
      ]
    },
    relatedToolIds: ['barcode-generator', 'url-encoder-decoder', 'slug-generator']
  },
  {
    id: 'barcode-generator',
    name: 'Barcode Generator (Code 128)',
    slug: 'barcode-generator',
    category: 'pdf',
    description: 'Create standard Code 128 1D barcodes for inventory, retail, shipping labels, and asset tags with instant download.',
    icon: 'Barcode',
    keywords: ['barcode generator', 'create barcode online', 'code 128 barcode generator', 'free barcode maker', 'inventory barcode generator'],
    seoTitle: 'Free Barcode Generator - Create Code 128 Barcodes Online',
    seoDescription: 'Generate standard Code 128 barcodes for products, inventory, and packaging labels. High-resolution canvas rendering with instant PNG download.',
    componentKey: 'barcode-generator',
    popular: false,
    featured: false,
    isNew: true,
    content: {
      whatIs: 'The Barcode Generator produces standard Code 128 linear barcodes, the globally recognized standard for logistics, package shipping, library catalogs, and retail inventory management. It encodes alphanumeric characters into optical parallel lines of varying widths.',
      howToUse: [
        'Enter your product code, SKU, or tracking string.',
        'Select bar height and line width options.',
        'Preview the generated barcode with human-readable text underneath.',
        'Click "Download Barcode Image" to save your PNG.'
      ],
      formula: 'Code 128 Symbology: Start Character + Data Characters + Modulo 103 Checksum + Stop Character',
      example: 'Encoding inventory SKU "INV-2026-X89" into a scannable warehouse label.',
      benefits: [
        'Supports all 128 ASCII characters (letters, numbers, and symbols).',
        'Industry-compliant checksum validation prevents scanning errors.',
        'Crisp rendering suitable for laser printing on adhesive labels.'
      ],
      tips: [
        'Ensure clean margins (quiet zones) on the left and right of the barcode when pasting into label templates.',
        'Avoid scaling the image non-proportionally to maintain scanning accuracy.'
      ],
      faqs: [
        {
          question: 'Can barcode scanners read this from phone screens?',
          answer: 'Yes! Modern 2D image-based scanners read directly from screens, while older laser scanners work best with printed paper.'
        }
      ]
    },
    relatedToolIds: ['qr-code-generator', 'random-string-generator', 'uuid-generator']
  },
  {
    id: 'image-compressor',
    name: 'Image Compressor (JPEG, PNG, WebP)',
    slug: 'image-compressor',
    category: 'pdf',
    description: 'Compress and optimize photos and graphic images client-side to reduce file size without losing noticeable quality.',
    icon: 'Minimize2',
    keywords: ['image compressor', 'compress jpg', 'reduce image size', 'compress png online', 'shrink photo size free'],
    seoTitle: 'Free Image Compressor - Compress JPG, PNG, WebP Online Privately',
    seoDescription: 'Reduce image file size by up to 80% without losing visual clarity. Fast, client-side photo compression with custom quality slider and instant download.',
    componentKey: 'image-compressor',
    popular: true,
    featured: true,
    isNew: true,
    content: {
      whatIs: 'The Image Compressor reduces the byte size of JPG, PNG, and WebP images directly on your computer using the HTML5 Canvas API and lossy/lossless compression algorithms. It is essential for optimizing web page load speeds, meeting email attachment quotas, and shrinking passport photo uploads.',
      howToUse: [
        'Upload your image file (JPEG, PNG, or WebP).',
        'Adjust the quality slider (e.g. 75% provides an ideal balance of clarity and file size).',
        'Optionally scale maximum width or height to downsample ultra-high-resolution photos.',
        'Review original vs. compressed file size and percentage saved, then download.'
      ],
      formula: 'File Size Reduction % = ((Size_Original - Size_Compressed) / Size_Original) * 100',
      example: 'Compressing a 4.2 MB DSLR photo down to 340 KB (92% reduction) for an online university portal upload.',
      benefits: [
        'Saves up to 80-90% bandwidth and disk storage.',
        '100% Client-side: Your private personal photos are never transmitted across the web.',
        'Side-by-side metric comparison shows exact byte savings.',
        'Custom width and height scaling prevents oversized uploads.'
      ],
      tips: [
        'A quality setting of 75% to 80% is virtually indistinguishable to the human eye while slashing file sizes in half.',
        'Convert PNG screenshots with few colors to WebP or JPEG for maximum space savings.'
      ],
      faqs: [
        {
          question: 'Are my images stored or cached on your servers?',
          answer: 'Never. The entire compression process occurs inside your local browser tab using your CPU/GPU.'
        },
        {
          question: 'What image formats are supported?',
          answer: 'JPG, JPEG, PNG, and WebP formats are fully supported.'
        }
      ]
    },
    relatedToolIds: ['image-to-pdf', 'svg-to-png', 'color-converter']
  },
  {
    id: 'svg-to-png',
    name: 'SVG to PNG / JPEG Converter',
    slug: 'svg-to-png',
    category: 'pdf',
    description: 'Convert vector SVG files or inline SVG code into high-resolution raster PNG or JPEG images with custom dimensions.',
    icon: 'FileCode',
    keywords: ['svg to png', 'convert svg to image', 'svg to jpg', 'vector to raster converter', 'svg converter online'],
    seoTitle: 'Free SVG to PNG Converter - Convert Vector SVG to High-Res PNG Online',
    seoDescription: 'Convert SVG vector illustrations and icons to crisp PNG or JPEG images. Customize pixel dimensions, scale factors, and download in high resolution.',
    componentKey: 'svg-to-png',
    popular: false,
    featured: false,
    isNew: true,
    content: {
      whatIs: 'The SVG to PNG Converter renders scalable vector graphics (SVG) onto a high-definition raster canvas, exporting them as universal PNG or JPEG files. This allows you to use vector logos and icons in software that does not support vectors, such as video editors and older office applications.',
      howToUse: [
        'Upload an .svg file or paste raw `<svg>` code into the editor.',
        'Choose your export format (PNG with transparency or JPEG with white background).',
        'Adjust the scale multiplier (1x, 2x, 4x, or custom resolution).',
        'Click "Convert & Download Image".'
      ],
      formula: 'Rasterization: Vector_Paths -> Subpixel Antialiased Bitmap [Width * Scale, Height * Scale]',
      example: 'Converting an SVG company logo into a 2048x2048 ultra-sharp transparent PNG for YouTube branding.',
      benefits: [
        'Preserves transparency in PNG format.',
        'Scale multiplier allows generating 4K and Retina-ready assets.',
        'Accepts both file uploads and direct XML/SVG code pasting.'
      ],
      tips: [
        'Use 2x or 4x scale if you plan to use the image for high-DPI displays or print.',
        'Ensure the SVG contains standard `xmlns="http://www.w3.org/2000/svg"` attributes.'
      ],
      faqs: [
        {
          question: 'Does the PNG maintain transparent backgrounds?',
          answer: 'Yes! PNG exports retain complete alpha transparency wherever the SVG has no background fill.'
        }
      ]
    },
    relatedToolIds: ['image-compressor', 'image-to-pdf', 'color-converter']
  },
  {
    id: 'password-strength-checker',
    name: 'Password Strength & Security Checker',
    slug: 'password-strength-checker',
    category: 'pdf',
    description: 'Evaluate password entropy, brute-force crack time estimates, and security resilience 100% privately without leaving your device.',
    icon: 'ShieldCheck',
    keywords: ['password strength checker', 'how strong is my password', 'password security meter', 'password entropy calculator', 'password crack time'],
    seoTitle: 'Free Password Strength Checker - Test Password Security Privately',
    seoDescription: 'Check how secure your password is with real-time entropy score, brute force crack time estimation, and breach risk checklist. 100% private and safe.',
    componentKey: 'password-strength-checker',
    popular: true,
    featured: false,
    isNew: true,
    content: {
      whatIs: 'The Password Strength Checker analyzes passwords against modern cryptographic security benchmarks. It calculates information entropy in bits, estimates brute-force computational cracking time against modern GPU clusters (e.g. 100 billion guesses/second), and flags common vulnerabilities like dictionary words, repeating sequences, and predictable patterns.',
      howToUse: [
        'Type a test password into the masked input field.',
        'Click the eye icon if you wish to reveal the characters.',
        'Review the entropy score (bits), crack time estimate, and strength tier.',
        'Follow the security checklist to bolster weak credentials.'
      ],
      formula: 'Entropy H = L * log2(R), where L = password length, R = character pool size',
      example: 'Testing "Tr0ub4dor&3": Pool size = 94, Length = 11, Entropy = ~72 bits -> Crack time: Centuries on standard hardware.',
      benefits: [
        '100% Private & Safe: The password is NEVER transmitted over the internet or logged.',
        'Realistic GPU cluster crack estimates based on modern Hashcat benchmarks.',
        'Detailed diagnostic checklist identifies missing character classes and length deficiencies.'
      ],
      tips: [
        'Aim for passwords with at least 60+ bits of entropy (14+ random characters or 4 random diceware words).',
        'Use a dedicated password manager to generate and store unique credentials for every account.'
      ],
      faqs: [
        {
          question: 'Is it safe to type my real password here?',
          answer: 'Yes, this tool runs 100% client-side in your browser JavaScript. Nothing is sent to any server. However, for maximum safety, you can test a similar password variation rather than your exact master password.'
        }
      ]
    },
    relatedToolIds: ['random-string-generator', 'hash-generator', 'jwt-decoder']
  }
];
