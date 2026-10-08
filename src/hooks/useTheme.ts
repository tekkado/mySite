import { useCallback, useState } from "react";
import { THEME_STORAGE_KEY } from "../config";

export type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  // Suspend transitions for one frame so every colour flips together instead of
  // elements with `transition-colors` fading in after the background has changed.
  root.classList.add("theme-switching");
  root.classList.toggle("dark", theme === "dark");
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("theme-switching")));
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );

  const toggle = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }, [theme]);

  return { theme, toggle };
}
