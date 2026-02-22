'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { removeFromCart, updateQuantity, selectCartItems, selectCartTotal } from '@/store/cartSlice';
import { formatINR } from '@/lib/formatPrice';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const shipping = total > 0 ? (total >= 1000 ? 0 : 99) : 0;
  const grandTotal = total + shipping;

  if (items.length === 0) {
    return (
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '6rem 1.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '4.5rem', marginBottom: '1.5rem' }}>🛒</div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.4rem', color: '#5a5248', marginBottom: '0.75rem' }}>Your cart is empty</h2>
        <p style={{ color: '#3a3530', fontSize: '0.85rem', marginBottom: '2.5rem' }}>Looks like you haven't added any products yet.</p>
        <Link href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '13px 32px', textDecoration: 'none',
          background: 'linear-gradient(135deg, var(--teal), var(--peacock-blue))',
          border: '1px solid rgba(42,181,160,0.35)', color: 'white',
          fontFamily: 'Raleway, sans-serif', fontSize: '0.78rem', fontWeight: 600,
          letterSpacing: '0.15em', textTransform: 'uppercase', borderRadius: 6,
        }}>
          <ShoppingBag size={15} /> Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 1.5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{ fontSize: '0.63rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 8 }}>Your Selection</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--cream)' }}>Shopping Cart</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr min(380px, 100%)', gap: '2rem', alignItems: 'start' }}>
        {/* Items list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {items.map(item => (
            <div key={item.id} style={{
              display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap',
              background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 10, padding: '1.25rem',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.35)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
            >
              {/* Thumbnail */}
              <div style={{ width: 80, height: 80, position: 'relative', borderRadius: 8, overflow: 'hidden', flexShrink: 0, border: '1px solid var(--border)' }}>
                <Image src={item.src} alt={item.content} fill style={{ objectFit: 'cover' }} sizes="80px" />
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 160 }}>
                <Link href={`/product/${encodeURIComponent(item.id)}`} style={{ textDecoration: 'none' }}>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', color: 'var(--cream)', marginBottom: 4, fontWeight: 600 }}>{item.content}</h3>
                </Link>
                <p style={{ fontSize: '0.75rem', color: '#5a5248' }}>{formatINR(item.price)} {item.unit}</p>
              </div>

              {/* Qty controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: 6, padding: '4px 10px' }}>
                <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 4, display: 'flex' }}>
                  <Minus size={14} />
                </button>
                <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.9rem', color: 'var(--cream)', minWidth: 20, textAlign: 'center' }}>{item.quantity}</span>
                <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 4, display: 'flex' }}>
                  <Plus size={14} />
                </button>
              </div>

              {/* Subtotal */}
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', color: 'var(--gold)', minWidth: 80, textAlign: 'right' }}>
                {formatINR(item.price * item.quantity)}
              </div>

              {/* Remove */}
              <button onClick={() => { dispatch(removeFromCart(item.id)); toast(`${item.content} removed`, { icon: '🗑️' }); }} style={{
                background: 'transparent', border: '1px solid rgba(180,60,60,0.3)', borderRadius: 6,
                color: '#c06060', cursor: 'pointer', padding: 8, display: 'flex', alignItems: 'center',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(180,60,60,0.1)'; el.style.color = '#e08080'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = '#c06060'; }}
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={{ background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 10, padding: '1.75rem', position: 'sticky', top: 90 }}>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>Order Summary</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#7a6e60' }}>
              <span>Subtotal ({items.reduce((n, i) => n + i.quantity, 0)} items)</span>
              <span style={{ color: 'var(--cream)' }}>{formatINR(total)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#7a6e60' }}>
              <span>Shipping</span>
              <span style={{ color: shipping === 0 ? 'var(--teal-light)' : 'var(--cream)' }}>
                {shipping === 0 ? 'FREE' : formatINR(shipping)}
              </span>
            </div>
            {shipping > 0 && (
              <p style={{ fontSize: '0.68rem', color: '#4a4035', fontStyle: 'italic' }}>
                Free shipping on orders above ₹1,000
              </p>
            )}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9a8878' }}>Grand Total</span>
              <span style={{ fontFamily: 'Cinzel, serif', fontSize: '1.4rem', color: 'var(--gold)' }}>{formatINR(grandTotal)}</span>
            </div>
          </div>

          <Link href="/checkout" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            padding: '14px', textDecoration: 'none',
            background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)',
            color: '#0a0a0f', fontFamily: 'Raleway, sans-serif', fontSize: '0.8rem',
            fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
            borderRadius: 6, transition: 'all 0.25s', marginBottom: 10,
          }}>
            Proceed to Checkout <ArrowRight size={15} />
          </Link>
          <Link href="/" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            padding: '11px', textDecoration: 'none',
            background: 'transparent', border: '1px solid var(--border)',
            color: '#7a6e60', fontFamily: 'Raleway, sans-serif', fontSize: '0.73rem',
            fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: 6,
          }}>
            ← Continue Shopping
          </Link>

          <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(201,168,76,0.08)', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {['🔒 256-bit SSL Encryption', '💳 Powered by Stripe', '📦 Ships within 2–3 days'].map(t => (
              <p key={t} style={{ fontSize: '0.68rem', color: '#3a3530' }}>{t}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
