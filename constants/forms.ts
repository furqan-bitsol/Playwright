import i18next from 'i18next';
import * as z from 'zod';

const t = i18next.t;

// Helper function to validate email or phone
const isValidEmailOrPhone = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
  const phoneRegex = /^\d{10,15}$/; // Phone number regex (10-15 digits)
  return emailRegex.test(value) || phoneRegex.test(value);
};

// Schema for ContactForm validation
export const CONTACT_US_FORM_SCHEMA = z.object({
  name: z.string().min(2, {
    message: t('contact.form.validation.name'),
  }),
  email: z.string().email({
    message: t('contact.form.validation.email'),
  }),
  phone: z.string().min(10, {
    message: t('contact.form.validation.phone'),
  }),
  message: z
    .string()
    .min(10, {
      message: t('contact.form.validation.message'),
    })
    .optional()
    .or(z.literal('')),
});

// Schema for SignUpForm validation
export const SIGN_UP_FORM_SCHEMA = z.object({
  name: z.string().min(2, {
    message: t('signup.form.validation.name'),
  }),
  emailOrPhone: z.string().refine(isValidEmailOrPhone, {
    message: t('signup.form.validation.emailOrPhone'),
  }),
  password: z.string().min(6, {
    message: t('signup.form.validation.password'),
  }),
});
export const NAME_FORM_FIELD = {
  name: 'name',
  placeholder: 'contact.form.fields.name',
  type: 'text',
};

export const EMAIL_FORM_FIELD = {
  name: 'email',
  placeholder: 'contact.form.fields.email',
  type: 'email',
};

export const PHONE_FORM_FIELD = {
  name: 'phone',
  placeholder: 'contact.form.fields.phone',
  type: 'tel',
};

export const MESSAGE_FORM_FIELD = {
  name: 'message',
  placeholder: 'contact.form.fields.message',
  type: 'text',
};

export const CONTACT_US_FORM_FIELDS = [
  NAME_FORM_FIELD,
  EMAIL_FORM_FIELD,
  PHONE_FORM_FIELD,
  MESSAGE_FORM_FIELD,
];

// Default values for ContactForm
export const CONTACT_US_FORM_DEFAULT_VALUES = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

// Default values for SignUpForm
export const SIGN_UP_FORM_DEFAULT_VALUES = {
  name: '',
  emailOrPhone: '',
  password: '',
};

// Field definitions for SignUpForm
export const SIGN_UP_FORM_FIELDS = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'signup.form.fields.name',
  },
  {
    name: 'emailOrPhone',
    type: 'text',
    placeholder: 'signup.form.fields.emailOrPhone',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'signup.form.fields.password',
  },
];
