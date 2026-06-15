// 🧩 ClassName Merger
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// 🎨 Deep Teal Palette — Color Constants
export const COLORS = {
  frost: "#F0F4F4",
  surface: "#FFFFFF",
  haze: "#D6E4E4",
  mist: "#B8D0D0",
  primary: "#2E6B6E",
  primaryHover: "#0D3438",
  textBody: "#0D3438",
  textMuted: "#B8D0D0",
};

// 🎬 Animation Variants (for Framer Motion ya inline styles)
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// 🔗 Social Links Generator
export const getSocialUrl = (platform, username) => {
  const urls = {
    linkedin: `https://linkedin.com/in/${username}`,
    github: `https://github.com/${username}`,
    twitter: `https://twitter.com/${username}`,
    email: `mailto:${username}`,
  };
  return urls[platform] || "#";
};

// 📅 Experience Calculator
export const getExperienceYears = (startYear) => {
  return new Date().getFullYear() - startYear;
};

// ✨ Random Gradient Generator (Teal variants)
export const getRandomTealGradient = () => {
  const gradients = [
    "from-[#2E6B6E] to-[#0D3438]",
    "from-[#0D3438] to-[#2E6B6E]",
    "from-[#2E6B6E] to-[#B8D0D0]",
    "from-[#0D3438] to-[#B8D0D0]",
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
};

// 📝 Text Truncate
export const truncate = (text, length = 100) => {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + "...";
};

// 🔄 Scroll to Top
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// 🔗 Scroll to Section
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
