import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import EN from './en.json'
import DE from './de.json'

const resources = {
  en : {
      translation: EN
  },
  de : {
      translation: DE
  }
}
i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources,
  fallbackLng: 'en',
  lang: 'en',
  keySeparator: false,
  interpolation: {
      escapeValue: false
  }
})

export default i18n;
