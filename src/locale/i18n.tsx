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
          title: "KuryArt",
          text: "Made with ❤️ by KuryArt | HomePage",
        },
        dev: {
          title: "Dev",
        },
        music: {
          title: "Music",
          text: "Made with ❤️ by KuryArt | MusicPage",
        },
        game: {
          title: "Game",
          text: "Made with ❤️ by KuryArt | GamePage",
        },
        visual: {
          title: "Visual Art",
          text: "Made with ❤️ by KuryArt | VisualArtPage",
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
          title: "KuryArt",
          text: "Hecho con ❤️ por KuryArt | HomePage",
        },
        dev: {
          title: "Dev",
        },        
        music: {
          title: "Música",
          text: "Hecho con ❤️ por KuryArt | MusicPage",
        },
        game: {
          title: "Game",
          text: "Hecho con ❤️ por KuryArt | GamePage",
        },
        visual: {
          title: "Artes Visuales",
          text: "Hecho con ❤️ por KuryArt | VisualArtPage",
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
          title: "KuryArt",
          text: "Feito com ❤️ por KuryArt | HomePage",
        },
        dev: {
          title: "Dev",
        },        
        music: {
          title: "Música",
          text: "Feito com ❤️ por KuryArt | MusicPage",
        },
        game: {
          title: "Game",
          text: "Feito com ❤️ por KuryArt | GamePage",
        },
        visual: {
          title: "Artes Visuais",
          text: "Feito com ❤️ por KuryArt | VisualArtPage",
        },
      },
    },
  },
});

export default i18n;
