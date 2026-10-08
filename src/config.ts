export const CONTACT_FORM = {
  endpoint: "https://getform.io/f/74ab4bb7-05af-43d2-a597-fdd637a93b81",
  // Getform discards any submission where this field is filled in.
  honeypotField: "_gotcha",
} as const;

// Must match the key read by public/theme.js before first paint.
export const THEME_STORAGE_KEY = "theme";
