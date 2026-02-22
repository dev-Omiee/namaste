import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        padding: '6rem 1.5rem 5rem', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(26,122,110,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <p className="animate-fade-up" style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.68rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: '1.25rem' }}>
          🦚 Pure · Natural · Traditionally Crafted
        </p>
        <h1 className="animate-fade-up anim-d1" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', fontWeight: 700, lineHeight: 1.06, marginBottom: '1.5rem' }}>
          Global Trade,<br /><span className="gold-shimmer">Rooted in Tradition</span>
        </h1>
        <p className="animate-fade-up anim-d2" style={{ fontSize: '1rem', fontWeight: 300, color: '#7a6e60', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.85 }}>
          Premium natural jaggery products sourced directly from sugarcane farms across Maharashtra — chemical-free, mineral-rich, exported worldwide.
        </p>

        {/* Stats bar */}
        <div className="animate-fade-up anim-d3" style={{
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2.5rem',
          padding: '1.5rem 2rem', maxWidth: 640, margin: '0 auto',
          background: 'rgba(22,22,34,0.7)', border: '1px solid var(--border)', borderRadius: 10,
          backdropFilter: 'blur(10px)',
        }}>
          {[['15+', 'Years of Trade'], ['30+', 'Countries'], ['100%', 'Chemical-Free'], ['FSSAI', 'Certified']].map(([v, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.4rem', fontWeight: 700, color: 'var(--gold)' }}>{v}</div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5a5248' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: '1rem 1.5rem 6rem', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 10 }}>Our Collection</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 600, color: 'var(--cream)' }}>
            Featured Products
          </h2>
          <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '1.25rem auto 0' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why Us section */}
      <section style={{ background: 'rgba(22,22,34,0.5)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 10 }}>Why Choose Us</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 600, color: 'var(--cream)' }}>The Namaste Globals Difference</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🌿', title: 'Chemical-Free', text: 'No additives, no preservatives. Just pure traditional jaggery as nature intended.' },
              { icon: '🚜', title: 'Farm Direct', text: 'Sourced directly from farmers in Maharashtra, ensuring freshness and fair trade.' },
              { icon: '📦', title: 'Export Quality', text: 'Packaged to international standards — suitable for retail, wholesale, and bulk.' },
              { icon: '🔒', title: 'Secure Checkout', text: 'Stripe-powered payments with full encryption. Your data is always safe with us.' },
            ].map(c => (
              <div key={c.title} style={{
                background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 10,
                padding: '2rem 1.5rem', textAlign: 'center',
                transition: 'border-color 0.25s',
              }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(42,181,160,0.35)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
              >
                <div style={{ fontSize: '2.4rem', marginBottom: '0.9rem' }}>{c.icon}</div>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: '0.8rem', color: '#6a5e50', lineHeight: 1.7 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
