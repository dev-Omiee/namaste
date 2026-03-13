import { products, getProductById } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { formatINR } from '@/lib/formatPrice';
import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
  return products.map((p) => ({ id: encodeURIComponent(p.id) }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(decodeURIComponent(params.id));
  if (!product) notFound();

  const related = products.filter((p) => p.id !== product.id && p.inStock !== false);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      {/* Breadcrumb */}
      <nav style={{ marginBottom: '2rem', fontSize: '0.75rem', color: '#5a5248', letterSpacing: '0.05em' }}>
        <Link href="/" style={{ color: 'var(--teal-light)', textDecoration: 'none' }}>Products</Link>
        <span style={{ margin: '0 10px' }}>›</span>
        <span style={{ color: '#8a7a68' }}>{product.content}</span>
      </nav>

      {/* Main product grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
        {/* Image */}
        <div style={{
          position: 'relative', borderRadius: 12, overflow: 'hidden',
          border: '1px solid var(--border)', aspectRatio: '4/3',
          background: 'linear-gradient(135deg, rgba(26,122,110,0.1), rgba(201,168,76,0.06))',
        }}>
          <Image src={product.src} alt={product.content} fill style={{ objectFit: 'contain', padding: '20px' }} sizes="(max-width: 768px) 100vw, 50vw" priority />
        </div>

        {/* Info */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 8 }}>
            {product.category}
          </p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--cream)', lineHeight: 1.1, marginBottom: '1rem' }}>
            {product.content}
          </h1>

          {product.price > 0 ? (
            <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.55rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '0.5rem' }}>
              {formatINR(product.price)}
              <span style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.75rem', color: '#7a6e60', fontWeight: 400, marginLeft: 8 }}>{product.unit}</span>
            </div>
          ) : (
            <div style={{ fontFamily: 'Raleway, sans-serif', fontSize: '1rem', color: '#7a6e60', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>
              Price on Request
            </div>
          )}

          <div style={{ width: 50, height: 1, background: 'var(--gold)', marginBottom: '1.25rem', opacity: 0.4 }} />
          <p style={{ fontSize: '0.86rem', lineHeight: 1.85, color: '#8a7a68', marginBottom: '1.5rem' }}>{product.summary}</p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '1.75rem' }}>
            {['Chemical-Free', 'Farm Direct', 'FSSAI Certified', 'Export Quality'].map(tag => (
              <span key={tag} style={{
                fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '5px 12px', borderRadius: 3,
                border: '1px solid rgba(42,181,160,0.3)', color: 'var(--teal-light)',
                background: 'rgba(26,122,110,0.08)',
              }}>{tag}</span>
            ))}
          </div>

          <ProductDetailClient product={product} />

          {/* Quick Info */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
            {[['📍', product.origin], ['⚖️', product.weight], ['✅', 'FSSAI Certified']].map(([icon, label]) => (
              <div key={label} style={{ fontSize: '0.72rem', color: '#5a5248', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span>{icon}</span><span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Details + Benefits */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
        {/* Long Description */}
        <div style={{ background: 'var(--dark3)', border: '1px solid var(--border)', borderLeft: '3px solid var(--gold)', borderRadius: 10, padding: '2rem' }}>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
            About This Product
          </h2>
          <p style={{ fontSize: '0.84rem', lineHeight: 1.9, color: '#8a7a68' }}>{product.longDescription}</p>
        </div>

        {/* Benefits */}
        <div style={{ background: 'var(--dark3)', border: '1px solid var(--border)', borderLeft: '3px solid var(--teal-light)', borderRadius: 10, padding: '2rem' }}>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: '1rem' }}>
            Key Benefits
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {product.benefits.map(b => (
              <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.82rem', color: '#8a7a68', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--teal-light)', flexShrink: 0, marginTop: 2 }}>✓</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Enquiry CTA Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(26,122,110,0.15) 0%, rgba(27,79,114,0.15) 100%)',
        border: '1px solid rgba(42,181,160,0.2)', borderRadius: 12,
        padding: '2.5rem', textAlign: 'center', marginBottom: '4rem',
      }}>
        <p style={{ fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 10 }}>Interested in this product?</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 600, color: 'var(--cream)', marginBottom: '0.75rem' }}>
          Request Bulk Pricing or Export Quote
        </h2>
        <p style={{ fontSize: '0.82rem', color: '#7a6e60', lineHeight: 1.75, maxWidth: 480, margin: '0 auto 1.75rem' }}>
          We supply to wholesalers, retailers, and exporters worldwide. Fill out our enquiry form and we'll respond within 24 hours.
        </p>
        <Link href={`/contact?product=${encodeURIComponent(product.content)}`} style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '13px 32px', textDecoration: 'none',
          background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)',
          color: '#0a0a0f', fontFamily: 'Cinzel, serif', fontSize: '0.75rem',
          fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', borderRadius: 6,
        }}>
          Send Enquiry →
        </Link>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.9rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '1.75rem' }}>
            You May Also Like
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {related.slice(0, 4).map(p => (
              <Link key={p.id} href={`/product/${encodeURIComponent(p.id)}`} style={{
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
      )}
    </div>
  );
}
