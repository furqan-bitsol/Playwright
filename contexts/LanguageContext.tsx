'use client';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import i18n from '@/i18n.config';

type LanguageContextType = {
  currentLanguage: string;
  changeLanguage: (code: string, name: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const [currentLanguage, setCurrentLanguage] = useState('English');

  const changeLanguage = useCallback((code: string, name: string) => {
    setCurrentLanguage(name);
    i18n.changeLanguage(code);
    localStorage.setItem('preferredLanguage', JSON.stringify({ code, name }));
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      const { code, name } = JSON.parse(savedLanguage);
      changeLanguage(code, name);
    }
  }, [changeLanguage]);

  const value = useMemo(
    () => ({ currentLanguage, changeLanguage }),
    [currentLanguage, changeLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
