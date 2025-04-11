'use client';
import React from 'react';
import Image from 'next/image';
import { HeartIcon } from '../icons';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  discount?: number;
  showAddToCart?: boolean;
}

/**
 * ProductCard Component
 * Displays product information in a card format
 */
export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  originalPrice,
  rating,
  reviewCount,
  discount,
  showAddToCart = false,
}) => {
  return (
    <div className='relative flex flex-col min-w-[270px] group'>
      {/* Product Image Container */}
      <div className='relative aspect-square bg-neutral-100 rounded-md overflow-hidden'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-contain p-5'
          sizes='(max-width: 768px) 100vw, 270px'
        />

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
            <HeartIcon className='w-5 h-5' />
          </button>
          <button
            className='p-2 bg-white rounded-full shadow-md hover:bg-gray-50'
            aria-label='Quick view'
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10 4.37C3.75 4.37 1.25 10 1.25 10C1.25 10 3.75 15.63 10 15.63C16.25 15.63 18.75 10 18.75 10C18.75 10 16.25 4.37 10 4.37Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
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
              <svg
                key={index}
                className={cn('w-4 h-4', {
                  'text-yellow-400': index < rating,
                  'text-gray-300': index >= rating,
                })}
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
            ))}
          </div>
          <span className='text-black text-opacity-50'>({reviewCount})</span>
        </div>
      </div>
    </div>
  );
};
