import React from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumb } from '../ui/breadcrumb';
import { ROUTE_LINKS } from '@/constants/routes';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  const path = usePathname();

  // Check if the current page is the home page
  const isHomePage = path === ROUTE_LINKS.home;

  return (
    <main
      className={`flex z-10 flex-col items-center mx-auto w-full max-w-[1170px] max-md:max-w-full max-md:px-5 md:pt-20 md:pb-[135px] max-md:pb-20 ${className}`}
    >
      {/* Breadcrumbs - Exclude for Home Page */}
      {!isHomePage && <Breadcrumb />}

      {/* Page Content */}
      {children}
    </main>
  );
};

export default MainLayout;
