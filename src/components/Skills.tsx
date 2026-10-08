import { skills } from "../content/skills";
import Section, { type SectionProps } from "./Section";

export default function Skills(props: SectionProps) {
  return (
    <Section {...props} meta="environment">
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((group) => (
          <div key={group.label} className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-4">
            <dt className="font-mono text-sm text-muted">{group.label}</dt>
            <dd>{group.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
