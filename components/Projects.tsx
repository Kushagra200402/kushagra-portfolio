import { ExternalLink, Target, Lightbulb, TrendingUp, Calendar } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="Independent projects exploring applied machine learning and agentic AI."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.1}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold">{project.name}</h3>
                  <span className="flex shrink-0 items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted">
                    <Calendar size={11} /> {project.duration}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

                <div className="mt-5 space-y-3">
                  <div className="flex gap-2.5">
                    <Target size={16} className="mt-0.5 shrink-0 text-primary" />
                    <p className="text-sm text-muted">
                      <span className="font-semibold text-foreground">Problem: </span>
                      {project.problem}
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <Lightbulb size={16} className="mt-0.5 shrink-0 text-primary" />
                    <p className="text-sm text-muted">
                      <span className="font-semibold text-foreground">Solution: </span>
                      {project.solution}
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <TrendingUp size={16} className="mt-0.5 shrink-0 text-primary" />
                    <p className="text-sm text-muted">
                      <span className="font-semibold text-foreground">Result: </span>
                      {project.results}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                    Key Features
                  </p>
                  <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                    {project.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-xs text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-background border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary"
                    >
                      <GithubIcon size={15} /> View Profile
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm text-muted/60">
                      <GithubIcon size={15} /> Repo not public
                    </span>
                  )}
                  <span
                    className="flex items-center gap-1.5 text-sm text-muted/60"
                    title="Live demo placeholder — not yet deployed"
                  >
                    <ExternalLink size={15} /> Live demo (coming soon)
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
