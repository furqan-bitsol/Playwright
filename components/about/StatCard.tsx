import React from 'react';

interface StatCardProps {
  Icon: React.ComponentType<{ className?: string }>;
  value: string;
  description: string;
  isHighlighted?: boolean;
  className?: string;
}

/**
 * StatCard Component
 * A reusable card component for displaying statistics with an icon
 */
export const StatCard: React.FC<StatCardProps> = ({
  Icon,
  value,
  description,
  isHighlighted = false,
  className = '',
}) => {
  const baseStyles =
    'rounded flex min-w-[270px] max-w-[370px] flex-col overflow-hidden';
  const highlightedStyles = isHighlighted
    ? 'shadow-[0px_2px_10px_2px_rgba(0,0,0,0.20)] bg-[#DB4444] text-white px-6 md:px-[35px] py-6 md:py-8'
    : 'border border-[rgba(0,0,0,0.3)] border-solid text-black px-5 md:px-7 py-6 md:py-[30px]';

  return (
    <div
      className={`${baseStyles} ${highlightedStyles} ${className} h-[230px]`}
    >
      <div className='flex flex-col items-center'>
        <Icon
          className={`w-16 h-16 md:w-20 md:h-20 ${
            isHighlighted ? 'text-white' : 'text-black'
          }`}
        />
        <div className='flex flex-col items-center mt-4 md:mt-6'>
          <div className='text-2xl md:text-[32px] font-bold leading-none tracking-[1.28px]'>
            {value}
          </div>
          <div className='text-sm md:text-base font-normal mt-2 md:mt-3 text-center'>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
