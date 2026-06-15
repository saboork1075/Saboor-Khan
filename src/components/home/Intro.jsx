import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Intro() {
  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3B82F6]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#F59E0B]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
          {/* Left Text */}
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B82F6] uppercase tracking-wider mb-3">
              <Sparkles size={14} />
              Let&apos;s Collaborate
            </span>

            <h2 className="font-heading font-bold text-[#111827] text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl">
              Ready to automate & scale your business?
            </h2>
            <p className="text-[#64748B] text-sm md:text-base mt-3 font-body max-w-lg">
              Let's streamline your operations with CRM setup, workflow
              automation, and AI-powered solutions — tailored for agencies and
              growing businesses.
            </p>
          </div>

          {/* Right CTA */}
          <div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#1E293B] text-white font-semibold px-7 py-4 rounded-xl transition-all duration-300 whitespace-nowrap shadow-button hover:shadow-button-hover hover:scale-105 active:scale-95 text-sm"
            >
              Get In Touch
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
