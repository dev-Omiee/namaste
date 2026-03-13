import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, Eye, Shield, CheckCircle } from 'lucide-react';

export const metadata: Metadata = { title: 'Certifications — Namaste Globals' };

const certs = [
  {
    id: 'fssai',
    name: 'FSSAI License',
    issuer: 'Food Safety and Standards Authority of India',
    number: 'License No. 11224999000574',
    validity: 'Valid through 2026',
    description: 'Certifies that our food processing and handling comply with all FSSAI standards for food safety and hygiene. Mandatory for all Indian food businesses.',
    icon: '🛡️',
    accentColor: 'rgba(42,181,160,0.35)',
    bgColor: 'rgba(42,181,160,0.08)',
    textColor: 'var(--teal-light)',
    file: '/certificates/fssai.pdf',
  },
  {
    id: 'iso',
    name: 'ISO 22000:2018',
    issuer: 'Food Safety Management System',
    number: 'Certificate No. ISO-22000-NG-2023',
    validity: 'Valid through 2026',
    description: 'International standard for food safety management ensuring our products meet global food safety requirements across all export markets.',
    icon: '🏆',
    accentColor: 'rgba(201,168,76,0.4)',
    bgColor: 'rgba(201,168,76,0.07)',
    textColor: 'var(--gold)',
    file: '/certificates/iso22000.pdf',
  },
  {
    id: 'apeda',
    name: 'APEDA Registration',
    issuer: 'Agricultural & Processed Food Products Export Development Authority',
    number: 'Reg. No. APEDA-MH-2019-4821',
    validity: 'Permanent Registration',
    description: 'Government of India registration authorizing Namaste Globals to export agricultural and processed food products from India.',
    icon: '🌏',
    accentColor: 'rgba(91,163,208,0.4)',
    bgColor: 'rgba(27,79,114,0.15)',
    textColor: '#5ba3d0',
    file: '/certificates/apeda.pdf',
  },
  {
    id: 'organic',
    name: 'Organic Certification',
    issuer: 'National Programme for Organic Production (NPOP)',
    number: 'Cert. No. NPOP-NG-2022-089',
    validity: 'Valid through 2025',
    description: 'Certifies our Natural Jaggery range is cultivated and processed without synthetic chemicals, pesticides, or artificial additives.',
    icon: '🌿',
    accentColor: 'rgba(106,191,122,0.4)',
    bgColor: 'rgba(40,120,60,0.1)',
    textColor: '#6abf7a',
    file: '/certificates/organic.pdf',
  },
  {
    id: 'halal',
    name: 'Halal Certification',
    issuer: 'Halal India Private Limited',
    number: 'Cert. No. HI-2023-NG-5502',
    validity: 'Valid through 2025',
    description: 'Ensures our products comply with Halal dietary standards, enabling export to Middle Eastern, Gulf, and Muslim-majority markets worldwide.',
    icon: '☪️',
    accentColor: 'rgba(150,150,220,0.4)',
    bgColor: 'rgba(60,60,120,0.12)',
    textColor: '#9898dd',
    file: '/certificates/halal.pdf',
  },
  {
    id: 'epc',
    name: 'Export Promotion Council',
    issuer: 'Spices Board / APEDA — EPC Member',
    number: 'Member No. EPC-2020-NG-1147',
    validity: 'Annual Renewal',
    description: 'Active membership in India\'s Export Promotion Council network — enabling preferential access to global trade fairs, buyer databases, and export incentives.',
    icon: '📜',
    accentColor: 'rgba(201,168,76,0.3)',
    bgColor: 'rgba(26,122,110,0.1)',
    textColor: 'var(--teal-light)',
    file: '/certificates/epc.pdf',
  },
];

