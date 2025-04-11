'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  CONTACT_US_FORM_DEFAULT_VALUES,
  CONTACT_US_FORM_FIELDS,
  MESSAGE_FORM_FIELD,
} from '@/constants/forms';
import { useTranslation } from 'react-i18next';
import { getContactUsFormSchema } from '@/lib/forms';
import { ContactFormData } from '@/types/forms';

const INPUT_STYLES =
  'rounded text-base bg-neutral-100 px-4 py-[13px] border-none';

export const ContactForm = () => {
  const { t } = useTranslation('common');
  const form = useForm<ContactFormData>({
    resolver: zodResolver(getContactUsFormSchema(t)),
    defaultValues: CONTACT_US_FORM_DEFAULT_VALUES,
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex-1 shadow-[0px_1px_13px_rgba(0,0,0,0.05)] rounded bg-white px-8 py-10 max-md:w-full'
      >
        <div className='flex gap-4 mb-8 max-sm:flex-col'>
          {CONTACT_US_FORM_FIELDS.slice(0, 3).map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name as keyof ContactFormData}
              render={({ field: fieldProps }) => (
                <FormItem className='flex-1'>
                  <FormControl>
                    <Input
                      {...fieldProps}
                      name={String(fieldProps.name)}
                      type={field.type}
                      placeholder={t(field.placeholder)}
                      className={INPUT_STYLES}
                    />
                  </FormControl>
                  <FormMessage className='text-sm text-red-500 mt-1' />
                </FormItem>
              )}
            />
          ))}
        </div>

        <FormField
          control={form.control}
          name={MESSAGE_FORM_FIELD.name as keyof ContactFormData}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  name={String(field.name)}
                  placeholder={t(MESSAGE_FORM_FIELD.placeholder)}
                  className='w-full h-[207px] rounded text-base resize-none bg-neutral-100 px-4 py-[13px] border-none'
                />
              </FormControl>
              <FormMessage className='text-sm text-red-500 mt-1' />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          className='text-neutral-50 rounded mt-8 text-base font-medium cursor-pointer bg-[#DB4444] px-12 py-4 hover:bg-[#c13e3e]'
        >
          {t('contact.form.button')}
        </Button>
      </form>
    </Form>
  );
};
