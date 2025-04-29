"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchProductsFromFirebase } from '@/firebase/productsService';
import { Product } from '@/types/products';

interface ProductsContextValue {
  products: Product[] | null;
  loading: boolean;
  error: string | null;
}

const ProductsContext = createContext<ProductsContextValue | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await fetchProductsFromFirebase();
        setProducts(fetchedProducts);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsContextValue => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};