import { products, getProductById } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { formatINR } from '@/lib/formatPrice';
import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
  return products.map((p) => ({ id: encodeURIComponent(p.id) }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(decodeURIComponent(params.id));
  if (!product) notFound();

  const related = products.filter((p) => p.id !== product.id);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 1.5rem' }}>
      {/* Breadcrumb */}
      <nav style={{ marginBottom: '2.5rem', fontSize: '0.75rem', color: '#5a5248', letterSpacing: '0.05em' }}>
        <a href="/" style={{ color: 'var(--teal-light)', textDecoration: 'none' }}>Products</a>
        <span style={{ margin: '0 10px' }}>›</span>
        <span style={{ color: '#8a7a68' }}>{product.content}</span>
      </nav>

      {/* Main product */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', marginBottom: '5rem' }}>
        {/* Image */}
        <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)', aspectRatio: '4/3', background: 'linear-gradient(135deg, rgba(26,122,110,0.1), rgba(201,168,76,0.06))' }}>
          <Image src={product.src} alt={product.content} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" priority />
        </div>

        {/* Info */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 10 }}>Natural Sweetener</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 700, color: 'var(--cream)', lineHeight: 1.1, marginBottom: '1rem' }}>
            {product.content}
          </h1>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '0.5rem' }}>
            {formatINR(product.price)}
            <span style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.75rem', color: '#7a6e60', fontWeight: 400, marginLeft: 8 }}>{product.unit}</span>
          </div>
          <div style={{ width: 50, height: 1, background: 'var(--gold)', marginBottom: '1.5rem', opacity: 0.4 }} />
          <p style={{ fontSize: '0.88rem', lineHeight: 1.85, color: '#8a7a68', marginBottom: '2rem' }}>{product.summary}</p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '2rem' }}>
            {['Chemical-Free', 'Farm Direct', 'FSSAI Certified', 'Export Quality'].map(tag => (
              <span key={tag} style={{
                fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '5px 12px', borderRadius: 3,
                border: '1px solid rgba(42,181,160,0.3)', color: 'var(--teal-light)',
                background: 'rgba(26,122,110,0.08)',
              }}>{tag}</span>
            ))}
          </div>

          <ProductDetailClient product={product} />

          {/* Assurances */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
            {[['🚚', 'Pan-India Shipping'], ['🔒', 'Secure Checkout'], ['↩️', 'Easy Returns']].map(([icon, label]) => (
              <div key={label} style={{ fontSize: '0.72rem', color: '#5a5248', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span>{icon}</span><span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '2rem' }}>You May Also Like</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {related.map(p => (
              <a key={p.id} href={`/product/${encodeURIComponent(p.id)}`} style={{
                display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none',
                background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 8, padding: '1rem',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.4)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
              >
                <div style={{ width: 64, height: 64, position: 'relative', borderRadius: 6, overflow: 'hidden', flexShrink: 0 }}>
                  <Image src={p.src} alt={p.content} fill style={{ objectFit: 'cover' }} sizes="64px" />
                </div>
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: 'var(--cream)', marginBottom: 4 }}>{p.content}</div>
                  <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.85rem', color: 'var(--gold)' }}>{formatINR(p.price)}</div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
