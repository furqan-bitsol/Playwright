'use client';

import { useEffect, useState } from 'react';

interface TimerProps {
  endTime: Date;
}

export const Timer = ({ endTime }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className='flex gap-4 text-black whitespace-nowrap min-w-60 w-[302px]'>
      <div className='min-h-[50px]'>
        <div className='text-xs font-medium'>Days</div>
        <div className='mt-1 text-3xl font-bold tracking-widest leading-none'>
          {String(timeLeft.days).padStart(2, '0')}
        </div>
      </div>
      <div className='flex self-end  min-h-4'>:</div>
      <div className='h-[50px]'>
        <div className='text-xs font-medium'>Hours</div>
        <div className='mt-1 text-3xl font-bold tracking-widest leading-none'>
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
      </div>
      <div className='flex self-end  min-h-4'>:</div>
      <div className='min-h-[50px]'>
        <div className='text-xs font-medium'>Minutes</div>
        <div className='mt-1 text-3xl font-bold tracking-widest leading-none'>
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
      </div>
      <div className='flex self-end  min-h-4'>:</div>
      <div className='h-[50px]'>
        <div className='text-xs font-medium'>Seconds</div>
        <div className='mt-1 text-3xl font-bold tracking-widest leading-none'>
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};
