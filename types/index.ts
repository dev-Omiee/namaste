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
  benefits: string[];
  unit: string;
  longDescription: string;
  origin: string;
  weight: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ShippingDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;  // add this line
}