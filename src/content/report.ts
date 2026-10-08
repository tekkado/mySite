import type { Job } from "./experience";
import type { Project } from "./projects";

export type RunSummary = { passed: number; skipped: number; suites: number };

type Run = { jobs: Job[]; projects: Project[]; facts: string[] };

/**
 * The hero's "N passed · N skipped" line, counted from the same content the page renders.
 * Suites: each job, each project, and About (when it has facts).
 */
export function summarize({ jobs, projects, facts }: Run): RunSummary {
  const skipped = projects.filter((p) => p.inProgress).length;
  const highlights = jobs.reduce((sum, job) => sum + job.highlights.length, 0);
  return {
    passed: highlights + (projects.length - skipped) + facts.length,
    skipped,
    suites: jobs.length + projects.length + (facts.length > 0 ? 1 : 0),
  };
}
