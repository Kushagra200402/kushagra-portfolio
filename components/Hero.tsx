"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import TypingText from "./TypingText";
import { personalInfo } from "@/lib/data";

const ROLES = ["Data Engineer", "Python Developer", "ETL Pipeline Builder", "Agentic AI Explorer"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-primary-2/30 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-blob animation-delay-4000" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted">
            <Sparkles size={13} className="text-primary" />
            Available for new opportunities
          </span>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
          </h1>

          <div className="mt-3 h-10 font-display text-xl font-semibold text-muted sm:text-2xl">
            <TypingText words={ROLES} className="gradient-text" />
          </div>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {personalInfo.tagline} Based in {personalInfo.location}, currently building
            production data pipelines at Splash Business Intelligence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-105 active:scale-95"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface"
            >
              <Mail size={16} /> Get In Touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-surface hover:text-primary"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-surface hover:text-primary"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-surface hover:text-primary"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden md:block"
        >
          <div className="relative h-80 w-80 lg:h-96 lg:w-96">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary via-primary-2 to-accent opacity-20 blur-2xl" />
            <div className="glass relative flex h-full w-full items-center justify-center rounded-[2.5rem] border border-border">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-2 text-5xl font-bold text-white lg:h-48 lg:w-48">
                {personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
            </div>
            <div className="glass absolute -bottom-4 -left-4 rounded-2xl border border-border px-4 py-3 text-xs">
              <p className="font-semibold text-primary">2+ yrs</p>
              <p className="text-muted">Experience</p>
            </div>
            <div className="glass absolute -right-4 -top-4 rounded-2xl border border-border px-4 py-3 text-xs">
              <p className="font-semibold text-primary">17 clients</p>
              <p className="text-muted">In production</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
