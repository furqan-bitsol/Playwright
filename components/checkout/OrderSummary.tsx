'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useTranslation } from 'react-i18next';

export const OrderSummary: React.FC = () => {
  const { t } = useTranslation('common'); // Use translation hook
  const cartItems = useSelector((state: RootState) => state.cart.items); // Get cart items from Redux

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.subtotal, 0);

  return (
    <div className='flex flex-col gap-8'>
      {/* Cart Items */}
      <div className='flex flex-col gap-8'>
        {cartItems.map((item) => (
          <div className='flex gap-6 items-center' key={item._id}>
            <Image
              src={item.image}
              alt={item.title}
              width={54}
              height={54}
              className='object-contain'
            />
            <div className='flex flex-1 justify-between items-center'>
              <span className='text-base'>{item.title}</span>
              <span className='text-base'>${item.subtotal.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <span className='text-base'>{t('orderSummary.subtotal')}:</span>
          <span className='text-base'>${subtotal.toFixed(2)}</span>
        </div>
        <div className='border-b border-black opacity-40' />
        <div className='flex justify-between items-center'>
          <span className='text-base'>{t('orderSummary.shipping')}:</span>
          <span className='text-base'>{t('orderSummary.free')}</span>
        </div>
        <div className='border-b border-black opacity-40' />
        <div className='flex justify-between items-center'>
          <span className='text-base'>{t('orderSummary.total')}:</span>
          <span className='text-base'>${subtotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Options */}
      <div className='flex flex-col gap-4'>
        <RadioGroup defaultValue='cash'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
              <RadioGroupItem value='bank' id='bank' />
              <Label htmlFor='bank'>{t('orderSummary.payment.bank')}</Label>
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
            <Label htmlFor='cash'>{t('orderSummary.payment.cash')}</Label>
          </div>
        </RadioGroup>

        <Button
          variant='destructive'
          className='w-full px-12 py-4 text-base font-medium'
        >
          {t('orderSummary.placeOrderButton')}
        </Button>
      </div>
    </div>
  );
};
