import React from 'react';

interface EyeIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

/**
 * EyeIcon Component
 * A reusable SVG component for the "Quick view" icon
 */
export const EyeIcon: React.FC<EyeIconProps> = ({
  width = 20,
  height = 20,
  className = '',
  color = 'currentColor',
}) => {
  return (
    <svg
      data-testid='eye-icon'
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M10 4.37C3.75 4.37 1.25 10 1.25 10C1.25 10 3.75 15.63 10 15.63C16.25 15.63 18.75 10 18.75 10C18.75 10 16.25 4.37 10 4.37Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
