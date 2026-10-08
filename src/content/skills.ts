export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "AI / LLM",
    items: ["Agents", "MCP", "Claude Agent SDK", "Evals", "Token cost attribution", "Prompt & context design"],
  },
  { label: "Languages", items: ["TypeScript", "JavaScript", "Ruby", "SQL", "Java"] },
  {
    label: "Frameworks",
    items: [
      "React",
      "Redux",
      "Ruby on Rails",
      "Node.js",
      "Express",
      "Angular",
      "NgRx",
      "React Native",
      "Spring Boot",
      "Jest",
    ],
  },
  { label: "Infra & data", items: ["PostgreSQL", "Redis", "AWS (EC2, RDS, S3)", "Sentry", "Datadog", "Git"] },
];
