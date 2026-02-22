'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Metadata } from 'next';

const faqs = [
  {
    category: 'Products',
    items: [
      { q: 'What is the difference between Jaggery (Gur), Jaggery Powder, and Liquid Jaggery?', a: 'Jaggery (Gur) is the traditional solid block form — great for direct consumption, chai, and sweets. Jaggery Powder is finely ground jaggery that dissolves instantly, ideal for tea, coffee, baking, and cooking. Liquid Jaggery (Kakvi) is a semi-viscous concentrate — perfect for drizzling on roti or using in recipes that need a syrup-like consistency.' },
      { q: 'Are your products chemical-free?', a: 'Yes, absolutely. All our products are made without any chemical additives, preservatives, or artificial colors. We source directly from farms that use traditional open-pan methods of jaggery production.' },
      { q: 'Are your products FSSAI certified?', a: 'Yes, Namaste Globals is FSSAI certified. Our products meet Indian food safety standards and are also tested by third-party labs for export compliance.' },
      { q: 'Do you offer bulk or wholesale quantities?', a: 'Yes. We cater to retailers, restaurants, exporters, and wholesalers. Contact us via the Contact page with your requirements and we\'ll get back with pricing.' },
    ],
  },
  {
    category: 'Orders & Shipping',
    items: [
      { q: 'What is the shipping cost?', a: 'We offer free shipping on all orders above ₹1,000. For orders below ₹1,000, a flat shipping fee of ₹99 is applied.' },
      { q: 'How long does delivery take?', a: 'Orders are dispatched within 2–3 business days. Delivery typically takes 4–7 business days depending on your location within India. International shipping timelines vary.' },
      { q: 'Do you ship internationally?', a: 'Yes. We export to 30+ countries. International orders are handled separately — please reach out via the Contact page for export inquiries and pricing.' },
      { q: 'Can I track my order?', a: 'Yes. Once your order is dispatched, you will receive a tracking number via email. You can use this to track your shipment in real-time.' },
    ],
  },
  {
    category: 'Payments',
    items: [
      { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards (Visa, Mastercard, Amex), UPI, net banking, and digital wallets via Stripe — one of the world\'s most trusted payment processors.' },
      { q: 'Is my payment information secure?', a: 'Yes. All payments are processed through Stripe, which is PCI DSS Level 1 compliant — the highest level of security certification. We never store your card details on our servers.' },
      { q: 'Can I get a refund?', a: 'We accept return or refund requests within 7 days of delivery if the product is damaged or incorrect. Please contact us with photos of the issue and your order ID.' },
    ],
  },
  {
    category: 'About Jaggery',
    items: [
      { q: 'Is jaggery healthier than refined sugar?', a: 'Jaggery retains minerals like iron, magnesium, potassium, and phosphorus that are stripped out during sugar refining. It has a lower glycemic index than white sugar, though it should still be consumed in moderation.' },
      { q: 'How should I store jaggery?', a: 'Store solid jaggery in an airtight container in a cool, dry place away from moisture. Jaggery Powder should be refrigerated after opening. Liquid Jaggery should be kept in a sealed container and refrigerated.' },
      { q: 'How long is the shelf life?', a: 'Solid Jaggery: 12 months. Jaggery Powder: 9 months. Liquid Jaggery: 6 months. Always check the packaging for the best-before date.' },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 8,
      overflow: 'hidden', transition: 'border-color 0.2s', marginBottom: 8,
      borderColor: open ? 'rgba(201,168,76,0.35)' : 'var(--border)',
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', padding: '1.1rem 1.4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 12,
      }}>
        <span style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.88rem', fontWeight: 500, color: open ? 'var(--cream)' : '#9a8878', lineHeight: 1.5 }}>{q}</span>
        <ChevronDown size={16} color="var(--gold)" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s', flexShrink: 0 }} />
      </button>
      {open && (
        <div style={{ padding: '0 1.4rem 1.25rem' }}>
          <p style={{ fontSize: '0.83rem', color: '#6a5e50', lineHeight: 1.8, borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '1rem' }}>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '5rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.63rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 10 }}>Help Center</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', fontWeight: 700 }}>
          <span className="gold-text">Frequently</span> Asked Questions
        </h1>
        <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '1.25rem auto 1.5rem' }} />
        <p style={{ fontSize: '0.88rem', color: '#7a6e60', lineHeight: 1.8 }}>Everything you need to know about our products, orders, and shipping.</p>
      </div>

      {faqs.map((section, i) => (
        <div key={section.category} style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
            {section.category}
          </h2>
          {section.items.map(item => <FaqItem key={item.q} {...item} />)}
        </div>
      ))}

      {/* Still need help */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(26,122,110,0.12), rgba(27,79,114,0.12))',
        border: '1px solid rgba(42,181,160,0.25)', borderRadius: 12, padding: '2.5rem', textAlign: 'center', marginTop: '3rem',
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🦚</div>
        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', color: 'var(--cream)', marginBottom: 8 }}>Still have questions?</h3>
        <p style={{ fontSize: '0.82rem', color: '#6a5e50', lineHeight: 1.7, marginBottom: '1.5rem' }}>Our team is available Monday–Saturday to help you.</p>
        <a href="/contact" style={{
          display: 'inline-block', padding: '12px 28px', textDecoration: 'none',
          background: 'linear-gradient(135deg, var(--teal), var(--peacock-blue))',
          border: '1px solid rgba(42,181,160,0.35)', color: 'white',
          fontFamily: 'Raleway, sans-serif', fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.14em', textTransform: 'uppercase', borderRadius: 6,
        }}>
          Contact Us →
        </a>
      </div>
    </div>
  );
}
