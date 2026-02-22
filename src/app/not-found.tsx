import Link from 'next/link';
export default function NotFound() {
  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: '8rem 1.5rem', textAlign: 'center' }}>
      <div style={{ fontFamily: 'Cinzel, serif', fontSize: '6rem', fontWeight: 700, color: 'rgba(201,168,76,0.15)', lineHeight: 1, marginBottom: '1rem' }}>404</div>
      <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', color: '#5a5248', marginBottom: '1rem' }}>Page Not Found</h1>
      <p style={{ fontSize: '0.85rem', color: '#3a3530', marginBottom: '2.5rem', lineHeight: 1.8 }}>The page you're looking for doesn't exist or has been moved.</p>
      <Link href="/" style={{
        display: 'inline-block', padding: '13px 32px', textDecoration: 'none',
        background: 'linear-gradient(135deg, var(--teal), var(--peacock-blue))',
        color: 'white', fontFamily: 'Raleway, sans-serif', fontSize: '0.75rem',
        fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', borderRadius: 6,
      }}>
        ← Back to Home
      </Link>
    </div>
  );
}
