import Elysia from "elysia";
import { changeLang } from "./controllers/languageController";
import { homePage } from "./controllers/homeController";
import { musicPage } from "./controllers/musicController";
import { gamePage } from "./controllers/gameController";
import { visualArtPage } from "./controllers/visualArtController";
import {
  badRequest,
  forbidden,
  internalServerError,
  notFound,
} from "./controllers/errorController";

export const routes = (app: Elysia) =>
  app
    .get("/", ({set}) => { set.redirect = "/en"})
    .get("/music", ({set}) => { set.redirect = "/en/music"})
    .get("/game", ({set}) => { set.redirect = "/en/game"})
    .get("/visual-art", ({set}) => { set.redirect = "/en/visual-art"})
    .group("/en", (app) =>
      app
        .get("/", () => homePage("en"))
        .get("/music", () => musicPage("en"))
        .get("/game", () => gamePage("en"))
        .get("/visual-art", () => visualArtPage("en"))
    )
    .group("/es", (app) =>
      app
        .get("/", () => homePage("es"))
        .get("/music", () => musicPage("es"))
        .get("/game", () => gamePage("es"))
        .get("/visual-art", () => visualArtPage("es"))
    )
    .group("/pt_br", (app) =>
      app
        .get("/", () => homePage("pt_br"))
        .get("/music", () => musicPage("pt_br"))
        .get("/game", () => gamePage("pt_br"))
        .get("/visual-art", () => visualArtPage("pt_br"))
    )
    .post("/change-lang", ({ request }) => changeLang(request))
    .onError(({ code, request }) => {
      if (code === "NOT_FOUND") return notFound(request);
      if (code === "UNKNOWN") return internalServerError(request);
      if (code === "VALIDATION") return forbidden(request);
      if (code === "PARSE") return internalServerError(request);
      if (code === "INTERNAL_SERVER_ERROR") return internalServerError(request);
      if (code === "INVALID_COOKIE_SIGNATURE") return badRequest(request);
    });
