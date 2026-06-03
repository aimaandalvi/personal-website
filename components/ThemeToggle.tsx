"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

const themes: { value: Theme; label: string; icon: typeof Moon }[] = [
  { value: "dark", label: "Dark", icon: Moon },
  { value: "light", label: "Light", icon: Sun },
  { value: "system", label: "System", icon: Monitor },
];

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    setTheme(storedTheme ?? "dark");
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = theme === "dark" || (theme === "system" && prefersDark);

    root.classList.toggle("dark", shouldUseDark);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const currentThemeIndex = themes.findIndex((item) => item.value === theme);
  const nextTheme = themes[(currentThemeIndex + 1) % themes.length];
  const Icon = themes[currentThemeIndex]?.icon ?? Moon;

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme.value)}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300/70 bg-white/70 text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-500 hover:text-zinc-950 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300 dark:hover:border-white/25 dark:hover:text-white"
      aria-label={`Switch appearance to ${nextTheme.label}`}
      title={`Appearance: ${themes[currentThemeIndex]?.label ?? "Dark"}`}
    >
      <Icon aria-hidden="true" size={17} />
    </button>
  );
}
