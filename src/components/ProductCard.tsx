'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToCart, removeFromCart, selectCartItems } from '@/store/cartSlice';
import { Product } from '@/types';
import { formatINR } from '@/lib/formatPrice';
import toast from 'react-hot-toast';
import { ShoppingCart, ArrowRight, Trash2 } from 'lucide-react';

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const inCart = cartItems.some((i) => i.id === product.id);

  const handleAdd = () => {
    dispatch(addToCart(product));
    toast.success(`${product.content} added to cart!`);
  };

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
    toast(`${product.content} removed from cart`, { icon: '🗑️' });
  };

  return (
    <div style={{
      background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: 10,
      overflow: 'hidden', display: 'flex', flexDirection: 'column',
      transition: 'all 0.35s ease',
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.45)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.5), 0 0 30px rgba(26,122,110,0.08)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {/* Image */}
      <Link href={`/product/${encodeURIComponent(product.id)}`} style={{ textDecoration: 'none' }}>
        <div style={{ position: 'relative', height: 220, background: 'linear-gradient(135deg, rgba(26,122,110,0.15), rgba(201,168,76,0.08))', overflow: 'hidden' }}>
          <Image
            src={product.src}
            alt={product.content}
            fill
            style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.05)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {inCart && (
            <div style={{
              position: 'absolute', top: 12, left: 12, zIndex: 2,
              background: 'linear-gradient(135deg, var(--teal), var(--peacock-blue))',
              color: 'white', fontSize: '0.6rem', fontWeight: 600,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '4px 10px', borderRadius: 20,
            }}>
              ✓ In Cart
            </div>
          )}
          <div style={{
            position: 'absolute', top: 12, right: 12, zIndex: 2,
            background: 'rgba(10,10,15,0.75)', backdropFilter: 'blur(8px)',
            border: '1px solid var(--border)', fontSize: '0.58rem',
            letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)',
            padding: '4px 10px', borderRadius: 3,
          }}>
            Natural
          </div>
        </div>
      </Link>

      {/* Body */}
      <div style={{ padding: '1.4rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Link href={`/product/${encodeURIComponent(product.id)}`} style={{ textDecoration: 'none' }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.45rem', fontWeight: 600, color: 'var(--cream)', marginBottom: 4 }}>
            {product.content}
          </h3>
        </Link>
        <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.05rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 8 }}>
          {formatINR(product.price)} <span style={{ fontSize: '0.65rem', color: '#7a6e60', fontFamily: 'Raleway, sans-serif' }}>{product.unit}</span>
        </div>
        <p style={{ fontSize: '0.8rem', lineHeight: 1.75, color: '#7a6e60', flex: 1, marginBottom: '1.25rem' }}>
          {product.summary}
        </p>

        {!inCart ? (
          <button onClick={handleAdd} style={{
            width: '100%', padding: '12px', cursor: 'pointer',
            background: 'linear-gradient(135deg, var(--teal) 0%, var(--peacock-blue) 100%)',
            border: '1px solid rgba(42,181,160,0.3)', color: 'white',
            fontFamily: 'Raleway, sans-serif', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.15em', textTransform: 'uppercase', borderRadius: 5,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            transition: 'all 0.25s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(42,181,160,0.3)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
          >
            <ShoppingCart size={14} /> Add to Cart
          </button>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link href="/cart" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '12px', textDecoration: 'none',
              background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)',
              color: '#0a0a0f', fontFamily: 'Raleway, sans-serif', fontSize: '0.75rem',
              fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
              borderRadius: 5, transition: 'all 0.25s',
            }}>
              <ShoppingCart size={14} /> Go to Cart <ArrowRight size={13} />
            </Link>
            <button onClick={handleRemove} style={{
              width: '100%', padding: '10px', cursor: 'pointer',
              background: 'transparent', border: '1px solid rgba(180,60,60,0.35)',
              color: '#c06060', fontFamily: 'Raleway, sans-serif', fontSize: '0.72rem',
              fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
              borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
              transition: 'all 0.25s',
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(180,60,60,0.1)'; el.style.color = '#e08080'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = '#c06060'; }}
            >
              <Trash2 size={13} /> Remove from Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
