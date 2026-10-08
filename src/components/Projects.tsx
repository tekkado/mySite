import { projects, type Project } from "../content/projects";
import Section, { type SectionProps } from "./Section";

const skipped = projects.filter((p) => p.inProgress).length;

export default function Projects(props: SectionProps) {
  return (
    <Section {...props} meta={`${projects.length - skipped} passed · ${skipped} skipped`}>
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.title} className={project.image ? "" : "sm:col-span-2"}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const card = "flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface";
  const body = (
    <>
      {project.image && (
        <div className="aspect-[16/10] overflow-hidden border-b border-line">
          <img src={project.image} alt="" loading="lazy" className="size-full object-cover object-top" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs">
          {project.inProgress ? (
            <span className="text-skip">
              ○ skipped · <span>In progress</span>
            </span>
          ) : (
            <span className="text-pass">✓ shipped</span>
          )}
        </p>
        <h3 className="mt-2 text-lg font-semibold underline-offset-4 group-hover:underline">
          {project.title}
          {project.href && (
            <span aria-hidden className="ml-1.5 text-muted">
              ↗
            </span>
          )}
        </h3>
        <p className="mt-2 flex-1 leading-relaxed text-muted">{project.description}</p>
        {project.tags.length > 0 && <p className="mono-list mt-4">{project.tags.join(" · ")}</p>}
      </div>
    </>
  );

  if (!project.href) return <div className={card}>{body}</div>;

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={`${card} group transition-colors hover:border-fg/40`}
    >
      {body}
    </a>
  );
}
