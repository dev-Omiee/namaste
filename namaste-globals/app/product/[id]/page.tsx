import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { data } from "@/lib/products";
import AddToCartBtn from "./AddToCartBtn";

export async function generateStaticParams() {
  return data.map((p) => ({ id: p.id.replace("Product ", "") }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = data.find((p) => p.id === `Product ${params.id}`);
  if (!product) return { title: "Product Not Found" };
  return { title: `${product.content} — Namaste Globals`, description: product.summary };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = data.find((p) => p.id === `Product ${params.id}`);
  if (!product) notFound();

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem" }}>
      <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", color: "var(--teal-light)", textDecoration: "none", marginBottom: "2.5rem", letterSpacing: "0.1em" }}>
        ← Back to Products
      </Link>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        {/* Image */}
        <div>
          <div style={{ position: "relative", height: "420px", borderRadius: "12px", overflow: "hidden", background: "linear-gradient(135deg, rgba(26,122,110,0.15), rgba(201,168,76,0.08))", border: "1px solid var(--border)" }}>
            <Image src={product.src} alt={product.content} fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
            {["🌿 Natural", "✓ Chemical-Free", "📦 Export Ready"].map((tag) => (
              <span key={tag} style={{ fontSize: "0.68rem", letterSpacing: "0.1em", background: "rgba(26,122,110,0.15)", border: "1px solid rgba(42,181,160,0.2)", color: "var(--teal-light)", padding: "5px 12px", borderRadius: "2px" }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <span style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--teal-light)", display: "block", marginBottom: "0.75rem" }}>{product.category}</span>
          <h1 className="font-cormorant" style={{ fontSize: "2.8rem", fontWeight: 700, color: "var(--cream)", lineHeight: 1.1, marginBottom: "0.75rem" }}>{product.content}</h1>
          <p className="font-cinzel text-gradient" style={{ fontSize: "1.6rem", marginBottom: "1.5rem" }}>{product.priceLabel}</p>
          <div className="gold-line" style={{ marginLeft: 0, marginBottom: "1.5rem" }} />
          <p style={{ fontSize: "0.87rem", lineHeight: 1.9, color: "#8a7d6e", marginBottom: "2rem" }}>{product.details}</p>

          {product.benefits && (
            <div style={{ marginBottom: "2.5rem" }}>
              <p className="font-cinzel" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Key Benefits</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {product.benefits.map((b) => (
                  <div key={b} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ color: "var(--teal-light)", fontSize: "0.8rem" }}>✓</span>
                    <span style={{ fontSize: "0.83rem", color: "#8a7d6e" }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <AddToCartBtn product={product} />

          <div style={{ marginTop: "2rem", background: "rgba(26,122,110,0.08)", border: "1px solid rgba(42,181,160,0.15)", borderRadius: "8px", padding: "1.25rem" }}>
            <p style={{ fontSize: "0.78rem", color: "#6b6055", lineHeight: 1.7 }}>
              🚢 <strong style={{ color: "#8a7d6e" }}>Bulk & Export Orders:</strong> We supply to 30+ countries. Contact us for pricing on orders above 100kg.
            </p>
          </div>
        </div>
      </div>

      {/* Related */}
      <div style={{ marginTop: "5rem" }}>
        <h2 className="font-cormorant" style={{ fontSize: "2rem", color: "var(--cream)", marginBottom: "2rem" }}>You May Also Like</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {data.filter((p) => p.id !== product.id).map((p) => (
            <Link key={p.id} href={`/product/${p.id.replace("Product ", "")}`} style={{ textDecoration: "none" }}>
              <div className="card-hover" style={{ background: "var(--dark3)", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ height: "160px", position: "relative" }}>
                  <Image src={p.src} alt={p.content} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h3 className="font-cormorant" style={{ fontSize: "1.2rem", color: "var(--cream)", marginBottom: "4px" }}>{p.content}</h3>
                  <p className="font-cinzel" style={{ fontSize: "0.9rem", color: "var(--gold)" }}>{p.priceLabel}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
