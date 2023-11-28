import { ActionTypes, CartType } from "@/app/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const INTIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist<CartType & ActionTypes>(
    (set, get) => ({
      products: INTIAL_STATE.products,
      totalItems: INTIAL_STATE.totalItems,
      totalPrice: INTIAL_STATE.totalPrice,

      addToCart(item) {
        const products = get().products;
        const productInState = products.find(
          (product) => product.id === item.id
        );
        if (productInState) {
          const updateProduct = products.map((product) =>
            product.id === productInState.id
              ? {
                  ...item,
                  quantity: item.quantity + product.quantity,
                  price: item.price + product.price,
                  totalPrice: product.price + item.price,
                }
              : item
          );

          set((state) => ({
            products: updateProduct,
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.totalPrice,
          }));
        } else {
          set((state) => ({
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.totalPrice,
          }));
        }
      },

      removeFromCart(item) {
        set((state) => ({
          products: state.products.filter((product) => product.id !== item.id),
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - item.price,
        }));
      },
      increaseQuantity(item) {
        const products = get().products;

        const productInState = products.find(
          (product) => product.id === item.id
        );
        if (productInState) {
          const increaseProduct = products.map((product) =>
            product.id === productInState.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : product
          );

          set((state) => ({
            products: increaseProduct,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + item.price,
          }));
        } else {
          set((state) => ({
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.totalPrice,
          }));
        }
      },
      decreaseQuantity(item) {
        const products = get().products;
        const productInState = products.find(
          (product) => product.id === item.id
        );

        if (productInState) {
          const updateProduct = products.map((product) =>
            product.id === productInState.id
              ? {
                  ...item,
                  quantity: item.quantity === 0 ? 0 : item.quantity - 1,
                }
              : product
          );

          set((state) => ({
            products: updateProduct,
            totalItems: item.quantity === 0 ? 0 : state.totalItems - 1,
            totalPrice: item.quantity === 0 ? 0 : state.totalPrice - item.price,
          }));
        }
      },
      reset: () => {
        set(INTIAL_STATE);
      },
    }),
    { name: "cart", skipHydration: true }
  )
);
