export type Role = { title: string; period: string };

export type Job = {
  company: string;
  roles: Role[];
  stack: string[];
  highlights: string[];
};

export const experience: Job[] = [
  {
    company: "Homebase",
    roles: [
      { title: "Software Engineer II", period: "Sept 2026 — Present" },
      { title: "Software Engineer", period: "May 2025 — Aug 2026" },
    ],
    stack: ["React", "TypeScript", "Ruby on Rails", "Redux", "PostgreSQL"],
    highlights: [
      "Built the interactive canvas and supporting APIs for Schedule Builder Agent, an AI scheduling assistant live across 500+ locations.",
      "Designed a tool-calling LLM agent that drives the web app through 10+ concurrent multi-step workflows, plus an eval harness that verifies runs against real app data (95% verified success).",
      "Cut cost per task by 76% by instrumenting LLM observability for token cost, latency, and run-time metrics.",
      "Saved ~$20K/month in third-party seat costs with a scheduled worker that auto-downgrades inactive users.",
      "Reduced worst-case load times from 11s to under 1s by refactoring 9 core frontend modules into modular TypeScript.",
    ],
  },
  {
    company: "Candoor",
    roles: [{ title: "Software Engineer", period: "Oct 2024 — Mar 2025" }],
    stack: ["AWS", "SQL", "Laravel"],
    highlights: [
      "Split a monolithic application across AWS services (EC2, RDS, S3), improving system reliability by 30%.",
      "Introduced microservice and MVC patterns for a modular architecture, reducing development time by 30%.",
    ],
  },
  {
    company: "Bank of Montreal",
    roles: [{ title: "Software Developer Intern", period: "Sept 2022 — Dec 2023" }],
    stack: ["Angular", "TypeScript", "Jest", "C#", ".NET"],
    highlights: [
      "Raised test coverage by 70% with Jest and resolved 100+ bugs.",
      "Automated CSV ↔ JSON conversion and EN/FR translation-gap detection, cutting manual workload by 50%.",
    ],
  },
];
