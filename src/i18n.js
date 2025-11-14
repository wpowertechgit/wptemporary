import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import en from './locales/en/translation.json';
import de from './locales/de/translation.json';
import ro from './locales/ro/translation.json';
import hu from './locales/hu/translation.json';
import gr from './locales/gr/translation.json';
import zh from './locales/zh/translation.json';
import tr from './locales/tr/translation.json';
import es from './locales/es/translation.json';
import pl from './locales/pl/translation.json';
import fr from './locales/fr/translation.json';
import it from './locales/it/translation.json';
i18n
  // i18next-http-backend
  // loads translations from your server
  // https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: {
        translation: en
      },
      de: {
        translation: de
      },
      zh: {
        translation: zh
      },
      hu: {
        translation: hu
      },
      ro: {
        translation: ro
      },
      gr: {
        translation: gr
      },
      tr:{
        translation: tr
      },
      es:
      {
        translation:es
      },
      pl:
      {
        translation:pl
      },
      it:
      {
        translation:it
      },
      fr:
      {
        translation:fr
      },
    },
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      // format: (value, format, lng) => { // legacy usage
      //   if (value instanceof Date) {
      //     return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime[format])
      //   }
      //   return value;
      // }
    },
  });

export default i18n;