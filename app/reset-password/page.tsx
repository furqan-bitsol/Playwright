import { ResetPasswordForm } from '@/components/auth/ResetPasswordForm';
import React, { Suspense } from 'react';

const ResetPassword = () => {
  return <Suspense fallback={<div>Loading...</div>}> <ResetPasswordForm /></Suspense>;
};

export default ResetPassword;
