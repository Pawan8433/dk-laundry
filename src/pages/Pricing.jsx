import PageHeader from "../components/PageHeader.jsx";
import Faq from "../components/Faq.jsx";
import CTA from "../components/CTA.jsx";
import { SERVICES, PRICING_PREVIEW } from "../data/business.js";
import { useBooking } from "../context/BookingContext.jsx";
import useReveal from "../hooks/useReveal.js";

export default function Pricing() {
  const { openBooking } = useBooking();
  useReveal();

  return (
    <>
      <PageHeader
        kicker="Transparent rates"
        title="Simple, honest pricing"
        subtitle="No hidden charges. Free pickup & delivery on every order."
        crumb="Pricing"
      />

      <section className="section section-top">
        <div className="container">
          <div className="price-cards">
            {PRICING_PREVIEW.map((p) => (
              <article className={p.popular ? "price-card popular reveal" : "price-card reveal"} key={p.id}>
                {p.popular && <span className="price-flag">Most Popular</span>}
                <h3>{p.name}</h3>
                <div className="price-amount">
                  ₹{p.price}<span className="price-unit">/{p.unit}</span>
                </div>
                <button className="btn btn-primary price-btn" type="button" onClick={() => openBooking(p.name)}>
                  Book Now
                </button>
              </article>
            ))}
          </div>

          <div className="price-table reveal">
            <h3 className="price-table-title">Full price list</h3>
            {SERVICES.map((p) => (
              <div className="price-row" key={p.id}>
                <span className="price-row-name">{p.name}</span>
                <span className="price-row-dots" aria-hidden="true" />
                <span className="price-row-val">
                  {p.price == null ? (
                    <strong>On request</strong>
                  ) : (
                    <>{p.prefix}<strong>₹{p.price}</strong> <em>{p.unit}</em></>
                  )}
                </span>
              </div>
            ))}
            <p className="price-note">
              🎁 Special offer: free pickup &amp; delivery on 10+ clothes. Express service available.
            </p>
          </div>
        </div>
      </section>

      <Faq />
      <CTA />
    </>
  );
}
