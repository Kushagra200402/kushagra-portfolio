import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications & training"
          subtitle="Formal training and assessments I've completed."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.08}>
              <a
                href={cert.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary-2/15 text-primary">
                    <Award size={20} />
                  </div>
                  <ExternalLink size={15} className="mt-1 text-muted transition-colors group-hover:text-primary" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold leading-snug">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">{cert.issuer}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {cert.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-border pt-3 text-xs text-muted">
                  <span>{cert.date}</span>
                  {cert.credentialId && (
                    <span className="flex items-center gap-1">
                      <ShieldCheck size={12} /> {cert.credentialId}
                    </span>
                  )}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
