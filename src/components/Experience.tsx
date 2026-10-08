import { experience } from "../content/experience";
import CheckRow from "./CheckRow";
import Section, { type SectionProps } from "./Section";

const totalChecks = experience.reduce((sum, job) => sum + job.highlights.length, 0);

export default function Experience(props: SectionProps) {
  return (
    <Section {...props} meta={`${experience.length} suites · ${totalChecks} passed`}>
      <ol className="space-y-14">
        {experience.map((job) => (
          <li key={job.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg font-semibold">{job.company}</h3>
              <p className="font-mono text-xs text-pass">{job.highlights.length} passed</p>
            </div>
            <ul className="mt-1 space-y-0.5">
              {job.roles.map((role) => (
                <li key={role.title} className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm">
                  <span>{role.title}</span>
                  <span className="tabular-nums text-muted">{role.period}</span>
                </li>
              ))}
            </ul>
            <p className="mono-list mt-2" aria-label="Tech stack">
              {job.stack.join(" · ")}
            </p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {job.highlights.map((check) => (
                <CheckRow key={check.text} result={check.result}>
                  {check.text}
                </CheckRow>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
