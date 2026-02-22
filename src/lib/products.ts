import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'Product 1',
    src: '/images/jggery6.png',
    content: 'Jaggery (Gur)',
    summary: 'Natural, chemical-free jaggery made from fresh sugarcane juice. Rich in minerals and traditional flavor, perfect for sweets, tea, or daily consumption as a healthy sugar alternative.',
    price: 160,
    unit: 'per kg',
    inStock: true,
  },
  {
    id: 'Product 2',
    src: '/images/Jaggery-Powder.png',
    content: 'Jaggery Powder',
    summary: 'Finely powdered jaggery with the same natural sweetness and nutrients as solid jaggery. Easy to dissolve and ideal for tea, coffee, desserts, and everyday cooking.',
    price: 180,
    unit: 'per kg',
    inStock: true,
  },
  {
    id: 'Product 3',
    src: '/images/kakvi.avif',
    content: 'Liquid Jaggery',
    summary: 'Traditional liquid jaggery made from concentrated sugarcane juice. Smooth, rich, and naturally sweet — perfect for drizzling on chapati.',
    price: 220,
    unit: 'per liter',
    inStock: true,
  },
];

export const getProductById = (id: string) =>
  products.find((p) => p.id === id) ?? null;
