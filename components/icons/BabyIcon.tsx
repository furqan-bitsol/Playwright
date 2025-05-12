import React from 'react';
import { IconProps } from '@/types';

export const BabyIcon: React.FC<IconProps> = ({ width = 56, height = 56, color = 'black', className }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle cx="28" cy="32" r="12" stroke={color} strokeWidth="2" />
        <circle cx="18" cy="24" r="4" stroke={color} strokeWidth="2" />
        <circle cx="38" cy="24" r="4" stroke={color} strokeWidth="2" />
        <ellipse cx="28" cy="36" rx="4" ry="2" stroke={color} strokeWidth="2" />
    </svg>
); 