'use client'
import Link from 'next/link';
import PeacockLogo from './PeacockLogo';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer style={{ background: '#060609', borderTop: '1px solid rgba(201,168,76,0.12)', padding: '3rem 1.5rem 1.5rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
              <PeacockLogo size={36} />
              <span className="gold-text" style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 700 }}>Namaste Globals</span>
            </div>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.75, color: '#5a5248', maxWidth: 240 }}>
              Bridging the world's finest natural goods across borders. Rooted in Indian tradition, delivered with global excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Navigate</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[['/', 'Products'], ['/about', 'About Us'], ['/contact', 'Contact'], ['/faq', 'FAQ'], ['/privacy', 'Privacy Policy']].map(([href, label]) => (
                <li key={href}><Link href={href} style={{ fontSize: '0.8rem', color: '#5a5248', textDecoration: 'none', transition: 'color 0.2s' }}
                  >{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Reach Us</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Sangli, Maharashtra, India', 'info.namasteglobals@gmail.com', '+917499418833'].map(t => (
                <li key={t} style={{ fontSize: '0.8rem', color: '#5a5248' }}>{t}</li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Trust & Safety</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['🔒 Stripe Secured Payments', '🚚 Pan-India Shipping', '✅ FSSAI Certified', '🌿 Chemical-Free Promise'].map(t => (
                <li key={t} style={{ fontSize: '0.78rem', color: '#5a5248' }}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(201,168,76,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontSize: '0.7rem', color: '#3a3530', letterSpacing: '0.04em' }}>© {year} Namaste Globals. All rights reserved.</p>
          <p style={{ fontSize: '0.7rem', color: '#3a3530' }}>Crafted with 🦚 in India</p>
        </div>
      </div>
    </footer>
  );
}


