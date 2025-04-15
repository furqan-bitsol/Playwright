import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define translation resources
const resources = {
  en: {
    common: require('./public/locales/en/common.json'),
  },
  fr: {
    common: require('./public/locales/fr/common.json'),
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
  debug: process.env.NODE_ENV === process.env.NEXT_PUBLIC_ENV, // Enable debug mode in development
});

export default i18n;
