import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

export const i18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'fr', 'de'],
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    defaultNS: 'home',
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    lng: i18nConfig.defaultLocale,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
