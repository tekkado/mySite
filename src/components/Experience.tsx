import { experience } from "../content/experience";
import Section, { type SectionProps } from "./Section";

export default function Experience(props: SectionProps) {
  return (
    <Section {...props}>
      <ol className="space-y-14">
        {experience.map((job) => (
          <li key={job.company}>
            <h3 className="text-xl font-semibold">{job.company}</h3>
            <ul className="mt-2 space-y-1">
              {job.roles.map((role) => (
                <li key={role.title} className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm">
                  <span>{role.title}</span>
                  <span className="tabular-nums text-muted">{role.period}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-2.5 text-muted">
              {job.highlights.map((item) => (
                <li
                  key={item}
                  className="relative pl-5 leading-relaxed before:absolute before:left-0 before:top-[calc(0.5lh-0.5px)] before:h-px before:w-2.5 before:bg-muted/60"
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
              {job.stack.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
