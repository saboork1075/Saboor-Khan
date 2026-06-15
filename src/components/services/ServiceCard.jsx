export default function ServiceCard({ service }) {
  return (
    <div
      className={`bg-gradient-to-br ${service.color} border ${service.border} rounded-2xl p-7 transition-all duration-500 cursor-default h-full flex flex-col group hover:shadow-card-hover hover:border-[#3B82F6]/30 hover:-translate-y-1 relative overflow-hidden`}
    >
      {/* Top Accent Border */}
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl ${service.accentBar} transition-all duration-300 group-hover:h-[4px]`}
      />

      {/* Subtitle Badge */}
      <span
        className={`text-xs font-semibold ${service.tagBg || "bg-[#3B82F6]/10"} ${
          service.tagText || "text-[#3B82F6]"
        } px-3 py-1 rounded-full mb-4 inline-block w-fit border ${
          service.tagBorder || "border-[#3B82F6]/20"
        } mt-3`}
      >
        {service.subtitle}
      </span>

      {/* Title */}
      <h3 className="font-heading font-bold text-[#111827] text-xl mb-3 group-hover:text-[#3B82F6] transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[#334155] text-sm leading-relaxed font-body flex-1">
        {service.description}
      </p>

      {/* Bottom Accent Line */}
      <div className="mt-5 h-0.5 w-0 group-hover:w-full bg-[#3B82F6]/40 rounded-full transition-all duration-500" />
    </div>
  );
}
