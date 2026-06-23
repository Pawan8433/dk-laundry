import PageHeader from "../components/PageHeader.jsx";
import ContactSection from "../components/Contact.jsx";
import useReveal from "../hooks/useReveal.js";

export default function Contact() {
  useReveal();
  return (
    <>
      <PageHeader
        kicker="Visit or call us"
        title="Get in touch"
        subtitle="Free pickup & delivery across Andheri West and nearby areas."
        crumb="Contact"
      />
      <ContactSection showHeader={false} />
    </>
  );
}
