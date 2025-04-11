'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CardSummary';

export const Cart = () => {
  return (
    <main className='flex flex-col mx-auto self-center mt-20 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full'>
      <nav
        className='flex gap-3 items-center self-start text-sm text-black whitespace-nowrap'
        aria-label='breadcrumb'
      >
        <Link href='#' className='self-stretch my-auto opacity-50'>
          Home
        </Link>
        <span className='self-stretch my-auto'>Cart</span>
      </nav>

      <section className='mt-20 w-full max-md:mt-10 max-md:max-w-full'>
        <div className='w-full max-md:max-w-full'>
          <div className='w-full max-md:max-w-full'>
            <Card>
              <CardContent className='px-10 py-6 w-full text-base text-black max-md:px-5 max-md:py-6'>
                <div className='flex gap-5 max-md:flex-col'>
                  <div className='w-3/12 max-md:ml-0 max-md:w-full'>
                    <h2 className='font-medium'>Product</h2>
                  </div>
                  <div className='ml-5 w-3/12 max-md:ml-0 max-md:w-full'>
                    <h2 className='font-medium'>Price</h2>
                  </div>
                  <div className='ml-5 w-3/12 max-md:ml-0 max-md:w-full'>
                    <h2 className='font-medium'>Quantity</h2>
                  </div>
                  <div className='ml-5 w-3/12 max-md:ml-0 max-md:w-full'>
                    <h2 className='font-medium'>Subtotal</h2>
                  </div>
                </div>
              </CardContent>
            </Card>

            <CartItem
              image='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/a305240f496ee42d1775862bbd213e45634bac40?placeholderIfAbsent=true'
              name='LCD Monitor'
              price='$650'
              quantity='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/b2dee77752d84632c5b852911443ef2436ea5870?placeholderIfAbsent=true'
              subtotal='$650'
            />

            <CartItem
              image='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/b536f09376acdd9133ad31a529ebb920174cc41c?placeholderIfAbsent=true'
              name='H1 Gamepad'
              price='$550'
              quantity='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/1356a228a4d7d0a7f8b2d31a04742f9cbc5e21cb?placeholderIfAbsent=true'
              subtotal='$1100'
            />
          </div>

          <div className='flex flex-wrap items-start gap-4 mt-6 text-base font-medium text-black max-md:max-w-full'>
            <Button variant='outline' className='px-12'>
              Return To Shop
            </Button>
            <Button variant='outline' className='px-12'>
              Update Cart
            </Button>
          </div>
        </div>

        <CartSummary />
      </section>
    </main>
  );
};

export default Cart;
