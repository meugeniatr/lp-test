import Image from "next/image";
import "../content.css";

export default function Hero({ content, isFocused = false }) {
  const { canonical_url, headlines, subheadlines, promo_items } = content;
  return (
    <a
      href={canonical_url}
      className={isFocused ? "article-link-focused" : "article-link"}
      target="_blank"
    >
      {isFocused && <h2 className="headline">{headlines.basic}</h2>}
      <img
        // temporary change for getting an image
        // src={promo_items.url}
        src="https://www.leparisien.fr/resizer/xZekq_vnVt2tFA89y8TagHbmehg=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/CXVRJ6VRGZCNHDUBJZ3SZKDM5E.jpg"
        alt={promo_items.caption}
        className={isFocused ? "img-hero" : "img-gallery"}
      />
      {isFocused ? (
        <p className="description">{subheadlines.basic}</p>
      ) : (
        <h2 className="headline-gallery">{headlines.basic}</h2>
      )}
    </a>
  );
}
