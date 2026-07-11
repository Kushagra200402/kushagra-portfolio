import { GraduationCap, MapPin, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {education.map((ed, i) => (
            <Reveal key={ed.degree} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary-2/15 text-primary">
                  <GraduationCap size={20} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold leading-snug">
                  {ed.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">{ed.institution}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {ed.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {ed.location}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted">{ed.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
