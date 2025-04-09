'use client';
import { Services } from '@/components/about/Services';
import { Stats } from '@/components/about/Stats';
import { Story } from '@/components/about/Story';
import { Team } from '@/components/about/Team';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { useTranslation } from 'react-i18next';
import React from 'react';

const About = () => {
  const { t } = useTranslation('common');

  const breadcrumbItems = [
    { label: t('about.breadcrumb.home'), href: '/' },
    { label: t('about.breadcrumb.about') },
  ];

  return (
    <main className='flex w-full flex-col max-w-[1305px] mt-[60px] md:mt-[79px] mx-auto px-4 md:px-8'>
      <Breadcrumb items={breadcrumbItems} />
      <Story />
      <Stats />
      <Team />
      <Services />
    </main>
  );
};

export default About;
