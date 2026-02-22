'use client';
import { useState } from 'react';
import { useAppSelector } from '@/store/hooks';
import { selectCartItems, selectCartTotal } from '@/store/cartSlice';
import { formatINR } from '@/lib/formatPrice';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Image from 'next/image';
import Link from 'next/link';
import { ShippingDetails } from '@/types';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const EMPTY: ShippingDetails = {
  fullName: '', email: '', phone: '',
  address: '', city: '', state: '', pincode: '', country: 'India',
};

export default function CheckoutPage() {
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const shipping = total > 0 ? (total >= 1000 ? 0 : 99) : 0;
  const grandTotal = total + shipping;

  const [shipping_details, setShipping] = useState<ShippingDetails>(EMPTY);
  const [step, setStep] = useState<'shipping' | 'payment'>('shipping');

  if (items.length === 0) {
    return (
      <div style={{ maxWidth: 500, margin: '0 auto', padding: '6rem 1.5rem', textAlign: 'center' }}>
        <p style={{ color: '#5a5248', marginBottom: '1.5rem' }}>Your cart is empty.</p>
        <Link href="/" style={{ color: 'var(--teal-light)', textDecoration: 'none', fontSize: '0.85rem' }}>← Back to Products</Link>
      </div>
    );
  }

  const inputStyle = {
    width: '100%', padding: '11px 14px',
    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.18)',
    borderRadius: 6, color: 'var(--cream)', fontFamily: 'Raleway, sans-serif',
    fontSize: '0.85rem', outline: 'none', transition: 'border-color 0.2s',
  };
  const labelStyle = {
    display: 'block', fontSize: '0.65rem', letterSpacing: '0.2em',
    textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: 6,
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 1.5rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 8 }}>Secure Checkout</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--cream)', marginBottom: '1.5rem' }}>Checkout</h1>

        {/* Steps */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, maxWidth: 340 }}>
          {(['shipping', 'payment'] as const).map((s, i) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '6px 16px', borderRadius: 20,
                background: step === s ? 'rgba(201,168,76,0.15)' : (step === 'payment' && s === 'shipping') ? 'rgba(42,181,160,0.15)' : 'transparent',
                border: `1px solid ${step === s ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.1)'}`,
              }}>
                <span style={{
                  width: 20, height: 20, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.65rem', fontWeight: 700,
                  background: step === s ? 'var(--gold)' : (step === 'payment' && s === 'shipping') ? 'var(--teal-light)' : 'rgba(201,168,76,0.2)',
                  color: step === s || (step === 'payment' && s === 'shipping') ? '#0a0a0f' : '#5a5248',
                }}>
                  {step === 'payment' && s === 'shipping' ? '✓' : i + 1}
                </span>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: step === s ? 'var(--gold)' : '#5a5248' }}>
                  {s === 'shipping' ? 'Shipping' : 'Payment'}
                </span>
              </div>
              {i < 1 && <div style={{ width: 24, height: 1, background: 'var(--border)' }} />}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr min(360px, 100%)', gap: '2.5rem', alignItems: 'start' }}>
        {/* Left: form */}
        <div>
          {step === 'shipping' && (
            <form onSubmit={handleShippingSubmit}>
              <div style={{ background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 10, padding: '2rem', marginBottom: '1.5rem' }}>
                <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.85rem', letterSpacing: '0.15em', color: 'var(--gold)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Shipping Information</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={labelStyle}>Full Name *</label>
                    <input required style={inputStyle} value={shipping_details.fullName}
                      onChange={e => setShipping(p => ({ ...p, fullName: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = 'rgba(42,181,160,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.18)')}
                      placeholder="John Doe" />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input required type="email" style={inputStyle} value={shipping_details.email}
                      onChange={e => setShipping(p => ({ ...p, email: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = 'rgba(42,181,160,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.18)')}
                      placeholder="john@example.com" />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone *</label>
                    <input required style={inputStyle} value={shipping_details.phone}
                      onChange={e => setShipping(p => ({ ...p, phone: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = 'rgba(42,181,160,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.18)')}
                      placeholder="+91 90496 46485" />
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={labelStyle}>Address *</label>
                    <input required style={inputStyle} value={shipping_details.address}
                      onChange={e => setShipping(p => ({ ...p, address: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = 'rgba(42,181,160,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.18)')}
                      placeholder="House No., Street, Area" />
                  </div>
                  <div>
                    <label style={labelStyle}>City *</label>
                    <input required style={inputStyle} value={shipping_details.city}
                      onChange={e => setShipping(p => ({ ...p, city: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = 'rgba(42,181,160,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.18)')}
                      placeholder="Sangli" />
                  </div>
                  <div>
                    <label style={labelStyle}>State *</label>
                    <input required style={inputStyle} value={shipping_details.state}
                      onChange={e => setShipping(p => ({ ...p, state: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = 'rgba(42,181,160,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.18)')}
                      placeholder="Maharashtra" />
                  </div>
                  <div>
                    <label style={labelStyle}>PIN Code *</label>
                    <input required style={inputStyle} value={shipping_details.pincode}
                      onChange={e => setShipping(p => ({ ...p, pincode: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = 'rgba(42,181,160,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.18)')}
                      placeholder="400001" />
                  </div>
                  <div>
                    <label style={labelStyle}>Country</label>
                    <input style={{ ...inputStyle, color: '#7a6e60' }} value="India" readOnly />
                  </div>
                </div>
              </div>
              <button type="submit" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                width: '100%', padding: '14px', cursor: 'pointer',
                background: 'linear-gradient(135deg, var(--teal) 0%, var(--peacock-blue) 100%)',
                border: '1px solid rgba(42,181,160,0.35)', color: 'white',
                fontFamily: 'Raleway, sans-serif', fontSize: '0.8rem', fontWeight: 600,
                letterSpacing: '0.16em', textTransform: 'uppercase', borderRadius: 6,
              }}>
                Continue to Payment →
              </button>
            </form>
          )}

          {step === 'payment' && (
            <Elements stripe={stripePromise} options={{
              appearance: {
                theme: 'night',
                variables: {
                  colorPrimary: '#c9a84c', colorBackground: '#161622',
                  colorText: '#f5edd8', colorDanger: '#dc5555',
                  fontFamily: 'Raleway, sans-serif', borderRadius: '6px',
                },
              },
            }}>
              <CheckoutForm
                amount={grandTotal}
                shippingDetails={shipping_details}
                onBack={() => setStep('shipping')}
              />
            </Elements>
          )}
        </div>

        {/* Right: Order summary */}
        <div style={{ background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 10, padding: '1.75rem', position: 'sticky', top: 90 }}>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>Order Summary</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: '1.25rem' }}>
            {items.map(item => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 48, height: 48, position: 'relative', borderRadius: 6, overflow: 'hidden', border: '1px solid var(--border)', flexShrink: 0 }}>
                  <Image src={item.src} alt={item.content} fill style={{ objectFit: 'cover' }} sizes="48px" />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--cream)', marginBottom: 2 }}>{item.content}</p>
                  <p style={{ fontSize: '0.68rem', color: '#5a5248' }}>Qty: {item.quantity}</p>
                </div>
                <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.85rem', color: 'var(--gold)' }}>{formatINR(item.price * item.quantity)}</p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#7a6e60' }}>
              <span>Subtotal</span><span style={{ color: 'var(--cream)' }}>{formatINR(total)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#7a6e60' }}>
              <span>Shipping</span>
              <span style={{ color: shipping === 0 ? 'var(--teal-light)' : 'var(--cream)' }}>{shipping === 0 ? 'FREE' : formatINR(shipping)}</span>
            </div>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9a8878' }}>Total</span>
              <span style={{ fontFamily: 'Cinzel, serif', fontSize: '1.3rem', color: 'var(--gold)' }}>{formatINR(grandTotal)}</span>
            </div>
          </div>

          <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(201,168,76,0.08)', display: 'flex', flexDirection: 'column', gap: 5 }}>
            {['🔒 Secured by Stripe', '🛡️ PCI DSS Compliant', '💳 Visa · Mastercard · UPI'].map(t => (
              <p key={t} style={{ fontSize: '0.67rem', color: '#3a3530' }}>{t}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
