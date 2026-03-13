'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import PeacockLogo from './PeacockLogo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/certifications', label: 'Certifications' },
  {
    label: 'Trade Info',
    children: [
      { href: '/payment-shipping', label: 'Payment & Shipping' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 200,
      background: 'rgba(10,10,15,0.96)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(201,168,76,0.18)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 68,
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
          <PeacockLogo size={40} />
          <div style={{ lineHeight: 1.15 }}>
            <div className="gold-text" style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.04em' }}>
              Namaste Globals
            </div>
            <div style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.52rem', fontWeight: 300, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--teal-light)', opacity: 0.8 }}>
              Import · Export · Excellence
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="nav-desktop">
          {navLinks.map((item) => {
            if ('children' in item) {
              return (
                <div
                  key={item.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                >
                  <button style={{
                    display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer',
                    fontFamily: 'Raleway, sans-serif', fontSize: '0.73rem', fontWeight: 500,
                    letterSpacing: '0.1em', textTransform: 'uppercase', background: 'none', border: 'none',
                    padding: '8px 14px', borderRadius: 4, color: '#9a8878', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--gold-light)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#9a8878')}
                  >
                    {item.label} <ChevronDown size={12} />
                  </button>
                  {dropOpen && (
                    <div style={{
                      position: 'absolute', top: '100%', left: 0,
                      background: '#0d0d18', border: '1px solid rgba(201,168,76,0.2)',
                      borderRadius: 6, minWidth: 180, overflow: 'hidden',
                      boxShadow: '0 12px 36px rgba(0,0,0,0.5)',
                      zIndex: 300,
                    }}>
                      {item.children.map(child => (
                        <Link key={child.href} href={child.href} style={{
                          display: 'block', padding: '10px 16px', textDecoration: 'none',
                          fontFamily: 'Raleway, sans-serif', fontSize: '0.72rem', fontWeight: 500,
                          letterSpacing: '0.08em', textTransform: 'uppercase',
                          color: pathname === child.href ? 'var(--gold-light)' : '#9a8878',
                          background: pathname === child.href ? 'rgba(201,168,76,0.08)' : 'transparent',
                          borderBottom: '1px solid rgba(201,168,76,0.07)',
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.1)'; (e.currentTarget as HTMLElement).style.color = 'var(--gold-light)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = pathname === child.href ? 'rgba(201,168,76,0.08)' : 'transparent'; (e.currentTarget as HTMLElement).style.color = pathname === child.href ? 'var(--gold-light)' : '#9a8878'; }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link key={item.href} href={item.href!} style={{
                fontFamily: 'Raleway, sans-serif', fontSize: '0.73rem', fontWeight: 500,
                letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
                padding: '8px 14px', borderRadius: 4, transition: 'all 0.2s',
                color: pathname === item.href ? 'var(--gold-light)' : '#9a8878',
                background: pathname === item.href ? 'rgba(201,168,76,0.08)' : 'transparent',
                borderBottom: pathname === item.href ? '1px solid var(--gold)' : '1px solid transparent',
              }}>
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" style={{
            marginLeft: 8,
            display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none',
            background: 'linear-gradient(135deg, var(--teal) 0%, var(--peacock-blue) 100%)',
            border: '1px solid rgba(42,181,160,0.35)', color: 'white',
            fontFamily: 'Raleway, sans-serif', fontSize: '0.72rem', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', padding: '9px 18px', borderRadius: 4,
          }}>
            Send Enquiry
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-btn"
          style={{ background: 'none', border: '1px solid rgba(201,168,76,0.25)', color: 'var(--cream)', cursor: 'pointer', padding: '7px', borderRadius: 6, display: 'none' }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav style={{
          background: 'rgba(10,10,15,0.99)', borderTop: '1px solid rgba(201,168,76,0.12)',
          padding: '1rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: 0,
        }}>
          {[
            { href: '/', label: 'Home' },
            { href: '/#products', label: 'Products' },
            { href: '/about', label: 'About Us' },
            { href: '/certifications', label: 'Certifications' },
            { href: '/payment-shipping', label: 'Payment & Shipping' },
            { href: '/faq', label: 'FAQ' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link key={href} href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Raleway, sans-serif', fontSize: '0.88rem', fontWeight: 500,
                letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
                padding: '13px 0', color: pathname === href ? 'var(--gold-light)' : '#9a8878',
                borderBottom: '1px solid rgba(201,168,76,0.08)',
              }}>
              {label}
            </Link>
          ))}
          <Link href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '13px', textDecoration: 'none',
              background: 'linear-gradient(135deg, var(--teal) 0%, var(--peacock-blue) 100%)',
              color: 'white', fontFamily: 'Raleway, sans-serif', fontSize: '0.78rem',
              fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', borderRadius: 6,
            }}>
            Send Enquiry
          </Link>
        </nav>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  );
}
