'use client';
import dynamic from 'next/dynamic';

const ProductDetails = dynamic(
  () => import('@/components/products/details/ProductDetailsPage'),
  {
    ssr: false, // Disable server-side rendering
  }
);

export default ProductDetails;
