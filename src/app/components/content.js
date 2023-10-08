import "../components/content.css";
import Articles from "../../data/articles.json";
import EnContinu from "./static/en-continu";
import Hero from "./static/hero";
import ArticlesGrid from "./static/articles-grid";

export default function Content() {
  const galleryArticles = Articles.slice(1);
  console.log({ galleryArticles });
  return (
    <div className="layout-homepage__top">
      <div className="lp-container lp-container--fixed-narrow">
        <div className="arcad__wrapper">
          <section className="relative">
            <div className="content-wrapper-flex">
              <div className="content-main">
                <span className="divider">
                  <Hero content={Articles[0]} isFocused />
                </span>
                <ArticlesGrid articles={galleryArticles} />
              </div>
              <div className="content-sidebar">
                <EnContinu />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
