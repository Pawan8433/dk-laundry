import { useNavigate } from "react-router-dom";
import Icon from "./Icon.jsx";

function priceNode(s) {
  if (s.price == null) return <span className="sc-price-req">On request</span>;
  return (
    <span className="sc-price">
      {s.prefix}<strong>₹{s.price}</strong> <em>{s.unit}</em>
    </span>
  );
}

// A single, clear action per card (view details) keeps the CTA hierarchy clean —
// booking lives on the detail page, header, sticky bar and CTA band instead of
// repeating a "Book Now" button on every card in the grid.
export default function ServiceCard({ service }) {
  const navigate = useNavigate();
  const go = () => navigate(`/services/${service.id}`);

  return (
    <article
      className="sc-card"
      onClick={go}
      role="button"
      tabIndex={0}
      aria-label={`${service.name} — view details`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          go();
        }
      }}
    >
      <span className="sc-ic"><Icon name={service.icon} size={26} /></span>

      <div className="sc-body">
        <div className="sc-top">
          <h3>{service.name}</h3>
          {service.popular && <span className="sc-flag">Popular</span>}
        </div>
        <span className="sc-cat">{service.category}</span>
        <p className="sc-desc">{service.short}</p>

        <div className="sc-foot">
          {priceNode(service)}
          <span className="sc-view">View details →</span>
        </div>
      </div>

      <span className="sc-chevron" aria-hidden="true">›</span>
    </article>
  );
}
