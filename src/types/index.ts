export interface Product {
  id: string;
  src: string;
  content: string;
  summary: string;
  price: number;
  unit?: string;
  inStock?: boolean;
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
  country: string;
}
