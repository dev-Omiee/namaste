"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "5rem 1.5rem" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <span className="section-label">Get in Touch</span>
        <h1 className="font-cormorant text-gradient" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 700, marginBottom: "1rem" }}>Contact Us</h1>
        <div className="gold-line" style={{ marginBottom: "1.5rem" }} />
        <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "#8a7d6e", lineHeight: 1.9 }}>Whether you are looking to source, export, or partner — we would love to hear from you.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3rem", alignItems: "start" }}>
        <div>
          <h2 className="font-cormorant" style={{ fontSize: "1.8rem", color: "var(--cream)", marginBottom: "2rem" }}>Let's Build Something Together</h2>
          {[
            { icon: "📍", label: "Address", value: "R-094-09, Tanaji Lakhmoji Patil Galli, At Post Kameri, Taluka Walawa, District Sangli, Maharashtra, 415403, " },
            { icon: "📞", label: "Phone", value: "+91 90496 46485" },
            { icon: "✉️", label: "Email", value: "info@namasteglob.com" },
            // { icon: "🕐", label: "Office Hours", value: "Monday – Saturday, 9am to 6pm IST" },
          ].map(({ icon, label, value }) => (
            <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "42px", height: "42px", background: "rgba(26,122,110,0.18)", border: "1px solid rgba(42,181,160,0.25)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.1rem" }}>{icon}</div>
              <div>
                <label style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--teal-light)", display: "block", marginBottom: "3px" }}>{label}</label>
                <span style={{ fontSize: "0.85rem", color: "#b0a090" }}>{value}</span>
              </div>
            </div>
          ))}
          <div style={{ marginTop: "2rem", background: "var(--dark3)", border: "1px solid var(--border)", borderRadius: "8px", padding: "1.5rem" }}>
            <p className="font-cinzel" style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Certifications</p>
            {["ISO 22000:2018 — Food Safety", "FSSAI Licensed", "APEDA Registered", "Export Promotion Council Member"].map((cert) => (
              <div key={cert} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.5rem" }}>
                <span style={{ color: "var(--teal-light)" }}>✓</span>
                <span style={{ fontSize: "0.8rem", color: "#7a6e60" }}>{cert}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "var(--dark3)", border: "1px solid var(--border)", borderRadius: "10px", padding: "2.5rem" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🦚</div>
              <h3 className="font-cormorant" style={{ fontSize: "1.8rem", color: "var(--cream)", marginBottom: "0.75rem" }}>Message Received!</h3>
              <p style={{ color: "#7a6e60", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>Our team will get back to you within 24 business hours.</p>
              <button className="btn-primary" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="font-cinzel" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.75rem" }}>Send a Message</h3>
              {[{ k: "name", l: "Your Name", p: "John Smith", t: "text" }, { k: "email", l: "Email Address", p: "john@company.com", t: "email" }, { k: "subject", l: "Subject", p: "Trade Inquiry / Bulk Order", t: "text" }].map(({ k, l, p, t }) => (
                <div key={k} style={{ marginBottom: "1.25rem" }}>
                  <label style={{ display: "block", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "6px" }}>{l}</label>
                  <input type={t} className="input-field" placeholder={p} required value={form[k as keyof typeof form]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />
                </div>
              ))}
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "6px" }}>Message</label>
                <textarea className="input-field" placeholder="Tell us about your requirements..." required rows={5} style={{ resize: "vertical" }} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <button className="btn-gold" type="submit" style={{ width: "100%", justifyContent: "center" }} disabled={loading}>
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
