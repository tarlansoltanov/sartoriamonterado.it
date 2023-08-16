import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationIT from "src/locales/it/translation.json";
import translationEN from "src/locales/en/translation.json";

// the translations
const resources = {
  it: {
    translation: translationIT,
  },
  en: {
    translation: translationEN,
  },
};

const language = localStorage.getItem("I18N_LANGUAGE");

if (!language) {
  localStorage.setItem("I18N_LANGUAGE", "it");
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("I18N_LANGUAGE") || "it",
    fallbackLng: "it", // use it if detected lng is not available
  });

export default i18n;
