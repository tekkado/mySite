import { skills } from "../content/skills";
import Section, { type SectionProps } from "./Section";

export default function Skills(props: SectionProps) {
  return (
    <Section {...props}>
      <dl className="divide-y divide-line">
        {skills.map((group) => (
          <div
            key={group.label}
            className="grid gap-1 py-4 first:pt-0 sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-4"
          >
            <dt className="text-sm font-medium">{group.label}</dt>
            <dd className="text-muted">{group.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
