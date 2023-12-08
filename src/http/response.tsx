import { ReactElement } from "react";
import { NotFoundPage } from "../components/NotFoundPage";
import { renderToString } from "react-dom/server";
import { I18nextProvider } from "react-i18next";
import i18n from "../locale/i18n";
import TranslationWrapper from "../components/TranslationWrapper";

declare module I18nextProvider {
  export interface I18nextProviderProps {
    reportNamespaces: any;
  }
}

export function serve_static(static_dir: string, req: Request): Response {
  const url = new URL(req.url);
  const file = Bun.file(`${static_dir}${url.pathname}`);
  if (file.size === 0) {
    console.log(`[static]: no file found: ${req.method}: ${req.url}`);
    return html(<NotFoundPage />, 404);
  }
  return new Response(file);
}

export function html(
  component: ReactElement,
  status = 200,
  language = "en"
): Response {
  const translatedComponent = (
    <TranslationWrapper language={language}>
      {/* @ts-ignore | Ignoring because of a typing error in the react-i18next package. */}
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
