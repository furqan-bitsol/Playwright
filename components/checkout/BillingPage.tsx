'use client';
import * as React from 'react';
import { BillingForm } from './BillingForm';
import { OrderSummary } from './OrderSummary';

export const BillingPage: React.FC = () => {
  return (
    <main className='px-32 py-10 max-md:px-5 max-sm:px-4 max-w-[1170px] mx-auto'>
      <nav
        aria-label='Breadcrumb'
        className='flex gap-3 items-center mb-10 text-sm opacity-50'
      >
        <span>Account</span>
        <div className='h-0 bg-black w-[13px]' aria-hidden='true' />
        <span>My Account</span>
        <div className='h-0 bg-black w-[13px]' aria-hidden='true' />
        <span>Product</span>
        <div className='h-0 bg-black w-[13px]' aria-hidden='true' />
        <span>View Cart</span>
        <div className='h-0 bg-black w-[13px]' aria-hidden='true' />
        <span aria-current='page'>CheckOut</span>
      </nav>
      <h1 className='mb-10 text-4xl font-medium tracking-widest'>
        Billing Details
      </h1>
      <div className='flex gap-44 max-md:flex-col'>
        <div className='flex-1'>
          <BillingForm />
        </div>
        <div className='flex-1'>
          <OrderSummary />
        </div>
      </div>
    </main>
  );
};

export default BillingPage;
