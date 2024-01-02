import { create } from 'zustand';

interface CartStore {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  updatePlusQuantity: (productId: number) => void;
  updateMinusQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
}

interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
  promotion_price: number;
}

const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (product) => set((state) => ({ cartItems: [...state.cartItems, product] })),
  updatePlusQuantity: (productId: number) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
    updateMinusQuantity: (productId: number) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      ),
    })),
  removeFromCart: (productId: number) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== productId),
    })),
}));

export default useCartStore;
