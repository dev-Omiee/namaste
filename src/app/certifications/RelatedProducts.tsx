'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { formatINR } from '@/lib/formatPrice';

export default function RelatedProducts({ related }: { related: Product[] }) {
  if (!related.length) return null;

  return (
    <section>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.9rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '1.75rem' }}>
        You May Also Like
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
        {related.slice(0, 4).map(p => (
          <Link
            key={p.id}
            href={`/product/${encodeURIComponent(p.id)}`}
            style={{
              display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none',
              background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 8, padding: '0.9rem',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.4)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
          >
            <div style={{ width: 60, height: 60, position: 'relative', borderRadius: 6, overflow: 'hidden', flexShrink: 0, background: 'rgba(26,122,110,0.1)' }}>
              <Image src={p.src} alt={p.content} fill style={{ objectFit: 'contain', padding: '4px' }} sizes="60px" />
            </div>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', color: 'var(--cream)', marginBottom: 3, lineHeight: 1.25 }}>{p.content}</div>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.8rem', color: 'var(--gold)' }}>
                {p.price > 0 ? formatINR(p.price) : 'Coming Soon'}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
