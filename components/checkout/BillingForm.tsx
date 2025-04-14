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
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  companyName: z.string().optional(),
  streetAddress: z.string().min(5, 'Street address is required'),
  apartment: z.string().optional(),
  townCity: z.string().min(2, 'Town/City is required'),
  phoneNumber: z.string().min(10, 'Phone number is required'),
  email: z.string().email('Invalid email address'),
  saveInfo: z.boolean(),
});

export const BillingForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      companyName: '',
      streetAddress: '',
      apartment: '',
      townCity: '',
      phoneNumber: '',
      email: '',
      saveInfo: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-8 min-w-[470px]'
      >
        <FormField
          control={form.control}
          name='firstName'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base opacity-40'>
                First Name<span className='text-red-500'>*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className='w-full rounded bg-neutral-100 h-[50px]'
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='companyName'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base opacity-40'>
                Company Name
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className='w-full rounded bg-neutral-100 h-[50px]'
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='streetAddress'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base opacity-40'>
                Street Address<span className='text-red-500'>*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className='w-full rounded bg-neutral-100 h-[50px]'
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='apartment'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base opacity-40'>
                Apartment, floor, etc. (optional)
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className='w-full rounded bg-neutral-100 h-[50px]'
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='townCity'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base opacity-40'>
                Town/City<span className='text-red-500'>*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className='w-full rounded bg-neutral-100 h-[50px]'
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='phoneNumber'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base opacity-40'>
                Phone Number<span className='text-red-500'>*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='tel'
                  className='w-full rounded bg-neutral-100 h-[50px]'
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base opacity-40'>
                Email Address<span className='text-red-500'>*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='email'
                  className='w-full rounded bg-neutral-100 h-[50px]'
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
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
                Save this information for faster check-out next time
              </FormLabel>
            </FormItem>
          )}
        />

        <Button
          type='submit'
          className='w-full bg-red-500 text-white py-3 rounded hover:bg-red-600'
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
