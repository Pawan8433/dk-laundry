import { Link } from "react-router-dom";
import { HIGHLIGHTS, BUSINESS, STATS } from "../data/business.js";
import { useBooking } from "../context/BookingContext.jsx";

export default function Hero() {
  const { openBooking } = useBooking();
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy reveal in">
          <span className="hero-eyebrow">Since {BUSINESS.since} · Andheri West, Mumbai</span>
          <h1>
            Premium Laundry &amp;<br />Dry Cleaning Service
          </h1>
          <p className="hero-sub">
            {STATS.years}+ years of trusted, professional fabric care —
            with free pickup and delivery right to your doorstep.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" type="button" onClick={() => openBooking()}>
              Book Pickup
            </button>
            <Link className="btn btn-ghost" to="/pricing">View Pricing</Link>
          </div>

          <ul className="hero-highlights">
            {HIGHLIGHTS.map((h) => (
              <li key={h}><span className="tick">✓</span> {h}</li>
            ))}
          </ul>
        </div>

        <div className="hero-media reveal in">
          <img
            src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=900&q=80"
            alt="Freshly pressed shirts at DK Laundry"
            width="900"
            height="600"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            onError={(e) => e.currentTarget.parentElement.classList.add("img-fallback")}
          />
          <div className="hero-badge">
            <span className="hero-badge-num">{STATS.years}+</span>
            <span className="hero-badge-label">Years of Trust</span>
          </div>
        </div>
      </div>
    </section>
  );
}
