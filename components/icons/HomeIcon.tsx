import React from 'react';
import { IconProps } from '@/types';

export const HomeIcon: React.FC<IconProps> = ({ width = 56, height = 56, color = 'black', className }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M8 28L28 12L48 28" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 28V44H40V28" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <rect x="24" y="36" width="8" height="8" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
); 