import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Category } from '@/mocks/categories';

interface CategoryCardProps extends Omit<Category, 'Icon'> {
  Icon: Category['Icon'];
  className?: string;
  link: string; // New prop for the link
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  Icon,
  name,
  className,
  link,
}) => {
  return (
    <Link
      href={link} // Use the link prop for navigation
      className={cn(
        'flex flex-col items-center justify-center min-w-[170px] h-[145px] rounded border border-black/30 transition-colors hover:bg-red-500 hover:text-white group',
        className
      )}
      aria-label={`View products in ${name}`} // Accessibility improvement
    >
      <Icon
        className='w-14 h-14 mb-4 transition-colors group-hover:text-white'
        color='currentColor'
      />
      <span className='text-base font-normal'>{name}</span>
    </Link>
  );
};
