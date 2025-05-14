'use client';

import React from 'react';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

import { useParams, useSearchParams } from 'next/navigation';
import MainLayout from '@/components/layouts/MainLayout';
import { useAppSelector } from '@/hooks/useRedux';

const ProductsPage: React.FC = () => {
  const { t } = useTranslation('common'); // Translation hook
  const searchParams = useSearchParams(); // Get query parameters

  const type = useParams()?.type ?? ""; // Extract the "type" from the dynamic route
  const category = searchParams?.get('category'); // Extract "categoryId" from query params
  const subCategory = searchParams?.get('subCategory'); // Extract "subcategoryId" from query params
  const { products, loading, error } = useAppSelector((state) => state.products);



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
    <MainLayout>
      <header className='mb-8'>
        <h1 className='text-4xl font-bold'>{pageTitle}</h1>
      </header>

      {/* Product Grid */}
      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ProductGrid products={products} />
      )}

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
    </MainLayout>
  );
};

export default ProductsPage;
