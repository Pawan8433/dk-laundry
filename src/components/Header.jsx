import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import Icon from "./Icon.jsx";
import { BUSINESS, CONTACT } from "../data/business.js";
import { useBooking } from "../context/BookingContext.jsx";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={scrolled ? "site-header scrolled" : "site-header"}>
      <div className="topbar">
        <span className="topbar-since">Trusted since {BUSINESS.since}</span>
        <a className="topbar-phone" href={`tel:${CONTACT.phones[0].dial}`}>
          <Icon name="phone" size={14} /> {CONTACT.phones[0].display}
        </a>
      </div>

      <div className="header-main">
        <Link to="/" className="brand" onClick={close}>
          <Logo size={46} />
          <span className="brand-words">
            <span className="brand-name">{BUSINESS.name}</span>
            <span className="brand-sub">&amp; Dry Cleaners</span>
          </span>
        </Link>

        <nav className={menuOpen ? "site-nav open" : "site-nav"} aria-label="Primary">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
              onClick={close}
            >
              {n.label}
            </NavLink>
          ))}
          <button
            className="btn btn-primary nav-cta"
            type="button"
            onClick={() => { close(); openBooking(); }}
          >
            Book Pickup
          </button>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
