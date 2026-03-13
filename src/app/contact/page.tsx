'use client';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS config — fill these in your .env.local:
// NEXT_PUBLIC_EMAILJS_SERVICE_ID
// NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
// NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? '';

function ContactForm() {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: '', email: '', product: '', quantity: '',
    packagingSize: '', packagingSizeOther: '',
    packagingType: '', packagingTypeCustom: '',
    country: '', message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const p = searchParams.get('product');
    if (p) setForm(prev => ({ ...prev, product: p }));
  }, [searchParams]);

  const resetForm = () => setForm({
    name: '', email: '', product: '', quantity: '',
    packagingSize: '', packagingSizeOther: '',
    packagingType: '', packagingTypeCustom: '',
    country: '', message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    const templateParams = {
      from_name:      form.name,
      from_email:     form.email,
      product:        form.product,
      quantity:       form.quantity,
      packaging_size: form.packagingSize === 'Other' ? form.packagingSizeOther : form.packagingSize,
      packaging_type: form.packagingType === 'Custom' ? form.packagingTypeCustom : form.packagingType,
      country:        form.country,
      message:        form.message,
      to_name:        'Namaste Globals Team',
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setSent(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Failed to send message. Please try again or email us directly.');
    } finally {
      setSending(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '11px 14px', boxSizing: 'border-box',
    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.18)',
    borderRadius: 6, color: 'var(--cream)', fontFamily: 'Raleway, sans-serif',
    fontSize: '0.85rem', outline: 'none', transition: 'border-color 0.2s',
  };
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '0.63rem', letterSpacing: '0.2em',
    textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 6,
  };
  const pillStyle = (active: boolean): React.CSSProperties => ({
    display: 'flex', alignItems: 'center', padding: '7px 13px', borderRadius: 5,
    cursor: 'pointer', fontSize: '0.78rem', userSelect: 'none',
    border: active ? '1px solid rgba(42,181,160,0.6)' : '1px solid rgba(201,168,76,0.2)',
    color: active ? 'var(--teal-light)' : '#b0a090',
    background: active ? 'rgba(42,181,160,0.1)' : 'rgba(255,255,255,0.02)',
    transition: 'all 0.15s',
  });
  const otherInputStyle: React.CSSProperties = {
    marginTop: 10, width: '100%', padding: '9px 12px', boxSizing: 'border-box',
    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.25)',
    borderRadius: 5, color: 'var(--cream)', fontFamily: 'Raleway, sans-serif',
    fontSize: '0.82rem', outline: 'none',
  };

  const packagingSizes = ['0.5 kg', '1 kg', '5 kg', '10 kg', '30 kg', 'Other'];
  const packagingTypes = ['Paper Bag', 'Plastic Bag', 'Jute Bag', 'Glass Jar', 'Tin Can', 'Vacuum Pack', 'Custom'];

  const contacts = [
    { icon: <MapPin size={17} />, label: 'Address', value: 'R-094-09, Tanaji Lakhmoji Patil Galli, At Post Kameri, Taluka Walawa, Sangli, Maharashtra — 415403' },
    { icon: <Phone size={17} />, label: 'Phone', value: '+91 74994 18833' },
    { icon: <Mail size={17} />, label: 'Email', value: 'info.namasteglobals@gmail.com' },
    { icon: <Clock size={17} />, label: 'Hours', value: 'Monday – Saturday, 9:00 AM – 6:00 PM IST' },
  ];

  return (
    <div style={{ maxWidth: 1020, margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>
      {/* Header */}
      <div className="animate-fade-up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <p style={{ fontSize: '0.62rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 10 }}>Get In Touch</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 7vw, 4rem)', fontWeight: 700 }}>
          <span className="gold-text">Contact</span> Us
        </h1>
        <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '1.25rem auto 1.25rem' }} />
        <p style={{ fontSize: '0.88rem', color: '#7a6e60', lineHeight: 1.8, maxWidth: 440, margin: '0 auto' }}>
          Whether you're looking to source, partner, or have a question about our products — we'd love to hear from you.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
        {/* Left: info */}
        <div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '1.5rem' }}>
            Let's Build Something Together
          </h2>

          {contacts.map((c, i) => (
            <div key={c.label} className={`animate-fade-up anim-d${i + 1}`} style={{ display: 'flex', gap: '1rem', marginBottom: '1.4rem' }}>
              <div style={{
                width: 42, height: 42, background: 'rgba(26,122,110,0.15)',
                border: '1px solid rgba(42,181,160,0.25)', borderRadius: 6,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--teal-light)', flexShrink: 0,
              }}>
                {c.icon}
              </div>
              <div>
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 3 }}>{c.label}</p>
                <p style={{ fontSize: '0.82rem', color: '#9a8878', lineHeight: 1.55 }}>{c.value}</p>
              </div>
            </div>
          ))}

          {/* Certifications */}
          <div style={{ marginTop: '1.5rem', background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 8, padding: '1.4rem' }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.9rem' }}>Certifications</p>
            {['ISO 22000:2018 — Food Safety', 'FSSAI Licensed', 'APEDA Registered', 'Export Promotion Council Member'].map(cert => (
              <div key={cert} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--teal-light)', fontSize: '0.8rem' }}>✓</span>
                <span style={{ fontSize: '0.78rem', color: '#7a6e60' }}>{cert}</span>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div style={{
            marginTop: '1.5rem', height: 160,
            background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8,
          }}>
            <MapPin size={26} color="rgba(201,168,76,0.4)" />
            <p style={{ fontSize: '0.68rem', color: '#4a4035', letterSpacing: '0.06em', textAlign: 'center', padding: '0 1rem' }}>
              Sangli, Maharashtra, India
            </p>
            <a href="https://maps.google.com/?q=Kameri+Walawa+Sangli+Maharashtra" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.62rem', color: 'var(--teal-light)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              View on Google Maps →
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div style={{ background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 10, padding: '2rem' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 0' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1.25rem' }}>🦚</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', color: 'var(--cream)', marginBottom: 8 }}>Message Received!</h3>
              <p style={{ fontSize: '0.82rem', color: '#7a6e60', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Our team will get back to you within 24 business hours.
              </p>
              <button onClick={() => { setSent(false); resetForm(); }} style={{
                padding: '11px 28px', background: 'linear-gradient(135deg, var(--teal), var(--peacock-blue))',
                border: 'none', color: 'white', fontFamily: 'Raleway, sans-serif', fontSize: '0.75rem',
                fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', borderRadius: 6, cursor: 'pointer',
              }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
              <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.78rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Send Enquiry
              </h3>

              {/* Text fields */}
              {[
                { field: 'name',     label: 'Your Name',     type: 'text',  placeholder: 'John Doe' },
                { field: 'email',    label: 'Email Address', type: 'email', placeholder: 'john@company.com' },
                { field: 'product',  label: 'Product',       type: 'text',  placeholder: 'e.g. Natural Jaggery (Gur)' },
                { field: 'quantity', label: 'Quantity',      type: 'text',  placeholder: 'e.g. 500 kg, 10 MT' },
              ].map(({ field, label, type, placeholder }) => (
                <div key={field} style={{ marginBottom: '1.1rem' }}>
                  <label style={labelStyle}>{label} *</label>
                  <input required type={type} style={inputStyle} placeholder={placeholder}
                    value={form[field as keyof typeof form]}
                    onChange={e => setForm(p => ({ ...p, [field]: e.target.value }))}
                    onFocus={e => (e.target.style.borderColor = 'rgba(42,181,160,0.5)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.18)')}
                  />
                </div>
              ))}

              {/* Packaging Size */}
              <div style={{ marginBottom: '1.1rem' }}>
                <label style={labelStyle}>Packaging Size *</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {packagingSizes.map(size => (
                    <label key={size} style={pillStyle(form.packagingSize === size)}>
                      <input type="radio" name="packagingSize" value={size} required
                        checked={form.packagingSize === size}
                        onChange={() => setForm(p => ({ ...p, packagingSize: size, packagingSizeOther: '' }))}
                        style={{ display: 'none' }} />
                      {size}
                    </label>
                  ))}
                </div>
                {form.packagingSize === 'Other' && (
                  <input type="text" placeholder="Please specify packaging size..." style={otherInputStyle}
                    value={form.packagingSizeOther} required
                    onChange={e => setForm(p => ({ ...p, packagingSizeOther: e.target.value }))} />
                )}
              </div>

              {/* Packaging Type */}
              <div style={{ marginBottom: '1.1rem' }}>
                <label style={labelStyle}>Packaging Type *</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {packagingTypes.map(type => (
                    <label key={type} style={pillStyle(form.packagingType === type)}>
                      <input type="radio" name="packagingType" value={type} required
                        checked={form.packagingType === type}
                        onChange={() => setForm(p => ({ ...p, packagingType: type, packagingTypeCustom: '' }))}
                        style={{ display: 'none' }} />
                      {type}
                    </label>
                  ))}
                </div>
                {form.packagingType === 'Custom' && (
                  <input type="text" placeholder="Describe your custom packaging..." style={otherInputStyle}
                    value={form.packagingTypeCustom} required
                    onChange={e => setForm(p => ({ ...p, packagingTypeCustom: e.target.value }))} />
                )}
              </div>

              {/* Country */}
              <div style={{ marginBottom: '1.1rem' }}>
                <label style={labelStyle}>Country *</label>
                <input required type="text" style={inputStyle} placeholder="e.g. United States, UAE, Germany"
                  value={form.country}
                  onChange={e => setForm(p => ({ ...p, country: e.target.value }))}
                  onFocus={e => (e.target.style.borderColor = 'rgba(42,181,160,0.5)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.18)')}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={labelStyle}>Message *</label>
                <textarea required style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                  placeholder="Tell us about your requirements..."
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  onFocus={e => (e.target.style.borderColor = 'rgba(42,181,160,0.5)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.18)')}
                />
              </div>

              {error && (
                <p style={{ fontSize: '0.78rem', color: '#c06060', marginBottom: '1rem', padding: '10px 12px', background: 'rgba(180,60,60,0.08)', borderRadius: 5, border: '1px solid rgba(180,60,60,0.2)' }}>
                  {error}
                </p>
              )}

              <button type="submit" disabled={sending} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                width: '100%', padding: '13px', cursor: sending ? 'wait' : 'pointer',
                background: sending ? 'rgba(201,168,76,0.35)' : 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)',
                border: 'none', color: '#0a0a0f', fontFamily: 'Cinzel, serif', fontSize: '0.75rem',
                fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', borderRadius: 6,
                opacity: sending ? 0.75 : 1, transition: 'all 0.2s',
              }}>
                <Send size={14} /> {sending ? 'Sending...' : 'Send Enquiry'}
              </button>

              <p style={{ fontSize: '0.68rem', color: '#4a4035', textAlign: 'center', marginTop: 12 }}>
                We respond within 24 business hours
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ padding: '8rem', textAlign: 'center', color: 'var(--gold)' }}>Loading…</div>}>
      <ContactForm />
    </Suspense>
  );
}
