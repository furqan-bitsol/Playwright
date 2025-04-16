'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  SIGN_UP_FORM_DEFAULT_VALUES,
  SIGN_UP_FORM_FIELDS,
} from '@/constants/forms';
import { AuthPageLayout } from './AuthPageLayout';
import { useTranslation } from 'react-i18next';
import { ROUTE_LINKS } from '@/constants/routes';
import Link from 'next/link';
import { getSignUpFormSchema } from '@/lib/forms';
import { SignUpFormData } from '@/types/forms';

const INPUT_STYLES =
  'pb-2 text-base bg-transparent border-0 border-b border-black rounded-none opacity-40 focus-visible:ring-0 focus-visible:ring-offset-0';

export const SignUpForm: React.FC = () => {
  const { t } = useTranslation('common'); // Use translation hook
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(getSignUpFormSchema(t)),
    defaultValues: SIGN_UP_FORM_DEFAULT_VALUES,
  });

  function onSubmit(data: SignUpFormData) {
    // TODO: Implement form submission logic here
  }

  return (
    <AuthPageLayout pageType='signup'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-10 w-full md:w-[371px]'
        >
          <div className='flex flex-col gap-10'>
            {SIGN_UP_FORM_FIELDS.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name as keyof SignUpFormData}
                render={({ field: fieldProps }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...fieldProps}
                        type={field.type}
                        placeholder={t(field.placeholder)} // Add translation for placeholder
                        className={INPUT_STYLES}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>

          <div className='flex flex-col gap-4'>
            <Button
              type='submit'
              className='py-4 w-full text-base font-medium bg-red-500 hover:bg-red-600 rounded text-neutral-50'
            >
              {t('signup.form.button')} {/* Add translation for button */}
            </Button>

            <Button
              type='button'
              variant='outline'
              className='flex gap-4 justify-center items-center py-4 w-full rounded border border-solid border-black border-opacity-40 hover:bg-gray-50'
              onClick={() => {
                // Handle Google sign-in
              }}
            >
              <span className='text-base'>{t('signup.form.googleButton')}</span>{' '}
              {/* Add translation for Google button */}
            </Button>

            <div className='flex gap-4 justify-center items-center'>
              <span className='text-base opacity-70'>
                {t('signup.form.alreadyHaveAccount')}{' '}
                {/* Add translation for "Already have an account?" */}
              </span>
              <Link
                href={ROUTE_LINKS.login}
                className='flex flex-col h-auto p-0 text-base font-medium opacity-70 border-b border-black rounded-none hover:opacity-100'
              >
                {t('signup.form.login')} {/* Add translation for "Log in" */}
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </AuthPageLayout>
  );
};
