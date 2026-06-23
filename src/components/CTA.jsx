import { CONTACT } from "../data/business.js";
import { useBooking } from "../context/BookingContext.jsx";

export default function CTA() {
  const { openBooking } = useBooking();
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>Ready for fresh, clean laundry?</h2>
          <p>Free pickup &amp; delivery across Andheri West. Book in under a minute.</p>
        </div>
        <div className="cta-actions">
          <button className="btn btn-light" type="button" onClick={() => openBooking()}>
            Book Pickup
          </button>
          <a
            className="btn btn-whatsapp"
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
