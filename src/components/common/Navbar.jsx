import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", emoji: "🏠" },
  { name: "About", path: "/about", emoji: "👤" },
  { name: "Services", path: "/services", emoji: "⚡" },
  { name: "Projects", path: "/projects", emoji: "📂" },
  { name: "Contact", path: "/contact", emoji: "✉️" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-navbar border-b border-[#E2E8F0]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center shadow-button group-hover:shadow-button-hover transition-all duration-300 group-hover:scale-105">
            <span className="text-white font-heading font-bold text-lg">
              SK
            </span>
          </div>
          <span className="font-heading font-bold text-[#111827] text-lg hidden sm:block group-hover:text-[#3B82F6] transition-colors duration-300">
            Saboor Khan
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive: linkActive }) =>
                  `relative font-body text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    active
                      ? "text-[#3B82F6] bg-[#3B82F6]/8"
                      : "text-[#334155] hover:text-[#3B82F6] hover:bg-[#3B82F6]/6"
                  }`
                }
              >
                {({ isActive: linkActive }) => (
                  <>
                    {link.name}
                    {/* Animated Underline for Active Link */}
                    {
                      active
                      // <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#3B82F6] rounded-full animate-scale-in" />
                    }
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Hire Me Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 text-sm bg-[#3B82F6] hover:bg-[#1E293B] text-white px-5 py-2.5 rounded-xl font-medium shadow-button hover:shadow-button-hover transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
          >
            <Sparkles size={16} className="animate-pulse-soft" />
            Hire Me
            {/* Shimmer Effect */}
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-xl text-[#334155] hover:bg-[#3B82F6]/10 transition-all duration-300 active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-[#E2E8F0] px-6 py-4 flex flex-col gap-1.5 shadow-lg">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={`font-body text-sm font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                  active
                    ? "text-[#3B82F6] bg-[#3B82F6]/8 border-l-2 border-[#3B82F6]"
                    : "text-[#334155] hover:text-[#3B82F6] hover:bg-[#3B82F6]/6"
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.emoji} {link.name}
                </span>
              </NavLink>
            );
          })}

          <Link
            to="/contact"
            className="text-center text-sm bg-[#3B82F6] hover:bg-[#1E293B] text-white px-5 py-3 rounded-xl font-medium shadow-button hover:shadow-button-hover transition-all duration-300 mt-3 flex items-center justify-center gap-2"
          >
            <Sparkles size={16} />
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
