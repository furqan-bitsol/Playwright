'use client';
import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ProfileIcon } from '@/components/icons';

interface AccountDropdownProps {
  triggerRef?: React.RefObject<HTMLButtonElement>;
}

const AccountDropdown: React.FC<AccountDropdownProps> = ({ triggerRef }) => {
  const handleMenuItemClick = (action: string) => {
    console.log(`Clicked: ${action}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button ref={triggerRef} className='w-8 aspect-square'>
          <ProfileIcon className='w-full h-full' />
          <span className='sr-only'>Toggle account menu</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-56 text-sm text-neutral-50 bg-black bg-opacity-0 border-0 shadow-none'
        align='end'
      >
        <DropdownMenuItem
          className='flex items-center gap-4 px-5 py-2.5 hover:bg-white/10 focus:bg-white/10 cursor-pointer'
          onClick={() => handleMenuItemClick('manage-account')}
        >
          <img
            // src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/57949e97239b2e29c3f95610e026f7c4426ddb5a?placeholderIfAbsent=true'
            className='object-contain w-8 h-8'
            alt=''
            aria-hidden='true'
          />
          <span>Manage My Account</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className='flex items-center gap-4 px-5 py-2.5 hover:bg-white/10 focus:bg-white/10 cursor-pointer'
          onClick={() => handleMenuItemClick('my-order')}
        >
          <img
            src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/8197a8b9d2bbb9696cfef9c529618caf709403ed?placeholderIfAbsent=true'
            className='object-contain w-6 h-6'
            alt=''
            aria-hidden='true'
          />
          <span>My Order</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className='flex items-center gap-4 px-5 py-2.5 hover:bg-white/10 focus:bg-white/10 cursor-pointer'
          onClick={() => handleMenuItemClick('my-cancellations')}
        >
          <img
            src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/8197a8b9d2bbb9696cfef9c529618caf709403ed?placeholderIfAbsent=true'
            className='object-contain w-6 h-6'
            alt=''
            aria-hidden='true'
          />
          <span>My Cancellations</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className='flex items-center gap-4 px-5 py-2.5 hover:bg-white/10 focus:bg-white/10 cursor-pointer'
          onClick={() => handleMenuItemClick('my-reviews')}
        >
          <img
            src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/838529a03e72a27d261cfcfdbffd1e1fd3ab77bd?placeholderIfAbsent=true'
            className='object-contain w-6 h-6'
            alt=''
            aria-hidden='true'
          />
          <span>My Reviews</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className='flex items-center gap-4 px-5 py-2.5 hover:bg-white/10 focus:bg-white/10 cursor-pointer'
          onClick={() => handleMenuItemClick('logout')}
        >
          <img
            src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/0924dad51fab011e5a2108c09e69b7a0b9343924?placeholderIfAbsent=true'
            className='object-contain w-6 h-6'
            alt=''
            aria-hidden='true'
          />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;
