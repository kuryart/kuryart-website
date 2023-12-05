import { Hero } from "./Hero";
import { Layout } from "./Layout";
import { useTranslation } from "react-i18next";

export function GamePage() {
  const { t } = useTranslation();
  
  return (
    <Layout title={t("game.title")}>
      <Hero title={t("game.title")}>
        {t("game.text")}
      </Hero>
    </Layout>
  );
}
