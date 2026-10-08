import { describe, expect, it } from "vitest";
import type { Job } from "./experience";
import type { Project } from "./projects";
import { summarize } from "./report";

const job = (company: string, checks: number): Job => ({
  company,
  roles: [{ title: "Engineer", period: "2024" }],
  stack: [],
  highlights: Array.from({ length: checks }, (_, i) => ({ text: `${company} check ${i}` })),
});

const project = (title: string, inProgress = false): Project => ({ title, description: "", tags: [], inProgress });

describe("summarize", () => {
  it("passes highlights, finished projects and facts, and skips in-progress projects", () => {
    const jobs = [job("A", 2), job("B", 1)];
    const projects = [project("Done"), project("Also done"), project("WIP", true)];
    const facts = ["Toronto", "York"];
    expect(summarize({ jobs, projects, facts })).toEqual({ passed: 7, skipped: 1, suites: 6 });
  });

  it("does not count About as a suite when it has no facts", () => {
    expect(summarize({ jobs: [job("A", 1)], projects: [], facts: [] })).toEqual({
      passed: 1,
      skipped: 0,
      suites: 1,
    });
  });

  it("reports an empty run as all zeros", () => {
    expect(summarize({ jobs: [], projects: [], facts: [] })).toEqual({ passed: 0, skipped: 0, suites: 0 });
  });
});
