export type Link = { label: string; href: string };

export const profile = {
  name: "Shams Minal Rahman",
  role: "Software Engineer II at Homebase",
  location: "Toronto, Canada",
  tagline:
    "Hi, I'm Minal. I've loved building things since I was a kid. Lately that means AI agents that do real work on their own.",
  email: "minal3601@gmail.com",
  resumeUrl: "/resume.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/tekkado" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shamsminalrahman/" },
  ] satisfies Link[],
  about: [
    "Ever since I was a kid, I've loved making things, from a popsicle-stick bridge for science class to mini games for my friends and me.",
    "Early on, that looked like shipping BiteSpot, a video-based food discovery app, and building a website that grew a local business's monthly revenue by about 10%. Lately it looks like a synthetic data agent at Homebase. It drives our app the way a real user would, generating production-like data to evaluate Homebase Assistant, our flagship AI feature. I owned it from proof of concept to a monitored internal tool that runs on its own, and built the evals that catch it when it says it succeeded but didn't.",
    "The projects have gotten bigger and the stakes higher, but the reason hasn't changed. I love building things that make a real difference for the people using them.",
    "Outside of software, I'm a big NBA and soccer fan, and I play with friends whenever I can.",
  ],
  facts: [
    "Based in Toronto",
    "BSc Computer Science, York University (2019 – 2024)",
    "At Homebase since May 2025, promoted to Software Engineer II in Sept 2026",
    "NBA and soccer fan",
  ],
};
