import { Hero } from "./Hero";
import { Layout } from "./Layout";

export function MusicPage() {
  const title = localization.title;
  return (
    <Layout title={title}>
      <Hero title={title}>
        <p>{localization.text}</p>
      </Hero>
    </Layout>
  );
}
