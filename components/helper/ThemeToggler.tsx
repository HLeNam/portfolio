"use client";

import { useEffect, useState } from "react";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // Avoid hydration mismatch by ensuring we only render the toggle on the client
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!mounted) {
    // Hidden placeholder to avoid layout shift
    return <div className="w-10 h-10" aria-hidden="true" />;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className={cn(
        "group relative inline-flex items-center justify-center w-10 h-10 cursor-pointer",
        "rounded-xl bg-gray-100 dark:bg-gray-800",
        "hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600",
        "transition-all duration-300 ease-in-out active:scale-90 shadow-sm",
      )}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun Icon: Renders when dark mode is active to switch back to light */}
        <SunIcon
          className={cn(
            "absolute transition-all duration-500 transform text-yellow-500 size-6",
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0",
          )}
        />
        {/* Moon Icon: Renders when light mode is active to switch to dark */}
        <MoonIcon
          className={cn(
            "absolute transition-all duration-500 transform text-gray-700 dark:text-gray-300 size-6",
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100",
          )}
        />
      </div>
    </button>
  );
};
