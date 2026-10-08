import { profile } from "../content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex gap-5">
          {profile.links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer" className="link">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="link">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
