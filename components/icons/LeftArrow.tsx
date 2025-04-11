import { cn } from '@/lib/utils';

interface LeftArrowProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

/**
 * LeftArrow Component
 * A reusable left arrow icon component
 */
export const LeftArrow: React.FC<LeftArrowProps> = ({
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
      d='M11 5L4 12L11 19M4 12H20'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
