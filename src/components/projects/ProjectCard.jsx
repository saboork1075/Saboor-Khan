import { ExternalLink, Code, Eye } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-[#E2E8F0] hover:shadow-card-hover group h-full flex flex-col transition-all duration-500 hover:-translate-y-1">
      {/* ── Image / Placeholder ── */}
      <div
        className={`h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden flex-shrink-0`}
      >
        {/* 📸 Actual Image — Agar hai to dikhao, nahi to emoji */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <span className="text-8xl opacity-20 group-hover:scale-110 group-hover:opacity-25 transition-all duration-500">
            {project.emoji}
          </span>
        )}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/60 to-transparent pointer-events-none" />

        {/* Hover Overlay */}
        {/* <div className="absolute inset-0 bg-[#1E293B]/0 group-hover:bg-[#1E293B]/20 transition-all duration-500 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/90 text-[#3B82F6] px-4 py-2 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-lg">
            <Eye size={16} />
            View Project
          </span>
        </div> */}

        {/* Category Badge (Top Right) */}
        <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg border border-white/20 z-10">
          {project.category}
        </span>

        {/* Tag Badge (Bottom Left) */}
        <span className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30 z-10">
          {project.tag}
        </span>
      </div>

      {/* ── Content ── */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-heading font-bold text-[#111827] text-xl mb-2 group-hover:text-[#3B82F6] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#64748B] text-sm leading-relaxed mb-4 font-body flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`${project.techBg} ${project.techText} text-xs px-3 py-1.5 rounded-full font-medium border ${project.techBorder} hover:bg-[#3B82F6]/10 transition-colors duration-300`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-[#E2E8F0]">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-[#3B82F6] hover:text-[#1E293B] transition-colors duration-300 group/link"
          >
            <ExternalLink
              size={14}
              className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
            Live Demo
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-300 group/link"
            >
              <Code
                size={14}
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
              />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
