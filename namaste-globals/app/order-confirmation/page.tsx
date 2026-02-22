"use client";
// app/order-confirmation/page.tsx
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { clearCart } from "@/store/cartSlice";
import PeacockLogo from "@/components/PeacockLogo";

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const dispatch = useAppDispatch();
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    if (!cleared) {
      dispatch(clearCart());
      setCleared(true);
    }
  }, [dispatch, cleared]);

  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "5rem 1.5rem", textAlign: "center" }}>
      {/* Success icon */}
      <div style={{ position: "relative", display: "inline-block", marginBottom: "2rem" }}>
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(26,122,110,0.15)",
            border: "2px solid rgba(42,181,160,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <CheckCircle size={48} style={{ color: "var(--teal-light)" }} />
        </div>
      </div>

      <p className="section-label">Order Confirmed</p>
      <h1
        className="font-cormorant text-gold-gradient"
        style={{ fontSize: "3.2rem", fontWeight: 700, lineHeight: 1.1, marginBottom: "1rem" }}
      >
        Thank You for Your Order!
      </h1>
      <div className="gold-divider" />

      <p style={{ color: "#7a6e60", fontSize: "0.92rem", lineHeight: 1.85, marginBottom: "2.5rem" }}>
        Your payment was processed successfully. You&apos;ll receive an order confirmation
        email shortly with tracking details once your package is dispatched.
      </p>

      {sessionId && (
        <div
          className="card"
          style={{ padding: "1rem 1.5rem", display: "inline-block", marginBottom: "2.5rem" }}
        >
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--teal-light)", marginBottom: 4 }}>
            Order Reference
          </p>
          <p style={{ fontFamily: "monospace", fontSize: "0.78rem", color: "#7a6e60", wordBreak: "break-all" }}>
            {sessionId.slice(0, 32)}…
          </p>
        </div>
      )}

      {/* What's next */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem",
          marginBottom: "3rem",
        }}
      >
        {[
          { icon: Mail, title: "Check Your Email", sub: "Confirmation sent to your inbox" },
          { icon: Package, title: "Processing", sub: "We'll pack your order in 1–2 days" },
          { icon: ArrowRight, title: "Dispatch", sub: "Shipped within 2–3 business days" },
        ].map(({ icon: Icon, title, sub }) => (
          <div key={title} className="card" style={{ padding: "1.5rem", textAlign: "center" }}>
            <Icon size={22} style={{ color: "var(--teal-light)", margin: "0 auto 0.6rem" }} />
            <p className="font-cinzel" style={{ fontSize: "0.72rem", letterSpacing: "0.12em", color: "var(--gold)", marginBottom: "0.4rem" }}>
              {title}
            </p>
            <p style={{ fontSize: "0.75rem", color: "#5a5048" }}>{sub}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/" className="btn-primary">Continue Shopping</Link>
        <Link href="/contact" className="btn-danger" style={{ textDecoration: "none" }}>
          Need Help?
        </Link>
      </div>

      <div style={{ marginTop: "4rem", opacity: 0.35 }}>
        <PeacockLogo size={64} />
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <div style={{ textAlign: "center", padding: "5rem", color: "#5a5048" }}>Loading...</div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  );
}