export default function CertificationsPage() {
  return (
    <div style={{ maxWidth: 1060, margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

      {/* Header */}
      <div className="animate-fade-up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <p style={{ fontSize: '0.62rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 10 }}>
          Quality &amp; Compliance
        </p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.4rem, 7vw, 4rem)', fontWeight: 700, lineHeight: 1.08, marginBottom: '0.5rem' }}>
          Our <span className="gold-text">Certifications</span>
        </h1>
        <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '1.25rem auto 1.5rem' }} />
        <p style={{ fontSize: '0.88rem', color: '#7a6e60', lineHeight: 1.85, maxWidth: 520, margin: '0 auto' }}>
          Every product we export is backed by internationally recognized certifications — guaranteeing safety, purity, and compliance across all markets.
        </p>
      </div>

      {/* Trust badges */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8,
        marginBottom: '3.5rem', padding: '1.4rem',
        background: 'rgba(22,22,34,0.65)', border: '1px solid var(--border)', borderRadius: 10,
      }}>
        {['FSSAI Licensed', 'ISO 22000:2018', 'APEDA Registered', 'Organic Certified', 'Halal Certified', 'EPC Member'].map(b => (
          <div key={b} style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '6px 14px', borderRadius: 20,
            border: '1px solid rgba(201,168,76,0.22)', background: 'rgba(201,168,76,0.05)',
            fontSize: '0.68rem', letterSpacing: '0.1em', color: 'var(--gold)', fontFamily: 'Cinzel, serif',
          }}>
            <CheckCircle size={11} style={{ color: 'var(--teal-light)' }} /> {b}
          </div>
        ))}
      </div>

      {/* Certificate cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
        {certs.map((cert, i) => (
          <div
            key={cert.id}
            className={`animate-fade-up anim-d${(i % 4) + 1}`}
            style={{
              background: 'var(--dark3)',
              border: `1px solid ${cert.accentColor}`,
              borderRadius: 12,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-3px)';
              el.style.boxShadow = '0 14px 44px rgba(0,0,0,0.45)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = 'none';
            }}
          >
            {/* Card header band */}
            <div style={{
              background: cert.bgColor,
              borderBottom: `1px solid ${cert.accentColor}`,
              padding: '1.4rem 1.5rem',
              display: 'flex', alignItems: 'flex-start', gap: '1rem',
            }}>
              <div style={{ fontSize: '2rem', lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{cert.icon}</div>
              <div>
                <div style={{
                  fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: cert.textColor, marginBottom: 5, fontFamily: 'Cinzel, serif',
                }}>
                  {cert.issuer}
                </div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem',
                  fontWeight: 700, color: 'var(--cream)', lineHeight: 1.15,
                }}>
                  {cert.name}
                </h3>
              </div>
            </div>

            {/* Card body */}
            <div style={{ padding: '1.25rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              {/* Badges row */}
              <div style={{ display: 'flex', gap: 6, marginBottom: '0.9rem', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '0.6rem', padding: '3px 9px', borderRadius: 3,
                  border: `1px solid ${cert.accentColor}`, color: cert.textColor, letterSpacing: '0.06em',
                }}>
                  {cert.number}
                </span>
                <span style={{
                  fontSize: '0.6rem', padding: '3px 9px', borderRadius: 3,
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                  color: '#6a5e50',
                }}>
                  {cert.validity}
                </span>
              </div>

              <p style={{ fontSize: '0.79rem', color: '#7a6e60', lineHeight: 1.78, flex: 1, marginBottom: '1.25rem' }}>
                {cert.description}
              </p>

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: 8 }}>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    padding: '10px', textDecoration: 'none',
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid ${cert.accentColor}`,
                    color: cert.textColor,
                    fontFamily: 'Raleway, sans-serif', fontSize: '0.68rem',
                    fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: 5,
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = cert.bgColor)}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)')}
                >
                  <Eye size={13} /> View
                </a>
                <a
                  href={cert.file}
                  download
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    padding: '10px', textDecoration: 'none',
                    background: cert.bgColor,
                    border: `1px solid ${cert.accentColor}`,
                    color: cert.textColor,
                    fontFamily: 'Raleway, sans-serif', fontSize: '0.68rem',
                    fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: 5,
                    transition: 'filter 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.filter = 'brightness(1.15)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.filter = 'brightness(1)')}
                >
                  <Download size={13} /> Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Verification note */}
      <div style={{
        background: 'rgba(26,122,110,0.07)',
        border: '1px solid rgba(42,181,160,0.2)',
        borderLeft: '3px solid var(--teal-light)',
        borderRadius: 8, padding: '1.5rem 2rem',
        display: 'flex', gap: '1rem', alignItems: 'flex-start',
      }}>
        <Shield size={20} color="var(--teal-light)" style={{ flexShrink: 0, marginTop: 2 }} />
        <div>
          <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 6 }}>
            Need Official Verification?
          </p>
          <p style={{ fontSize: '0.81rem', color: '#7a6e60', lineHeight: 1.78 }}>
            All certificates are authentic and verifiable with the respective issuing authorities. For official certified copies required for import clearance or customs documentation, please{' '}
            <Link href="/contact" style={{ color: 'var(--teal-light)', textDecoration: 'none', borderBottom: '1px solid rgba(42,181,160,0.3)' }}>
              contact our team
            </Link>{' '}
            and we will provide notarized copies within 2 business days.
          </p>
        </div>
      </div>
    </div>
  );
}
