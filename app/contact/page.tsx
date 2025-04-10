'use client';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import React from 'react';

const Contact = () => {
  return (
    <main>
      <div className='px-[135px] py-10 max-md:px-4'>
        <Breadcrumb />
      </div>

      <section className='flex gap-[30px] px-[135px] pt-10 pb-[136px] max-md:flex-col max-md:p-5'>
        <ContactInfo />
        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
