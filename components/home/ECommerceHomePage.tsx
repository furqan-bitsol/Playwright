'use client';
import React from 'react';
import { MainHeader } from './MainHeader';
import { Navigation } from './Navigation';
import { HeroSection } from './HeroSection';
import { Button } from './Button';
import { ProductCard } from './ProductCard';
import { CategoryCard } from './CategoryCard';
import { Timer } from './Timer';

export const ECommerceHomePage: React.FC = () => {
  return (
    <div className='flex overflow-hidden flex-wrap gap-36 content-start items-start bg-white'>
      <MainHeader />

      <div className='grow shrink min-w-60 w-[1440px] max-md:max-w-full'>
        <hr className='z-10 shrink-0 h-px bg-black border border-black border-solid opacity-30' />
      </div>

      <div className='flex gap-8 w-full px-16 max-md:px-5'>
        <Navigation />
        <div className='grow shrink w-0 h-96 border border-black border-solid' />
        <HeroSection />
      </div>

      {/* Flash Sales Section */}
      <section className='w-full px-16 max-md:px-5'>
        <div className='flex justify-between items-end mb-10'>
          <div>
            <div className='flex gap-4 items-center'>
              <div className='w-5 h-10 bg-red-500 rounded' />
              <span className='text-base font-semibold text-red-500'>
                Todays
              </span>
            </div>
            <h2 className='mt-6 text-4xl font-semibold tracking-widest'>
              Flash Sales
            </h2>
          </div>
          <Timer days={3} hours={23} minutes={19} seconds={56} />
        </div>

        <div className='flex overflow-x-auto gap-8 items-start'>
          <ProductCard
            image='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/588809589ffa0596f29be2fe0bc17a99982f7d41?placeholderIfAbsent=true'
            title='HAVIT HV-G92 Gamepad'
            price={120}
            originalPrice={160}
            rating={4}
            reviews={88}
            discount={40}
          />
          <ProductCard
            image='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/32e9a1600318286879ba42afbcf26b480ae071b0?placeholderIfAbsent=true'
            title='AK-900 Wired Keyboard'
            price={960}
            originalPrice={1160}
            rating={5}
            reviews={75}
            discount={35}
            showAddToCart
          />
          <ProductCard
            image='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/690018693f67fd8cc4949c739b0c81478431edfe?placeholderIfAbsent=true'
            title='IPS LCD Gaming Monitor'
            price={370}
            originalPrice={400}
            rating={4}
            reviews={99}
            discount={30}
          />
          <ProductCard
            image='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/d9422fa273d9c73fa03429a1516009cf254f5c07?placeholderIfAbsent=true'
            title='S-Series Comfort Chair'
            price={375}
            originalPrice={400}
            rating={5}
            reviews={99}
            discount={25}
          />
        </div>
      </section>

      <Button variant='primary' className='self-center'>
        View All Products
      </Button>

      <section className='w-full px-16 max-md:px-5'>
        <div className='flex justify-between items-end mb-10'>
          <div>
            <div className='flex gap-4 items-center'>
              <div className='w-5 h-10 bg-red-500 rounded' />
              <span className='text-base font-semibold text-red-500'>
                Categories
              </span>
            </div>
            <h2 className='mt-6 text-4xl font-semibold tracking-widest'>
              Browse By Category
            </h2>
          </div>
        </div>

        <div className='flex flex-wrap gap-8 items-start mt-16 text-base text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full'>
          <CategoryCard
            icon='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/025e77cb044d76ef43e424c3ffabe029229907f4?placeholderIfAbsent=true'
            name='Phones'
          />
          <CategoryCard
            icon='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/a3fd9fa4a0b42ed96c3f23a3b0554abaf003fee5?placeholderIfAbsent=true'
            name='Computers'
          />
          <CategoryCard
            icon='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/484480e8c80387ee700cd85019aae938e1fe3ec0?placeholderIfAbsent=true'
            name='SmartWatch'
          />
          <CategoryCard
            icon='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/7ddb7128c631dc0e8a542709722f938dbb02d454?placeholderIfAbsent=true'
            name='Camera'
            isActive
          />
          <CategoryCard
            icon='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/c84491b9de84bba8a1ad81cb92e3662c32408b47?placeholderIfAbsent=true'
            name='HeadPhones'
          />
          <CategoryCard
            icon='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/f2f0770eca40be0ccfda2e6478cfc903464b30f2?placeholderIfAbsent=true'
            name='Gaming'
          />
        </div>
      </section>

      <hr className='w-full border-t border-black border-opacity-30 my-16' />

      <section className='w-full px-16 max-md:px-5'>
        <div className='flex justify-between items-end mb-10'>
          <div>
            <div className='flex gap-4 items-center'>
              <div className='w-5 h-10 bg-red-500 rounded' />
              <span className='text-base font-semibold text-red-500'>
                This Month
              </span>
            </div>
            <h2 className='mt-6 text-4xl font-semibold tracking-widest'>
              Best Selling Products
            </h2>
          </div>
          <Button variant='primary'>View All</Button>
        </div>

        <div className='flex flex-wrap gap-8 items-start mt-16 max-md:mt-10'>
          <ProductCard
            image='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/e7432ac52b7277818e216f4cce703ac420b3cab8?placeholderIfAbsent=true'
            title='The north coat'
            price={260}
            originalPrice={360}
            rating={5}
            reviews={65}
          />
          <ProductCard
            image='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/a63f2121f90daf2ab08177b2c545287b6d96bcd8?placeholderIfAbsent=true'
            title='Gucci duffle bag'
            price={960}
            originalPrice={1160}
            rating={4}
            reviews={65}
          />
          <ProductCard
            image='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/cd8d81ae34c65d85c51a91e2c58adcef16f6fa28?placeholderIfAbsent=true'
            title='RGB liquid CPU Cooler'
            price={160}
            originalPrice={170}
            rating={4}
            reviews={65}
          />
          <ProductCard
            image='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/b998ed9d442aa7e214656e71b7a4a2a5ff3231d2?placeholderIfAbsent=true'
            title='Small BookSelf'
            price={360}
            rating={5}
            reviews={65}
          />
        </div>
      </section>
    </div>
  );
};

export default ECommerceHomePage;
