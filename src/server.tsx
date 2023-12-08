import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { html } from "./response";
import { HomePage } from "./components/HomePage";
import { GamePage } from "./components/GamePage";
import { MusicPage } from "./components/MusicPage";
import { VisualArtPage } from "./components/VisualArtPage";
import { NotFoundPage } from "./components/NotFoundPage";
import { setupLocalization } from "./localization";
import { htmx } from "elysia-htmx";

function changeLanguageInUrl(url: string, newLanguage: string): string {
  try {
    const parsedUrl = new URL(url);
    const pathParts = parsedUrl.pathname.split("/");
    const languageIndex = pathParts.findIndex((part) =>
      ["pt_br", "en", "es"].includes(part)
    );
    if (languageIndex !== -1) {
      pathParts[languageIndex] = newLanguage;
    } else {
      pathParts.unshift(newLanguage);
    }
    parsedUrl.pathname = pathParts.join("/");

    return parsedUrl.toString();
  } catch (error) {
    throw new Error("A URL não é válida.");
  }
}

export function start() {
  setupLocalization();

  const app = new Elysia()
    .use(staticPlugin())
    .use(htmx())
    .group("/en", (app) =>
      app
        .get("/", () => html(<HomePage />, 200, "en"))
        .get("/music", () => html(<MusicPage />, 200, "en"))
        .get("/game", () => html(<GamePage />, 200, "en"))
        .get("/visual-art", () => html(<VisualArtPage />, 200, "en"))
    )
    .group("/es", (app) =>
      app
        .get("/", () => html(<HomePage />, 200, "es"))
        .get("/music", () => html(<MusicPage />, 200, "es"))
        .get("/game", () => html(<GamePage />, 200, "es"))
        .get("/visual-art", () => html(<VisualArtPage />, 200, "es"))
    )
    .group("/pt_br", (app) =>
      app
        .get("/", () => html(<HomePage />, 200, "pt_br"))
        .get("/music", () => html(<MusicPage />, 200, "pt_br"))
        .get("/game", () => html(<GamePage />, 200, "pt_br"))
        .get("/visual-art", () => html(<VisualArtPage />, 200, "pt_br"))
    )
    .post("/change-lang", async ({ request, set }) => {
      if (!request.body) {
        return html(<>Bad Request</>, 400);
      }

      const oldUrl = request.headers.get("hx-current-url") ?? "/";
      const langParam = (await Bun.readableStreamToText(request.body)).replace("lang=","");
      const url = changeLanguageInUrl(oldUrl, langParam) ?? oldUrl;
      
      const response = html(<HomePage />, 200, langParam)
      response.headers.set("hx-push-url", url);
      response.headers.set("HX-Redirect", url);
      response.headers.set("HX-Refresh", "true");

      return response;
    })
    .onError(({ code, error, set, store, request }) => {
      if (code === "NOT_FOUND") {
        console.log(`[404]: ${request.method}: ${request.url}`);

        set.status = 404;
        return html(<NotFoundPage />, 404);
      }
    })
    .listen(3000);

  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
}
