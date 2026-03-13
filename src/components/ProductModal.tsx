'use client';
import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Send, MapPin, Weight, Tag, Clock, Thermometer } from 'lucide-react';
import { Product } from '@/types';
import { formatINR } from '@/lib/formatPrice';

interface Props {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );
  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(5,5,10,0.88)', backdropFilter: 'blur(6px)',
        animation: 'modalFadeIn 0.22s ease both',
      }} />

      {/* Modal panel */}
      <div role="dialog" aria-modal="true" style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1001,
        width: '92vw', maxWidth: 860,
        maxHeight: '92vh', overflowY: 'auto',
        background: '#0f0f1a',
        border: '1px solid rgba(201,168,76,0.28)',
        borderRadius: 14,
        boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
        animation: 'modalSlideUp 0.28s cubic-bezier(0.34,1.4,0.64,1) both',
      }}>

        {/* Close */}
        <button onClick={onClose} aria-label="Close" style={{
          position: 'sticky', top: 12, float: 'right', marginRight: 14,
          zIndex: 10, background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%',
          width: 36, height: 36, cursor: 'pointer', color: '#9a8878',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.15)'; (e.currentTarget as HTMLElement).style.color = 'var(--gold)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.color = '#9a8878'; }}
        >
          <X size={16} />
        </button>

        <div style={{ padding: 'clamp(1.25rem, 4vw, 2rem)', paddingTop: '1.5rem' }}>

          {/* ── TOP: image + core info ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'clamp(130px, 36%, 240px) 1fr',
            gap: 'clamp(1rem, 4vw, 2rem)',
            marginBottom: '1.5rem', alignItems: 'start',
          }} className="modal-top-grid">

            {/* Image */}
            <div style={{
              position: 'relative', borderRadius: 10, overflow: 'hidden',
              border: '1px solid rgba(201,168,76,0.15)',
              background: 'linear-gradient(135deg, rgba(26,122,110,0.12), rgba(201,168,76,0.06))',
              aspectRatio: '1/1',
            }}>
              <Image src={product.src} alt={product.content} fill
                style={{ objectFit: 'contain', padding: 14 }} sizes="240px" />
              {!product.inStock && (
                <div style={{
                  position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
                  background: 'rgba(20,20,30,0.9)', border: '1px solid rgba(154,136,120,0.3)',
                  color: '#9a8878', fontSize: '0.58rem', fontWeight: 600,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  padding: '4px 12px', borderRadius: 20,
                }}>Coming Soon</div>
              )}
            </div>

            {/* Info */}
            <div>
              {/* Badges */}
              <div style={{ display: 'flex', gap: 7, marginBottom: 8, flexWrap: 'wrap' }}>
                {/* <span style={{
                  fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                  padding: '3px 9px', borderRadius: 3,
                  border: '1px solid rgba(42,181,160,0.3)', color: 'var(--teal-light)',
                  background: 'rgba(26,122,110,0.08)',
                }}>{product.category}</span> */}
                {/* {product.inStock && (
                  <span style={{
                    fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                    padding: '3px 9px', borderRadius: 3,
                    border: '1px solid rgba(60,160,80,0.35)', color: '#6abf7a',
                    background: 'rgba(40,120,60,0.1)',
                  }}>In Stock</span>
                )} */}
                {product.hsCode && (
                  <span style={{
                    fontSize: '0.55rem', letterSpacing: '0.12em',
                    padding: '3px 9px', borderRadius: 3,
                    border: '1px solid rgba(201,168,76,0.25)', color: 'var(--gold)',
                    background: 'rgba(201,168,76,0.06)', fontFamily: 'Cinzel, serif',
                  }}>{product.hsCode}</span>
                )}
              </div>

              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.4rem, 4vw, 1.9rem)',
                fontWeight: 700, color: 'var(--cream)', lineHeight: 1.1, marginBottom: '0.5rem',
              }}>{product.content}</h2>

              <div style={{ marginBottom: '0.8rem' }}>
                {product.price > 0 ? (
                  <span style={{ fontFamily: 'Cinzel, serif', fontSize: '1.35rem', fontWeight: 700, color: 'var(--gold)' }}>
                    {formatINR(product.price)}
                    <span style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.7rem', color: '#7a6e60', fontWeight: 400, marginLeft: 6 }}>{product.unit}</span>
                  </span>
                ) : (
                  <span style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.88rem', color: '#7a6e60', letterSpacing: '0.1em' }}>Price on Request</span>
                )}
              </div>

              <p style={{ fontSize: '0.81rem', lineHeight: 1.8, color: '#8a7a68', marginBottom: '1rem' }}>{product.summary}</p>

              {/* Quick specs row */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: '1.1rem' }}>
                {[
                  { icon: <MapPin size={11} />, text: product.origin },
                  { icon: <Weight size={11} />, text: product.weight },
                  { icon: <Tag size={11} />, text: 'FSSAI Certified' },
                  ...(product.shelfLife ? [{ icon: <Clock size={11} />, text: `Shelf Life: ${product.shelfLife}` }] : []),
                ].map(({ icon, text }) => (
                  <span key={text} style={{
                    display: 'flex', alignItems: 'center', gap: 5,
                    fontSize: '0.66rem', color: '#6a5e50',
                    padding: '4px 10px', borderRadius: 4,
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <span style={{ color: 'var(--teal-light)' }}>{icon}</span> {text}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Link href={`/contact?product=${encodeURIComponent(product.content)}`} onClick={onClose} style={{
                  flex: '1 1 130px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '12px 16px', textDecoration: 'none',
                  background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)',
                  color: '#0a0a0f', fontFamily: 'Cinzel, serif', fontSize: '0.68rem',
                  fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', borderRadius: 6,
                }}>
                  <Send size={13} /> Send Enquiry
                </Link>
                <a href={`https://wa.me/917499418833?text=${encodeURIComponent(`Hi! I'm interested in ${product.content}. Please share more details.`)}`}
                  target="_blank" rel="noopener noreferrer" style={{
                    flex: '1 1 110px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '12px 16px', textDecoration: 'none',
                    background: '#25D366', color: 'white',
                    fontFamily: 'Raleway, sans-serif', fontSize: '0.68rem',
                    fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: 6,
                  }}>
                  <svg viewBox="0 0 24 24" fill="white" style={{ width: 14, height: 14, flexShrink: 0 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)', margin: '0 0 1.5rem' }} />

          {/* ── ROW 2: Benefits + Shelf Life — two columns ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="modal-bottom-grid">

            {/* Key Benefits */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(42,181,160,0.12)', borderLeft: '3px solid var(--teal-light)', borderRadius: 8, padding: '1.1rem 1.25rem' }}>
              <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: '0.65rem' }}>
                Key Benefits
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                {product.benefits.map(b => (
                  <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.77rem', color: '#8a7a68', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--teal-light)', flexShrink: 0, marginTop: 1 }}>✓</span> {b}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: '1rem' }}>
                {['Chemical-Free', 'Farm Direct', 'Export Quality', 'FSSAI Certified'].map(tag => (
                  <span key={tag} style={{
                    fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '3px 8px', borderRadius: 3,
                    border: '1px solid rgba(42,181,160,0.22)', color: 'var(--teal-light)',
                    background: 'rgba(26,122,110,0.06)',
                  }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Shelf Life & Storage */}
            {(product.shelfLife || (product.storageConditions && product.storageConditions.length > 0)) ? (
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(91,163,208,0.18)', borderLeft: '3px solid #5ba3d0', borderRadius: 8, padding: '1.1rem 1.25rem' }}>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#5ba3d0', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Thermometer size={12} /> Shelf Life &amp; Storage
                </h3>
                {product.shelfLife && (
                  <div style={{ marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7a6e60', marginBottom: 3 }}>Shelf Life</div>
                    <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.9rem', color: '#5ba3d0', fontWeight: 600 }}>{product.shelfLife}</div>
                  </div>
                )}
                {product.storageConditions && product.storageConditions.length > 0 && (
                  <div>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7a6e60', marginBottom: 6 }}>Storage Conditions</div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {product.storageConditions.map(cond => (
                        <li key={cond} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.77rem', color: '#8a7a68', lineHeight: 1.6 }}>
                          <span style={{ color: '#5ba3d0', flexShrink: 0, marginTop: 2 }}>•</span> {cond}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : <div />}

          </div>

          {/* ── ROW 1: About — full width ── */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,168,76,0.1)', borderLeft: '3px solid var(--gold)', borderRadius: 8, padding: '1.1rem 1.25rem', marginBottom: '1.25rem', marginTop: '1.25rem' }}>
            <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.65rem' }}>
              About This Product
            </h3>
            <p style={{ fontSize: '0.78rem', lineHeight: 1.82, color: '#7a6e60', whiteSpace: 'pre-line' }}>{product.longDescription}</p>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translate(-50%, -44%); }
          to   { opacity: 1; transform: translate(-50%, -50%); }
        }
        @media (max-width: 520px) {
          .modal-top-grid { grid-template-columns: 1fr !important; }
          .modal-bottom-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}