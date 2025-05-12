'use client';

import React, { useEffect } from 'react';
import { CategoryCard } from './CategoryCard';
import { Slider } from '@/components/ui/slider';
import { ROUTE_LINKS } from '@/constants/routes';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { fetchCategories } from '@/store/categorySlice';
import { CATEGORIES as ICON_CATEGORIES } from '@/mocks/categories';

/**
 * CategorySection Component
 * Displays categories in a slider format with navigation
 */
export const CategorySection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories, loading, error } = useAppSelector((state) => state.categories);

  useEffect(() => {
    if (categories.length === 0 && !loading) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length, loading]);

  // Map icon string or name to icon component using the mock CATEGORIES array
  const getIconComponent = (category: { icon?: string; name: string }) => {
    // Try to match by icon string first, then by name
    const found = ICON_CATEGORIES.find(
      (mockCat) =>
        (category.icon && mockCat.Icon?.displayName === category.icon) ||
        mockCat.name.toLowerCase() === category.name.toLowerCase()
    );
    return found?.Icon ?? ICON_CATEGORIES[0].Icon;
  };

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
        {loading ? (
          <div className="w-full flex justify-center items-center h-32">Loading...</div>
        ) : error ? (
          <div className="w-full flex justify-center items-center h-32 text-red-500">{error}</div>
        ) : (
          categories.map((category) => (
            <CategoryCard
              key={`category-${category.id}`}
              Icon={getIconComponent(category)}
              name={category.name}
              className='flex-shrink-0 w-[170px]'
              link={`${ROUTE_LINKS.allProducts}?category=${encodeURIComponent(category.name.toLowerCase())}`}
            />
          ))
        )}
      </Slider>

      <hr
        className='mt-16 h-px border-t border-black opacity-30 w-full max-md:mt-10'
        aria-label='Separator'
      />
    </section>
  );
};
