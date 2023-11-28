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
