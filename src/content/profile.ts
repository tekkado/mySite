export type Link = { label: string; href: string };

export const profile = {
  name: "Shams Minal Rahman",
  role: "Software Engineer II at Homebase",
  location: "Toronto, Canada",
  tagline:
    "I build AI agents and the product surfaces around them — from the canvas a user drags shifts across, to the eval harness that proves the agent actually did its job.",
  email: "minal3601@gmail.com",
  resumeUrl: "/resume.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/tekkado" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shamsminalrahman/" },
  ] satisfies Link[],
  about: [
    "I'm a full-stack engineer who likes working where product and infrastructure meet. At Homebase I helped ship Schedule Builder Agent, an AI scheduling assistant now live across 500+ locations, and spend a lot of my time on the less glamorous parts that make agents trustworthy: evals, observability, and cost.",
    "Before that I broke a monolith into AWS services at Candoor, and spent over a year at BMO raising test coverage and automating away manual translation work. I studied Computer Science at York University.",
    "I care about fast interfaces, honest metrics, and leaving codebases easier to build on than I found them.",
  ],
};
