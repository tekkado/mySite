import { projects, type Project } from "../content/projects";
import Section, { type SectionProps } from "./Section";

export default function Projects(props: SectionProps) {
  return (
    <Section {...props}>
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
  const card = "flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface";
  const body = (
    <>
      {project.image && (
        <div className="aspect-[16/10] overflow-hidden border-b border-line">
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="flex items-start justify-between gap-4 text-lg font-semibold">
          {project.title}
          {project.inProgress && <span className="tag shrink-0 whitespace-nowrap font-normal">In progress</span>}
          {project.href && (
            <span
              aria-hidden
              className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            >
              ↗
            </span>
          )}
        </h3>
        <p className="mt-2 flex-1 leading-relaxed text-muted">{project.description}</p>
        {project.tags.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );

  if (!project.href) return <div className={card}>{body}</div>;

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={`${card} group transition-colors hover:border-fg/30`}
    >
      {body}
    </a>
  );
}
