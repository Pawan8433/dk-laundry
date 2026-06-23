import { useEffect } from "react";
import BookingForm from "./BookingForm.jsx";
import { useBooking } from "../context/BookingContext.jsx";

export default function BookingModal() {
  const { preselectedService, closeBooking } = useBooking();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeBooking();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [closeBooking]);

  return (
    <div className="modal-overlay" onClick={closeBooking}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label="Book a service"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <h2>Book a Service</h2>
          <button
            className="modal-close"
            type="button"
            aria-label="Close"
            onClick={closeBooking}
          >
            ×
          </button>
        </div>
        <BookingForm
          preselectedService={preselectedService}
          onDone={closeBooking}
        />
      </div>
    </div>
  );
}
