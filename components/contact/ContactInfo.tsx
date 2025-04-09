'use client';
import { Phone } from 'lucide-react';
import React from 'react';
import { MailIcon } from '../icons';
import { useTranslation } from 'react-i18next';

export const ContactInfo = () => {
  const { t } = useTranslation('common');

  return (
    <div className='w-[340px] shadow-[0px_1px_13px_rgba(0,0,0,0.05)] rounded bg-white px-[35px] py-10 max-md:w-full'>
      <div className='flex flex-col gap-6'>
        <div className='flex items-center gap-4'>
          <div className='bg-[#DB4444] rounded-full p-2'>
            <Phone className='text-white' />
          </div>
          <div className='text-black text-base font-medium'>
            {t('contact.info.call.title')}
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='text-black text-sm leading-[21px]'>
            {t('contact.info.call.description')}
          </div>
          <div className='text-black text-sm leading-[21px]'>
            {t('contact.info.call.phone')}
          </div>
        </div>
      </div>
      <div className='w-full h-px bg-[rgba(0,0,0,0.3)] my-8' />
      <div className='flex flex-col gap-6'>
        <div className='flex items-center gap-4'>
          <div className='bg-[#DB4444] rounded-full p-2 w-10 h-10 flex items-center justify-center'>
            <MailIcon className='text-white' />
          </div>
          <div className='text-black text-base font-medium'>
            {t('contact.info.write.title')}
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='text-black text-sm leading-[21px]'>
            {t('contact.info.write.description')}
          </div>
          <div className='text-black text-sm leading-[21px]'>
            {t('contact.info.write.email.customer')}
          </div>
          <div className='text-black text-sm leading-[21px]'>
            {t('contact.info.write.email.support')}
          </div>
        </div>
      </div>
    </div>
  );
};
