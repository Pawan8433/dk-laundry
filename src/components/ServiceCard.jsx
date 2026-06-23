import { useNavigate } from "react-router-dom";
import Icon from "./Icon.jsx";
import { useBooking } from "../context/BookingContext.jsx";

function priceNode(s) {
  if (s.price == null) return <span className="sc-price-req">On request</span>;
  return (
    <span className="sc-price">
      {s.prefix}<strong>₹{s.price}</strong> <em>{s.unit}</em>
    </span>
  );
}

export default function ServiceCard({ service }) {
  const navigate = useNavigate();
  const { openBooking } = useBooking();
  const go = () => navigate(`/services/${service.id}`);

  return (
    <article
      className="sc-card"
      onClick={go}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && go()}
    >
      <span className="sc-ic"><Icon name={service.icon} size={26} /></span>

      <div className="sc-body">
        <div className="sc-top">
          <h3>{service.name}</h3>
          {service.popular && <span className="sc-flag">Popular</span>}
        </div>
        <span className="sc-cat">{service.category}</span>
        <p className="sc-desc">{service.short}</p>
        {priceNode(service)}

        <div className="sc-actions">
          <button
            className="btn btn-primary sc-book"
            type="button"
            onClick={(e) => { e.stopPropagation(); openBooking(service.name); }}
          >
            Book Now
          </button>
          <span className="sc-view">View details →</span>
        </div>
      </div>

      <span className="sc-chevron" aria-hidden="true">›</span>
    </article>
  );
}
