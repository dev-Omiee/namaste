import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Privacy Policy & Terms — Namaste Globals' };

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>{title}</h2>
    {children}
  </div>
);

const Para = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: '0.83rem', lineHeight: 1.85, color: '#7a6e60', marginBottom: '0.85rem' }}>{children}</p>
);

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '5rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.63rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: 10 }}>Legal</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.4rem, 6vw, 3.5rem)', fontWeight: 700 }}>
          <span className="gold-text">Privacy Policy</span> & Terms
        </h1>
        <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '1.25rem auto 1rem' }} />
        <p style={{ fontSize: '0.8rem', color: '#5a5248' }}>Last updated: January 1, 2025</p>
      </div>

      <div style={{ background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 10, padding: '2.5rem' }}>
        <Section title="1. Information We Collect">
          <Para>We collect information you provide directly, including name, email address, phone number, and shipping address when you place an order or contact us.</Para>
          <Para>We also collect payment information through Stripe. We do not store your full card details — these are handled entirely by Stripe's PCI DSS Level 1 compliant infrastructure.</Para>
          <Para>We may collect usage data such as browser type, pages visited, and time spent on our site for analytics purposes.</Para>
        </Section>

        <Section title="2. How We Use Your Information">
          <Para>We use your information to process and fulfill your orders, send order confirmations and shipping updates, respond to customer service inquiries, and improve our website and services.</Para>
          <Para>We do not sell, trade, or rent your personal information to third parties.</Para>
        </Section>

        <Section title="3. Payment Security">
          <Para>All transactions are processed through Stripe, which employs industry-leading security measures. Namaste Globals does not have access to your full card number at any point during or after your purchase.</Para>
          <Para>Our website uses HTTPS encryption to protect all data transmitted between your browser and our servers.</Para>
        </Section>

        <Section title="4. Cookies">
          <Para>We use essential cookies for cart functionality and session management. We may use analytics cookies to understand how visitors interact with our site. You can disable cookies in your browser settings.</Para>
        </Section>

        <Section title="5. Returns & Refund Policy">
          <Para>We accept return or refund requests within 7 days of delivery if your product arrives damaged, incorrect, or defective. Please contact us at info@namasteglob.com with your order ID and photographs of the issue.</Para>
          <Para>Refunds are processed within 5–7 business days to your original payment method. Shipping costs are non-refundable unless the return is due to our error.</Para>
        </Section>

        <Section title="6. Shipping Policy">
          <Para>Orders are processed within 2–3 business days. Domestic delivery typically takes 4–7 business days. We ship pan-India via reputed courier partners. International orders are subject to customs duties and taxes as per the destination country's regulations.</Para>
        </Section>

        <Section title="7. Terms of Use">
          <Para>By using this website, you agree to use it lawfully and not attempt to disrupt or misuse our services. All content on this site — including product descriptions, images, and logos — is the intellectual property of Namaste Globals.</Para>
          <Para>We reserve the right to cancel orders that appear fraudulent or violate our policies.</Para>
        </Section>

        <Section title="8. Contact">
          <Para>For any privacy or legal concerns, contact us at: <span style={{ color: 'var(--teal-light)' }}>info@namasteglob.com</span> or write to Namaste Globals, R-094-09, Tanaji Lakhmoji Patil Galli, At Post Kameri, Taluka Walawa, District Sangli, Maharashtra, 415403.</Para>
        </Section>
      </div>
    </div>
  );
}
