import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import SkillCard from "../components/skills/SkillCard";
import { skillsData } from "../data/skillsData";
import { GraduationCap, Sparkles } from "lucide-react";
import saboor from "../../assets/images/profilesaboor.jpeg";

const experience = [
  {
    role: "GoHighLevel AI/Automation & CRM Specialist",
    company: "DEV AND DONE",
    period: "3 Years",
    icon: "🎯",
    description:
      "Built complete CRM systems, AI-powered automation workflows, high-converting funnels, and lead generation systems for agencies and businesses worldwide.",
  },
];

const infoItems = [
  { label: "Name", value: "Saboor Khan" },
  { label: "Degree", value: "BS Computer Science" },
  { label: "Graduation", value: "2021 - 2025" },
  { label: "Location", value: "Multan, Pakistan 🇵🇰" },
  { label: "Availability", value: "Open to Work ✅" },
  { label: "Experience", value: "3+ Years" },
];

export default function About() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        tag="About Me"
        title="Who I"
        highlight="Am"
        subtitle="A dedicated GoHighLevel specialist from Multan, Pakistan with 3+ years of hands-on experience building CRM systems, automations, and AI solutions for businesses."
      />

      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#3B82F6]/20 via-[#EFF6FF]/30 to-[#F59E0B]/20 rounded-3xl opacity-60 blur-2xl" />
              <div className="relative w-72 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={saboor}
                  alt="Saboor Khan"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = "none";
                    const fallback = document.createElement("div");
                    fallback.style.cssText =
                      "display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;background:linear-gradient(135deg,#F8FAFC,#EFF6FF)";
                    fallback.innerHTML = `
                      <div style="font-size:80px">🚀</div>
                      <p style="font-family:Inter,sans-serif;font-weight:700;color:#3B82F6;font-size:18px;margin-top:8px">Saboor Khan</p>
                    `;
                    e.target.parentElement.appendChild(fallback);
                  }}
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-white rounded-2xl shadow-card px-4 py-2.5 border border-[#E2E8F0] animate-float-delayed">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-[#3B82F6]">
                  <Sparkles size={14} />
                  3+ Years
                </span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <span className="inline-flex items-center gap-2 bg-[#3B82F6]/8 text-[#3B82F6] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#3B82F6]/20 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
              About Me
            </span>

            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#111827] mb-5 leading-tight">
              Saboor <span className="text-gradient-brand">Khan</span>
            </h2>

            <p className="text-[#64748B] font-body text-base leading-relaxed mb-5">
              My primary focus is GoHighLevel: CRM setup, workflow automation,
              AI-powered solutions, funnel building, and A2P 10DLC compliance. I
              help agencies and businesses turn their GHL account into a
              powerful, automated revenue engine.
            </p>
            <p className="text-[#64748B] font-body text-base leading-relaxed mb-5">
              Whether you need a complete CRM overhaul, automated follow-up
              sequences, or AI chatbots, I deliver systems that work for you
              24/7. Your business deserves streamlined operations, and I make
              that happen.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-3.5 border border-[#E2E8F0] shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <p className="text-xs text-[#94A3B8] font-medium mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-[#111827]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <SectionHeading tag="Education" title="My" highlight="Education" />
          <div className="bg-[#3B82F6]/3 border border-[#E2E8F0] rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-card-hover transition-all duration-300">
            <div className="w-16 h-16 bg-[#3B82F6] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-button">
              <GraduationCap className="text-white" size={28} />
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-bold text-[#111827] text-xl mb-1">
                Bachelor of Computer Science
              </h3>
              <p className="text-[#3B82F6] font-semibold text-sm mb-2">
                2021 – 2025 | Bahauddin Zakariya University
              </p>
              <p className="text-[#64748B] text-sm font-body leading-relaxed">
                Studying core computer science principles including data
                structures, algorithms, software engineering, databases, and
                modern web technologies.
              </p>
            </div>
            <div className="bg-[#3B82F6] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-button whitespace-nowrap animate-pulse-soft">
              In Progress 📚
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <SectionHeading
            tag="Expertise"
            title="Core"
            highlight="Skills"
            subtitle="Years of real-world experience in each domain."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {skillsData.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <SectionHeading
            tag="Experience"
            title="Work"
            highlight="Experience"
            subtitle="Real projects, real impact — focused on GoHighLevel mastery."
          />
          <div className="flex flex-col gap-5 mt-10">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col md:flex-row gap-5 group hover:-translate-y-0.5"
              >
                <div className="w-14 h-14 bg-[#3B82F6]/8 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#3B82F6]/15 transition-colors duration-300">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-heading font-bold text-[#111827] text-lg group-hover:text-[#3B82F6] transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-[#3B82F6] font-semibold text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="bg-[#3B82F6]/8 text-[#3B82F6] text-xs font-bold px-4 py-1.5 rounded-full self-start md:self-center whitespace-nowrap border border-[#3B82F6]/20">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[#64748B] text-sm leading-relaxed font-body">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
