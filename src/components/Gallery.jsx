import { GALLERY } from "../data/business.js";

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <header className="section-head reveal">
          <span className="kicker">Our work</span>
          <h2>Fresh, clean &amp; perfectly pressed</h2>
        </header>

        <div className="gallery-grid">
          {GALLERY.map((g, i) => (
            <figure className={`gallery-item reveal g${i % 3}`} key={g.src}>
              <img
                src={g.src}
                alt={g.alt}
                width="600"
                height="450"
                loading="lazy"
                decoding="async"
                onError={(e) => e.currentTarget.closest(".gallery-item").classList.add("img-fallback")}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
