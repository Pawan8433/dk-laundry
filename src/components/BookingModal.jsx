import { useEffect, useRef } from "react";
import BookingForm from "./BookingForm.jsx";
import { useBooking } from "../context/BookingContext.jsx";

export default function BookingModal() {
  const { preselectedService, closeBooking } = useBooking();
  const modalRef = useRef(null);
  const restoreRef = useRef(null);

  useEffect(() => {
    // Remember what had focus so we can restore it when the dialog closes.
    restoreRef.current = document.activeElement;

    const focusables = () =>
      modalRef.current
        ? modalRef.current.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        : [];

    // Move focus to the dialog itself — announces its label to screen readers
    // without auto-popping the mobile keyboard on the first input.
    if (modalRef.current) modalRef.current.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        closeBooking();
        return;
      }
      if (e.key !== "Tab") return;
      // Focus trap: keep Tab within the dialog. If focus has escaped (e.g. the
      // form swapped to its result view and the focused button was removed,
      // leaving focus on <body>), pull it back to the first focusable.
      const items = focusables();
      if (items.length === 0) return;
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      const active = document.activeElement;
      if (!modalRef.current || !modalRef.current.contains(active)) {
        e.preventDefault();
        firstEl.focus();
      } else if (e.shiftKey && active === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && active === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (restoreRef.current && restoreRef.current.focus) restoreRef.current.focus();
    };
  }, [closeBooking]);

  return (
    <div className="modal-overlay" onClick={closeBooking}>
      <div
        className="modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label="Book a service"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <h2>Book a Service</h2>
          <button
            className="modal-close"
            type="button"
            aria-label="Close booking dialog"
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
