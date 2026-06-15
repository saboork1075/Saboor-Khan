import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicesData } from "../../data/servicesData";
import SectionHeading from "../common/SectionHeading";

export default function ServicesPreview() {
  const preview = servicesData.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading
            tag="What I Do"
            title="Services I"
            highlight="Offer"
            subtitle="From web development to CRM automation — I deliver end-to-end digital solutions."
          />
          <Link
            to="/services"
            className="btn-outline flex items-center gap-2 whitespace-nowrap self-start md:self-auto mb-4"
          >
            All Services <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {preview.map((service) => (
            <div
              key={service.id}
              className={`bg-gradient-to-br ${service.color} border ${service.border} rounded-2xl p-7 card-hover cursor-default`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <span className="text-xs text-primary font-semibold bg-white/60 px-3 py-1 rounded-full mb-3 inline-block">
                {service.subtitle}
              </span>
              <h3 className="font-heading font-bold text-[#0F172A] text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-body">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
