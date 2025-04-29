'use client';
import * as React from 'react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ProfileIcon } from '@/components/icons';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

interface AccountDropdownProps {
  triggerRef?: React.RefObject<HTMLButtonElement>;
}

const AccountDropdown: React.FC<AccountDropdownProps> = ({ triggerRef }) => {
  const { signOut } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleMenuItemClick = async (action: string) => {
    if (action === 'logout') {
      await signOut();
      toast({
        title: 'Logged out',
        description: 'You have been logged out successfully.',
        variant: 'success',
      });
      router.push('/login');
      return;
    }
    console.log(`Clicked: ${action}`);
  };

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <button ref={triggerRef} className='w-8 aspect-square'>
          <ProfileIcon className='w-full h-full' />
          <span className='sr-only'>Toggle account menu</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-56 text-sm text-neutral-50 bg-black  border-0 shadow-none'
        align='end'
      >
        <DropdownMenuItem
          className='flex items-center gap-4 px-5 py-2.5 hover:bg-white/10 focus:bg-white/10 cursor-pointer'
          onClick={() => handleMenuItemClick('manage-account')}
        >
          <Image
            src='/path-to-image.jpg'
            alt='Account Icon'
            width={40}
            height={40}
            className='object-contain'
          />
          <span>Manage My Account</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className='flex items-center gap-4 px-5 py-2.5 hover:bg-white/10 focus:bg-white/10 cursor-pointer'
          onClick={() => handleMenuItemClick('my-order')}
        >
          <Image
            src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/8197a8b9d2bbb9696cfef9c529618caf709403ed?placeholderIfAbsent=true'
            alt='My Order Icon'
            width={24}
            height={24}
            className='object-contain'
          />
          <span>My Order</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className='flex items-center gap-4 px-5 py-2.5 hover:bg-white/10 focus:bg-white/10 cursor-pointer'
          onClick={() => handleMenuItemClick('my-cancellations')}
        >
          <Image
            src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/8197a8b9d2bbb9696cfef9c529618caf709403ed?placeholderIfAbsent=true'
            alt='My Cancellations Icon'
            width={24}
            height={24}
            className='object-contain'
          />
          <span>My Cancellations</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className='flex items-center gap-4 px-5 py-2.5 hover:bg-white/10 focus:bg-white/10 cursor-pointer'
          onClick={() => handleMenuItemClick('my-reviews')}
        >
          <Image
            src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/838529a03e72a27d261cfcfdbffd1e1fd3ab77bd?placeholderIfAbsent=true'
            alt='My Reviews Icon'
            width={24}
            height={24}
            className='object-contain'
          />
          <span>My Reviews</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className='flex items-center gap-4 px-5 py-2.5 hover:bg-white/10 focus:bg-white/10 cursor-pointer'
          onClick={() => handleMenuItemClick('logout')}
        >
          <Image
            src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/0924dad51fab011e5a2108c09e69b7a0b9343924?placeholderIfAbsent=true'
            alt='Logout Icon'
            width={24}
            height={24}
            className='object-contain'
          />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;
