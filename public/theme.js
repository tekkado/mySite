// Storage key must match THEME_STORAGE_KEY in src/config.ts.
// Apply the saved or system theme before first paint to avoid a flash.
// Kept as a separate file (not inline) so the Content-Security-Policy can forbid inline scripts.
try {
  var saved = localStorage.getItem("theme");
  var dark = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.classList.toggle("dark", dark);
} catch {
  // Storage unavailable (private mode): fall back to the light default.
}
