'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * CountdownTimer Component
 * Displays a countdown timer with days, hours, minutes, and seconds
 */
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='flex gap-4 justify-center items-center text-center'>
      <TimeUnit value={timeLeft.days} label='Days' />
      <span className='text-4xl font-bold text-gray-800'>:</span>
      <TimeUnit value={timeLeft.hours} label='Hours' padStart />
      <span className='text-4xl font-bold text-gray-800'>:</span>
      <TimeUnit value={timeLeft.minutes} label='Minutes' padStart />
      <span className='text-4xl font-bold text-gray-800'>:</span>
      <TimeUnit value={timeLeft.seconds} label='Seconds' padStart />
    </div>
  );
}

/**
 * TimeUnit Component
 * Displays a single unit of time with its label
 */
interface TimeUnitProps {
  value: number;
  label: string;
  padStart?: boolean;
}

function TimeUnit({ value, label, padStart = false }: TimeUnitProps) {
  const displayValue = padStart ? value.toString().padStart(2, '0') : value;

  return (
    <div className='flex flex-col'>
      <span className='text-4xl font-bold text-gray-800'>{displayValue}</span>
      <span className='text-sm text-gray-600'>{label}</span>
    </div>
  );
}

/**
 * CategoriesHeroSection Component
 * Displays a hero section with background image and countdown timer
 */
export default function CategoriesHeroSection() {
  return (
    <section
      className='relative w-full mt-36 max-md:mt-10'
      aria-label='Special offer section'
    >
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/b04b916725c457e4aa688d3591a6abac9e73a4ff'
          alt='Hero background'
          fill
          className='object-cover'
          priority
          sizes='100vw'
        />
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/50' />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-[1170px] mx-auto px-4 py-20 text-center'>
        <h2 className='text-4xl font-bold text-white mb-4'>Special Edition</h2>
        <p className='text-xl text-gray-100 mb-8'>
          Get our special edition products before they&apos;re gone!
        </p>

        <div className='mb-8'>
          <CountdownTimer />
        </div>

        <button
          className='bg-white text-black px-8 py-4 rounded-full text-lg font-semibold 
                     hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 
                     focus:ring-white focus:ring-offset-2 focus:ring-offset-black'
          aria-label='Shop special edition products'
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}

function HeroImage() {
  return (
    <section
      className='w-full flex justify-center items-center'
      aria-label='Hero banner section'
    >
      <div className='w-full max-w-[1170px] relative'>
        <Image
          src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/b04b916725c457e4aa688d3591a6abac9e73a4ff?placeholderIfAbsent=true'
          alt='Hero banner'
          className='object-contain mt-36 w-full aspect-[2.32] max-md:mt-10 max-md:max-w-full'
          width={1170}
          height={504} // Calculated based on the aspect ratio 2.32
          priority // Load this image immediately as it's above the fold
        />
      </div>
    </section>
  );
}
