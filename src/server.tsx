import { html, serve_static } from "./response";
import { HomePage } from "./components/HomePage";
import { MusicPage } from "./components/MusicPage";
import { GamePage } from "./components/GamePage";
import { VisualArtPage } from "./components/VisualArtPage";
import { setupLocalization, changeLanguage, defaultLanguage } from "./localization";

// Configuration
const port = process.env?.PORT ? Number(process.env.PORT) : 3000;
const development = process.env?.NODE_ENV === "development";
const hostname = development
  ? "localhost"
  : process.env?.HOSTNAME ?? "localhost";

export function start() {
  setupLocalization();

  const server = Bun.serve({
    port,
    hostname,
    development,
    async fetch(req) {
      console.log(`[request]: ${req.method}: ${req.url}`);

      let url = new URL(req.url);

      // - Handle routes
      // -- Main routes
      if (url.pathname === "/") return html(<HomePage />);
      if (url.pathname === "/music") return html(<MusicPage />);
      if (url.pathname === "/game") return html(<GamePage />);
      if (url.pathname === "/visual-art") return html(<VisualArtPage />);
      // -- Localization
      if (url.pathname === "/change-lang") {
        const response = html(<></>, 204);
        response.headers.append("HX-Refresh", "true");

        if(!req.body) {
          changeLanguage(defaultLanguage);
          return response;
        }

        if(req.body) {          
          let lang = await Bun.readableStreamToText(req.body);
          lang = lang.replace("lang=", "");
          changeLanguage(lang);
          return response;
        }
      }

      // Fallback to serving static files
      return serve_static("public", req);
    },
  });

  console.log(`Listening on http://${hostname}:${server.port}...`);
}
