import {
  Code2,
  Database,
  Layers,
  Cloud,
  HardDrive,
  GitBranch,
  Sparkles,
  FileCode2,
  BarChart3,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skills } from "@/lib/data";

const ICONS: Record<string, React.ElementType> = {
  "Programming Languages": Code2,
  "ETL & Data Engineering": Layers,
  "Big Data": HardDrive,
  "Data Warehousing & Cloud": Cloud,
  "Databases & File Formats": Database,
  "DevOps & Version Control": GitBranch,
  "AI / GenAI": Sparkles,
  "Python Libraries": FileCode2,
  "Visualization & Tools": BarChart3,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="A categorized breakdown of the languages, frameworks, and tools behind my data engineering work."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = ICONS[group.category] ?? Code2;
            return (
              <Reveal key={group.category} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary-2/15 text-primary transition-transform group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-base font-semibold">{group.category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted transition-colors group-hover:border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
