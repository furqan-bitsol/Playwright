import React from 'react';
import { ProductCard } from '../home/ProductCard';
import { Product } from '@/types/products';

interface ProductGridProps {
  products: Product[] | null;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <section
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
      aria-label='Product Grid'
    >
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
};
  