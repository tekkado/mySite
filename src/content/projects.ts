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
      "A food discovery app. I built a multi-layer cache for search, video, and location data that cut load times 40% and API calls 65%. Removing scroll-based rendering cut company costs 73%. Shaped releases from 3,500+ beta impressions.",
    tags: ["React Native", "TypeScript", "Java", "Spring Boot"],
    href: "https://www.linkedin.com/company/bitespot",
  },
  {
    title: "Eliminex Pest Management",
    description:
      "Client work: I designed and built the marketing site for a licensed pest-control company. It grew their monthly revenue by about 10%.",
    tags: ["Web design", "Client work"],
    href: "https://eliminexpm.com/",
    image: epms,
  },
  {
    title: "Digital E-Commerce Platform",
    description: "A team project that rebuilt the core of an online store: catalog, search, cart, and accounts.",
    tags: ["Full-stack", "Team project"],
    href: "https://github.com/tekkado/onlineStoreProject",
    image: ecommerce,
  },
  {
    title: "Predictive Basketball Tool",
    description: "Predicts the outcome of basketball games. Still being built.",
    tags: [],
    image: basketball,
    inProgress: true,
  },
];
