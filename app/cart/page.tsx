'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { CartSummary } from '@/components/cart/CardSummary';
import { useRouter } from 'next/navigation';
import { ROUTE_LINKS } from '@/constants/routes';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { updateQuantity as updateCartQuantity } from '@/store/cartSlice';
import MainLayout from '@/components/layouts/MainLayout';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items); // Get cart items from Redux

  const [subtotal, setSubtotal] = useState(0); // Subtotal state
  const [totalQuantity, setTotalQuantity] = useState(0); // Total quantity state

  // Update cart summary whenever cart items change
  useEffect(() => {
    const newSubtotal = cartItems.reduce((acc, item) => acc + item.subtotal, 0);
    const newTotalQuantity = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setSubtotal(newSubtotal);
    setTotalQuantity(newTotalQuantity);
  }, [cartItems]);

  const updateQuantity = (id: string | number, delta: number) => {
    const item = cartItems.find((item) => item._id === id);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + delta); // Ensure quantity is at least 1
      dispatch(updateCartQuantity({ id, quantity: newQuantity })); // Dispatch Redux action to update quantity
    }
  };

  const router = useRouter();

  return (
    <MainLayout>
      {/* Cart Section */}
      <section className='w-full max-md:max-w-full'>
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
                  {cartItems.map((item) => (
                    <tr key={item._id} className='border-b'>
                      <td className='py-4 px-4 flex items-center gap-4 max-md:flex-col max-md:items-start'>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={50}
                          height={50}
                          className='object-contain'
                        />
                        <span>{item.title}</span>
                      </td>
                      <td className='py-4 px-4'>${item.price.toFixed(2)}</td>
                      <td className='py-4 px-4'>
                        <div className='flex items-center gap-2'>
                          <Button
                            variant='outline'
                            size='icon'
                            onClick={() => updateQuantity(item._id, -1)} // Decrease quantity
                            aria-label={`Decrease quantity for ${item.title}`}
                          >
                            -
                          </Button>
                          <span>{item.quantity}</span>
                          <Button
                            variant='outline'
                            size='icon'
                            onClick={() => updateQuantity(item._id, 1)} // Increase quantity
                            aria-label={`Increase quantity for ${item.title}`}
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
            onClick={() => {}} // Update cart summary on click
          >
            Update Cart
          </Button>
        </div>

        {/* Cart Summary */}
        <CartSummary
          subtotal={subtotal}
          totalQuantity={totalQuantity}
          onCheckout={() => router.push(ROUTE_LINKS.checkout)} // Navigate to checkout
        />
      </section>
    </MainLayout>
  );
};

export default Cart;
