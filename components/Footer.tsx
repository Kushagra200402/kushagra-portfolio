import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personalInfo } from "@/lib/data";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 sm:flex-row sm:justify-between">
        <div>
          <a href="#top" className="font-display text-lg font-bold">
            KST<span className="text-primary">.</span>
          </a>
          <p className="mt-2 max-w-xs text-sm text-muted">{personalInfo.tagline}</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-6">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-muted hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:text-primary"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:text-primary"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:text-primary"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-border px-6 pt-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
