'use client';
import * as React from 'react';
import { Checkbox } from '../ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  BILLING_FORM_DEFAULT_VALUES,
  BILLING_FORM_FIELDS,
} from '@/constants/forms';
import { useTranslation } from 'react-i18next';
import { getBillingFormSchema } from '@/lib/forms';
import { BillingFormData } from '@/types/forms';

// Removed console.log from onSubmit function and added a placeholder for form submission logic
function onSubmit(values: BillingFormData) {
  // TODO: Implement form submission logic here
}

export const BillingForm: React.FC = () => {
  const { t } = useTranslation('common'); // Use translation hook

  // Initialize the form with default values and validation schema
  const form = useForm<BillingFormData>({
    resolver: zodResolver(getBillingFormSchema(t)),
    defaultValues: BILLING_FORM_DEFAULT_VALUES,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-8 min-w-[470px]'
      >
        {/* Render form fields dynamically based on BILLING_FORM_FIELDS */}
        {BILLING_FORM_FIELDS.map((item) => {
          if (item.type !== 'checkbox') {
            return (
              <FormField
                key={item.name}
                control={form.control}
                name={item.name as keyof BillingFormData}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className='text-base'>
                      {t(`billing.form.fields.${item.name}`)}
                      {item.required && <span className='text-red-500'>*</span>}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type={item.type}
                        className='w-full rounded bg-neutral-100 h-[50px]'
                        value={
                          typeof field.value === 'string' ? field.value : ''
                        }
                      />
                    </FormControl>
                    <FormMessage className='text-sm text-red-500 mt-1'>
                      {fieldState.error?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
            );
          } else {
            return (
              <FormField
                key={item.name}
                control={form.control}
                name='saveInfo'
                render={({ field }) => (
                  <FormItem className='flex gap-4 items-center'>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className='w-6 h-6 bg-red-500 rounded data-[state=checked]:bg-red-500'
                      />
                    </FormControl>
                    <FormLabel className='text-base'>
                      {t('billing.form.fields.saveInfo')}
                    </FormLabel>
                  </FormItem>
                )}
              />
            );
          }
        })}

        {/* Submit button for the form */}
        <Button
          type='submit'
          className='w-full bg-red-500 text-white py-3 rounded hover:bg-red-600'
        >
          {t('billing.form.button.submit')}
        </Button>
      </form>
    </Form>
  );
};
