'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heart, Minus, Plus } from 'lucide-react';

export function ProductInfo() {
  const [quantity, setQuantity] = useState(2);
  const [selectedSize, setSelectedSize] = useState('M'); // State to track selected size

  return (
    <div className='ml-5 w-[36%] max-md:ml-0 max-md:w-full'>
      <Card className='flex flex-col items-start w-full max-md:mt-10 p-6'>
        <h2 className='text-2xl font-semibold tracking-wider leading-none text-black'>
          Havic HV G-92 Gamepad
        </h2>

        <div className='flex gap-4 items-start mt-4 text-sm'>
          <div className='flex gap-2 items-start text-black'>
            <img
              src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/55500910f7fda67e937673122aa77ab99e4599d2?placeholderIfAbsent=true'
              alt='Product rating'
              className='object-contain shrink-0 aspect-[5] w-[100px]'
            />
            <span className='opacity-50'>(150 Reviews)</span>
          </div>
          <div className='flex gap-4 items-center text-green-500'>
            <Separator orientation='vertical' className='h-4' />
            <span className='self-stretch my-auto opacity-60'>In Stock</span>
          </div>
        </div>

        <div className='mt-4 text-2xl tracking-wider leading-none text-black'>
          $192.00
        </div>

        <p className='mt-6 text-sm leading-5 text-black'>
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>

        <Separator className='my-6' />

        <div className='flex gap-6 items-start'>
          <span className='text-xl tracking-wide leading-none text-black'>
            Colours:
          </span>
          <Button
            variant='outline'
            className='w-5 h-5 p-0 rounded-full bg-red-400 hover:bg-red-500'
            aria-label='Select red color'
          />
        </div>

        <div className='flex gap-6 items-center mt-6 whitespace-nowrap'>
          <span className='text-xl tracking-wide leading-none text-black'>
            Size:
          </span>
          <div className='flex gap-4 flex-wrap'>
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <Button
                key={size}
                variant={size === selectedSize ? 'default' : 'outline'}
                className={`w-8 h-8 p-0 ${
                  size === selectedSize ? 'bg-red-500 hover:bg-red-600' : ''
                }`}
                onClick={() => setSelectedSize(size)} // Update selected size on click
                aria-label={`Select size ${size}`}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        <div className='flex gap-4 self-stretch mt-6 w-full'>
          <div className='flex items-center gap-2'>
            <Button
              variant='outline'
              size='icon'
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              aria-label='Decrease quantity'
            >
              <Minus className='h-4 w-4' />
            </Button>
            <span className='w-20 text-center'>{quantity}</span>
            <Button
              variant='outline'
              size='icon'
              onClick={() => setQuantity(quantity + 1)}
              aria-label='Increase quantity'
            >
              <Plus className='h-4 w-4' />
            </Button>
          </div>
          <Button className='bg-red-500 hover:bg-red-600'>Buy Now</Button>
          <Button variant='outline' size='icon'>
            <Heart className='h-4 w-4' />
          </Button>
        </div>

        <Card className='mt-10 w-full p-6'>
          <div className='flex gap-4 items-center'>
            <img
              src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/44ee474a183708b9d84b0ac691e5ff61db67c0af?placeholderIfAbsent=true'
              alt='Delivery icon'
              className='w-10 h-10'
            />
            <div>
              <h3 className='text-base font-medium'>Free Delivery</h3>
              <Button
                variant='link'
                className='h-auto p-0 text-xs leading-5 w-full overflow-hidden text-ellipsis text-wrap'
              >
                Enter your postal code for Delivery Availability
              </Button>
            </div>
          </div>
          <Separator className='my-4' />
          <div className='flex gap-4 items-center'>
            <img
              src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/4941b1229d658d5a77faa3f7f6de33375cf5bf05?placeholderIfAbsent=true'
              alt='Return policy icon'
              className='w-10 h-10'
            />
            <div>
              <h3 className='text-base font-medium'>Return Delivery</h3>
              <p className='text-xs leading-5'>
                Free 30 Days Delivery Returns.{' '}
                <Button variant='link' className='h-auto p-0 text-xs'>
                  Details
                </Button>
              </p>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
}
