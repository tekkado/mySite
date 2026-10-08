import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "../content/projects";
import Projects from "./Projects";

describe("Projects", () => {
  it("links finished projects and leaves in-progress ones unlinked", () => {
    render(<Projects id="projects" title="Projects" />);
    for (const project of projects) {
      const link = screen.queryByRole("link", { name: new RegExp(project.title) });
      if (project.href) expect(link).toHaveAttribute("href", project.href);
      else expect(link).not.toBeInTheDocument();
    }
    expect(screen.getAllByText("In progress")).toHaveLength(projects.filter((p) => p.inProgress).length);
  });
});
