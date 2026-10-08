import type { ComponentType } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import type { SectionProps } from "./components/Section";

export type SectionDef = {
  id: string;
  title: string;
  Component: ComponentType<SectionProps>;
  /** Show a link to this section in the header nav. */
  inNav: boolean;
};

/** Page order. Adding a section = one entry here + its component. */
export const SECTIONS: SectionDef[] = [
  { id: "about", title: "About", Component: About, inNav: true },
  { id: "experience", title: "Experience", Component: Experience, inNav: true },
  { id: "projects", title: "Projects", Component: Projects, inNav: true },
  { id: "skills", title: "Skills", Component: Skills, inNav: false },
  { id: "contact", title: "Contact", Component: Contact, inNav: true },
];

export const NAV_SECTIONS = SECTIONS.filter((section) => section.inNav);
