'use client';

import React from 'react';
import { ProductCard } from './ProductCard';
import { Timer } from './Timer';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { FLASH_SALE_PRODUCTS } from '@/mocks/products';

/**
 * FlashSales Component
 * Displays flash sale products with countdown timer and navigation arrows
 */
export const FlashSales: React.FC = () => {
  return (
    <section className='mt-36 w-full max-md:mt-10' aria-label='Flash sales'>
      <Slider
        cardWidth={270}
        gap={32}
        className='mt-10 pb-4'
        aria-label='Flash sale products'
        title={
          <div className='flex items-center gap-8'>
            <span>Flash Sales</span>
            <Timer endTime={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)} />
          </div>
        }
        subtitle="Today's"
      >
        {FLASH_SALE_PRODUCTS.map((product) => (
          <ProductCard key={`flash-sale-${product.title}`} {...product} />
        ))}
      </Slider>

      <div className='flex justify-center w-full'>
        <Button
          className='px-12 py-4 mt-16 text-base h-14 font-medium bg-red-500 rounded text-neutral-50 hover:bg-red-600 transition-colors max-md:px-5 max-md:mt-10'
          aria-label='View all flash sale products'
        >
          View All Products
        </Button>
      </div>

      <hr
        className='mt-16 h-px border-t border-black opacity-30 w-full max-md:mt-10'
        aria-label='Separator'
      />
    </section>
  );
};
