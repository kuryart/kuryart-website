import { html, serve_static } from "./response";
import { HomePage } from "./components/HomePage";
import { MusicPage } from "./components/MusicPage";
import { GamePage } from "./components/GamePage";
import { VisualArtPage } from "./components/VisualArtPage";
import { getLanguage, setupLocalization } from "./localization";

enum ASSETS_ROUTES {
  CSS = "/style.css",
  HTMX = "/htmx.js",
  HYPERSCRIPT = "/hyperscript.js",
  KURYART_ICON_BLACK = "/kuryart-icon-black.svg",
  FAVICON = "/favicon.ico",  
}

// Configuration
const port = process.env?.PORT ? Number(process.env.PORT) : 3000;
const development = process.env?.NODE_ENV === "development";
const hostname = development
  ? "localhost"
  : process.env?.HOSTNAME ?? "localhost";

export function start() {
  const server = Bun.serve({
    port,
    hostname,
    development,
    async fetch(req) {
      // console.log(`[request]: ${req.method}: ${req.url}`);
      const url = new URL(req.url);

      const languageSlug = url.pathname.split("/")[1];
      const language = getLanguage(languageSlug);
      // const pathNameWithoutLanguage = url.pathname.substring("/" + language
        
      // )

      // console.log("url " + url);
      // console.log("req.url " + req.url);
      console.log("url.pathname " + url.pathname);
      // console.log("language " + language);

      // - Handle routes
      // -- Main routes
      if (url.pathname === "/") {
        console.log("olá mundo");
        setupLocalization(language);
        return html(<HomePage />);
      }
      if (url.pathname === "/music") {
        setupLocalization(language);
        return html(<MusicPage />);
      }
      if (url.pathname === "/game") {
        setupLocalization(language);
        return html(<GamePage />);
      }
      if (url.pathname === "/visual-art") {
        setupLocalization(language);
        return html(<VisualArtPage />);
      }
      // -- Localization
      // if (url.pathname === "/change-lang") {
      //   const response = html(<></>, 204);
      //   response.headers.append("HX-Refresh", "true");

      //   if(!req.body) {
      //     changeLanguage(defaultLanguage);
      //     return response;
      //   }

      //   if(req.body) {
      //     let lang = await Bun.readableStreamToText(req.body);
      //     lang = lang.replace("lang=", "");
      //     changeLanguage(lang);
      //     return response;
      //   }
      // }

      // return html(<VisualArtPage />);

      // Fallback to serving static files
      return serve_static("public", req);
    },
  });

  console.log(`Listening on http://${hostname}:${server.port}...`);
}