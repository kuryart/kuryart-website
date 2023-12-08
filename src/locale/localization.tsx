import i18n from "./i18n";
import TranslationContext from "../components/TranslationContext";
import { useContext } from "react";

enum LANGUAGES {
  EN = "en",
  ES = "es",
  PT_BR = "pt_br",
}

const defaultLanguage = LANGUAGES.EN;

function isLanguageValid(language: string): language is LANGUAGES {
  return Object.values(LANGUAGES).includes(language as LANGUAGES);
}

function getLanguage(language: string): LANGUAGES {
  return isLanguageValid(language)
    ? language
    : defaultLanguage;
}

export function t(key: string) {
  const language = getCurrentLanguage();
  const translatedText = i18n.t(key, { lng: language });

  return translatedText;
}

export function getCurrentLanguage() {
  return getLanguage(useContext(TranslationContext));
}

export function setupLocalization(language: string = defaultLanguage) {
  i18n;
}
