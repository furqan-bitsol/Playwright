'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

interface ClientProvidersProps {
  children: React.ReactNode;
}

/**
 * ClientProviders Component
 * Wraps client-side providers like Redux and I18nProvider.
 */
export const ClientProviders: React.FC<ClientProvidersProps> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};
