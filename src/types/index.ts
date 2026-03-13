export interface Product {
  id: string;
  src: string;
  content: string;
  summary: string;
  price: number;
  priceLabel: string;
  category: string;
  hsCode?: string;
  emoji: string;
  details?: string;
  benefits: string[];
  unit: string;
  longDescription: string;
  origin: string;
  weight: string;
  shelfLife?: string;
  storageConditions?: string[];
  inStock?: boolean;
}