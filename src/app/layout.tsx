import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import PageTransition from '@/components/ui/PageTransition';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Arizal Fiqri | System Developer',
  description: 'System Developer focused on Web & Mobile applications. Building robust systems with modern technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <AnimatedBackground />
        <CustomCursor />
        <ScrollProgress />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
