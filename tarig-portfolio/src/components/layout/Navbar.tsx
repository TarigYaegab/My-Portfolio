import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <a href="#home" className="font-display font-semibold text-ink tracking-tight">
          Tarig<span className="text-accent">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-ink-muted hover:text-ink transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <button
            className="md:hidden grid place-items-center h-9 w-9 rounded-md border border-line text-ink"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-bg">
          <ul className="flex flex-col px-5 py-4 gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-ink-muted hover:text-ink transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
