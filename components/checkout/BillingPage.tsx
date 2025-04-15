'use client';
import * as React from 'react';
import { BillingForm } from './BillingForm';
import { OrderSummary } from './OrderSummary';
import { useTranslation } from 'react-i18next';
import MainLayout from '../layouts/MainLayout';

export const BillingPage: React.FC = () => {
  const { t } = useTranslation('common'); // Use translation hook

  return (
    <MainLayout>
      {/* Page Title */}
      <h1 className='mb-10 text-4xl font-medium tracking-widest w-full text-start'>
        {t('billing.page.title')}
      </h1>

      {/* Billing Form and Order Summary */}
      <div className='w-full flex gap-44 max-md:flex-col'>
        <div className='flex-1'>
          <BillingForm />
        </div>
        <div className='flex-1'>
          <OrderSummary />
        </div>
      </div>
    </MainLayout>
  );
};

export default BillingPage;
