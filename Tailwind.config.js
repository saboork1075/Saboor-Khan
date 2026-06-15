/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 🎨 Professional Blue-Navy-Orange Palette
      colors: {
        // Background & Surfaces
        "bg-frost": "#F8FAFC", // Main page background (light slate)
        surface: "#FFFFFF", // Cards, navbar, sections

        // Borders & Dividers
        "border-haze": "#E2E8F0", // Subtle borders

        // Muted Elements
        "text-muted": "#64748B", // Muted text, icons, placeholders

        // Primary Actions
        primary: "#3B82F6", // Buttons, links, highlights, active nav
        "primary-hover": "#1E293B", // Button hover, dark accents

        // Text Colors
        "text-body": "#334155", // Paragraphs, descriptions
        "text-heading": "#111827", // Headings
        "text-hero": "#111827", // Hero titles

        // Accent
        accent: "#F59E0B", // Orange accent for CTAs, highlights

        // Keep old ones for backward compatibility
        "primary-blue": "#3B82F6",
        "primary-blue-dark": "#1E293B",
        "primary-blue-light": "#EFF6FF",
        "bg-main": "#F8FAFC",
      },

      // 🔤 Typography
      fontFamily: {
        heading: ['"Inter"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },

      // ✨ Animation System
      animation: {
        // Scroll-triggered reveal animations
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-left": "fadeLeft 0.7s ease-out forwards",
        "fade-right": "fadeRight 0.7s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",

        // Hero section animations
        "hero-title": "heroTitle 0.8s ease-out forwards",
        "hero-subtitle": "heroSubtitle 0.8s ease-out 0.2s forwards",
        "hero-cta": "heroCTA 0.8s ease-out 0.4s forwards",

        // Floating & Continuous animations
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 5s ease-in-out 2s infinite",

        // Glow & Pulse
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",

        // Border animations
        "border-spin": "borderSpin 4s linear infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",

        // Gradient animations
        "gradient-shift": "gradientShift 8s ease infinite",
        shimmer: "shimmer 2s linear infinite",

        // Page transition
        "page-enter": "pageEnter 0.5s ease-out forwards",

        // Stagger children
        "stagger-1": "fadeUp 0.6s ease-out 0.1s forwards",
        "stagger-2": "fadeUp 0.6s ease-out 0.2s forwards",
        "stagger-3": "fadeUp 0.6s ease-out 0.3s forwards",
        "stagger-4": "fadeUp 0.6s ease-out 0.4s forwards",
        "stagger-5": "fadeUp 0.6s ease-out 0.5s forwards",
        "stagger-6": "fadeUp 0.6s ease-out 0.6s forwards",
      },

      // 🎬 Keyframes
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        heroTitle: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
            filter: "blur(8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        heroSubtitle: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        heroCTA: {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.4)" },
          "50%": { boxShadow: "0 0 0 16px rgba(59, 130, 246, 0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        borderSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(59, 130, 246, 0.3)" },
          "50%": { borderColor: "rgba(59, 130, 246, 0.8)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        pageEnter: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      // 🎯 Custom Utilities
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #3B82F6 0%, #1E293B 100%)",
        "gradient-brand-light":
          "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)",
        "gradient-hero":
          "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F8FAFC 100%)",
        "gradient-card-hover":
          "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(30,41,59,0.02) 100%)",
        "shimmer-gradient":
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
      },

      boxShadow: {
        card: "0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 10px 25px rgba(59, 130, 246, 0.12), 0 4px 10px rgba(0, 0, 0, 0.04)",
        button: "0 4px 14px rgba(59, 130, 246, 0.25)",
        "button-hover": "0 6px 20px rgba(59, 130, 246, 0.4)",
        navbar: "0 1px 8px rgba(0, 0, 0, 0.04)",
        "glow-brand": "0 0 24px rgba(59, 130, 246, 0.3)",
        "glow-brand-strong": "0 0 40px rgba(59, 130, 246, 0.5)",
      },

      borderRadius: {
        xl: "14px",
        "2xl": "18px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};
