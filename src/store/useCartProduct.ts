import { create } from 'zustand';
import type { Product } from './useProductsStore';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

const useCartProduct = create<CartState>((set) => ({
  cartItems: [],

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find(item => item.id === product.id);
      if (existingItem) {
        return {
          cartItems: state.cartItems.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
      };
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter(item => item.id !== productId),
    })),
}));

export default useCartProduct;
