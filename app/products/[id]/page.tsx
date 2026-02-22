"use client";
// app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Trash2, CheckCircle } from "lucide-react";
import { products, getProductById } from "@/lib/data";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart, removeFromCart, selectIsInCart } from "@/store/cartSlice";
import toast from "react-hot-toast";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  if (!product) notFound();

  const dispatch = useAppDispatch();
  const inCart = useAppSelector(selectIsInCart(product.id));

  const handleAdd = () => {
    dispatch(addToCart(product));
    toast.success(`${product.content} added to cart!`, {
      style: { background: "var(--dark3)", color: "var(--cream)", border: "1px solid var(--border)", fontFamily: "Raleway, sans-serif" },
    });
  };

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
  };

  const related = products.filter((p) => p.id !== product.id);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2.5rem 1.5rem 5rem" }}>
      {/* Breadcrumb */}
      <Link
        href="/"
        style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#7a6e60", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", marginBottom: "2rem" }}
      >
        <ArrowLeft size={14} /> Back to Products
      </Link>

      {/* Main content */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="md:grid-cols-2 grid-cols-1">
        {/* Image */}
        <div
          style={{
            position: "relative",
            height: 420,
            borderRadius: 8,
            overflow: "hidden",
            border: "1px solid var(--border)",
            background: "linear-gradient(135deg, rgba(26,122,110,0.15), rgba(201,168,76,0.08))",
          }}
        >
          <Image
            src={product.src}
            alt={product.content}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <span
            style={{
              position: "absolute", top: 14, right: 14,
              background: "rgba(10,10,15,0.82)", border: "1px solid var(--border)",
              fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--gold)", padding: "5px 12px", borderRadius: 2, fontFamily: "Cinzel, serif",
            }}
          >
            {product.category}
          </span>
        </div>

        {/* Details */}
        <div>
          <p className="section-label">{product.origin}</p>
          <h1 className="font-cormorant" style={{ fontSize: "2.8rem", fontWeight: 700, color: "var(--cream)", lineHeight: 1.1, marginBottom: "0.5rem" }}>
            {product.content}
          </h1>
          <div className="gold-divider" style={{ margin: "1rem 0" }} />
          <p className="font-cinzel" style={{ fontSize: "1.6rem", color: "var(--gold)", fontWeight: 600, marginBottom: "1.25rem" }}>
            ₹{product.price} <span style={{ fontSize: "0.9rem", color: "#7a6e60", fontWeight: 400 }}>/ {product.unit}</span>
          </p>

          <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: "#8a7d6e", marginBottom: "2rem" }}>
            {product.longDescription}
          </p>

          {/* Benefits */}
          <div style={{ marginBottom: "2rem" }}>
            <p className="font-cinzel" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--teal-light)", marginBottom: "0.75rem" }}>
              Key Benefits
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {product.benefits.map((b) => (
                <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.83rem", color: "#8a7d6e" }}>
                  <CheckCircle size={14} style={{ color: "var(--teal-light)", marginTop: 2, flexShrink: 0 }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Weight */}
          <p style={{ fontSize: "0.78rem", color: "#5a5048", marginBottom: "1.75rem", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
            📦 {product.weight}
          </p>

          {/* Cart CTAs */}
          {!inCart ? (
            <button className="btn-primary" onClick={handleAdd} style={{ width: "100%", padding: "14px" }}>
              <ShoppingCart size={16} />
              Add to Cart
            </button>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Link href="/cart" className="btn-gold" style={{ width: "100%", padding: "14px" }}>
                <ShoppingCart size={16} />
                Go to Cart
              </Link>
              <button className="btn-danger" onClick={handleRemove} style={{ width: "100%", justifyContent: "center", padding: "11px" }}>
                <Trash2 size={14} />
                Remove from Cart
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div style={{ marginTop: "5rem" }}>
          <p className="section-label" style={{ textAlign: "center" }}>You May Also Like</p>
          <h2 className="font-cormorant" style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>Related Products</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="card"
                style={{ textDecoration: "none", display: "flex", gap: "1rem", padding: "1rem", alignItems: "center" }}
              >
                <div style={{ position: "relative", width: 72, height: 72, borderRadius: 6, overflow: "hidden", flexShrink: 0 }}>
                  <Image src={p.src} alt={p.content} fill style={{ objectFit: "cover" }} sizes="80px" />
                </div>
                <div>
                  <p className="font-cormorant" style={{ fontSize: "1.1rem", color: "var(--cream)", marginBottom: 4 }}>{p.content}</p>
                  <p className="font-cinzel" style={{ fontSize: "0.85rem", color: "var(--gold)" }}>₹{p.price}/{p.unit}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
