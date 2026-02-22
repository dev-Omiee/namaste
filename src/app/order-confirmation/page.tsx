'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams();
  const paymentIntent = searchParams.get('payment_intent');
  const status = searchParams.get('redirect_status');
  const [countdown, setCountdown] = useState(10);

  const success = status === 'succeeded';

  useEffect(() => {
    if (!success) return;
    const t = setInterval(() => setCountdown(c => c - 1), 1000);
    return () => clearInterval(t);
  }, [success]);

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '6rem 1.5rem', textAlign: 'center' }}>
      {success ? (
        <>
          {/* Success animation ring */}
          <div style={{ position: 'relative', width: 120, height: 120, margin: '0 auto 2.5rem' }}>
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              border: '2px solid rgba(42,181,160,0.3)',
              animation: 'pulseGlow 2s ease-in-out infinite',
            }} />
            <div style={{
              width: 120, height: 120, borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(26,122,110,0.2), rgba(27,79,114,0.2))',
              border: '1px solid rgba(42,181,160,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <CheckCircle size={52} color="var(--teal-light)" strokeWidth={1.5} />
            </div>
          </div>

          <p className="animate-fade-up" style={{ fontSize: '0.62rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 12 }}>
            Payment Successful
          </p>
          <h1 className="animate-fade-up anim-d1" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.4rem, 6vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Thank You for<br /><span className="gold-shimmer">Your Order!</span>
          </h1>
          <p className="animate-fade-up anim-d2" style={{ fontSize: '0.9rem', color: '#7a6e60', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 480, margin: '0 auto 2.5rem' }}>
            Your order has been confirmed and is being prepared for dispatch. You'll receive a confirmation email shortly.
          </p>

          {/* Order details card */}
          <div className="animate-fade-up anim-d3" style={{
            background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 12,
            padding: '2rem', marginBottom: '2.5rem', textAlign: 'left',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
              <Package size={20} color="var(--gold)" />
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>Order Details</h2>
            </div>
            {paymentIntent && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: '0.75rem', color: '#5a5248' }}>Order ID</span>
                <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#8a7a68', letterSpacing: '0.05em' }}>{paymentIntent.slice(0, 20)}...</span>
              </div>
            )}
            {[
              ['Status', '✅ Confirmed'],
              ['Estimated Dispatch', '2–3 Business Days'],
              ['Shipping', 'Pan-India Standard Delivery'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: '0.75rem', color: '#5a5248' }}>{k}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--cream)' }}>{v}</span>
              </div>
            ))}

            {/* Progress tracker */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5a5248', marginBottom: '1rem' }}>Order Progress</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                {[
                  { label: 'Confirmed', done: true },
                  { label: 'Processing', done: false },
                  { label: 'Shipped', done: false },
                  { label: 'Delivered', done: false },
                ].map((step, i, arr) => (
                  <div key={step.label} style={{ display: 'flex', alignItems: 'center', flex: i < arr.length - 1 ? 1 : 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%',
                        background: step.done ? 'linear-gradient(135deg, var(--teal), var(--peacock-blue))' : 'rgba(201,168,76,0.1)',
                        border: `1px solid ${step.done ? 'rgba(42,181,160,0.5)' : 'rgba(201,168,76,0.2)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.65rem', color: step.done ? 'white' : '#4a4035',
                      }}>
                        {step.done ? '✓' : i + 1}
                      </div>
                      <span style={{ fontSize: '0.58rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: step.done ? 'var(--teal-light)' : '#3a3530', whiteSpace: 'nowrap' }}>
                        {step.label}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <div style={{ flex: 1, height: 1, background: step.done ? 'rgba(42,181,160,0.4)' : 'rgba(201,168,76,0.1)', margin: '0 4px', marginBottom: 24 }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '13px 28px', textDecoration: 'none',
              background: 'linear-gradient(135deg, var(--teal), var(--peacock-blue))',
              border: '1px solid rgba(42,181,160,0.35)', color: 'white',
              fontFamily: 'Raleway, sans-serif', fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase', borderRadius: 6,
            }}>
              Continue Shopping <ArrowRight size={14} />
            </Link>
            <Link href="/contact" style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '13px 28px', textDecoration: 'none',
              background: 'transparent', border: '1px solid var(--border)', color: '#7a6e60',
              fontFamily: 'Raleway, sans-serif', fontSize: '0.75rem', fontWeight: 500,
              letterSpacing: '0.14em', textTransform: 'uppercase', borderRadius: 6,
            }}>
              Contact Us
            </Link>
          </div>
        </>
      ) : (
        <>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>⚠️</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', color: '#c06060', marginBottom: '1rem' }}>Payment Failed</h1>
          <p style={{ color: '#7a6e60', fontSize: '0.88rem', marginBottom: '2rem', lineHeight: 1.8 }}>
            Something went wrong with your payment. Your card was not charged. Please try again.
          </p>
          <Link href="/checkout" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', textDecoration: 'none',
            background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))', color: '#0a0a0f',
            fontFamily: 'Raleway, sans-serif', fontSize: '0.78rem', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase', borderRadius: 6,
          }}>
            Try Again
          </Link>
        </>
      )}
    </div>
  );
}
