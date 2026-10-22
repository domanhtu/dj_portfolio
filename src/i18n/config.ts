import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import cs from './locales/cs.json';
import en from './locales/en.json';

export const defaultLocale = 'cs';
export const locales = ['cs', 'en'] as const;
export type Locale = (typeof locales)[number];

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      cs: { translation: cs },
      en: { translation: en },
    },
    lng: defaultLocale,
    fallbackLng: defaultLocale,
    interpolation: { escapeValue: false },
  });
}

export default i18n;
