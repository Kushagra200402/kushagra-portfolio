import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="inline-block rounded-full border border-border bg-surface px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-muted">{subtitle}</p>
      )}
    </Reveal>
  );
}
