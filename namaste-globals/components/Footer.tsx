import Link from "next/link";
import PeacockIcon from "./PeacockIcon";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#060608", borderTop: "1px solid rgba(201,168,76,0.15)", padding: "3.5rem 1.5rem 1.5rem", marginTop: "auto" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "2.5rem", marginBottom: "2.5rem" }}>
          <div>
            <PeacockIcon size={40} />
            <p className="font-cinzel text-gradient" style={{ fontSize: "1rem", fontWeight: 600, margin: "0.75rem 0" }}>Namaste Globals</p>
            <p style={{ fontSize: "0.8rem", lineHeight: 1.8, color: "#5a5045", maxWidth: "260px" }}>Bridging the world's finest goods across borders. Premium Indian exports delivered with tradition and trust.</p>
          </div>
          <div>
            <p className="font-cinzel" style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Navigate</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[{ href: "/", l: "Products" }, { href: "/about", l: "About Us" }, { href: "/contact", l: "Contact" }, { href: "/faq", l: "FAQ" }, { href: "/cart", l: "Cart" }].map(({ href, l }) => (
                <li key={href}><Link href={href} style={{ fontSize: "0.8rem", color: "#5a5045", textDecoration: "none" }}>{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-cinzel" style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Legal</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[{ href: "/privacy", l: "Privacy Policy" }, { href: "/privacy#terms", l: "Terms of Service" }, { href: "/privacy#license", l: "License & Docs" }].map(({ href, l }) => (
                <li key={l}><Link href={href} style={{ fontSize: "0.8rem", color: "#5a5045", textDecoration: "none" }}>{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-cinzel" style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Reach Us</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["Sangli, Maharashtra", "info.namasteglobals@gmail.com", "+917499418833"].map((item) => (
                <li key={item} style={{ fontSize: "0.8rem", color: "#5a5045" }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(201,168,76,0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <p style={{ fontSize: "0.72rem", color: "#2a2520" }}>© {year} Namaste Globals. All rights reserved.</p>
          <p style={{ fontSize: "0.72rem", color: "#2a2520" }}>Crafted with 🦚 in India</p>
        </div>
      </div>
    </footer>
  );
}
