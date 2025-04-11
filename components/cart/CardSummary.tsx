'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const CartSummary = () => {
  return (
    <div className='flex flex-wrap gap-10 items-start mt-20 text-base max-md:mt-10 max-md:max-w-full'>
      <div className='flex flex-wrap gap-4 items-end min-w-60 max-md:max-w-full'>
        <Input
          type='text'
          placeholder='Coupon Code'
          className='min-w-60 w-[300px]'
        />
        <Button variant='destructive' className='px-12'>
          Apply Coupon
        </Button>
      </div>
      <Card className='min-w-60 w-[470px] max-md:px-5 max-md:max-w-full'>
        <CardHeader>
          <h2 className='text-xl font-medium leading-snug'>Cart Total</h2>
        </CardHeader>
        <CardContent>
          <div className='flex items-start justify-between whitespace-nowrap'>
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <Separator className='my-4' />
          <div className='flex items-start justify-between whitespace-nowrap'>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <Separator className='my-4' />
          <div className='flex items-start justify-between whitespace-nowrap'>
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <Button variant='destructive' className='w-full mt-4'>
            Procees to checkout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
