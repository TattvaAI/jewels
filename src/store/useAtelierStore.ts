import { create } from "zustand";
import { Product, CartItem, StackSelection, ProductCategory } from "@/types";

interface AtelierState {
  // Currency
  currency: "INR" | "USD";
  setCurrency: (currency: "INR" | "USD") => void;

  // Cart
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, quantity?: number, color?: "Yellow Gold" | "White Gold / Silver" | "Rose Gold") => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  giftPackaging: boolean;
  setGiftPackaging: (enabled: boolean) => void;

  // Product Inspection Drawer
  inspectedProduct: Product | null;
  setInspectedProduct: (product: Product | null) => void;

  // Concierge Modal (Direct DM & WhatsApp booking)
  isConciergeOpen: boolean;
  conciergePrefill: string;
  openConcierge: (message?: string) => void;
  closeConcierge: () => void;

  // Stacking Studio
  stack: StackSelection;
  setStackLayer: (layer: "layer1" | "layer2" | "layer3", product: Product | null) => void;
  clearStack: () => void;

  // Catalog Filter & Sort
  categoryFilter: ProductCategory;
  setCategoryFilter: (cat: ProductCategory) => void;
  sortOrder: "curated" | "price-asc" | "price-desc";
  setSortOrder: (order: "curated" | "price-asc" | "price-desc") => void;
}

export const useAtelierStore = create<AtelierState>((set) => ({
  currency: "INR",
  setCurrency: (currency) => set({ currency }),

  cart: [],
  isCartOpen: false,
  setIsCartOpen: (open) => set({ isCartOpen: open }),
  
  addToCart: (product, quantity = 1, color = "Yellow Gold") => {
    set((state) => {
      const existing = state.cart.find((item) => item.product.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
          isCartOpen: true,
        };
      }
      return {
        cart: [...state.cart, { product, quantity, selectedColor: color }],
        isCartOpen: true,
      };
    });
  },

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: quantity <= 0
        ? state.cart.filter((item) => item.product.id !== productId)
        : state.cart.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
    })),

  clearCart: () => set({ cart: [] }),

  giftPackaging: false,
  setGiftPackaging: (enabled) => set({ giftPackaging: enabled }),

  inspectedProduct: null,
  setInspectedProduct: (product) => set({ inspectedProduct: product }),

  isConciergeOpen: false,
  conciergePrefill: "",
  openConcierge: (message = "") =>
    set({ isConciergeOpen: true, conciergePrefill: message }),
  closeConcierge: () => set({ isConciergeOpen: false, conciergePrefill: "" }),

  stack: {
    layer1: null,
    layer2: null,
    layer3: null,
  },
  setStackLayer: (layer, product) =>
    set((state) => ({
      stack: { ...state.stack, [layer]: product },
    })),
  clearStack: () =>
    set({
      stack: { layer1: null, layer2: null, layer3: null },
    }),

  categoryFilter: "all",
  setCategoryFilter: (categoryFilter) => set({ categoryFilter }),

  sortOrder: "curated",
  setSortOrder: (sortOrder) => set({ sortOrder }),
}));
