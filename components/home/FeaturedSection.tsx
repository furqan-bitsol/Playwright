'use client';

import React from 'react';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { FEATURED_PRODUCTS } from '@/mocks/products';
import { MAX_DISPLAY_PRODUCTS } from '@/constants';

/**
 * FeaturedSection Component
 */
export const FeaturedSection = () => {
  const displayProducts = FEATURED_PRODUCTS.slice(0, MAX_DISPLAY_PRODUCTS);

  return (
    <section
      className='w-full mt-36 max-md:mt-10'
      aria-label='Featured products'
    >
      <SectionHeader title='Explore Our Products' subtitle='Our Products' />

      {/* Products Grid */}
      <div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 mt-16 pb-4 max-md:mt-10'
        role='grid'
        aria-label='Featured products grid'
      >
        {displayProducts.map((product) => (
          <ProductCard key={`featured-${product.title}`} {...product} />
        ))}
      </div>

      <div className='flex justify-center w-full'>
        <Button
          className='px-12 h-14 py-4 mt-16 text-base font-medium bg-red-500 rounded text-neutral-50 hover:bg-red-600 transition-colors max-md:px-5 max-md:mt-10'
          aria-label='View all featured products'
        >
          View All Products
        </Button>
      </div>
    </section>
  );
};
