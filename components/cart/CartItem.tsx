'use client';
import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface CartItemProps {
  image: string;
  name: string;
  price: string;
  quantity: string;
  subtotal: string;
}

export const CartItem = ({
  image,
  name,
  price,
  quantity,
  subtotal,
}: CartItemProps) => {
  return (
    <Card className='mt-10'>
      <CardContent className='overflow-hidden py-6 pr-16 pl-8 w-full max-md:px-5 max-md:max-w-full'>
        <div className='flex gap-5 max-md:flex-col'>
          <div className='w-1/5 max-md:ml-0 max-md:w-full'>
            <div className='flex grow gap-5 text-base text-black max-md:mt-10'>
              <Image
                src={image}
                alt={name}
                width={64}
                height={64}
                className='object-contain overflow-hidden shrink-0'
              />
              <span className='my-auto'>{name}</span>
            </div>
          </div>
          <div className='ml-5 w-4/5 max-md:ml-0 max-md:w-full'>
            <div className='flex flex-wrap grow gap-5 justify-between items-center self-stretch my-auto text-base text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full'>
              <span className='self-stretch my-auto'>{price}</span>
              <div className='object-contain overflow-hidden shrink-0 self-stretch rounded aspect-square w-[75px]'>
                {quantity}
              </div>
              <span className='self-stretch my-auto'>{subtotal}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
