'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import PeacockLogo from './PeacockLogo';
import { useAppSelector } from '@/store/hooks';
import { selectCartCount } from '@/store/cartSlice';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#products", label: "Products" },
  { href: "/certifications", label: "Certifications" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  // { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const pathname = usePathname();
  const cartCount = useAppSelector(selectCartCount);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(10,10,15,0.93)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(201,168,76,0.18)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <PeacockLogo size={44} />
          <div style={{ lineHeight: 1.15 }}>
            <div className="gold-text" style={{ fontFamily: 'Cinzel, serif', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.04em' }}>
              Namaste Globals
            </div>
            <div style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.58rem', fontWeight: 300, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--teal-light)', opacity: 0.8 }}>
              Import · Export · Excellence
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden-mobile">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontFamily: 'Raleway, sans-serif', fontSize: '0.75rem', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none',
              padding: '8px 14px', borderRadius: 4, transition: 'all 0.2s',
              color: pathname === href ? 'var(--gold-light)' : '#9a8878',
              background: pathname === href ? 'rgba(201,168,76,0.08)' : 'transparent',
              borderBottom: pathname === href ? '1px solid var(--gold)' : '1px solid transparent',
            }}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Cart + Mobile menu */}
        {/* <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link href="/cart" style={{
            display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none',
            background: 'linear-gradient(135deg, var(--teal) 0%, var(--peacock-blue) 100%)',
            border: '1px solid rgba(42,181,160,0.35)', color: 'white',
            fontFamily: 'Raleway, sans-serif', fontSize: '0.75rem', fontWeight: 500,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '9px 18px', borderRadius: 4, transition: 'all 0.25s',
            position: 'relative',
          }}>
            <ShoppingCart size={15} />
            <span>Cart</span>
            {cartCount > 0 && (
              <span style={{
                background: 'var(--gold)', color: '#000', borderRadius: '50%',
                width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.6rem', fontWeight: 700, position: 'absolute', top: -6, right: -6,
              }}>
                {cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--cream)', cursor: 'pointer', display: 'none' }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div> */}
      </div>

      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <nav style={{
          background: 'var(--dark2)', borderTop: '1px solid var(--border)',
          padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Raleway, sans-serif', fontSize: '0.85rem', fontWeight: 500,
                letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
                padding: '12px 0', color: pathname === href ? 'var(--gold-light)' : '#9a8878',
                borderBottom: '1px solid rgba(201,168,76,0.08)',
              }}>
              {label}
            </Link>
          ))}
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
