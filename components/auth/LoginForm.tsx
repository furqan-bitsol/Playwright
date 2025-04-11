'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
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

const LOGIN_FORM_SCHEMA = z.object({
  email: z
    .string()
    .min(1, { message: 'login.form.validation.email' })
    .email({ message: 'login.form.validation.invalidEmail' }),
  password: z.string().min(6, { message: 'login.form.validation.password' }),
});

type LoginFormData = z.infer<typeof LOGIN_FORM_SCHEMA>;

const INPUT_STYLES =
  'px-0 py-2 text-base border-t-0 border-x-0 border-b border-solid border-b-black border-opacity-50 rounded-none w-[370px] max-sm:w-full focus:outline-none focus:border-b-black focus-visible:ring-0 focus-visible:ring-offset-0';

export const LoginForm: React.FC = () => {
  const { t } = useTranslation('common'); // Use translation hook
  const form = useForm<LoginFormData>({
    resolver: zodResolver(LOGIN_FORM_SCHEMA),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <AuthPageLayout pageType='login'>
      {' '}
      {/* Pass pageType as 'login' */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-10'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type='email'
                    placeholder={t('login.form.fields.email')}
                    className={INPUT_STYLES}
                  />
                </FormControl>
                <FormMessage className='text-sm text-red-500' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type='password'
                    placeholder={t('login.form.fields.password')}
                    className={INPUT_STYLES}
                  />
                </FormControl>
                <FormMessage className='text-sm text-red-500' />
              </FormItem>
            )}
          />

          <div className='flex gap-20 items-center max-sm:flex-col max-sm:gap-5'>
            <Button
              type='submit'
              className='px-12 py-4 h-auto text-base bg-red-500 rounded cursor-pointer text-neutral-50 max-sm:w-full hover:bg-red-600 transition-colors'
            >
              {t('login.form.button')}
            </Button>
            <a
              href='#'
              className='text-base text-red-500 no-underline hover:underline'
            >
              {t('login.form.forgotPassword')}
            </a>
          </div>
        </form>
      </Form>
    </AuthPageLayout>
  );
};
