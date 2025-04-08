'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface SlideContent {
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

const slides: SlideContent[] = [
  {
    title: 'iPhone 14 Series',
    subtitle: 'Up to 10% off Voucher',
    image: '',
    category: 'phones',
  },
  // Additional slides would be added here
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className='relative flex-1 min-h-[600px] bg-black'>
      <div className='relative h-full'>
        {/* Main Content */}
        <div className='absolute inset-0 flex items-center'>
          <div className='flex flex-col gap-5 ml-16 max-w-[500px] text-white z-10'>
            <div className='flex gap-4 items-center'>
              <div className='flex items-center'>
                <Image
                  src='./next.svg'
                  alt='Apple Logo'
                  width={40}
                  height={40}
                  className='w-10 h-10'
                />
              </div>
              <span className='text-base'>{slides[currentSlide].category}</span>
            </div>

            <h1 className='text-5xl font-semibold leading-tight'>
              {slides[currentSlide].title}
            </h1>
            <p className='text-base'>{slides[currentSlide].subtitle}</p>

            <button className='flex items-center gap-2 mt-4 text-base font-medium'>
              <span className='underline'>Shop Now</span>
              <Image
                src='./next.svg'
                alt='Arrow Right'
                width={24}
                height={24}
                className='w-6 h-6'
              />
            </button>
          </div>

          {/* Hero Image */}
          <div className='absolute right-0 top-0 h-full w-2/3'>
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>

        {/* Navigation Dots */}
        <div className='absolute bottom-8 left-16 flex gap-2'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Side Navigation */}
        <div className='absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4'>
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                prev > 0 ? prev - 1 : slides.length - 1
              )
            }
            className='p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors'
            aria-label='Previous slide'
          >
            <Image
              src='./next.svg'
              alt='Previous'
              width={24}
              height={24}
              className='w-6 h-6'
            />
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                prev < slides.length - 1 ? prev + 1 : 0
              )
            }
            className='p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors'
            aria-label='Next slide'
          >
            <Image
              src='./next.svg'
              alt='Next'
              width={24}
              height={24}
              className='w-6 h-6'
            />
          </button>
        </div>
      </div>
    </section>
  );
};
