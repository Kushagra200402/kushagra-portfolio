import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { personalInfo } from "@/lib/data";

const siteUrl = "https://kushagra-portfolio.vercel.app"; // placeholder — update after deployment

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalInfo.name} — ${personalInfo.role}`,
    template: `%s — ${personalInfo.name}`,
  },
  description: personalInfo.tagline,
  keywords: [
    "Kushagra Singh Tiwari",
    "Data Engineer",
    "Python Developer",
    "ETL Pipelines",
    "PySpark",
    "Databricks",
    "SQL",
    "Data Engineering Portfolio",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.github }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${personalInfo.name} — ${personalInfo.role}`,
    description: personalInfo.tagline,
    siteName: `${personalInfo.name} | Portfolio`,
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} — ${personalInfo.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — ${personalInfo.role}`,
    description: personalInfo.tagline,
    images: ["/images/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
