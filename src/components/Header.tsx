import { profile } from "../content/profile";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";
import { NAV_SECTIONS } from "../sections";

const NAV_IDS = NAV_SECTIONS.map((section) => section.id);

export default function Header() {
  const active = useActiveSection(NAV_IDS);
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-4 px-6">
        <a href="#top" className="flex h-14 items-center font-semibold tracking-tight sm:h-16">
          {profile.name.split(" ").slice(-2).join(" ")}
        </a>

        {/* Below `sm` the nav wraps onto its own full-width row: one equal column per link, so it never overflows. */}
        <nav className="order-last -mx-6 w-[calc(100%+3rem)] border-t border-line/60 px-3 py-1.5 text-[13px] sm:order-none sm:mx-0 sm:ml-auto sm:w-auto sm:border-0 sm:p-0 sm:text-sm">
          <ul className="grid auto-cols-fr grid-flow-col gap-1 sm:flex sm:items-center sm:gap-2">
            {NAV_SECTIONS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className="flex h-10 items-center justify-center whitespace-nowrap rounded-md px-1 text-muted transition-colors hover:text-fg aria-[current]:bg-fg/5 aria-[current]:text-fg sm:h-auto sm:px-3 sm:py-1.5"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 text-sm">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 text-muted hover:text-fg sm:hidden"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-fg/5 hover:text-fg"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
    </svg>
  );
}
