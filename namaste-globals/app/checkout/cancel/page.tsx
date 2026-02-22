import Link from "next/link";
export default function CancelPage() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "6rem 1.5rem", textAlign: "center" }}>
      <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>❌</div>
      <h1 className="font-cormorant" style={{ fontSize: "2.8rem", color: "var(--cream)", marginBottom: "1rem" }}>Payment Cancelled</h1>
      <div className="gold-line" style={{ marginBottom: "1.5rem" }} />
      <p style={{ fontSize: "0.9rem", color: "#8a7d6e", lineHeight: 1.9, marginBottom: "2.5rem" }}>Your payment was cancelled. No charges were made. Your cart items are still saved — you can try again anytime.</p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/checkout" className="btn-gold" style={{ textDecoration: "none" }}>Try Again</Link>
        <Link href="/cart" className="btn-primary" style={{ textDecoration: "none" }}>Back to Cart</Link>
      </div>
    </div>
  );
}
