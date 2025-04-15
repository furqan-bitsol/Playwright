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
import { getResetPasswordFormSchema } from '@/lib/forms';
import {
  RESET_PASSWORD_FORM_DEFAULT_VALUES,
  RESET_PASSWORD_FORM_FIELDS,
} from '@/constants/forms';
import { ResetPasswordFormData } from '@/types/forms';

const INPUT_STYLES =
  'px-0 py-2 text-base border-t-0 border-x-0 border-b border-solid border-b-black border-opacity-50 rounded-none w-[370px] max-sm:w-full focus:outline-none focus:border-b-black focus-visible:ring-0 focus-visible:ring-offset-0';

export const ResetPasswordForm: React.FC = () => {
  const { t } = useTranslation('common'); // Use translation hook
  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(getResetPasswordFormSchema(t)),
    defaultValues: RESET_PASSWORD_FORM_DEFAULT_VALUES,
  });

  const onSubmit = (data: ResetPasswordFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <AuthPageLayout pageType='resetPassword'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-10'
        >
          {RESET_PASSWORD_FORM_FIELDS.map((formField) => (
            <FormField
              key={formField.name}
              control={form.control}
              name={formField.name as keyof ResetPasswordFormData} // Casting to satisfy the type requirement
              render={({ field: controlledField }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...controlledField}
                      type='text'
                      placeholder={
                        formField.placeholder ? t(formField.placeholder) : ''
                      }
                      className={INPUT_STYLES}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button
            type='submit'
            className='px-12 py-4 h-auto text-base bg-red-500 rounded cursor-pointer text-neutral-50 max-sm:w-full hover:bg-red-600 transition-colors'
          >
            {t('resetPassword.form.button')}
          </Button>
        </form>
      </Form>
    </AuthPageLayout>
  );
};
