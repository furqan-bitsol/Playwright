'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { AuthPageLayout } from './AuthPageLayout';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { ROUTE_LINKS } from '@/constants/routes';
import { getLoginFormSchema } from '@/lib/forms';
import { LoginFormData } from '@/types/forms';
import {
  LOGIN_FORM_DEFAULT_VALUES,
  LOGIN_FORM_FIELDS,
} from '@/constants/forms';

const INPUT_STYLES =
  'px-0 py-2 text-base border-t-0 border-x-0 border-b border-solid border-b-black border-opacity-50 rounded-none w-[370px] max-sm:w-full focus:outline-none focus:border-b-black focus-visible:ring-0 focus-visible:ring-offset-0';

export const LoginForm: React.FC = () => {
  const { t } = useTranslation('common'); // Use translation hook

  const form = useForm<LoginFormData>({
    resolver: zodResolver(getLoginFormSchema(t)),
    defaultValues: LOGIN_FORM_DEFAULT_VALUES,
  });

  const onSubmit = (data: LoginFormData) => {
    // TODO: Implement form submission logic here
  };

  return (
    <AuthPageLayout pageType='login'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-10'
        >
          {LOGIN_FORM_FIELDS.map((fieldConfig) => (
            <FormField
              key={fieldConfig.name}
              control={form.control}
              name={fieldConfig.name as keyof LoginFormData}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type={fieldConfig.type}
                      placeholder={
                        fieldConfig.placeholder
                          ? t(fieldConfig.placeholder)
                          : ''
                      } // Add translation for placeholder with fallback
                      className={INPUT_STYLES}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <div className='flex gap-20 items-center max-sm:flex-col max-sm:gap-5'>
            <Button
              type='submit'
              className='px-12 py-4 h-auto text-base bg-red-500 rounded cursor-pointer text-neutral-50 max-sm:w-full hover:bg-red-600 transition-colors'
            >
              {t('login.form.button')}
            </Button>
            <Link
              href={ROUTE_LINKS.forgotPassword}
              className='text-base text-red-500 no-underline hover:underline'
            >
              {t('login.form.forgotPassword')}
            </Link>
          </div>
        </form>
      </Form>
    </AuthPageLayout>
  );
};
