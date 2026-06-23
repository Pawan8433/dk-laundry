import { STEPS } from "../data/business.js";

export default function HowItWorks() {
  return (
    <section className="section section-tint" id="how">
      <div className="container">
        <header className="section-head reveal">
          <span className="kicker">Simple &amp; effortless</span>
          <h2>How it works</h2>
          <p>Five easy steps from pickup to fresh, folded delivery.</p>
        </header>

        <ol className="timeline">
          {STEPS.map((s, i) => (
            <li className="timeline-step reveal" key={s.title}>
              <span className="timeline-num">{i + 1}</span>
              <div className="timeline-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
