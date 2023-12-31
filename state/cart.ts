import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const cartStore = create(
  persist(
    (set) => ({
      cart: [],
      addProduct: (product) =>
        set((state) => {
          cart: [...state.cart, product];
        }),
      resetCart: () => set({ cart: [] }),
    }),
    {
      name: "cart", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
