import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import { aboutMe, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="The person behind the pipelines"
          subtitle="A quick introduction to my background, how I work, and what I'm building toward."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3" delay={0.05}>
            <div className="space-y-5">
              {aboutMe.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.15}>
            <div className="glass rounded-2xl border border-border p-6">
              <h3 className="font-display text-lg font-semibold">Strengths</h3>
              <ul className="mt-4 space-y-3">
                {aboutMe.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-muted">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.1 + i * 0.08}>
              <div className="rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="font-display text-3xl font-bold gradient-text sm:text-4xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-xs font-medium text-muted sm:text-sm">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
