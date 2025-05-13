import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  "dataTestID"?: string;
}

/**
 * NavLink Component
 * A custom Link component that handles active state styling
 */
export const NavLink: React.FC<NavLinkProps> = ({
  href,
  dataTestID,
  children,
  className = '',
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive
          ? 'font-medium hover:opacity-80'
          : 'opacity-60 hover:opacity-100'
        } transition-opacity ${className}`}
      data-testid={dataTestID}
    >
      {children}
    </Link>
  );
};
