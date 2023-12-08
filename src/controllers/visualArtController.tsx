import { VisualArtPage } from "../components/VisualArtPage";
import { html } from "../http/response";

export function visualArtPage(language?: string): Response {
  return html(<VisualArtPage />, 200, language);
}
