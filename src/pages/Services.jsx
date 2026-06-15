import PageHero from "../components/common/PageHero";
import ServiceCard from "../components/services/ServiceCard";
import { servicesData } from "../data/servicesData";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Services() {
  return (
    <main className="bg-[#FAFAFE]">
      <PageHero
        tag="Services"
        title="What I"
        highlight="Offer"
        subtitle="From full-stack web development to GoHighLevel automation and eBay dropshipping — complete digital solutions under one roof."
      />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="relative bg-gradient-brand rounded-3xl p-10 md:p-12 text-center overflow-hidden shadow-button">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Sparkles className="text-white" size={24} />
            </div>

            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3 text-white">
              Need a Custom Solution?
            </h3>

            <p className="text-[#EDE9FE] font-body text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Every project is unique. Let&apos;s discuss your specific
              requirements and craft a tailored approach.
            </p>

            <Link
              to="/contact"
              className="group bg-white text-[#3B82F6] hover:text-[#1E293B] font-semibold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 text-sm"
            >
              Get a Free Quote
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
