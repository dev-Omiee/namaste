import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToastProvider from '@/components/ToastProvider';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Namaste Globals — Premium Import & Export',
  description: 'Premium natural jaggery products sourced directly from sugarcane farms in Maharashtra — chemical-free, mineral-rich, exported worldwide.',
  keywords: 'jaggery, gur, natural sweetener, import export, India, organic, liquid jaggery, jaggery powder',
  openGraph: {
    title: 'Namaste Globals',
    description: 'Premium import & export of natural Indian products',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
