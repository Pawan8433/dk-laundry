import PageHeader from "../components/PageHeader.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Gallery from "../components/Gallery.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import CTA from "../components/CTA.jsx";
import { BUSINESS, STATS } from "../data/business.js";
import useReveal from "../hooks/useReveal.js";

export default function About() {
  useReveal();
  return (
    <>
      <PageHeader
        kicker={`Since ${BUSINESS.since}`}
        title="About DK Laundry"
        subtitle={`${STATS.years}+ years of trusted fabric care in Andheri West, Mumbai.`}
        crumb="About"
      />

      <section className="section section-top">
        <div className="container about-intro">
          <div className="reveal">
            <h2>Where cleanliness meets care</h2>
            <p>
              DK Laundry &amp; Dry Cleaners has served Andheri West since {BUSINESS.since}.
              What began as a neighbourhood laundry has grown into a trusted name for
              dry cleaning, steam ironing, wash &amp; fold and shoe laundry — always with
              free doorstep pickup and delivery.
            </p>
            <p>
              We treat every garment as our own, from everyday clothes to expensive suits,
              delicate sarees and high-volume commercial linen. Our promise is simple:
              honest pricing, professional care and 100% satisfaction.
            </p>
          </div>

          <div className="about-stats reveal">
            <div className="about-stat">
              <span className="about-stat-num">{STATS.years}+</span>
              <span className="about-stat-label">Years of Service</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-num">10+</span>
              <span className="about-stat-label">Services Offered</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-num">Free</span>
              <span className="about-stat-label">Pickup & Delivery</span>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Gallery />
      <HowItWorks />
      <CTA />
    </>
  );
}
