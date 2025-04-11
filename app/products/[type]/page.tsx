'use client';

import React from 'react';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { getProductsByType } from '@/utils/products';
import { useParams, useSearchParams } from 'next/navigation';
import { BEST_SELLING_PRODUCTS } from '@/mocks/products';

const ProductsPage: React.FC = () => {
  const { t } = useTranslation('common'); // Translation hook
  const params = useParams(); // Get dynamic route params
  const searchParams = useSearchParams(); // Get query parameters

  const { type } = params; // Extract the "type" from the dynamic route
  const category = searchParams.get('category'); // Extract "categoryId" from query params
  const subCategory = searchParams.get('subCategory'); // Extract "subcategoryId" from query params

  // Determine the page title based on the type and query params
  const pageTitle =
    type === 'all'
      ? category || subCategory
        ? t('products.allFor', {
            name: (subCategory ?? category)?.split('-').join(' '),
          })
        : t('products.all')
      : t('products.type', { type: (type as string).split('-').join(' ') });

  return (
    <main className='w-full max-w-[1170px] mx-auto px-4 py-10'>
      <header className='mb-8'>
        <h1 className='text-4xl font-bold'>{pageTitle}</h1>
      </header>

      {/* Product Grid */}
      <ProductGrid products={BEST_SELLING_PRODUCTS} />

      {/* Back to Home Button */}
      <div className='mt-10 flex justify-center'>
        <Button
          onClick={() => (window.location.href = '/')}
          className='px-8 py-4 bg-red-500 text-white rounded hover:bg-red-600'
          aria-label={t('breadcrumb.home')}
        >
          {t('breadcrumb.home')}
        </Button>
      </div>
    </main>
  );
};

export default ProductsPage;
