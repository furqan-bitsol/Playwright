'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { LANGUAGES } from '@/constants';

export const TopHeader: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  const [selectedLang, setSelectedLang] = React.useState('English');

  const handleLanguageChange = (code: string, name: string) => {
    setSelectedLang(name);
    i18n.changeLanguage(code);
  };

  return (
    <header className='flex overflow-hidden flex-col grow shrink justify-center items-end px-16 py-3 text-sm bg-black min-w-60 text-neutral-50 max-md:px-5 max-md:max-w-full'>
      <div className='w-full flex flex-row justify-between items-center max-md:max-w-full'>
        <div className='w-[200px]'></div>

        <div className='flex flex-wrap gap-2 items-center justify-center'>
          <div className='self-stretch my-auto max-w-[474px]'>
            {t('header.sale')}
          </div>
          <div className='self-stretch my-auto font-semibold leading-6 text-center underline underline-offset-4 hover:text-gray-200 cursor-pointer'>
            {t('header.shopNow')}
          </div>
        </div>

        <div className='w-[200px] flex justify-end'>
          <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center gap-1.5 focus:outline-none'>
              {selectedLang}
              <ChevronDown className='h-4 w-4' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white border-neutral-800'>
              {LANGUAGES.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code, lang.name)}
                  className='hover:bg-neutral-800 cursor-pointer'
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
