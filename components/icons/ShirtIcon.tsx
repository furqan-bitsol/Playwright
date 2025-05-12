import React from 'react';
import { IconProps } from '@/types';

export const ShirtIcon: React.FC<IconProps> = ({ width = 56, height = 56, color = 'black', className }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M16 12L28 8L40 12L36 20H20L16 12Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 20V44H36V20" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 12V44H20" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="M40 12V44H36" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
); 