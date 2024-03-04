import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"


import esphomepage from "../locales/spanish/esphomepage.json"
import enhomepage from "../locales/english/enhomepage.json"
import eshiw from "../locales/spanish/eshiw.json"
import enhiw from "../locales/english/enhiw.json"
import esabout from "../locales/spanish/esabout.json"
import enabout from "../locales/english/enabout.json"
import esfaq from "../locales/spanish/esfaq.json"
import enfaq from "../locales/english/enfaq.json"
import eswhitepaper from "../locales/spanish/eswhitepaper.json"
import enwhitepaper from "../locales/english/enwhitepaper.json"
import esclient from "../locales/spanish/esclient.json"
import enclient from "../locales/english/enclient.json"


const resources = {
    en: {
      translation: {
        ...enhomepage,
        ...enhiw,
        ...enabout,
        ...enfaq,
        ...enwhitepaper,
        ...enclient
      },
      // ... other English translations
    },
   
    es: { // Add this block for Spanish
      translation: {
        ...esphomepage,
        ...eshiw,
        ...esabout,
        ...esfaq,
        ...eswhitepaper,
        ...esclient
      },
      // ... other Spanish translations
    },
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    returnObjects : true,
    // keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });


  export { i18n, changeLanguage };
