import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice'; // Import wishlist reducer

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer, // Add wishlist reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
