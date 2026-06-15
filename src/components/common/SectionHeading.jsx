export default function SectionHeading({
  tag,
  title,
  highlight,
  subtitle,
  center = false,
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
      {/* Tag Badge */}
      {tag && (
        <span className="inline-flex items-center gap-2 bg-[#3B82F6]/8 text-[#3B82F6] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-[#3B82F6]/20 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-pulse-soft" />
          {tag}
        </span>
      )}

      {/* Title */}
      <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#111827] leading-tight">
        {title}{" "}
        {highlight && (
          <span className="relative inline-block">
            <span className="text-gradient-brand">{highlight}</span>
            <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#3B82F6]/20 rounded-full -z-10" />
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-5 text-[#64748B] font-body text-base md:text-lg max-w-2xl leading-relaxed ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative Divider */}
      {center && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="w-8 h-px bg-[#E2E8F0]" />
          <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
          <span className="w-8 h-px bg-[#E2E8F0]" />
        </div>
      )}
    </div>
  );
}
