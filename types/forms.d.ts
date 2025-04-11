import { ContactFormData } from './../.history/types/forms_20250411130604';
export type LoginFormData = {
  emailOrPhone: string;
  password: string;
};

export type SignUpFormData = {
  name: string;
  emailOrPhone: string;
  password: string;
};

export type ResetPasswordFormData = {
  password: string;
  confirmPassword: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message?: string;
};
export type ForgotPasswordFormData = {
  email: string;
};

export type FormField = {
  name: string;
  type: 'text' | 'password';
  placeholder: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message?: string;
};
