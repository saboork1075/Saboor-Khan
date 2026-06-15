import { useState } from "react";
import { Send, CheckCircle, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ EmailJS — Live Keys
    emailjs
      .send(
        "service_b580k7s",
        "template_krnkxtt",
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        "fj17o9lcjZ7eOuBLy",
      )
      .then(() => {
        setLoading(false);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setLoading(false);
        alert("Something went wrong. Please try again.");
      });
  };

  // Success State
  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-card border border-[#E2E8F0] flex flex-col items-center justify-center text-center gap-4 animate-scale-in">
        <div className="relative">
          <div className="w-20 h-20 bg-[#3B82F6]/10 rounded-full flex items-center justify-center">
            <CheckCircle className="text-[#3B82F6]" size={40} />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-[#3B82F6]/30 animate-ping" />
        </div>

        <h3 className="font-heading font-bold text-[#111827] text-xl mt-2">
          Message Sent!
        </h3>

        <p className="text-[#64748B] text-sm max-w-xs">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>

        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", message: "" });
          }}
          className="mt-2 bg-[#3B82F6] hover:bg-[#1E293B] text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-button hover:shadow-button-hover"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  // Form State
  return (
    <div className="bg-white rounded-2xl p-8 shadow-card border border-[#E2E8F0]">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles size={18} className="text-[#3B82F6]" />
        <h3 className="font-heading font-bold text-[#111827] text-xl">
          Send a Message
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Saboor Khan"
            className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#111827] placeholder:text-[#94A3B8] outline-none focus:border-[#3B82F6] focus:ring-4 focus:ring-[#3B82F6]/10 transition-all duration-300 bg-[#F8FAFC]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111827] mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#111827] placeholder:text-[#94A3B8] outline-none focus:border-[#3B82F6] focus:ring-4 focus:ring-[#3B82F6]/10 transition-all duration-300 bg-[#F8FAFC]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111827] mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#111827] placeholder:text-[#94A3B8] outline-none focus:border-[#3B82F6] focus:ring-4 focus:ring-[#3B82F6]/10 transition-all duration-300 bg-[#F8FAFC] resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#3B82F6] hover:bg-[#1E293B] text-white font-semibold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-button hover:shadow-button-hover disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            <>
              Send Message <Send size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
