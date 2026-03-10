import PeacockIcon from "@/components/PeacockIcon";
import Link from "next/link";

export const metadata = { title: "About Us — Namaste Globals" };

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "5rem 1.5rem" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <span className="section-label">Our Story</span>
        <h1 className="font-cormorant text-gradient" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 700, marginBottom: "1rem" }}>About Namaste Globals</h1>
        <div className="gold-line" style={{ marginBottom: "1.5rem" }} />
        <p style={{ fontSize: "1rem", fontWeight: 300, color: "#8a7d6e", lineHeight: 1.9, maxWidth: "600px", margin: "0 auto" }}>
          A premier import-export company rooted in the rich trading heritage of India, connecting buyers and sellers across continents with trust, quality, and cultural pride.
        </p>
      </div>

      {/* Values grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", marginBottom: "3rem" }}>
        {[
          { icon: "🌏", title: "Global Reach", text: "Every product we export carries the soul of its origin — crafted with generations of tradition and delivered with modern precision and care." },
          { icon: "🦚", title: "Cultural Pride", text: "Every product we export carries the soul of its origin — crafted with generations of tradition and delivered with modern precision and care." },
          { icon: "⚖️", title: "Certified Quality", text: "ISO-certified processes and third-party lab testing ensure every shipment meets international food safety and quality standards." },
          { icon: "🤝", title: "Trusted Partnerships", text: "30+ farmers, manufacturers, and distributors across South Asia. We believe in fair trade and mutual growth." },
        ].map(({ icon, title, text }) => (
          <div key={title} className="card-hover" style={{ background: "var(--dark3)", borderRadius: "10px", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{icon}</div>
            <h3 className="font-cinzel" style={{ fontSize: "0.85rem", letterSpacing: "0.1em", color: "var(--gold)", marginBottom: "0.75rem" }}>{title}</h3>
            <p style={{ fontSize: "0.83rem", color: "#6b6055", lineHeight: 1.75 }}>{text}</p>
          </div>
        ))}
      </div>

      {/* Story */}
      <div style={{ background: "var(--dark3)", border: "1px solid var(--border)", borderLeft: "3px solid var(--gold)", borderRadius: "8px", padding: "2.5rem", marginBottom: "3rem" }}>
        <h2 className="font-cormorant" style={{ fontSize: "2rem", color: "var(--cream)", marginBottom: "1.25rem" }}>Our Journey</h2>
        <p style={{ fontSize: "0.87rem", lineHeight: 1.9, color: "#8a7d6e", marginBottom: "1rem" }}>
          Namaste Globals began with a simple vision: to bring the authentic flavors, aromas, and craftsmanship of India to the world — and to bring the world's finest goods back home.
        </p>
        <p style={{ fontSize: "0.87rem", lineHeight: 1.9, color: "#8a7d6e", marginBottom: "1rem" }}>
          We started as a small jaggery trading house in Maharashtra's sugarcane belt and have grown into a full-spectrum import-export enterprise. Today we work directly with smallholder farmers, artisans, and certified producers, ensuring fair trade practices and uncompromising quality.
        </p>
        <p style={{ fontSize: "0.87rem", lineHeight: 1.9, color: "#8a7d6e" }}>
          Our peacock symbol embodies our ethos: bold, beautiful, and deeply rooted in the Indian spirit — yet spread across the globe with grace and pride.
        </p>
      </div>

      {/* Team */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span className="section-label">Leadership</span>
        <h2 className="font-cormorant" style={{ fontSize: "2rem", color: "var(--cream)", marginBottom: "2rem" }}>Our Team</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1.5rem" }}>
          {[
            { name: "Rohit Patil", role: "Founder", emoji: "👨‍💼" },
            { name: "Rishikesh Patil", role: "Co-Founder", emoji: "👨‍💼" },
            { name: "Ajinkya Patil", role: "CEO", emoji: "👨‍💼" },
          ].map(({ name, role, emoji }) => (
            <div key={name} className="card-hover" style={{ background: "var(--dark3)", borderRadius: "10px", padding: "2rem 1.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>{emoji}</div>
              <h3 className="font-cormorant" style={{ fontSize: "1.2rem", color: "var(--cream)", marginBottom: "0.25rem" }}>{name}</h3>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--teal-light)" }}>{role}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <Link href="/contact" className="btn-gold" style={{ textDecoration: "none" }}>Get in Touch →</Link>
      </div>
    </div>
  );
}
