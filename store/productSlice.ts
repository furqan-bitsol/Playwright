import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/products';
import { db } from '../firebase/firebaseConfig';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  DocumentData,
  QueryDocumentSnapshot,
} from 'firebase/firestore';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

// Async thunks for Firebase CRUD
export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const products: Product[] = querySnapshot.docs.map(
        (doc: QueryDocumentSnapshot<DocumentData>) =>
          ({ id: doc.id, ...doc.data() }) as Product
      );
      return products;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk<Product, Omit<Product, 'id'>>(
  'products/addProduct',
  async (product, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, 'products'), product);
      return { ...product, id: docRef.id };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk<Product, Product>(
  'products/updateProduct',
  async (product, { rejectWithValue }) => {
    try {
      const { id, ...rest } = product;
      await updateDoc(doc(db, 'products', String(id)), rest);
      return product;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk<string, string | number>(
  'products/deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, 'products', String(id)));
      return String(id);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.products = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(
        addProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.products.push(action.payload);
        }
      )
      .addCase(
        updateProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          const idx = state.products.findIndex(
            (prod) => prod.id === action.payload.id
          );
          if (idx !== -1) state.products[idx] = action.payload;
        }
      )
      .addCase(
        deleteProduct.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.products = state.products.filter(
            (prod) => prod.id !== action.payload
          );
        }
      );
  },
});

export default productSlice.reducer;
