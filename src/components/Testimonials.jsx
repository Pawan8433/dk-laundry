import { TESTIMONIALS } from "../data/business.js";

function Stars({ n }) {
  return (
    <span className="stars" aria-label={`${n} out of 5`}>
      {"★".repeat(n)}{"☆".repeat(5 - n)}
    </span>
  );
}

export default function Testimonials({ showHeader = true, tint = true }) {
  return (
    <section className={tint ? "section section-tint" : "section"}>
      <div className="container">
        {showHeader && (
          <header className="section-head reveal">
            <span className="kicker">Loved by Andheri</span>
            <h2>What our customers say</h2>
          </header>
        )}

        <div className="review-grid">
          {TESTIMONIALS.map((t) => (
            <article className="review-card reveal" key={t.name}>
              <div className="review-top">
                <span className="review-avatar">{t.initial}</span>
                <div>
                  <p className="review-name">{t.name}</p>
                  <Stars n={t.rating} />
                </div>
                <span className="review-g" title="Google review">G</span>
              </div>
              <p className="review-text">“{t.text}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
