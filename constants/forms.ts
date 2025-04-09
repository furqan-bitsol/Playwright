import { z } from 'zod';
import i18next from 'i18next';

const t = i18next.t;

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

export const CONTACT_US_FORM_DEFAULT_VALUES = {
  name: '',
  email: '',
  phone: '',
  message: '',
};
