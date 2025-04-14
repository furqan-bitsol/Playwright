'use client';
import * as React from 'react';
import { BillingForm } from './BillingForm';
import { OrderSummary } from './OrderSummary';
import { useTranslation } from 'react-i18next';

export const BillingPage: React.FC = () => {
  const { t } = useTranslation('common'); // Use translation hook

  return (
    <main className='px-32 py-10 max-md:px-5 max-sm:px-4 max-w-[1170px] mx-auto'>
      {/* Breadcrumb */}
      <nav
        aria-label={t('breadcrumb.ariaLabel')}
        className='flex gap-3 items-center mb-10 text-sm opacity-50'
      >
        <span>{t('breadcrumb.account')}</span>
        <div className='h-0 bg-black w-[13px]' aria-hidden='true' />
        <span>{t('breadcrumb.myAccount')}</span>
        <div className='h-0 bg-black w-[13px]' aria-hidden='true' />
        <span>{t('breadcrumb.product')}</span>
        <div className='h-0 bg-black w-[13px]' aria-hidden='true' />
        <span>{t('breadcrumb.viewCart')}</span>
        <div className='h-0 bg-black w-[13px]' aria-hidden='true' />
        <span aria-current='page'>{t('breadcrumb.checkout')}</span>
      </nav>

      {/* Page Title */}
      <h1 className='mb-10 text-4xl font-medium tracking-widest'>
        {t('billing.page.title')}
      </h1>

      {/* Billing Form and Order Summary */}
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
