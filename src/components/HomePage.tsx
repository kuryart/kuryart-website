import { Hero } from "./Hero";
import { Layout } from "./Layout";
import { t } from "../locale/localization";

export function HomePage() {
  return (
    <Layout title={t("home.title")}>
      <div className="flex flex-col gap-8">
        <Hero title={t("home.title")}>
          <p className="text-md">{t("home.text")}</p>
          <nav className="flex flex-col items-center gap-6 mx-auto">
            <a
              href="https://github.com/danawoodman/bun-htmx"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Check Out the Code on GitHub
            </a>
            <a href="/about" className="btn btn-ghost" hx-boost="true">
              About
            </a>
          </nav>
        </Hero>
        <section className="max-w-screen-md mx-auto flex flex-col gap-4 p-8">
          <h2 className="uppercase text-xl">
            <strong>HTMX</strong>
          </h2>
          <p className="text-sm text-base-content/80">
            <em>
              The "About" link above and the top menu uses{" "}
              <code className="text-accent">hx-boost="true"</code> to do
              client-side navigation.
            </em>
          </p>
          <p className="text-sm text-base-content/80">
            <em>
              The <code className="text-accent">&lt;CurrentTime /&gt;</code>{" "}
              component below uses{" "}
              <code className="text-accent">hx-trigger="load"</code> to fetch
              the current time from the server and display it (with a simulated
              delay on initial load).
            </em>
          </p>
        </section>
      </div>
    </Layout>
  );
}
