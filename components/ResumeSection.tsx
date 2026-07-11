import { Download, FileText, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { personalInfo } from "@/lib/data";

export default function ResumeSection() {
  return (
    <section id="resume" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Resume"
          title="Take a closer look"
          subtitle="Preview the full resume inline, or download a copy."
        />

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <FileText size={16} className="text-primary" />
                {personalInfo.name} — Resume.pdf
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500">
                <ShieldCheck size={12} /> ATS-Ready
              </span>
            </div>

            <div className="aspect-[4/5] w-full bg-background sm:aspect-[16/10]">
              <object
                data={`${personalInfo.resumeUrl}#toolbar=0`}
                type="application/pdf"
                className="h-full w-full"
              >
                <div className="flex h-full items-center justify-center p-8 text-center text-sm text-muted">
                  Inline preview isn&apos;t supported in this browser — use the download
                  button below to view the resume.
                </div>
              </object>
            </div>

            <div className="flex justify-center border-t border-border px-6 py-5">
              <a
                href={personalInfo.resumeUrl}
                download
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-105 active:scale-95"
              >
                <Download size={16} /> Download Resume (PDF)
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
