'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { formatINR } from '@/lib/formatPrice';
import { Send, BookOpen } from 'lucide-react';
import ProductModal from './ProductModal';

export default function ProductCard({ product }: { product: Product }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        style={{
          background: 'var(--dark3)',
          border: '1px solid var(--border)',
          borderRadius: 10,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = 'rgba(201,168,76,0.45)';
          el.style.transform = 'translateY(-4px)';
          el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.5)';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = 'var(--border)';
          el.style.transform = 'translateY(0)';
          el.style.boxShadow = 'none';
        }}
      >
        {/* Image — clicking opens modal */}
        <div
          onClick={() => setModalOpen(true)}
          style={{
            position: 'relative', height: 210, cursor: 'pointer',
            background: 'linear-gradient(135deg, rgba(26,122,110,0.15), rgba(201,168,76,0.08))',
            overflow: 'hidden',
          }}
        >
          <Image
            src={product.src}
            alt={product.content}
            fill
            style={{ objectFit: 'contain', transition: 'transform 0.4s ease', padding: '12px' }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="card-img-overlay" style={{
            position: 'absolute', inset: 0,
            background: 'rgba(10,10,15,0)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.25s',
          }}>
            <span className="card-img-hint" style={{
              opacity: 0, transform: 'scale(0.85)',
              background: 'rgba(10,10,15,0.72)', backdropFilter: 'blur(4px)',
              border: '1px solid rgba(201,168,76,0.3)',
              color: 'var(--gold)', fontSize: '0.64rem', fontFamily: 'Raleway, sans-serif',
              fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '7px 16px', borderRadius: 20,
              transition: 'opacity 0.25s, transform 0.25s',
            }}>
              Click to view details
            </span>
          </div>
          <div style={{
            position: 'absolute', top: 12, right: 12, zIndex: 2,
            background: 'rgba(10,10,15,0.78)', backdropFilter: 'blur(8px)',
            border: '1px solid var(--border)', fontSize: '0.55rem',
            letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)',
            padding: '4px 10px', borderRadius: 3,
          }}>
            {product.category}
          </div>
          {!product.inStock && (
            <div style={{
              position: 'absolute', top: 12, left: 12, zIndex: 2,
              background: 'rgba(40,40,50,0.9)', color: '#9a8878', fontSize: '0.6rem',
              fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '4px 10px', borderRadius: 20, border: '1px solid rgba(154,136,120,0.3)',
            }}>
              Coming Soon
            </div>
          )}
        </div>

        {/* Card body */}
        <div style={{ padding: '1.35rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <button
            onClick={() => setModalOpen(true)}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', marginBottom: 4 }}
          >
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem',
              fontWeight: 600, color: 'var(--cream)', lineHeight: 1.2,
            }}>
              {product.content}
            </h3>
          </button>

          <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 8 }}>
            {product.price > 0 ? (
              <>{formatINR(product.price)}<span style={{ fontSize: '0.62rem', color: '#7a6e60', fontFamily: 'Raleway, sans-serif', marginLeft: 5 }}>{product.unit}</span></>
            ) : (
              <span style={{ fontSize: '0.75rem', color: '#7a6e60', fontFamily: 'Raleway, sans-serif', letterSpacing: '0.1em' }}>Price on Request</span>
            )}
          </div>

          <p style={{ fontSize: '0.78rem', lineHeight: 1.75, color: '#7a6e60', flex: 1, marginBottom: '1.2rem' }}>
            {product.summary.length > 100 ? product.summary.slice(0, 100) + '…' : product.summary}
          </p>

          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={() => setModalOpen(true)}
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                padding: '11px', cursor: 'pointer',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(201,168,76,0.28)', color: 'var(--gold)',
                fontFamily: 'Raleway, sans-serif', fontSize: '0.7rem', fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: 5,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.1)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}
            >
              <BookOpen size={13} /> Read More
            </button>
            <Link
              href={"/contact?product=" + encodeURIComponent(product.content)}
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                padding: '11px', textDecoration: 'none',
                background: 'linear-gradient(135deg, var(--teal) 0%, var(--peacock-blue) 100%)',
                border: '1px solid rgba(42,181,160,0.3)', color: 'white',
                fontFamily: 'Raleway, sans-serif', fontSize: '0.7rem', fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: 5,
              }}
            >
              <Send size={13} /> Enquire
            </Link>
          </div>
        </div>
      </div>

      {modalOpen && <ProductModal product={product} onClose={() => setModalOpen(false)} />}

      <style>{`
        .card-img-overlay:hover { background: rgba(10,10,15,0.45) !important; }
        .card-img-overlay:hover .card-img-hint { opacity: 1 !important; transform: scale(1) !important; }
      `}</style>
    </>
  );
}
