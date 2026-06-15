import PageHero from "../components/common/PageHero";
import SkillCard from "../components/skills/SkillCard";
import { skillsData } from "../data/skillsData";

export default function Skills() {
  return (
    <main className="bg-[#F8FAFC]">
      {/* ── Hero ── */}
      <PageHero
        tag="Skills"
        title="My"
        highlight="Expertise"
        subtitle="Specialized skills focused on GoHighLevel automation, CRM systems, and AI‑powered business solutions."
      />

      {/* ── Skills Grid ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>
    </main>
  );
}
