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
import { FORGOT_PASSWORD_FORM_DEFAULT_VALUES } from '@/constants/forms';
import { getForgotPasswordFormSchema } from '@/lib/forms';
import { ForgotPasswordFormData } from '@/types/forms';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { ROUTE_LINKS } from "@/constants/routes";

const INPUT_STYLES =
  'px-0 py-2 text-base border-t-0 border-x-0 border-b border-solid border-b-black border-opacity-50 rounded-none max-sm:w-full focus:outline-none focus:border-b-black focus-visible:ring-0 focus-visible:ring-offset-0';

export const ForgotPasswordForm: React.FC = () => {
  const { t } = useTranslation('common');
  const { toast } = useToast();
  const router = useRouter();
  const { forgotPassword } = useAuth();
  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(getForgotPasswordFormSchema(t)),
    defaultValues: FORGOT_PASSWORD_FORM_DEFAULT_VALUES,
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      await forgotPassword(data.email);
      toast({
        title: t('forgotPassword.form.successTitle', 'Reset link sent!'),
        description: t('forgotPassword.form.successDescription', 'Check your email for the reset link.'),
        variant: 'success',
      });
      form.reset();
      router.push(ROUTE_LINKS.resetPassword)
    } catch (error: any) {
      form.setError('email', { message: error.message ?? t('forgotPassword.form.error') });
      toast({
        title: t('forgotPassword.form.errorTitle', 'Reset failed'),
        description: error.message ?? t('forgotPassword.form.error'),
        variant: 'destructive',
      });
    }
  };

  return (
    <AuthPageLayout pageType='forgotPassword'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-10 w-full'
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
                    placeholder={t('forgotPassword.form.fields.email')}
                    className={INPUT_STYLES}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type='submit'
            className='px-12 py-4 h-auto text-base bg-red-500 rounded cursor-pointer text-neutral-50 max-sm:w-full hover:bg-red-600 transition-colors'
          >
            {t('forgotPassword.form.button')}
          </Button>
        </form>
      </Form>
    </AuthPageLayout>
  );
};
