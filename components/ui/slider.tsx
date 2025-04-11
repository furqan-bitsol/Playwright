import React, { useRef } from 'react';
import { Button } from './button';
import { RightArrow, LeftArrow } from '@/components/icons';
import { cn } from '@/lib/utils';
import { SectionHeader } from './section-header';

interface SliderProps {
  children: React.ReactNode;
  cardWidth: number;
  gap?: number;
  className?: string;
  containerClassName?: string;
  showArrows?: boolean;
  'aria-label'?: string;
  title?: string | React.ReactNode;
  subtitle?: string;
}

/**
 * Slider Component
 * A reusable horizontal slider with navigation arrows at the right end of header
 */
export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      children,
      cardWidth,
      gap = 32,
      className,
      containerClassName,
      showArrows = true,
      'aria-label': ariaLabel,
      title,
      subtitle,
    },
    ref
  ) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleSlide = (direction: 'prev' | 'next') => {
      if (!sliderRef.current) return;

      const scrollAmount = cardWidth + gap;
      const currentScroll = sliderRef.current.scrollLeft;
      const newScroll =
        direction === 'next'
          ? currentScroll + scrollAmount
          : currentScroll - scrollAmount;

      sliderRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      });
    };

    const navigationButtons = showArrows && (
      <div className='flex gap-2 items-end'>
        <Button
          variant='secondary'
          size='icon'
          className='w-12 h-12 hover:opacity-80 transition-opacity rounded-full'
          onClick={() => handleSlide('prev')}
          aria-label='Previous slide'
        >
          <LeftArrow width={24} height={24} />
        </Button>
        <Button
          variant='secondary'
          size='icon'
          className='w-12 h-12 hover:opacity-80 transition-opacity rounded-full'
          onClick={() => handleSlide('next')}
          aria-label='Next slide'
        >
          <RightArrow width={24} height={24} />
        </Button>
      </div>
    );

    return (
      <div className={cn('relative', containerClassName)}>
        {title && subtitle && (
          <SectionHeader
            title={title}
            subtitle={subtitle}
            rightContent={navigationButtons}
          />
        )}

        <div
          ref={sliderRef}
          className={cn(
            'flex overflow-x-auto scrollbar-hide scroll-smooth',
            className
          )}
          style={{ gap: `${gap}px` }}
          role='region'
          aria-label={ariaLabel}
        >
          {children}
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';
