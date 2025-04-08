'use client';
import React from 'react';
import Image from 'next/image';

interface NavigationItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const navigationItems: NavigationItem[] = [
  { label: "Woman's Fashion", href: '/womens-fashion', hasDropdown: true },
  { label: "Men's Fashion", href: '/mens-fashion', hasDropdown: true },
  { label: 'Electronics', href: '/electronics' },
  { label: 'Home & Lifestyle', href: '/home-lifestyle' },
  { label: 'Medicine', href: '/medicine' },
  { label: 'Sports & Outdoor', href: '/sports-outdoor' },
  { label: "Baby's & Toys", href: '/babies-toys' },
  { label: 'Groceries & Pets', href: '/groceries-pets' },
  { label: 'Health & Beauty', href: '/health-beauty' },
];

export const Navigation: React.FC = () => {
  return (
    <nav className='flex flex-col gap-4 py-10 text-base'>
      {navigationItems.map((item, index) => (
        <div key={index} className='group relative'>
          <a
            href={item.href}
            className='flex items-center justify-between w-[220px] hover:text-red-500 transition-colors'
          >
            <span className='opacity-80'>{item.label}</span>
            {item.hasDropdown && (
              <Image
                src=''
                alt='Expand'
                width={24}
                height={24}
                className='w-6 h-6 opacity-60 group-hover:opacity-100'
              />
            )}
          </a>
          {item.hasDropdown && (
            <div className='hidden group-hover:block absolute left-full top-0 ml-2 bg-white shadow-lg rounded-lg p-4 min-w-[200px] z-10'>
              {/* Dropdown content would be dynamically populated based on category */}
              <div className='flex flex-col gap-2'>
                <a
                  href='#'
                  className='hover:text-red-500 transition-colors opacity-80'
                >
                  Subcategory 1
                </a>
                <a
                  href='#'
                  className='hover:text-red-500 transition-colors opacity-80'
                >
                  Subcategory 2
                </a>
                <a
                  href='#'
                  className='hover:text-red-500 transition-colors opacity-80'
                >
                  Subcategory 3
                </a>
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};
