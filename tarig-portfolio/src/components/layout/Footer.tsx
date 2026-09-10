import { socials } from "@/data/socials";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display font-semibold text-ink">Tarig Yaegab</p>
          <p className="text-sm text-ink-muted">Software Engineer</p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          {socials
            .filter((s) => s.icon !== "email")
            .map((s, i) => (
              <li key={s.label} className="flex items-center gap-5">
                <a href={s.href} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-accent transition-colors">
                  {s.label}
                </a>
                {i < socials.length - 2 && <span className="text-line select-none">|</span>}
              </li>
            ))}
        </ul>

        <p className="text-xs text-ink-faint">© {year} Tarig Yaegab. All rights reserved.</p>
      </div>
    </footer>
  );
}
