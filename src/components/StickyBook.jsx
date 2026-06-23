import { useBooking } from "../context/BookingContext.jsx";
import { CONTACT } from "../data/business.js";

// Mobile-only sticky bar: Book Pickup + WhatsApp, always one tap away.
export default function StickyBook() {
  const { openBooking } = useBooking();
  return (
    <div className="sticky-book">
      <a
        className="sticky-wa"
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>
      <button className="btn btn-primary sticky-cta" type="button" onClick={() => openBooking()}>
        Book Pickup
      </button>
    </div>
  );
}
