'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { CartSummary } from '@/components/cart/CardSummary';
import { useRouter } from 'next/navigation';
import { ROUTE_LINKS } from '@/constants/routes';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { CART_ITEMS } from '@/mocks/products';
import { CartItem } from '@/types/cart';

export const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(CART_ITEMS);

  const [subtotal, setSubtotal] = useState(1750); // Initial subtotal
  const [totalQuantity, setTotalQuantity] = useState(3); // Initial total quantity

  const updateQuantity = (index: number, delta: number) => {
    setCartItems((prevItems) => {
      // Use the latest state for updates
      return prevItems.map((item, i) => {
        if (i === index) {
          const newQuantity = Math.max(1, item.quantity + delta); // Ensure quantity is at least 1
          return {
            ...item,
            quantity: newQuantity,
            subtotal: item.price * newQuantity, // Update subtotal
          };
        }
        return item;
      });
    });
  };

  const updateCartSummary = () => {
    const newSubtotal = cartItems.reduce((acc, item) => acc + item.subtotal, 0);
    const newTotalQuantity = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setSubtotal(newSubtotal);
    setTotalQuantity(newTotalQuantity);
  };

  const router = useRouter();

  return (
    <main className='flex flex-col mx-auto self-center mt-20 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full'>
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Cart Section */}
      <section className='mt-20 w-full max-md:mt-10 max-md:max-w-full'>
        <Card>
          <CardContent className='px-10 py-6 w-full text-base text-black max-md:px-5 max-md:py-6'>
            {/* Responsive Table Wrapper */}
            <div className='overflow-x-auto'>
              <table className='w-full text-left border-collapse'>
                <thead>
                  <tr className='border-b'>
                    <th className='py-2 px-4 w-3/12 max-md:w-full'>Product</th>
                    <th className='py-2 px-4 w-3/12 max-md:w-full'>Price</th>
                    <th className='py-2 px-4 w-3/12 max-md:w-full'>Quantity</th>
                    <th className='py-2 px-4 w-3/12 max-md:w-full'>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index} className='border-b'>
                      <td className='py-4 px-4 flex items-center gap-4 max-md:flex-col max-md:items-start'>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                          className='object-contain'
                        />
                        <span>{item.name}</span>
                      </td>
                      <td className='py-4 px-4'>${item.price.toFixed(2)}</td>
                      <td className='py-4 px-4'>
                        <div className='flex items-center gap-2'>
                          <Button
                            variant='outline'
                            size='icon'
                            onClick={() => updateQuantity(index, -1)} // Decrease quantity
                            aria-label={`Decrease quantity for ${item.name}`}
                          >
                            -
                          </Button>
                          <span>{item.quantity}</span>
                          <Button
                            variant='outline'
                            size='icon'
                            onClick={() => updateQuantity(index, 1)} // Increase quantity
                            aria-label={`Increase quantity for ${item.name}`}
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td className='py-4 px-4'>${item.subtotal.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Cart Actions */}
        <div className='flex flex-wrap items-start justify-between gap-4 mt-6 text-base font-medium text-black max-md:max-w-full'>
          <Button
            variant='outline'
            className='px-12 max-sm:w-full'
            onClick={() => {
              router.push(ROUTE_LINKS.home);
            }}
          >
            Return To Shop
          </Button>
          <Button
            variant='outline'
            className='px-12 max-sm:w-full'
            onClick={updateCartSummary} // Update cart summary on click
          >
            Update Cart
          </Button>
        </div>

        {/* Cart Summary */}
        <CartSummary
          subtotal={subtotal}
          totalQuantity={totalQuantity}
          onCheckout={() => console.log('Proceeding to checkout...')}
        />
      </section>
    </main>
  );
};

export default Cart;
