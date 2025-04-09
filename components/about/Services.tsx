import React from 'react';
import { DeliveryIcon, HeadphoneIcon, SecurityIcon } from '../icons';
import { useTranslation } from 'react-i18next';

/**
 * Service item configuration interface
 */
interface ServiceItem {
  Icon: React.ComponentType<{ className?: string }>;
  titleKey: string;
  descriptionKey: string;
}

/**
 * ServiceCard Component
 */
const ServiceCard: React.FC<{
  Icon: ServiceItem['Icon'];
  title: string;
  description: string;
}> = ({ Icon, title, description }) => (
  <div className='flex min-w-[280px] max-w-[370px] flex-col items-center text-black'>
    <Icon className='w-16 h-16 md:w-20 md:h-20' />
    <div className='flex flex-col items-center mt-4 md:mt-6'>
      <div className='text-lg md:text-xl font-semibold leading-[1.4] text-center'>
        {title}
      </div>
      <div className='text-sm md:text-base font-normal mt-2 text-center'>
        {description}
      </div>
    </div>
  </div>
);

/**
 * Services Component
 * Displays service information cards with icons
 */
export const Services = () => {
  const { t } = useTranslation('common');

  const services: ServiceItem[] = [
    {
      Icon: DeliveryIcon,
      titleKey: 'about.services.delivery.title',
      descriptionKey: 'about.services.delivery.description',
    },
    {
      Icon: HeadphoneIcon,
      titleKey: 'about.services.support.title',
      descriptionKey: 'about.services.support.description',
    },
    {
      Icon: SecurityIcon,
      titleKey: 'about.services.guarantee.title',
      descriptionKey: 'about.services.guarantee.description',
    },
  ];

  return (
    <section className='flex items-center flex-wrap justify-center gap-8 md:gap-[40px_88px] mt-16 md:mt-[140px] mb-16 md:mb-[140px] px-4 '>
      {services.map((service) => (
        <ServiceCard
          key={service.titleKey}
          Icon={service.Icon}
          title={t(service.titleKey)}
          description={t(service.descriptionKey)}
        />
      ))}
    </section>
  );
};
