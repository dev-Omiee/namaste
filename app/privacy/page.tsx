export const metadata = { title: "Privacy Policy, Terms & License — Namaste Globals" };

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 1.5rem" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <span className="section-label">Legal</span>
        <h1 className="font-cormorant text-gradient" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, marginBottom: "1rem" }}>Privacy, Terms & License</h1>
        <div className="gold-line" style={{ marginBottom: "1rem" }} />
        <p style={{ fontSize: "0.8rem", color: "#5a5045" }}>Last updated: January 2025</p>
      </div>

      {/* Nav */}
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "3rem", flexWrap: "wrap" }}>
        {[["#privacy", "Privacy Policy"], ["#terms", "Terms of Service"], ["#license", "License & Docs"]].map(([href, label]) => (
          <a key={href} href={href} className="btn-primary" style={{ textDecoration: "none", padding: "8px 16px", fontSize: "0.72rem" }}>{label}</a>
        ))}
      </div>

      {/* Privacy */}
      <section id="privacy" style={{ marginBottom: "4rem" }}>
        <h2 className="font-cormorant" style={{ fontSize: "2rem", color: "var(--cream)", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>Privacy Policy</h2>
        {[
          { title: "1. Information We Collect", body: "When you place an order or contact us, we collect your name, email address, phone number, shipping address, and payment information (processed by Stripe — we never store card details). We may also collect usage data like browser type, IP address, and pages visited via analytics tools." },
          { title: "2. How We Use Your Information", body: "We use your information to process and fulfil orders, send order confirmations and shipping updates, respond to customer inquiries, improve our website and services, and comply with legal obligations. We do not sell, trade, or rent your personal data to third parties." },
          { title: "3. Payment Security", body: "All payments are processed through Stripe, a PCI DSS Level 1 certified payment processor. We never have access to your full card number. Transactions are encrypted using TLS/SSL technology." },
          { title: "4. Cookies", body: "We use essential cookies to enable core functionality like your shopping cart. We may use analytics cookies (e.g., Google Analytics) to understand how visitors use our site. You can disable cookies in your browser settings, though this may affect site functionality." },
          { title: "5. Data Retention", body: "We retain your order data for 7 years as required by Indian GST law. You may request deletion of your personal data by contacting info@namasteglob.com." },
          { title: "6. Your Rights", body: "You have the right to access, rectify, or delete your personal data. To exercise these rights, email info@namasteglob.com. We will respond within 30 business days." },
          { title: "7. Contact", body: "For privacy concerns, contact our Data Officer at info@namasteglob.com or R-094-09, Tanaji Lakhmoji Patil Galli, At Post Kameri, Taluka Walawa, District Sangli, Maharashtra, 415403, ." },
        ].map(({ title, body }) => (
          <div key={title} style={{ marginBottom: "1.75rem" }}>
            <h3 className="font-cinzel" style={{ fontSize: "0.78rem", letterSpacing: "0.12em", color: "var(--gold)", marginBottom: "0.6rem" }}>{title}</h3>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.9, color: "#7a6e60" }}>{body}</p>
          </div>
        ))}
      </section>

      {/* Terms */}
      <section id="terms" style={{ marginBottom: "4rem" }}>
        <h2 className="font-cormorant" style={{ fontSize: "2rem", color: "var(--cream)", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>Terms of Service</h2>
        {[
          { title: "1. Acceptance of Terms", body: "By accessing or using namasteglob.com, you agree to be bound by these Terms of Service and all applicable laws. If you do not agree, do not use our website." },
          { title: "2. Products & Pricing", body: "All prices are in Indian Rupees (₹) and include applicable GST unless stated otherwise. Prices for export orders may vary. We reserve the right to change prices without notice. All products are subject to availability." },
          { title: "3. Orders & Payment", body: "Orders are confirmed only after successful payment via Stripe. We reserve the right to refuse or cancel any order for reasons including product unavailability, pricing errors, or suspected fraud." },
          { title: "4. Shipping & Delivery", body: "Estimated delivery times are indicative and not guaranteed. We are not responsible for delays caused by courier services, customs authorities, or force majeure events. Risk of loss transfers to the buyer upon dispatch." },
          { title: "5. Returns & Refunds", body: "We accept returns for damaged or incorrect items within 48 hours of delivery with photo evidence. Refunds are processed to the original payment method within 7 business days. Perishable food items cannot be returned due to food safety regulations." },
          { title: "6. Governing Law", body: "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Sangli, Maharashtra." },
        ].map(({ title, body }) => (
          <div key={title} style={{ marginBottom: "1.75rem" }}>
            <h3 className="font-cinzel" style={{ fontSize: "0.78rem", letterSpacing: "0.12em", color: "var(--gold)", marginBottom: "0.6rem" }}>{title}</h3>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.9, color: "#7a6e60" }}>{body}</p>
          </div>
        ))}
      </section>

      {/* License */}
      <section id="license">
        <h2 className="font-cormorant" style={{ fontSize: "2rem", color: "var(--cream)", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>License & Documentation</h2>
        <div style={{ background: "var(--dark3)", border: "1px solid var(--border)", borderRadius: "10px", padding: "2rem", marginBottom: "2rem" }}>
          <h3 className="font-cinzel" style={{ fontSize: "0.78rem", letterSpacing: "0.12em", color: "var(--gold)", marginBottom: "1rem" }}>Website License</h3>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.9, color: "#7a6e60", marginBottom: "1rem" }}>
            The Namaste Globals website, including its design, code, content, and branding, is the exclusive intellectual property of Namaste Globals. Unauthorized reproduction, modification, or distribution of any part of this site is strictly prohibited.
          </p>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.9, color: "#7a6e60" }}>
            The Peacock logo, company name, and associated marks are trademarks of Namaste Globals. The website is built with Next.js (MIT License), Redux Toolkit (MIT), and Stripe.js (Stripe Terms).
          </p>
        </div>
        <div style={{ background: "var(--dark3)", border: "1px solid var(--border)", borderRadius: "10px", padding: "2rem" }}>
          <h3 className="font-cinzel" style={{ fontSize: "0.78rem", letterSpacing: "0.12em", color: "var(--gold)", marginBottom: "1rem" }}>Business Certifications & Registrations</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { label: "FSSAI License", value: "10024XXXXXXXXX" },
              { label: "APEDA Registration", value: "APEDA/REG/XXXXXX" },
              { label: "GST Registration", value: "27XXXXXXXXX1Z5" },
              { label: "ISO Certification", value: "ISO 22000:2018" },
              { label: "IEC Code", value: "XXXXXXXXXX" },
              { label: "MSME Registration", value: "UDYAM-MH-XX-XXXXXXX" },
            ].map(({ label, value }) => (
              <div key={label} style={{ padding: "1rem", background: "rgba(201,168,76,0.05)", borderRadius: "6px", border: "1px solid rgba(201,168,76,0.1)" }}>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--teal-light)", marginBottom: "4px" }}>{label}</p>
                <p style={{ fontSize: "0.82rem", color: "#8a7d6e", fontFamily: "monospace" }}>{value}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.75rem", color: "#4a4035", marginTop: "1.25rem", lineHeight: 1.7 }}>
            Note: License numbers shown are placeholders. Replace with actual registration numbers before deployment.
          </p>
        </div>
      </section>
    </div>
  );
}
