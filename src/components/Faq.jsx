import { FAQS } from "../data/business.js";

// Accessible accordion built on native <details>/<summary> — keyboard-operable
// and screen-reader friendly with zero JS state.
export default function Faq({ tint = true }) {
  return (
    <section className={tint ? "section section-tint" : "section"} id="faq">
      <div className="container container-narrow">
        <header className="section-head reveal">
          <span className="kicker">Good to know</span>
          <h2>Frequently asked questions</h2>
          <p>Everything you need to know before your first pickup.</p>
        </header>

        <div className="faq-list">
          {FAQS.map((item) => (
            <details className="faq-item reveal" key={item.q}>
              <summary className="faq-q">
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
