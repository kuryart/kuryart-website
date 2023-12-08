import { HomePage } from "../components/HomePage";
import { html } from "../http/response";

export function homePage(language?: string): Response {
  return html(<HomePage />, 200, language);
}
