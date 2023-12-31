import { MusicPage } from "../components/MusicPage";
import { html } from "../http/response";

export function musicPage(language?: string): Response {
  return html(<MusicPage />, 200, language);
}