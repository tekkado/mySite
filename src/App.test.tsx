import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import { NAV_SECTIONS, SECTIONS } from "./sections";

describe("App", () => {
  it("renders every registered section with a matching heading", () => {
    render(<App />);
    for (const { id, title } of SECTIONS) {
      const section = document.getElementById(id);
      expect(section, `section #${id}`).toBeInTheDocument();
      expect(within(section!).getByRole("heading", { level: 2, name: title })).toBeInTheDocument();
    }
  });

  it("links every nav item to a section that exists", () => {
    render(<App />);
    const nav = screen.getByRole("navigation");
    for (const { id, title } of NAV_SECTIONS) {
      expect(within(nav).getByRole("link", { name: title })).toHaveAttribute("href", `#${id}`);
      expect(document.getElementById(id)).toBeInTheDocument();
    }
  });

  it("uses unique section ids", () => {
    const ids = SECTIONS.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
