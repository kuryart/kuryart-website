import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const defaultLanguage = "en";

export function setupLocalization() {
  i18n.use(initReactI18next).init({
    lng: "en",
    // debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          home: {
            title: "Kuryart",
            text: "Made with ❤️ by Kuryart | HomePage",
          },
          music: {
            title: "Music",
            text: "Made with ❤️ by Kuryart | MusicPage",
          },
          game: {
            title: "Game",
            text: "Made with ❤️ by Kuryart | GamePage",
          },
          visual: {
            title: "Visual Art",
            text: "Made with ❤️ by Kuryart | VisualArtPage",
          },
        },
      },
      es: {
        translation: {
          home: {
            title: "Kuryart",
            text: "Hecho con ❤️ por Kuryart | HomePage",
          },
          music: {
            title: "Música",
            text: "Hecho con ❤️ por Kuryart | MusicPage",
          },
          game: {
            title: "Game",
            text: "Hecho con ❤️ por Kuryart | GamePage",
          },
          visual: {
            title: "Artes Visuales",
            text: "Hecho con ❤️ por Kuryart | VisualArtPage",
          },
        },
      },
      pt_br: {
        translation: {
          home: {
            title: "Kuryart",
            text: "Feito com ❤️ por Kuryart | HomePage",
          },
          music: {
            title: "Música",
            text: "Feito com ❤️ por Kuryart | MusicPage",
          },
          game: {
            title: "Game",
            text: "Feito com ❤️ por Kuryart | GamePage",
          },
          visual: {
            title: "Artes Visuais",
            text: "Feito com ❤️ por Kuryart | VisualArtPage",
          },          
        },
      },
    },
  });
}

export function changeLanguage(lang: string) {
  i18n.changeLanguage(lang);
}