"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import PeacockIcon from "./PeacockIcon";
import { useAppSelector } from "@/store/hooks";
import { selectCartCount } from "@/store/cartSlice";

const navLinks = [
  { href: "/", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const pathname = usePathname();
  const cartCount = useAppSelector(selectCartCount);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" style={{ background: "rgba(10,10,15,0.93)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(201,168,76,0.18)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <PeacockIcon size={44} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span className="text-gradient font-cinzel" style={{ fontSize: "1.15rem", fontWeight: 700, letterSpacing: "0.04em" }}>Namaste Globals</span>
            <span className="font-raleway" style={{ fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--teal-light)", opacity: 0.8, fontWeight: 300 }}>Import · Export · Excellence</span>
          </div>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }} className="desktop-nav">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: pathname === href ? "var(--gold-light)" : "#b0a090", background: pathname === href ? "rgba(201,168,76,0.08)" : "transparent", padding: "8px 16px", borderRadius: "4px", textDecoration: "none", position: "relative", transition: "all 0.2s" }}>
              {label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link href="/cart" className="btn-primary" style={{ padding: "9px 18px", fontSize: "0.73rem", position: "relative" }}>
            <ShoppingCart size={15} />
            Cart
            {cartCount > 0 && (
              <span style={{ position: "absolute", top: "-8px", right: "-8px", background: "var(--gold)", color: "#000", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.62rem", fontWeight: 700 }}>{cartCount}</span>
            )}
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{ background: "none", border: "none", color: "#b0a090", cursor: "pointer", display: "none" }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ borderTop: "1px solid rgba(201,168,76,0.12)", padding: "0.5rem 1.5rem 1rem" }}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "12px 8px", fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: pathname === href ? "var(--gold-light)" : "#b0a090", borderBottom: "1px solid rgba(201,168,76,0.08)", textDecoration: "none" }}>{label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
