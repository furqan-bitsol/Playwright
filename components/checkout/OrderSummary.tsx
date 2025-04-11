'use client';
import * as React from 'react';
import Image from 'next/image';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';

export const OrderSummary: React.FC = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-8'>
        <div className='flex gap-6 items-center'>
          <Image
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/4eb0893db4be46a5af1d7e4165592909ed996b1f'
            alt='LCD Monitor'
            width={54}
            height={54}
            className='object-contain'
          />
          <div className='flex flex-1 justify-between items-center'>
            <span className='text-base'>LCD Monitor</span>
            <span className='text-base'>$650</span>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <Image
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/781f86d344d66e4bb05db7b549f3e059fce1d194'
            alt='H1 Gamepad'
            width={54}
            height={54}
            className='object-contain'
          />
          <div className='flex flex-1 justify-between items-center'>
            <span className='text-base'>H1 Gamepad</span>
            <span className='text-base'>$1100</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <span className='text-base'>Subtotal:</span>
          <span className='text-base'>$1750</span>
        </div>
        <div className='border-b border-black opacity-40' />
        <div className='flex justify-between items-center'>
          <span className='text-base'>Shipping:</span>
          <span className='text-base'>Free</span>
        </div>
        <div className='border-b border-black opacity-40' />
        <div className='flex justify-between items-center'>
          <span className='text-base'>Total:</span>
          <span className='text-base'>$1750</span>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <RadioGroup defaultValue='cash'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
              <RadioGroupItem value='bank' id='bank' />
              <Label htmlFor='bank'>Bank</Label>
            </div>
            <div className='flex gap-2 items-center'>
              <Image
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/7e4c0b65a93ab054c747be4e5711f0cb4f6ffd9a'
                alt='Bkash'
                width={42}
                height={28}
              />
              <Image
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/9e59eb44b1d87082c44df14064defa4aeebe6e58'
                alt='Visa'
                width={42}
                height={28}
              />
              <Image
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/c33e39a16a5fb92fd51b3352a78849410252478b'
                alt='Mastercard'
                width={42}
                height={28}
              />
              <Image
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/5afb52b113bd98d494aadd65756c76da7aba9250'
                alt='Nagad'
                width={42}
                height={28}
              />
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            <RadioGroupItem value='cash' id='cash' />
            <Label htmlFor='cash'>Cash on delivery</Label>
          </div>
        </RadioGroup>

        <div className='flex gap-4'>
          <Input
            type='text'
            placeholder='Coupon Code'
            className='flex-1 px-6 py-4 text-base rounded border border-black border-solid opacity-50'
          />
          <Button
            variant='destructive'
            className='px-12 py-4 text-base font-medium'
          >
            Apply Coupon
          </Button>
        </div>
        <Button
          variant='destructive'
          className='w-full px-12 py-4 text-base font-medium'
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};
