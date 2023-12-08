import { Hero } from "./Hero";
import { Layout } from "./Layout";
import { t } from "../localization";

export function MusicPage() {
  return (
    <Layout title={t("music.title")}>
      <Hero title={t("music.title")}>
        {t("music.text")}
      </Hero>
    </Layout>
  );
}
