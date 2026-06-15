import PageHero from "../components/common/PageHero";
import ProjectCard from "../components/projects/ProjectCard";
import { projectsData } from "../data/projectsData";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, FolderSearch } from "lucide-react";

export default function Projects() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        tag="My Work"
        title="Projects &"
        highlight="Portfolio"
        subtitle="A showcase of my GoHighLevel implementations — CRM setups, automated workflows, high‑converting funnels, and AI‑powered solutions."
      />

      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Projects Grid — No Filter, Show All */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.length > 0 ? (
            projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="w-20 h-20 bg-[#3B82F6]/8 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <FolderSearch size={36} className="text-[#3B82F6]" />
              </div>
              <p className="font-heading font-semibold text-lg text-[#111827] mb-1">
                No projects found
              </p>
              <p className="text-[#94A3B8] text-sm">
                Check back soon for new case studies.
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-20 relative bg-gradient-brand rounded-3xl p-10 md:p-12 text-center overflow-hidden shadow-button">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Sparkles className="text-white" size={24} />
            </div>

            <h3 className="font-heading font-bold text-white text-2xl md:text-3xl mb-3">
              Have an Automation Project in Mind?
            </h3>

            <p className="text-[#EFF6FF] font-body text-base mb-8 max-w-lg mx-auto leading-relaxed">
              I&apos;m always excited to tackle new challenges. Let&apos;s
              streamline your business with powerful automation.
            </p>

            <Link
              to="/contact"
              className="group bg-white text-[#3B82F6] hover:text-[#1E293B] font-semibold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 text-sm"
            >
              Start a Project
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
