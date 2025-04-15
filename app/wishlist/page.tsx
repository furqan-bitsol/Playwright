'use client';
import { ProductCard } from '@/components/home/ProductCard';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { PRODUCTS } from '@/mocks/products';

import React from 'react';

const WishList = () => {
  return (
    <>
      <Slider
        cardWidth={270}
        gap={30}
        className='mt-16 pb-4 max-md:mt-10'
        aria-label='Best selling products slider'
        showArrows={false} // Disable navigation arrows
        title='WishList (4)'
        isWishlist={true}
        rightContent={
          <Button variant='outline' className='text-base text-black h-14'>
            Move All to Bag
          </Button>
        }
      >
        {PRODUCTS.map((product) => {
          if (!product.discount) return null; // Skip if not best selling
          return (
            <ProductCard key={`best-selling-${product.title}`} {...product} />
          );
        })}
      </Slider>
      <Slider
        cardWidth={270}
        gap={30}
        className='mt-16 pb-4 max-md:mt-10'
        aria-label='Best selling products slider'
        showArrows={false} // Disable navigation arrows
        subtitle='Just For You'
        isWishlist={true}
        rightContent={
          <Button variant='outline' className='text-base text-black h-14'>
            See All
          </Button>
        }
      >
        {PRODUCTS.map((product) => {
          if (!product.discount) return null; // Skip if not best selling
          return (
            <ProductCard key={`best-selling-${product.title}`} {...product} />
          );
        })}
      </Slider>
    </>
  );
};

export default WishList;
