import { MapPin, Clock, ExternalLink } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactInfo() {
  const contacts = [
    {
      icon: MdEmail,
      label: "Email",
      value: "saboork480@email.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=saboork480@email.com",
      isEmail: true,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/saboor-khan",
      href: "https://www.linkedin.com/in/saboor-khan-9527a2415/", // real LinkedIn URL daalein
    },

    {
      icon: MapPin,
      label: "Location",
      value: "Multan, Pakistan (Remote Worldwide)",
      href: null,
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: null,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* CTA Card */}
      <div className="bg-gradient-brand rounded-2xl p-8 text-white shadow-button">
        <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center mb-4">
          <span className="text-xl">💬</span>
        </div>

        <h3 className="font-heading font-bold text-xl mb-2">
          Let&apos;s Work Together
        </h3>

        <p className="text-[#EFF6FF] text-sm leading-relaxed font-body">
          I&apos;m always open to discussing new projects, automation ideas, or
          opportunities to streamline your business operations.
        </p>

        <div className="flex gap-1.5 mt-5">
          <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
          <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          <span className="w-1.5 h-1.5 bg-white/80 rounded-full" />
        </div>
      </div>

      {/* Contact Items */}
      {contacts.map((c) => {
        const Icon = c.icon;
        return (
          <div
            key={c.label}
            className="flex items-center gap-4 bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-card hover:shadow-card-hover hover:border-[#3B82F6]/30 transition-all duration-300 group"
          >
            <div className="w-11 h-11 bg-[#3B82F6]/8 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#3B82F6]/15 transition-colors duration-300">
              <Icon size={18} className="text-[#3B82F6]" />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-[#94A3B8] font-medium mb-0.5">
                {c.label}
              </p>

              {c.isEmail ? (
                /* ✅ Email — New Tab Mein Gmail */
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-[#111827] hover:text-[#3B82F6] transition-colors duration-300 truncate block"
                >
                  {c.value}
                </a>
              ) : c.href ? (
                /* LinkedIn, GitHub — New Tab */
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-[#111827] hover:text-[#3B82F6] transition-colors duration-300 truncate block"
                >
                  {c.value}
                </a>
              ) : (
                /* Location, Response Time — No Link */
                <p className="text-sm font-semibold text-[#111827] truncate">
                  {c.value}
                </p>
              )}
            </div>

            {/* External Link Icon */}
            {c.href && !c.isEmail && (
              <ExternalLink
                size={14}
                className="text-[#94A3B8] group-hover:text-[#3B82F6] transition-colors duration-300 ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
