import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '@/types/cart';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add an item to the cart
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },

    // Remove an item from the cart by its _id
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },

    // Update the quantity of an item in the cart
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string | number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item._id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        item.subtotal = item.price * action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
