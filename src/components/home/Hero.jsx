import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import saboor from "../../assets/images/profile/saboor.jpeg";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero pt-20 pb-16 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#3B82F6]/6 rounded-full opacity-40 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#F59E0B]/5 rounded-full opacity-30 blur-3xl pointer-events-none animate-float-delayed" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[#EFF6FF]/30 rounded-full opacity-20 blur-3xl pointer-events-none animate-float" />

      {/* Dot Grid */}
      <div className="absolute right-10 bottom-20 grid grid-cols-6 gap-2 opacity-10 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"
            style={{
              animationDelay: `${i * 0.05}s`,
              animation: "pulseSoft 3s ease-in-out infinite",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 bg-[#3B82F6]/8 border border-[#3B82F6]/20 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3B82F6]" />
              </span>
              <span className="text-xs font-semibold text-[#3B82F6] tracking-wide">
                Available for Projects
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading font-bold text-4xl md:text-5xl xl:text-6xl text-[#111827] leading-[1.15] mb-6">
              Hi, I&apos;m <br />
              <span className="text-gradient-brand">Saboor Khan</span>
            </h1>

            {/* Role Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-xs font-semibold bg-[#3B82F6]/8 text-[#3B82F6] px-3 py-1 rounded-full border border-[#3B82F6]/20">
                GoHighLevel Specialist
              </span>
              <span className="text-xs font-semibold bg-[#3B82F6]/8 text-[#3B82F6] px-3 py-1 rounded-full border border-[#3B82F6]/20">
                AI Automation Expert
              </span>
              <span className="text-xs font-semibold bg-[#3B82F6]/8 text-[#3B82F6] px-3 py-1 rounded-full border border-[#3B82F6]/20">
                CRM & Funnel Builder
              </span>
            </div>

            {/* Description */}
            <p className="font-body text-[#64748B] text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              I help agencies & businesses streamline operations through
              GoHighLevel CRM setup, workflow automation, funnel building, and
              AI-powered solutions. Let's scale your growth with smart
              automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#1E293B] text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-button hover:shadow-button-hover transition-all duration-300 hover:scale-105 active:scale-95"
              >
                View My Work
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-[#E2E8F0] hover:border-[#3B82F6] text-[#334155] hover:text-[#3B82F6] px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-[#3B82F6]/5"
              >
                <Sparkles size={16} />
                Hire Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#94A3B8] font-medium mr-1">
                Connect:
              </span>

              {/* LinkedIn — real URL daalein */}
              <a
                href="https://www.linkedin.com/in/saboor-khan-9527a2415/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-[#E2E8F0] rounded-xl flex items-center justify-center text-[#94A3B8] hover:text-[#3B82F6] hover:border-[#3B82F6] hover:bg-[#3B82F6]/5 transition-all duration-300 hover:scale-110 active:scale-90"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={17} />
              </a>

              {/* GitHub — real URL daalein */}

              {/* Email */}
              <button
                type="button"
                onClick={() => {
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=saboork480@email.com",
                    "_blank",
                  );
                }}
                className="w-10 h-10 border border-[#E2E8F0] rounded-xl flex items-center justify-center text-[#94A3B8] hover:text-[#3B82F6] hover:border-[#3B82F6] hover:bg-[#3B82F6]/5 transition-all duration-300 hover:scale-110 active:scale-90"
                aria-label="Send Email via Gmail"
              >
                <MdEmail size={17} />
              </button>
            </div>
          </div>

          {/* Right — Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#3B82F6]/20 via-[#EFF6FF]/30 to-[#F59E0B]/20 opacity-60 blur-2xl animate-pulse-soft" />
              <div
                className="absolute -inset-2 rounded-full border-2 border-dashed border-[#3B82F6]/20 animate-spin"
                style={{ animationDuration: "20s" }}
              />

              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] flex items-end justify-center overflow-hidden shadow-2xl border-4 border-white">
                {/* Profile image — apni image ka path daalein */}
                <img
                  src={saboor}
                  alt="Saboor Khan"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = "none";
                    const fallback = document.createElement("div");
                    fallback.style.cssText =
                      "display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;background:linear-gradient(135deg,#F8FAFC,#EFF6FF)";
                    fallback.innerHTML = `
                      <div style="font-size:80px">🚀</div>
                      <p style="font-family:Inter,sans-serif;font-weight:700;color:#3B82F6;font-size:16px;margin-top:8px">Saboor Khan</p>
                    `;
                    e.target.parentElement.appendChild(fallback);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none" />
    </section>
  );
}
