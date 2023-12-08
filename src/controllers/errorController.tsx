import { NotFoundPage } from "../components/NotFoundPage";
import { html } from "../response";

export function notFound(request: Request): Response {
  console.log(`[404]: ${request.method}: ${request.url}`);
  return html(<NotFoundPage />, 404);
}

export function internalServerError(request: Request): Response {
  console.log(`[500]: ${request.method}: ${request.url}`);
  return html(<NotFoundPage />, 500);
}

export function forbidden(request: Request): Response {
  console.log(`[403]: ${request.method}: ${request.url}`);
  return html(<NotFoundPage />, 403);
}

export function badRequest(request: Request): Response {
  console.log(`[400]: ${request.method}: ${request.url}`);
  return html(<NotFoundPage />, 400);
}
