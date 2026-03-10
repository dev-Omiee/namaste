import ProductCard from "@/components/ProductCard";
import { data } from "@/lib/products";
import PeacockIcon from "@/components/PeacockIcon";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "6rem 1.5rem 4rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(26,122,110,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
          <span className="section-label">🦚 Bridging the World's Finest Goods</span>
          <h1 className="font-cormorant" style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", fontWeight: 700, lineHeight: 1.05, marginBottom: "1.5rem" }}>
            Namste Globals<br />
            <span className="text-gradient">Rooted in Tradition</span>
          </h1>
          <p className="font-raleway" style={{ fontSize: "1rem", fontWeight: 300, color: "#8a7d6e", lineHeight: 1.9, marginBottom: "2.5rem" }}>
            Premium imports and exports curated from the heart of India — natural sweeteners, spices, and more, delivered to the world with uncompromising quality.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", marginBottom: "3rem" }}>
            <span style={{ width: "80px", height: "1px", background: "linear-gradient(to right, transparent, var(--gold))" }} />
            <span style={{ fontSize: "1.4rem" }}>🦚</span>
            <span style={{ width: "80px", height: "1px", background: "linear-gradient(to left, transparent, var(--gold))" }} />
          </div>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#products" className="btn-gold" style={{ textDecoration: "none" }}>Shop Now</a>
            <Link href="/about" className="btn-primary" style={{ textDecoration: "none" }}>Our Story</Link>
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <div style={{ background: "rgba(26,122,110,0.08)", borderTop: "1px solid rgba(201,168,76,0.1)", borderBottom: "1px solid rgba(201,168,76,0.1)", padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", textAlign: "center" }}>
          {[{ num: "100%", label: "Natural Products" }, { num: "ISO", label: "Certified Quality" }, { num: "30+", label: "Sourcing Partners" }].map(({ num, label }) => (
            <div key={label}>
              <p className="font-cinzel text-gradient" style={{ fontSize: "1.6rem", fontWeight: 700 }}>{num}</p>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b6055", marginTop: "0.25rem" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <section id="products" style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">Our Collection</span>
          <h2 className="font-cormorant" style={{ fontSize: "2.6rem", fontWeight: 600, color: "var(--cream)" }}>Featured Products</h2>
          <div className="gold-line" style={{ marginTop: "1rem" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.75rem" }}>
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section style={{ background: "rgba(0,0,0,0.3)", padding: "5rem 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Why Namaste Globals</span>
            <h2 className="font-cormorant" style={{ fontSize: "2.4rem", fontWeight: 600, color: "var(--cream)" }}>The Namaste Promise</h2>
            <div className="gold-line" style={{ marginTop: "1rem" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "🌿", title: "Pure Natural", desc: "No chemicals, no additives. Every product is pure and unadulterated, straight from the source." },
              { icon: "🚢", title: "Worldwide Shipping", desc: "We export to 30+ countries with reliable logistics partners and full documentation support." },
              { icon: "⚖️", title: "Quality Certified", desc: "ISO certified processes with third-party lab testing on every batch." },
              { icon: "🤝", title: "Farmer Direct", desc: "We source directly from farmers, ensuring fair trade and the freshest products." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card-hover" style={{ background: "var(--dark3)", borderRadius: "8px", padding: "2rem", textAlign: "center" }}>
                <div style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>{icon}</div>
                <h3 className="font-cinzel" style={{ fontSize: "0.85rem", letterSpacing: "0.1em", color: "var(--gold)", marginBottom: "0.75rem" }}>{title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#6b6055", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
