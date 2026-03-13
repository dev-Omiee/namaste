'use client';
import Link from 'next/link';
import PeacockLogo from './PeacockLogo';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer style={{ background: '#060609', borderTop: '1px solid rgba(201,168,76,0.12)', padding: '3.5rem 1.5rem 1.5rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))', gap: '2.25rem', marginBottom: '2.5rem' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
              <PeacockLogo size={34} />
              <span className="gold-text" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.92rem', fontWeight: 700 }}>Namaste Globals</span>
            </div>
            <p style={{ fontSize: '0.76rem', lineHeight: 1.8, color: '#4a4035', maxWidth: 210 }}>
              Bridging the world's finest natural goods across borders. Rooted in Indian tradition, delivered with global excellence.
            </p>
            <div style={{ marginTop: '1.1rem', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['FSSAI', 'APEDA', 'ISO'].map(cert => (
                <span key={cert} style={{
                  fontSize: '0.56rem', fontFamily: 'Cinzel, serif', letterSpacing: '0.1em',
                  padding: '3px 8px', border: '1px solid rgba(201,168,76,0.18)', borderRadius: 3,
                  color: 'var(--gold)', opacity: 0.65,
                }}>{cert}</span>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Navigate</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                ['/', 'Home'],
                ['/#products', 'Products'],
                ['/about', 'About Us'],
                ['/certifications', 'Certifications'],
                ['/payment-shipping', 'Payment & Shipping'],
                ['/faq', 'FAQ'],
                ['/privacy', 'Privacy Policy'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} style={{ fontSize: '0.75rem', color: '#4a4035', textDecoration: 'none', transition: 'color 0.2s', lineHeight: 1 }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal-light)')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#4a4035')}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Reach Us</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li style={{ fontSize: '0.74rem', color: '#4a4035', lineHeight: 1.65 }}>
                R-094-09, Tanaji Lakhmoji Patil Galli,<br />At Post Kameri, Taluka Walawa,<br />Sangli, Maharashtra — 415403
              </li>
              <li>
                <a href="mailto:info.namasteglobals@gmail.com" style={{ fontSize: '0.74rem', color: '#4a4035', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal-light)')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#4a4035')}
                >info.namasteglobals@gmail.com</a>
              </li>
              <li>
                <a href="tel:+917499418833" style={{ fontSize: '0.74rem', color: '#4a4035', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal-light)')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#4a4035')}
                >+91 74994 18833</a>
              </li>
              <li>
                <a
                  href="https://wa.me/917499418833"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.74rem', color: '#25D366', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}
                >
                  <svg viewBox="0 0 24 24" fill="#25D366" style={{ width: 12, height: 12 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </li>
              <li style={{ fontSize: '0.68rem', color: '#3a3530' }}>Mon–Sat, 9:00 AM – 6:00 PM IST</li>
            </ul>
          </div>

          {/* Enquire */}
          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Enquire Now</h4>
            <p style={{ fontSize: '0.74rem', color: '#4a4035', lineHeight: 1.8, marginBottom: '1rem' }}>
              Looking to source in bulk or export? Send us your requirements and we'll respond within 24 hours.
            </p>
            <Link href="/contact" style={{
              display: 'inline-block', padding: '11px 20px', textDecoration: 'none',
              background: 'linear-gradient(135deg, var(--teal) 0%, var(--peacock-blue) 100%)',
              color: 'white', fontFamily: 'Raleway, sans-serif', fontSize: '0.68rem',
              fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
              borderRadius: 5, border: '1px solid rgba(42,181,160,0.28)',
              marginBottom: 10,
            }}>
              Send Enquiry →
            </Link>
            <br />
            <Link href="/certifications" style={{ fontSize: '0.72rem', color: 'var(--teal-light)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              View Certifications →
            </Link>
            <br />
            <Link href="/payment-shipping" style={{ fontSize: '0.72rem', color: 'var(--gold)', textDecoration: 'none', marginTop: 4, display: 'inline-block' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Payment & Shipping →
            </Link>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(201,168,76,0.08)', paddingTop: '1.4rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 8,
        }}>
          <p style={{ fontSize: '0.66rem', color: '#2e2920', letterSpacing: '0.04em' }}>
            © {year} Namaste Globals. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 14 }}>
            <Link href="/privacy" style={{ fontSize: '0.66rem', color: '#2e2920', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/contact" style={{ fontSize: '0.66rem', color: '#2e2920', textDecoration: 'none' }}>Contact</Link>
          </div>
          <p style={{ fontSize: '0.66rem', color: '#2e2920' }}>Crafted with 🦚 in India</p>
        </div>
      </div>
    </footer>
  );
}
