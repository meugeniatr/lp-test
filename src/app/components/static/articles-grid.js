import "../content.css";
import Hero from "./hero";

export default function ArticlesGrid({ articles }) {
  return (
    <ul className="articles-grid">
      {articles.map((article) => {
        return (
          <li key={article._id}>
            <Hero content={article} />
            <span className="divider" />
          </li>
        );
      })}
    </ul>
  );
}
