import { useState, useEffect, useRef } from "react";
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
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  // Sticky shadow + smart hide/show: header slides away when scrolling down
  // and reappears the moment the user scrolls up. Paused while the menu is open.
  useEffect(() => {
    lastY.current = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 12);
        const goingDown = y > lastY.current;
        if (!menuOpen && y > 160 && goingDown && y - lastY.current > 6) {
          setHidden(true);
        } else if (!goingDown || y < 80) {
          setHidden(false);
        }
        lastY.current = y;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // Lock body scroll while the mobile menu is open (no layout shift / bleed-through).
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  const cls =
    "site-header" +
    (scrolled ? " scrolled" : "") +
    (hidden ? " header-hidden" : "");

  return (
    <>
    <header className={cls}>
      <div className="topbar">
        <span className="topbar-since">Trusted since {BUSINESS.since}</span>
        <a className="topbar-phone" href={`tel:${CONTACT.phones[0].dial}`}>
          <Icon name="phone" size={14} /> {CONTACT.phones[0].display}
        </a>
      </div>

      <div className="header-main">
        <Link to="/" className="brand" onClick={close} aria-label={`${BUSINESS.fullName} — home`}>
          <Logo size={46} />
          <span className="brand-words">
            <span className="brand-name">{BUSINESS.name}</span>
            <span className="brand-sub">&amp; Dry Cleaners</span>
          </span>
        </Link>

        <nav className={menuOpen ? "site-nav open" : "site-nav"} id="primary-nav" aria-label="Primary">
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
          className={menuOpen ? "menu-toggle open" : "menu-toggle"}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
    {menuOpen && <button className="nav-scrim" type="button" aria-label="Close menu" onClick={close} />}
    </>
  );
}
