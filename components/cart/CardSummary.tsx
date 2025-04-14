'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { getCouponSchema } from '@/lib/forms';
import { useTranslation } from 'react-i18next';

interface CartSummaryProps {
  subtotal: number;
  totalQuantity: number;
  onCheckout: () => void; // Callback for checkout action
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  totalQuantity,
  onCheckout,
}) => {
  const [discount, setDiscount] = useState(0); // State to track discount
  const [finalTotal, setFinalTotal] = useState(subtotal); // State to track final total
  const { t } = useTranslation('common');

  const form = useForm({
    resolver: zodResolver(getCouponSchema(t)),
    defaultValues: {
      couponCode: '',
    },
  });

  const applyCoupon = (data: { couponCode?: string }) => {
    if (data.couponCode === '123ABC') {
      const discountAmount = subtotal * 0.25; // 25% discount
      setDiscount(discountAmount);
      setFinalTotal(subtotal - discountAmount);
    } else {
      setDiscount(0);
      setFinalTotal(subtotal);
    }
  };

  return (
    <div className='flex flex-wrap justify-between gap-10 items-start mt-20 text-base max-md:mt-10 max-md:max-w-full'>
      {/* Coupon Code Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(applyCoupon)}
          className='flex flex-wrap gap-4 items-end min-w-60 max-md:max-w-full'
        >
          <FormField
            control={form.control}
            name='couponCode'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <Input
                    {...field}
                    type='text'
                    placeholder='Coupon Code'
                    className='min-w-60 w-[300px] max-sm:w-full'
                  />
                </FormControl>
                <FormMessage className='text-sm text-red-500 mt-1' />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            variant='destructive'
            className='px-12 max-sm:w-full'
          >
            Apply Coupon
          </Button>
        </form>
      </Form>

      {/* Cart Total Card */}
      <Card className='min-w-60 w-[470px] max-sm:w-full max-md:px-5 max-md:max-w-full'>
        <CardHeader>
          <h2 className='text-xl font-medium leading-snug'>Cart Total</h2>
        </CardHeader>
        <CardContent>
          <div className='flex items-start justify-between whitespace-nowrap'>
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Separator className='my-4' />
          <div className='flex items-start justify-between whitespace-nowrap'>
            <span>Total Items:</span>
            <span>{totalQuantity}</span>
          </div>
          <Separator className='my-4' />
          {discount > 0 && (
            <>
              <div className='flex items-start justify-between whitespace-nowrap'>
                <span>Discount:</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <Separator className='my-4' />
            </>
          )}
          <div className='flex items-start justify-between whitespace-nowrap'>
            <span>Total:</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
          <Button
            variant='destructive'
            className='w-full mt-4'
            onClick={onCheckout}
          >
            Proceed to Checkout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
