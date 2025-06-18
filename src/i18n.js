import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "ko", "nl"],
    ns: ["translation"],
    defaultNS: "translation",
    backend: {
      loadPath: process.env.PUBLIC_URL + "/locales/{{lng}}/{{ns}}.json", // ✅ 요거!
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
