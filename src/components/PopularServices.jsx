import { Link } from "react-router-dom";
import { SERVICES } from "../data/business.js";
import ServiceCard from "./ServiceCard.jsx";

export default function PopularServices() {
  const featured = SERVICES.slice(0, 6);
  return (
    <section className="section">
      <div className="container">
        <header className="section-head reveal">
          <span className="kicker">What we do</span>
          <h2>Services crafted for every fabric</h2>
          <p>From everyday wash &amp; fold to expert dry cleaning — handled with care.</p>
        </header>

        <div className="sc-grid">
          {featured.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        <div className="center-cta reveal">
          <Link to="/services" className="btn btn-ghost">View all services →</Link>
        </div>
      </div>
    </section>
  );
}
