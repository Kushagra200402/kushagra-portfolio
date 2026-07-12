import { Briefcase, MapPin, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="A timeline of my professional experience building data engineering systems."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.1}>
                <div className="relative flex gap-6 pl-0">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-2 text-white shadow-lg shadow-primary/30">
                    <Briefcase size={16} />
                  </div>

                  <div className="flex-1 rounded-2xl border border-border bg-surface p-6">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {job.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {job.location}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-bold">{job.role}</h3>
                    <p className="text-sm font-medium text-primary">{job.company}</p>

                    <ul className="mt-4 space-y-2.5">
                      {job.bullets.map((b, bi) => (
                        <li key={bi} className="text-sm leading-relaxed text-muted">
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-background border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
