import api from "./client";

const ADMIN_WHATSAPP = import.meta.env.VITE_ADMIN_WHATSAPP || "";

// Build a readable WhatsApp message from the booking payload.
function buildWhatsAppMessage(data) {
  const line = "━━━━━━━━━━━━━━━";
  const v = (x) => (x && String(x).trim() ? x : "—");
  return [
    "*New DK Laundry Booking*",
    line,
    "*Customer*",
    `• *Name:* ${v(data.name)}`,
    `• *Phone:* ${v(data.phone)}`,
    `• *Email:* ${v(data.email)}`,
    "",
    "*Service Request*",
    `• *Service:* ${v(data.serviceInterested)}`,
    `• *Pickup Date:* ${v(data.preferredPickupDate)}`,
    "",
    "*Location*",
    `• *Google Maps:* ${v(data.googleMapsAddress)}`,
    `• *Address:* ${v(data.pickupAddress)}`,
    "",
    "*Additional Message*",
    v(data.additionalMessage),
    "",
    line,
  ].join("\n");
}

// Returns a wa.me link (or null if the admin number isn't configured).
export function getWhatsAppLink(data) {
  if (!ADMIN_WHATSAPP) return null;
  const text = encodeURIComponent(buildWhatsAppMessage(data));
  return `https://wa.me/${ADMIN_WHATSAPP}?text=${text}`;
}

// Submit a booking to BOTH the backend (MongoDB) and WhatsApp.
// Saving to the DB is the source of truth; WhatsApp is an admin notification.
export async function submitBooking(data) {
  let saved = false;
  let savedId = null;
  let error = null;

  try {
    const res = await api.post("/api/bookings", data);
    saved = true;
    savedId = res.data?._id ?? res.data?.id ?? null;
  } catch (err) {
    error = err?.response?.data?.message || err?.message || "Could not save booking.";
  }

  const whatsappLink = getWhatsAppLink(data);

  return { saved, savedId, error, whatsappLink };
}
