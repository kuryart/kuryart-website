import { Hero } from "./Hero";
import { Layout } from "./Layout";
import { useTranslation } from "react-i18next";

export function VisualArtPage() {
  const { t } = useTranslation();

  return (
    <Layout title={t("visual.title")}>
      <Hero title={t("visual.title")}>
        {t("visual.text")}
      </Hero>
    </Layout>
  );
}
