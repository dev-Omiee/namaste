import type { Metadata } from 'next';
import Link from 'next/link';
import { CreditCard, Ship, Package, FileText, Clock, Globe, CheckCircle, AlertCircle } from 'lucide-react';

export const metadata: Metadata = { title: 'Payment & Shipping — Namaste Globals' };

export default function PaymentShippingPage() {
  return (
    <div style={{ maxWidth: 1060, margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

      {/* Header */}
      <div className="animate-fade-up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <p style={{ fontSize: '0.62rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 10 }}>
          Trade Process
        </p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.4rem, 7vw, 4rem)', fontWeight: 700, lineHeight: 1.08, marginBottom: '0.5rem' }}>
          Payment &amp; <span className="gold-text">Shipping</span>
        </h1>
        <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '1.25rem auto 1.5rem' }} />
        <p style={{ fontSize: '0.88rem', color: '#7a6e60', lineHeight: 1.85, maxWidth: 540, margin: '0 auto' }}>
          We handle global bulk trade with complete transparency — from your first enquiry to delivery at your port. Here is exactly how we work.
        </p>
      </div>

      {/* ── STEP-BY-STEP PROCESS ── */}
      <section style={{ marginBottom: '4.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 8 }}>How It Works</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 600, color: 'var(--cream)' }}>
            From Enquiry to Delivery
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 22, top: 24, bottom: 24, width: 2,
            background: 'linear-gradient(to bottom, var(--teal-light), var(--gold), rgba(201,168,76,0))',
            opacity: 0.25,
          }} />

          {[
            { icon: <FileText size={17} />, color: 'var(--teal-light)', step: '01', title: 'Send Enquiry', desc: 'Fill our enquiry form specifying product, quantity, packaging size, and destination country. Our trade team responds within 24 business hours with a tailored quotation.' },
            { icon: <CreditCard size={17} />, color: 'var(--gold)', step: '02', title: 'Receive Pro-Forma Invoice', desc: 'We issue a Pro-Forma Invoice (PI) confirming product specs, pricing, incoterms, payment terms, and estimated delivery timeline. Review and confirm to proceed.' },
            { icon: <CheckCircle size={17} />, color: 'var(--teal-light)', step: '03', title: 'Advance Payment or LC', desc: 'Secure the order via 30–50% Telegraphic Transfer (T/T) advance, or open a Letter of Credit (L/C at sight). Balance due before shipment or against Bill of Lading.' },
            { icon: <Package size={17} />, color: 'var(--gold)', step: '04', title: 'Production & Packaging', desc: 'Your order is prepared to your exact packaging specifications. A pre-shipment sample is dispatched for approval. Full quality inspection and weight verification completed before loading.' },
            { icon: <Ship size={17} />, color: 'var(--teal-light)', step: '05', title: 'Shipment & Documents', desc: 'Goods are loaded at Nhava Sheva / Mumbai port. Full document set dispatched via courier: Bill of Lading, Certificate of Origin, FSSAI, Phytosanitary, Packing List, and Commercial Invoice.' },
            { icon: <Globe size={17} />, color: 'var(--gold)', step: '06', title: 'Arrival at Your Port', desc: 'Consignment arrives at your destination port. Our team supports with any customs documentation queries. You clear the goods and the trade is complete.' },
          ].map((s) => (
            <div key={s.step} style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.25rem' }}>
              {/* Step icon bubble */}
              <div style={{
                width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
                background: 'var(--dark3)', border: `2px solid ${s.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: s.color, zIndex: 2, position: 'relative',
              }}>
                {s.icon}
              </div>
              {/* Step card */}
              <div style={{
                flex: 1, background: 'var(--dark3)', border: '1px solid var(--border)',
                borderRadius: 8, padding: '1.1rem 1.4rem', marginBottom: 0,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 5, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.58rem', color: s.color, letterSpacing: '0.15em' }}>STEP {s.step}</span>
                  <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.8rem', color: 'var(--cream)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#7a6e60', lineHeight: 1.78, margin: 0 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PAYMENT METHODS ── */}
      <section style={{ marginBottom: '4.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 8 }}>Payment</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 600, color: 'var(--cream)' }}>
            Accepted Payment Methods
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
          {[
            { method: 'Telegraphic Transfer (T/T)', icon: '🏦', preferred: true, desc: '30% advance on confirmation. 70% balance before shipment or against copy of Bill of Lading. Wire to our Indian bank account in USD, EUR, or INR.' },
            { method: 'Letter of Credit (L/C)', icon: '📄', preferred: false, desc: 'L/C at sight accepted from reputed banks. All UCP 600 terms. Full document set presented through bank channels. Ideal for first-time large orders.' },
            { method: 'Documents Against Payment (DP)', icon: '📋', preferred: false, desc: 'Documents released only upon full payment at buyer\'s bank. Processed via SWIFT. Suitable for buyers with established banking relationships.' },
            { method: 'Open Account (OA)', icon: '🤝', preferred: false, desc: 'Net 30–60 day terms available for long-term partners with proven trade history. Subject to mutual credit assessment and signed agreement.' },
          ].map(p => (
            <div key={p.method} style={{
              background: 'var(--dark3)',
              border: p.preferred ? '1px solid rgba(201,168,76,0.45)' : '1px solid var(--border)',
              borderRadius: 8, padding: '1.5rem', position: 'relative', overflow: 'hidden',
            }}>
              {p.preferred && (
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                  color: '#0a0a0f', fontSize: '0.52rem', fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  padding: '4px 14px', borderRadius: '0 8px 0 8px',
                  fontFamily: 'Cinzel, serif',
                }}>Most Common</div>
              )}
              <div style={{ fontSize: '2rem', marginBottom: '0.7rem' }}>{p.icon}</div>
              <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.73rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: p.preferred ? 'var(--gold)' : 'var(--cream)', marginBottom: 8 }}>
                {p.method}
              </h3>
              <p style={{ fontSize: '0.78rem', color: '#7a6e60', lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          padding: '1.2rem 1.5rem', background: 'rgba(201,168,76,0.05)',
          border: '1px solid rgba(201,168,76,0.18)', borderRadius: 7,
          display: 'flex', gap: 10, alignItems: 'flex-start',
        }}>
          <AlertCircle size={15} color="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontSize: '0.77rem', color: '#7a6e60', lineHeight: 1.72, margin: 0 }}>
            All transactions are denominated in <strong style={{ color: 'var(--cream)' }}>USD, EUR, or INR</strong> as agreed on the Pro-Forma Invoice. Bank charges outside India are borne by the buyer. All payments confirmed in writing before production begins.
          </p>
        </div>
      </section>

      {/* ── SHIPPING DETAILS ── */}
      <section style={{ marginBottom: '4.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 8 }}>Logistics</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 600, color: 'var(--cream)' }}>
            Global Shipping Details
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>

          {/* Incoterms */}
          <div style={{ background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 8, padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: '1.1rem' }}>
              <Ship size={17} color="var(--teal-light)" />
              <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal-light)' }}>Incoterms We Offer</h3>
            </div>
            {[
              ['FOB — Nhava Sheva / Mumbai', 'Most popular. You arrange freight from Indian port onward.'],
              ['CIF — Your Destination Port', 'We arrange freight + cargo insurance to your port.'],
              ['CFR — Your Destination Port', 'We arrange freight; you handle cargo insurance.'],
              ['EXW — Our Warehouse, Sangli', 'You collect directly. Full control of logistics from origin.'],
            ].map(([term, desc]) => (
              <div key={term} style={{ marginBottom: '0.85rem', paddingBottom: '0.85rem', borderBottom: '1px solid rgba(201,168,76,0.07)' }}>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.68rem', color: 'var(--gold)', marginBottom: 3 }}>{term}</div>
                <div style={{ fontSize: '0.74rem', color: '#6a5e50', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Modes & Volumes */}
          <div style={{ background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 8, padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: '1.1rem' }}>
              <Package size={17} color="var(--gold)" />
              <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>Modes &amp; Volumes</h3>
            </div>
            {[
              { mode: 'FCL — 20ft Container', cap: '18–20 Metric Tons', bg: 'rgba(42,181,160,0.1)', border: 'rgba(42,181,160,0.25)', color: 'var(--teal-light)' },
              { mode: 'FCL — 40ft Container', cap: '24–28 Metric Tons', bg: 'rgba(42,181,160,0.07)', border: 'rgba(42,181,160,0.2)', color: 'var(--teal-light)' },
              { mode: 'LCL — Shared Container', cap: '500 kg – 5 MT', bg: 'rgba(201,168,76,0.07)', border: 'rgba(201,168,76,0.2)', color: 'var(--gold)' },
              { mode: 'Air Freight', cap: 'Samples – 500 kg', bg: 'rgba(27,79,114,0.12)', border: 'rgba(91,163,208,0.25)', color: '#5ba3d0' },
              { mode: 'Bulk / Break Bulk', cap: '50 MT+ by arrangement', bg: 'rgba(26,122,110,0.1)', border: 'rgba(42,181,160,0.2)', color: 'var(--teal-light)' },
            ].map(item => (
              <div key={item.mode} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '0.65rem 0.9rem', borderRadius: 5, marginBottom: 6,
                background: item.bg, border: `1px solid ${item.border}`,
              }}>
                <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', color: 'var(--cream)' }}>{item.mode}</span>
                <span style={{ fontSize: '0.68rem', color: item.color, fontWeight: 600 }}>{item.cap}</span>
              </div>
            ))}
          </div>

          {/* Transit times */}
          <div style={{ background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 8, padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: '1.1rem' }}>
              <Globe size={17} color="var(--teal-light)" />
              <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal-light)' }}>Transit Times</h3>
            </div>
            {[
              ['UAE / Gulf', 'Nhava Sheva → Jebel Ali', '7–10 days'],
              ['UK / Europe', 'Nhava Sheva → Hamburg / Felixstowe', '18–25 days'],
              ['USA / Canada', 'Nhava Sheva → New York / LA', '20–28 days'],
              ['Australia / NZ', 'Nhava Sheva → Melbourne', '18–22 days'],
              ['East Africa', 'Nhava Sheva → Mombasa / Dar es Salaam', '14–18 days'],
              ['Southeast Asia', 'Nhava Sheva → Singapore / KL', '12–16 days'],
            ].map(([region, route, time]) => (
              <div key={region} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                paddingBottom: '0.75rem', marginBottom: '0.75rem',
                borderBottom: '1px solid rgba(201,168,76,0.07)', gap: 8,
              }}>
                <div>
                  <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', color: 'var(--cream)', marginBottom: 2 }}>{region}</div>
                  <div style={{ fontSize: '0.66rem', color: '#5a5248', lineHeight: 1.4 }}>{route}</div>
                </div>
                <span style={{
                  fontSize: '0.62rem', color: 'var(--teal-light)', whiteSpace: 'nowrap',
                  padding: '2px 8px', border: '1px solid rgba(42,181,160,0.25)', borderRadius: 10,
                }}>{time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS PROVIDED ── */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 4vw, 2rem)', fontWeight: 600, color: 'var(--cream)' }}>
            Documents We Provide
          </h2>
          <p style={{ fontSize: '0.8rem', color: '#6a5e50', marginTop: 8 }}>All export documents prepared and dispatched on the day of shipment</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(195px, 1fr))', gap: '0.9rem' }}>
          {[
            ['📄', 'Commercial Invoice'],
            ['📋', 'Packing List'],
            ['🚢', 'Bill of Lading (BL)'],
            ['🌍', 'Certificate of Origin'],
            ['🌿', 'Phytosanitary Certificate'],
            ['🛡️', 'FSSAI Certificate'],
            ['🏥', 'Health Certificate'],
            ['📊', 'Quality Analysis Report'],
            ['⚖️', 'Weight Certificate'],
            ['📦', 'Insurance Certificate (CIF)'],
          ].map(([icon, doc]) => (
            <div key={doc} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '0.85rem 1rem',
              background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 7,
            }}>
              <span style={{ fontSize: '1rem', flexShrink: 0 }}>{icon}</span>
              <span style={{ fontSize: '0.74rem', color: '#8a7a68', lineHeight: 1.4 }}>{doc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── MOQ & LEAD TIMES ── */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(26,122,110,0.1) 0%, rgba(27,79,114,0.12) 100%)',
          border: '1px solid rgba(42,181,160,0.2)', borderRadius: 12, padding: 'clamp(1.75rem, 4vw, 2.5rem)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.75rem' }}>
            <Clock size={20} color="var(--teal-light)" />
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 600, color: 'var(--cream)' }}>
              Minimum Order &amp; Lead Times
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))', gap: '1.1rem' }}>
            {[
              { label: 'Minimum Order (Export)', value: '500 kg', sub: 'LCL shipment' },
              { label: 'Full Container (20ft)', value: '18–20 MT', sub: 'FCL' },
              { label: 'Production Lead Time', value: '7–14 days', sub: 'From order confirmation' },
              { label: 'Sample Dispatch', value: '2–5 days', sub: 'Pre-shipment samples' },
            ].map(({ label, value, sub }) => (
              <div key={label} style={{
                textAlign: 'center', padding: '1.25rem 1rem',
                background: 'rgba(10,10,15,0.4)', borderRadius: 8,
                border: '1px solid rgba(42,181,160,0.1)',
              }}>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 700, color: 'var(--gold)', marginBottom: 4 }}>{value}</div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--cream)', marginBottom: 3 }}>{label}</div>
                <div style={{ fontSize: '0.65rem', color: '#5a5248' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '0.86rem', color: '#7a6e60', marginBottom: '1.5rem', lineHeight: 1.75 }}>
          Ready to start your first shipment? Send us an enquiry and our trade team will guide you through every step.
        </p>
        <Link href="/contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '13px 36px', textDecoration: 'none',
          background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)',
          color: '#0a0a0f', fontFamily: 'Cinzel, serif', fontSize: '0.75rem',
          fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', borderRadius: 6,
        }}>
          Start Your Enquiry →
        </Link>
      </div>
    </div>
  );
}
