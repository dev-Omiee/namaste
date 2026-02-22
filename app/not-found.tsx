import Link from "next/link";
export default function NotFound() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "6rem 1.5rem", textAlign: "center" }}>
      <p className="font-cinzel text-gradient" style={{ fontSize: "6rem", fontWeight: 700, lineHeight: 1 }}>404</p>
      <h2 className="font-cormorant" style={{ fontSize: "2rem", color: "var(--cream)", marginBottom: "1rem" }}>Page Not Found</h2>
      <p style={{ color: "#7a6e60", marginBottom: "2.5rem", fontSize: "0.9rem", lineHeight: 1.8 }}>The page you are looking for has wandered off like a peacock into the mist.</p>
      <Link href="/" className="btn-gold" style={{ textDecoration: "none" }}>Return Home</Link>
    </div>
  );
}
