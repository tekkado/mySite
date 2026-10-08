import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { THEME_STORAGE_KEY } from "../config";
import { useTheme } from "./useTheme";

describe("useTheme", () => {
  it("starts from the class applied by public/theme.js", () => {
    document.documentElement.classList.add("dark");
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("dark");
  });

  it("toggles the root class and remembers the choice", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("light");

    act(() => result.current.toggle());
    expect(result.current.theme).toBe("dark");
    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");

    act(() => result.current.toggle());
    expect(document.documentElement).not.toHaveClass("dark");
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
  });
});
