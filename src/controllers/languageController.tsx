import { HomePage } from "../components/HomePage";
import { html } from "../response";

function changeLanguageInUrl(url: string, newLanguage: string): string {
  try {
    const parsedUrl = new URL(url);
    const pathParts = parsedUrl.pathname.split("/");
    const languageIndex = pathParts.findIndex((part) =>
      ["pt_br", "en", "es"].includes(part)
    );
    if (languageIndex !== -1) {
      pathParts[languageIndex] = newLanguage;
    } else {
      pathParts.unshift(newLanguage);
    }
    parsedUrl.pathname = pathParts.join("/");

    return parsedUrl.toString();
  } catch (error) {
    throw new Error("A URL não é válida.");
  }
}

export async function changeLang(request: Request) {
  if (!request.body) {
    return html(<>Bad Request</>, 400);
  }

  const oldUrl = request.headers.get("hx-current-url") ?? "/";
  const langParam = (await Bun.readableStreamToText(request.body)).replace(
    "lang=",
    ""
  );
  const url = changeLanguageInUrl(oldUrl, langParam) ?? oldUrl;

  const response = html(<HomePage />, 200, langParam);
  response.headers.set("hx-push-url", url);
  response.headers.set("HX-Redirect", url);
  response.headers.set("HX-Refresh", "true");

  return response;
}
