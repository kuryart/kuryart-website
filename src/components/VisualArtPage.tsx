import { Hero } from "./Hero";
import { Layout } from "./Layout";
import { t } from "../localization";

export function VisualArtPage() {
  return (
    <Layout title={t("visual.title")}>
      <Hero title={t("visual.title")}>
        {t("visual.text")}
      </Hero>
    </Layout>
  );
}
