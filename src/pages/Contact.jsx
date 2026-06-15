import PageHero from "../components/common/PageHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function Contact() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        tag="Contact"
        title="Get In"
        highlight="Touch"
        subtitle="Need a CRM overhaul, automation setup, or funnel strategy? Let's connect and streamline your business operations."
      />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div>
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </section>
    </main>
  );
}
