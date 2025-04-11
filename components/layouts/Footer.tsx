'use client';
import * as React from 'react';
import Image from 'next/image';
import {
  SendIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/icons';

export const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col justify-end px-4 md:px-16 pt-12 md:pt-20 pb-6 bg-black w-full'>
      {/* Main Footer Content */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 max-w-7xl mx-auto w-full'>
        {/* Subscribe Section */}
        <section className='flex flex-col text-neutral-50 w-full sm:max-w-[217px]'>
          <div className='space-y-6'>
            <div>
              <h2 className='text-2xl font-bold tracking-wider'>Exclusive</h2>
              <h3 id='subscribe-heading' className='mt-6 text-xl font-medium'>
                Subscribe
              </h3>
            </div>
            <p className='text-base'>Get 10% off your first order</p>
          </div>
          <form className='flex items-center w-full mt-4 text-base rounded border border-neutral-50'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 min-w-0 px-4 py-3 bg-transparent border-none outline-none text-white placeholder:text-white/40 text-sm'
              required
            />
            <button
              type='submit'
              aria-label='Subscribe to newsletter'
              className='px-4 py-3 hover:opacity-80 transition-opacity'
            >
              <SendIcon className='w-5 h-5' color='#FAFAFA' />
            </button>
          </form>
        </section>

        {/* Support Section */}
        <section className='text-neutral-50 w-full sm:max-w-[175px]'>
          <h3 id='support-heading' className='text-xl font-medium mb-6'>
            Support
          </h3>
          <address className='not-italic text-base space-y-4'>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <a
              href='mailto:exclusive@gmail.com'
              className='block hover:underline'
            >
              exclusive@gmail.com
            </a>
            <a href='tel:+8801588888999' className='block hover:underline'>
              +88015-88888-9999
            </a>
          </address>
        </section>

        {/* Account Navigation */}
        <nav className='text-neutral-50' aria-labelledby='account-heading'>
          <h3 id='account-heading' className='text-xl font-medium leading-snug'>
            Account
          </h3>
          <ul className='mt-6 text-base space-y-4'>
            <li>
              <a href='/account' className='hover:underline'>
                My Account
              </a>
            </li>
            <li>
              <a href='/login' className='hover:underline'>
                Login / Register
              </a>
            </li>
            <li>
              <a href='/cart' className='hover:underline'>
                Cart
              </a>
            </li>
            <li>
              <a href='/wishlist' className='hover:underline'>
                Wishlist
              </a>
            </li>
            <li>
              <a href='/shop' className='hover:underline'>
                Shop
              </a>
            </li>
          </ul>
        </nav>

        {/* Quick Links Navigation */}
        <nav className='text-neutral-50' aria-labelledby='quick-links-heading'>
          <h3
            id='quick-links-heading'
            className='text-xl font-medium leading-snug'
          >
            Quick Link
          </h3>
          <ul className='mt-6 text-base space-y-4'>
            <li>
              <a href='/privacy' className='hover:underline'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='/terms' className='hover:underline'>
                Terms Of Use
              </a>
            </li>
            <li>
              <a href='/faq' className='hover:underline'>
                FAQ
              </a>
            </li>
            <li>
              <a href='/contact' className='hover:underline'>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Download App Section */}
        <section className='flex flex-col col-span-1 sm:col-span-2 md:col-span-1'>
          <h3 className='text-xl font-medium text-neutral-50 mb-6'>
            Download App
          </h3>
          <div className='space-y-2'>
            <p className='text-xs font-medium text-neutral-50/70'>
              Save $3 with App New User Only
            </p>
            <div className='flex gap-2 items-start'>
              <Image
                src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/6a7e67535b208c49f4c930e06561f28ca2a38f7d'
                alt='QR Code'
                width={80}
                height={80}
                className='object-contain'
              />
              <div className='flex flex-col gap-1'>
                <a href='#app-store' className='block'>
                  <Image
                    src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/9e0bfaba9f3e64215f2d7d787d6c0a54bf901813'
                    alt='Download on App Store'
                    width={110}
                    height={40}
                    className='object-contain'
                  />
                </a>
                <a href='#google-play' className='block mt-1'>
                  <Image
                    src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/a209e0f2e6ab562ea875f8670ae129263877a789'
                    alt='Get it on Google Play'
                    width={110}
                    height={40}
                    className='object-contain'
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className='flex gap-6 mt-6'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Follow us on Facebook'
              className='hover:opacity-80 transition-opacity'
            >
              <FacebookIcon className='w-6 h-6' />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Follow us on Twitter'
              className='hover:opacity-80 transition-opacity'
            >
              <TwitterIcon className='w-6 h-6' />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Follow us on Instagram'
              className='hover:opacity-80 transition-opacity'
            >
              <InstagramIcon className='w-6 h-6' />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Follow us on LinkedIn'
              className='hover:opacity-80 transition-opacity'
            >
              <LinkedInIcon className='w-6 h-6' />
            </a>
          </div>
        </section>
      </div>

      {/* Copyright Section */}
      <div className='mt-12 md:mt-16 pt-4 border-t border-white/40 text-white'>
        <p className='text-center text-sm md:text-base'>
          © Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};
