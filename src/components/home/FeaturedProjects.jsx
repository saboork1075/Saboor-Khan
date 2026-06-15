import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projectsData } from "../../data/projectsData";
import SectionHeading from "../common/SectionHeading";

export default function FeaturedProjects() {
  const featured = projectsData.slice(0, 2);

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading
            tag="My Work"
            title="Featured"
            highlight="Projects"
            subtitle="A selection of my best work across web development and digital solutions."
          />
          <Link
            to="/projects"
            className="btn-outline flex items-center gap-2 whitespace-nowrap self-start md:self-auto mb-4"
          >
            All Projects <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover group"
            >
              {/* Image / Placeholder */}
              <div
                className={`h-52 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
              >
                <span className="text-7xl opacity-30">{project.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <span className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                  {project.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-[#0F172A] text-xl mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 font-body">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="bg-blue-50 text-primary text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-colors"
                    >
                      {/* <Github size={14} /> */}
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
