import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import { ToastProvider } from '@/context/ToastContext';
import FloatingPromoButton from './components/FloatingPromoButton';
import WelcomePopup from './components/WelcomePopup';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sc.bimadev.xyz'),
  title: {
    default: 'BimSC - Source Code untuk Developer Indonesia',
    template: '%s | BimSC'
  },
  description: 'Platform berbagi source code berkualitas untuk developer Indonesia. Temukan berbagai source code untuk mempercepat development project Anda.',
  keywords: ['source code', 'developer indonesia', 'code sharing', 'open source', 'web development', 'programming', 'coding', 'whatsapp', 'react', 'nextjs', 'typescript', 'bimsc', 'bimadev'],
  authors: [{ name: 'Bimadev', url: 'https://wa.me/6282254044783' }],
  creator: 'Bimadev',
  publisher: 'BimaDev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': '/id',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://sc.bimadev.xyz',
    title: 'BimSC - Source Code untuk Developer Indonesia',
    description: 'Platform berbagi source code berkualitas untuk developer Indonesia. Temukan berbagai source code untuk mempercepat development project Anda.',
    siteName: 'BimSC',
    images: [
      {
        url: '/images/preview.png',
        width: 1200,
        height: 630,
        alt: 'BimSC Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BimSC - Source Code untuk Developer Indonesia',
    description: 'Platform berbagi source code berkualitas untuk developer Indonesia',
    creator: '@bimadevs',
    images: ['/images/preview.png'],
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
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0F172A" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ToastProvider>
          {children}
          <Footer />
          <FloatingPromoButton />
          <WelcomePopup />
        </ToastProvider>
      </body>
    </html>
  );
}
