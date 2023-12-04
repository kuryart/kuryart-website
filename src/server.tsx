import { html, serve_static } from "./response";
import { HomePage } from "./components/HomePage";
import { MusicPage } from "./components/MusicPage";
import { GamePage } from "./components/GamePage";
import { VisualArtPage } from "./components/VisualArtPage";

// import { t, getLanguage } from "./localization";
import { isLanguageValid, setLocalization } from "./localization";

// Configuration
const port = process.env?.PORT ? Number(process.env.PORT) : 3000;
const development = process.env?.NODE_ENV === "development";
const hostname = development ? "localhost" : process.env?.HOSTNAME ?? "localhost";

export function start() {
  const server = Bun.serve({
    port,
    hostname,
    development,
    fetch(req) {
      console.log(`[request]: ${req.method}: ${req.url}`);

      const url = new URL(req.url);
      // - Handle routes
      // -- Main routes
      if (url.pathname === "/") return html(<HomePage />);
      if (url.pathname === "/music") return html(<MusicPage />);
      if (url.pathname === "/game") return html(<GamePage />);
      if (url.pathname === "/visual-art") return html(<VisualArtPage />);

      // -- Localization
      const paths = url.pathname.split(/[\/]+/);

      if (isLanguageValid(paths[1])) {
        const lang = paths[1];
        const path = "/" + paths.slice(2).join("/");

        setLocalization(lang, path);

        if (path === "/") return html(<HomePage />);
        if (path === "/music") return html(<MusicPage />);
        if (path === "/game") return html(<GamePage />);
        if (path === "/visual-art") return html(<VisualArtPage />);

        // console.log(`[localization]: ${lang} ${path}`);
      }

      // Fallback to serving static files
      return serve_static("public", req);
    },
  });

  console.log(`Listening on http://${hostname}:${server.port}...`);
}
