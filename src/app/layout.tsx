import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { getBaseUrl } from '@/lib/site-config';
import { ADS_CONFIG } from '@/lib/ads-config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ToolNest – 1,000+ Free Online Tools for Students, Developers & Everyday Tasks',
    template: '%s | ToolNest',
  },
  description:
    '1,000+ fast, free, browser-based online tools: Unit converters, PDF to Word (DOCX), PDF merger, image compressor, QR code generator, CGPA calculators, JSON formatters, and salary calculators. 100% private, no signup.',
  keywords: [
    'free online tools',
    '1000 online tools',
    'unit converter',
    'pdf to word',
    'pdf to docx',
    'merge pdf',
    'qr code generator',
    'image compressor',
    'invoice generator',
    'online calculators',
    'student calculators',
    'cgpa calculator',
    'developer tools',
    'json formatter',
    'salary calculator',
    'word counter',
    'career tools',
    'prodevopz',
  ],
  authors: [
    { name: 'Md Jalaluddin Master (Ammar Master)', url: `${siteUrl}/founder` },
    { name: 'ProDevOpz', url: 'https://prodevopz.jobsio.in' }
  ],
  creator: 'Md Jalaluddin Master (Ammar Master)',
  publisher: 'ProDevOpz (prodevopz.jobsio.in)',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'ToolNest – A Product by ProDevOpz',
    title: 'ToolNest – 1,000+ Free Online Tools | By ProDevOpz',
    description: '1,000+ fast, free tools that work directly in your browser without signup or server tracking. Engineered by ProDevOpz.',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'ToolNest – 1,000+ Free Online Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToolNest – 1,000+ Free Online Tools | By ProDevOpz',
    description: 'Free, fast, mobile-friendly online tools for students, developers, and career tasks. A product by ProDevOpz.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google1360c11d4597b537',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ToolNest',
    alternateName: ['Tool Nest', 'ToolNest Free Online Tools', 'ToolNest by ProDevOpz'],
    url: siteUrl,
    description: '1,000+ fast, free browser-based online tools for students, developers, and career tasks with zero server tracking.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/tools?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ToolNest',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    founder: {
      '@type': 'Person',
      name: 'Md Jalaluddin Master',
      alternateName: 'Ammar Master',
      url: `${siteUrl}/founder`,
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'ProDevOpz',
      url: 'https://prodevopz.jobsio.in',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        {ADS_CONFIG.adSenseClientId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CONFIG.adSenseClientId}`}
            crossOrigin="anonymous"
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-indigo-500/20 selection:text-indigo-600 dark:bg-zinc-950 dark:text-zinc-100 font-sans pb-20 md:pb-0">
        <ThemeProvider>
          <Header />
          <div className="flex flex-1 mx-auto w-full max-w-7xl">
            <Sidebar />
            <main className="flex-1 min-w-0 px-4 py-8 sm:px-6 lg:px-8">
              {children}
            </main>
          </div>
          <Footer />
          <MobileBottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
