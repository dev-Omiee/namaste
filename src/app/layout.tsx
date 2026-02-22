import type { Metadata } from 'next';
import './globals.css';
import StoreProvider from '@/store/StoreProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToastProvider from '@/components/ToastProvider';

export const metadata: Metadata = {
  title: 'Namaste Globals — Premium Import & Export',
  description:
    'Premium natural jaggery products imported from the heart of India. Chemical-free, mineral-rich, and traditionally crafted.',
  keywords: 'jaggery, gur, natural sweetener, import export, India, organic',
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
        <StoreProvider>
          <ToastProvider />
          <div className="flex flex-col min-h-screen" style={{ background: 'radial-gradient(ellipse at 15% 15%, rgba(26,122,110,0.07) 0%, transparent 50%), radial-gradient(ellipse at 85% 85%, rgba(27,79,114,0.08) 0%, transparent 50%), #0a0a0f' }}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
