import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'About Us — Namaste Globals' };

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '5rem 1.5rem' }}>
      {/* Hero */}
      <div className="animate-fade-up" style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
        <p style={{ fontSize: '0.63rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 10 }}>Our Story</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', fontWeight: 700, lineHeight: 1.06, marginBottom: '1.25rem' }}>
          <span className="gold-text">About</span> Us
        </h1>
        <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '0 auto 1.75rem' }} />
        <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#7a6e60', maxWidth: 560, margin: '0 auto' }}>
          Namaste Globals is a premier import-export company rooted in India's rich trading heritage — connecting premium natural goods with buyers across the world.
        </p>
      </div>

      {/* Values grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
        {[
          { icon: '🌏', title: 'Global Reach', text: 'Exporting to 30+ countries. Seamless cross-border trade with full documentation and compliance support.' },
          { icon: '🦚', title: 'Cultural Pride', text: 'Every product carries the soul of its Indian origin — crafted with generational wisdom and care.' },
          { icon: '⚖️', title: 'Certified Quality', text: 'FSSAI certified. Third-party lab tested. Every consignment meets international food safety standards.' },
          { icon: '🤝', title: 'Farmer First', text: '15+ years of direct partnerships with sugarcane farmers in Maharashtra — fair prices, fair trade.' },
        ].map((c, i) => (
          <div key={c.title} className={`animate-fade-up anim-d${i + 1}`} style={{
            background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 10,
            padding: '1.75rem', textAlign: 'center', transition: 'all 0.3s',
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(42,181,160,0.35)'; el.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)'; }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '0.9rem' }}>{c.icon}</div>
            <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: 8, textTransform: 'uppercase' }}>{c.title}</h3>
            <p style={{ fontSize: '0.78rem', color: '#6a5e50', lineHeight: 1.75 }}>{c.text}</p>
          </div>
        ))}
      </div>

      {/* Story */}
      <div style={{ background: 'var(--dark3)', border: '1px solid var(--border)', borderLeft: '3px solid var(--gold)', borderRadius: 10, padding: '2.5rem', marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '1.25rem' }}>Our Journey</h2>
        <p style={{ fontSize: '0.85rem', lineHeight: 1.9, color: '#8a7a68', marginBottom: '1rem' }}>
          Namaste Globals began with a single vision: to bring the authentic sweetness and purity of Indian jaggery to the world — and to do it without compromise. What started as a small trading house has grown into a trusted name in natural food exports.
        </p>
        <p style={{ fontSize: '0.85rem', lineHeight: 1.9, color: '#8a7a68', marginBottom: '1rem' }}>
          We work directly with smallholder sugarcane farmers across Maharashtra, cutting out middlemen to ensure they receive fair compensation while our customers receive the freshest, most authentic product possible. Our facility is FSSAI certified and our processes are designed for international food safety standards.
        </p>
        <p style={{ fontSize: '0.85rem', lineHeight: 1.9, color: '#8a7a68' }}>
          The peacock — India's national bird — is our symbol. Like it, we believe in displaying our quality with confidence, in being deeply rooted in our homeland while spreading our wings across the globe.
        </p>
      </div>

      {/* Timeline */}
      <div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '2rem', textAlign: 'center' }}>Milestones</h2>
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
          {[
            { year: '2009', event: 'Namaste Globals founded in Sangli with a focus on jaggery exports.' },
            { year: '2012', event: 'Received FSSAI certification. First export shipment to the UAE.' },
            { year: '2016', event: 'Expanded product range to include Jaggery Powder and Liquid Jaggery.' },
            { year: '2019', event: 'Crossed 30 export destinations. ISO certification achieved.' },
            { year: '2024', event: 'Launched direct-to-consumer online store with Stripe-secured payments.' },
          ].map((item, i) => (
            <div key={item.year} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', position: 'relative' }}>
              <div style={{
                position: 'absolute', left: '-2.35rem', top: 4,
                width: 12, height: 12, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold), var(--teal))',
                border: '2px solid var(--dark)',
              }} />
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.85rem', color: 'var(--gold)', minWidth: 48, paddingTop: 2 }}>{item.year}</div>
              <p style={{ fontSize: '0.82rem', color: '#7a6e60', lineHeight: 1.7 }}>{item.event}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
