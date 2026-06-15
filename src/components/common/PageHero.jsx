import Container from "./Container";

export default function PageHero({ tag, title, highlight, subtitle }) {
  return (
    <section className="relative pt-32 md:pt-36 pb-16 md:pb-20 bg-gradient-hero overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#3B82F6]/8 rounded-full opacity-40 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#F59E0B]/6 rounded-full opacity-30 blur-3xl pointer-events-none animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#EFF6FF]/30 rounded-full opacity-20 blur-3xl pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3B82F6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative z-10">
        {/* Tag Badge */}
        {tag && (
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-[#3B82F6]/8 text-[#3B82F6] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#3B82F6]/20 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-pulse-soft" />
              {tag}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-[#111827] leading-tight max-w-3xl">
          {title}{" "}
          {highlight && (
            <span className="text-gradient-brand">{highlight}</span>
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <div className="mt-6">
            <p className="text-[#64748B] font-body text-lg md:text-xl max-w-xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        )}
      </Container>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none" />
    </section>
  );
}
