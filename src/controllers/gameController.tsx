import { GamePage } from "../components/GamePage";
import { html } from "../http/response";

export function gamePage(language?: string): Response {
  return html(<GamePage />, 200, language);
}