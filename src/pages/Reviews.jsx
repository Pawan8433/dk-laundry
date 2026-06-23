import PageHeader from "../components/PageHeader.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CTA from "../components/CTA.jsx";
import { TESTIMONIALS } from "../data/business.js";
import useReveal from "../hooks/useReveal.js";

export default function Reviews() {
  useReveal();
  const avg = (
    TESTIMONIALS.reduce((a, t) => a + t.rating, 0) / TESTIMONIALS.length
  ).toFixed(1);

  return (
    <>
      <PageHeader
        kicker="Loved by Andheri"
        title="Customer reviews"
        subtitle="Real feedback from families and businesses we serve."
        crumb="Reviews"
      />

      <section className="section section-top">
        <div className="container">
          <div className="reviews-summary reveal">
            <div className="reviews-score">{avg}</div>
            <div>
              <span className="stars">★★★★★</span>
              <p>Rated by {TESTIMONIALS.length}+ happy customers · Since 1985</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials showHeader={false} tint={false} />
      <CTA />
    </>
  );
}
