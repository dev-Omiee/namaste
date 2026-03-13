'use client';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: 'clamp(3rem, 8vw, 6rem) 1.5rem clamp(3rem, 6vw, 5rem)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(26,122,110,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <p className="animate-fade-up" style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.66rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: '1.25rem' }}>
          🦚 Pure · Natural · Traditionally Crafted
        </p>
        <h1 className="animate-fade-up anim-d1" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.4rem, 8vw, 5.5rem)', fontWeight: 700, lineHeight: 1.06, marginBottom: '1.5rem' }}>
          Global Trade,<br /><span className="gold-shimmer">Rooted in Tradition</span>
        </h1>
        <p className="animate-fade-up anim-d2" style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', fontWeight: 300, color: '#7a6e60', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.85 }}>
          Premium natural jaggery sourced directly from sugarcane farms across Maharashtra — chemical-free, mineral-rich, exported worldwide.
        </p>

        {/* Stats bar */}
        <div className="animate-fade-up anim-d3 stats-bar" style={{
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'clamp(1.5rem, 4vw, 2.5rem)',
          padding: '1.4rem clamp(1rem, 4vw, 2rem)', maxWidth: 640, margin: '0 auto 2rem',
          background: 'rgba(22,22,34,0.7)', border: '1px solid var(--border)', borderRadius: 10,
          backdropFilter: 'blur(10px)',
        }}>
          {[['15+', 'Years of Trade'], ['30+', 'Countries'], ['100%', 'Chemical-Free'], ['FSSAI', 'Certified']].map(([v, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: 700, color: 'var(--gold)' }}>{v}</div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5a5248' }}>{l}</div>
            </div>
          ))}
        </div>

        <div className="animate-fade-up anim-d4" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#products" style={{
            padding: '12px 28px', textDecoration: 'none',
            background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)',
            color: '#0a0a0f', fontFamily: 'Cinzel, serif', fontSize: '0.72rem',
            fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', borderRadius: 5,
          }}>View Products</a>
          <Link href="/contact" style={{
            padding: '12px 28px', textDecoration: 'none',
            background: 'transparent', border: '1px solid rgba(42,181,160,0.4)', color: 'var(--teal-light)',
            fontFamily: 'Raleway, sans-serif', fontSize: '0.72rem',
            fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', borderRadius: 5,
          }}>Send Enquiry</Link>
        </div>
      </section>

      {/* Products */}
      <section id="products" style={{ padding: '1rem 1.5rem clamp(3rem, 6vw, 6rem)', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <p style={{ fontSize: '0.63rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 10 }}>Our Collection</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, color: 'var(--cream)' }}>
            Featured Products
          </h2>
          <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '1.25rem auto 0' }} />
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section style={{ background: 'rgba(22,22,34,0.5)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <p style={{ fontSize: '0.63rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 10 }}>Why Choose Us</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 600, color: 'var(--cream)' }}>
              The Namaste Globals Difference
            </h2>
          </div>
          <div className="features-grid">
            {[
              { icon: '🌿', title: 'Chemical-Free', text: 'No additives, no preservatives. Just pure traditional jaggery as nature intended.' },
              { icon: '🚜', title: 'Farm Direct', text: 'Sourced directly from farmers in Maharashtra, ensuring freshness and fair trade.' },
              { icon: '📦', title: 'Export Quality', text: 'Packaged to international standards — suitable for retail, wholesale, and bulk.' },
              { icon: '🤝', title: 'Trade Partners', text: 'We work with importers, distributors, and retailers across 30+ countries worldwide.' },
            ].map(c => (
              <div key={c.title} style={{
                background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 10,
                padding: 'clamp(1.25rem, 3vw, 2rem) 1.5rem', textAlign: 'center',
              }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(42,181,160,0.35)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }}>{c.icon}</div>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.78rem', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: 8, textTransform: 'uppercase' }}>{c.title}</h3>
                <p style={{ fontSize: '0.78rem', color: '#6a5e50', lineHeight: 1.7 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p style={{ fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 10 }}>Ready to Source?</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 600, color: 'var(--cream)', marginBottom: '0.9rem' }}>
            Get a Bulk Pricing Quote
          </h2>
          <p style={{ fontSize: '0.84rem', color: '#7a6e60', lineHeight: 1.8, marginBottom: '2rem' }}>
            We supply to wholesalers, exporters, and retailers worldwide. Contact us for custom packaging, bulk pricing, and shipping details.
          </p>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '14px 36px', textDecoration: 'none',
            background: 'linear-gradient(135deg, var(--teal) 0%, var(--peacock-blue) 100%)',
            color: 'white', fontFamily: 'Cinzel, serif', fontSize: '0.75rem',
            fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', borderRadius: 6,
            border: '1px solid rgba(42,181,160,0.3)',
          }}>
            Send Enquiry →
          </Link>
        </div>
      </section>

      <style>{`
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.25rem;
        }
        @media (max-width: 480px) {
          .products-grid { grid-template-columns: 1fr; }
          .features-grid { grid-template-columns: 1fr 1fr; }
          .stats-bar { gap: 1rem !important; }
        }
      `}</style>
    </>
  );
}
