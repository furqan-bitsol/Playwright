'use client';
import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  discount?: number;
  showAddToCart?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  originalPrice,
  rating,
  reviews,
  discount,
  showAddToCart = false,
}) => {
  return (
    <div className='relative flex flex-col w-[270px] group'>
      {/* Product Image Container */}
      <div className='relative aspect-square bg-neutral-100 rounded-md overflow-hidden'>
        <Image src={image} alt={title} fill className='object-contain' />

        {/* Discount Badge */}
        {discount && (
          <div className='absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded'>
            -{discount}%
          </div>
        )}

        {/* Action Buttons */}
        <div className='absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
          <button
            className='p-2 bg-white rounded-full shadow-md hover:bg-gray-50'
            aria-label='Add to wishlist'
          >
            <Image
              src='./next.svg'
              alt='Heart'
              width={20}
              height={20}
              className='w-5 h-5'
            />
          </button>
          <button
            className='p-2 bg-white rounded-full shadow-md hover:bg-gray-50'
            aria-label='Quick view'
          >
            <Image
              src='./next.svg'
              alt='Eye'
              width={20}
              height={20}
              className='w-5 h-5'
            />
          </button>
        </div>

        {/* Add to Cart Button */}
        {showAddToCart && (
          <div className='absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-80 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'>
            Add To Cart
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className='mt-4 space-y-2'>
        <h3 className='font-medium text-base'>{title}</h3>
        <div className='flex gap-3 items-center'>
          <span className='text-red-500 font-medium'>${price}</span>
          {originalPrice && (
            <span className='text-black text-opacity-50 line-through'>
              ${originalPrice}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className='flex items-center gap-2'>
          <div className='flex'>
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src={index < rating ? './next.svg' : './next.svg'}
                alt='Star'
                width={16}
                height={16}
                className='w-4 h-4'
              />
            ))}
          </div>
          <span className='text-black text-opacity-50'>({reviews})</span>
        </div>
      </div>
    </div>
  );
};
