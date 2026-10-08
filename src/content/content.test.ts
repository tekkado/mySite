import { describe, expect, it } from "vitest";
import { experience } from "./experience";
import { profile } from "./profile";
import { projects } from "./projects";
import { skills } from "./skills";

const unique = (values: string[]) => new Set(values).size === values.length;

describe("site content", () => {
  it("uses https for every external link", () => {
    const hrefs = [...profile.links.map((l) => l.href), ...projects.flatMap((p) => (p.href ? [p.href] : []))];
    for (const href of hrefs) expect(href).toMatch(/^https:\/\//);
  });

  it("has unique titles where they are used as React keys", () => {
    expect(unique(projects.map((p) => p.title))).toBe(true);
    expect(unique(experience.map((j) => j.company))).toBe(true);
    expect(unique(skills.map((g) => g.label))).toBe(true);
    for (const job of experience) {
      expect(unique(job.roles.map((r) => r.title))).toBe(true);
      expect(unique(job.highlights.map((h) => h.text))).toBe(true);
    }
  });

  it("gives every job at least one role and highlight", () => {
    for (const job of experience) {
      expect(job.roles.length).toBeGreaterThan(0);
      expect(job.highlights.length).toBeGreaterThan(0);
    }
  });
});
