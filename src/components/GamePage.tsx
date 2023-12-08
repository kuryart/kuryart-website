import { Hero } from "./Hero";
import { Layout } from "./Layout";
import { t } from "../localization";

export function GamePage() {
  return (
    <Layout title={t("game.title")}>
      <Hero title={t("game.title")}>
        {t("game.text")}
      </Hero>
    </Layout>
  );
}
