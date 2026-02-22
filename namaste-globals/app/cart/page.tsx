"use client";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeFromCart, incrementQuantity, decrementQuantity, selectCartItems, selectCartTotal, clearCart } from "@/store/cartSlice";
import toast from "react-hot-toast";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);

  if (items.length === 0) {
    return (
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "6rem 1.5rem", textAlign: "center" }}>
        <div style={{ fontSize: "4.5rem", marginBottom: "1.5rem" }}>🛒</div>
        <h2 className="font-cormorant" style={{ fontSize: "2.5rem", color: "#6b6055", marginBottom: "0.75rem" }}>Your cart is empty</h2>
        <p style={{ color: "#4a4035", marginBottom: "2.5rem", fontSize: "0.9rem" }}>Add some of our premium products to get started.</p>
        <Link href="/" className="btn-gold" style={{ textDecoration: "none" }}><ShoppingBag size={16} /> Browse Products</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "4rem 1.5rem" }}>
      <div style={{ marginBottom: "3rem" }}>
        <span className="section-label">Your Selection</span>
        <h1 className="font-cormorant" style={{ fontSize: "2.8rem", fontWeight: 600, color: "var(--cream)" }}>Shopping Cart</h1>
        <div className="gold-line" style={{ marginTop: "0.75rem", marginLeft: 0 }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "2rem", alignItems: "start" }}>
        <div>
          {items.map((item) => (
            <div key={item.id} className="card-hover" style={{ background: "var(--dark3)", borderRadius: "10px", padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1.25rem", alignItems: "center" }}>
              <div style={{ width: "80px", height: "80px", position: "relative", borderRadius: "8px", overflow: "hidden", flexShrink: 0, background: "rgba(26,122,110,0.15)" }}>
                <Image src={item.src} alt={item.content} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 className="font-cormorant" style={{ fontSize: "1.3rem", color: "var(--cream)", marginBottom: "2px" }}>{item.content}</h3>
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--teal-light)", marginBottom: "0.5rem" }}>{item.category}</p>
                <p className="font-cinzel" style={{ fontSize: "1rem", color: "var(--gold)" }}>₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <button onClick={() => dispatch(decrementQuantity(item.id))} style={{ width: "30px", height: "30px", border: "1px solid var(--border)", background: "transparent", color: "var(--cream)", borderRadius: "4px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Minus size={14} /></button>
                <span className="font-cinzel" style={{ fontSize: "1rem", minWidth: "24px", textAlign: "center", color: "var(--cream)" }}>{item.quantity}</span>
                <button onClick={() => dispatch(incrementQuantity(item.id))} style={{ width: "30px", height: "30px", border: "1px solid var(--border)", background: "transparent", color: "var(--cream)", borderRadius: "4px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Plus size={14} /></button>
              </div>
              <button className="btn-danger" style={{ padding: "8px" }} onClick={() => { dispatch(removeFromCart(item.id)); toast(`${item.content} removed`, { style: { background: "#161622", color: "#f5edd8" } }); }}><Trash2 size={16} /></button>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
            <Link href="/" style={{ fontSize: "0.8rem", color: "var(--teal-light)", textDecoration: "none" }}>← Continue Shopping</Link>
            <button className="btn-danger" onClick={() => { dispatch(clearCart()); toast("Cart cleared"); }} style={{ fontSize: "0.75rem" }}>Clear Cart</button>
          </div>
        </div>
        <div style={{ background: "var(--dark3)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "10px", padding: "2rem", position: "sticky", top: "90px" }}>
          <h3 className="font-cinzel" style={{ fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>Order Summary</h3>
          {items.map((item) => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "0.82rem", color: "#7a6e60" }}>{item.content} × {item.quantity}</span>
              <span style={{ fontSize: "0.82rem", color: "var(--cream)" }}>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)", margin: "1rem 0", paddingTop: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}><span style={{ fontSize: "0.82rem", color: "#7a6e60" }}>Subtotal</span><span style={{ fontSize: "0.82rem", color: "var(--cream)" }}>₹{total}</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}><span style={{ fontSize: "0.82rem", color: "#7a6e60" }}>Shipping</span><span style={{ fontSize: "0.72rem", color: "var(--teal-light)" }}>At checkout</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}><span style={{ fontSize: "0.82rem", color: "#7a6e60" }}>GST (5%)</span><span style={{ fontSize: "0.82rem", color: "var(--cream)" }}>₹{Math.round(total * 0.05)}</span></div>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="font-cinzel" style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cream)" }}>Total</span>
              <span className="font-cinzel" style={{ fontSize: "1.3rem", color: "var(--gold)" }}>₹{Math.round(total * 1.05)}</span>
            </div>
          </div>
          <Link href="/checkout" className="btn-gold" style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}>Proceed to Checkout <ArrowRight size={15} /></Link>
          <p style={{ fontSize: "0.68rem", color: "#4a4035", textAlign: "center", marginTop: "1rem", lineHeight: 1.6 }}>🔒 Secured by Stripe. Encrypted payment.</p>
        </div>
      </div>
    </div>
  );
}
