import basketball from "../assets/proj1.png";
import ecommerce from "../assets/proj2.png";
import epms from "../assets/proj3.png";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  image?: string;
  /** Shows an "In progress" label. Usually paired with no `href` until it ships. */
  inProgress?: boolean;
};

export const projects: Project[] = [
  {
    title: "BiteSpot",
    description:
      "Food discovery app. Built a multi-layer cache for search, video, and location data — 40% faster loads, 65% fewer API calls — and removed scroll-based rendering that was driving up costs by 73%.",
    tags: ["React Native", "TypeScript", "Java", "Spring Boot"],
    href: "https://www.linkedin.com/company/bitespot",
  },
  {
    title: "Eliminex Pest Management",
    description: "Contracted to design and build the marketing site for a licensed pest-control company.",
    tags: ["Web design", "Client work"],
    href: "https://eliminexpm.com/",
    image: epms,
  },
  {
    title: "Digital E-Commerce Platform",
    description: "A group project recreating the core of Amazon: catalog, search, cart, and accounts.",
    tags: ["Full-stack", "Team project"],
    href: "https://github.com/tekkado/onlineStoreProject",
    image: ecommerce,
  },
  {
    title: "Predictive Basketball Tool",
    description: "A tool that predicts basketball game outcomes.",
    tags: [],
    image: basketball,
    inProgress: true,
  },
];
