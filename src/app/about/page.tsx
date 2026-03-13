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
            // onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(42,181,160,0.35)'; el.style.transform = 'translateY(-3px)'; }}
            // onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)'; }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '0.9rem' }}>{c.icon}</div>
            <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: 8, textTransform: 'uppercase' }}>{c.title}</h3>
            <p style={{ fontSize: '0.78rem', color: '#6a5e50', lineHeight: 1.75 }}>{c.text}</p>
          </div>
        ))}
      </div>
   <div style={{ marginTop: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.63rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 10 }}>The People Behind It</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, color: 'var(--cream)' }}>
            Patil Family
          </h2>
          <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '1.25rem auto 0' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {[
            {
              emoji: '👨‍💼',
              name: 'Rohit Patil',
              role: 'Founder & Managing Director',
              bio: 'The driving force behind Namaste Globals, Rohit built the company from the ground up with over 15 years of experience in agro commodity trade. His deep roots in Maharashtra\'s farming community and sharp eye for quality have shaped every aspect of the business.',
            },
            {
              emoji: '👨‍🌾',
              name: 'Hrushikesh Patil',
              role: 'Head of Operations & Sourcing',
              bio: 'Hrushikesh oversees the entire supply chain — from farm to shipment. With hands-on knowledge of sugarcane cultivation and processing, he ensures every batch meets the highest standards of purity and consistency before it leaves the facility.',
            },
            {
              emoji: '👨‍💻',
              name: 'Ajinkya Patil',
              role: 'Export & Business Development',
              bio: 'The youngest of the three, Ajinkya brings fresh energy and a global outlook to Namaste Globals. He manages international client relationships, export documentation, and is spearheading the company\'s digital presence and new market expansion.',
            },
          ].map((member, i) => (
            <div key={member.name} className={`animate-fade-up anim-d${i + 1}`} style={{
              background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 12,
              padding: '2rem', textAlign: 'center', transition: 'all 0.3s',
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%', margin: '0 auto 1.25rem',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(42,181,160,0.1))',
                border: '2px solid rgba(201,168,76,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2.2rem',
              }}>
                {member.emoji}
              </div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem', fontWeight: 700, color: 'var(--cream)', marginBottom: 4 }}>
                {member.name}
              </h3>
              <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
                {member.role}
              </p>
              <div style={{ width: 30, height: 1, background: 'rgba(201,168,76,0.3)', margin: '0 auto 1rem' }} />
              <p style={{ fontSize: '0.78rem', color: '#6a5e50', lineHeight: 1.8 }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Story */}
      <div style={{ background: 'var(--dark3)', border: '1px solid var(--border)', borderLeft: '3px solid var(--gold)', borderRadius: 10, padding: '2.5rem', marginBottom: '3rem', marginTop: '3rem' }}>
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

      {/* Team */}
   

    </div>
  );
}