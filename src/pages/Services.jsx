import { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import CTA from "../components/CTA.jsx";
import { SERVICES, CATEGORIES } from "../data/business.js";
import useReveal from "../hooks/useReveal.js";

export default function Services() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter((s) => {
      const inCat = category === "All" || s.category === category;
      const match =
        q.length === 0 ||
        s.name.toLowerCase().includes(q) ||
        s.short.toLowerCase().includes(q);
      return inCat && match;
    });
  }, [query, category]);

  useReveal([filtered.length, category]);

  return (
    <>
      <PageHeader
        kicker="Our services"
        title="Laundry & dry cleaning services"
        subtitle="Pick a service to see details and pricing, or book a free pickup."
        crumb="Services"
      />

      <section className="section section-top">
        <div className="container">
          <div className="services-search-bar">
            <span className="services-search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              placeholder="Search services..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search services"
            />
          </div>

          <div className="cat-tabs" role="tablist" aria-label="Service categories">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={c === category}
                className={c === category ? "cat-tab active" : "cat-tab"}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="empty-state">No services found. Try a different search.</p>
          ) : (
            <div className="sc-grid">
              {filtered.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
