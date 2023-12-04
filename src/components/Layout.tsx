import { ReactNode } from "react";
import { Header } from "./Header";
import { BottomNav } from "./BottomNav";

export function Layout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <html data-theme="kuryart-dark" className="h-full" lang="en">
      <head>
        <title>{title}</title>
        <meta
          name="description"
          content="KuryArt"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/style.css" />
        <script src="/htmx.js" defer></script>
        <script src="/hyperscript.js" defer></script>
      </head>
      <body className="h-full">
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
