"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { selectCartItems, selectCartTotal } from "@/store/cartSlice";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const gst = Math.round(total * 0.05);
  const grandTotal = total + gst;

  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", city: "", state: "", pincode: "", country: "India" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, customerInfo: { name: form.name, email: form.email, phone: form.phone, address: `${form.address}, ${form.city}, ${form.state} - ${form.pincode}, ${form.country}` } }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      if (data.url) window.location.href = data.url;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Checkout failed. Please try again.");
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "6rem 1.5rem", textAlign: "center" }}>
        <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>🛒</div>
        <h2 className="font-cormorant" style={{ fontSize: "2rem", color: "#6b6055", marginBottom: "1rem" }}>Nothing to checkout</h2>
        <Link href="/" className="btn-gold" style={{ textDecoration: "none" }}>Browse Products</Link>
      </div>
    );
  }

  const labelStyle = { display: "block" as const, fontSize: "0.63rem", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "var(--gold)", marginBottom: "6px" };

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <span className="section-label">Almost There</span>
        <h1 className="font-cormorant" style={{ fontSize: "2.8rem", fontWeight: 600, color: "var(--cream)" }}>Checkout</h1>
        <div className="gold-line" style={{ marginTop: "0.75rem", marginLeft: 0 }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2.5rem", fontSize: "0.75rem" }}>
        <Link href="/cart" style={{ color: "var(--teal-light)", textDecoration: "none" }}>Cart</Link>
        <ArrowRight size={12} color="#4a4035" />
        <span style={{ color: "var(--gold)" }}>Details</span>
        <ArrowRight size={12} color="#4a4035" />
        <span style={{ color: "#4a4035" }}>Stripe Payment</span>
        <ArrowRight size={12} color="#4a4035" />
        <span style={{ color: "#4a4035" }}>Confirmation</span>
      </div>
      <form onSubmit={handleCheckout}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "2.5rem", alignItems: "start" }}>
          <div>
            <div style={{ background: "var(--dark3)", border: "1px solid var(--border)", borderRadius: "10px", padding: "2rem", marginBottom: "1.5rem" }}>
              <h2 className="font-cinzel" style={{ fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>Contact Information</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <div><label style={labelStyle}>Full Name *</label><input name="name" required value={form.name} onChange={handleChange} className="input-field" placeholder="Your full name" /></div>
                <div><label style={labelStyle}>Phone *</label><input name="phone" required value={form.phone} onChange={handleChange} className="input-field" placeholder="+91 90496 46485" /></div>
              </div>
              <div><label style={labelStyle}>Email Address *</label><input name="email" type="email" required value={form.email} onChange={handleChange} className="input-field" placeholder="you@example.com" /></div>
            </div>
            <div style={{ background: "var(--dark3)", border: "1px solid var(--border)", borderRadius: "10px", padding: "2rem", marginBottom: "1.5rem" }}>
              <h2 className="font-cinzel" style={{ fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>Shipping Address</h2>
              <div style={{ marginBottom: "1rem" }}><label style={labelStyle}>Street Address *</label><input name="address" required value={form.address} onChange={handleChange} className="input-field" placeholder="Building, Street, Area" /></div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div><label style={labelStyle}>City *</label><input name="city" required value={form.city} onChange={handleChange} className="input-field" placeholder="Sangli" /></div>
                <div><label style={labelStyle}>State *</label><input name="state" required value={form.state} onChange={handleChange} className="input-field" placeholder="Maharashtra" /></div>
                <div><label style={labelStyle}>PIN Code *</label><input name="pincode" required value={form.pincode} onChange={handleChange} className="input-field" placeholder="400001" /></div>
                <div><label style={labelStyle}>Country</label><input name="country" value={form.country} onChange={handleChange} className="input-field" /></div>
              </div>
            </div>
            <div style={{ background: "rgba(26,122,110,0.08)", border: "1px solid rgba(42,181,160,0.2)", borderRadius: "8px", padding: "1.25rem" }}>
              <p style={{ fontSize: "0.8rem", color: "#6b6055", lineHeight: 1.7 }}>💳 After confirming your details, you will be securely redirected to Stripe Checkout. We accept all major cards, UPI, and net banking.</p>
            </div>
          </div>
          <div>
            <div style={{ background: "var(--dark3)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "10px", padding: "2rem", position: "sticky", top: "90px" }}>
              <h3 className="font-cinzel" style={{ fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>Order Summary</h3>
              {items.map((item) => (
                <div key={item.id} style={{ display: "flex", gap: "12px", marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
                  <div style={{ width: "52px", height: "52px", position: "relative", borderRadius: "6px", overflow: "hidden", flexShrink: 0 }}>
                    <Image src={item.src} alt={item.content} fill style={{ objectFit: "cover" }} />
                    <span style={{ position: "absolute", top: "-6px", right: "-6px", background: "var(--gold)", color: "#000", borderRadius: "50%", width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.62rem", fontWeight: 700 }}>{item.quantity}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "0.85rem", color: "var(--cream)" }}>{item.content}</p>
                    <p style={{ fontSize: "0.75rem", color: "#6b6055" }}>₹{item.price} × {item.quantity}</p>
                  </div>
                  <p className="font-cinzel" style={{ fontSize: "0.9rem", color: "var(--gold)" }}>₹{item.price * item.quantity}</p>
                </div>
              ))}
              <div style={{ marginTop: "1rem" }}>
                {[["Subtotal", `₹${total}`], ["GST (5%)", `₹${gst}`], ["Shipping", "Via Stripe"]].map(([l, v]) => (
                  <div key={l} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "0.82rem", color: "#7a6e60" }}>{l}</span>
                    <span style={{ fontSize: "0.82rem", color: l === "Shipping" ? "var(--teal-light)" : "var(--cream)" }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid var(--border)", marginTop: "1rem", paddingTop: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span className="font-cinzel" style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cream)" }}>Grand Total</span>
                  <span className="font-cinzel" style={{ fontSize: "1.4rem", color: "var(--gold)" }}>₹{grandTotal}</span>
                </div>
              </div>
              {error && <div style={{ background: "rgba(180,60,60,0.12)", border: "1px solid rgba(180,60,60,0.3)", borderRadius: "6px", padding: "0.75rem", marginBottom: "1rem" }}><p style={{ color: "#e08080", fontSize: "0.8rem" }}>⚠️ {error}</p></div>}
              <button type="submit" className="btn-gold" style={{ width: "100%", justifyContent: "center" }} disabled={loading}>
                {loading ? "Redirecting to Stripe..." : <><Lock size={15} /> Pay Securely with Stripe</>}
              </button>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "1rem" }}>
                <ShieldCheck size={14} color="#4a4035" />
                <p style={{ fontSize: "0.68rem", color: "#4a4035" }}>256-bit SSL · PCI DSS Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
