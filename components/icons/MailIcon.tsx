import React from 'react';

interface MailIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const MailIcon: React.FC<MailIconProps> = ({
  width = 22,
  height = 16,
  color = 'white',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 22 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M1 1L11 8L21 1M1 15H21V1H1V15Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
