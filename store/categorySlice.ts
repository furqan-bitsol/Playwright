import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../types';
import { db } from '../firebase/firebaseConfig';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  loading: true,
  error: null,
};

// Async thunks for Firebase CRUD
export const fetchCategories = createAsyncThunk<Category[]>(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      // Fetch from Next.js API route
      const response = await fetch('/api/categories');
      if (!response.ok) throw new Error('Failed to fetch categories');
      const categories: Category[] = await response.json();
      return categories;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCategory = createAsyncThunk<Category, Omit<Category, 'id'>>(
  'categories/addCategory',
  async (category, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, 'categories'), category);
      return { ...category, id: docRef.id };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCategory = createAsyncThunk<Category, Category>(
  'categories/updateCategory',
  async (category, { rejectWithValue }) => {
    try {
      const { id, ...rest } = category;
      await updateDoc(doc(db, 'categories', id), rest);
      return category;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCategory = createAsyncThunk<string, string>(
  'categories/deleteCategory',
  async (id, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, 'categories', id));
      return id;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.categories = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(
        addCategory.fulfilled,
        (state, action: PayloadAction<Category>) => {
          state.categories.push(action.payload);
        }
      )
      .addCase(
        updateCategory.fulfilled,
        (state, action: PayloadAction<Category>) => {
          const idx = state.categories.findIndex(
            (cat) => cat.id === action.payload.id
          );
          if (idx !== -1) state.categories[idx] = action.payload;
        }
      )
      .addCase(
        deleteCategory.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.categories = state.categories.filter(
            (cat) => cat.id !== action.payload
          );
        }
      );
  },
});

export default categorySlice.reducer;
