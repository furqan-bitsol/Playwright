'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/products';
import { THUMBNAILS } from '@/mocks/products';

interface ProductGalleryProps {
  product: Product;
}
interface ThumbnailProps {
  src: string;
  alt: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={170} // Default width for thumbnails
    height={138} // Default height for thumbnails
    className='object-contain h-[138px]'
  />
);

export const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
  return (
    <div className='w-[64%] max-md:ml-0 max-md:w-full'>
      <div className='grow max-md:mt-10 max-md:max-w-full'>
        <div className='flex gap-5 md:h-[600px] flex-row-reverse max-md:flex-col justify-center items-center'>
          {/* Main Image Section */}
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={600}
            className='object-contain h-auto max-md:h-[300px]'
          />
          {/* Thumbnails Section for Desktop */}
          <aside className='w-[170px] h-[600px] max-md:hidden overflow-y-auto scrollbar-hide flex flex-col gap-4'>
            {THUMBNAILS.map((thumbnail, index) => (
              <Thumbnail key={index} src={thumbnail.src} alt={thumbnail.alt} />
            ))}
          </aside>
        </div>

        {/* Thumbnails Section for Mobile */}
        <aside className='hidden max-md:flex max-md:overflow-x-auto max-md:scrollbar-hide max-md:gap-4 max-md:mt-4'>
          {THUMBNAILS.map((thumbnail, index) => (
            <Thumbnail key={index} src={thumbnail.src} alt={thumbnail.alt} />
          ))}
        </aside>
      </div>
    </div>
  );
};
