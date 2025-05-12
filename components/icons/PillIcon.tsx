import React from 'react';
import { IconProps } from '@/types';

export const PillIcon: React.FC<IconProps> = ({ width = 56, height = 56, color = 'black', className }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <rect x="12" y="28" width="32" height="16" rx="8" stroke={color} strokeWidth="2" />
        <rect x="28" y="12" width="16" height="32" rx="8" stroke={color} strokeWidth="2" />
        <line x1="16" y1="40" x2="40" y2="16" stroke={color} strokeWidth="2" />
    </svg>
); 