import { Hero } from "./Hero";
import { Layout } from "./Layout";

export function GamePage() {
  const title = localization.title;

  return (
    <Layout title={title}>
      <Hero title={title}>
        <p>{localization.text}</p>
      </Hero>
    </Layout>
  );
}
