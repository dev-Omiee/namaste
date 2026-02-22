export interface Product {
  src: string;
  content: string;
  summary: string;
  id: string;
  price: number;
  priceLabel: string;
  category: string;
  emoji: string;
  details?: string;
  benefits?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
