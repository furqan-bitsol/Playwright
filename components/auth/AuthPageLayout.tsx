import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface AuthPageLayoutProps {
  children: React.ReactNode;
  pageType: 'signup' | 'login' | 'resetPassword' | 'forgotPassword'; // Determines which translations to use
}

export const AuthPageLayout: React.FC<AuthPageLayoutProps> = ({
  children,
  pageType,
}) => {
  const { t } = useTranslation('common'); // Use translation hook

  return (
    <main className='w-full max-w-[1440px] mx-auto flex justify-center items-center pt-[60px] pb-[140px] pr-[135px] max-md:px-10 max-sm:px-4'>
      <div className='flex w-full h-full gap-32'>
        {/* Left Section with Image */}
        <div className='relative flex-1 md:block hidden'>
          <Image
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/17a9f91d90264f1cb014656c7adcf3373316eb08'
            alt={t(`${pageType}.page.imageAlt`)} // Dynamic alt text based on pageType
            priority
            width={805}
            height={781}
            className='object-cover w-full h-full'
          />
        </div>

        {/* Right Section with Form */}
        <div className='flex-1 flex flex-col gap-12 justify-center items-start w-full md:max-w-[370px]'>
          <div className='flex flex-col gap-6 w-full'>
            <h2 className='text-4xl font-medium'>
              {t(`${pageType}.page.title`)}
            </h2>{' '}
            {/* Dynamic title */}
            <p className='text-base'>{t(`${pageType}.page.subtitle`)}</p>
            {/* Dynamic subtitle */}
          </div>
          {children}
        </div>
      </div>
    </main>
  );
};
