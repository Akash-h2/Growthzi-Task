import { create } from 'zustand';


const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (program) => set((state) => ({
    cartItems: [...state.cartItems, program],
  })),
  removeFromCart: (index) => set((state) => ({
    cartItems: state.cartItems.filter((_, i) => i !== index),
  })),
}));

export default useCartStore;
