import React from 'react';
import { cn } from '@/lib/utils';
import { Category } from '@/mocks/categories';

interface CategoryCardProps extends Omit<Category, 'Icon'> {
  Icon: Category['Icon'];
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  Icon,
  name,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center min-w-[170px] h-[145px] rounded border border-black/30 transition-colors hover:bg-red-500 hover:text-white group',
        className
      )}
    >
      <Icon
        className='w-14 h-14 mb-4 transition-colors group-hover:text-white'
        color='currentColor'
      />
      <span className='text-base font-normal'>{name}</span>
    </div>
  );
};
