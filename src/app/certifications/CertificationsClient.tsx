'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Download, Eye, Shield } from 'lucide-react';

export default function CertificationsClient() {
  const [files, setFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/certificates')
      .then(r => r.json())
      .then(data => { setFiles(data.files); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

      {/* Header */}
      <div className="animate-fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ fontSize: '0.62rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 10 }}>
          Quality &amp; Compliance
        </p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.4rem, 7vw, 4rem)', fontWeight: 700, lineHeight: 1.08, marginBottom: '0.5rem' }}>
          Our <span className="gold-text">Certifications</span>
        </h1>
        <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '1.25rem auto 1.5rem' }} />
        <p style={{ fontSize: '0.88rem', color: '#7a6e60', lineHeight: 1.85, maxWidth: 520, margin: '0 auto' }}>
          All documents are authentic and verifiable.
        </p>
      </div>

      {/* Doc list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem' }}>
        {loading && (
          <p style={{ textAlign: 'center', color: '#5a5248', fontSize: '0.82rem', padding: '2rem 0' }}>
            Loading certificates...
          </p>
        )}

        {!loading && files.length === 0 && (
          <p style={{ textAlign: 'center', color: '#5a5248', fontSize: '0.82rem', padding: '2rem 0' }}>
            No certificates found. Add PDFs to <code>public/certificates/</code>.
          </p>
        )}

        {files.map((filename, i) => {
          const name = filename
            .replace(/\.pdf$/i, '')
            .replace(/\b\w/g, c => c.toUpperCase());
          const file = `/certificates/${filename}`;
          return (
            <div
              key={filename}
              className={`animate-fade-up anim-d${(i % 4) + 1}`}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                background: 'var(--dark3)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '1rem 1.25rem',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <div style={{
                width: 36, height: 36, flexShrink: 0, borderRadius: 6,
                background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem',
              }}>
                📄
              </div>

              <span style={{
                flex: 1, fontFamily: 'Raleway, sans-serif', fontSize: '0.84rem',
                fontWeight: 500, color: 'var(--cream)', letterSpacing: '0.02em',
              }}>
                {name}
              </span>

              <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                <a
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 5,
                    padding: '7px 14px', textDecoration: 'none',
                    border: '1px solid rgba(42,181,160,0.3)', borderRadius: 5,
                    color: 'var(--teal-light)', background: 'rgba(42,181,160,0.05)',
                    fontFamily: 'Raleway, sans-serif', fontSize: '0.68rem',
                    fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(42,181,160,0.12)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(42,181,160,0.05)')}
                >
                  <Eye size={12} /> View
                </a>
                <a
                  href={file}
                  download
                  style={{
                    display: 'flex', alignItems: 'center', gap: 5,
                    padding: '7px 14px', textDecoration: 'none',
                    border: '1px solid rgba(201,168,76,0.3)', borderRadius: 5,
                    color: 'var(--gold)', background: 'rgba(201,168,76,0.05)',
                    fontFamily: 'Raleway, sans-serif', fontSize: '0.68rem',
                    fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.12)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.05)')}
                >
                  <Download size={12} /> Download
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Note */}
      <div style={{
        background: 'rgba(26,122,110,0.07)',
        border: '1px solid rgba(42,181,160,0.2)',
        borderLeft: '3px solid var(--teal-light)',
        borderRadius: 8, padding: '1.25rem 1.75rem',
        display: 'flex', gap: '1rem', alignItems: 'flex-start',
      }}>
        <Shield size={18} color="var(--teal-light)" style={{ flexShrink: 0, marginTop: 2 }} />
        <p style={{ fontSize: '0.81rem', color: '#7a6e60', lineHeight: 1.78, margin: 0 }}>
          Need notarized copies for import clearance or customs documentation?{' '}
          <Link href="/contact" style={{ color: 'var(--teal-light)', textDecoration: 'none', borderBottom: '1px solid rgba(42,181,160,0.3)' }}>
            Contact our team
          </Link>{' '}
          and we will provide them within 2 business days.
        </p>
      </div>
    </div>
  );
}