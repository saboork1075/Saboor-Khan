import { Link } from "react-router-dom";
import { ArrowUp, Sparkles } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/saboor-khan-9527a2415/",
    icon: FaLinkedin,
  },

  {
    name: "Email",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=saboork480@gmail.com",
    icon: MdEmail,
    isEmail: true,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1E293B] text-white mt-20">
      {/* Scroll to Top Button */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-[#3B82F6] hover:bg-[#1E293B] text-white rounded-full flex items-center justify-center shadow-button hover:shadow-button-hover transition-all duration-300 hover:scale-110 active:scale-90 border-4 border-[#F8FAFC] group"
          aria-label="Scroll to top"
        >
          <ArrowUp
            size={20}
            className="group-hover:-translate-y-0.5 transition-transform duration-300"
          />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 text-center md:text-left">
          {/* Brand */}
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-[#3B82F6]/30">
              <span className="text-white font-heading font-bold text-lg">
                SK
              </span>
            </div>
            <div>
              <p className="font-heading font-semibold text-white text-sm">
                Saboor Khan
              </p>
              <p className="text-xs text-[#94A3B8]">GHL Specialist</p>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="hidden md:flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div> */}

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-white/8 hover:bg-[#3B82F6] text-[#94A3B8] hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90 hover:shadow-glow-brand backdrop-blur-sm"
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-white/8 text-center text-xs text-[#94A3B8] leading-6">
          <p>© {new Date().getFullYear()} Saboor Khan. All rights reserved.</p>
        </div>
      </div>

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent" />

      {/* Subtle Orange Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-60" />
    </footer>
  );
}
