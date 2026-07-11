# Kushagra Singh Tiwari — Portfolio Website

A modern, responsive, ATS-friendly, recruiter-focused personal portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

All content is sourced from Kushagra's resume and certificates — nothing is fabricated. A few items (profile photo, project screenshots, live demo links) are clearly-marked placeholders, since those weren't available; see [Placeholders](#placeholders--things-to-replace) below.

---

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-first theme config, dark/light mode via `next-themes`)
- **Framer Motion** — scroll reveals, hero animation, animated counters, typing effect
- **lucide-react** — icon set (brand icons for GitHub/LinkedIn are custom inline SVGs — lucide dropped brand icons)
- **react-hook-form** — contact form validation
- **Formspree** — contact form backend (no custom server needed)

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, SEO metadata, Open Graph, theme provider
│   ├── page.tsx            # Assembles all sections
│   ├── globals.css         # Tailwind v4 theme tokens, dark mode, animations
│   ├── sitemap.ts          # Dynamic sitemap.xml
│   ├── robots.ts           # Dynamic robots.txt
│   └── loading.tsx         # Route loading animation
├── components/
│   ├── Navbar.tsx, Hero.tsx, About.tsx, Skills.tsx, Experience.tsx,
│   │   Projects.tsx, Certifications.tsx, Education.tsx, ResumeSection.tsx,
│   │   Contact.tsx, Footer.tsx        # Page sections
│   ├── ThemeProvider.tsx, ThemeToggle.tsx   # Dark/light mode
│   ├── ScrollProgress.tsx, BackToTop.tsx     # Scroll UX
│   ├── TypingText.tsx, AnimatedCounter.tsx, Reveal.tsx  # Animation helpers
│   ├── SectionHeading.tsx             # Shared section header
│   ├── BrandIcons.tsx                 # Custom GitHub/LinkedIn SVG icons
│   └── GoogleAnalytics.tsx            # GA placeholder (inactive until configured)
├── lib/
│   └── data.ts              # ALL resume content lives here — edit this file to update content
├── public/
│   ├── documents/            # Resume PDF + certificate PDFs
│   ├── images/               # OG image, avatar placeholder
│   └── favicon.svg
└── .env.local.example        # Copy to .env.local and fill in
```

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Configuration

Copy the example env file and fill in your own values:

```bash
cp .env.local.example .env.local
```

| Variable | Required? | Purpose |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Yes, for the contact form to work | Get a free form ID at formspree.io. Create a form, copy the ID from the endpoint URL (`https://formspree.io/f/YOUR_ID`), and paste just the ID here. |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics Measurement ID (e.g. `G-XXXXXXXXXX`). Leave blank to disable analytics entirely. |

Without `NEXT_PUBLIC_FORMSPREE_ID`, the contact form will show a small note that it isn't wired up yet — everything else on the site works regardless.

## Editing Content

Everything text-based — name, summary, skills, experience, projects, certifications, education — lives in **`lib/data.ts`**. Edit that one file to update the site; no need to touch component code for content changes.

## Placeholders & Things to Replace

The prompt that generated this site explicitly asked for clearly-marked placeholders rather than invented content. Here's what's still a placeholder:

1. **Profile photo** — `public/images/avatar-placeholder.svg` (a monogram) is used in the Hero section instead of a real photo. Replace the file and update `personalInfo.avatarUrl` in `lib/data.ts` once you have a photo you like.
2. **Project GitHub links** — both projects link to your GitHub profile (`github.com/Kushagra200402`) rather than a specific repo, since no per-project repo URLs were provided. Update `githubUrl` in the `projects` array in `lib/data.ts` once those repos are public.
3. **Live demo links** — both project cards show "Live demo (coming soon)" since no deployed demos exist yet. Update `liveUrl` in `lib/data.ts` if you deploy either project.
4. **Open Graph / social preview image** — `public/images/og-image.svg` is a generated placeholder graphic, not a designed image. Swap it for a custom-designed 1200×630 image for better link previews.
5. **Site URL** — `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` is set to a placeholder Vercel URL. Update all three once you have your real domain.

## Deployment

### Vercel (recommended — zero config)

1. Push this project to a GitHub repo.
2. Import the repo at vercel.com/new.
3. Add your environment variables (`NEXT_PUBLIC_FORMSPREE_ID`, optionally `NEXT_PUBLIC_GA_ID`) in Project Settings → Environment Variables.
4. Deploy. Vercel auto-detects Next.js — no build config needed.

### Netlify

1. Push to GitHub.
2. Import at app.netlify.com/start.
3. Install the Netlify Next.js Runtime (auto-detected for most setups).
4. Build command: `npm run build`. Publish directory: handled automatically by the Next.js runtime plugin.
5. Add the same environment variables as above in Site Settings → Environment Variables.

### GitHub Pages

GitHub Pages only serves static files, and this project uses a couple of dynamic-friendly features (the `sitemap.ts` / `robots.ts` route handlers, and a PDF `object` embed that works best server-rendered). If you specifically want GitHub Pages:

1. Add `output: "export"` to `next.config.ts`.
2. Replace `app/sitemap.ts` / `app/robots.ts` with static files in `public/sitemap.xml` and `public/robots.txt`, since dynamic route handlers aren't supported in static export.
3. Run `npm run build`, then deploy the generated `out/` folder via the `gh-pages` package or a GitHub Actions workflow.

**Vercel is strongly recommended** — this project was built with zero-config Vercel deployment in mind.

## Accessibility & Performance

- Semantic landmarks (`header`, `main`, `footer`, `nav`)
- Visible focus states via Tailwind's default ring utilities plus custom focus rings on form inputs
- `prefers-reduced-motion` respected — all animations are disabled for users who request it (see `globals.css`)
- Placeholder graphics use SVG (crisp at any size, tiny file size)
- Static generation for all routes (`○ Static` in the build output) — fast TTFB with no server compute needed at runtime

## License

Personal project — feel free to fork the structure for your own portfolio, but please swap out the personal content in `lib/data.ts` first.
