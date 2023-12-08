import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { htmx } from "elysia-htmx";
import { routes } from "./routes";
import { setupLocalization } from "./localization";

export function start() {
  setupLocalization();

  const app = new Elysia()
    .use(staticPlugin())
    .use(htmx())
    .use(routes)
    .listen(3000);

  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
}
