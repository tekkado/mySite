import portrait from "../assets/pfp.jpg";
import { profile } from "../content/profile";

export default function Hero() {
  return (
    <section id="top" className="grid items-center gap-10 py-20 sm:py-28 md:grid-cols-[1fr_auto]">
      <div className="rise">
        <p className="text-sm text-muted">
          {profile.role} · {profile.location}
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
          Shams Minal <em className="text-accent">Rahman</em>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
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
        height={232}
        decoding="async"
        className="rise hidden aspect-[540/560] w-56 rounded-3xl bg-line object-cover shadow-sm [animation-delay:120ms] md:block"
      />
    </section>
  );
}
