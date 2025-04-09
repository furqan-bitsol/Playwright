import React from 'react';
import { MoneyIcon, BagIcon, ShoppingBagIcon, ServiceIcon } from '../icons';
import { StatCard } from './StatCard';
import { useTranslation } from 'react-i18next';

/**
 * Stats Component
 * Displays a collection of statistics using StatCard components
 */
export const Stats = () => {
  const { t } = useTranslation('common');

  const stats = [
    {
      Icon: ShoppingBagIcon,
      value: t('about.stats.sellers.value'),
      description: t('about.stats.sellers.description'),
      className: 'px-[50px] max-md:px-5',
    },
    {
      Icon: MoneyIcon,
      value: t('about.stats.monthlySales.value'),
      description: t('about.stats.monthlySales.description'),
      isHighlighted: true,
      className: 'max-md:px-5',
    },
    {
      Icon: BagIcon,
      value: t('about.stats.customers.value'),
      description: t('about.stats.customers.description'),
      className: 'px-1',
    },
    {
      Icon: ServiceIcon,
      value: t('about.stats.annualSales.value'),
      description: t('about.stats.annualSales.description'),
      className: 'max-md:px-5',
    },
  ];

  return (
    <section className='flex flex-wrap justify-center gap-6 md:gap-[30px] mt-16 md:mt-[140px]'>
      {stats.map((stat) => (
        <StatCard
          key={stat.description}
          Icon={stat.Icon}
          value={stat.value}
          description={stat.description}
          isHighlighted={stat.isHighlighted}
          className={`${stat.className} max-w-full`}
        />
      ))}
    </section>
  );
};
