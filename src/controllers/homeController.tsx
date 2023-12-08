import { HomePage } from "../components/HomePage";
import { html } from "../response";

export function homePage(language?: string): Response {
  return html(<HomePage />, 200, language);
}
