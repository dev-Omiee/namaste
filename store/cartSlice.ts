import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "@/types";  // ← fix import

// ── State ────────────────────────────────────────────────────────────────────

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

// ── Helpers ──────────────────────────────────────────────────────────────────

const findItem = (items: CartItem[], id: string): CartItem | undefined =>
  items.find((item) => item.id === id);

const removeItem = (items: CartItem[], id: string): CartItem[] =>
  items.filter((item) => item.id !== id);

// ── Slice ────────────────────────────────────────────────────────────────────

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const { id } = action.payload;
      const existing = findItem(state.items, id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.items = removeItem(state.items, action.payload);
    },

    incrementQuantity(state, action: PayloadAction<string>) {
      const item = findItem(state.items, action.payload);
      if (item) item.quantity += 1;
    },

    decrementQuantity(state, action: PayloadAction<string>) {
      const item = findItem(state.items, action.payload);
      if (!item) return;
      if (item.quantity <= 1) {
        state.items = removeItem(state.items, action.payload);
      } else {
        item.quantity -= 1;
      }
    },

    // ← add updateQuantity so cart/page.tsx import works
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const item = findItem(state.items, action.payload.id);
      if (!item) return;
      if (action.payload.quantity <= 0) {
        state.items = removeItem(state.items, action.payload.id);
      } else {
        item.quantity = action.payload.quantity;
      }
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

// ── Actions ──────────────────────────────────────────────────────────────────

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

// ── Selectors ─────────────────────────────────────────────────────────────────

type RootCartState = { cart: CartState };

export const selectCartItems = (state: RootCartState): CartItem[] =>
  state.cart.items;

export const selectCartCount = (state: RootCartState): number =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotal = (state: RootCartState): number =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const selectIsInCart =
  (id: string) =>
  (state: RootCartState): boolean =>
    state.cart.items.some((item) => item.id === id);

export const selectItemQuantity =
  (id: string) =>
  (state: RootCartState): number =>
    findItem(state.cart.items, id)?.quantity ?? 0;

// ── Reducer ──────────────────────────────────────────────────────────────────

export default cartSlice.reducer;