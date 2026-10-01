"use client";

import { useState } from "react";

export default function ThemeToggle({ initialDark }: { initialDark: boolean }) {
  const [dark, setDark] = useState(initialDark);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.cookie = `theme=${next ? "dark" : "light"}; path=/; max-age=31536000; SameSite=Lax`;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label="Toggle dark mode"
      className="ml-4 rounded-full border border-black/10 px-4 py-1 text-sm transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
    >
      {dark ? "Light mode" : "Dark mode"}
    </button>
  );
}
