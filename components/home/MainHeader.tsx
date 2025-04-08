'use client';
import React from 'react';
import Image from 'next/image';

export const MainHeader: React.FC = () => {
  return (
    <header className='flex justify-between items-center px-16 py-10 w-full max-md:px-5 max-md:max-w-full'>
      <div className='flex gap-12 justify-between items-center max-w-full'>
        <div className='flex gap-4 justify-between text-2xl font-bold tracking-wider'>
          <Image
            src='./next.svg'
            alt='Exclusive Logo'
            width={24}
            height={24}
            className='shrink-0 my-auto aspect-square w-[24px]'
          />
          <div>Exclusive</div>
        </div>

        <nav className='flex gap-12 justify-between items-center text-base max-md:hidden'>
          <a href='/' className='font-medium'>
            Home
          </a>
          <a href='/contact' className='opacity-60'>
            Contact
          </a>
          <a href='/about' className='opacity-60'>
            About
          </a>
          <a href='/sign-up' className='opacity-60'>
            Sign Up
          </a>
        </nav>
      </div>

      <div className='flex gap-6 justify-between items-center'>
        <div className='flex items-center px-5 py-2 bg-neutral-100 rounded'>
          <input
            type='text'
            placeholder='What are you looking for?'
            className='w-[200px] bg-transparent outline-none text-sm'
          />
          <button className='ml-4' aria-label='Search'>
            <Image
              src='./next.svg'
              alt='Search'
              width={24}
              height={24}
              className='w-6 aspect-square'
            />
          </button>
        </div>

        <div className='flex gap-4'>
          <button aria-label='Wishlist'>
            <Image
              src='./next.svg'
              alt='Wishlist'
              width={32}
              height={32}
              className='w-8 aspect-square'
            />
          </button>
          <button aria-label='Cart'>
            <Image
              src='./next.svg'
              alt='Cart'
              width={32}
              height={32}
              className='w-8 aspect-square'
            />
          </button>
          <button aria-label='Profile'>
            <Image
              src='./next.svg'
              alt='Profile'
              width={32}
              height={32}
              className='w-8 aspect-square'
            />
          </button>
        </div>
      </div>
    </header>
  );
};
