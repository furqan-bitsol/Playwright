import React from 'react';
import { IconProps } from '@/types';

export const PawIcon: React.FC<IconProps> = ({ width = 56, height = 56, color = 'black', className }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <ellipse cx="18" cy="22" rx="4" ry="6" stroke={color} strokeWidth="2" />
        <ellipse cx="38" cy="22" rx="4" ry="6" stroke={color} strokeWidth="2" />
        <ellipse cx="14" cy="34" rx="3" ry="4" stroke={color} strokeWidth="2" />
        <ellipse cx="42" cy="34" rx="3" ry="4" stroke={color} strokeWidth="2" />
        <ellipse cx="28" cy="36" rx="8" ry="6" stroke={color} strokeWidth="2" />
    </svg>
); 