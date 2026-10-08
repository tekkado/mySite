export type Role = { title: string; period: string };

/** One line in a job's report. `result` is the headline number, shown beside the sentence. */
export type Check = { text: string; result?: string };

export type Job = {
  company: string;
  roles: Role[];
  stack: string[];
  highlights: Check[];
};

export const experience: Job[] = [
  {
    company: "Homebase",
    roles: [
      { title: "Software Engineer II", period: "Sept 2026 – Present" },
      { title: "Software Engineer", period: "May 2025 – Aug 2026" },
    ],
    stack: ["React", "TypeScript", "Ruby on Rails", "Redux", "PostgreSQL"],
    highlights: [
      {
        text: "Built the interactive canvas and APIs for Schedule Builder Agent, an AI assistant that builds staff schedules.",
        result: "500+ locations",
      },
      {
        text: "Built and owned a synthetic data agent, from proof of concept to internal tool. It drives the web app through concurrent multi-step workflows to generate production-like data for evaluating Homebase Assistant.",
        result: "10+ workflows",
      },
      {
        text: "Built an eval harness that checks agent runs against real app data. It caught failures the agent had reported as successes.",
        result: "95% verified",
      },
      {
        text: "Added LLM observability for token cost, latency, and run time, which backed the decision on whether the agent was affordable.",
        result: "−76% cost per task",
      },
      {
        text: "Wrote a scheduled worker that downgrades inactive users on a paid third-party tool.",
        result: "~$20K/month saved",
      },
      {
        text: "Shipped an LLM ticket-writing tool across engineering and moved my team to spec-driven development.",
        result: "117 engineers",
      },
      {
        text: "Moved Schedule Builder's Rails API off Grape, which removed auth conflicts and fixed broken-access-control bugs.",
        result: "3 vulnerabilities fixed",
      },
      {
        text: "Rebuilt drag-and-drop as a shared provider and reusable hooks, which unblocked AI feature work.",
        result: "Used by 5 teams",
      },
      {
        text: "Refactored 9 core frontend modules into modular TypeScript.",
        result: "11s → under 1s",
      },
    ],
  },
  {
    company: "Candoor",
    roles: [{ title: "Software Engineer", period: "Oct 2024 – Mar 2025" }],
    stack: ["AWS", "SQL", "Laravel"],
    highlights: [
      { text: "Split a monolithic app into AWS services (EC2, RDS, S3).", result: "+30% reliability" },
      {
        text: "Introduced microservice and MVC patterns so features could be built in isolation.",
        result: "−30% dev time",
      },
    ],
  },
  {
    company: "Bank of Montreal",
    roles: [{ title: "Software Developer Intern", period: "Sept 2022 – Dec 2023" }],
    stack: ["Angular", "TypeScript", "Jest", "C#", ".NET"],
    highlights: [
      { text: "Wrote Jest unit tests and fixed 100+ bugs along the way.", result: "+70% coverage" },
      {
        text: "Automated CSV ↔ JSON conversion and found gaps between English and French translations.",
        result: "−50% manual work",
      },
    ],
  },
];
