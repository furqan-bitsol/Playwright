import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

interface BreadcrumbProps {
  className?: string;
  isNotFound?: boolean;
}

/**
 * Utility function to generate breadcrumb items from pathname
 */
const useBreadcrumbItems = (pathname: string, isNotFound?: boolean) => {
  const { t } = useTranslation('common');
  const paths = pathname.split('/').filter(Boolean);

  // Always start with home
  const items: { label: string; href?: string }[] = [
    {
      label: t('breadcrumb.home'),
      href: '/',
    },
  ];

  // If it's a not-found page, add 404 error breadcrumb
  if (isNotFound) {
    items.push({
      label: t('notFound.breadcrumb.error'),
    });
    return items;
  }

  // Build up breadcrumb items based on path segments
  let currentPath = '';
  paths.forEach((path) => {
    currentPath += `/${path}`;
    items.push({
      label: t(`breadcrumb.${path}`),
      href: paths[paths.length - 1] === path ? undefined : currentPath,
    });
  });

  return items;
};

/**
 * Breadcrumb Component
 * Displays a navigation breadcrumb trail
 */
export function Breadcrumb({
  className,
  isNotFound,
}: Readonly<BreadcrumbProps>) {
  const pathname = usePathname();
  const breadcrumbItems = useBreadcrumbItems(pathname, isNotFound);

  return (
    <nav
      aria-label='breadcrumb'
      className={cn(
        'flex items-center text-sm text-muted-foreground',
        className
      )}
    >
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={item.label}>
          {index !== 0 && (
            <ChevronRight
              className='mx-2 h-4 w-4 text-muted-foreground/40'
              aria-hidden='true'
            />
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
