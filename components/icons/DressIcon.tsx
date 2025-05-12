import React from 'react';
import { IconProps } from '@/types';

export const DressIcon: React.FC<IconProps> = ({ width = 56, height = 56, color = 'black', className }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M28 8L32 20H24L28 8Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 20L16 48H40L32 20" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 32H36" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
); 