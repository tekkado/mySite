import { profile } from "../content/profile";
import Section, { type SectionProps } from "./Section";

export default function About(props: SectionProps) {
  return (
    <Section {...props}>
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
