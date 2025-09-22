import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Singh Design - Award-Winning Architectural Design',
  description: 'Creating exceptional architectural spaces that inspire and endure. Modern residential, commercial, and sustainable design solutions.',
  keywords: 'architecture, design, residential, commercial, sustainable architecture, modern buildings',
  authors: [{ name: 'Singh Design Studio' }],
  openGraph: {
    title: 'Singh Design - Award-Winning Architectural Design',
    description: 'Creating exceptional architectural spaces that inspire and endure.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}