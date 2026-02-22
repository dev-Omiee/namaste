"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useAppDispatch } from "@/store/hooks";
import { clearCart } from "@/store/cartSlice";

export default function SuccessPage() {
  const dispatch = useAppDispatch();
  useEffect(() => { dispatch(clearCart()); }, [dispatch]);
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "6rem 1.5rem", textAlign: "center" }}>
      <div style={{ width: "80px", height: "80px", background: "rgba(26,122,110,0.2)", border: "2px solid rgba(42,181,160,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem", fontSize: "2rem" }}>✓</div>
      <span className="section-label" style={{ display: "block", marginBottom: "0.75rem" }}>Order Confirmed</span>
      <h1 className="font-cormorant text-gradient" style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", fontWeight: 700, marginBottom: "1.25rem" }}>Thank You!</h1>
      <div className="gold-line" style={{ marginBottom: "1.75rem" }} />
      <p style={{ fontSize: "1rem", color: "#8a7d6e", lineHeight: 1.9, marginBottom: "0.75rem" }}>Your order has been placed successfully. A confirmation email will be sent to your inbox shortly.</p>
      <p style={{ fontSize: "0.85rem", color: "#6b6055", lineHeight: 1.8, marginBottom: "3rem" }}>Our team processes orders within 1–2 business days. For bulk/export orders, expect a call from our trade team.</p>
      <div style={{ background: "var(--dark3)", border: "1px solid var(--border)", borderRadius: "10px", padding: "2rem", marginBottom: "3rem", textAlign: "left" }}>
        <p className="font-cinzel" style={{ fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>What Happens Next</p>
        {[["01", "You'll receive an order confirmation email from Stripe"], ["02", "Our team packs your order with care and hygiene"], ["03", "Your package is dispatched within 2 business days"], ["04", "Tracking info will be shared via email"]].map(([step, text]) => (
          <div key={step} style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem" }}>
            <span className="font-cinzel" style={{ fontSize: "0.65rem", color: "var(--teal-light)", minWidth: "24px" }}>{step}</span>
            <span style={{ fontSize: "0.83rem", color: "#7a6e60", lineHeight: 1.6 }}>{text}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/" className="btn-gold" style={{ textDecoration: "none" }}>Continue Shopping</Link>
        <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>Contact Support</Link>
      </div>
    </div>
  );
}
