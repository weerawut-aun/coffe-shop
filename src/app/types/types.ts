export type ProductType = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  title: string;
  catSlug: string;
  coffee?: {
    roast: number;
    ingredient: string[];
    types: string;
    description: string[];
  }[];
  goods?: { type: string[]; description: string[]; features: string[] }[];
};

export type ProductTypes = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  catSlug: string;
  roast?: string;
  level?: number;
  ingredient?: string[];
  type?: string;
  origins?: string[];
  brewing?: string[];
  merch?: string[];
};

export type CoffeeType = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  roast: string;
  level: number;
  ingredient: string[];
  type: string;
  origins?: string[];
};

export type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItemType[];
  status: string;
  createdAt: Date;
  intent_id?: string;
};

export type CartItemType = {
  id: string;
  name: string;
  imageUrl?: string;
  price: number;
  totalPrice: number;
  quantity: number;
};

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
};

export type ActionTypes = {
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
  increaseQuantity: (item: CartItemType) => void;
  decreaseQuantity: (item: CartItemType) => void;
  reset: () => void;
};

export type Location = {
  id: number;
  name: string;
  addess: string;
  city: string;
  state?: string;
  office_hours: string;
  phone: string;
  imgUrl: string;
};
