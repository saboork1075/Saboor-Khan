import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F0F4F4] pt-20 relative overflow-hidden">
      {/* ── Decorative Blobs ── */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#2E6B6E]/8 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#0D3438]/6 rounded-full blur-3xl pointer-events-none animate-float-delayed" />

      {/* ── Content ── */}
      <div className="text-center max-w-md px-6 relative z-10">
        {/* 404 Number */}
        <h1 className="font-heading font-bold text-[120px] md:text-[160px] leading-none text-gradient-teal mb-2 animate-float">
          404
        </h1>

        {/* Search Icon */}
        <div className="w-20 h-20 bg-white rounded-2xl shadow-card border border-[#D6E4E4] flex items-center justify-center mx-auto -mt-10 mb-6 relative z-10">
          <span className="text-3xl">🔍</span>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#0D3438] mb-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-[#0D3438]/70 font-body text-base mb-8 leading-relaxed">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved or deleted.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 bg-[#2E6B6E] hover:bg-[#0D3438] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-button hover:shadow-button-hover hover:scale-105 active:scale-95 text-sm"
          >
            <Home size={16} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border border-[#D6E4E4] hover:border-[#2E6B6E] text-[#0D3438] hover:text-[#2E6B6E] font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-[#2E6B6E]/5 text-sm"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
