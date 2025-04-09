import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const Story = () => {
  const { t } = useTranslation('common');

  return (
    <section className='mt-8 md:mt-[42px] w-full'>
      <div className='flex flex-col md:flex-row gap-5'>
        <div className='w-full md:w-[43%]'>
          <div className='max-w-full'>
            <h1 className='text-black text-3xl md:text-[54px] font-semibold leading-tight md:leading-none tracking-[3.24px]'>
              {t('about.story.title')}
            </h1>
            <div className='text-base text-black font-normal leading-[26px] mt-6 md:mt-10 max-w-[525px]'>
              <p>{t('about.story.part1')}</p>
              <p className='mt-4 md:mt-6'>{t('about.story.part2')}</p>
            </div>
          </div>
        </div>
        <div className='w-full md:w-[57%] mt-6 md:mt-0'>
          <div className='bg-[rgba(235,126,168,1)] w-full rounded-[4px_0px_0px_4px] relative aspect-[1.16]'>
            <Image
              src='/images/about/our-story.png'
              alt='Our Story illustration'
              fill
              className='object-contain'
              priority
              sizes='(max-width: 768px) 100vw, 57vw'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
