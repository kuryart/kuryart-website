/**
 * Helpers for returning HTTP Responses.
 */
import { ReactElement } from "react";
import { NotFoundPage } from "./components/NotFoundPage";
import { renderToString } from "react-dom/server";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import TranslationWrapper from "./components/TranslationWrapper";

declare module I18nextProvider {
  export interface I18nextProviderProps {
    reportNamespaces: any;
  }
}

/**
 * Serve any matching file in the public directory.
 * If nothing matches, return a 404.
 */
export function serve_static(static_dir: string, req: Request): Response {
  const url = new URL(req.url);
  const file = Bun.file(`${static_dir}${url.pathname}`);
  if (file.size === 0) {
    console.log(`[static]: no file found: ${req.method}: ${req.url}`);
    return html(<NotFoundPage />, 404);
  }
  return new Response(file);
}

/**
 * Return an HTML response with the given status code and JSX component.
 * Uses react-dom renderToString to render the component to HTML.
 */
export function html(
  component: ReactElement,
  status = 200,
  language = "en"
): Response {
  const translatedComponent = (
    <TranslationWrapper language={language}>
      {/* @ts-ignore | Ignoring because of a typing error in the react-i18next package.*/} 
      <I18nextProvider i18n={i18n} defaultNS={"translation"}>
        {component}
      </I18nextProvider>
    </TranslationWrapper>
  );

  return new Response(renderToString(translatedComponent), {
    status,
    headers: { "Content-Type": "text/html" },
  });
}
