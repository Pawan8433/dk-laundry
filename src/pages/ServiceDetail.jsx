import { useParams, Link, useNavigate } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { getServiceById, SERVICES, STEPS } from "../data/business.js";
import { useBooking } from "../context/BookingContext.jsx";

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openBooking } = useBooking();
  const service = getServiceById(id);

  if (!service) {
    return (
      <section className="section">
        <div className="container empty-page">
          <h1>Service not found</h1>
          <p>The service you’re looking for doesn’t exist.</p>
          <Link to="/services" className="btn btn-primary">Back to Services</Link>
        </div>
      </section>
    );
  }

  const related = SERVICES.filter(
    (s) => s.category === service.category && s.id !== service.id
  ).slice(0, 3);

  const priceText =
    service.price == null
      ? "On request"
      : `${service.prefix}₹${service.price} ${service.unit}`;

  return (
    <>
      <section className="detail-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>/</span>
            <Link to="/services">Services</Link><span>/</span>
            <span className="crumb-current">{service.name}</span>
          </nav>

          <button className="detail-back" type="button" onClick={() => navigate(-1)}>
            <Icon name="back" size={18} /> Back
          </button>

          <div className="detail-hero-grid">
            <div className="detail-head">
              <span className="detail-ic"><Icon name={service.icon} size={34} /></span>
              <span className="sc-cat">{service.category}</span>
              <h1>{service.name}</h1>
              <p className="detail-lead">{service.long}</p>

              <div className="detail-price-row">
                <div className="detail-price">
                  <span className="detail-price-label">Price</span>
                  <span className="detail-price-val">{priceText}</span>
                </div>
                <div className="detail-price">
                  <span className="detail-price-label">Turnaround</span>
                  <span className="detail-price-val">{service.turnaround}</span>
                </div>
              </div>

              <div className="detail-actions">
                <button className="btn btn-primary" type="button" onClick={() => openBooking(service.name)}>
                  Book This Service
                </button>
                <Link className="btn btn-ghost" to="/pricing">View Full Pricing</Link>
              </div>
            </div>

            <aside className="detail-card">
              <h3>What’s included</h3>
              <ul className="detail-includes">
                {service.includes.map((it) => (
                  <li key={it}><span className="inc-check"><Icon name="check" size={14} /></span>{it}</li>
                ))}
              </ul>
              <div className="detail-card-foot">
                <span className="tick">✓</span> Free pickup &amp; delivery included
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <header className="section-head">
            <span className="kicker">Simple process</span>
            <h2>How it works</h2>
          </header>
          <ol className="timeline">
            {STEPS.map((s, i) => (
              <li className="timeline-step" key={s.title}>
                <span className="timeline-num">{i + 1}</span>
                <div className="timeline-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <header className="section-head">
              <span className="kicker">You may also like</span>
              <h2>Related services</h2>
            </header>
            <div className="sc-grid">
              {related.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
