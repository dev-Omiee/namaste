'use client';
import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearCart, selectCartItems } from '@/store/cartSlice';
import { useRouter } from 'next/navigation';
import { formatINR } from '@/lib/formatPrice';
import { ShippingDetails } from '@/types';
import { Lock, ChevronLeft } from 'lucide-react';
import axios from 'axios';

interface Props {
  amount: number;
  shippingDetails: ShippingDetails;
  onBack: () => void;
}

export default function CheckoutForm({ amount, shippingDetails, onBack }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const items = useAppSelector(selectCartItems);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [ready, setReady] = useState(false);

  const initPayment = async () => {
    if (ready) return;
    setLoading(true);
    try {
      const { data } = await axios.post('/api/create-payment-intent', {
        amount,
        items: items.map(i => ({ id: i.id, name: i.content, quantity: i.quantity, price: i.price })),
        shippingDetails,
      });
      setClientSecret(data.clientSecret);
      setReady(true);
    } catch {
      setError('Unable to initialize payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError('');

    if (!ready) await initPayment();

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order-confirmation`,
        payment_method_data: {
          billing_details: {
            name: shippingDetails.fullName,
            email: shippingDetails.email,
            phone: shippingDetails.phone,
            address: {
              line1: shippingDetails.address,
              city: shippingDetails.city,
              state: shippingDetails.state,
              postal_code: shippingDetails.pincode,
              country: 'IN',
            },
          },
        },
      },
    });

    if (submitError) {
      setError(submitError.message ?? 'Payment failed. Please try again.');
      setLoading(false);
    } else {
      dispatch(clearCart());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 10, padding: '2rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
          <Lock size={16} color="var(--teal-light)" />
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.85rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase' }}>Payment Details</h2>
        </div>

        {/* Shipping summary */}
        <div style={{ background: 'rgba(42,181,160,0.06)', border: '1px solid rgba(42,181,160,0.18)', borderRadius: 8, padding: '1rem', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 6 }}>Delivering to</p>
          <p style={{ fontSize: '0.82rem', color: 'var(--cream)', marginBottom: 2 }}>{shippingDetails.fullName}</p>
          <p style={{ fontSize: '0.78rem', color: '#7a6e60' }}>{shippingDetails.address}, {shippingDetails.city} – {shippingDetails.pincode}</p>
          <p style={{ fontSize: '0.78rem', color: '#7a6e60' }}>{shippingDetails.email} · {shippingDetails.phone}</p>
        </div>

        <div onClick={initPayment}>
          <PaymentElement options={{ layout: 'tabs' }} />
        </div>

        {error && (
          <div style={{ marginTop: '1rem', padding: '12px 16px', background: 'rgba(220,80,80,0.08)', border: '1px solid rgba(220,80,80,0.3)', borderRadius: 6 }}>
            <p style={{ fontSize: '0.8rem', color: '#e08080' }}>⚠️ {error}</p>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button type="submit" disabled={loading || !stripe} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          width: '100%', padding: '15px', cursor: loading ? 'wait' : 'pointer',
          background: loading ? 'rgba(201,168,76,0.4)' : 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)',
          border: 'none', color: '#0a0a0f', fontFamily: 'Raleway, sans-serif', fontSize: '0.82rem',
          fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', borderRadius: 6,
          transition: 'all 0.25s', opacity: loading ? 0.7 : 1,
        }}>
          <Lock size={15} />
          {loading ? 'Processing...' : `Pay ${formatINR(amount)} Securely`}
        </button>
        <button type="button" onClick={onBack} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          width: '100%', padding: '12px', cursor: 'pointer',
          background: 'transparent', border: '1px solid var(--border)',
          color: '#7a6e60', fontFamily: 'Raleway, sans-serif', fontSize: '0.73rem',
          fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: 6,
        }}>
          <ChevronLeft size={14} /> Back to Shipping
        </button>
      </div>
    </form>
  );
}
