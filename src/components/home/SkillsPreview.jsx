import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { skillsData } from "../../data/skillsData";
import SectionHeading from "../common/SectionHeading";

export default function SkillsPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading
            tag="My Expertise"
            title="Core"
            highlight="Skills"
            subtitle="Years of hands-on experience across multiple domains."
          />
          <Link
            to="/about"
            className="btn-outline flex items-center gap-2 whitespace-nowrap self-start md:self-auto mb-4"
          >
            About Me <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-7 card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{skill.icon}</span>
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                  {skill.experience}
                </span>
              </div>
              <h3 className="font-heading font-bold text-[#0F172A] text-lg mb-1">
                {skill.title}
              </h3>
              <p className="text-xs text-slate-400 mb-4 font-medium">
                {skill.type}
              </p>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 rounded-full h-1.5 mb-4">
                <div
                  className="bg-gradient-to-r from-primary to-indigo-500 h-1.5 rounded-full transition-all"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.skills.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="bg-white border border-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-lg font-medium shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
