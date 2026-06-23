import Hero from "../components/Hero.jsx";
import PopularServices from "../components/PopularServices.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CTA from "../components/CTA.jsx";
import useReveal from "../hooks/useReveal.js";

export default function Home() {
  useReveal();
  return (
    <>
      <Hero />
      <PopularServices />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}
