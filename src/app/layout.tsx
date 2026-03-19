import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToastProvider from '@/components/ToastProvider';
import WhatsAppButton from '@/components/WhatsAppButton';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  verification: {
    google: 'm0PHCb7CDlh20bCAyizt54BBTn7zSgIbkqAk2qLqGtQ',
  },
  title: 'Namaste Globals | Premium Jaggery Exporter from India',
  description: 'Export-quality natural jaggery, jaggery powder and liquid jaggery sourced directly from sugarcane farms in Maharashtra. Fresh & natural, FSSAI certified, exported worldwide.',
  keywords: 'jaggery exporter India, natural jaggery wholesale, gur export, jaggery powder bulk, liquid jaggery kakvi, Maharashtra jaggery, Fresh & natural jaggery, FSSAI certified jaggery, buy jaggery bulk, Indian agro export',
  authors: [{ name: 'Namaste Globals' }],
  viewport: 'width=device-width, initial-scale=1.0',

  openGraph: {
    url: 'https://www.namasteglobals.com',
    type: 'website',
    title: 'Namaste Globals | Premium Jaggery Exporter from India',
    description: 'Fresh & natural, FSSAI certified jaggery from Maharashtra. Natural jaggery blocks, powder and liquid jaggery — bulk export worldwide.',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Namaste Globals — Premium Natural Jaggery',
      },
    ],
    siteName: 'Namaste Globals',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Namaste Globals | Premium Jaggery Exporter from India',
    description: 'Fresh & natural, FSSAI certified jaggery from Maharashtra. Bulk export worldwide.',
    images: ['/favicon.ico'],
    site: '@namasteglobals',
  },

  alternates: {
    canonical: 'https://www.namasteglobals.com',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body>
        <ToastProvider />
        <div className="flex flex-col min-h-screen site-bg">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
