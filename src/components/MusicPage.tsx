import { Hero } from "./Hero";
import { Layout } from "./Layout";
import { useTranslation } from "react-i18next";

export function MusicPage() {
  const { t } = useTranslation();

  return (
    <Layout title={t("music.title")}>
      <Hero title={t("music.title")}>
        {t("music.text")}
      </Hero>
    </Layout>
  );
}
