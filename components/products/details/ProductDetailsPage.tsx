'use client';
import * as React from 'react';
import { ProductGallery } from './ProductGallery';
import { ProductInfo } from './ProductInfo';
import { Slider } from '@/components/ui/slider';
import { FLASH_SALE_PRODUCTS } from '@/mocks/products';
import { ProductCard } from '@/components/home/ProductCard';

export default function ProductDetailsPage() {
  return (
    <main className='flex flex-col self-center mt-20 w-full max-w-[1170px] mx-auto max-md:mt-10 max-md:max-w-full'>
      {/* Breadcrumbs */}

      <section className='mt-20 w-full max-md:mt-10 max-md:max-w-full'>
        <div className='flex gap-5 max-md:flex-col'>
          <ProductGallery />
          <ProductInfo />
        </div>
      </section>

      {/* use the Slider component as the one used in home page, along with only the heading Related Items */}
      <Slider
        cardWidth={270}
        gap={32}
        className='mt-10 pb-4'
        aria-label='Flash sale products'
        title='Related Item'
        subtitle="Today's"
      >
        {FLASH_SALE_PRODUCTS.map((product) => (
          <ProductCard key={`flash-sale-${product.title}`} {...product} />
        ))}
      </Slider>
    </main>
  );
}
