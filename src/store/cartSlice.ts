import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/products';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Omit<Product, 'quantity'>>) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.product.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ product: newItem, quantity: 1 });
      }

      state.totalQuantity++;
      state.totalAmount += newItem.price;
    },

    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.product.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.product.id !== id);
        } else {
          existingItem.quantity--;
        }
        state.totalQuantity--;
        state.totalAmount -= existingItem.product.price;
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
