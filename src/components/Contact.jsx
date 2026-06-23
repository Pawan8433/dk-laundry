import { CONTACT, BUSINESS } from "../data/business.js";
import Icon from "./Icon.jsx";
import { useBooking } from "../context/BookingContext.jsx";

const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  CONTACT.mapQuery
)}&z=15&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  CONTACT.mapQuery
)}`;
const qr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&margin=8&data=${encodeURIComponent(
  `https://wa.me/${CONTACT.whatsapp}`
)}`;

export default function Contact({ showHeader = true }) {
  const { openBooking } = useBooking();
  return (
    <section className={showHeader ? "section" : "section section-top"} id="contact">
      <div className="container">
        {showHeader && (
          <header className="section-head reveal">
            <span className="kicker">Visit or call us</span>
            <h2>Get in touch</h2>
            <p>Free pickup &amp; delivery across Andheri West and nearby areas.</p>
          </header>
        )}

        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="contact-row">
              <span className="contact-ic"><Icon name="pin" /></span>
              <div>
                <h4>Our Shop</h4>
                <p>
                  {CONTACT.address.line1}<br />
                  {CONTACT.address.line2}<br />
                  {CONTACT.address.area}
                </p>
                <a className="contact-link" href={mapLink} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-ic"><Icon name="phone" /></span>
              <div>
                <h4>Call Us</h4>
                {CONTACT.phones.map((p) => (
                  <a className="contact-phone" key={p.dial} href={`tel:${p.dial}`}>{p.display}</a>
                ))}
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-ic"><Icon name="mail" /></span>
              <div>
                <h4>Email</h4>
                <a className="contact-link" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-ic"><Icon name="clock" /></span>
              <div>
                <h4>Business Hours</h4>
                {CONTACT.hours.map((h) => (
                  <p key={h.day} className="contact-hours">
                    <span>{h.day}</span><span>{h.time}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="contact-actions">
              <button className="btn btn-primary" type="button" onClick={() => openBooking()}>
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

            <div className="contact-qr">
              <img
                src={qr}
                alt={`Scan to chat with ${BUSINESS.name} on WhatsApp`}
                width="110"
                height="110"
                loading="lazy"
              />
              <span>Scan to chat<br />on WhatsApp</span>
            </div>
          </div>

          <div className="contact-map reveal">
            <iframe
              title="DK Laundry location"
              src={mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
