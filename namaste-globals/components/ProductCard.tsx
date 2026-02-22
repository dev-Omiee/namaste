"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ArrowRight, Trash2 } from "lucide-react";
import { Product } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart, removeFromCart, selectCartItems } from "@/store/cartSlice";
import toast from "react-hot-toast";

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const inCart = cartItems.some((i) => i.id === product.id);

  const handleAdd = () => {
    dispatch(addToCart(product));
    toast.success(`${product.content} added to cart!`, {
      style: { background: "#161622", color: "#f5edd8", border: "1px solid rgba(201,168,76,0.3)" },
      iconTheme: { primary: "#c9a84c", secondary: "#000" },
    });
  };

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
    toast(`${product.content} removed`, {
      style: { background: "#161622", color: "#f5edd8", border: "1px solid rgba(180,60,60,0.3)" },
    });
  };

  const productSlug = product.id.replace("Product ", "");

  return (
    <div className="card-hover" style={{ background: "var(--dark3)", borderRadius: "10px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Link href={`/product/${productSlug}`} style={{ display: "block", textDecoration: "none" }}>
        <div style={{ height: "220px", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, rgba(26,122,110,0.15), rgba(201,168,76,0.08))" }}>
          <Image src={product.src} alt={product.content} fill style={{ objectFit: "contain" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(22,22,34,0.6))" }} />
          <span style={{ position: "absolute", top: "14px", right: "14px", background: "rgba(10,10,15,0.85)", border: "1px solid rgba(201,168,76,0.25)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", padding: "4px 10px", borderRadius: "2px" }}>
            {product.category}
          </span>
        </div>
      </Link>
      <div style={{ padding: "1.4rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <Link href={`/product/${productSlug}`} style={{ textDecoration: "none" }}>
          <h3 className="font-cormorant" style={{ fontSize: "1.45rem", fontWeight: 600, color: "var(--cream)", marginBottom: "0.4rem" }}>{product.content}</h3>
        </Link>
        <p className="font-cinzel" style={{ fontSize: "1.1rem", color: "var(--gold)", marginBottom: "0.75rem" }}>{product.priceLabel}</p>
        <p style={{ fontSize: "0.8rem", lineHeight: 1.75, color: "#7a6e60", flex: 1, marginBottom: "1.25rem" }}>{product.summary}</p>
        {!inCart ? (
          <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={handleAdd}>
            <ShoppingCart size={15} /> Add to Cart
          </button>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <Link href="/cart" className="btn-gold" style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}>
              <ShoppingCart size={15} /> Go to Cart <ArrowRight size={14} />
            </Link>
            <button className="btn-danger" style={{ width: "100%", justifyContent: "center" }} onClick={handleRemove}>
              <Trash2 size={14} /> Remove from Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
