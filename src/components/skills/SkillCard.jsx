export default function SkillCard({ skill }) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 group hover:-translate-y-1 h-full flex flex-col">
      {/* Top: Icon + Experience */}
      <div className="flex items-center justify-between mb-5">
        {/* Icon Container */}
        <div
          className={`w-14 h-14 ${skill.iconBg} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
        >
          {skill.icon}
        </div>

        {/* Experience Badge */}
        <span className="bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-bold px-4 py-1.5 rounded-full border border-[#3B82F6]/20">
          {skill.experience}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-heading font-bold text-[#111827] text-xl mb-1 group-hover:text-[#3B82F6] transition-colors duration-300">
        {skill.title}
      </h3>

      {/* Type / Company */}
      <p className="text-sm text-[#94A3B8] mb-5 font-medium">{skill.type}</p>

      {/* Progress Bar */}
      <div className="w-full bg-[#E2E8F0] rounded-full h-2.5 mb-3 overflow-hidden">
        <div
          className={`${skill.progressBg} h-2.5 rounded-full transition-all duration-1000 ease-out relative`}
          style={{ width: `${skill.level}%` }}
        >
          {/* Progress Glow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md" />
        </div>
      </div>

      {/* Percentage */}
      <p className="text-xs text-[#94A3B8] mb-5 font-medium text-right">
        {skill.level}% Proficiency
      </p>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {skill.skills.map((s) => (
          <span
            key={s}
            className={`${skill.tagBg} border ${skill.tagBorder} ${skill.tagText} text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-[#3B82F6]/10 transition-colors duration-300`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
