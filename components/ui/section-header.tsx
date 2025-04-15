import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title?: React.ReactNode;
  subtitle?: string;
  rightContent?: React.ReactNode;
  className?: string;
  isWishlist?: boolean;
}

/**
 * SectionHeader Component
 * A reusable header component for sections with title, subtitle and optional right content
 */
export const SectionHeader = React.forwardRef<
  HTMLDivElement,
  SectionHeaderProps
>(({ title, subtitle, rightContent, className, isWishlist = false }, ref) => {
  return (
    <header
      ref={ref}
      className={cn('flex flex-wrap items-center justify-between', className)}
    >
      {/* Left section with title and subtitle */}
      {!isWishlist && (
        <div className='flex flex-col'>
          <div className='flex gap-4 items-center'>
            <div className='w-5 h-10 bg-red-500 rounded' />
            <h2 className='text-base font-semibold text-red-500'>{subtitle}</h2>
          </div>
          <div className='flex items-center gap-8 mt-5'>
            <h3 className='text-4xl font-semibold tracking-widest'>{title}</h3>
          </div>
        </div>
      )}
      {isWishlist && (
        <div className='flex flex-col items-center justify-center'>
          {subtitle && (
            <div className='flex gap-4 items-center'>
              <div className='w-5 h-10 bg-red-500 rounded' />
              <h2 className='text-xl font-semibold text-black'>{subtitle}</h2>
            </div>
          )}
          {title && (
            <h3 className='text-xl text-black font-semibold tracking-widest'>
              {title}
            </h3>
          )}
        </div>
      )}

      {/* Right section for navigation or other content */}
      {rightContent && <div className='flex items-end'>{rightContent}</div>}
    </header>
  );
});

SectionHeader.displayName = 'SectionHeader';
