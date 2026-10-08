import { profile } from "../content/profile";
import CheckRow from "./CheckRow";
import Section, { type SectionProps } from "./Section";

export default function About(props: SectionProps) {
  return (
    <Section {...props} meta="readme">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <ul className="mt-8 max-w-2xl divide-y divide-line border-y border-line">
        {profile.facts.map((fact) => (
          <CheckRow key={fact}>{fact}</CheckRow>
        ))}
      </ul>
    </Section>
  );
}
