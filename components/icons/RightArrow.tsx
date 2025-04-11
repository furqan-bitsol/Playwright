import { cn } from '@/lib/utils';

interface RightArrowProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

/**
 * RightArrow Component
 * A reusable right arrow icon component
 */
export const RightArrow: React.FC<RightArrowProps> = ({
  width = 24,
  height = 24,
  className,
  color = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={cn('w-full h-full', className)}
    style={{ minWidth: width, minHeight: height }}
  >
    <path
      d='M3.5 12H20M20 12L13 5M20 12L13 19'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
