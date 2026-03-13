'use client';
import Link from 'next/link';
import { Product } from '@/types';
import { Send } from 'lucide-react';

export default function ProductDetailClient({ product }: { product: Product }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Link
        href={`/contact?product=${encodeURIComponent(product.content)}`}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          padding: '14px', textDecoration: 'none',
          background: 'linear-gradient(135deg, var(--teal) 0%, var(--peacock-blue) 100%)',
          border: '1px solid rgba(42,181,160,0.35)', color: 'white',
          fontFamily: 'Raleway, sans-serif', fontSize: '0.8rem', fontWeight: 600,
          letterSpacing: '0.16em', textTransform: 'uppercase', borderRadius: 6,
          transition: 'all 0.25s',
        }}
      >
        <Send size={15} /> Send Enquiry
      </Link>
      <Link
        href="/contact"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          padding: '11px', textDecoration: 'none',
          background: 'transparent', border: '1px solid rgba(201,168,76,0.25)',
          color: 'var(--gold)', fontFamily: 'Raleway, sans-serif', fontSize: '0.73rem',
          fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: 6,
        }}
      >
        Contact Us
      </Link>
    </div>
  );
}
