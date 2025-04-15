'use client';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import MainLayout from '@/components/layouts/MainLayout';
import React from 'react';

const Contact = () => {
  return (
    <MainLayout>
      <section className='flex w-full gap-[30px] max-md:flex-col '>
        <ContactInfo />
        <ContactForm />
      </section>
    </MainLayout>
  );
};

export default Contact;
