import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const defaultLanguage = "en";

i18n.use(initReactI18next).init({
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  // debug: true,
  resources: {
    en: {
      translation: {
        layout: {
          description:
            "Developer, Musician, Game Designer, Writer and Visual Artist.",
        },
        home: {
          title: "Kuryart",
          text: "Made with ❤️ by Kuryart | HomePage",
        },
        dev: {
          title: "Dev",
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
        layout: {
          description:
            "Desarrollador, Músico, Diseñador de Juegos, Escritor y Artista Visual.",
        },
        home: {
          title: "Kuryart",
          text: "Hecho con ❤️ por Kuryart | HomePage",
        },
        dev: {
          title: "Dev",
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
        layout: {
          description:
            "Desenvolvedor, Músico, Designer de Jogos, Escritor e Artista Visual.",
        },
        home: {
          title: "Kuryart",
          text: "Feito com ❤️ por Kuryart | HomePage",
        },
        dev: {
          title: "Dev",
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

export default i18n;
