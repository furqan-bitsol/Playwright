'use client';

import React from 'react';
import { CategoryCard } from './CategoryCard';
import { Slider } from '@/components/ui/slider';
import { CATEGORIES } from '@/mocks/categories';

/**
 * CategorySection Component
 * Displays categories in a slider format with navigation
 */
export const CategorySection: React.FC = () => {
  return (
    <section
      className='w-full mt-20 max-md:mt-10'
      aria-label='Browse by category'
    >
      <Slider
        cardWidth={170}
        gap={32}
        className='mt-16 pb-4 max-md:mt-10'
        aria-label='Category slider'
        title='Browse By Category'
        subtitle='Categories'
      >
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={`category-${category.name}`}
            Icon={category.Icon}
            name={category.name}
            className='flex-shrink-0 w-[170px]'
          />
        ))}
      </Slider>

      <hr
        className='mt-16 h-px border-t border-black opacity-30 w-full max-md:mt-10'
        aria-label='Separator'
      />
    </section>
  );
};
