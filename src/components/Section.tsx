import type { ReactNode } from "react";

export type SectionProps = { id: string; title: string };

export default function Section({ id, title, children }: SectionProps & { children: ReactNode }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-28 border-t border-line py-20 sm:scroll-mt-20 sm:py-24"
    >
      <div className="grid gap-8 md:grid-cols-[11rem_1fr] md:gap-12">
        <h2 id={`${id}-title`} className="self-start font-serif text-3xl md:sticky md:top-24">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
