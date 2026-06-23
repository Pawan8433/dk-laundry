import { WHY } from "../data/business.js";
import Icon from "./Icon.jsx";

export default function WhyChooseUs() {
  return (
    <section className="section" id="why">
      <div className="container">
        <header className="section-head reveal">
          <span className="kicker">The DK difference</span>
          <h2>Why choose DK Laundry</h2>
          <p>Four decades of trust, built one clean garment at a time.</p>
        </header>

        <div className="why-grid">
          {WHY.map((w) => (
            <article className="why-card reveal" key={w.title}>
              <span className="why-ic"><Icon name={w.icon} /></span>
              <div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
