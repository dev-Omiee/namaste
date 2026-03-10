export const metadata = { title: "FAQ — Namaste Globals" };

const faqs = [
  { q: "What products does Namaste Globals export?", a: "We currently specialize in premium natural jaggery products — Jaggery (Gur), Jaggery Powder, and Liquid Jaggery (Kakvi). We are expanding to include other traditional Indian agri-products such as spices, grains, and wellness items." },
  { q: "Do you offer bulk and wholesale pricing?", a: "Yes. We offer competitive bulk pricing for orders above 100kg. Please contact us via the Contact page or email info.namasteglobals@gmail.com with your quantity requirements and destination country." },
  { q: "Which countries do you ship to?", a: "We currently export to 30+ countries including the USA, UK, Australia, Canada, UAE, Singapore, Germany, France, and all major South Asian markets. Reach out to confirm availability in your region." },
  { q: "How do I place an order?", a: "You can order directly through our website. Add products to your cart, proceed to checkout, fill in your details, and complete payment via Stripe. For bulk/export orders, contact us directly." },
  { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards, UPI, net banking, and international cards — all processed securely through Stripe. We do not store any card information." },
  { q: "Are your products certified and tested?", a: "Yes. All our products are FSSAI licensed, ISO 22000:2018 certified for food safety, and APEDA registered for export. Each batch undergoes third-party lab testing for purity and quality." },
  { q: "How long does delivery take?", a: "Domestic orders within India are typically delivered in 3–7 business days. International export shipments take 10–21 business days depending on the destination country and customs clearance." },
  { q: "Can I return or exchange a product?", a: "We accept returns for damaged or incorrect products within 48 hours of delivery. Please contact us with photographic evidence at info.namasteglobals@gmail.com. Perishable food products cannot be returned due to food safety regulations." },
  { q: "Is the jaggery organic and chemical-free?", a: "Yes. Our jaggery is sourced from farmers who use traditional open-pan sugarcane processing without any chemical bleaching or preservatives. It is Pure Natural and minimally processed." },
  { q: "Do you provide product documentation for customs?", a: "Yes. For export orders, we provide all required documentation including Certificate of Origin, FSSAI Certificate, Phytosanitary Certificate (if required), and commercial invoice." },
];

export default function FAQPage() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 1.5rem" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <span className="section-label">Help Center</span>
        <h1 className="font-cormorant text-gradient" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 700, marginBottom: "1rem" }}>Frequently Asked Questions</h1>
        <div className="gold-line" style={{ marginBottom: "1.5rem" }} />
        <p style={{ fontSize: "0.95rem", color: "#8a7d6e", lineHeight: 1.9 }}>Everything you need to know about Namaste Globals, our products, and how we work.</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {faqs.map(({ q, a }, i) => (
          <details key={i} style={{ background: "var(--dark3)", border: "1px solid var(--border)", borderRadius: "8px", overflow: "hidden" }}>
            <summary style={{ padding: "1.25rem 1.5rem", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", color: "var(--cream)", fontWeight: 600 }}>
              {q}
              <span style={{ color: "var(--gold)", fontSize: "1.2rem", flexShrink: 0, marginLeft: "1rem" }}>+</span>
            </summary>
            <div style={{ padding: "0 1.5rem 1.5rem", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.9, color: "#7a6e60", paddingTop: "1rem" }}>{a}</p>
            </div>
          </details>
        ))}
      </div>
      <div style={{ marginTop: "4rem", background: "rgba(26,122,110,0.08)", border: "1px solid rgba(42,181,160,0.2)", borderRadius: "10px", padding: "2.5rem", textAlign: "center" }}>
        <h2 className="font-cormorant" style={{ fontSize: "1.8rem", color: "var(--cream)", marginBottom: "0.75rem" }}>Still have questions?</h2>
        <p style={{ fontSize: "0.85rem", color: "#7a6e60", marginBottom: "1.5rem" }}>Our team is happy to help with any enquiries about products, exports, or partnerships.</p>
        <a href="/contact" className="btn-gold" style={{ textDecoration: "none" }}>Contact Us →</a>
      </div>
    </div>
  );
}
