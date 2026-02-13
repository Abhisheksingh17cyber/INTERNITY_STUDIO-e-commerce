export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: "polar" | "premium" | "classic" | "elyx";
  volume: string;
  abv: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  shipping: ShippingInfo;
  totalPrice: number;
  date: string;
}
