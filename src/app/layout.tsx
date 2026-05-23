import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import dynamic from 'next/dynamic';
import './globals.css';
import { ThemeProvider } from '@/lib/ThemeContext';
import PageTransition from '@/components/ui/PageTransition';
import LoadingScreen from '@/components/ui/LoadingScreen';

// Dynamic imports for non-critical decorative components (reduces initial JS bundle)
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), { ssr: false });
const ScrollProgress = dynamic(() => import('@/components/ui/ScrollProgress'), { ssr: false });
const AnimatedBackground = dynamic(() => import('@/components/ui/AnimatedBackground'), { ssr: false });

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FEFAE0' },
    { media: '(prefers-color-scheme: dark)', color: '#25343B' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://arizalfiqri.com'),
  title: {
    default: 'Arizal Fiqri | System Developer',
    template: '%s | Arizal Fiqri',
  },
  description: 'System Developer focused on Web & Mobile applications. Building robust systems with modern technologies. Specializing in PHP, JavaScript, Kotlin, and full-stack development.',
  keywords: ['System Developer', 'Web Developer', 'Mobile Developer', 'Full Stack', 'Portfolio', 'Arizal Fiqri', 'Next.js'],
  authors: [{ name: 'Arizal Fiqri' }],
  creator: 'Arizal Fiqri',
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
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://arizalfiqri.com',
    siteName: 'Arizal Fiqri Portfolio',
    title: 'Arizal Fiqri | System Developer',
    description: 'System Developer focused on Web & Mobile applications. Building robust systems with modern technologies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arizal Fiqri | System Developer',
    description: 'System Developer focused on Web & Mobile applications. Building robust systems with modern technologies.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        {/* Skip-to-content link for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:font-semibold focus:text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <LoadingScreen />
          <AnimatedBackground />
          <CustomCursor />
          <ScrollProgress />
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
