"use client";
import Link from "next/link";
import { ShoppingCart, ArrowRight, Trash2 } from "lucide-react";
import { Product } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart, removeFromCart, selectCartItems } from "@/store/cartSlice";
import toast from "react-hot-toast";

export default function AddToCartBtn({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const inCart = cartItems.some((i) => i.id === product.id);

  if (inCart) return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <Link href="/cart" className="btn-gold" style={{ justifyContent: "center", textDecoration: "none" }}><ShoppingCart size={16} /> Go to Cart <ArrowRight size={14} /></Link>
      <button className="btn-danger" style={{ justifyContent: "center" }} onClick={() => { dispatch(removeFromCart(product.id)); toast(`${product.content} removed`); }}>
        <Trash2 size={14} /> Remove from Cart
      </button>
    </div>
  );

  return (
    <button className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "14px" }} onClick={() => { dispatch(addToCart(product)); toast.success(`${product.content} added to cart!`, { style: { background: "#161622", color: "#f5edd8", border: "1px solid rgba(201,168,76,0.3)" }, iconTheme: { primary: "#c9a84c", secondary: "#000" } }); }}>
      <ShoppingCart size={16} /> Add to Cart
    </button>
  );
}
