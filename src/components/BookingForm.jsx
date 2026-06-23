import { useState } from "react";
import { SERVICES } from "../data/business.js";
import { submitBooking } from "../api/booking.js";

const SERVICE_OPTIONS = ["General Enquiry", ...SERVICES.map((s) => s.name)];

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  googleMapsAddress: "",
  pickupAddress: "",
  serviceInterested: "General Enquiry",
  preferredPickupDate: "",
  additionalMessage: "",
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.phone.trim()) errors.phone = "Phone is required.";
  else if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim()))
    errors.phone = "Enter a valid phone number.";
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = "Enter a valid email.";
  if (!form.pickupAddress.trim()) errors.pickupAddress = "Pickup address is required.";
  return errors;
}

export default function BookingForm({ preselectedService, onDone }) {
  const [form, setForm] = useState({
    ...EMPTY,
    serviceInterested: preselectedService || "General Enquiry",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [locating, setLocating] = useState(false);

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const openMaps = () =>
    window.open("https://www.google.com/maps", "_blank", "noopener,noreferrer");

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      setErrors((e) => ({ ...e, googleMapsAddress: "Geolocation is not supported." }));
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        update(
          "googleMapsAddress",
          `https://www.google.com/maps?q=${latitude},${longitude}`
        );
        setLocating(false);
      },
      () => {
        setErrors((e) => ({
          ...e,
          googleMapsAddress: "Unable to fetch location. Please allow access or paste a link.",
        }));
        setLocating(false);
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }
    setSubmitting(true);
    const res = await submitBooking(form);
    setSubmitting(false);
    setResult(res);
  };

  if (result) {
    return (
      <div className="booking-result">
        {result.saved ? (
          <>
            <div className="result-icon ok">✓</div>
            <h3>Request received!</h3>
            <p>We'll contact you within 24 hours to confirm your booking.</p>
          </>
        ) : (
          <>
            <div className="result-icon warn">!</div>
            <h3>Couldn't save to our system</h3>
            <p>{result.error} You can still notify us directly on WhatsApp below.</p>
          </>
        )}

        {result.whatsappLink && (
          <a
            className="whatsapp-btn"
            href={result.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Send details on WhatsApp
          </a>
        )}

        <button className="ghost-btn" type="button" onClick={onDone}>
          Close
        </button>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="booking-field">
        <label className="booking-field-label">Full Name <span>*</span></label>
        <input
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Enter your name"
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="booking-field-error">{errors.name}</p>}
      </div>

      <div className="booking-field">
        <label className="booking-field-label">Phone <span>*</span></label>
        <input
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="Enter your phone number"
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className="booking-field-error">{errors.phone}</p>}
      </div>

      <div className="booking-field">
        <label className="booking-field-label">Email</label>
        <input
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="Enter your email (optional)"
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="booking-field-error">{errors.email}</p>}
      </div>

      <div className="booking-field">
        <label className="booking-field-label">Google Maps Address</label>
        <input
          value={form.googleMapsAddress}
          onChange={(e) => update("googleMapsAddress", e.target.value)}
          placeholder="Paste Google Maps link or place pin"
        />
        <div className="booking-map-actions">
          <button type="button" className="booking-map-btn" onClick={openMaps}>
            Open Google Maps
          </button>
          <button
            type="button"
            className="booking-map-btn booking-map-btn--secondary"
            onClick={useCurrentLocation}
            disabled={locating}
          >
            {locating ? "Fetching location..." : "Use Current Location"}
          </button>
        </div>
        {errors.googleMapsAddress && (
          <p className="booking-field-error">{errors.googleMapsAddress}</p>
        )}
      </div>

      <div className="booking-field">
        <label className="booking-field-label">Pickup Address <span>*</span></label>
        <textarea
          value={form.pickupAddress}
          onChange={(e) => update("pickupAddress", e.target.value)}
          placeholder="Enter your complete address"
          rows={3}
          aria-invalid={!!errors.pickupAddress}
        />
        {errors.pickupAddress && (
          <p className="booking-field-error">{errors.pickupAddress}</p>
        )}
      </div>

      <div className="booking-field">
        <label className="booking-field-label">Service Interested In</label>
        <select
          value={form.serviceInterested}
          onChange={(e) => update("serviceInterested", e.target.value)}
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="booking-field">
        <label className="booking-field-label">Preferred Pickup Date</label>
        <input
          type="date"
          value={form.preferredPickupDate}
          onChange={(e) => update("preferredPickupDate", e.target.value)}
        />
      </div>

      <div className="booking-field">
        <label className="booking-field-label">Additional Message</label>
        <textarea
          value={form.additionalMessage}
          onChange={(e) => update("additionalMessage", e.target.value)}
          placeholder="Any special instructions or requirements"
          rows={3}
        />
      </div>

      <button className="booking-submit" type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Request"}
      </button>
      <p className="booking-note">
        We'll contact you within 24 hours to confirm your booking.
      </p>
    </form>
  );
}
