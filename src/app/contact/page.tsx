'use client';
import { useState } from 'react';
import type { Metadata } from 'next';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const inputStyle = {
    width: '100%', padding: '11px 14px',
    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.18)',
    borderRadius: 6, color: 'var(--cream)', fontFamily: 'Raleway, sans-serif',
    fontSize: '0.85rem', outline: 'none', transition: 'border-color 0.2s',
  };
  const labelStyle = {
    display: 'block', fontSize: '0.63rem', letterSpacing: '0.2em',
    textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: 6,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    toast.success('Message sent! We\'ll be in touch soon.');
  };

  const contacts = [
    { icon: <MapPin size={18} />, label: 'Address', value: 'Trade House, R-094-09, Tanaji Lakhmoji Patil Galli, At Post Kameri, Taluka Walawa, District Sangli, Maharashtra, 415403,' },
    { icon: <Phone size={18} />, label: 'Phone', value: '+91 90496 46485' },
    { icon: <Mail size={18} />, label: 'Email', value: 'info@namasteglob.com' },
    { icon: <Clock size={18} />, label: 'Hours', value: 'Monday – Saturday, 9:00am to 6:00pm IST' },
  ];

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '5rem 1.5rem' }}>
      {/* Header */}
      <div className="animate-fade-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.63rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 10 }}>Get In Touch</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', fontWeight: 700 }}>
          <span className="gold-text">Contact</span> Us
        </h1>
        <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '1.25rem auto 1.5rem' }} />
        <p style={{ fontSize: '0.9rem', color: '#7a6e60', lineHeight: 1.8, maxWidth: 460, margin: '0 auto' }}>
          Whether you're looking to source, partner, or have a question about our products — we'd love to hear from you.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
        {/* Info */}
        <div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '1.75rem' }}>Let's Build Something Together</h2>
          {contacts.map((c, i) => (
            <div key={c.label} className={`animate-fade-up anim-d${i + 1}`} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: 44, height: 44, background: 'rgba(26,122,110,0.15)',
                border: '1px solid rgba(42,181,160,0.25)', borderRadius: 6,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--teal-light)', flexShrink: 0,
              }}>
                {c.icon}
              </div>
              <div>
                <p style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 4 }}>{c.label}</p>
                <p style={{ fontSize: '0.83rem', color: '#9a8878', lineHeight: 1.5 }}>{c.value}</p>
              </div>
            </div>
          ))}

          {/* Map placeholder */}
          <div style={{
            height: 180, background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10,
            marginTop: '0.5rem',
          }}>
            <MapPin size={28} color="rgba(201,168,76,0.4)" />
            <p style={{ fontSize: '0.72rem', color: '#4a4035', letterSpacing: '0.1em' }}>R-094-09, Tanaji Lakhmoji Patil Galli, At Post Kameri, Taluka Walawa, District Sangli, Maharashtra, 415403,</p>
            <a href="https://maps.google.com/?q=Nariman+Point+Sangli" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.65rem', color: 'var(--teal-light)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              View on Google Maps →
            </a>
          </div>
        </div>

        {/* Form */}
        <div style={{ background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 10, padding: '2rem' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 0' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1.25rem' }}>🦚</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', color: 'var(--cream)', marginBottom: 8 }}>Message Received!</h3>
              <p style={{ fontSize: '0.82rem', color: '#7a6e60', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Our team will get back to you within 24 business hours.
              </p>
              <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }} style={{
                padding: '11px 28px', background: 'linear-gradient(135deg, var(--teal), var(--peacock-blue))',
                border: 'none', color: 'white', fontFamily: 'Raleway, sans-serif', fontSize: '0.75rem',
                fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', borderRadius: 6, cursor: 'pointer',
              }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.82rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Send a Message</h3>
              {[
                { field: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { field: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com' },
                { field: 'subject', label: 'Subject', type: 'text', placeholder: 'Trade Inquiry / Partnership' },
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
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={labelStyle}>Message *</label>
                <textarea required style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }}
                  placeholder="Tell us about your requirements..."
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  onFocus={e => (e.target.style.borderColor = 'rgba(42,181,160,0.5)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.18)')}
                />
              </div>
              <button type="submit" disabled={sending} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                width: '100%', padding: '13px', cursor: sending ? 'wait' : 'pointer',
                background: sending ? 'rgba(201,168,76,0.4)' : 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)',
                border: 'none', color: '#0a0a0f', fontFamily: 'Cinzel, serif', fontSize: '0.75rem',
                fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', borderRadius: 6,
                opacity: sending ? 0.7 : 1,
              }}>
                <Send size={14} /> {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
