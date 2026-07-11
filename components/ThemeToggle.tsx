"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- standard hydration-safe mount check for next-themes
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9 rounded-full border border-border" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-transform hover:scale-105 active:scale-95"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
