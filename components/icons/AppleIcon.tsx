import React from 'react';
import { IconProps } from '@/types';

export const AppleIcon: React.FC<IconProps> = ({ width = 56, height = 56, color = 'black', className }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M36 20C34.5 18 32 16 28 16C24 16 21.5 18 20 20C16 26 20 40 28 40C36 40 40 26 36 20Z" stroke={color} strokeWidth="2" />
        <path d="M28 16V12" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M32 12C32 13.1046 30.2091 14 28 14C25.7909 14 24 13.1046 24 12" stroke={color} strokeWidth="2" />
    </svg>
); 