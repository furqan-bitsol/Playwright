import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label='breadcrumb'
      className={cn(
        'flex items-center text-sm text-muted-foreground',
        className
      )}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {index !== 0 && (
            <ChevronRight className='mx-2 h-4 w-4 text-muted-foreground/40' />
          )}
          <div className='flex items-center'>
            {item.href ? (
              <Link
                href={item.href}
                className='hover:text-foreground opacity-60 hover:opacity-100 transition-opacity'
              >
                {item.label}
              </Link>
            ) : (
              <span className='text-foreground font-medium'>{item.label}</span>
            )}
          </div>
        </React.Fragment>
      ))}
    </nav>
  );
}
