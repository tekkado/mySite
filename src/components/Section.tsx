import type { ReactNode } from "react";

export type SectionProps = { id: string; title: string };

type Props = SectionProps & {
  /** Short run-style tally shown opposite the title, e.g. "13 passed". */
  meta?: ReactNode;
  children: ReactNode;
};

export default function Section({ id, title, meta, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-28 border-t border-line py-16 sm:scroll-mt-20 sm:py-20"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        {meta && <p className="font-mono text-sm text-muted">{meta}</p>}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
