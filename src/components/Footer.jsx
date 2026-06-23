import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { BUSINESS, CONTACT, SERVICES } from "../data/business.js";

const QUICK = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <Logo size={48} light />
            <span>
              <strong>{BUSINESS.name}</strong>
              <small>{BUSINESS.nameHindi}</small>
            </span>
          </div>
          <p className="footer-tag">{BUSINESS.tagline}.</p>
          <p className="footer-since">Dry Cleaning · Steam Iron · Shoe Laundry · Since {BUSINESS.since}</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          {QUICK.map((q) => (
            <Link key={q.to} to={q.to}>{q.label}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          {SERVICES.slice(0, 6).map((s) => (
            <Link key={s.id} to={`/services/${s.id}`}>{s.name}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          {CONTACT.phones.map((p) => (
            <a key={p.dial} href={`tel:${p.dial}`}>{p.display}</a>
          ))}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <p className="footer-addr">
            {CONTACT.address.line1}, {CONTACT.address.area}
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} {BUSINESS.fullName}. All rights reserved.</span>
        <span>Managed by {BUSINESS.manager}</span>
      </div>
    </footer>
  );
}
