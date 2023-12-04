import translations from "./lang";

type Localization = {
    [key:string]: string,
}

declare global {
    var localization: Localization;
    var language: Language;
}

enum Language {
  BrazilianPortuguese = "pt-br",
  English = "en",
  Spanish = "es",
}

function getTranslation(lang: Language, page: string) {
  if (!isLanguageValid(lang)) {
    return translations["en"].pages[page.slice(1)]
  }

  return translations[lang].pages[page.slice(1)];
}

export function setLocalization(lang: Language, page:string) {
    globalThis.localization = getTranslation(lang, page);
    globalThis.language = lang;
}

export function isLanguageValid(value: string): value is Language {
  return Object.values(Language).includes(value as Language);
}
