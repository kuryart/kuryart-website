import { ReactNode } from "react";
import { Header } from "./Header";

export function Layout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <html
      data-theme="kuryart-dark"
      className="h-full"
    >
      <head>
        <title>{title}</title>
        <meta name="description" content="KuryArt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" type="image/x-icon" href="/public/favicon.ico" />
        <link rel="stylesheet" href="/public/style.css" />
        <script src="/public/htmx.js" defer></script>
        <script src="/public/hyperscript.js" defer></script>
        <script type="text/hyperscript" src="/public/behaviors._hs"></script>
      </head>
      <body className="h-full">
        {/* <div className="overlay"></div> */}
        <main className="max-w-screen-md mx-auto flex flex-col gap-8">
          <header>
            <Header />
          </header>
          <section>{children}</section>
          <footer className="text-center mt-auto p-12 text-sm text-base-content/60">
            <p>
              <em>
                Built with{" "}
                <a
                  href="https://bun.sh"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bun
                </a>
                ,{" "}
                <a
                  href="https://tailwindcss.com"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  TailwindCSS
                </a>{" "}
                and{" "}
                <a
                  href="https://daisyui.com"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  DaisyUI
                </a>
              </em>
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
