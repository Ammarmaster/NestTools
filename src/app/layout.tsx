import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://toolnest.app'),
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
    { name: 'Md Jalaluddin Master (Ammar Master)', url: 'https://toolnest.app/founder' },
    { name: 'ProDevOpz', url: 'https://prodevopz.jobsio.in' }
  ],
  creator: 'Md Jalaluddin Master (Ammar Master)',
  publisher: 'ProDevOpz (prodevopz.jobsio.in)',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://toolnest.app',
    siteName: 'ToolNest – A Product by ProDevOpz',
    title: 'ToolNest – 1,000+ Free Online Tools | By ProDevOpz',
    description: '1,000+ fast, free tools that work directly in your browser without signup or server tracking. Engineered by ProDevOpz.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToolNest – 1,000+ Free Online Tools | By ProDevOpz',
    description: 'Free, fast, mobile-friendly online tools for students, developers, and career tasks. A product by ProDevOpz.',
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
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
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
