import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice'; // Import wishlist reducer
import authReducer from './authSlice'; // Import auth reducer

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer, // Add wishlist reducer
    auth: authReducer, // Add auth reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
