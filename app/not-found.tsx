'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export default function NotFound() {
  const { t } = useTranslation('common');
  const [breadcrumbItems, setBreadcrumbItems] = useState([
    { label: t('notFound.breadcrumb.home'), href: '/' },
    { label: t('notFound.breadcrumb.error') },
  ]);

  useEffect(() => {
    // Get the previous route from sessionStorage
    const previousRoute = sessionStorage.getItem('previousRoute') ?? '/';
    const segments = previousRoute.split('/').filter(Boolean);
    const lastSegment = segments.pop();
    let previousLabel = '';
    if (previousRoute === '/') {
      previousLabel = t('notFound.breadcrumb.home');
    } else if (lastSegment) {
      previousLabel =
        lastSegment.replace(/-/g, ' ').charAt(0).toUpperCase() +
        lastSegment.slice(1);
    }

    // Update breadcrumb items based on the previous route
    setBreadcrumbItems([
      { label: t('notFound.breadcrumb.home'), href: '/' },
      ...(previousRoute !== '/'
        ? [{ label: previousLabel || '', href: previousRoute }]
        : []),
      { label: t('notFound.breadcrumb.error') },
    ]);

    // Clean up the stored route
    return () => {
      sessionStorage.removeItem('previousRoute');
    };
  }, [t]);

  return (
    <main className='container mx-auto px-4 py-8 md:py-16 flex flex-col items-center'>
      <Breadcrumb items={breadcrumbItems} className='w-full max-w-7xl' />

      <section className='flex flex-col items-center text-center px-4 w-full my-16 md:my-[140px]'>
        <h2 className='text-8xl font-medium leading-none text-black tracking-[3.3px] max-md:max-w-full max-md:text-4xl'>
          {t('notFound.title')}
        </h2>
        <p className='mt-10 text-base text-black max-md:max-w-full'>
          {t('notFound.description')}
        </p>

        <Link
          href='/'
          className='self-center px-12 py-4 mt-20 text-base font-medium bg-red-500 rounded text-neutral-50 max-md:px-5 max-md:mt-10 hover:bg-red-600 transition-colors'
        >
          {t('notFound.backButton')}
        </Link>
      </section>
    </main>
  );
}
