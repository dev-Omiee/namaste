'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToCart, removeFromCart, selectCartItems } from '@/store/cartSlice';
import { Product } from '@/types';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { ShoppingCart, ArrowRight, Trash2 } from 'lucide-react';

export default function ProductDetailClient({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const inCart = cartItems.some((i) => i.id === product.id);

  const handleAdd = () => { dispatch(addToCart(product)); toast.success(`${product.content} added to cart!`); };
  const handleRemove = () => { dispatch(removeFromCart(product.id)); toast(`${product.content} removed`, { icon: '🗑️' }); };

  if (!inCart) {
    return (
      <button onClick={handleAdd} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        width: '100%', padding: '14px', cursor: 'pointer',
        background: 'linear-gradient(135deg, var(--teal) 0%, var(--peacock-blue) 100%)',
        border: '1px solid rgba(42,181,160,0.35)', color: 'white',
        fontFamily: 'Raleway, sans-serif', fontSize: '0.8rem', fontWeight: 600,
        letterSpacing: '0.16em', textTransform: 'uppercase', borderRadius: 6,
        transition: 'all 0.25s',
      }}>
        <ShoppingCart size={16} /> Add to Cart
      </button>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Link href="/cart" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        padding: '14px', textDecoration: 'none',
        background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)',
        color: '#0a0a0f', fontFamily: 'Raleway, sans-serif', fontSize: '0.8rem',
        fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
        borderRadius: 6, transition: 'all 0.25s',
      }}>
        <ShoppingCart size={16} /> Go to Cart <ArrowRight size={14} />
      </Link>
      <button onClick={handleRemove} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        width: '100%', padding: '11px', cursor: 'pointer',
        background: 'transparent', border: '1px solid rgba(180,60,60,0.35)',
        color: '#c06060', fontFamily: 'Raleway, sans-serif', fontSize: '0.73rem',
        fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: 6,
        transition: 'all 0.25s',
      }}>
        <Trash2 size={13} /> Remove from Cart
      </button>
    </div>
  );
}
