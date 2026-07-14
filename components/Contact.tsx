"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { personalInfo } from "@/lib/data";

// Replace with your own Formspree form ID: https://formspree.io/forms
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ID
    ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
    : "https://formspree.io/f/YOUR_FORM_ID"; // placeholder — see README

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: undefined },
  ];

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Have a role, a project, or just want to say hi? Reach out below."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2" delay={0.05}>
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/40">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary-2/15 text-primary">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}

              <div className="flex gap-3 pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-surface hover:text-primary"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-surface hover:text-primary"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.15}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  {...register("name", { required: "Please enter your name" })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none ring-primary/40 transition focus:ring-2"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                  })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none ring-primary/40 transition focus:ring-2"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Please add a short message" })}
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none ring-primary/40 transition focus:ring-2"
                  placeholder="Let's talk about..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-70"
              >
                {status === "loading" && <Loader2 size={16} className="animate-spin" />}
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-emerald-500">
                  <CheckCircle2 size={16} /> Thanks — your message has been sent!
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-500">
                  <AlertCircle size={16} /> Something went wrong. Please email directly instead.
                </p>
              )}
              {!process.env.NEXT_PUBLIC_FORMSPREE_ID && (
                <p className="text-xs text-muted">
                  Note: this form needs a Formspree form ID to go live — see README.md.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
