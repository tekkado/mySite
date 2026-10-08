import portrait from "../assets/pfp.jpg";
import { experience } from "../content/experience";
import { profile } from "../content/profile";
import { projects } from "../content/projects";
import { summarize } from "../content/report";
import { useCountUp } from "../hooks/useCountUp";

const run = summarize({ jobs: experience, projects, facts: profile.facts });

export default function Hero() {
  const passed = useCountUp(run.passed);
  const skipped = useCountUp(run.skipped);
  const suites = useCountUp(run.suites);
  return (
    <section id="top" className="grid items-center gap-10 py-16 sm:py-24 md:grid-cols-[1fr_auto]">
      <div>
        <p className="font-mono text-sm text-muted">
          <span aria-hidden>$ </span>eval run --candidate shams-minal-rahman
        </p>
        <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="mt-3 text-muted">
          {profile.role} · {profile.location}
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">{profile.tagline}</p>
        <p className="mt-6 font-mono text-sm tabular-nums">
          <span className="sr-only">
            {run.passed} passed, {run.skipped} skipped, {run.suites} suites
          </span>
          {/* The ticking numbers are hidden from screen readers so they hear the final tally once. */}
          <span aria-hidden>
            <span className="text-pass">{passed} passed</span>
            <span className="text-muted"> · </span>
            <span className="text-skip">{skipped} skipped</span>
            <span className="text-muted"> · {suites} suites</span>
          </span>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="btn-primary">
            Get in touch
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost">
            Resume <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
      <img
        src={portrait}
        alt={`Portrait of ${profile.name}`}
        width={224}
        height={224}
        decoding="async"
        className="hidden aspect-square w-56 rounded-lg border border-line bg-line object-cover md:block"
      />
    </section>
  );
}
